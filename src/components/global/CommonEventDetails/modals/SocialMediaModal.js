export default function SocialMediaModal({ value, onClose, onSave }) {
  const [form, setForm] = useState(value);

  return (
    <div className="modal-overlay">
      <div className="modal">
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

        <input
          placeholder="LinkedIn"
          value={form.linkedin || ""}
          onChange={(e) =>
            setForm({ ...form, linkedin: e.target.value })
          }
        />

        <button onClick={onClose}>Reset</button>
        <button onClick={() => onSave(form)}>Save</button>
      </div>
    </div>
  );
}
