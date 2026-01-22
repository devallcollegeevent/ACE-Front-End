/**
 * BaseModal Component
 * A basic modal structure with a header, body, and optional footer.
 */
export default function BaseModal({ title, onClose, children, footer }) {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-header">
          <h3>{title}</h3>
          <span className="close" onClick={onClose}>✕</span>
        </div>

        <div className="modal-body">{children}</div>

        {footer && <div className="modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
