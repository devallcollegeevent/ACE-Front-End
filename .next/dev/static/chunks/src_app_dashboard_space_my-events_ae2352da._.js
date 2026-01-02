(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/space/my-events/MyEventsGrid.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyEventsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LoadingContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MyEventsGrid({ events = [] }) {
    _s();
    const { setLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])(); // ONLY ADD
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyEventsGrid.useEffect": ()=>{
            setLoading(true); // START GLOBAL LOADING
            return ({
                "MyEventsGrid.useEffect": ()=>{
                    setLoading(false); //STOP GLOBAL LOADING
                }
            })["MyEventsGrid.useEffect"];
        }
    }["MyEventsGrid.useEffect"], [
        setLoading
    ]);
    const hasEvents = Array.isArray(events) && events.length > 0;
    if (!hasEvents) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/no-event-image.png",
                    alt: "No events",
                    className: "img-fluid mb-3",
                    style: {
                        maxWidth: 300
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                    className: "fw-bold",
                    children: "No events yet"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted",
                    children: "Create your first event and unlock the full event-creator experience."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
            lineNumber: 20,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row g-4 p-3",
        children: events.map((e)=>{
            const location = [
                e?.org?.city,
                e?.org?.state,
                e?.org?.country
            ].filter(Boolean).join(", ");
            const date = e?.createdAt ? new Date(e.createdAt).toLocaleDateString() : "";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "col-xl-3 col-lg-4 col-md-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card h-100 shadow-none p-3 mb-5 bg-body-tertiary rounded",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "position-relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: e.bannerImage || "/images/event-placeholder.png",
                                    alt: e.title || "Event",
                                    className: "card-img-top rounded-top-4",
                                    style: {
                                        height: 160,
                                        objectFit: "cover"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                    lineNumber: 51,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge bg-primary position-absolute top-0 end-0 m-2",
                                    children: e.status
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                            lineNumber: 50,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "fw-bold text-truncate",
                                    title: e.title,
                                    children: e.title || "Untitled Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted small mb-1 text-truncate",
                                    children: location || "Location not specified"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted small mb-3",
                                    children: date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "d-flex justify-content-between align-items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-outline-primary btn-sm rounded-pill px-3",
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn btn-light btn-sm rounded-circle",
                                            children: "⋮"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                            lineNumber: 65,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                    lineNumber: 48,
                    columnNumber: 13
                }, this)
            }, e.id, false, {
                fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
                lineNumber: 47,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/space/my-events/MyEventsGrid.js",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(MyEventsGrid, "SXoCYjw9q0kIuYYeY7MjQOUv6nQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"]
    ];
});
_c = MyEventsGrid;
var _c;
__turbopack_context__.k.register(_c, "MyEventsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/space/my-events/MyEventsList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyEventsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LoadingContext.js [app-client] (ecmascript)");
"use client";
;
;
;
function MyEventsList({ events = [] }) {
    // const { setLoading } = useLoading(); //ONLY ADD
    // useEffect(() => {
    //   setLoading(true); //START GLOBAL LOADING
    //   return () => {
    //     setLoading(false); //STOP GLOBAL LOADING
    //   };
    // }, [setLoading]);
    const hasEvents = Array.isArray(events) && events.length > 0;
    if (!hasEvents) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/no-event-image.png",
                    alt: "No events",
                    className: "img-fluid mb-3",
                    style: {
                        maxWidth: 300
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                    className: "fw-bold",
                    children: "No events yet"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted",
                    children: "Create your first event and unlock the full event-creator experience."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "list-group list-group-flush",
        children: events.map((e)=>{
            const location = [
                e?.org?.city,
                e?.org?.state,
                e?.org?.country
            ].filter(Boolean).join(", ");
            const date = e?.createdAt ? new Date(e.createdAt).toLocaleDateString() : "";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "list-group-item border-0 mb-3 shadow-none p-3 mb-5 bg-body-tertiary rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row align-items-center ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-md-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: e.bannerImage || "/images/event-placeholder.png",
                                alt: e.title || "Event",
                                className: "img-fluid rounded-3",
                                style: {
                                    height: 90,
                                    objectFit: "cover",
                                    width: "100%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                                lineNumber: 55,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-md-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                    className: "fw-bold mb-1",
                                    children: e.title || "Untitled Event"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted small mb-1",
                                    children: location || "Location not specified"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-muted small mb-0",
                                    children: date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-md-3 text-md-end mt-3 mt-md-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "badge bg-primary me-2",
                                    children: e.status
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-outline-primary btn-sm rounded-pill px-3",
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                    lineNumber: 52,
                    columnNumber: 13
                }, this)
            }, e.id, false, {
                fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
                lineNumber: 48,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/space/my-events/MyEventsList.js",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = MyEventsList;
var _c;
__turbopack_context__.k.register(_c, "MyEventsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/space/my-events/MyEvents.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn-outline-primary": "MyEvents-module__IQuqLW__btn-outline-primary",
  "card": "MyEvents-module__IQuqLW__card",
  "card-body": "MyEvents-module__IQuqLW__card-body",
  "card-title": "MyEvents-module__IQuqLW__card-title",
  "controls": "MyEvents-module__IQuqLW__controls",
  "emptyImage": "MyEvents-module__IQuqLW__emptyImage",
  "emptyState": "MyEvents-module__IQuqLW__emptyState",
  "emptyText": "MyEvents-module__IQuqLW__emptyText",
  "emptyTitle": "MyEvents-module__IQuqLW__emptyTitle",
  "event-badge": "MyEvents-module__IQuqLW__event-badge",
  "event-card": "MyEvents-module__IQuqLW__event-card",
  "event-image": "MyEvents-module__IQuqLW__event-image",
  "event-image-wrapper": "MyEvents-module__IQuqLW__event-image-wrapper",
  "event-list-card": "MyEvents-module__IQuqLW__event-list-card",
  "filter": "MyEvents-module__IQuqLW__filter",
  "heading": "MyEvents-module__IQuqLW__heading",
  "list": "MyEvents-module__IQuqLW__list",
  "list-group-item": "MyEvents-module__IQuqLW__list-group-item",
  "search": "MyEvents-module__IQuqLW__search",
  "viewToggle": "MyEvents-module__IQuqLW__viewToggle",
  "wrapper": "MyEvents-module__IQuqLW__wrapper",
});
}),
"[project]/src/app/dashboard/space/my-events/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MyEventPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$space$2f$my$2d$events$2f$MyEventsGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/space/my-events/MyEventsGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$space$2f$my$2d$events$2f$MyEventsList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/space/my-events/MyEventsList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/organizer.api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LoadingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$space$2f$my$2d$events$2f$MyEvents$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/space/my-events/MyEvents.module.css [app-client] (css module)");
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
function MyEventPage() {
    _s();
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { setLoading: setGlobalLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"])();
    /* ================= FETCH EVENTS ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MyEventPage.useEffect": ()=>{
            async function loadEvents() {
                setGlobalLoading(true); // START GLOBAL LOADING
                try {
                    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
                    if (!user?.identity) return;
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrganizerEventsApi"])(user.identity);
                    if (res?.status) {
                        setEvents(res.data || []);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(res.message || "Failed to load events");
                    }
                } catch (err) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Error loading events");
                } finally{
                    setLoading(false);
                    setGlobalLoading(false);
                }
            }
            loadEvents();
        }
    }["MyEventPage.useEffect"], [
        setGlobalLoading
    ]);
    /* ================= FILTER + SEARCH ================= */ const filteredEvents = events.filter((e)=>{
        if (filter !== "all" && e.status !== filter) return false;
        if (search && !e.title?.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "d-flex justify-content-center align-items-center py-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "spinner-border text-primary"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container-fluid shadow-sm p-3 mb-5 bg-body-tertiary rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "d-flex align-items-center justify-content-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "fw-bold mb-0",
                        children: "My Events"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary rounded-pill px-4",
                        onClick: ()=>router.push("/dashboard/space/create"),
                        children: "+ Create Event"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row g-3 align-items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-md-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "form-control",
                                    placeholder: "Search events",
                                    value: search,
                                    onChange: (e)=>setSearch(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-md-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "form-select",
                                    value: filter,
                                    onChange: (e)=>setFilter(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "all",
                                            children: "All Events"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "APPROVED",
                                            children: "Published"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "DRAFT",
                                            children: "Draft"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "COMPLETED",
                                            children: "Completed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-md-4 text-md-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "btn-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `btn ${view === "grid" ? "btn-primary" : "btn-outline-secondary"}`,
                                            onClick: ()=>setView("grid"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaThLarge"], {}, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: `btn ${view === "list" ? "btn-primary" : "btn-outline-secondary"}`,
                                            onClick: ()=>setView("list"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaListUl"], {}, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card border-0 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card-body",
                    children: view === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$space$2f$my$2d$events$2f$MyEventsGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        events: filteredEvents
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                        lineNumber: 140,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$space$2f$my$2d$events$2f$MyEventsList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        events: filteredEvents
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/space/my-events/page.js",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/space/my-events/page.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_s(MyEventPage, "eXQ6Aj6UQX80ule1xBYh4DUvdLc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LoadingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLoading"]
    ];
});
_c = MyEventPage;
var _c;
__turbopack_context__.k.register(_c, "MyEventPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_dashboard_space_my-events_ae2352da._.js.map