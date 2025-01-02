"use client"

import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function PrivacyPolicy() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-md mx-auto px-4">
        <motion.div {...fadeIn}>
          <h1 className="text-3xl md:text-4xl font-medium mb-8 text-gray-900">
            Privacy Policy
          </h1>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Introduction</h2>
              <p className="mb-4">
                KIAIA respects your privacy and is committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and protect your personal information when you use our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Cookie Policy</h2>
              <p className="mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience. We categorize cookies as follows:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
                </li>
                <li>
                  <strong>Marketing Cookies:</strong> Used to deliver personalized advertisements.
                </li>
                <li>
                  <strong>Preference Cookies:</strong> Remember your settings and preferences.
                </li>
              </ul>
              <p className="mb-4">
                You can manage your cookie preferences through our cookie consent banner or your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Data Collection and Use</h2>
              <p className="mb-4">We collect and process the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information (processed securely by our payment providers)</li>
                <li>Browser and device information</li>
                <li>Website usage data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Your Rights</h2>
              <p className="mb-4">Under data protection laws, you have the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Right to access your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Rights related to automated decision-making</li>
              </ul>
              <p className="mb-4">
                For California residents (CCPA): You have the right to know what personal information we collect and how we use it, 
                and the right to request deletion of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Data Retention</h2>
              <p className="mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, 
                including legal, accounting, or reporting requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your personal data against unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">International Transfers</h2>
              <p className="mb-4">
                Your data may be transferred to and processed in countries outside your country of residence. 
                We ensure appropriate safeguards are in place to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Contact Us</h2>
              <p className="mb-4">
                For any privacy-related questions or to exercise your rights, please contact us at:{" "}
                <a href="mailto:privacy@kiaia.com" className="text-black hover:underline">
                  privacy@kiaia.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4 text-gray-900">Updates to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. The latest version will always be available on our website.
                Last updated: December 31, 2024
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 