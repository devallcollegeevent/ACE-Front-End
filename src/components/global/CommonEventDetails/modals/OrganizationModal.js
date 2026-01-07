import { useState } from "react";

export default function OrganizationDetailsModal({ data, onClose, onSave }) {
  const [form, setForm] = useState(data);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Organization Details</h3>

        <input
          value={form.organizerName || ""}
          onChange={(e) =>
            setForm({ ...form, organizerName: e.target.value })
          }
        />

        <input
          value={form.organizerNumber || ""}
          onChange={(e) =>
            setForm({ ...form, organizerNumber: e.target.value })
          }
        />

        <button onClick={onClose}>Reset</button>
        <button onClick={() => onSave(form)}>Save</button>
      </div>
    </div>
  );
}
