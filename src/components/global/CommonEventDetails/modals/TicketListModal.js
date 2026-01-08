"use client";
import { DELETICON, EDITICON } from "../../../../const-value/config-icons/page";
import "./TicketListModal.css";

export default function TicketListModal({
  tickets = [],
  onClose,
  onEditTicket,
  onDeleteTicket,
}) {
  return (
    <div className="banner-modal-overlay">
      <div className="ticket-modal">
        {/* HEADER */}
        <div className="modal-header">
          <h3>Ticket List</h3>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* TABLE */}
        <div className="ticket-table">
          <div className="ticket-row header">
            <span>Ticket Name</span>
            <span>Price</span>
            <span>Total</span>
            <span></span>
          </div>

          {tickets.map((t) => (
            <div className="ticket-row" key={t.identity}>
              <span>{t.name}</span>
              <span>{t.price}</span>
              <span>{t.price}</span>
              <div className="d-flex gap-5">
                <span onClick={() => onEditTicket(t)}>{EDITICON}</span>
                <span onClick={() => onDeleteTicket(t.identity)} style={{display:"none"}}>
                  {DELETICON}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="modal-footer">
          <button className="btn-save">Save</button>
        </div>
      </div>
    </div>
  );
}
