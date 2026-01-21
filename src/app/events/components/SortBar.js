"use client";

import {
  LOCATION_ICON,
  SEARCH_ICON,
} from "../../../const-value/config-icons/page";
import { FaThLarge, FaListUl } from "react-icons/fa";

export default function SortBar({ value, onChange, onSearch }) {
  return (
    <div className="sort-bar">
      {/* SEARCH */}
      <div className="sort-search">
        <span className="icon">{SEARCH_ICON}</span>
        <input
          type="text"
          placeholder="Search anything..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* LOCATION */}
      <div className="sort-location">
        <span className="icon">{LOCATION_ICON}</span>
        <input type="text" placeholder="Location" disabled />
      </div>

      {/* SORT */}
      <select
        className="sort-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="new">New Arrivals</option>
        <option value="old">Oldest</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
}
