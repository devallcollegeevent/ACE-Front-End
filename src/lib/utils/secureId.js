/**
 * Secure ID Utilities
 * Helper functions to encode and decode IDs for URL safety and basic obfuscation.
 */
// Encode (hide real id)
export const encodeId = (id) => {
  return encodeURIComponent(btoa(id));
};

// Decode (get real id)
export const decodeId = (encoded) => {
  try {
    return atob(decodeURIComponent(encoded));
  } catch {
    return null;
  }
};
