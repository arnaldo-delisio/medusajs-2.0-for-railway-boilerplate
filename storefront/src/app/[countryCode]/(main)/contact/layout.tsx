import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | KIAIA",
  description: "Get in touch with KIAIA for inquiries about our jewelry collection, custom orders, or any other questions.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 