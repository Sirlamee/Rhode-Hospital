import type { Metadata } from "next";
import AppointmentsClient from "./_client";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your appointment at Rhode Hospital through our secure Patient Portal. Browse available specialists, choose a time slot, and receive instant confirmation.",
  alternates: {
    canonical: "/appointments",
  },
  openGraph: {
    title: "Book an Appointment | Rhode Hospital",
    description:
      "Easily schedule your appointment at Rhode Hospital. Real-time availability, instant confirmation, and a personalised booking experience.",
    url: "https://www.rhodehospital.com/appointments",
  },
  twitter: {
    title: "Book an Appointment | Rhode Hospital",
    description:
      "Easily schedule your appointment at Rhode Hospital. Real-time availability, instant confirmation, and a personalised booking experience.",
  },
};

export default function AppointmentsPage() {
  return <AppointmentsClient />;
}
