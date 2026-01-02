(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/axiosPublic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiPublic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://3.6.238.72:5000/api")
});
console.log("API BASE URL =>", ("TURBOPACK compile-time value", "http://3.6.238.72:5000/api"));
const __TURBOPACK__default__export__ = apiPublic;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/axiosPrivate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
;
;
const apiPrivate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "http://3.6.238.72:5000/api")
});
apiPrivate.interceptors.request.use((config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
apiPrivate.interceptors.response.use((res)=>res, (err)=>{
    if (err.response?.status === 401) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearToken"])();
        if (("TURBOPACK compile-time value", "object") !== "undefined") {
        // window.location.href = "/auth/user/login";
        }
    }
    return Promise.reject(err);
});
const __TURBOPACK__default__export__ = apiPrivate;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/endpoints.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        EVENTS: (orgId)=>`/v1/organization/${orgId}/events`,
        CREATEVENTS: (orgId)=>`/v1/organizations/${orgId}/events`
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/apiHelper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/event.api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPublic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPrivate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/endpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiHelper.js [app-client] (ecmascript)");
;
;
;
;
const getAllEventsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].EVENTS.ALL));
const getEventByIdApi = (eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].EVENTS.SINGLE(eventId)));
const getEventBySlugApi = (slug)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/v1/events/${slug}`));
const getOrganizerEventsApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId)));
const deleteEventApi = (eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/event/delete/${eventId}`));
const getOrgCategoriesApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.ORG_CATEGORIES));
const getEventCategoriesApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.CATEGORIES));
const getEventTypesApi = (categoryId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.EVENT_TYPES(categoryId)));
const getAccommodationsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.ACCOMMODATIONS));
const getCertificationsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.CERTIFICATIONS));
const getPerksApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].MASTER.PERKS));
const createEventApi = (orgId, formData)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.CREATEVENTS(orgId), formData));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "athletics": "ChooseEventCategory-module__6vSXjG__athletics",
  "card": "ChooseEventCategory-module__6vSXjG__card",
  "categoriesroot": "ChooseEventCategory-module__6vSXjG__categoriesroot",
  "concerts": "ChooseEventCategory-module__6vSXjG__concerts",
  "conference": "ChooseEventCategory-module__6vSXjG__conference",
  "explore": "ChooseEventCategory-module__6vSXjG__explore",
  "grid": "ChooseEventCategory-module__6vSXjG__grid",
  "hackathon": "ChooseEventCategory-module__6vSXjG__hackathon",
  "jobfairs": "ChooseEventCategory-module__6vSXjG__jobfairs",
  "left": "ChooseEventCategory-module__6vSXjG__left",
  "right": "ChooseEventCategory-module__6vSXjG__right",
  "title": "ChooseEventCategory-module__6vSXjG__title",
  "tournaments": "ChooseEventCategory-module__6vSXjG__tournaments",
  "webinar": "ChooseEventCategory-module__6vSXjG__webinar",
});
}),
"[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChooseEventCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ChooseEventCategory({ categories = [] }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleCardClick = (category)=>{
        if (category.class === "explore") {
            router.push("/explore-categories");
        } else {
            router.push(`/events?category=${category.class}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoriesroot,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Choose Your Category"
            }, void 0, false, {
                fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: categories.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][c.class]}`,
                        onClick: ()=>handleCardClick(c),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: c.img,
                                    alt: c.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                                children: c.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(ChooseEventCategory, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ChooseEventCategory;
var _c;
__turbopack_context__.k.register(_c, "ChooseEventCategory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/EventSearchBar/EventSearchBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "EventSearchBar-module__32HgIG__card",
  "col": "EventSearchBar-module__32HgIG__col",
  "icon": "EventSearchBar-module__32HgIG__icon",
  "row": "EventSearchBar-module__32HgIG__row",
  "sub": "EventSearchBar-module__32HgIG__sub",
  "title": "EventSearchBar-module__32HgIG__title",
  "wrapper": "EventSearchBar-module__32HgIG__wrapper",
});
}),
"[project]/src/components/global/EventSearchBar/EventSearchBar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventSearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/EventSearchBar/EventSearchBar.module.css [app-client] (css module)");
"use client";
;
;
function EventSearchBar({ whatIcon, whereIcon, whenIcon, onWhatClick, onWhereClick, onWhenClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                        onClick: onWhatClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: whatIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: "What"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                                        children: "Event Type"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                        onClick: onWhereClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: whereIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: "Where"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                                        children: "Location"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                        onClick: onWhenClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: whenIcon
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                        children: "When"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/global/EventSearchBar/EventSearchBar.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = EventSearchBar;
var _c;
__turbopack_context__.k.register(_c, "EventSearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/secureId.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Encode (hide real id)
__turbopack_context__.s([
    "decodeId",
    ()=>decodeId,
    "encodeId",
    ()=>encodeId
]);
const encodeId = (id)=>{
    return encodeURIComponent(btoa(id));
};
const decodeId = (encoded)=>{
    try {
        return atob(decodeURIComponent(encoded));
    } catch  {
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/EventSlider/EventSlider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/secureId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function EventSlider({ title, data = [], des }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slideLeft = ()=>{
        sliderRef.current?.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    };
    const slideRight = ()=>{
        sliderRef.current?.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    };
    const handleClick = (eventId)=>{
        router.push(`/events/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeId"])(eventId)}`);
    };
    const formatCalendarDateTime = (date, time)=>{
        if (!date) return "N/A";
        const d = new Date(`${date}T${time || "00:00"}`);
        return d.toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container-fluid mt-4 px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-between align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "fw-bold mb-0",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                children: des
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-outline-primary rounded-pill px-4",
                        children: "See all"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-end gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-light rounded-circle",
                        onClick: slideLeft,
                        children: "❮"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-light rounded-circle",
                        onClick: slideRight,
                        children: "❯"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-muted py-4",
                children: "No events found"
            }, void 0, false, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 76,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex gap-3 overflow-hidden",
                ref: sliderRef,
                style: {
                    scrollBehavior: "smooth"
                },
                children: data.map((event, index)=>{
                    const calendar = event.calendars?.[0];
                    const startDateTime = calendar ? formatCalendarDateTime(calendar.startDate, calendar.startTime) : "N/A";
                    const endDateTime = calendar ? formatCalendarDateTime(calendar.endDate, calendar.endTime) : "N/A";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card event-card",
                        onClick: ()=>handleClick(event.identity),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: event.bannerImages?.[0] || "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
                                className: "event-img",
                                alt: "Event"
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                lineNumber: 101,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-body p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-between align-items-center mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "fw-semibold ellipsis",
                                                children: event.title || "Untitled Event"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SAVEICON"]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-muted mt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "d-flex justify-content-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ellipsis",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_ICON"],
                                                            " ",
                                                            event.location?.city || "N/A"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                        lineNumber: 122,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TICKET_ICON"],
                                                            " 500"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "event-datetime mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "event-dt-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "dt-icon",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATEICON"]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                lineNumber: 132,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "dt-grid",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Start:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                                lineNumber: 136,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            calendar?.startDate || "N/A"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                        lineNumber: 135,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "End:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                                lineNumber: 140,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            calendar?.endDate || "N/A"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                        lineNumber: 139,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                lineNumber: 134,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                        lineNumber: 131,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "event-dt-row",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "dt-icon",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TIMEICON"]
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                lineNumber: 147,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "dt-grid",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                children: "Start:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                                lineNumber: 151,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            calendar?.startTime || "N/A"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                        lineNumber: 150,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                style: {
                                                                                    marginLeft: "38px"
                                                                                },
                                                                                children: "End:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                                lineNumber: 155,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            " ",
                                                                            calendar?.endTime || "N/A"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                        lineNumber: 154,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                lineNumber: 149,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                        lineNumber: 146,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "d-flex justify-content-between align-items-center mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "view-badge",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIEW_ICON"],
                                                    " 456"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                lineNumber: 164,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge-paid",
                                                children: [
                                                    " ",
                                                    event.mode
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                lineNumber: 110,
                                columnNumber: 17
                            }, this)
                        ]
                    }, event.identity ?? index, true, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 95,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(EventSlider, "s8GBKeEEFmvuIffJDSTtMqCt2ZE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = EventSlider;
var _c;
__turbopack_context__.k.register(_c, "EventSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/Footer/Footer.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottom": "Footer-module__pru1la__bottom",
  "brand": "Footer-module__pru1la__brand",
  "col": "Footer-module__pru1la__col",
  "inputWrap": "Footer-module__pru1la__inputWrap",
  "links": "Footer-module__pru1la__links",
  "logo": "Footer-module__pru1la__logo",
  "main": "Footer-module__pru1la__main",
  "query": "Footer-module__pru1la__query",
  "skyline": "Footer-module__pru1la__skyline",
  "socialBlock": "Footer-module__pru1la__socialBlock",
  "socials": "Footer-module__pru1la__socials",
  "subscribe": "Footer-module__pru1la__subscribe",
  "subscribeBtn": "Footer-module__pru1la__subscribeBtn",
  "subscribeRow": "Footer-module__pru1la__subscribeRow",
  "text": "Footer-module__pru1la__text",
  "top": "Footer-module__pru1la__top",
  "whatsapp": "Footer-module__pru1la__whatsapp",
});
}),
"[project]/src/components/global/Footer/Footer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/Footer/Footer.module.css [app-client] (css module)");
"use client";
;
;
;
;
function Footer() {
    // const { setLoading } = useLoading(); //ONLY ADD
    /* GLOBAL LOADING ON MOUNT */ // useEffect(() => {
    //   // setLoading(true);
    //   return () => {
    //     setLoading(false);
    //   };
    // }, [setLoading]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skyline,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/footer.png",
                    alt: "Skyline"
                }, void 0, false, {
                    fileName: "[project]/src/components/global/Footer/Footer.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/global/Footer/Footer.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/logo.png",
                                        alt: "ACE",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                                        children: [
                                            "Life is Full of Events, don't Let them Pass Unnoticed,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 44,
                                                columnNumber: 15
                                            }, this),
                                            "Explore and Join What Excites You!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subscribe,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Get In Touch!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Don't Miss the Next Big Event, Stay in the Loop."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subscribeRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputWrap,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "@"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                                        lineNumber: 56,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        placeholder: "Enter your email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                                        lineNumber: 57,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subscribeBtn,
                                                children: "Subscribe"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].whatsapp,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_WHATSAPP"]
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/Footer/Footer.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].links,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socialBlock,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].socials,
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_FACEBOOK"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_INSTA"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_X"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOOTER_LINKEDIN"]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].query,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Send Your Query"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "@"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                                        lineNumber: 81,
                                                        columnNumber: 18
                                                    }, this),
                                                    " info@ace.com"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "About us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "FAQ’s"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Feedback"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Contact us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Trending Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Upcoming Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Featured Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Virtual Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].col,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Our Policies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Top Organizers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Cookies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Disclaimer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/Footer/Footer.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/Footer/Footer.js",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
                children: "© 2025 All College Event. All rights reserved."
            }, void 0, false, {
                fileName: "[project]/src/components/global/Footer/Footer.js",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/Footer/Footer.js",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/HeroBanner/HeroBanner.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "center": "HeroBanner-module__DFaC7q__center",
  "loopGradient": "HeroBanner-module__DFaC7q__loopGradient",
  "subtitle": "HeroBanner-module__DFaC7q__subtitle",
  "title": "HeroBanner-module__DFaC7q__title",
});
}),
"[project]/src/components/global/HeroBanner/HeroBanner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBanner$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/HeroBanner/HeroBanner.module.css [app-client] (css module)");
"use client";
;
;
function HeroBanner({ text }) {
    const words = text.split(" ");
    console.log("00000000", words);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBanner$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBanner$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center}`,
                children: words.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            animationDelay: `${0.3 * i}s`
                        },
                        children: word
                    }, i, false, {
                        fileName: "[project]/src/components/global/HeroBanner/HeroBanner.js",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/global/HeroBanner/HeroBanner.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBanner$2f$HeroBanner$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                children: "Discover events that match your vibe — anytime, anywhere."
            }, void 0, false, {
                fileName: "[project]/src/components/global/HeroBanner/HeroBanner.js",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = HeroBanner;
var _c;
__turbopack_context__.k.register(_c, "HeroBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cardItem": "HeroBannerCarousel-module__zC5IAa__cardItem",
  "cardsStage": "HeroBannerCarousel-module__zC5IAa__cardsStage",
  "carouselRoot": "HeroBannerCarousel-module__zC5IAa__carouselRoot",
  "posCenter": "HeroBannerCarousel-module__zC5IAa__posCenter",
  "posHidden": "HeroBannerCarousel-module__zC5IAa__posHidden",
  "posLeft": "HeroBannerCarousel-module__zC5IAa__posLeft",
  "posLeftFar": "HeroBannerCarousel-module__zC5IAa__posLeftFar",
  "posLeftXFar": "HeroBannerCarousel-module__zC5IAa__posLeftXFar",
  "posRight": "HeroBannerCarousel-module__zC5IAa__posRight",
  "posRightFar": "HeroBannerCarousel-module__zC5IAa__posRightFar",
  "posRightXFar": "HeroBannerCarousel-module__zC5IAa__posRightXFar",
});
}),
"[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBannerCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function HeroBannerCarousel({ images = [], interval = 4500 }) {
    _s();
    const n = images.length;
    const [centerIdx, setCenterIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBannerCarousel.useEffect": ()=>{
            if (!n) return;
            timerRef.current = setInterval({
                "HeroBannerCarousel.useEffect": ()=>{
                    setCenterIdx({
                        "HeroBannerCarousel.useEffect": (prev)=>(prev + 1) % n
                    }["HeroBannerCarousel.useEffect"]);
                }
            }["HeroBannerCarousel.useEffect"], interval);
            return ({
                "HeroBannerCarousel.useEffect": ()=>clearInterval(timerRef.current)
            })["HeroBannerCarousel.useEffect"];
        }
    }["HeroBannerCarousel.useEffect"], [
        n,
        interval
    ]);
    const handleClick = (idx)=>setCenterIdx(idx);
    const getPosClass = (imgIdx)=>{
        if (n === 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posCenter;
        const diff = (imgIdx - centerIdx + n) % n;
        if (diff === 0) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posCenter;
        if (diff === 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posRight;
        if (diff === 2) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posRightFar;
        if (diff === 3) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posRightXFar;
        if (diff === n - 1) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posLeft;
        if (diff === n - 2) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posLeftFar;
        if (diff === n - 3) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posLeftXFar;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].posHidden;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carouselRoot,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardsStage,
            children: images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardItem} ${getPosClass(idx)}`,
                    onClick: ()=>handleClick(idx),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: `poster-${idx}`,
                        draggable: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.js",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this)
                }, idx, false, {
                    fileName: "[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.js",
                    lineNumber: 43,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.js",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(HeroBannerCarousel, "sVgIzzF8qlKysixHHzBDpNrURJg=");
_c = HeroBannerCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroBannerCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeDot": "SpotlightCarousel-module__JlpA1G__activeDot",
  "controls": "SpotlightCarousel-module__JlpA1G__controls",
  "countdown": "SpotlightCarousel-module__JlpA1G__countdown",
  "cta": "SpotlightCarousel-module__JlpA1G__cta",
  "dot": "SpotlightCarousel-module__JlpA1G__dot",
  "dots": "SpotlightCarousel-module__JlpA1G__dots",
  "header": "SpotlightCarousel-module__JlpA1G__header",
  "image": "SpotlightCarousel-module__JlpA1G__image",
  "left": "SpotlightCarousel-module__JlpA1G__left",
  "meta": "SpotlightCarousel-module__JlpA1G__meta",
  "num": "SpotlightCarousel-module__JlpA1G__num",
  "pill": "SpotlightCarousel-module__JlpA1G__pill",
  "right": "SpotlightCarousel-module__JlpA1G__right",
  "share": "SpotlightCarousel-module__JlpA1G__share",
  "slide": "SpotlightCarousel-module__JlpA1G__slide",
  "startsIn": "SpotlightCarousel-module__JlpA1G__startsIn",
  "title": "SpotlightCarousel-module__JlpA1G__title",
  "track": "SpotlightCarousel-module__JlpA1G__track",
  "wrapper": "SpotlightCarousel-module__JlpA1G__wrapper",
});
}),
"[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpotlightCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/* ---------------- DATE FORMAT ---------------- */ function formatDate(dateString) {
    if (!dateString) return "TBA";
    const d = new Date(dateString);
    return d.toISOString().replace("T", " ").slice(0, 16);
}
/* ---------------- COUNTDOWN (NO HOOK) ---------------- */ function getCountdown(targetIso) {
    const diff = Math.max(new Date(targetIso) - new Date(), 0);
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor(diff / (1000 * 60 * 60)) % 24,
        mins: Math.floor(diff / (1000 * 60)) % 60,
        secs: Math.floor(diff / 1000) % 60
    };
}
function SpotlightCarousel({ data = [] }) {
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [, forceUpdate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0); // for countdown refresh
    const total = data.length;
    /* Auto slide */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotlightCarousel.useEffect": ()=>{
            if (!total) return;
            const timer = setInterval({
                "SpotlightCarousel.useEffect.timer": ()=>{
                    setCurrent({
                        "SpotlightCarousel.useEffect.timer": (prev)=>(prev + 1) % total
                    }["SpotlightCarousel.useEffect.timer"]);
                }
            }["SpotlightCarousel.useEffect.timer"], 8000);
            return ({
                "SpotlightCarousel.useEffect": ()=>clearInterval(timer)
            })["SpotlightCarousel.useEffect"];
        }
    }["SpotlightCarousel.useEffect"], [
        total
    ]);
    /* Countdown tick */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SpotlightCarousel.useEffect": ()=>{
            const timer = setInterval({
                "SpotlightCarousel.useEffect.timer": ()=>{
                    forceUpdate({
                        "SpotlightCarousel.useEffect.timer": (n)=>n + 1
                    }["SpotlightCarousel.useEffect.timer"]);
                }
            }["SpotlightCarousel.useEffect.timer"], 1000);
            return ({
                "SpotlightCarousel.useEffect": ()=>clearInterval(timer)
            })["SpotlightCarousel.useEffect"];
        }
    }["SpotlightCarousel.useEffect"], []);
    if (!Array.isArray(data) || data.length === 0) return null;
    const goto = (i)=>setCurrent((i + total) % total);
    const prev = ()=>goto(current - 1);
    const next = ()=>goto(current + 1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "Top Spotlights"
            }, void 0, false, {
                fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].track,
                    style: {
                        transform: `translateX(-${current * 100}%)`
                    },
                    children: data.map((event)=>{
                        const { days, hours, mins, secs } = getCountdown(event.createdAt);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].slide,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: event?.bannerImage && event.bannerImage.trim() !== "" ? event.bannerImage : "/images/event.png",
                                        alt: event.title,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                        lineNumber: 80,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                    lineNumber: 79,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: event.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].share,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHAREICON"]
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_ICON"],
                                                        " ",
                                                        event.org?.city || "N/A"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATEICON"],
                                                        " ",
                                                        formatDate(event.createdAt)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                            lineNumber: 100,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].startsIn,
                                            children: "Event Starts In"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                            lineNumber: 109,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].countdown,
                                            children: [
                                                [
                                                    days,
                                                    hours,
                                                    mins,
                                                    secs
                                                ].map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pill,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].num,
                                                            children: String(v).padStart(2, "0")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                            lineNumber: 116,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                        lineNumber: 115,
                                                        columnNumber: 23
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: event.paymentLink || "#",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta,
                                                    children: "Get Ticket"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                            lineNumber: 113,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, event.identity, true, {
                            fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                            lineNumber: 77,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prev,
                        children: "❮"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                        children: data.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: i === current ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].activeDot : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dot,
                                onClick: ()=>goto(i)
                            }, i, false, {
                                fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: next,
                        children: "❯"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(SpotlightCarousel, "JHQQGM8dppv+cNlK+dh8w92m78M=");
_c = SpotlightCarousel;
var _c;
__turbopack_context__.k.register(_c, "SpotlightCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/LeaderboardModal/LeaderboardModal.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "cell-name": "LeaderboardModal-module__VZChaq__cell-name",
  "fadeIn": "LeaderboardModal-module__VZChaq__fadeIn",
  "first": "LeaderboardModal-module__VZChaq__first",
  "highlight": "LeaderboardModal-module__VZChaq__highlight",
  "lb-avatar": "LeaderboardModal-module__VZChaq__lb-avatar",
  "lb-backdrop": "LeaderboardModal-module__VZChaq__lb-backdrop",
  "lb-close": "LeaderboardModal-module__VZChaq__lb-close",
  "lb-list-sub": "LeaderboardModal-module__VZChaq__lb-list-sub",
  "lb-list-title": "LeaderboardModal-module__VZChaq__lb-list-title",
  "lb-medal": "LeaderboardModal-module__VZChaq__lb-medal",
  "lb-modal": "LeaderboardModal-module__VZChaq__lb-modal",
  "lb-name-cell": "LeaderboardModal-module__VZChaq__lb-name-cell",
  "lb-overlay": "LeaderboardModal-module__VZChaq__lb-overlay",
  "lb-pod-avatar": "LeaderboardModal-module__VZChaq__lb-pod-avatar",
  "lb-pod-card": "LeaderboardModal-module__VZChaq__lb-pod-card",
  "lb-pod-name": "LeaderboardModal-module__VZChaq__lb-pod-name",
  "lb-podium": "LeaderboardModal-module__VZChaq__lb-podium",
  "lb-rank": "LeaderboardModal-module__VZChaq__lb-rank",
  "lb-row-ui": "LeaderboardModal-module__VZChaq__lb-row-ui",
  "lb-subtitle": "LeaderboardModal-module__VZChaq__lb-subtitle",
  "lb-title": "LeaderboardModal-module__VZChaq__lb-title",
  "leaders-table": "LeaderboardModal-module__VZChaq__leaders-table",
  "leaders-table-wrap": "LeaderboardModal-module__VZChaq__leaders-table-wrap",
  "medalBounce": "LeaderboardModal-module__VZChaq__medalBounce",
  "modalPop": "LeaderboardModal-module__VZChaq__modalPop",
  "podiumFloat": "LeaderboardModal-module__VZChaq__podiumFloat",
  "second": "LeaderboardModal-module__VZChaq__second",
  "slideUp": "LeaderboardModal-module__VZChaq__slideUp",
  "stat-box": "LeaderboardModal-module__VZChaq__stat-box",
  "stat-label": "LeaderboardModal-module__VZChaq__stat-label",
  "stat-value": "LeaderboardModal-module__VZChaq__stat-value",
  "third": "LeaderboardModal-module__VZChaq__third",
});
}),
"[project]/src/components/global/LeaderboardModal/LeaderboardModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeaderboardModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/LeaderboardModal/LeaderboardModal.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
// Public images
const goldMedal = "/images/FirstOr.png";
const silverMedal = "/images/SecondOr.png";
const bronzeMedal = "/images/ThreedOr.png";
function LeaderboardModal({ open, onClose, data = [] }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeaderboardModal.useEffect": ()=>{
            document.body.style.overflow = open ? "hidden" : "";
            return ({
                "LeaderboardModal.useEffect": ()=>document.body.style.overflow = ""
            })["LeaderboardModal.useEffect"];
        }
    }["LeaderboardModal.useEffect"], [
        open
    ]);
    if (!open) return null;
    const top3 = data.slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay,
        role: "dialog",
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backdrop,
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modal,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close,
                        onClick: onClose,
                        "aria-label": "Close",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                        children: "Legends Board"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Where brilliant organizers rise — your dedication builds the stage for every success!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].podium,
                        children: top3.map((org, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].podiumCard} ${i === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].first : i === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].second : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].third}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: i === 0 ? goldMedal : i === 1 ? silverMedal : bronzeMedal,
                                        alt: "medal",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].medal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrap,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: org.avatar,
                                            alt: org.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                        children: org.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stats,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                        children: "Events created"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                        children: org.events
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                        lineNumber: 63,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statLabel,
                                                        children: "User views"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statValue,
                                                        children: org.views
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, org.id, true, {
                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listTitle,
                        children: "List of Top Organizers"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].listSub,
                        children: "You don't just host events; you shape experiences. Keep shining!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Organizer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Events"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                lineNumber: 85,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Views"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "Rank"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: data.map((org)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nameCell,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: org.avatar,
                                                            alt: org.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        org.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: org.events
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: org.views
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rank,
                                                    children: org.rank
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, org.id, true, {
                                            fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/LeaderboardModal/LeaderboardModal.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(LeaderboardModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = LeaderboardModal;
var _c;
__turbopack_context__.k.register(_c, "LeaderboardModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/LocationHighlights/LocationHighlights.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "LocationHighlights-module__W4R5xq__active",
  "card": "LocationHighlights-module__W4R5xq__card",
  "events": "LocationHighlights-module__W4R5xq__events",
  "grid": "LocationHighlights-module__W4R5xq__grid",
  "img": "LocationHighlights-module__W4R5xq__img",
  "name": "LocationHighlights-module__W4R5xq__name",
  "popularlocationroot": "LocationHighlights-module__W4R5xq__popularlocationroot",
  "sub": "LocationHighlights-module__W4R5xq__sub",
  "tab": "LocationHighlights-module__W4R5xq__tab",
  "tabs": "LocationHighlights-module__W4R5xq__tabs",
  "text": "LocationHighlights-module__W4R5xq__text",
});
}),
"[project]/src/components/global/LocationHighlights/LocationHighlights.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PopularLocations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/LocationHighlights/LocationHighlights.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PopularLocations() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("cities");
    const cities = [
        {
            img: "/images/coimbatore.png",
            name: "Coimbatore",
            events: "1725 Events"
        },
        {
            img: "/images/chennai.png",
            name: "Chennai",
            events: "1710 Events"
        },
        {
            img: "/images/bangalore.png",
            name: "Bangalore",
            events: "500 Events"
        },
        {
            img: "/images/cochin.png",
            name: "Cochin",
            events: "475 Events"
        },
        {
            img: "/images/delhi.png",
            name: "Delhi",
            events: "450 Events"
        },
        {
            img: "/images/salem.png",
            name: "Salem",
            events: "400 Events"
        }
    ];
    const countries = [
        {
            img: "/images/india.png",
            name: "India",
            events: "1725 Events"
        },
        {
            img: "/images/australia.png",
            name: "Australia",
            events: "1710 Events"
        },
        {
            img: "/images/usa.png",
            name: "USA",
            events: "500 Events"
        },
        {
            img: "/images/uk.png",
            name: "UK",
            events: "200 Events"
        },
        {
            img: "/images/uae.png",
            name: "UAE",
            events: "300 Events"
        },
        {
            img: "/images/singapore.png",
            name: "Singapore",
            events: "400 Events"
        }
    ];
    const list = activeTab === "cities" ? cities : countries;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].popularlocationroot,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tabs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab} ${activeTab === "cities" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                        onClick: ()=>setActiveTab("cities"),
                        children: "Popular Cities"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tab} ${activeTab === "countries" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                        onClick: ()=>setActiveTab("countries"),
                        children: "Popular Countries"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                children: activeTab === "cities" ? "Cities That Never Stop Celebrating" : "Where Every Continent Comes Alive with Events"
            }, void 0, false, {
                fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                children: list.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.img,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].img,
                                alt: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].text,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].events,
                                        children: item.events
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/LocationHighlights/LocationHighlights.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(PopularLocations, "xqXFbifS5wP+tIqExk7xS+gcNHc=");
_c = PopularLocations;
var _c;
__turbopack_context__.k.register(_c, "PopularLocations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "OrganizerCarousel-module__lSNBea__avatar",
  "avatarFallback": "OrganizerCarousel-module__lSNBea__avatarFallback",
  "avatarWrap": "OrganizerCarousel-module__lSNBea__avatarWrap",
  "card": "OrganizerCarousel-module__lSNBea__card",
  "events": "OrganizerCarousel-module__lSNBea__events",
  "header": "OrganizerCarousel-module__lSNBea__header",
  "leaderboardBtn": "OrganizerCarousel-module__lSNBea__leaderboardBtn",
  "list": "OrganizerCarousel-module__lSNBea__list",
  "more": "OrganizerCarousel-module__lSNBea__more",
  "name": "OrganizerCarousel-module__lSNBea__name",
  "sub": "OrganizerCarousel-module__lSNBea__sub",
  "title": "OrganizerCarousel-module__lSNBea__title",
  "topOrganizersroot": "OrganizerCarousel-module__lSNBea__topOrganizersroot",
});
}),
"[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrganizersCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/secureId.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OrganizersCarousel({ onOpenLeaderboard, data = [] }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    if (!Array.isArray(data) || data.length === 0) return null;
    const handleOrgClick = (orgId)=>{
        const encryptedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeId"])(orgId);
        router.push(`/organization-details/${encryptedId}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topOrganizersroot,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: "Our Top Organizers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sub,
                                children: [
                                    "Find the Organizations you're looking for quickly.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].more,
                                        children: " You can see more."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leaderboardBtn,
                        onClick: onOpenLeaderboard,
                        children: "View Leaderboard >>>"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].row,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].list,
                    children: data.map((org, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                            onClick: ()=>handleOrgClick(org.identity),
                            style: {
                                cursor: "pointer"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarWrap,
                                    children: org.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: org.logoUrl,
                                        alt: org.organizationName,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                        lineNumber: 46,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback,
                                        children: org.organizationName?.charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                    children: org.organizationName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].events,
                                    children: [
                                        org.totalEvents || 0,
                                        " events"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, org.identity || index, true, {
                            fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                            lineNumber: 38,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(OrganizersCarousel, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OrganizersCarousel;
var _c;
__turbopack_context__.k.register(_c, "OrganizersCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/global/HowItWorks/HowItWorks.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "animation": "HowItWorks-module__95CAVa__animation",
  "title": "HowItWorks-module__95CAVa__title",
});
}),
"[project]/src/components/global/HowItWorks/HowItWorks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HowItWorks$2f$HowItWorks$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/HowItWorks/HowItWorks.module.css [app-client] (css module)");
"use client";
;
;
function HowItWorks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HowItWorks$2f$HowItWorks$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HowItWorks$2f$HowItWorks$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: "How All College Event Works"
            }, void 0, false, {
                fileName: "[project]/src/components/global/HowItWorks/HowItWorks.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/animationImage.png",
                alt: "How All College Event Works",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HowItWorks$2f$HowItWorks$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animation
            }, void 0, false, {
                fileName: "[project]/src/components/global/HowItWorks/HowItWorks.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/HowItWorks/HowItWorks.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api/organizer.api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPrivate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/endpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiHelper.js [app-client] (ecmascript)");
;
;
;
const getAllOrganizationsApi = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.ALL));
const getOrganizationProfileApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.PROFILE(orgId)));
const updateOrganizationProfileApi = (orgId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.UPDATE(orgId), data));
const deleteOrganizationApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.DELETE(orgId)));
const getOrganizerEventsApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId)));
const createOrganizerEventApi = (orgId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId), data));
const getOrganizerSingleEventApi = (orgId, eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENT_BY_ID(orgId, eventId)));
const updateOrganizerSingleEventApi = (orgId, eventId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENT_BY_ID(orgId, eventId), data));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home/LandingPage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// ICONS
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-client] (ecmascript)");
// API
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$event$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/event.api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/ChooseEventCategory/ChooseEventCategory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/EventSearchBar/EventSearchBar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/EventSlider/EventSlider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/Footer/Footer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBanner$2f$HeroBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/HeroBanner/HeroBanner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/HeroBannerCarousel/HeroBannerCarousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/SpotlightCarousel/SpotlightCarousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/LeaderboardModal/LeaderboardModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/LocationHighlights/LocationHighlights.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/OrganizerCarousel/OrganizerCarousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HowItWorks$2f$HowItWorks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/HowItWorks/HowItWorks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/organizer.api.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
;
;
function LandingPage() {
    _s();
    const [openLB, setOpenLB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [organization, setOrganization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { setLoading: setGlobalLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])();
    const apiText = "What Event would you like to go to?";
    const posters = [
        "/images/australia.png",
        "/images/auth-forgot.png",
        "/images/or_passwordsuccess.png",
        "/images/or_forgotpasswordnextimage.png",
        "/images/or_forgotpassword.png",
        "/images/or_login.png",
        "/images/auth-signup.png"
    ];
    const CATEGORIES = [
        {
            name: "Conferences",
            img: "/images/Conferences.png",
            class: "conference"
        },
        {
            name: "Hackathon",
            img: "/images/Hackathon.png",
            class: "hackathon"
        },
        {
            name: "Webinars",
            img: "/images/Webinars.png",
            class: "webinar"
        },
        {
            name: "Athletics",
            img: "/images/Athletics.png",
            class: "athletics"
        },
        {
            name: "Concerts",
            img: "/images/concert.png",
            class: "concerts"
        },
        {
            name: "Tournaments",
            img: "/images/Tournaments.png",
            class: "tournaments"
        },
        {
            name: "Job Fairs",
            img: "/images/JobFairs.png",
            class: "jobfairs"
        },
        {
            name: "Explore more",
            img: "/images/Explore.png",
            class: "explore"
        }
    ];
    const ORGANIZERSS = [
        {
            id: 1,
            name: "Swaram Academy",
            avatar: "https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg",
            events: 17,
            views: 2517,
            rank: 1
        }
    ];
    const loadEvents = async ()=>{
        setGlobalLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$event$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllEventsApi"])();
            console.log("check res", res);
            if (res?.status) {
                setEvents(res.data);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(res?.message || "Failed to load events");
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Something went wrong");
        } finally{
            setGlobalLoading(false);
        }
    };
    const loadOrganization = async ()=>{
        setGlobalLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllOrganizationsApi"])();
            if (res?.status) {
                setOrganization(res.data);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(res?.message || "Failed to load organization");
            }
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Something went wrong");
        } finally{
            setGlobalLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            loadEvents();
            loadOrganization();
        }
    }["LandingPage.useEffect"], []);
    console.log("evvvvvvvv", events);
    console.log("orggggggggggggg", organization);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "dash-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBanner$2f$HeroBanner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        text: apiText
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/LandingPage.js",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-explore",
                        children: "Explore Events"
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/LandingPage.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-carousel-area",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HeroBannerCarousel$2f$HeroBannerCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            images: posters
                        }, void 0, false, {
                            fileName: "[project]/src/app/home/LandingPage.js",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/LandingPage.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSearchBar$2f$EventSearchBar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        whatIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATICON"],
                        whereIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOCATION_ICON"],
                        whenIcon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DATEICON"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/LandingPage.js",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$ChooseEventCategory$2f$ChooseEventCategory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                categories: CATEGORIES
            }, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 142,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Trending Events",
                        data: events
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/LandingPage.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: "Browse Events",
                        data: events
                    }, void 0, false, {
                        fileName: "[project]/src/app/home/LandingPage.js",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$SpotlightCarousel$2f$SpotlightCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: events
            }, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 149,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$OrganizerCarousel$2f$OrganizerCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onOpenLeaderboard: ()=>setOpenLB(true),
                data: organization
            }, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Upcoming Events",
                data: events
            }, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$HowItWorks$2f$HowItWorks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LeaderboardModal$2f$LeaderboardModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: openLB,
                onClose: ()=>setOpenLB(false),
                data: ORGANIZERSS
            }, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$LocationHighlights$2f$LocationHighlights$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/home/LandingPage.js",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home/LandingPage.js",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(LandingPage, "k+X8B8YKFKkyZO++RDO/JwTJC2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"]
    ];
});
_c = LandingPage;
var _c;
__turbopack_context__.k.register(_c, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6e8b2f38._.js.map