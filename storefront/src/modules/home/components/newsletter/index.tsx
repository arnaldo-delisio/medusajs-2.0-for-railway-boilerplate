"use client"

import { useState } from "react"
import { Button } from "@medusajs/ui"

const Newsletter = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      setStatus("success")
      setMessage("Thank you for subscribing!")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <div className="w-full relative bg-black py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
      
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl text-white font-medium mb-6">
          Join Our Journey
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the allure of KIAIA and become part of a community that values history, artistry,
          and timeless beauty.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:border-white/40"
              required
            />
            <Button
              type="submit"
              className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          {message && (
            <p className={`mt-4 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Newsletter