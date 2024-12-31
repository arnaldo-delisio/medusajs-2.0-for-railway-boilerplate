const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-medium mb-4 text-gray-900">{title}</h2>
    <div className="space-y-4 text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
)

export default function PrivacyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-medium mb-4 text-gray-900">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Last Updated: February 15, 2021</p>
        </div>

        <div className="prose max-w-none">
          <Section title="Introduction">
            <p>
              KIAIA Limited respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website www.kiaia.com, including any other media form, media channel, 
              mobile website, or mobile application related or connected thereto (collectively, the "Site").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes 
              by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon 
              posting the updated Privacy Policy on the Site, and you waive the right to receive specific notice of each such change or modification.
            </p>
            <p>
              You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made 
              aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued 
              use of the Site after the date such revised Privacy Policy is posted.
            </p>
          </Section>

          <Section title="Collection of Your Information">
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            
            <h3 className="text-lg font-medium mt-6 mb-2 text-gray-900">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic 
              information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site 
              or when you choose to participate in various activities related to the Site. You are under no obligation to provide us with personal 
              information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2 text-gray-900">Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) 
              that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store 
              only very limited, if any, financial information that we collect.
            </p>
          </Section>

          <Section title="Use of Your Information">
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. 
              Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account</li>
              <li>Process payments and refunds</li>
              <li>Email you regarding your account or order</li>
              <li>Send you a newsletter</li>
              <li>Respond to product and customer service requests</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
            </ul>
          </Section>

          <Section title="Questions?">
            <p>If you have questions or comments about this Privacy Policy, please contact us:</p>
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  )
} 