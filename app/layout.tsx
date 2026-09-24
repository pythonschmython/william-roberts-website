
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Roberts | Private Science Tutoring",
  description:
    "Private chemistry, physics, and mathematics tutoring in NYC and online. Brown University chemistry graduate with 5+ years of teaching experience.",

  openGraph: {
    title: "William Roberts | Private Science Tutoring",
    description:
      "Private chemistry, physics, and mathematics tutoring in NYC and online.",
    url: "https://www.wrscience.com/",
    siteName: "William Roberts Tutoring",
    images: [
      {
        url: "/linkedin-preview.png",
        width: 1200,
        height: 630,
        alt: "William Roberts — Private Science Tutoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
