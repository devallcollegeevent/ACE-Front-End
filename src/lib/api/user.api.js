// src/lib/api/user.api.js
import apiPrivate from "../axiosPrivate";
import { API_ENDPOINTS } from "./endpoints";
import { handleApi } from "./apiHelper";

/* ================= USERS ================= */

/**
 * Fetch all users (Admin use mostly).
 */
export const getAllUsersApi = () =>
  handleApi(apiPrivate.get(API_ENDPOINTS.USER.ALL));

/**
 * Get a specific user's profile by ID.
 */
export const getUserProfileApi = (userId) =>
  handleApi(apiPrivate.get(API_ENDPOINTS.USER.SINGLE(userId)));

/**
 * Update a user's profile data.
 */
export const updateUserProfileApi = (userId, data) =>
  handleApi(apiPrivate.put(API_ENDPOINTS.USER.UPDATE(userId), data));

/**
 * Delete a user account.
 */
export const deleteUserApi = (userId) =>
  handleApi(apiPrivate.delete(API_ENDPOINTS.USER.DELETE(userId)));
