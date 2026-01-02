"use client";

import { useEffect, useState } from "react";
import styles from "./EventDetails.module.css";
import CalendarModal from "../../../../../components/global/CalendarModal/CalendarModal";
import {
  getEventCategoriesApi,
  getEventTypesApi,
} from "../../../../../lib/api/event.api";

export default function EventDetails({
  data,
  setData,
  onBack,
  onNext,
  resetSignal,
}) {
  const [mode, setMode] = useState("online");
  const [showCalendar, setShowCalendar] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [eventTypes, setEventTypes] = useState([]);
  /* ================= RESET ON SUCCESS ================= */
  useEffect(() => {
    setMode("online");
    setTagInput("");
    setEventTypes([]);
    setShowCalendar(false);

    setData({
      title: "",
      category: "",
      eventType: "",
      tags: [],
      about: "",
      mode: "online",
      calendar: [],
      country: "",
      state: "",
      city: "",
      mapLink: "",
      meetLink: "",
      offers: "",
    });
  }, [resetSignal]);

  /* ================= LOAD CATEGORIES ================= */
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await getEventCategoriesApi();
        console.log("CATEGORIES ===>", res);
        if (res?.success) {
          setCategories(res.data);
        }
      } catch (err) {
        console.error("Category fetch failed", err);
      }
    }

    loadCategories();
  }, []);

  /* ================= LOAD EVENT TYPES (ON CATEGORY CHANGE) ================= */
  useEffect(() => {
    if (!data.category) return;

    async function loadEventTypes() {
      try {
        console.log("bbbbbbbbbbbbbbb", data);
        const res = await getEventTypesApi(data.category);
        console.log("EVENT TYPES ===>", res);
        if (res?.success) {
          setEventTypes(res.data);
        }
      } catch (err) {
        console.error("Event type fetch failed", err);
      }
    }

    loadEventTypes();
  }, [data.category]);

  const addTag = () => {
    if (!tagInput.trim()) return;
    setData({ ...data, tags: [...(data.tags || []), tagInput] });
    setTagInput("");
  };

  const removeTag = (t) => {
    setData({ ...data, tags: data.tags.filter((x) => x !== t) });
  };

  return (
    <>
      {/* PRIMARY DETAILS */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Primary Details</h3>

        <div className={styles.grid3}>
          <div className={styles.field}>
            <label>
              Event Title <span>*</span>
            </label>
            <input
              className={styles.input}
              placeholder="Enter event title"
              value={data.title || ""}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className={styles.field}>
            <label>
              Category <span>*</span>
            </label>
            <select
              className={styles.input}
              value={data.category || ""}
              onChange={(e) =>
                setData({
                  ...data,
                  category: e.target.value,
                  eventType: "",
                })
              }
            >
              <option value="">Select Category</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.categoryName}
                </option>
              ))}
            </select>
          </div>

          {/* EVENT TYPE */}
          <div className={styles.field}>
            <label>
              Event Type <span>*</span>
            </label>
            <select
              className={styles.input}
              value={data.eventType || ""}
              disabled={!data.category}
              onChange={(e) => setData({ ...data, eventType: e.target.value })}
            >
              <option value="">Select Event Type</option>
              {eventTypes.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.grid3}>
          <div className={styles.field}>
            <label>
              Tags <span>*</span>
            </label>
            <div className={styles.tagRow}>
              <input
                className={styles.input}
                placeholder="#tags"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
              />
              <button className={styles.btnSmall} onClick={addTag}>
                Add
              </button>
            </div>

            <div className={styles.tagList}>
              {(data.tags || []).map((t, index) => (
                <span key={`${t}-${index}`} className={styles.tag}>
                  {t}
                  <button onClick={() => removeTag(t)}>×</button>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.field}>
            <label>Offers</label>
            <input
              className={styles.input}
              placeholder="Enter offers"
              value={data.offers || ""}
              onChange={(e) => setData({ ...data, offers: e.target.value })}
            />
          </div>
        </div>

        <div className={styles.field}>
          <label>
            About Event <span>*</span>
          </label>
          <textarea
            className={styles.textarea}
            placeholder="About the event"
            value={data.about || ""}
            onChange={(e) => setData({ ...data, about: e.target.value })}
          />
        </div>
      </div>

      {/* CALENDAR */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>Calendar *</h3>
          <button
            className={styles.btnPrimary}
            onClick={() => setShowCalendar(true)}
          >
            + Add
          </button>
        </div>
        {data.calendar?.length > 0 ? (
          <div className={styles.calendarPreview}>
            {data.calendar.map((c, i) => (
              <div key={i}>
                {c.date} | {c.startTime} – {c.endTime}
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.muted}>
            Nothing scheduled – create a calendar to organize your events.
          </p>
        )}
      </div>

      {/* EVENT MODE – SAME UI AS OLD */}
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Event Mode</h3>

        <div className={styles.modeSwitch}>
          {["online", "offline", "hybrid"].map((m) => (
            <button
              key={m}
              className={`${styles.modeBtn} ${mode === m ? styles.active : ""}`}
              onClick={() => setMode(m)}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        {(mode === "online" || mode === "hybrid") && (
          <div className={styles.field}>
            <label>
              Online Meet Link <span>*</span>
            </label>
            <input
              className={styles.input}
              placeholder="Enter meet link"
              value={data.meetLink || ""}
              onChange={(e) => setData({ ...data, meetLink: e.target.value })}
            />
          </div>
        )}

        {(mode === "offline" || mode === "hybrid") && (
          <>
            <div className={styles.grid3}>
              <div className={styles.field}>
                <label>
                  Country <span>*</span>
                </label>
                <select className={styles.input}>
                  <option>Select Country</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>
                  State <span>*</span>
                </label>
                <select className={styles.input}>
                  <option>Select State</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>
                  District <span>*</span>
                </label>
                <select className={styles.input}>
                  <option>Select District</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label>
                Google Map Link <span>*</span>
              </label>
              <input
                className={styles.input}
                placeholder="Enter map link"
                value={data.mapLink || ""}
                onChange={(e) => setData({ ...data, mapLink: e.target.value })}
              />
            </div>
          </>
        )}
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
        <button className={styles.btnOutline} onClick={onBack}>
          Back
        </button>
        <button className={styles.btnPrimary} onClick={onNext}>
          Next
        </button>
      </div>

      {showCalendar && (
        <CalendarModal
          onClose={() => setShowCalendar(false)}
          onSave={(rows) => {
            setData({
              ...data,
              calendar: rows, // STORE IN PARENT
            });
            setShowCalendar(false);
          }}
        />
      )}
    </>
  );
}
