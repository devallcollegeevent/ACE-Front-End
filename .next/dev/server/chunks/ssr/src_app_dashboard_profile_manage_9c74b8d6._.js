module.exports = [
"[project]/src/app/dashboard/profile/manage/Manage.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btnRow": "Manage-module__Vyl8dW__btnRow",
  "cancelBtn": "Manage-module__Vyl8dW__cancelBtn",
  "editBox": "Manage-module__Vyl8dW__editBox",
  "editBtn": "Manage-module__Vyl8dW__editBtn",
  "editIcon": "Manage-module__Vyl8dW__editIcon",
  "grid": "Manage-module__Vyl8dW__grid",
  "header": "Manage-module__Vyl8dW__header",
  "icon": "Manage-module__Vyl8dW__icon",
  "item": "Manage-module__Vyl8dW__item",
  "previewImg": "Manage-module__Vyl8dW__previewImg",
  "saveBtn": "Manage-module__Vyl8dW__saveBtn",
  "successBox": "Manage-module__Vyl8dW__successBox",
  "title": "Manage-module__Vyl8dW__title",
  "uploadBox": "Manage-module__Vyl8dW__uploadBox",
  "viewBox": "Manage-module__Vyl8dW__viewBox",
  "wrapper": "Manage-module__Vyl8dW__wrapper",
});
}),
"[project]/src/app/dashboard/profile/manage/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManagePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/profile/manage/Manage.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-icons/page.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-message/page.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ManagePage() {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("view");
    const [coverImage, setCoverImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [socialLinks, setSocialLinks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        linkedin: "https://www.linkedin.com",
        instagram: "https://www.instagram.com",
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        youtube: "https://www.youtube.com",
        telegram: "https://t.me"
    });
    const handleImageUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) setCoverImage(URL.createObjectURL(file));
    };
    const handleChange = (key, value)=>{
        setSocialLinks((prev)=>({
                ...prev,
                [key]: value
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TITLE_MANAGE_PAGE"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/Pen.png",
                        alt: "edit",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editIcon,
                        onClick: ()=>setMode("edit")
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            mode === "view" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewBox,
                children: [
                    [
                        "LinkedIn",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LINKEDINICON"],
                        socialLinks.linkedin
                    ],
                    [
                        "Instagram",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INSTAGRAMICON"],
                        socialLinks.instagram
                    ],
                    [
                        "Facebook",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACEBOOKICON"],
                        socialLinks.facebook
                    ],
                    [
                        "X (Twitter)",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XICON"],
                        socialLinks.twitter
                    ],
                    [
                        "YouTube",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YOUTUBEICON"],
                        socialLinks.youtube
                    ],
                    [
                        "Telegram",
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$icons$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TELEGRAMICON"],
                        socialLinks.telegram
                    ]
                ].map(([label, icon, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: value
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        ]
                    }, label, true, {
                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            mode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].editBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadBox,
                        onClick: ()=>document.getElementById("coverUpload")?.click(),
                        children: [
                            !coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Upload Cover Image"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this),
                            coverImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: coverImage,
                                alt: "cover",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].previewImg
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "coverUpload",
                                type: "file",
                                accept: "image/*",
                                hidden: true,
                                onChange: handleImageUpload
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                        children: Object.keys(socialLinks).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: key
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: socialLinks[key],
                                        onChange: (e)=>handleChange(key, e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, key, true, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].btnRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cancelBtn,
                                onClick: ()=>setMode("view"),
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].saveBtn,
                                onClick: ()=>setMode(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MSG_EMAIL_VERIFY_SUCCESS"]),
                                children: "Save Changes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                                lineNumber: 114,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            mode === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MSG_EMAIL_VERIFY_SUCCESS"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$manage$2f$Manage$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].successBox,
                children: "Successfully Updated!!"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/profile/manage/page.js",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/profile/manage/page.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_dashboard_profile_manage_9c74b8d6._.js.map