export const metadata = {
  // Browser tab + Google blue link
  title: "Event Categories | ACE",

  // Google search description
  description:
    " description: This page lets users explore different types of college events.",

  // Canonical (original URL)
  alternates: {
    canonical: "/explore-categories",
  },

  // WhatsApp / Facebook / LinkedIn preview
  openGraph: {
    title: "OG Title – Explore Categories",
    description:
      "OG Description: Browse hackathons, workshops, concerts and more.",
    url: "/explore-categories",
    siteName: "ACE – All College Events",
    images: [
      {
        url: "/images/test-og.png", // try changing image
        width: 1200,
        height: 630,
        alt: "Image",
      },
    ],
    type: "website",
  },

  // Twitter / X preview
  twitter: {
    card: "summary_large_image",
    title: "Twitter Title – Categories",
    description:
      "Twitter Description: Discover college events by category.",
    images: ["/images/test-og.png"],
  },
};

export default function ExploreCategoriesLayout({ children }) {
  return <>{children}</>;
}
