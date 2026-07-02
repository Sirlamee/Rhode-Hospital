import type { Metadata } from "next";
import AboutUsClient from "./_client";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rhode Hospital's history, mission, vision, and core values. Founded in 1998, we have grown into a leading international medical centre serving over 1 million patients.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Rhode Hospital",
    description:
      "Discover Rhode Hospital's 25+ year legacy of compassionate, world-class healthcare across 40+ specialties.",
    url: "https://www.rhodehospital.com/about-us",
  },
  twitter: {
    title: "About Us | Rhode Hospital",
    description:
      "Discover Rhode Hospital's 25+ year legacy of compassionate, world-class healthcare across 40+ specialties.",
  },
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}
