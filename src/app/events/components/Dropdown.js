"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Dropdown({
  options = [],
  value,
  onChange,
  multiple = false,
  placeholder = "Select",
  labelKey = "name",
  valueKey = "identity",
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pos, setPos] = useState(null);
  const ref = useRef(null);

  /* Close on outside click */
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Calculate dropdown position */
  useEffect(() => {
    if (open && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  const filtered = options.filter((o) =>
    o[labelKey]?.toLowerCase().includes(search.toLowerCase()),
  );

  const isSelected = (id) =>
    multiple ? value.includes(id) : value === id;

  const handleSelect = (id) => {
    if (multiple) {
      onChange(
        value.includes(id)
          ? value.filter((v) => v !== id)
          : [...value, id],
      );
    } else {
      onChange(id);
      setOpen(false);
    }
  };

  const displayText = () => {
    if (multiple) {
      return value.length ? `${value.length} selected` : placeholder;
    }
    const selected = options.find((o) => o[valueKey] === value);
    return selected ? selected[labelKey] : placeholder;
  };

  return (
    <>
      <div className="custom-dropdown" ref={ref}>
        <div
          className="dropdown-control"
          onClick={() => setOpen((o) => !o)}
        >
          {displayText()}
        </div>
      </div>

      {/* 🔥 PORTAL DROPDOWN */}
      {open &&
        pos &&
        createPortal(
          <div
            className="dropdown-menu portal-dropdown"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.width,
            }}
          >
            <input
              className="dropdown-search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div className="dropdown-options">
              {filtered.length === 0 && (
                <div className="dropdown-empty">No results</div>
              )}

              {filtered.map((o) => (
                <label key={o[valueKey]} className="dropdown-option">
                  <input
                    type={multiple ? "checkbox" : "radio"}
                    checked={isSelected(o[valueKey])}
                    onChange={() => handleSelect(o[valueKey])}
                  />
                  {o[labelKey]}
                </label>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
