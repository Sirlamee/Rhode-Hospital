import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingQuickActions from "@/components/floating-quick-actions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rhode Hospital",
    template: "%s | Rhode Hospital",
  },
  description:
    "Rhode Hospital offers world-class, compassionate healthcare across 40+ specialties. Book appointments, meet our specialists, and experience patient-centred care.",
  keywords: [
    "Rhode Hospital",
    "hospital",
    "healthcare",
    "doctors",
    "specialists",
    "appointments",
    "cardiology",
    "neurology",
    "paediatrics",
    "general surgery",
  ],
  metadataBase: new URL("https://www.rhodehospital.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rhodehospital.com",
    siteName: "Rhode Hospital",
    title: "Rhode Hospital — World-Class Healthcare",
    description:
      "Rhode Hospital offers world-class, compassionate healthcare across 40+ specialties. Book appointments, meet our specialists, and experience patient-centred care.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rhode Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rhode Hospital — World-Class Healthcare",
    description:
      "Rhode Hospital offers world-class, compassionate healthcare across 40+ specialties. Book appointments and experience patient-centred care.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    // Add your Google Search Console token here when ready:
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased text-gray-900 bg-gray-50 flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <div className="grow">
          {children}
        </div>
        <Footer />
        <FloatingQuickActions />
      </body>
    </html>
  );
}
