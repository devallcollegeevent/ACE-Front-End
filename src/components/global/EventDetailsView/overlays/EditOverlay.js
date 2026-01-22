"use client";

import { useEffect, useState } from "react";
import { ORG_EDITE_ICON } from "../../../../const-value/config-icons/page";
import { getUserData } from "../../../../lib/auth";

/**
 * EditOverlay Component
 * An overlay button that appears on event sections if the current user is the organizer of that event.
 * Allows editing specific sections of the event details.
 */
export default function EditOverlay({ onEdit, eventOrgIdentity }) {
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState(null);

  // CLIENT ONLY
  useEffect(() => {
    setMounted(true);
    const data = getUserData();
    setUserData(data);
  }, []);

  // IMPORTANT: server + first client render SAME
  if (!mounted) return null;

  // Check if user is logged in and is an organizer (not a regular user)
  if (!userData || userData.type === "user") return null;

  // Check if the logged-in organizer owns this specific event
  if (userData.identity !== eventOrgIdentity) return null;

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
