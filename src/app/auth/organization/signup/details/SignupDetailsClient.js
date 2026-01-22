"use client";

import "../../auth-common.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import {
  LABEL_ORG_STEP_CATEGORY,
  LABEL_ORG_STEP_DETAILS,
  LABEL_ORG_STEP_ACCOUNT,
  SUBTITLE_ORG_DETAILS,
  BTN_CONTINUE,
  LABEL_ORG_COUNTRY,
  LABEL_ORG_STATE,
  LABEL_ORG_CITY,
  LABEL_ORG_NAME,
  LABEL_ORG_SELECT_COUNTRY,
  LABEL_ORG_SELECT_STATE,
  LABEL_ORG_SELECT_CITY,
  LABEL_LOADING,
  LABEL_LOADING_STATES,
  LABEL_LOADING_CITIES,
  MSG_ERR_FILL_ALL_FIELDS,
  MSG_ORG_SELECT_COUNTRY,
  MSG_ORG_SELECT_STATE,
} from "../../../../../const-value/config-message/page";

import {
  getCountries,
  getStates,
  getCities,
} from "../../../../../lib/location.api";

/**
 * SignupDetailsClient
 *
 * Client component for the "Details" step of organizer signup.
 * - Loads country/state/city lists from location API.
 * - Collects org location and name, validates required fields.
 * - Navigates to account creation step with query params on success.
 */

export default function Page() {
  const router = useRouter();
  const params = useSearchParams();
  const category = params.get("cat");

  // form fields
  const [country, setCountry] = useState("");
  const [stateName, setStateName] = useState("");
  const [city, setCity] = useState("");
  const [orgName, setOrgName] = useState("");

  // lists for selects
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // loading flags for each list (used to show appropriate placeholder)
  const [loadingCountry, setLoadingCountry] = useState(false);
  const [loadingState, setLoadingState] = useState(false);
  const [loadingCity, setLoadingCity] = useState(false);

  /* LOAD COUNTRIES ON MOUNT
     - Fetch top-level country list once when component mounts.
     - Keep UI responsive by toggling loading flag and fallback to empty list on error.
  */
  useEffect(() => {
    async function load() {
      setLoadingCountry(true);
      try {
        const data = await getCountries();
        setCountries(data || []);
      } catch (error) {
        console.error("Error loading countries:", error);
        setCountries([]);
      } finally {
        setLoadingCountry(false);
      }
    }
    load();
  }, []);

  /* LOAD STATES WHEN COUNTRY CHANGES
     - Clear dependent fields if country is unset.
     - Fetch states for selected country and populate state select.
  */
  useEffect(() => {
    if (!country) {
      setStates([]);
      setStateName("");
      return;
    }

    async function load() {
      setLoadingState(true);
      try {
        const data = await getStates(country);
        setStates(data || []);
      } catch (error) {
        console.error("Error loading states:", error);
        setStates([]);
      } finally {
        setLoadingState(false);
      }
    }
    load();
  }, [country]);

  /* LOAD CITIES WHEN STATE CHANGES
     - Clear cities if state is unset.
     - Fetch cities for selected country & state.
  */
  useEffect(() => {
    if (!stateName) {
      setCities([]);
      setCity("");
      return;
    }

    async function load() {
      setLoadingCity(true);
      try {
        const data = await getCities(country, stateName);
        setCities(data || []);
      } catch (error) {
        console.error("Error loading cities:", error);
        setCities([]);
      } finally {
        setLoadingCity(false);
      }
    }
    load();
  }, [stateName, country]);

  // Continue handler: validate required fields and navigate to account page
  function onContinue(e) {
    e.preventDefault();

    if (!country || !stateName || !city || !orgName) {
      return toast.error(MSG_ERR_FILL_ALL_FIELDS);
    }

    router.push(
      `/auth/organization/signup/account?cat=${category}&country=${country}&state=${stateName}&city=${city}&orgName=${orgName}`
    );
  }

  return (
    <div className="org-shell">
      {/* LEFT ILLUSTRATION */}
      <aside
        className="org-left"
        style={{ backgroundImage: "url('/images/organizer-bg-circles.png')" }}
      >
        <img
          src="/images/organizer-rocket.png"
          alt="rocket"
          className="org-left-img"
        />
      </aside>

      {/* RIGHT FORM */}
      <main className="org-right">
        <div className="org-card">
          {/* STEP INDICATOR (Category -> Details -> Account) */}
          <div className="org-stepper">
            <div className="org-step active">
              <div className="dot">1</div>
              <small>{LABEL_ORG_STEP_CATEGORY}</small>
            </div>

            <div className="line active"></div>

            <div className="org-step active">
              <div className="dot">2</div>
              <small>{LABEL_ORG_STEP_DETAILS}</small>
            </div>

            <div className="line"></div>

            <div className="org-step">
              <div className="dot">3</div>
              <small>{LABEL_ORG_STEP_ACCOUNT}</small>
            </div>
          </div>

          <h2 className="org-title">{LABEL_ORG_STEP_DETAILS}</h2>
          <p className="org-sub">{SUBTITLE_ORG_DETAILS}</p>

          <form className="org-form" onSubmit={onContinue}>
            {/* COUNTRY SELECT */}
            <div className="form-group">
              <label className="form-label">{LABEL_ORG_COUNTRY}</label>
              <select
                className="form-control"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">
                  {loadingCountry ? LABEL_LOADING : LABEL_ORG_SELECT_COUNTRY}
                </option>
                {countries.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* STATE SELECT */}
            <div className="form-group">
              <label className="form-label">{LABEL_ORG_STATE}</label>
              <select
                className="form-control"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
              >
                <option value="">
                  {!country
                    ? MSG_ORG_SELECT_COUNTRY
                    : loadingState
                    ? LABEL_LOADING_STATES
                    : LABEL_ORG_SELECT_STATE}
                </option>
                {states.map((s) => (
                  <option key={s.name} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* CITY SELECT */}
            <div className="form-group">
              <label className="form-label">{LABEL_ORG_CITY}</label>
              <select
                className="form-control"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">
                  {!stateName
                    ? MSG_ORG_SELECT_STATE
                    : loadingCity
                    ? LABEL_LOADING_CITIES
                    : LABEL_ORG_SELECT_CITY}
                </option>
                {cities.map((ct) => (
                  <option key={ct.name} value={ct.name}>
                    {ct.name}
                  </option>
                ))}
              </select>
            </div>

            {/* ORGANIZATION NAME */}
            <div className="form-group">
              <label className="form-label">{LABEL_ORG_NAME}</label>
              <input
                className="form-control"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>

            <div className="org-actions">
              <button className="btn-primary-ghost" type="submit">
                {BTN_CONTINUE}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
