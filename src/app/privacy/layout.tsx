import { privacyMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = privacyMetadata;

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

