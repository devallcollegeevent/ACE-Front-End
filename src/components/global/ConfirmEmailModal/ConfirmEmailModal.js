"use client";

import { useState, useEffect } from "react";
import "./ConfirmEmailModal.css";

/**
 * ConfirmEmailModal Component
 * A modal that requires the user to type their email to confirm a sensitive action.
 */
export default function ConfirmEmailModal({
  open,
  email,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (open) setInput("");
  }, [open]);

  if (!open) return null;

  const isValid = input === email;

  return (
    <div className="confirm-backdrop">
      <div className="confirm-modal">
        <h3>{title}</h3>
        <p>
          {description}
          <br />
          <strong>{email}</strong>
        </p>

        <input
          type="email"
          placeholder="Type your email"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          onDrop={(e) => e.preventDefault()}
          autoComplete="off"
          spellCheck={false}
        />

        <div className="confirm-actions">
          <button className="btn-cancel" onClick={onCancel}>
            {cancelText}
          </button>

          <button
            className="btn-confirm"
            disabled={!isValid}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
