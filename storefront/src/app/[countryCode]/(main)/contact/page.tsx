"use client"

import { useState } from "react"

const Input = ({ label, id, ...props }: { label: string; id: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-2">
      {label}
    </label>
    <input
      id={id}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors"
      {...props}
    />
  </div>
)

const TextArea = ({ label, id, ...props }: { label: string; id: string } & React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      id={id}
      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-black transition-colors min-h-[120px]"
      {...props}
    />
  </div>
)

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStatus("success")
    setFormState({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question about a particular piece? Interested in a custom order? 
            We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                id="name"
                label="Name"
                type="text"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                required
              />
              <Input
                id="email"
                label="Email"
                type="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                required
              />
              <Input
                id="subject"
                label="Subject"
                type="text"
                value={formState.subject}
                onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                required
              />
              <TextArea
                id="message"
                label="Message"
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                required
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-green-600 text-sm mt-4">
                  Thank you for your message. We'll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm mt-4">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Visit Us</h3>
                <p className="text-gray-600">
                  KIAIA LIMITED<br />
                  93 TABERNACLE STREET<br />
                  LONDON
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Email Us</h3>
                <a 
                  href="mailto:info@kiaia.com" 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  info@kiaia.com
                </a>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 