import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "William Roberts Tutoring",
  description: "Tutoring that builds confidence",
  openGraph: {
    title: "William Roberts",
    description: "Tutoring that builds confidence",
    url: "https://www.wrscience.com/",
    siteName: "William Roberts",
    images: [
      {
        url: "/linkedin-preview.png",
        width: 1200,
        height: 630,
        alt: "Tutoring that builds confidence",
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