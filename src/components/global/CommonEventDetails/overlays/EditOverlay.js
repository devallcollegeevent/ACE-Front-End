"use client";

import { ORG_EDITE_ICON } from "../../../../const-value/config-icons/page";
import { getUserData } from "../../../../lib/auth"; 

export default function EditOverlay({ onEdit }) {
  const userData = getUserData();

  if (userData?.type === "user") return null;

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
