import { termsMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = termsMetadata;

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

