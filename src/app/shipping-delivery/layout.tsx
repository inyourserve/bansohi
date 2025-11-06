import { shippingDeliveryMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata: Metadata = shippingDeliveryMetadata;

export default function ShippingDeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

