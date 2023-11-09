import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  robots: "index, follow",
  title: "Portfolio | Kingkor Roy Tirtho",
  description:
    "Hi, I'm a full-stack and Flutter developer from Bangladesh with knowledge in multiple languages and frameworks.",
  creator: "Kingkor Roy Tirtho",
  publisher: "Kingkor Roy Tirtho",
  applicationName: "Portfolio",
  authors: [
    {
      name: "Kingkor Roy Tirtho",
      url: "https://krtirtho.dev",
    },
  ],
  category: "portfolio",
  keywords: [
    "Kingkor Roy Tirtho",
    "KRTirtho",
    "Fullstack",
    "Flutter",
    "Developer",
    "Bangladesh",
    "Dhaka",
    "Programming",
    "Software",
  ],
  metadataBase: new URL("https://krtirtho.dev"),
  appleWebApp: {
    capable: true,
    startupImage: {
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      url: "/images/profile.jpg",
    },
    title: "Portfolio | Kingkor Roy Tirtho",
  },
  openGraph: {
    type: "profile",
    title: "Portfolio | Kingkor Roy Tirtho",
    description:
      "Hi, I'm a full-stack and Flutter developer from Bangladesh with knowledge in multiple languages and frameworks.",
    countryName: "Bangladesh",
    firstName: "Kingkor",
    lastName: "Roy Tirtho",
    gender: "Male",
    determiner: "the",
    siteName: "KRTirtho",
    images: [
      {
        url: "/images/profile.jpg",
        alt: "Profile Image",
      },
    ],
    url: "https://krtirtho.dev",
  },
  twitter: {
    site: "@krtirtho",
    title: "Portfolio | Kingkor Roy Tirtho",
    card: "summary_large_image",
    creator: "@krtirtho",
    creatorId: "krtirtho",
    description:
      "Hi, I'm a full-stack and Flutter developer from Bangladesh with knowledge in multiple languages and frameworks.",
    images: {
      url: "/images/profile.jpg",
      alt: "Profile Image",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} md:mx-auto md:max-w-6xl bg-background dark:bg-background-dark text-gray-900 dark:text-gray-100 pb-10`}
      >
        <Navbar />
        <div className="px-5">{children}</div>
      </body>
    </html>
  );
}
