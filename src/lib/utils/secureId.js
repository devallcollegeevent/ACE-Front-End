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
