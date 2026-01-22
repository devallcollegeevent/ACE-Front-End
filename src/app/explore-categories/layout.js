export const metadata = {
  // Browser tab + Google blue link
  title: "TEST – Event Categories | ACE",

  // Google search description
  description:
    "TEST description: This page lets users explore different types of college events.",

  // Canonical (original URL)
  alternates: {
    canonical: "/explore-categories",
  },

  // WhatsApp / Facebook / LinkedIn preview
  openGraph: {
    title: "TEST OG Title – Explore Categories",
    description:
      "TEST OG Description: Browse hackathons, workshops, concerts and more.",
    url: "/explore-categories",
    siteName: "ACE – All College Events",
    images: [
      {
        url: "/images/test-og.png", // try changing image
        width: 1200,
        height: 630,
        alt: "TEST OG Image",
      },
    ],
    type: "website",
  },

  // Twitter / X preview
  twitter: {
    card: "summary_large_image",
    title: "TEST Twitter Title – Categories",
    description:
      "TEST Twitter Description: Discover college events by category.",
    images: ["/images/test-og.png"],
  },
};

/**
 * Explore Categories Layout
 * Wrapper for the explore categories page.
 */
export default function ExploreCategoriesLayout({ children }) {
  return <>{children}</>;
}
