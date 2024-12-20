import { Header } from "@/components/globals/Header";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "E-JUST Powerlifting Tournament",
  description: "THE BIG EVENT",
  openGraph: {
    title: "E-JUST Powerlifting Tournament",
    description: "The ultimate powerlifting event at E-JUST. Join us to witness incredible feats of strength.",
    url: "https://example.com", // Replace with your event's URL
    siteName: "E-JUST Powerlifting",
    images: [
      {
        url: "https://example.com/images/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "E-JUST Powerlifting Tournament",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-JUST Powerlifting Tournament",
    description: "The ultimate powerlifting event at E-JUST. Join us to witness incredible feats of strength.",
    images: ["https://example.com/images/og-image.jpg"], // Same image URL as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
