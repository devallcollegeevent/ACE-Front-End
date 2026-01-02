(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearEmail",
    ()=>clearEmail,
    "clearToken",
    ()=>clearToken,
    "getEmail",
    ()=>getEmail,
    "getToken",
    ()=>getToken,
    "getUserData",
    ()=>getUserData,
    "saveEmail",
    ()=>saveEmail,
    "saveToken",
    ()=>saveToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)");
;
const saveToken = (token)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem("token", token);
    try {
        const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jwt$2d$decode$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jwtDecode"])(token);
        localStorage.setItem("userData", JSON.stringify(decoded.data));
    } catch (err) {
        console.error("Token decode failed", err);
    }
};
const getToken = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem("token");
};
const getUserData = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const data = localStorage.getItem("userData");
    return data ? JSON.parse(data) : null;
};
const clearToken = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
};
const saveEmail = (email)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem("userEmail", email);
};
const getEmail = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return localStorage.getItem("userEmail");
};
const clearEmail = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem("userEmail");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/logout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "logoutOrganizer",
    ()=>logoutOrganizer,
    "logoutUser",
    ()=>logoutUser
]);
"use client";
function logoutUser() {
    // Clear cookies
    document.cookie = "token=; path=/; max-age=0";
    document.cookie = "role=; path=/; max-age=0";
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    // Session clear
    sessionStorage.clear();
}
function logoutOrganizer() {
    // Clear cookies
    document.cookie = "token=; path=/; max-age=0";
    document.cookie = "role=; path=/; max-age=0";
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    // Session clear
    sessionStorage.clear();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/const-value/config-message/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// META TITEL
__turbopack_context__.s([
    "ACTION_CREATE_EVENT",
    ()=>ACTION_CREATE_EVENT,
    "ACTION_LIST_EVENT",
    ()=>ACTION_LIST_EVENT,
    "ACTION_MY_EVENT",
    ()=>ACTION_MY_EVENT,
    "BTN_CANCEL",
    ()=>BTN_CANCEL,
    "BTN_CHANGE_PASSWORD",
    ()=>BTN_CHANGE_PASSWORD,
    "BTN_CLOSE",
    ()=>BTN_CLOSE,
    "BTN_CONFRIM",
    ()=>BTN_CONFRIM,
    "BTN_CONTINUE",
    ()=>BTN_CONTINUE,
    "BTN_DELETE_ACCOUNT",
    ()=>BTN_DELETE_ACCOUNT,
    "BTN_EMAIL_VERIFY_FAILED",
    ()=>BTN_EMAIL_VERIFY_FAILED,
    "BTN_EMAIL_VERIFY_SUCCESS",
    ()=>BTN_EMAIL_VERIFY_SUCCESS,
    "BTN_OTP_RESEND",
    ()=>BTN_OTP_RESEND,
    "BTN_OTP_SEND",
    ()=>BTN_OTP_SEND,
    "BTN_SAVE_CHANGES",
    ()=>BTN_SAVE_CHANGES,
    "BTN_SUBMIT_EVENT",
    ()=>BTN_SUBMIT_EVENT,
    "BTN_UNFOLLOW",
    ()=>BTN_UNFOLLOW,
    "BTN_UPDATE_EVENT",
    ()=>BTN_UPDATE_EVENT,
    "BTN_VERIFY_DOMAIN",
    ()=>BTN_VERIFY_DOMAIN,
    "BTN_VERIFY_DOMAIN_LOADING",
    ()=>BTN_VERIFY_DOMAIN_LOADING,
    "CAT_COLLEGE",
    ()=>CAT_COLLEGE,
    "CAT_CORPORATE",
    ()=>CAT_CORPORATE,
    "CAT_EVENT_COMPANY",
    ()=>CAT_EVENT_COMPANY,
    "CAT_GOVERNMENT",
    ()=>CAT_GOVERNMENT,
    "CAT_INDIVIDUAL",
    ()=>CAT_INDIVIDUAL,
    "CAT_NGO",
    ()=>CAT_NGO,
    "CAT_SPORTS",
    ()=>CAT_SPORTS,
    "CAT_TECH_COMMUNITY",
    ()=>CAT_TECH_COMMUNITY,
    "CAT_TRAINING",
    ()=>CAT_TRAINING,
    "CONDITION_OTP_RESEND",
    ()=>CONDITION_OTP_RESEND,
    "CONDITION_OTP_SEND",
    ()=>CONDITION_OTP_SEND,
    "CONDITION_OTP_VERIFY",
    ()=>CONDITION_OTP_VERIFY,
    "DEFAULT_BACK",
    ()=>DEFAULT_BACK,
    "DEFAULT_COLLEGE",
    ()=>DEFAULT_COLLEGE,
    "DEFAULT_DATE",
    ()=>DEFAULT_DATE,
    "DEFAULT_MODE",
    ()=>DEFAULT_MODE,
    "DEFAULT_PRICE",
    ()=>DEFAULT_PRICE,
    "DEFAULT_TEXT",
    ()=>DEFAULT_TEXT,
    "DEFAULT_TIME",
    ()=>DEFAULT_TIME,
    "DEFAULT_TRAINING",
    ()=>DEFAULT_TRAINING,
    "DEFAULT_UNKNOWN",
    ()=>DEFAULT_UNKNOWN,
    "IMAGE_ALT",
    ()=>IMAGE_ALT,
    "INPUT_PASSWORD",
    ()=>INPUT_PASSWORD,
    "INPUT_TEXT",
    ()=>INPUT_TEXT,
    "LABEL_CONFIRM_PASSWORD",
    ()=>LABEL_CONFIRM_PASSWORD,
    "LABEL_DASHBOARD",
    ()=>LABEL_DASHBOARD,
    "LABEL_DOMAIN_MAIL_ID",
    ()=>LABEL_DOMAIN_MAIL_ID,
    "LABEL_EMAIL",
    ()=>LABEL_EMAIL,
    "LABEL_EVENT_DATE",
    ()=>LABEL_EVENT_DATE,
    "LABEL_EVENT_DESCRIPTION",
    ()=>LABEL_EVENT_DESCRIPTION,
    "LABEL_EVENT_MODE",
    ()=>LABEL_EVENT_MODE,
    "LABEL_EVENT_PRICE",
    ()=>LABEL_EVENT_PRICE,
    "LABEL_EVENT_TIME",
    ()=>LABEL_EVENT_TIME,
    "LABEL_EVENT_VENUE",
    ()=>LABEL_EVENT_VENUE,
    "LABEL_FORM_DESCRIPTION",
    ()=>LABEL_FORM_DESCRIPTION,
    "LABEL_FORM_EVENT_TITLE",
    ()=>LABEL_FORM_EVENT_TITLE,
    "LABEL_FORM_IMAGE",
    ()=>LABEL_FORM_IMAGE,
    "LABEL_FULL_NAME",
    ()=>LABEL_FULL_NAME,
    "LABEL_LOADING",
    ()=>LABEL_LOADING,
    "LABEL_LOADING_CITIES",
    ()=>LABEL_LOADING_CITIES,
    "LABEL_LOADING_COLLEGE",
    ()=>LABEL_LOADING_COLLEGE,
    "LABEL_LOADING_STATES",
    ()=>LABEL_LOADING_STATES,
    "LABEL_LOGOUT",
    ()=>LABEL_LOGOUT,
    "LABEL_NAME",
    ()=>LABEL_NAME,
    "LABEL_ORG_CITY",
    ()=>LABEL_ORG_CITY,
    "LABEL_ORG_COUNTRY",
    ()=>LABEL_ORG_COUNTRY,
    "LABEL_ORG_EMAIL",
    ()=>LABEL_ORG_EMAIL,
    "LABEL_ORG_NAME",
    ()=>LABEL_ORG_NAME,
    "LABEL_ORG_SELECT_CITY",
    ()=>LABEL_ORG_SELECT_CITY,
    "LABEL_ORG_SELECT_COLLEGE",
    ()=>LABEL_ORG_SELECT_COLLEGE,
    "LABEL_ORG_SELECT_COUNTRY",
    ()=>LABEL_ORG_SELECT_COUNTRY,
    "LABEL_ORG_SELECT_STATE",
    ()=>LABEL_ORG_SELECT_STATE,
    "LABEL_ORG_STATE",
    ()=>LABEL_ORG_STATE,
    "LABEL_ORG_STEP_ACCOUNT",
    ()=>LABEL_ORG_STEP_ACCOUNT,
    "LABEL_ORG_STEP_CATEGORY",
    ()=>LABEL_ORG_STEP_CATEGORY,
    "LABEL_ORG_STEP_DETAILS",
    ()=>LABEL_ORG_STEP_DETAILS,
    "LABEL_PASSWORD",
    ()=>LABEL_PASSWORD,
    "LABEL_SELECT_MODE",
    ()=>LABEL_SELECT_MODE,
    "LABEL_SET_NEW_PASSWORD",
    ()=>LABEL_SET_NEW_PASSWORD,
    "METADATA_DESCRIPTION",
    ()=>METADATA_DESCRIPTION,
    "METADATA_TITEL",
    ()=>METADATA_TITEL,
    "MODE_HYBRID",
    ()=>MODE_HYBRID,
    "MODE_OFFLINE",
    ()=>MODE_OFFLINE,
    "MODE_ONLINE",
    ()=>MODE_ONLINE,
    "MSG_CLEAR_EMAIL_ERROR",
    ()=>MSG_CLEAR_EMAIL_ERROR,
    "MSG_CLEAR_TOKEN_ERROR",
    ()=>MSG_CLEAR_TOKEN_ERROR,
    "MSG_DELETED_YOUR_ACCOUNT",
    ()=>MSG_DELETED_YOUR_ACCOUNT,
    "MSG_DELETE_ACCOUNT",
    ()=>MSG_DELETE_ACCOUNT,
    "MSG_EMAIL_VERIFY_FAILED",
    ()=>MSG_EMAIL_VERIFY_FAILED,
    "MSG_EMAIL_VERIFY_LOADING",
    ()=>MSG_EMAIL_VERIFY_LOADING,
    "MSG_EMAIL_VERIFY_SUCCESS",
    ()=>MSG_EMAIL_VERIFY_SUCCESS,
    "MSG_ERR_CATEGORY_MISSING",
    ()=>MSG_ERR_CATEGORY_MISSING,
    "MSG_ERR_FILL_ALL_FIELDS",
    ()=>MSG_ERR_FILL_ALL_FIELDS,
    "MSG_ERR_PASSWORD_MISMATCH",
    ()=>MSG_ERR_PASSWORD_MISMATCH,
    "MSG_ERR_SIGNUP_FAILED",
    ()=>MSG_ERR_SIGNUP_FAILED,
    "MSG_EVENT_CREATE_ERROR",
    ()=>MSG_EVENT_CREATE_ERROR,
    "MSG_EVENT_CREATE_FAILED",
    ()=>MSG_EVENT_CREATE_FAILED,
    "MSG_EVENT_CREATE_SUCCESS",
    ()=>MSG_EVENT_CREATE_SUCCESS,
    "MSG_EVENT_LOAD_ERROR",
    ()=>MSG_EVENT_LOAD_ERROR,
    "MSG_EVENT_LOAD_FAILED",
    ()=>MSG_EVENT_LOAD_FAILED,
    "MSG_EVENT_UPDATE_ERROR",
    ()=>MSG_EVENT_UPDATE_ERROR,
    "MSG_EVENT_UPDATE_FAILED",
    ()=>MSG_EVENT_UPDATE_FAILED,
    "MSG_EVENT_UPDATE_SUCCESS",
    ()=>MSG_EVENT_UPDATE_SUCCESS,
    "MSG_GENERIC_ERROR",
    ()=>MSG_GENERIC_ERROR,
    "MSG_GET_EMAIL_ERROR",
    ()=>MSG_GET_EMAIL_ERROR,
    "MSG_GET_TOKEN_ERROR",
    ()=>MSG_GET_TOKEN_ERROR,
    "MSG_GOOGLE_LOGIN_FAILED",
    ()=>MSG_GOOGLE_LOGIN_FAILED,
    "MSG_GOOGLE_LOGIN_SUCCESS_USER",
    ()=>MSG_GOOGLE_LOGIN_SUCCESS_USER,
    "MSG_INVALID_CREDENTIALS",
    ()=>MSG_INVALID_CREDENTIALS,
    "MSG_LOGIN_FAILED",
    ()=>MSG_LOGIN_FAILED,
    "MSG_LOGIN_SUCCESS_ORGANIZER",
    ()=>MSG_LOGIN_SUCCESS_ORGANIZER,
    "MSG_LOGIN_SUCCESS_USER",
    ()=>MSG_LOGIN_SUCCESS_USER,
    "MSG_LOGOUT_FAILED",
    ()=>MSG_LOGOUT_FAILED,
    "MSG_LOGOUT_SUCCESS",
    ()=>MSG_LOGOUT_SUCCESS,
    "MSG_NEW_OTP_FAILED_TO_SEND",
    ()=>MSG_NEW_OTP_FAILED_TO_SEND,
    "MSG_NEW_OTP_SEND",
    ()=>MSG_NEW_OTP_SEND,
    "MSG_NOIMAGE_FAILED",
    ()=>MSG_NOIMAGE_FAILED,
    "MSG_NO_EVENT_FOUND_FOR_ORGANIZER",
    ()=>MSG_NO_EVENT_FOUND_FOR_ORGANIZER,
    "MSG_NO_EVENT_FOUND_FOR_USER",
    ()=>MSG_NO_EVENT_FOUND_FOR_USER,
    "MSG_ORGANIZER_NOT_FOUND",
    ()=>MSG_ORGANIZER_NOT_FOUND,
    "MSG_ORG_SELECT_COUNTRY",
    ()=>MSG_ORG_SELECT_COUNTRY,
    "MSG_ORG_SELECT_STATE",
    ()=>MSG_ORG_SELECT_STATE,
    "MSG_OTP_ERROR",
    ()=>MSG_OTP_ERROR,
    "MSG_OTP_INVALID",
    ()=>MSG_OTP_INVALID,
    "MSG_OTP_SEND_EMAIL",
    ()=>MSG_OTP_SEND_EMAIL,
    "MSG_OTP_SEND_EMAIL_ERROR",
    ()=>MSG_OTP_SEND_EMAIL_ERROR,
    "MSG_OTP_VERIFIED",
    ()=>MSG_OTP_VERIFIED,
    "MSG_PASSWORD_CHANGED_SUCCESS",
    ()=>MSG_PASSWORD_CHANGED_SUCCESS,
    "MSG_PASSWORD_UPDATED_FAILED",
    ()=>MSG_PASSWORD_UPDATED_FAILED,
    "MSG_PASSWORD_UPDATED_SUCCESS",
    ()=>MSG_PASSWORD_UPDATED_SUCCESS,
    "MSG_SAVE_EMAIL_ERROR",
    ()=>MSG_SAVE_EMAIL_ERROR,
    "MSG_SIGNUP_SUCCESS",
    ()=>MSG_SIGNUP_SUCCESS,
    "MSG_SUCCESSFULLY_UPDATED",
    ()=>MSG_SUCCESSFULLY_UPDATED,
    "MSG_TOKEN_DECODE_FAILED",
    ()=>MSG_TOKEN_DECODE_FAILED,
    "MSG_USERDATA_PARSE_ERROR",
    ()=>MSG_USERDATA_PARSE_ERROR,
    "MSG_VERIFY_EMAIL_SENT",
    ()=>MSG_VERIFY_EMAIL_SENT,
    "PH_CONFIRM_PASSWORD",
    ()=>PH_CONFIRM_PASSWORD,
    "PH_DESCRIPTION",
    ()=>PH_DESCRIPTION,
    "PH_EVENT_TITLE",
    ()=>PH_EVENT_TITLE,
    "PH_NAME",
    ()=>PH_NAME,
    "PH_ORG_EMAIL",
    ()=>PH_ORG_EMAIL,
    "PH_ORG_ORGANIZATION_NAME",
    ()=>PH_ORG_ORGANIZATION_NAME,
    "PH_PASSWORD",
    ()=>PH_PASSWORD,
    "PH_USER_EMAIL",
    ()=>PH_USER_EMAIL,
    "PH_VENUE",
    ()=>PH_VENUE,
    "ROLE_ADMIN",
    ()=>ROLE_ADMIN,
    "ROLE_ORGANIZER",
    ()=>ROLE_ORGANIZER,
    "ROLE_ORGANIZER_ALL",
    ()=>ROLE_ORGANIZER_ALL,
    "ROLE_USER",
    ()=>ROLE_USER,
    "STORAGE_TOKEN",
    ()=>STORAGE_TOKEN,
    "STORAGE_USER_DATA",
    ()=>STORAGE_USER_DATA,
    "STORAGE_USER_EMAIL",
    ()=>STORAGE_USER_EMAIL,
    "SUBTITLE_ORG_ACCOUNT_CREATION",
    ()=>SUBTITLE_ORG_ACCOUNT_CREATION,
    "SUBTITLE_ORG_CATEGORY",
    ()=>SUBTITLE_ORG_CATEGORY,
    "SUBTITLE_ORG_DETAILS",
    ()=>SUBTITLE_ORG_DETAILS,
    "SUBTITLE_ORG_LOGIN",
    ()=>SUBTITLE_ORG_LOGIN,
    "SUBTITLE_USER_LOGIN",
    ()=>SUBTITLE_USER_LOGIN,
    "SUBTITLE_USER_SIGNUP",
    ()=>SUBTITLE_USER_SIGNUP,
    "SUB_TITLE_DELETE_ACCOUNT",
    ()=>SUB_TITLE_DELETE_ACCOUNT,
    "SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT",
    ()=>SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT,
    "SUB_TITLE_DOMAIN_MAIL_VERIFY",
    ()=>SUB_TITLE_DOMAIN_MAIL_VERIFY,
    "SUB_TITLE_EMAIL_NOT_RECEIVE",
    ()=>SUB_TITLE_EMAIL_NOT_RECEIVE,
    "SUB_TITLE_EMAIL_VERIFY",
    ()=>SUB_TITLE_EMAIL_VERIFY,
    "SUB_TITLE_EMAIL_VERIFY_FAILED",
    ()=>SUB_TITLE_EMAIL_VERIFY_FAILED,
    "SUB_TITLE_EMAIL_VERIFY_SUCCESS",
    ()=>SUB_TITLE_EMAIL_VERIFY_SUCCESS,
    "SUB_TITLE_ENTER_OTP",
    ()=>SUB_TITLE_ENTER_OTP,
    "SUB_TITLE_OFFERS",
    ()=>SUB_TITLE_OFFERS,
    "SUB_TITLE_OTP_NOT_RECEIVE",
    ()=>SUB_TITLE_OTP_NOT_RECEIVE,
    "SUB_TITLE_OTP_SEND",
    ()=>SUB_TITLE_OTP_SEND,
    "SUB_TITLE_OTP_SENT_YOUR_GMAIL",
    ()=>SUB_TITLE_OTP_SENT_YOUR_GMAIL,
    "SUB_TITLE_PAID",
    ()=>SUB_TITLE_PAID,
    "SUB_TITLE_PASSWORD_UPDATE_SUCCESS",
    ()=>SUB_TITLE_PASSWORD_UPDATE_SUCCESS,
    "SUB_TITLE_SET_NEW_PASSWORD",
    ()=>SUB_TITLE_SET_NEW_PASSWORD,
    "SUB_TITLE_SET_PASSWORD",
    ()=>SUB_TITLE_SET_PASSWORD,
    "SUB_TITLE_UPLOAD_PROFILE",
    ()=>SUB_TITLE_UPLOAD_PROFILE,
    "TEXT_FORGOT_PASSWORD",
    ()=>TEXT_FORGOT_PASSWORD,
    "TEXT_NO_ACCOUNT",
    ()=>TEXT_NO_ACCOUNT,
    "TEXT_SIGNIN",
    ()=>TEXT_SIGNIN,
    "TEXT_SIGNUP",
    ()=>TEXT_SIGNUP,
    "TITLE_ALREADY_HAVE_ACCOUNT",
    ()=>TITLE_ALREADY_HAVE_ACCOUNT,
    "TITLE_BOOKING_EVENT",
    ()=>TITLE_BOOKING_EVENT,
    "TITLE_CHANGE_YOUR_PASSWORD",
    ()=>TITLE_CHANGE_YOUR_PASSWORD,
    "TITLE_COVER_IMAGE",
    ()=>TITLE_COVER_IMAGE,
    "TITLE_EMAIL_VERIFY",
    ()=>TITLE_EMAIL_VERIFY,
    "TITLE_EMAIL_VERIFY_FAILED",
    ()=>TITLE_EMAIL_VERIFY_FAILED,
    "TITLE_EMAIL_VERIFY_SUCCESS",
    ()=>TITLE_EMAIL_VERIFY_SUCCESS,
    "TITLE_ENTER_OTP",
    ()=>TITLE_ENTER_OTP,
    "TITLE_MANAGE_PAGE",
    ()=>TITLE_MANAGE_PAGE,
    "TITLE_ORG_ACCOUNT_CREATION",
    ()=>TITLE_ORG_ACCOUNT_CREATION,
    "TITLE_ORG_CATEGORY",
    ()=>TITLE_ORG_CATEGORY,
    "TITLE_ORG_LOGIN_MAIN",
    ()=>TITLE_ORG_LOGIN_MAIN,
    "TITLE_RATINGS_REVIEWS",
    ()=>TITLE_RATINGS_REVIEWS,
    "TITLE_SAVED_EVENT",
    ()=>TITLE_SAVED_EVENT,
    "TITLE_SET_NEW_CONFIRM_PASSWORD",
    ()=>TITLE_SET_NEW_CONFIRM_PASSWORD,
    "TITLE_SET_NEW_PASSWORD",
    ()=>TITLE_SET_NEW_PASSWORD,
    "TITLE_SET_YOUR_PASSWORD",
    ()=>TITLE_SET_YOUR_PASSWORD,
    "TITLE_USER_LOGIN",
    ()=>TITLE_USER_LOGIN,
    "TITLE_USER_SIGNUP",
    ()=>TITLE_USER_SIGNUP,
    "TITLE_VERIFY_ACCOUNT",
    ()=>TITLE_VERIFY_ACCOUNT,
    "TITLE_WELCOME_DASHBOARD",
    ()=>TITLE_WELCOME_DASHBOARD,
    "TITLE_YOUR_NETWORK",
    ()=>TITLE_YOUR_NETWORK
]);
const METADATA_TITEL = "AllCollegeEvent";
const METADATA_DESCRIPTION = "All college events — user & organizer platform";
const LABEL_LOGOUT = "Logout";
const LABEL_DASHBOARD = "Dashboard";
const LABEL_LOADING = "Loading...";
const LABEL_LOADING_STATES = "Loading States...";
const LABEL_LOADING_CITIES = "Loading Cities...";
const LABEL_LOADING_COLLEGE = "Loading colleges...";
const LABEL_ORG_SELECT_COUNTRY = "Select Country";
const LABEL_ORG_SELECT_STATE = "Select State";
const LABEL_ORG_SELECT_CITY = "Select City";
const LABEL_ORG_SELECT_COLLEGE = "Select College";
const TITLE_WELCOME_DASHBOARD = "Welcome to your dashboard";
const TITLE_ORG_LOGIN_MAIN = "Host. Manage. Inspire.";
const TITLE_ORG_ACCOUNT_CREATION = "Account Creation";
const TITLE_VERIFY_ACCOUNT = "Verify your Account";
const TITLE_ORG_CATEGORY = "Organization Category";
const TITLE_USER_LOGIN = "Welcome Back";
const TITLE_USER_SIGNUP = "Join us Now!!";
const SUBTITLE_USER_SIGNUP = "Let's Create your account";
const SUBTITLE_USER_LOGIN = "Please login your account";
const SUBTITLE_ORG_DETAILS = "Provide your organization information";
const SUBTITLE_ORG_LOGIN = "Turn Ideas into Events — Let's Begin!";
const SUBTITLE_ORG_ACCOUNT_CREATION = "Add your domain mail id and set a password";
const SUBTITLE_ORG_CATEGORY = "Select which category best describes your organization";
const ACTION_CREATE_EVENT = "Create Event";
const ACTION_LIST_EVENT = "List Event";
const ACTION_MY_EVENT = "My Events";
const MSG_LOGOUT_SUCCESS = "Logged out successfully!";
const MSG_GENERIC_ERROR = "Something went wrong. Please try again!";
const MSG_ORGANIZER_NOT_FOUND = "Organizer not found";
const MSG_EVENT_LOAD_FAILED = "Failed to load events";
const MSG_EVENT_LOAD_ERROR = "Something went wrong while loading events";
const MSG_LOGOUT_FAILED = "Failed to logout";
const MSG_NOIMAGE_FAILED = "No Image";
const MSG_NO_EVENT_FOUND_FOR_ORGANIZER = "No events found for this organizer";
const MSG_NO_EVENT_FOUND_FOR_USER = "No events available at the moment";
const MSG_EVENT_UPDATE_SUCCESS = "Event updated successfully!";
const MSG_EVENT_UPDATE_FAILED = "Update failed";
const MSG_EVENT_UPDATE_ERROR = "Error while updating";
const MSG_EVENT_CREATE_SUCCESS = "Event created successfully!";
const MSG_EVENT_CREATE_FAILED = "Creation failed";
const MSG_EVENT_CREATE_ERROR = "Error creating event";
const MSG_INVALID_CREDENTIALS = "Invalid credentials";
const MSG_LOGIN_SUCCESS_ORGANIZER = "Organizer Logged In Successfully!";
const MSG_VERIFY_EMAIL_SENT = "Link has been sent to your xyz.com domain mail id.\nPlease click and verify your account.";
const MSG_ERR_FILL_ALL_FIELDS = "Fill all fields";
const MSG_ERR_PASSWORD_MISMATCH = "Passwords do not match";
const MSG_ERR_CATEGORY_MISSING = "Category missing.";
const MSG_ERR_SIGNUP_FAILED = "Signup failed";
const MSG_SIGNUP_SUCCESS = "Signup successfully!";
const MSG_ORG_SELECT_COUNTRY = "Select country first";
const MSG_ORG_SELECT_STATE = "Select state first";
const MSG_LOGIN_SUCCESS_USER = "Login Successful!";
const MSG_GOOGLE_LOGIN_SUCCESS_USER = "Google Login Successful!";
const MSG_LOGIN_FAILED = "Login Failed";
const MSG_GOOGLE_LOGIN_FAILED = "Google Login Failed";
const LABEL_EVENT_DATE = "Date";
const LABEL_EVENT_TIME = "Time";
const LABEL_EVENT_PRICE = "Price";
const LABEL_EVENT_VENUE = "Venue";
const LABEL_EVENT_MODE = "Mode";
const LABEL_EVENT_DESCRIPTION = "Event Description";
const ROLE_USER = "user";
const ROLE_ORGANIZER = "org";
const ROLE_ORGANIZER_ALL = "organizer";
const ROLE_ADMIN = "admin";
const IMAGE_ALT = "no image";
const MODE_OFFLINE = "offline";
const MODE_HYBRID = "hybrid";
const MODE_ONLINE = "online";
const INPUT_TEXT = "text";
const INPUT_PASSWORD = "password";
const TEXT_FORGOT_PASSWORD = "Forgot Password?";
const TEXT_SIGNIN = "Sign In";
const TEXT_NO_ACCOUNT = "Didn’t have an Account?";
const TEXT_SIGNUP = "Sign Up";
const DEFAULT_TEXT = "N/A";
const DEFAULT_UNKNOWN = "Unknown";
const DEFAULT_PRICE = 0;
const DEFAULT_MODE = "Not Specified";
const DEFAULT_DATE = "Not Available";
const DEFAULT_TIME = "--";
const DEFAULT_BACK = "Back";
const DEFAULT_COLLEGE = "college";
const DEFAULT_TRAINING = "training";
const LABEL_FORM_EVENT_TITLE = "Event Title";
const LABEL_FORM_DESCRIPTION = "Description";
const LABEL_FORM_IMAGE = "Event Image";
const LABEL_SELECT_MODE = "Select Mode";
const LABEL_ORG_EMAIL = "Domain Mail ID";
const LABEL_EMAIL = "Email";
const LABEL_NAME = "Name";
const LABEL_PASSWORD = "Password";
const LABEL_CONFIRM_PASSWORD = "Confirm Password";
const LABEL_ORG_STEP_CATEGORY = "Organization Category";
const LABEL_ORG_STEP_DETAILS = "Organization Details";
const LABEL_ORG_STEP_ACCOUNT = "Account Creation";
const LABEL_ORG_COUNTRY = "Country";
const LABEL_ORG_STATE = "State";
const LABEL_ORG_CITY = "City";
const LABEL_ORG_NAME = "Organization Name";
const LABEL_SET_NEW_PASSWORD = "Set new password";
const PH_ORG_EMAIL = "Enter your domain mail id";
const PH_PASSWORD = "Enter your password";
const PH_USER_EMAIL = "Enter your email";
const PH_NAME = "Enter your name";
const PH_VENUE = "Enter venue";
const PH_DESCRIPTION = "Enter description";
const PH_EVENT_TITLE = "Enter event title";
const PH_CONFIRM_PASSWORD = "Re-enter your password";
const PH_ORG_ORGANIZATION_NAME = "Enter Organization Name";
const BTN_UPDATE_EVENT = "Update Event";
const BTN_SUBMIT_EVENT = "Submit Event";
const BTN_VERIFY_DOMAIN = "Verify Your Domain";
const BTN_VERIFY_DOMAIN_LOADING = "Saving...";
const BTN_CLOSE = "close";
const BTN_CONTINUE = "Continue";
const CAT_COLLEGE = "College / University";
const CAT_TRAINING = "Training & Coaching Institute";
const CAT_INDIVIDUAL = "Individual / Freelancer";
const CAT_EVENT_COMPANY = "Event Management Company";
const CAT_TECH_COMMUNITY = "Tech / Professional Community";
const CAT_SPORTS = "Sports Club / Fitness Association";
const CAT_CORPORATE = "Corporate / Company";
const CAT_GOVERNMENT = "Government Organization";
const CAT_NGO = "NGO / Non-Profit Organization";
const STORAGE_TOKEN = "token";
const STORAGE_USER_DATA = "userData";
const STORAGE_USER_EMAIL = "userEmail";
const MSG_TOKEN_DECODE_FAILED = "Token decode failed";
const MSG_GET_TOKEN_ERROR = "Get token error";
const MSG_USERDATA_PARSE_ERROR = "UserData parse error";
const MSG_CLEAR_TOKEN_ERROR = "Clear token error";
const MSG_SAVE_EMAIL_ERROR = "Save email error";
const MSG_GET_EMAIL_ERROR = "Get email error";
const MSG_CLEAR_EMAIL_ERROR = "Clear email error";
const MSG_EMAIL_VERIFY_FAILED = "failed";
const MSG_EMAIL_VERIFY_SUCCESS = "success";
const MSG_EMAIL_VERIFY_LOADING = "loading";
const MSG_OTP_VERIFIED = "Code verified!";
const MSG_OTP_INVALID = "Invalid code";
const MSG_OTP_ERROR = "Something went wrong";
const MSG_NEW_OTP_SEND = "New code sent!";
const MSG_NEW_OTP_FAILED_TO_SEND = "Failed to resend";
const MSG_OTP_SEND_EMAIL = "Code sent to your email";
const MSG_OTP_SEND_EMAIL_ERROR = "Email not found";
const MSG_PASSWORD_UPDATED_SUCCESS = "Password updated successfully";
const MSG_PASSWORD_UPDATED_FAILED = "Failed to update password";
const MSG_SUCCESSFULLY_UPDATED = "Successfully Updated!!";
const MSG_DELETE_ACCOUNT = "Delete Account Permanently?";
const MSG_DELETED_YOUR_ACCOUNT = "Your account was deleted";
const MSG_PASSWORD_CHANGED_SUCCESS = "Password Successfully Changed!!";
const TITLE_EMAIL_VERIFY = "Verifying your account";
const TITLE_EMAIL_VERIFY_SUCCESS = "Account Verified";
const TITLE_EMAIL_VERIFY_FAILED = "Verification Failed";
const TITLE_ENTER_OTP = "Enter Code";
const TITLE_ALREADY_HAVE_ACCOUNT = "Already have an Account?";
const TITLE_SET_NEW_PASSWORD = "Set New Password";
const TITLE_SET_NEW_CONFIRM_PASSWORD = "Confirm password";
const TITLE_BOOKING_EVENT = "Booking Events";
const TITLE_SAVED_EVENT = "Saved Events";
const TITLE_YOUR_NETWORK = "Your Network";
const TITLE_MANAGE_PAGE = "Manage Page";
const TITLE_COVER_IMAGE = "Upload Cover Image";
const TITLE_RATINGS_REVIEWS = "Ratings and Reviews";
const TITLE_CHANGE_YOUR_PASSWORD = "Change Your Password";
const TITLE_SET_YOUR_PASSWORD = "Set Your Password";
const SUB_TITLE_EMAIL_VERIFY = "Please wait while we verify your email…";
const SUB_TITLE_EMAIL_VERIFY_SUCCESS = "Your account has been successfully verified.You can now login to continue.";
const SUB_TITLE_EMAIL_VERIFY_FAILED = "The verification link is invalid or has expired.Please request a new verification email.";
const SUB_TITLE_ENTER_OTP = "Enter the 4-digit code sent to";
const SUB_TITLE_OTP_NOT_RECEIVE = "Didn’t receive the code?";
const SUB_TITLE_OTP_SEND = "No worries, we'll send you a code";
const SUB_TITLE_SET_NEW_PASSWORD = "Must be at least 8 characters";
const SUB_TITLE_DOMAIN_MAIL_VERIFY = "Link has been sent to your domain mail. Please verify your account.";
const SUB_TITLE_PASSWORD_UPDATE_SUCCESS = "Your password has been updated successfully";
const SUB_TITLE_OFFERS = "Offers";
const SUB_TITLE_PAID = "Paid";
const SUB_TITLE_DELETE_ACCOUNT = "This will permanently delete your account and all data.";
const SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT = "This action cannot be undone.";
const SUB_TITLE_UPLOAD_PROFILE = "Upload Profile picture (1:1) in PNG or JPEG Format";
const SUB_TITLE_OTP_SENT_YOUR_GMAIL = "Please enter the code sent to your gmail account";
const SUB_TITLE_EMAIL_NOT_RECEIVE = "Didn’t receive the email?";
const SUB_TITLE_SET_PASSWORD = "It must contain at least 8 characters, including numbers and symbols.";
const BTN_EMAIL_VERIFY_SUCCESS = "Go to Login";
const BTN_EMAIL_VERIFY_FAILED = "Try Again";
const BTN_OTP_SEND = "Send Code";
const BTN_CANCEL = "Cancel";
const BTN_CONFRIM = "Confirm";
const BTN_DELETE_ACCOUNT = "Delete Account";
const BTN_UNFOLLOW = "Unfollow";
const BTN_SAVE_CHANGES = "Save Changes";
const BTN_CHANGE_PASSWORD = "Change Password";
const BTN_OTP_RESEND = "Resend Code";
const CONDITION_OTP_VERIFY = "Verifying...";
const CONDITION_OTP_SEND = "Sending...";
const CONDITION_OTP_RESEND = "Resend Code";
const LABEL_FULL_NAME = "Full Name";
const LABEL_DOMAIN_MAIL_ID = "Domain Mail ID";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmEmailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ConfirmEmailModal({ open, email, title, description, confirmText = "Confirm", cancelText = "Cancel", onConfirm, onCancel }) {
    _s();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmEmailModal.useEffect": ()=>{
            if (open) setInput("");
        }
    }["ConfirmEmailModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    const isValid = input === email;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "confirm-backdrop",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "confirm-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        description,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: email
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "Type your email",
                    value: input,
                    onChange: (e)=>setInput(e.target.value),
                    onPaste: (e)=>e.preventDefault(),
                    onDrop: (e)=>e.preventDefault(),
                    autoComplete: "off",
                    spellCheck: false
                }, void 0, false, {
                    fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "confirm-actions",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-cancel",
                            onClick: onCancel,
                            children: cancelText
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-confirm",
                            disabled: !isValid,
                            onClick: onConfirm,
                            children: confirmText
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ConfirmEmailModal, "y6DHqSapwwPGXJTFqIrQC3liGB8=");
_c = ConfirmEmailModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmEmailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/Navbar/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logout.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-message/page.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ConfirmEmailModal$2f$ConfirmEmailModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/ConfirmEmailModal/ConfirmEmailModal.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Navbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [initial, setInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("U");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // NEW STATES
    const [showLogoutModal, setShowLogoutModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirmEmail, setConfirmEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
            if (userData?.email) {
                setIsLoggedIn(true);
                setUserEmail(userData.email);
                setInitial(userData.email.charAt(0).toUpperCase());
            }
        }
    }["Navbar.useEffect"], []);
    if (!mounted) return null;
    const handleCreateEvent = ()=>{
        setMenuOpen(false);
        router.push("/auth/organization/signup/category");
    };
    const handleSignup = ()=>{
        setMenuOpen(false);
        router.push("/auth/user/login");
    };
    // OLD logout removed
    const handleLogoutClick = ()=>{
        setMenuOpen(false);
        setConfirmEmail("");
        setShowLogoutModal(true);
    };
    // FINAL LOGOUT
    const confirmLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutOrganizer"])();
        setShowLogoutModal(false);
        router.push("/");
    };
    const handleProfileClick = ()=>{
        setMenuOpen(false);
        router.push("/dashboard");
    };
    const isEmailMatch = confirmEmail === userEmail;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "nav-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/logo.png",
                            alt: "logo",
                            className: "nav-logo",
                            onClick: ()=>router.push("/")
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "nav-explore",
                            children: "Explore ▼"
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/global/Navbar/Navbar.js",
                    lineNumber: 75,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-search-box",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search anything",
                                className: "search-input"
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "nav-location-btn",
                            children: "📍"
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "nav-create",
                                    onClick: handleCreateEvent,
                                    children: "Create Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/Navbar/Navbar.js",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "nav-create",
                                    onClick: handleSignup,
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/Navbar/Navbar.js",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/global/Navbar/Navbar.js",
                    lineNumber: 86,
                    columnNumber: 9
                }, this),
                isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `nav-right ${menuOpen ? "open" : ""}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowLogoutModal(true),
                            className: "logout-btn",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LABEL_LOGOUT"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 113,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "nav-avatar-btn",
                            onClick: handleProfileClick,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "nav-letter-avatar",
                                children: initial
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/global/Navbar/Navbar.js",
                    lineNumber: 112,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `nav-hamburger ${menuOpen ? "is-open" : ""}`,
                    onClick: ()=>setMenuOpen(!menuOpen),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bar"
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/global/Navbar/Navbar.js",
                    lineNumber: 127,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/global/Navbar/Navbar.js",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Navbar, "ihIN+yiCJzHoS39WRB+MHAUTRNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientLayout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/Navbar/Navbar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ClientLayout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const hideNavbar = pathname.startsWith("/auth") || pathname.startsWith("/login") || pathname.startsWith("/signup");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !hideNavbar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/ClientLayout.js",
                lineNumber: 16,
                columnNumber: 23
            }, this),
            children
        ]
    }, void 0, true);
}
_s(ClientLayout, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/authSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "loginSuccess",
    ()=>loginSuccess,
    "logout",
    ()=>logout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
;
;
const initialState = {
    user: null,
    organizer: null,
    role: null,
    isLoggedIn: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action)=>{
            const { data, role } = action.payload;
            state.role = role;
            state.isLoggedIn = true;
            if (role === "user") {
                state.user = data;
                state.organizer = null;
            }
            if (role === "organizer") {
                state.organizer = data;
                state.user = null;
            }
        },
        logout: (state)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearToken"])();
            state.user = null;
            state.organizer = null;
            state.role = null;
            state.isLoggedIn = false;
        }
    }
});
const { loginSuccess, logout } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/store.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/authSlice.js [app-client] (ecmascript)");
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$authSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Providers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/store.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-right"
            }, void 0, false, {
                fileName: "[project]/src/components/Providers.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Providers.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_148815ea._.js.map