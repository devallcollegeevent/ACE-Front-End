module.exports = [
"[project]/src/lib/utils/secureId.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        if (("TURBOPACK compile-time value", "undefined") !== "undefined") {
        // window.location.href = "/auth/user/login";
        }
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
"[project]/src/components/global/EventSlider/EventSlider.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EventSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/secureId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function EventSlider({ title, data = [], des }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    console.log("check event", data);
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
        router.push(`/events/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeId"])(eventId)}`);
    };
    const formatDateTime = (iso)=>{
        const d = new Date(iso);
        return {
            date: d.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric"
            }),
            time: d.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container-fluid mt-4 px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-between align-items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "fw-bold mb-0",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                children: des
                            }, void 0, false, {
                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn btn-outline-primary rounded-pill px-4",
                        children: "See all"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex justify-content-end gap-2 mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-light rounded-circle",
                        onClick: slideLeft,
                        children: "❮"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-light rounded-circle",
                        onClick: slideRight,
                        children: "❯"
                    }, void 0, false, {
                        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            data.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-muted py-4",
                children: "No events found"
            }, void 0, false, {
                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                lineNumber: 78,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex gap-3 overflow-hidden",
                    ref: sliderRef,
                    style: {
                        scrollBehavior: "smooth"
                    },
                    children: data.map((event, index)=>{
                        const { date, time } = formatDateTime(event.createdAt);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card event-card",
                            onClick: ()=>handleClick(event.identity),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: event.bannerImage || "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA",
                                    className: "event-img",
                                    alt: "Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                    lineNumber: 96,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "card-body p-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between align-items-center mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "fw-semibold ellipsis",
                                                    children: event.title || "Untitled Event"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                    lineNumber: 108,
                                                    columnNumber: 23
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SAVEICON"]
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                            lineNumber: 107,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex justify-content-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ellipsis",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOCATION_ICON"],
                                                                " ",
                                                                event.org?.city || "N/A"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                            lineNumber: 117,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TICKET_ICON"],
                                                                " 500"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                            lineNumber: 121,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                    lineNumber: 116,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "d-flex justify-content-between mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "event-date",
                                                                children: [
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DATEICON"],
                                                                    " ",
                                                                    date,
                                                                    " / ",
                                                                    time
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                                lineNumber: 126,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                            lineNumber: 125,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: event.mode === "online" ? "mode-online" : "mode-offline",
                                                            children: [
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODE_ICON"],
                                                                " ",
                                                                event.mode
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                            lineNumber: 131,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                    lineNumber: 124,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                            lineNumber: 115,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "d-flex justify-content-between align-items-center mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "view-badge",
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEW_ICON"],
                                                        " 456"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                    lineNumber: 145,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "badge-paid",
                                                    children: " Paid"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                            lineNumber: 144,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                                    lineNumber: 105,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, event.identity ?? index, true, {
                            fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                            lineNumber: 90,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
                    lineNumber: 81,
                    columnNumber: 11
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/global/EventSlider/EventSlider.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/global/Footer/Footer.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

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
"[project]/src/components/global/Footer/Footer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/global/Footer/Footer.module.css [app-ssr] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].skyline,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].top,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].brand,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/logo.png",
                                        alt: "ACE",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].text,
                                        children: [
                                            "Life is Full of Events, don't Let them Pass Unnoticed,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subscribe,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Get In Touch!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 51,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Don't Miss the Next Big Event, Stay in the Loop."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subscribeRow,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputWrap,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "@"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                                        lineNumber: 56,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subscribeBtn,
                                                children: "Subscribe"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 60,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].whatsapp,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOOTER_WHATSAPP"]
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].links,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialBlock,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOOTER_FACEBOOK"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOOTER_INSTA"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOOTER_X"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FOOTER_LINKEDIN"]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].query,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: "Send Your Query"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/global/Footer/Footer.js",
                                                lineNumber: 80,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Company"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "About us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "FAQ’s"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Feedback"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Trending Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Upcoming Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Featured Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].col,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: "Our Policies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Top Organizers"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        children: "Cookies"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/global/Footer/Footer.js",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottom,
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
}),
"[project]/src/app/organization-details/[id]/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrganizationDetailsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/secureId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/organizer.api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/EventSlider/EventSlider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/global/Footer/Footer.js [app-ssr] (ecmascript)");
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
function OrganizationDetailsPage() {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [org, setOrg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const realOrgId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$secureId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeId"])(id);
    /* SAFETY */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!realOrgId) {
            router.replace("/");
        }
    }, [
        realOrgId
    ]);
    /* FETCH ORG PROFILE + EVENTS */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!realOrgId) return;
        const fetchData = async ()=>{
            try {
                const [orgRes, eventRes] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrganizationProfileApi"])(realOrgId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getOrganizerEventsApi"])(realOrgId)
                ]);
                if (orgRes?.status) setOrg(orgRes.data);
                if (eventRes?.status) setEvents(eventRes.data || []);
            } catch  {
                router.replace("/");
            } finally{
                setLoading(false);
            }
        };
        fetchData();
    }, [
        realOrgId
    ]);
    if (loading) return null;
    /* SPLIT EVENTS */ const now = new Date();
    const upcomingEvents = events.filter((e)=>new Date(e.eventDate || e.createdAt) >= now);
    const pastEvents = events.filter((e)=>new Date(e.eventDate || e.createdAt) < now);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-fuiled px-5 py-5 org-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn btn-light rounded-pill mb-3 d-inline-flex align-items-center gap-2",
                onClick: ()=>router.back(),
                children: "🔙 Back"
            }, void 0, false, {
                fileName: "[project]/src/app/organization-details/[id]/page.js",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "org-hero position-relative rounded-4 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: org?.bannerImage || "/images/event.png",
                        className: "w-100 org-hero-img",
                        alt: org?.organizationName || "Organization"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "badge bg-purple position-absolute top-0 start-0 m-3",
                        children: "Upcoming Event"
                    }, void 0, false, {
                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "org-hero-dots",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dot active"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "dot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organization-details/[id]/page.js",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "org-info-card shadow-sm rounded-4 p-4 mt-4 d-flex justify-content-between align-items-center flex-wrap gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "d-flex align-items-center gap-3",
                        children: [
                            org?.logoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: org.logoUrl,
                                className: "org-logo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "org-logo d-flex align-items-center justify-content-center",
                                style: {
                                    background: "#1c1c1c",
                                    color: "#fff",
                                    fontWeight: 700
                                },
                                children: org?.organizationName?.charAt(0) || "O"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                        className: "mb-1 fw-bold",
                                        children: org?.organizationName || "Organization"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "org-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TICKET_COLOR_ICON"],
                                                    " ",
                                                    events.length,
                                                    " Events"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["START_ICON"],
                                                    " ",
                                                    org?.rating || "0.0",
                                                    " / ",
                                                    org?.reviewCount || 0,
                                                    " ",
                                                    "reviews"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                                lineNumber: 132,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "🏆 ",
                                                    org?.rank ? `${org.rank} Rank` : "—"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "d-flex gap-3 align-items-center",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSTAGRAMICON"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LINKEDINICON"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YOUTUBEICON"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACEBOOKICON"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TELEGRAMICON"],
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XICON"],
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SHAREICON"]
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-purple px-4 rounded-pill",
                                children: "+ Follow"
                            }, void 0, false, {
                                fileName: "[project]/src/app/organization-details/[id]/page.js",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/organization-details/[id]/page.js",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/organization-details/[id]/page.js",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Upcoming Events",
                    data: events,
                    des: "Explore the complete event schedule to find sessions, speakers, and activities that match your interests and needs"
                }, void 0, false, {
                    fileName: "[project]/src/app/organization-details/[id]/page.js",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organization-details/[id]/page.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$EventSlider$2f$EventSlider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    title: "Past Events",
                    data: pastEvents
                }, void 0, false, {
                    fileName: "[project]/src/app/organization-details/[id]/page.js",
                    lineNumber: 164,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organization-details/[id]/page.js",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$global$2f$Footer$2f$Footer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/organization-details/[id]/page.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/organization-details/[id]/page.js",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/organization-details/[id]/page.js",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__968661c3._.js.map