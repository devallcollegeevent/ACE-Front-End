import apiPrivate from "../axiosPrivate";
import apiPublic from "../axiosPublic";
import { API_ENDPOINTS } from "./endpoints";
import { handleApi } from "./apiHelper";

/* ================= AUTH ================= */

/**
 * Register a new user.
 */
export const signupApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.SIGNUP, data));

/**
 * Register a new organizer (alias for signup).
 */
export const organizerSignupApi = signupApi;

/**
 * Log in a user.
 */
export const loginApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.LOGIN, data));

/**
 * Log in using Google Auth.
 */
export const googleAuthLoginApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.GOOGLE_LOGIN, data));

/**
 * Request a password reset link.
 */
export const forgotApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, data));

/**
 * Verify OTP for authentication.
 */
export const verifyOtpApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.VERIFY_OTP, data));

/**
 * Resend OTP.
 */
export const resendOtpApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.RESEND_OTP, data));

/**
 * Reset password with new credentials.
 */
export const resetPasswordApi = (data) =>
  handleApi(apiPublic.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, data));

/**
 * Update authenticated user's profile.
 */
export const updateAuthProfile = (data) =>
  handleApi(apiPrivate.post(API_ENDPOINTS.AUTH.UPDATEPROFILE, data));

/**
 * Verify organization email via token.
 */
export const verifyEmailApi = (token) =>
  handleApi(
    apiPublic.get(
      `${API_ENDPOINTS.AUTH.ORG_VERIFY}?token=${encodeURIComponent(token)}`
    )
  );
