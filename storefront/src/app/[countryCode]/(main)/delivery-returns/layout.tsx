import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delivery & Returns | KIAIA",
  description: "Information about our delivery process and returns policy for KIAIA jewelry.",
}

export default function DeliveryReturnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 