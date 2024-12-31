import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | KIAIA",
  description: "Learn about how KIAIA collects, uses, and protects your personal information.",
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 