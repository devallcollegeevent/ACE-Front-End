(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/profile/delete/Delete.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
});
}),
"[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DeleteConfirmModal({ open, onClose, onConfirm, userEmail }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    if (!open) return null;
    const isMatch = email.trim().toLowerCase() === userEmail?.toLowerCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "delete-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "delete-modal",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/images/logo.png",
                    alt: "logo",
                    className: "delete-logo"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "delete-text",
                    children: [
                        "Please type your email to confirm deletion",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: userEmail
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "Enter your email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value),
                    className: "delete-input"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "delete-btn-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "delete-cancel-btn",
                            onClick: onClose,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "delete-confirm-btn",
                            disabled: !isMatch,
                            onClick: onConfirm,
                            style: {
                                opacity: isMatch ? 1 : 0.5,
                                cursor: isMatch ? "pointer" : "not-allowed"
                            },
                            children: "Confirm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(DeleteConfirmModal, "Pe1zWWKcsJK82m3WyFiCTurRPxo=");
_c = DeleteConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "DeleteConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/lib/api/auth.api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteUserApi",
    ()=>deleteUserApi,
    "forgotApi",
    ()=>forgotApi,
    "googleAthuLoginApi",
    ()=>googleAthuLoginApi,
    "googleAuthLoginApi",
    ()=>googleAuthLoginApi,
    "loginApi",
    ()=>loginApi,
    "organizerSignupApi",
    ()=>organizerSignupApi,
    "resendOtpApi",
    ()=>resendOtpApi,
    "resetPasswordApi",
    ()=>resetPasswordApi,
    "signupApi",
    ()=>signupApi,
    "verifyEmailApi",
    ()=>verifyEmailApi,
    "verifyOtpApi",
    ()=>verifyOtpApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPrivate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axiosPublic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/endpoints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiHelper.js [app-client] (ecmascript)");
;
;
;
;
const signupApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.SIGNUP, data));
const organizerSignupApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.SIGNUP, data));
const loginApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.LOGIN, data));
const googleAthuLoginApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.GOOGLE_LOGIN, data));
const googleAuthLoginApi = googleAthuLoginApi;
const forgotApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.FORGOT_PASSWORD, data));
const verifyOtpApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.VERIFY_OTP, data));
const resendOtpApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.RESEND_OTP, data));
const resetPasswordApi = (data)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.RESET_PASSWORD, data));
const verifyEmailApi = (token)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPublic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].AUTH.ORG_VERIFY}?token=${encodeURIComponent(token)}`));
const deleteUserApi = (userId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiHelper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApi"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axiosPrivate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$endpoints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].USER.DELETE(userId)));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/profile/delete/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DeleteProfilePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/profile/delete/Delete.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DeleteConfirmModal$2f$DeleteConfirmModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/DeleteConfirmModal/DeleteConfirmModal.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/const-value/config-message/page.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/auth.api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.js [app-client] (ecmascript)");
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
function DeleteProfilePage() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleted, setDeleted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserData"])();
    const handleDelete = async ()=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteUserApi"])(userData.identity);
            if (res?.status) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(res.message);
                setDeleted(true);
                setOpen(false);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(res.message);
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(err?.response?.data?.message || "Delete failed");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper,
        children: [
            !deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].confirmBox,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/deleteprofileimage.png",
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGE_ALT"],
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_DELETE_ACCOUNT"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUB_TITLE_DELETE_ACCOUNT"],
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUB_TITLE_DELETE_ACCOUNT_SUB_TEXT"]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnRow,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BTN_CANCEL"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                onClick: ()=>setOpen(true),
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BTN_DELETE_ACCOUNT"]
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$DeleteConfirmModal$2f$DeleteConfirmModal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: open,
                onClose: ()=>setOpen(false),
                onConfirm: handleDelete,
                userEmail: userData.email
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            deleted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$profile$2f$delete$2f$Delete$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successBox,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$const$2d$value$2f$config$2d$message$2f$page$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MSG_DELETED_YOUR_ACCOUNT"]
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/profile/delete/page.js",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/profile/delete/page.js",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(DeleteProfilePage, "vVSzuxrWKdGbJtP42cAX79nB2vA=");
_c = DeleteProfilePage;
var _c;
__turbopack_context__.k.register(_c, "DeleteProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_4bf9c781._.js.map