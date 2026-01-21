"use client";
import Dropdown from "./Dropdown";

export default function FiltersSidebar({
  categories = [],
  eventTypes = [],
  perks = [],
  certifications = [],
  eligibleDepartments = [],
  accommodations = [],
  filters,
  setFilters,
  onReset,
  toggleUnion,
}) {
  return (
    <aside className="filters-sidebar">
      {/* HEADER */}
      <div className="filters-header">
        <h6>Filters</h6>
        <button className="reset-btn" onClick={onReset}>
          Reset
        </button>
      </div>

      {/* EVENT STATUS */}
      <div className="filter-block">
        <label className="filter-check">
          <input
            type="checkbox"
            checked={filters.eventTypes.includes("featured")}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                eventTypes: ["featured"], // SINGLE
              }))
            }
          />
          Featured Events
        </label>

        <label className="filter-check">
          <input
            type="checkbox"
            checked={filters.eventTypes.includes("trending")}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                eventTypes: ["trending"], // SINGLE
              }))
            }
          />
          Trending Events
        </label>
      </div>

      {/* EVENT DATE */}
      <div className="filter-block">
        <h6>Event Date</h6>
        <input type="date" className="filter-input" />
      </div>

      {/* MODE OF EVENT */}
      <div className="filter-block">
        <h6>Mode of Event</h6>
        {["ONLINE", "OFFLINE", "HYBRID"].map((mode) => (
          <label key={mode} className="filter-check">
            <input
              type="checkbox"
              checked={filters.modes.includes(mode)}
              onChange={() =>
                setFilters((prev) => ({
                  ...prev,
                  modes: [mode], // SINGLE
                }))
              }
            />
            {mode}
          </label>
        ))}
      </div>

      {/* EVENT TYPE */}
      <div className="filter-block">
        <h6>Event Type</h6>
        <Dropdown
          options={eventTypes}
          value={filters.eventTypeIdentity}
          onChange={(v) => setFilters((p) => ({ ...p, eventTypeIdentity: v }))}
          placeholder="Select Event Type"
          multiple={false}
        />
      </div>

      {/* ELIGIBLE DEPARTMENT (UNION) */}
      <div className="filter-block">
        <h6>Eligible Department</h6>
        <Dropdown
          options={eligibleDepartments}
          value={filters.eligibleDeptIdentities}
          onChange={(v) =>
            setFilters((p) => ({
              ...p,
              eligibleDeptIdentities: v,
            }))
          }
          placeholder="Select Departments"
          multiple={true}
          labelKey="name"
          valueKey="identity"
        />
      </div>

      {/* PRICING */}
      <div className="filter-block">
        <h6>Pricing</h6>
        <input type="range" min="0" max="10000" className="pricing-input" />
        <div className="d-flex justify-content-between">
          <span>0</span>
          <span>10,000</span>
        </div>
      </div>

      {/* PERKS */}
      <div className="filter-block">
        <h6>Perks</h6>
        {perks.map((p) => (
          <label key={p.identity} className="filter-check">
            <input type="checkbox" /> {p.perkName}
            <span>50</span>
          </label>
        ))}
      </div>

      {/* CERTIFICATE TYPE */}
      <div className="filter-block">
        <h6>Certificate Type</h6>
        <select className="filter-select">
          <option>Select certificate type</option>
          {certifications.map((c) => (
            <option key={c.identity}>{c.certName}</option>
          ))}
        </select>
      </div>

      {/* ✅ ACCOMMODATION (FROM API) */}
      <div className="filter-block">
        <h6>Accommodation</h6>

        {accommodations.length === 0 && (
          <p style={{ fontSize: "12px", color: "#999" }}>
            No accommodations available
          </p>
        )}

        {accommodations.map((a) => (
          <label key={a.identity} className="filter-check">
            <input
              type="checkbox"
              checked={filters.accommodationIdentities.includes(a.identity)}
              onChange={() =>
                setFilters((p) => ({
                  ...p,
                  accommodationIdentities: p.accommodationIdentities.includes(
                    a.identity,
                  )
                    ? p.accommodationIdentities.filter((x) => x !== a.identity)
                    : [...p.accommodationIdentities, a.identity],
                }))
              }
            />
            {a.accommodationName}
          </label>
        ))}
      </div>
    </aside>
  );
}
