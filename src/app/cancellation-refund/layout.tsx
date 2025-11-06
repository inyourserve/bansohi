import { cancellationRefundMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = cancellationRefundMetadata;

export default function CancellationRefundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

