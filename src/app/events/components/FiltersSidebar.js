"use client";

export default function FiltersSidebar({
  categories = [],
  eventTypes = [],
  perks = [],
  certifications = [],
  filters,
  onChange,
  onReset,
}) {
  const toggleArray = (key, value) => {
    onChange((prev) => {
      const exists = prev[key]?.includes(value);
      return {
        ...prev,
        [key]: exists
          ? prev[key].filter((v) => v !== value)
          : [...(prev[key] || []), value],
      };
    });
  };

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
          <input type="checkbox" /> All Events
          <span>150</span>
        </label>
        <label className="filter-check">
          <input type="checkbox" /> Trending Events
          <span>50</span>
        </label>
        <label className="filter-check">
          <input type="checkbox" /> Upcoming Events
          <span>25</span>
        </label>
        <label className="filter-check">
          <input type="checkbox" /> Ongoing Events
          <span>45</span>
        </label>
      </div>

      {/* DATE */}
      <div className="filter-block">
        <h6>Select Date</h6>
        <input
          type="date"
          className="filter-input"
          onChange={(e) =>
            onChange((p) => ({ ...p, date: e.target.value }))
          }
        />
      </div>

      {/* MODE */}
      <div className="filter-block">
        <h6>Mode of Event</h6>
        {["online", "offline", "hybrid"].map((m) => (
          <label key={m} className="filter-check">
            <input
              type="checkbox"
              checked={filters.mode?.includes(m)}
              onChange={() => toggleArray("mode", m)}
            />
            {m.charAt(0).toUpperCase() + m.slice(1)}
            <span>50</span>
          </label>
        ))}
      </div>

      {/* DEPARTMENT */}
      <div className="filter-block">
        <h6>Select Eligible Department</h6>
        <select className="filter-select">
          <option>Select Eligible Department</option>
        </select>
      </div>

      {/* CATEGORY */}
      <div className="filter-block">
        <h6>Select your Category</h6>
        <select
          className="filter-select"
          value={filters.category}
          onChange={(e) =>
            onChange((p) => ({ ...p, category: e.target.value }))
          }
        >
          <option value="">Select your category</option>
          {categories.map((c) => (
            <option key={c.identity} value={c.identity}>
              {c.categoryName}
            </option>
          ))}
        </select>
      </div>

      {/* EVENT TYPE */}
      <div className="filter-block">
        <h6>Type of Event</h6>
        <select className="filter-select">
          <option>Select your event</option>
          {eventTypes.map((t) => (
            <option key={t.identity}>{t.name}</option>
          ))}
        </select>
      </div>

      {/* PERKS */}
      <div className="filter-block">
        <h6>Perks</h6>
        {perks.map((p) => (
          <label key={p.identity} className="filter-check">
            <input
              type="checkbox"
              onChange={() => toggleArray("perks", p.identity)}
            />
            {p.perkName}
            <span>50</span>
          </label>
        ))}
      </div>

      {/* CERTIFICATIONS */}
      <div className="filter-block">
        <h6>Certifications</h6>
        {certifications.map((c) => (
          <label key={c.identity} className="filter-check">
            <input
              type="checkbox"
              onChange={() =>
                toggleArray("certifications", c.identity)
              }
            />
            {c.certName}
            <span>50</span>
          </label>
        ))}
      </div>
    </aside>
  );
}
