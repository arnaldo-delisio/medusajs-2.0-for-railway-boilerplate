import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store Locations | KIAIA",
  description: "Visit our retail locations in Italy and the US to experience KIAIA's unique jewelry collection in person.",
}

export default function StoresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 