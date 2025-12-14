import type { Metadata } from "next";

export const generateMetadata = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata => {
  return {
    description,
    metadataBase: new URL("https://example.com"),
    title: { default: "My Site", template: `${title} | My Site` },
    alternates: {
      canonical: "https://example.com",
      languages: {
        "en-US": "https://example.com/en-US",
        "de-DE": "https://example.com/de-DE",
      },
    },
    openGraph: {
      title: "My Site",
      description: "Welcome to My Site",
      url: "https://example.com",
      siteName: "My Site",
      images: [{ url: "https://example.com/og.png" }],
    },
    category: 'Constructor'
  };
};
