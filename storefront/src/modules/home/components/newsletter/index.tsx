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
    <div className="max-w-screen-lg mx-auto px-4 mb-16">
      <div className="bg-black text-white py-16 px-8 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        
        <div className="relative text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            Join Our Journey
          </h2>
          <p className="text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
            Experience the allure of KIAIA and become part of a community that values history, artistry,
            and timeless beauty.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col items-center">
            <div className="flex flex-col sm:flex-row w-full gap-4">
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
                className="sm:w-auto w-2/3 mx-auto px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors"
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
    </div>
  )
}

export default Newsletter