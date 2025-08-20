import { contactMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = contactMetadata;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
