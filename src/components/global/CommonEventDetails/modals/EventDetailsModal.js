"use client";

import "./EventDetailsModal.css";

export default function EventDetailsModal({
  onClose,
  onOrgClick,
  onOfferClick,
  onSocialClick,
}) {
  return (
    <div className="modal-overlay">
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="modal-header">
          <h2>Event Host Details</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-list">
          <div className="modal-item" onClick={onOrgClick}>
            Organization Details →
          </div>
          <div className="modal-item" onClick={onOfferClick}>
            Offer Details →
          </div>
          <div className="modal-item" onClick={onSocialClick}>
            Social Media Details →
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-primary">Save</button>
        </div>
      </div>
    </div>
  );
}
