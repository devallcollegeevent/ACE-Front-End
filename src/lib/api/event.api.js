import apiPublic from "../axiosPublic";
import apiPrivate from "../axiosPrivate";
import { API_ENDPOINTS } from "./endpoints";
import { handleApi } from "./apiHelper";

/* =======================
   EVENTS (PUBLIC / PRIVATE)
   Try PRIVATE → fallback PUBLIC
======================= */

export const getAllEventsApi = async () => {
  try {
    // 🔐 Try private first
    return await handleApi(
      apiPrivate.get(API_ENDPOINTS.EVENTS.ALL_PRIVATE)
    );
  } catch (error) {
    // 👤 Not logged in → fallback public
    if (error?.response?.status === 401) {
      return await handleApi(
        apiPublic.get(API_ENDPOINTS.EVENTS.ALL_PUBLIC)
      );
    }

    return {
      status: false,
      message: "Failed to fetch events",
    };
  }
};

/* =======================
   SINGLE EVENT
======================= */

export const getEventBySlugApi = async (slug) => {
  try {
    return await handleApi(
      apiPrivate.get(API_ENDPOINTS.EVENTS.SINGLE_PRIVATE(slug))
    );
  } catch (error) {
    if (error?.response?.status === 401) {
      return await handleApi(
        apiPublic.get(API_ENDPOINTS.EVENTS.SINGLE_PUBLIC(slug))
      );
    }

    return { status: false };
  }
};

/* =======================
   LIKE / SAVE (AUTH ONLY)
======================= */

export const likeEventApi = async (payload) => {
  return handleApi(
    apiPrivate.post("/v1/events/like", payload)
  );
};

export const saveEventApi = async (payload) => {
  return handleApi(
    apiPrivate.post("/v1/events/save", payload)
  );
};

/* =======================
   EVENT VIEW (PUBLIC)
======================= */

export const addEventViewApi = async (slug) => {
  return handleApi(
    apiPublic.post(API_ENDPOINTS.EVENTS.VIEW(slug))
  );
};

/* =======================
   ORGANIZER EVENTS (PRIVATE)
======================= */

export const getOrganizerEventsApi = async (orgId) => {
  return handleApi(
    apiPrivate.get(API_ENDPOINTS.ORGANIZER.EVENTS(orgId))
  );
};

export const deleteEventApi = async (eventId) => {
  return handleApi(
    apiPrivate.delete(`/event/delete/${eventId}`)
  );
};

export const updateEventApi = async (eventId, formData) => {
  return handleApi(
    apiPrivate.put(`/v1/events/${eventId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};

/* =======================
   MASTER DATA (PUBLIC)
======================= */

export const getOrgCategoriesApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.ORG_CATEGORIES)
  );

export const getExploreEventTypes = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.EXPLORE_EVENT_TYPE)
  );

export const getEventCategoriesApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.CATEGORIES)
  );

export const getEventTypesApi = async (categoryId) =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.EVENT_TYPES(categoryId))
  );

export const getAllEventTypesApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.ALL_EVENT_TYPES)
  );

export const getAccommodationsApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.ACCOMMODATIONS)
  );

export const getCertificationsApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.CERTIFICATIONS)
  );

export const getPerksApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.PERKS)
  );

export const getEligibleDepartmentsApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.MASTER.ELIGIBLE_DEPARTMENTS)
  );

/* =======================
   FILTER EVENTS
======================= */

export const filterEventsApi = async (payload) => {
  try {
    return await handleApi(
      apiPrivate.post(API_ENDPOINTS.EVENTS.FILTER_PRIVATE, payload)
    );
  } catch (error) {
    if (error?.response?.status === 401) {
      return await handleApi(
        apiPublic.post(API_ENDPOINTS.EVENTS.FILTER_PUBLIC, payload)
      );
    }

    return {
      status: false,
      message: "Failed to fetch events",
    };
  }
};

/* =======================
   EVENT STATUS (PUBLIC)
======================= */

export const getEventStatusesApi = async () =>
  handleApi(
    apiPublic.get(API_ENDPOINTS.EVENTS.STATUSES)
  );

/* =======================
   CREATE EVENT (ORGANIZER)
======================= */

export const createEventApi = async (orgId, formData) =>
  handleApi(
    apiPrivate.post(
      API_ENDPOINTS.ORGANIZER.CREATEVENTS(orgId),
      formData
    )
  );
