"use client";
import { useState } from "react";

export default function SocialMediaModal({ value, onClose, onSave }) {
  const [form, setForm] = useState(value || {});

  return (
    <div className="child-overlay" onClick={onClose}>
      <div className="child-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Social Media Details</h3>

        <input
          placeholder="WhatsApp"
          value={form.whatsapp || ""}
          onChange={(e) =>
            setForm({ ...form, whatsapp: e.target.value })
          }
        />

        <input
          placeholder="Instagram"
          value={form.instagram || ""}
          onChange={(e) =>
            setForm({ ...form, instagram: e.target.value })
          }
        />

        <button onClick={onClose}>Cancel</button>
        <button onClick={() => onSave(form)}>Save</button>
      </div>
    </div>
  );
}
