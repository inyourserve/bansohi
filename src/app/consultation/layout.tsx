import { consultationMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = consultationMetadata;

export default function ConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
