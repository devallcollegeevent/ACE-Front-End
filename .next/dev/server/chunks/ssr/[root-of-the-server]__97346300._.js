module.exports = [
"[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "ProfileHeader-module__iIKcgW__avatar",
  "avatarFallback": "ProfileHeader-module__iIKcgW__avatarFallback",
  "content": "ProfileHeader-module__iIKcgW__content",
  "cover": "ProfileHeader-module__iIKcgW__cover",
  "followInfo": "ProfileHeader-module__iIKcgW__followInfo",
  "info": "ProfileHeader-module__iIKcgW__info",
  "name": "ProfileHeader-module__iIKcgW__name",
  "rank": "ProfileHeader-module__iIKcgW__rank",
  "role": "ProfileHeader-module__iIKcgW__role",
  "wrapper": "ProfileHeader-module__iIKcgW__wrapper",
});
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/axiosPrivate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-ssr] (ecmascript)");
;
;
const apiPrivate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://3.6.238.72:5000/api")
});
apiPrivate.interceptors.request.use((config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getToken"])();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
apiPrivate.interceptors.response.use((res)=>res, (err)=>{
    if (err.response?.status === 401) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearToken"])();
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    return Promise.reject(err);
});
const __TURBOPACK__default__export__ = apiPrivate;
}),
"[project]/src/lib/api/endpoints.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/api/endpoints.js
__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
const API_ENDPOINTS = {
    /* ================= EVENTS ================= */ EVENTS: {
        ALL: "/v1/events"
    },
    /* ================= AUTH ================= */ AUTH: {
        SIGNUP: "/v1/auth/signup",
        LOGIN: "/v1/auth/login",
        GOOGLE_LOGIN: "/v1/auth/google",
        FORGOT_PASSWORD: "/v1/auth/forgot-password",
        VERIFY_OTP: "/v1/auth/verify-otp",
        RESEND_OTP: "/v1/auth/resend-otp",
        RESET_PASSWORD: "/v1/auth/reset-password",
        ORG_VERIFY: "/v1/auth/org/verify"
    },
    /* ================= USERS ================= */ USER: {
        ALL: "/v1/users",
        SINGLE: (userId)=>`/v1/users/${userId}`,
        UPDATE: (userId)=>`/v1/user/${userId}`,
        DELETE: (userId)=>`/v1/user/${userId}`
    },
    /* ================= ORGANIZATIONS ================= */ ORGANIZER: {
        ALL: "/v1/organizations",
        PROFILE: (orgId)=>`/v1/organizations/${orgId}`,
        UPDATE: (orgId)=>`/v1/organizations/${orgId}`,
        DELETE: (orgId)=>`/v1/organizations/${orgId}`,
        EVENTS: (orgId)=>`/v1/organization/${orgId}/events`,
        EVENT_BY_ID: (orgId, eventId)=>`/v1/organizations/${orgId}/events/${eventId}`
    }
};
}),
"[project]/src/lib/api/apiHelper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "handleApi",
    ()=>handleApi
]);
const handleApi = async (promise)=>{
    try {
        const res = await promise;
        return res.data;
    } catch (err) {
        return err.response?.data || err;
    }
};
}),
"[project]/src/lib/api/organizer.api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOrganizerEventApi",
    ()=>createOrganizerEventApi,
    "deleteOrganizationApi",
    ()=>deleteOrganizationApi,
    "getAllOrganizationsApi",
    ()=>getAllOrganizationsApi,
    "getOrganizationProfileApi",
    ()=>getOrganizationProfileApi,
    "getOrganizerEventsApi",
    ()=>getOrganizerEventsApi,
    "getOrganizerSingleEventApi",
    ()=>getOrganizerSingleEventApi,
    "updateOrganizationProfileApi",
    ()=>updateOrganizationProfileApi,
    "updateOrganizerSingleEventApi",
    ()=>updateOrganizerSingleEventApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPrivate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/endpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiHelper.js [app-ssr] (ecmascript)");
;
;
;
const getAllOrganizationsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.ALL));
const getOrganizationProfileApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.PROFILE(orgId)));
const updateOrganizationProfileApi = (orgId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.UPDATE(orgId), data));
const deleteOrganizationApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.DELETE(orgId)));
const getOrganizerEventsApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId)));
const createOrganizerEventApi = (orgId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId), data));
const getOrganizerSingleEventApi = (orgId, eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENT_BY_ID(orgId, eventId)));
const updateOrganizerSingleEventApi = (orgId, eventId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENT_BY_ID(orgId, eventId), data));
}),
"[project]/src/lib/api/user.api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteUserApi",
    ()=>deleteUserApi,
    "getAllUsersApi",
    ()=>getAllUsersApi,
    "getUserProfileApi",
    ()=>getUserProfileApi,
    "updateUserProfileApi",
    ()=>updateUserProfileApi
]);
// src/lib/api/user.api.js
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPrivate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/endpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiHelper.js [app-ssr] (ecmascript)");
;
;
;
const getAllUsersApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].USER.ALL));
const getUserProfileApi = (userId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].USER.SINGLE(userId)));
const updateUserProfileApi = (userId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].USER.UPDATE(userId), data));
const deleteUserApi = (userId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].USER.DELETE(userId)));
}),
"[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.module.css [app-ssr] (css module)");
// USER API
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/organizer.api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$user$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/user.api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ProfileHeader() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    /* ================= LOAD PROFILE ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function loadProfile() {
            try {
                const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserData"])();
                if (!user?.identity) return;
                // ROLE DETECTION
                const role = user.role || (user.type === "org" ? "organizer" : "user");
                let res;
                if (role === "organizer") {
                    res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrganizationProfileApi"])(user.identity);
                } else {
                    res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$user$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserProfileApi"])(user.identity);
                }
                if (res?.status) {
                    setProfile(res.data);
                }
            } catch (err) {
                console.error("ProfileHeader error:", err);
            } finally{
                setLoading(false);
            }
        }
        loadProfile();
    }, []);
    if (loading || !profile) return null;
    /* ================= FALLBACK LETTER ================= */ const displayName = profile.organizationName || profile.name || "User";
    const firstLetter = displayName.charAt(0).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cover
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    profile.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: profile.profileImage,
                        alt: "profile",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatar
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].avatarFallback,
                        children: firstLetter
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].info,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                children: [
                                    displayName,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                                        children: [
                                            "(",
                                            profile.role || "User",
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].followInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>router.push("/dashboard/profile/followers"),
                                        children: [
                                            profile.followersCount || 0,
                                            " Followers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>router.push("/dashboard/profile/following"),
                                        children: [
                                            profile.followingCount || 0,
                                            " Following"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rank,
                                children: [
                                    "#",
                                    profile.rank || 0,
                                    " Rank"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/dashboard/layout.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function DashboardLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // space/create pages la header vendam
    const hideProfileHeader = pathname.startsWith("/dashboardlayout/space/create");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !hideProfileHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 16,
                columnNumber: 30
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__97346300._.js.map