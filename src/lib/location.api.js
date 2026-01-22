const BASE = process.env.NEXT_PUBLIC_LOCATION_API_BASE;

/**
 * Location API
 * Functions to fetch countries, states, and cities from the location service.
 */
export const getCountries = async () => {
  const res = await fetch(`${BASE}/countries/iso`);
  const json = await res.json();
  return json.data.map((c) => ({ code: c.Iso2, name: c.name }));
};

export const getStates = async (country) => {
  const res = await fetch(`${BASE}/countries/states`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ country }),
  });
  const json = await res.json();
  return json.data.states.map((s) => ({ code: s.name, name: s.name }));
};

export const getCities = async (country, state) => {
  const res = await fetch(`${BASE}/countries/state/cities`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ country, state }),
  });
  const json = await res.json();
  return json.data.map((c) => ({ code: c, name: c }));
};
