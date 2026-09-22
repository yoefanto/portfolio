import type { Metadata } from "next";
import RateCard from "@/components/RateCard";

export const metadata: Metadata = {
  title: "Rate Card & IT Services | Yogi Febrianto",
  description: "Official Rate Card and IT Service Packages for Yogi Febrianto — Senior Full-Stack Architect & Engineering Leader.",
  // Prevent search engines from indexing or caching this unlisted page
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RateCardPage() {
  return <RateCard />;
}
