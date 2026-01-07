"use client";

import { ORG_EDITE_ICON } from "../../../../const-value/config-icons/page";

export default function EditOverlay({ onEdit }) {
  return (
    <div className="edit-overlay">
      <div
        className="edit-section"
        onClick={(e) => {
          e.stopPropagation();
          onEdit();
        }}
      >
        <span>Edit</span>
        <span>{ORG_EDITE_ICON}</span>
      </div>
    </div>
  );
}
