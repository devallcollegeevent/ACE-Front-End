module.exports = [
"[project]/src/app/dashboard/activities/bookings/Booking.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badge": "Booking-module__x-oXSW__badge",
  "card": "Booking-module__x-oXSW__card",
  "grid": "Booking-module__x-oXSW__grid",
  "heading": "Booking-module__x-oXSW__heading",
  "wrapper": "Booking-module__x-oXSW__wrapper",
});
}),
"[project]/src/app/dashboard/activities/bookings/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingEventsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$activities$2f$bookings$2f$Booking$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/activities/bookings/Booking.module.css [app-ssr] (css module)");
"use client";
;
;
function BookingEventsPage() {
    const bookings = Array(4).fill({
        title: "Faculty Development Program",
        location: "Chennai",
        date: "Dec 25, 2025",
        image: "/images/event.png"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$activities$2f$bookings$2f$Booking$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$activities$2f$bookings$2f$Booking$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                children: "My Bookings"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$activities$2f$bookings$2f$Booking$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: bookings.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$activities$2f$bookings$2f$Booking$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: b.image
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: b.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: b.location
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: b.date
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$activities$2f$bookings$2f$Booking$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                                children: "Paid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/activities/bookings/page.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_dashboard_activities_bookings_068e6d77._.js.map