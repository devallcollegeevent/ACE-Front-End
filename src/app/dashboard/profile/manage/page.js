"use client";

import { useState } from "react";
import styles from "./Manage.module.css";
import {
  FACEBOOKICON,
  INSTAGRAMICON,
  LINKEDINICON,
  TELEGRAMICON,
  XICON,
  YOUTUBEICON,
} from "../../../../const-value/config-icons/page";
import { MSG_EMAIL_VERIFY_SUCCESS ,TITLE_MANAGE_PAGE} from "../../../../const-value/config-message/page";

export default function ManagePage() {
  const [mode, setMode] = useState("view");
  const [coverImage, setCoverImage] = useState(null);

  const [socialLinks, setSocialLinks] = useState({
    linkedin: "https://www.linkedin.com",
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    youtube: "https://www.youtube.com",
    telegram: "https://t.me",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setCoverImage(URL.createObjectURL(file));
  };

  const handleChange = (key, value) => {
    setSocialLinks((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>{TITLE_MANAGE_PAGE}</h2>
        <img
          src="/images/Pen.png"
          alt="edit"
          className={styles.editIcon}
          onClick={() => setMode("edit")}
        />
      </div>

      {/* VIEW MODE */}
      {mode === "view" && (
        <div className={styles.viewBox}>
          {[
            ["LinkedIn", LINKEDINICON, socialLinks.linkedin],
            ["Instagram", INSTAGRAMICON, socialLinks.instagram],
            ["Facebook", FACEBOOKICON, socialLinks.facebook],
            ["X (Twitter)", XICON, socialLinks.twitter],
            ["YouTube", YOUTUBEICON, socialLinks.youtube],
            ["Telegram", TELEGRAMICON, socialLinks.telegram],
          ].map(([label, icon, value]) => (
            <div key={label} className={styles.item}>
              <span>{icon}</span>
              <div>
                <h4>{label}</h4>
                <p>{value}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EDIT MODE */}
      {mode === "edit" && (
        <div className={styles.editBox}>
          <div
            className={styles.uploadBox}
            onClick={() => document.getElementById("coverUpload")?.click()}
          >
            {!coverImage && <p>Upload Cover Image</p>}
            {coverImage && (
              <img src={coverImage} alt="cover" className={styles.previewImg} />
            )}
            <input
              id="coverUpload"
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </div>

          <div className={styles.grid}>
            {Object.keys(socialLinks).map((key) => (
              <div key={key}>
                <label>{key}</label>
                <input
                  value={socialLinks[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className={styles.btnRow}>
            <button
              className={styles.cancelBtn}
              onClick={() => setMode("view")}
            >
              Cancel
            </button>

            <button
              className={styles.saveBtn}
              onClick={() => setMode(MSG_EMAIL_VERIFY_SUCCESS)}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* SUCCESS */}
      {mode === MSG_EMAIL_VERIFY_SUCCESS && (
        <div className={styles.successBox}>Successfully Updated!!</div>
      )}
    </div>
  );
}
