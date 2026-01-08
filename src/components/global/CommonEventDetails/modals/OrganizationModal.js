"use client";
import { useState } from "react";
import "./OrganizationModal.css";

export default function OrganizationModal({ orgs = [], onClose, onSave }) {
  // existing orgs (read only)
  const [existingOrgs] = useState(orgs);

  // new orgs (editable)
  const [newOrgs, setNewOrgs] = useState([]);

  const addOrg = () => {
    setNewOrgs([
      ...newOrgs,
      {
        organizerName: "",
        organizerNumber: "",
        location: "",
        eventHostBy: "",
        organizationName: "",
        department: "",
      },
    ]);
  };

  const updateNewOrg = (index, key, value) => {
    const updated = [...newOrgs];
    updated[index][key] = value;
    setNewOrgs(updated);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Organization Details</h3>

        {/* ================= EXISTING ORGS ================= */}
        {existingOrgs.map((org, index) => (
          <div key={index}>
            <h4>Organization {index + 1}</h4>

            <input value={org.organizerName || ""} readOnly />
            <input value={org.organizerNumber || ""} readOnly />
            <input value={org.location || ""} readOnly />
            <input value={org.organizationName || ""} readOnly />
          </div>
        ))}

        {/* ================= NEW ORGS ================= */}
        {newOrgs.map((org, index) => (
          <div key={index}>
            <h4>New Organization</h4>

            <input
              placeholder="Organizer Name"
              value={org.organizerName}
              onChange={(e) =>
                updateNewOrg(index, "organizerName", e.target.value)
              }
            />

            <input
              placeholder="Organizer Number"
              value={org.organizerNumber}
              onChange={(e) =>
                updateNewOrg(index, "organizerNumber", e.target.value)
              }
            />

            <input
              placeholder="Location"
              value={org.location}
              onChange={(e) =>
                updateNewOrg(index, "location", e.target.value)
              }
            />
          </div>
        ))}

        <button onClick={addOrg}>+ Add Organization</button>

        <div style={{ marginTop: 20 }}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSave([...existingOrgs, ...newOrgs])}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
