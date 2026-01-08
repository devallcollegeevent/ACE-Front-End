"use client";
import { useState } from "react";

export default function OfferModal({ value, onClose, onSave }) {
  const [offer, setOffer] = useState(value || "");

  return (
    <div className="child-overlay" onClick={onClose}>
      <div className="child-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Offer Details</h3>

        <textarea
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />

        <button onClick={onClose}>Cancel</button>
        <button onClick={() => onSave(offer)}>Save</button>
      </div>
    </div>
  );
}
