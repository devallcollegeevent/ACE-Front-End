module.exports = [
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
"[project]/src/lib/axiosPublic.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const apiPublic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://3.6.238.72:5000/api")
});
console.log("API BASE URL =>", ("TURBOPACK compile-time value", "http://3.6.238.72:5000/api"));
const __TURBOPACK__default__export__ = apiPublic;
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

__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
const API_ENDPOINTS = {
    /* ================= EVENTS ================= */ EVENTS: {
        ALL: "/v1/events",
        SINGLE: (eventId)=>`/v1/events/${eventId}`
    },
    /* ================= AUTH ================= */ AUTH: {
        SIGNUP: "/v1/auth/signup",
        LOGIN: "/v1/auth/login",
        GOOGLE_LOGIN: "/v1/auth/google-login",
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
        EVENTS: (orgId)=>`/v1/organizations/${orgId}/events`
    },
    /* ================= MASTER DATA ================= */ MASTER: {
        ORG_CATEGORIES: "/v1/master/org-categories",
        ACCOMMODATIONS: "/v1/master/accommodations",
        EVENT_TYPES: (categoryId)=>`/v1/master/event-types/${categoryId}`,
        CATEGORIES: "/v1/master/categories",
        CERTIFICATIONS: "/v1/master/certifications",
        PERKS: "/v1/master/perks"
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
"[project]/src/lib/api/event.api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventApi",
    ()=>createEventApi,
    "deleteEventApi",
    ()=>deleteEventApi,
    "getAccommodationsApi",
    ()=>getAccommodationsApi,
    "getAllEventsApi",
    ()=>getAllEventsApi,
    "getCertificationsApi",
    ()=>getCertificationsApi,
    "getEventByIdApi",
    ()=>getEventByIdApi,
    "getEventBySlugApi",
    ()=>getEventBySlugApi,
    "getEventCategoriesApi",
    ()=>getEventCategoriesApi,
    "getEventTypesApi",
    ()=>getEventTypesApi,
    "getOrgCategoriesApi",
    ()=>getOrgCategoriesApi,
    "getOrganizerEventsApi",
    ()=>getOrganizerEventsApi,
    "getPerksApi",
    ()=>getPerksApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPublic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPrivate.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/endpoints.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiHelper.js [app-ssr] (ecmascript)");
;
;
;
;
const getAllEventsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].EVENTS.ALL));
const getEventByIdApi = (eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].EVENTS.SINGLE(eventId)));
const getEventBySlugApi = (slug)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/v1/events/${slug}`));
const getOrganizerEventsApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId)));
const deleteEventApi = (eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/event/delete/${eventId}`));
const getOrgCategoriesApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.ORG_CATEGORIES));
const getEventCategoriesApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.CATEGORIES));
const getEventTypesApi = (categoryId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.EVENT_TYPES(categoryId)));
const getAccommodationsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.ACCOMMODATIONS));
const getCertificationsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.CERTIFICATIONS));
const getPerksApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.PERKS));
const createEventApi = (orgId, formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId), formData));
}),
"[project]/src/app/events/[slug]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SingleEventPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$event$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/event.api.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function SingleEventPage() {
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [event, setEvent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!slug) return;
        async function loadEvent() {
            try {
                const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$event$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEventByIdApi"])(slug);
                if (res?.status) {
                    setEvent(res.data);
                }
            } finally{
                setLoading(false);
            }
        }
        loadEvent();
    }, [
        slug
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading event..."
    }, void 0, false, {
        fileName: "[project]/src/app/events/[slug]/page.js",
        lineNumber: 30,
        columnNumber: 23
    }, this);
    if (!event) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Event not found"
    }, void 0, false, {
        fileName: "[project]/src/app/events/[slug]/page.js",
        lineNumber: 31,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: event.bannerImage || "/images/event-placeholder.png",
                alt: event.title,
                style: {
                    width: "100%",
                    borderRadius: 12,
                    marginBottom: 20
                }
            }, void 0, false, {
                fileName: "[project]/src/app/events/[slug]/page.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: event.title
            }, void 0, false, {
                fileName: "[project]/src/app/events/[slug]/page.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: event.description
            }, void 0, false, {
                fileName: "[project]/src/app/events/[slug]/page.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "📍 ",
                    event.org?.city,
                    ", ",
                    event.org?.state,
                    ", ",
                    event.org?.country
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/[slug]/page.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Mode: ",
                    event.mode
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/events/[slug]/page.js",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/events/[slug]/page.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4666b835._.js.map