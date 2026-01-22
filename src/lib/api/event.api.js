import apiPublic from "../axiosPublic";
import apiPrivate from "../axiosPrivate";
import { API_ENDPOINTS } from "./endpoints";
import { handleApi } from "./apiHelper";

/* =======================
   EVENTS (PUBLIC)
======================= */

/**
 * Fetch all public events.
 */
// ALL EVENTS (Landing page, sliders)
export const getAllEventsApi = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.EVENTS.ALL));

/**
 * Fetch a single event by its slug.
 */
//KEEP ONLY IF ADMIN NEEDS IT
export const getEventBySlugApi = (slug) =>
  handleApi(apiPublic.get(API_ENDPOINTS.EVENTS.SINGLE(slug)));

/* =======================
   EVENTS (ORGANIZER)
======================= */

/**
 * Fetch events for a specific organizer.
 */
export const getOrganizerEventsApi = (orgId) =>
  handleApi(apiPrivate.get(API_ENDPOINTS.ORGANIZER.EVENTS(orgId)));

/**
 * Delete an event by ID.
 */
export const deleteEventApi = (eventId) =>
  handleApi(apiPrivate.delete(`/event/delete/${eventId}`));

/**
 * Update an event with form data (supports file upload).
 */
export const updateEventApi = (eventId, formData) => {
  return apiPrivate.put(`/v1/events/${eventId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


/* =======================
   MASTER DATA
======================= */

/**
 * Fetch organization categories.
 */
export const getOrgCategoriesApi = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.ORG_CATEGORIES));

/**
 * Fetch event types for exploration.
 */
export const getExploreEventTypes = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.EXPLORE_EVENT_TYPE));

/**
 * Fetch all event categories.
 */
export const getEventCategoriesApi = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.CATEGORIES));

/**
 * Fetch event types based on category ID.
 */
export const getEventTypesApi = (categoryId) =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.EVENT_TYPES(categoryId)));

/**
 * Fetch available accommodations.
 */
export const getAccommodationsApi = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.ACCOMMODATIONS));

/**
 * Fetch available certifications.
 */
export const getCertificationsApi = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.CERTIFICATIONS));

/**
 * Fetch available perks.
 */
export const getPerksApi = () =>
  handleApi(apiPublic.get(API_ENDPOINTS.MASTER.PERKS));

/* =======================
   CREATE EVENT (ORGANIZER)
======================= */

/**
 * Create a new event.
 */
export const createEventApi = (orgId, formData) =>
  handleApi(
    apiPrivate.post(API_ENDPOINTS.ORGANIZER.CREATEVENTS(orgId), formData)
  );
