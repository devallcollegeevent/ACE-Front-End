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
    const [initial, setInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("U");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // ✅ NEW
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
    const handleCreateEvent = ()=>{
        setMenuOpen(false);
        router.push("/organizer/login");
    };
    const handleSignup = ()=>{
        setMenuOpen(false);
        router.push("/login");
    };
    const handleLogout = ()=>{
        setMenuOpen(false);
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
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-explore",
                        children: "Explore ▼"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 48,
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
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-location-btn",
                        children: "📍"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-create",
                        onClick: handleCreateEvent,
                        children: "Create Event"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-create",
                        onClick: handleSignup,
                        children: "Signup"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `nav-right ${menuOpen ? "open" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "logout-btn",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LABEL_LOGOUT"]
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "nav-avatar-btn",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-letter-avatar",
                            children: initial
                        }, void 0, false, {
                            fileName: "[project]/src/components/global/Navbar/Navbar.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `nav-hamburger ${menuOpen ? "is-open" : ""}`,
                onClick: ()=>setMenuOpen(!menuOpen),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bar"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/Navbar/Navbar.js",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Navbar/Navbar.js",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/Navbar/Navbar.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Navbar, "ryynLiDj/v7wIid2f7+SB959B5g=", false, function() {
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
"[project]/src/app/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/Navbar/Navbar.js [app-client] (ecmascript)");
"use client";
;
;
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Navbar$2f$Navbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/layout.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_67ac7a88._.js.map