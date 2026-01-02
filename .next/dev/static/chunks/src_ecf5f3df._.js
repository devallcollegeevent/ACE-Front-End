(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/components/Sidebar/Sidebar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "arrow": "Sidebar-module__QhmC6G__arrow",
  "dropdown": "Sidebar-module__QhmC6G__dropdown",
  "expand": "Sidebar-module__QhmC6G__expand",
  "menu": "Sidebar-module__QhmC6G__menu",
  "menuText": "Sidebar-module__QhmC6G__menuText",
  "sidebar": "Sidebar-module__QhmC6G__sidebar",
});
}),
"[project]/src/app/dashboard/components/Sidebar/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/Sidebar/Sidebar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [openMenu, setOpenMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("user");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
            if (user?.type === "org") setRole("org");
        }
    }["Sidebar.useEffect"], []);
    const toggleMenu = (menu)=>{
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const Arrow = ({ open })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow,
            children: open ? "▲" : "▼"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
            lineNumber: 25,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar} ${expanded ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].expand : ""}`,
        onMouseEnter: ()=>setExpanded(true),
        onMouseLeave: ()=>{
            setExpanded(false);
            setOpenMenu(null);
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                onClick: ()=>toggleMenu("profile"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/User.png",
                        alt: "profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuText,
                        children: [
                            "Profile ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                                open: openMenu === "profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            expanded && openMenu === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/profile",
                        children: "My Profile"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    role === "org" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/profile/manage",
                        children: "Manage"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 54,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/profile/delete",
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                onClick: ()=>toggleMenu("activities"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/myactivityes.png",
                        alt: "activities"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuText,
                        children: [
                            "Activities ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                                open: openMenu === "activities"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 68,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            expanded && openMenu === "activities" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/activities/saved",
                        children: "Saved"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    role === "org" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/activities/bookings",
                        children: "Bookings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            role === "org" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                        onClick: ()=>toggleMenu("space"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/myspace.png",
                                alt: "space"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuText,
                                children: [
                                    "My Space ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                                        open: openMenu === "space"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                        lineNumber: 94,
                                        columnNumber: 26
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    expanded && openMenu === "space" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/space/create-event",
                                children: "Create Event"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/space/my-events",
                                children: "My Events"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 104,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 100,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menu,
                onClick: ()=>toggleMenu("settings"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/Settings.png",
                        alt: "settings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].menuText,
                        children: [
                            "Settings ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Arrow, {
                                open: openMenu === "settings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                                lineNumber: 120,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            expanded && openMenu === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dropdown,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/settings/notification",
                        children: "Notification"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/dashboard/settings/email",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/components/Sidebar/Sidebar.js",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "ZH+EGHQGDEe0djVn3WyiIbyMrn4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/components/Topbar/Topbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "Topbar-module__cumiLa__avatar",
  "left": "Topbar-module__cumiLa__left",
  "logoutBtn": "Topbar-module__cumiLa__logoutBtn",
  "right": "Topbar-module__cumiLa__right",
  "title": "Topbar-module__cumiLa__title",
  "topbar": "Topbar-module__cumiLa__topbar",
});
}),
"[project]/src/app/dashboard/components/Topbar/Topbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/Topbar/Topbar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Topbar() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [initial, setInitial] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("U");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Topbar.useEffect": ()=>{
            const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
            if (user?.email) {
                setInitial(user.email.charAt(0).toUpperCase());
            } else if (user?.name) {
                setInitial(user.name.charAt(0).toUpperCase());
            }
        }
    }["Topbar.useEffect"], []);
    const handleLogout = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearToken"])();
        router.push("/auth/user/login");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topbar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Dashboard"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/components/Topbar/Topbar.js",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/components/Topbar/Topbar.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].right,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                        onClick: handleLogout,
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Topbar/Topbar.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                        children: initial
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/components/Topbar/Topbar.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/Topbar/Topbar.js",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/components/Topbar/Topbar.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Topbar, "WnJQMKCCFp5Q8cofuHK+jhrZN24=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Topbar;
var _c;
__turbopack_context__.k.register(_c, "Topbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatar": "ProfileHeader-module__iIKcgW__avatar",
  "avatarFallback": "ProfileHeader-module__iIKcgW__avatarFallback",
  "content": "ProfileHeader-module__iIKcgW__content",
  "cover": "ProfileHeader-module__iIKcgW__cover",
  "followInfo": "ProfileHeader-module__iIKcgW__followInfo",
  "info": "ProfileHeader-module__iIKcgW__info",
  "left": "ProfileHeader-module__iIKcgW__left",
  "name": "ProfileHeader-module__iIKcgW__name",
  "rank": "ProfileHeader-module__iIKcgW__rank",
  "reviews": "ProfileHeader-module__iIKcgW__reviews",
  "role": "ProfileHeader-module__iIKcgW__role",
  "stars": "ProfileHeader-module__iIKcgW__stars",
  "wrapper": "ProfileHeader-module__iIKcgW__wrapper",
});
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
        if ("TURBOPACK compile-time truthy", 1) {
            window.location.href = "/user/login";
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

// src/lib/api/endpoints.js
__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS
]);
const API_ENDPOINTS = {
    EVENTS: {
        ALL: "/v1/events"
    },
    AUTH: {
        SIGNUP: "/v1/auth/signup",
        LOGIN: "/v1/auth/login",
        GOOGLE_LOGIN: "/v1/auth/google",
        FORGOT_PASSWORD: "/v1/auth/forgot-password",
        VERIFY_OTP: "/v1/auth/verify-otp",
        RESEND_OTP: "/v1/auth/resend-otp",
        RESET_PASSWORD: "/v1/auth/reset-password",
        ORG_VERIFY: "/v1/auth/org/verify"
    },
    ORGANIZER: {
        PROFILE: (orgId)=>`/v1/organizations/${orgId}`,
        EVENTS: (orgId)=>`/v1/organizations/${orgId}/events`,
        EVENT_BY_ID: (orgId, eventId)=>`/v1/organizations/${orgId}/events/${eventId}`
    },
    //DELETE
    USER: {
        DELETE: (userId)=>`/v1/user/${userId}`
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
"[project]/src/lib/api/organizer.api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventApi",
    ()=>createEventApi,
    "createOrganizerEventApi",
    ()=>createOrganizerEventApi,
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
const getOrganizationProfileApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.PROFILE(orgId)));
const updateOrganizationProfileApi = (orgId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.PROFILE(orgId), data));
const createEventApi = (orgId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId), data));
const createOrganizerEventApi = createEventApi;
const getOrganizerEventsApi = (orgId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENTS(orgId)));
const getOrganizerSingleEventApi = (orgId, eventId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENT_BY_ID(orgId, eventId)));
const updateOrganizerSingleEventApi = (orgId, eventId, data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].ORGANIZER.EVENT_BY_ID(orgId, eventId), data));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/organizer.api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProfileHeader({ coverColor = "#7f00ff" }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    /* ================= FETCH PROFILE ================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileHeader.useEffect": ()=>{
            async function loadProfile() {
                try {
                    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
                    if (!user?.identity) return;
                    const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$organizer$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOrganizationProfileApi"])(user.identity);
                    if (res?.status) {
                        setProfile(res.data);
                    }
                } catch (err) {
                    console.error("ProfileHeader error", err);
                } finally{
                    setLoading(false);
                }
            }
            loadProfile();
        }
    }["ProfileHeader.useEffect"], []);
    if (loading || !profile) return null;
    const firstLetter = profile.organizationName?.charAt(0)?.toUpperCase() || "?";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cover,
                style: {
                    background: coverColor
                }
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].left,
                        children: [
                            profile.profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: profile.profileImage,
                                alt: "profile",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarFallback,
                                children: firstLetter
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reviews,
                                onClick: ()=>router.push("/dashboard/profile/reviews"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stars,
                                        children: "⭐⭐⭐⭐⭐"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            profile.reviewsCount || 0,
                                            " Reviews"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                children: [
                                    profile.organizationName,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].role,
                                        children: [
                                            "(",
                                            profile.role || "Organizer",
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].followInfo,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>router.push("/dashboard/profile/followers"),
                                        children: [
                                            profile.followersCount || 0,
                                            " Followers"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>router.push("/dashboard/profile/following"),
                                        children: [
                                            profile.followingCount || 0,
                                            " Following"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].rank,
                                children: [
                                    "#",
                                    profile.rank || 0,
                                    " Rank"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(ProfileHeader, "7qrY9bvQChAJqdreL808VgX4CY8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProfileHeader;
var _c;
__turbopack_context__.k.register(_c, "ProfileHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/Dashboard.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "Dashboard-module__8Mmpzq__container",
  "main": "Dashboard-module__8Mmpzq__main",
  "page": "Dashboard-module__8Mmpzq__page",
});
}),
"[project]/src/app/dashboard/layout.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/Sidebar/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Topbar$2f$Topbar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/Topbar/Topbar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/components/ProfileHeader/ProfileHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/Dashboard.module.css [app-client] (css module)");
"use client";
;
;
;
;
;
function DashboardLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$Sidebar$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].main,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$components$2f$ProfileHeader$2f$ProfileHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/dashboard/layout.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$Dashboard$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/layout.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/layout.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ecf5f3df._.js.map