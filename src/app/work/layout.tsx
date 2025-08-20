import { workMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = workMetadata;

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
