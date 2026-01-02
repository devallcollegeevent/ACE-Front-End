(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/auth.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearToken",
    ()=>clearToken,
    "getToken",
    ()=>getToken,
    "getUserData",
    ()=>getUserData,
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

// =========================================================
// META
// =========================================================
__turbopack_context__.s([
    "ACTION_CREATE_EVENT",
    ()=>ACTION_CREATE_EVENT,
    "ACTION_LIST_EVENT",
    ()=>ACTION_LIST_EVENT,
    "ACTION_MY_EVENT",
    ()=>ACTION_MY_EVENT,
    "BTN_CLOSE",
    ()=>BTN_CLOSE,
    "BTN_CONTINUE",
    ()=>BTN_CONTINUE,
    "BTN_SUBMIT",
    ()=>BTN_SUBMIT,
    "BTN_UPDATE",
    ()=>BTN_UPDATE,
    "BTN_VERIFY",
    ()=>BTN_VERIFY,
    "DEFAULT_BACK",
    ()=>DEFAULT_BACK,
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
    "DEFAULT_UNKNOWN",
    ()=>DEFAULT_UNKNOWN,
    "INPUT_PASSWORD",
    ()=>INPUT_PASSWORD,
    "INPUT_TEXT",
    ()=>INPUT_TEXT,
    "LABEL_CONFIRM_PASSWORD",
    ()=>LABEL_CONFIRM_PASSWORD,
    "LABEL_DASHBOARD",
    ()=>LABEL_DASHBOARD,
    "LABEL_EMAIL",
    ()=>LABEL_EMAIL,
    "LABEL_EVENT_DESCRIPTION",
    ()=>LABEL_EVENT_DESCRIPTION,
    "LABEL_EVENT_TITLE",
    ()=>LABEL_EVENT_TITLE,
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
    "LABEL_ORG_SELECT_CITY",
    ()=>LABEL_ORG_SELECT_CITY,
    "LABEL_ORG_SELECT_COLLEGE",
    ()=>LABEL_ORG_SELECT_COLLEGE,
    "LABEL_ORG_SELECT_COUNTRY",
    ()=>LABEL_ORG_SELECT_COUNTRY,
    "LABEL_ORG_SELECT_STATE",
    ()=>LABEL_ORG_SELECT_STATE,
    "LABEL_PASSWORD",
    ()=>LABEL_PASSWORD,
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
    "MSG_EMAIL_VERIFY_FAILED",
    ()=>MSG_EMAIL_VERIFY_FAILED,
    "MSG_EMAIL_VERIFY_LOADING",
    ()=>MSG_EMAIL_VERIFY_LOADING,
    "MSG_EMAIL_VERIFY_SUCCESS",
    ()=>MSG_EMAIL_VERIFY_SUCCESS,
    "MSG_EVENT_CREATE_FAILED",
    ()=>MSG_EVENT_CREATE_FAILED,
    "MSG_EVENT_CREATE_SUCCESS",
    ()=>MSG_EVENT_CREATE_SUCCESS,
    "MSG_EVENT_LOAD_ERROR",
    ()=>MSG_EVENT_LOAD_ERROR,
    "MSG_EVENT_LOAD_FAILED",
    ()=>MSG_EVENT_LOAD_FAILED,
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
    "MSG_NEW_OTP_FAILED_TO_SEND",
    ()=>MSG_NEW_OTP_FAILED_TO_SEND,
    "MSG_NEW_OTP_SEND",
    ()=>MSG_NEW_OTP_SEND,
    "MSG_NO_EVENT_FOUND_FOR_ORGANIZER",
    ()=>MSG_NO_EVENT_FOUND_FOR_ORGANIZER,
    "MSG_NO_EVENT_FOUND_FOR_USER",
    ()=>MSG_NO_EVENT_FOUND_FOR_USER,
    "MSG_OTP_ERROR",
    ()=>MSG_OTP_ERROR,
    "MSG_OTP_INVALID",
    ()=>MSG_OTP_INVALID,
    "MSG_OTP_VERIFIED",
    ()=>MSG_OTP_VERIFIED,
    "MSG_PASSWORD_UPDATED_FAILED",
    ()=>MSG_PASSWORD_UPDATED_FAILED,
    "MSG_PASSWORD_UPDATED_SUCCESS",
    ()=>MSG_PASSWORD_UPDATED_SUCCESS,
    "MSG_SAVE_EMAIL_ERROR",
    ()=>MSG_SAVE_EMAIL_ERROR,
    "MSG_SIGNUP_SUCCESS",
    ()=>MSG_SIGNUP_SUCCESS,
    "MSG_TOKEN_DECODE_FAILED",
    ()=>MSG_TOKEN_DECODE_FAILED,
    "MSG_USERDATA_PARSE_ERROR",
    ()=>MSG_USERDATA_PARSE_ERROR,
    "PH_CONFIRM_PASSWORD",
    ()=>PH_CONFIRM_PASSWORD,
    "PH_DESCRIPTION",
    ()=>PH_DESCRIPTION,
    "PH_EMAIL",
    ()=>PH_EMAIL,
    "PH_EVENT_TITLE",
    ()=>PH_EVENT_TITLE,
    "PH_PASSWORD",
    ()=>PH_PASSWORD,
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
    "TEXT_FORGOT_PASSWORD",
    ()=>TEXT_FORGOT_PASSWORD,
    "TEXT_NO_ACCOUNT",
    ()=>TEXT_NO_ACCOUNT,
    "TEXT_SIGNIN",
    ()=>TEXT_SIGNIN,
    "TEXT_SIGNUP",
    ()=>TEXT_SIGNUP,
    "TITLE_ORG_ACCOUNT_CREATION",
    ()=>TITLE_ORG_ACCOUNT_CREATION,
    "TITLE_ORG_CATEGORY",
    ()=>TITLE_ORG_CATEGORY,
    "TITLE_ORG_LOGIN_MAIN",
    ()=>TITLE_ORG_LOGIN_MAIN,
    "TITLE_USER_LOGIN",
    ()=>TITLE_USER_LOGIN,
    "TITLE_USER_SIGNUP",
    ()=>TITLE_USER_SIGNUP,
    "TITLE_VERIFY_ACCOUNT",
    ()=>TITLE_VERIFY_ACCOUNT,
    "TITLE_WELCOME_DASHBOARD",
    ()=>TITLE_WELCOME_DASHBOARD
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
const MSG_GENERIC_ERROR = "Something went wrong. Please try again!";
const MSG_INVALID_CREDENTIALS = "Invalid credentials";
const MSG_LOGIN_FAILED = "Login Failed";
const MSG_SIGNUP_SUCCESS = "Signup successfully!";
const MSG_LOGIN_SUCCESS_USER = "Login Successful!";
const MSG_LOGIN_SUCCESS_ORGANIZER = "Organizer Logged In Successfully!";
const MSG_GOOGLE_LOGIN_SUCCESS_USER = "Google Login Successful!";
const MSG_GOOGLE_LOGIN_FAILED = "Google Login Failed";
const MSG_EVENT_LOAD_FAILED = "Failed to load events";
const MSG_EVENT_LOAD_ERROR = "Something went wrong while loading events";
const MSG_EVENT_CREATE_SUCCESS = "Event created successfully!";
const MSG_EVENT_CREATE_FAILED = "Creation failed";
const MSG_EVENT_UPDATE_SUCCESS = "Event updated successfully!";
const MSG_EVENT_UPDATE_FAILED = "Update failed";
const MSG_NO_EVENT_FOUND_FOR_USER = "No events available at the moment";
const MSG_NO_EVENT_FOUND_FOR_ORGANIZER = "No events found for this organizer";
const ROLE_USER = "user";
const ROLE_ORGANIZER = "org";
const ROLE_ORGANIZER_ALL = "organizer";
const ROLE_ADMIN = "admin";
const MODE_OFFLINE = "offline";
const MODE_ONLINE = "online";
const MODE_HYBRID = "hybrid";
const INPUT_TEXT = "text";
const INPUT_PASSWORD = "password";
const TEXT_FORGOT_PASSWORD = "Forgot Password?";
const TEXT_SIGNIN = "Sign In";
const TEXT_SIGNUP = "Sign Up";
const TEXT_NO_ACCOUNT = "Didn’t have an Account?";
const DEFAULT_TEXT = "N/A";
const DEFAULT_UNKNOWN = "Unknown";
const DEFAULT_PRICE = 0;
const DEFAULT_MODE = "Not Specified";
const DEFAULT_DATE = "Not Available";
const DEFAULT_TIME = "--";
const DEFAULT_BACK = "Back";
const LABEL_EMAIL = "Email";
const LABEL_PASSWORD = "Password";
const LABEL_CONFIRM_PASSWORD = "Confirm Password";
const LABEL_NAME = "Name";
const LABEL_EVENT_TITLE = "Event Title";
const LABEL_EVENT_DESCRIPTION = "Event Description";
const PH_EMAIL = "Enter your email";
const PH_PASSWORD = "Enter your password";
const PH_CONFIRM_PASSWORD = "Re-enter your password";
const PH_EVENT_TITLE = "Enter event title";
const PH_DESCRIPTION = "Enter description";
const BTN_SUBMIT = "Submit";
const BTN_CONTINUE = "Continue";
const BTN_CLOSE = "Close";
const BTN_UPDATE = "Update";
const BTN_VERIFY = "Verify";
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
const MSG_EMAIL_VERIFY_LOADING = "loading";
const MSG_EMAIL_VERIFY_SUCCESS = "success";
const MSG_EMAIL_VERIFY_FAILED = "failed";
const MSG_OTP_VERIFIED = "Code verified!";
const MSG_OTP_INVALID = "Invalid code";
const MSG_OTP_ERROR = "Something went wrong";
const MSG_NEW_OTP_SEND = "New code sent!";
const MSG_NEW_OTP_FAILED_TO_SEND = "Failed to resend";
const MSG_PASSWORD_UPDATED_SUCCESS = "Password updated successfully";
const MSG_PASSWORD_UPDATED_FAILED = "Failed to update password";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/Navbar/Navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bar": "Navbar-module__g5-8Ga__bar",
  "explore-dropdown": "Navbar-module__g5-8Ga__explore-dropdown",
  "fadeIn": "Navbar-module__g5-8Ga__fadeIn",
  "is-open": "Navbar-module__g5-8Ga__is-open",
  "location-icon-react": "Navbar-module__g5-8Ga__location-icon-react",
  "location-modal": "Navbar-module__g5-8Ga__location-modal",
  "location-modal-overlay": "Navbar-module__g5-8Ga__location-modal-overlay",
  "logout-btn": "Navbar-module__g5-8Ga__logout-btn",
  "nav-avatar-btn": "Navbar-module__g5-8Ga__nav-avatar-btn",
  "nav-avatar-img": "Navbar-module__g5-8Ga__nav-avatar-img",
  "nav-bell": "Navbar-module__g5-8Ga__nav-bell",
  "nav-bell-dot": "Navbar-module__g5-8Ga__nav-bell-dot",
  "nav-center": "Navbar-module__g5-8Ga__nav-center",
  "nav-container": "Navbar-module__g5-8Ga__nav-container",
  "nav-create": "Navbar-module__g5-8Ga__nav-create",
  "nav-explore": "Navbar-module__g5-8Ga__nav-explore",
  "nav-hamburger": "Navbar-module__g5-8Ga__nav-hamburger",
  "nav-left": "Navbar-module__g5-8Ga__nav-left",
  "nav-letter-avatar": "Navbar-module__g5-8Ga__nav-letter-avatar",
  "nav-location-btn": "Navbar-module__g5-8Ga__nav-location-btn",
  "nav-login": "Navbar-module__g5-8Ga__nav-login",
  "nav-logo": "Navbar-module__g5-8Ga__nav-logo",
  "nav-right": "Navbar-module__g5-8Ga__nav-right",
  "nav-search-box": "Navbar-module__g5-8Ga__nav-search-box",
  "notify-dropdown": "Navbar-module__g5-8Ga__notify-dropdown",
  "notify-empty": "Navbar-module__g5-8Ga__notify-empty",
  "notify-item": "Navbar-module__g5-8Ga__notify-item",
  "open": "Navbar-module__g5-8Ga__open",
  "popIn": "Navbar-module__g5-8Ga__popIn",
  "profile-dropdown": "Navbar-module__g5-8Ga__profile-dropdown",
  "profile-name": "Navbar-module__g5-8Ga__profile-name",
  "search-input": "Navbar-module__g5-8Ga__search-input",
});
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/Navbar/Navbar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    const [initial, setInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("U");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            setMounted(true);
            const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
            if (userData?.email) {
                setInitial(userData.email.charAt(0).toUpperCase());
            }
        }
    }["Navbar.useEffect"], []);
    if (!mounted) return null;
    // 👉 Direct routes (NO routes.js)
    const handleCreateEvent = ()=>{
        router.push("/organizer/login");
    };
    const handleSignup = ()=>{
        router.push("/login");
    };
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logoutOrganizer"])();
        router.push("/organizer/login");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "nav-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/logo.png",
                        alt: "logo",
                        className: "nav-logo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-explore",
                        children: "Explore ▼"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 45,
                columnNumber: 7
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
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-location-btn",
                        children: "📍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-create",
                        onClick: handleCreateEvent,
                        children: "Create Event"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-create",
                        onClick: handleSignup,
                        children: "Signup"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-right",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "logout-btn",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LABEL_LOGOUT"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-avatar-btn",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-letter-avatar",
                            children: initial
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/Navbar/Navbar.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Navbar, "MABKUmbH/Xzw5XJvpWXZqIJyJcU=", false, function() {
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/jwt-decode/build/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidTokenError",
    ()=>InvalidTokenError,
    "jwtDecode",
    ()=>jwtDecode
]);
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p)=>{
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}
}),
]);

//# sourceMappingURL=_962b2ad8._.js.map