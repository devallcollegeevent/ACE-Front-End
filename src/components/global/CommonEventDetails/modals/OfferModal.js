export default function OfferDetailsModal({ value, onClose, onSave }) {
  const [offer, setOffer] = useState(value);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Offer Details</h3>

        <textarea
          value={offer}
          onChange={(e) => setOffer(e.target.value)}
        />

        <button onClick={onClose}>Reset</button>
        <button onClick={() => onSave(offer)}>Save</button>
      </div>
    </div>
  );
}
