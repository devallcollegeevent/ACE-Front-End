import apiPrivate from "../axiosPrivate";
import { API_ENDPOINTS } from "./endpoints";
import { handleApi } from "./apiHelper";
import apiPublic from "../axiosPublic";

/* ================= ORGANIZATION ================= */

/**
 * Fetch all organizations.
 */
export const getAllOrganizationsApi = () =>
  handleApi(apiPrivate.get(API_ENDPOINTS.ORGANIZER.ALL));

/**
 * Get organization profile details.
 */
export const getOrganizationProfileApi = (orgId) =>
  handleApi(apiPrivate.get(API_ENDPOINTS.ORGANIZER.PROFILE(orgId)));

/**
 * Update organization profile.
 */
export const updateOrganizationProfileApi = (orgId, data) =>
  handleApi(apiPrivate.put(API_ENDPOINTS.ORGANIZER.UPDATE(orgId), data));

/**
 * Delete an organization.
 */
export const deleteOrganizationApi = (orgId) =>
  handleApi(apiPrivate.delete(API_ENDPOINTS.ORGANIZER.DELETE(orgId)));

/* ================= ORGANIZER EVENTS ================= */

/**
 * Get all events created by a specific organizer (Private).
 */
export const getOrganizerEventsApi = (orgId) =>
  handleApi(apiPrivate.get(API_ENDPOINTS.ORGANIZER.EVENTS(orgId)));

/**
 * Get approved events for an organizer (Public).
 */
export const getApprovedOrganizerEventsApi = (orgId) =>
  handleApi(apiPublic.get(API_ENDPOINTS.ORGANIZER.APPROVEDEVENTS(orgId)));

/**
 * Get events by organization slug (Public).
 */
export const getOrganizationByEventsApi = (slug) =>
  handleApi(apiPublic.get(API_ENDPOINTS.ORGANIZER.ORGEVENTS(slug)));

/**
 * Create a new event for an organizer.
 */
export const createOrganizerEventApi = (orgId, data) =>
  handleApi(apiPrivate.post(API_ENDPOINTS.ORGANIZER.EVENTS(orgId), data));

/**
 * Get a single event by ID for an organizer.
 */
export const getOrganizerSingleEventApi = (orgId, eventId) =>
  handleApi(
    apiPrivate.get(
      API_ENDPOINTS.ORGANIZER.EVENT_BY_ID(orgId, eventId)
    )
  );

/**
 * Update a specific event for an organizer.
 */
export const updateOrganizerSingleEventApi = (orgId, eventId, data) =>
  handleApi(
    apiPrivate.put(
      API_ENDPOINTS.ORGANIZER.EVENT_BY_ID(orgId, eventId),
      data
    )
  );
