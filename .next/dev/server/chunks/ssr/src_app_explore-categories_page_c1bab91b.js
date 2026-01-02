module.exports = [
"[project]/src/app/explore-categories/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVENT_CATEGORIES",
    ()=>EVENT_CATEGORIES,
    "default",
    ()=>ExploreCategoriesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const EVENT_CATEGORIES = [
    {
        id: 1,
        text: "Hackathon",
        image: "/images/hackathonCategories.png",
        color: "#E3F2FD"
    },
    {
        id: 2,
        text: "Conferences",
        image: "/images/conferenceCategories.png",
        color: "#FFF3E0"
    },
    {
        id: 3,
        text: "Athletics",
        image: "/images/athleticsCategories.png",
        color: "#FCE4EC"
    },
    {
        id: 4,
        text: "Webinars",
        image: "/images/webinarsCategories.jpeg",
        color: "#EDE7F6"
    },
    {
        id: 5,
        text: "Concerts",
        image: "/images/concertsCategories.png",
        color: "#E8F5E9"
    },
    {
        id: 6,
        text: "Tournaments",
        image: "/images/tournamentsCategories.png",
        color: "#FFFDE7"
    },
    {
        id: 7,
        text: "Job Fairs",
        image: "/images/jobFairCategories.jpeg",
        color: "#E1F5FE"
    },
    {
        id: 8,
        text: "Art Gallery",
        image: "/images/artgalleryCategories.png",
        color: "#F3E5F5"
    },
    {
        id: 9,
        text: "Magic Shows",
        image: "/images/magicshowsCategories.png",
        color: "#FFF3E0"
    },
    {
        id: 10,
        text: "Workshops",
        image: "/images/workshopsCategories.png",
        color: "#E8F5E9"
    },
    {
        id: 11,
        text: "Comedy Shows",
        image: "/images/comdeyshowsCategories.png",
        color: "#FCE4EC"
    },
    {
        id: 12,
        text: "Stage Plays",
        image: "/images/stagePlaysCategories.png",
        color: "#EDE7F6"
    },
    {
        id: 13,
        text: "Fashion Show",
        image: "/images/fashionShowCategories.jpeg",
        color: "#FFF0F5"
    },
    {
        id: 14,
        text: "Music Festival",
        image: "/images/musicFestivalCategories.jpeg",
        color: "#E1F5FE"
    },
    {
        id: 15,
        text: "Cultural Events",
        image: "/images/culturaleventsCategories.png",
        color: "#FFFDE7"
    },
    {
        id: 16,
        text: "Dance Competitions",
        image: "/images/danceCompetitionCategories.png",
        color: "#E8F5E9"
    },
    {
        id: 17,
        text: "Fitness Challenge",
        image: "/images/fitnessChallengeCategories.png",
        color: "#F3E5F5"
    },
    {
        id: 18,
        text: "Marathon",
        image: "/images/marathonCategories.png",
        color: "#E3F2FD"
    },
    {
        id: 19,
        text: "Guest Lectures",
        image: "/images/guestLecturesCategories.png",
        color: "#FFF3E0"
    },
    {
        id: 20,
        text: "Video Games",
        image: "/images/videoGamesCategories.png",
        color: "#EDE7F6"
    },
    {
        id: 21,
        text: "Alumni Meets",
        image: "/images/alumniMeetsCategories.png",
        color: "#E1F5FE"
    },
    {
        id: 22,
        text: "Startup Events",
        image: "/images/startUpEventsCategories.png",
        color: "#FFFDE7"
    },
    {
        id: 23,
        text: "Training Programs",
        image: "/images/trainingProgramsCategories.png",
        color: "#E8F5E9"
    },
    {
        id: 24,
        text: "Expo & Tradeshows",
        image: "/images/expo&TradeshowsCategories.png",
        color: "#FFF3E0"
    },
    {
        id: 25,
        text: "Meet Ups",
        image: "/images/meetUpsCategories.png",
        color: "#E3F2FD"
    },
    {
        id: 26,
        text: "Civic Festivals",
        image: "/images/civicFestivalsCategories.png",
        color: "#EDE7F6"
    },
    {
        id: 27,
        text: "Seminars",
        image: "/images/seminarsCategories.png",
        color: "#FCE4EC"
    },
    {
        id: 28,
        text: "Food Festival",
        image: "/images/foodFestivalCategories.png",
        color: "#FFFDE7"
    },
    {
        id: 29,
        text: "Awareness Program",
        image: "/images/awarenessProgramCategories.png",
        color: "#E8F5E9"
    },
    {
        id: 30,
        text: "Technical Events",
        image: "/images/technicalEventsCategories.png",
        color: "#E1F5FE"
    },
    {
        id: 31,
        text: "Blood Donation Camps",
        image: "/images/bloodDonationCampsCategories.png",
        color: "#F3E5F5"
    },
    {
        id: 32,
        text: "Symposiums",
        image: "/images/symposiumsCategories.png",
        color: "#F5F5F5"
    },
    {
        id: 33,
        text: "Mental Wellness",
        image: "/images/mentalWellnessCategories.png",
        color: "#E8F5E9"
    },
    {
        id: 34,
        text: "Prayer Meeting",
        image: "/images/prayerMeetingCategories.png",
        color: "#E1F5FE"
    },
    {
        id: 35,
        text: "Painting",
        image: "/images/paintingCategories.png",
        color: "#F3E5F5"
    },
    {
        id: 36,
        text: "others",
        image: "/images/othersCategories.png",
        color: "#F5F5F5"
    }
];
function ExploreCategoriesPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handelNavigation = ()=>{
        router.push("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "explore-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-start m-4",
                style: {
                    cursor: "pointer"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    onClick: handelNavigation,
                    children: " 🔙 Back"
                }, void 0, false, {
                    fileName: "[project]/src/app/explore-categories/page.js",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/explore-categories/page.js",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explore-header mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Choose Your Event Type"
                }, void 0, false, {
                    fileName: "[project]/src/app/explore-categories/page.js",
                    lineNumber: 247,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/explore-categories/page.js",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "explore-grid",
                children: EVENT_CATEGORIES.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "explore-card",
                        style: {
                            backgroundColor: item.color
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "icon-box",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.image,
                                    alt: item.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/explore-categories/page.js",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/explore-categories/page.js",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/explore-categories/page.js",
                                lineNumber: 261,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/src/app/explore-categories/page.js",
                        lineNumber: 253,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/explore-categories/page.js",
                lineNumber: 251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/explore-categories/page.js",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_explore-categories_page_c1bab91b.js.map