"use client";

import { IoClose } from "react-icons/io5";

export default function ActiveFilterChips({ filters, onRemove }) {
  const chips = [];

  // EVENT TYPES
  filters.eventTypes?.forEach((t) =>
    chips.push({ key: "eventTypes", value: t, label: t })
  );

  // MODES
  filters.modes?.forEach((m) =>
    chips.push({ key: "modes", value: m, label: m })
  );

  // SEARCH
  if (filters.searchText) {
    chips.push({
      key: "searchText",
      value: filters.searchText,
      label: filters.searchText,
    });
  }

  // DEPARTMENTS
  filters.eligibleDeptIdentities?.forEach((d) =>
    chips.push({ key: "eligibleDeptIdentities", value: d, label: d })
  );

  // ACCOMMODATION
  filters.accommodationIdentities?.forEach((a) =>
    chips.push({ key: "accommodationIdentities", value: a, label: a })
  );

  if (!chips.length) return null;

  return (
    <div className="active-filters">
      {chips.map((chip, i) => (
        <div key={i} className="filter-chip">
          <span>{chip.label}</span>
          <button onClick={() => onRemove(chip.key, chip.value)}>
            <IoClose />
          </button>
        </div>
      ))}
    </div>
  );
}
