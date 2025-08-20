import { aboutMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = aboutMetadata;

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
