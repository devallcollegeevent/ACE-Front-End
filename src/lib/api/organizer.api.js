import apiPrivate from "../axiosPrivate";
import apiPublic from "../axiosPublic";
import { API_ENDPOINTS } from "./endpoints";
import { handleApi } from "./apiHelper";

/* ================= ORGANIZATION ================= */

export const getAllOrganizationsApi = () =>
  handleApi(apiPrivate.get(API_ENDPOINTS.ORGANIZER.ALL));

export const getOrganizationProfileApi = (orgId) =>
  handleApi(apiPrivate.get(API_ENDPOINTS.ORGANIZER.PROFILE(orgId)));

export const updateOrganizationProfileApi = (orgId, data) =>
  handleApi(apiPrivate.put(API_ENDPOINTS.ORGANIZER.UPDATE(orgId), data));

export const deleteOrganizationApi = (orgId) =>
  handleApi(apiPrivate.delete(API_ENDPOINTS.ORGANIZER.DELETE(orgId)));

/* ================= ORGANIZER EVENTS ================= */

export const getApprovedOrganizerEventsApi = (orgId) =>
  handleApi(apiPublic.get(API_ENDPOINTS.ORGANIZER.APPROVEDEVENTS(orgId)));

export const getOrganizationByEventsApi = (slug) =>
  handleApi(apiPublic.get(API_ENDPOINTS.ORGANIZER.ORGEVENTS(slug)));

export const createOrganizerEventApi = (orgId, data) =>
  handleApi(apiPrivate.post(API_ENDPOINTS.ORGANIZER.EVENTS(orgId), data));
