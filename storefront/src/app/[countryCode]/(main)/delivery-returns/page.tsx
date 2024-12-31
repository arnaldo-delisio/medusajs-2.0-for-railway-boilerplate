import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delivery & Returns | KIAIA",
  description: "Information about our delivery process and returns policy for KIAIA jewelry.",
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-12">
    <h2 className="text-2xl font-medium mb-4 text-gray-900">{title}</h2>
    <div className="space-y-4 text-gray-600 leading-relaxed">
      {children}
    </div>
  </div>
)

export default function DeliveryReturnsPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-medium mb-8 text-gray-900">
          Delivery & Returns
        </h1>

        <div className="prose max-w-none">
          <Section title="International Orders & Customs">
            <p>
              Outside of Europe orders may have additional customs or import duty charges depending on 
              the destination country. Please note that we do not cover these costs, therefore, you 
              will be responsible for them.
            </p>
            <p>
              Unfortunately as these costs are beyond our control and vary between countries, we cannot 
              advise prior to shipment how much they will be. If you would like to find out how much 
              these charges will be, we recommend contacting your local customs office before placing 
              an order.
            </p>
          </Section>

          <Section title="Returns Policy">
            <p>
              In the unlikely event that you are unhappy with your purchase, we are happy to exchange 
              or refund items within 7 days from delivery. We regrettably do not accept returns on 
              earrings due to hygiene reasons, nor do we accept any made to order pieces back.
            </p>
          </Section>

          <Section title="Return Process">
            <p>
              To return a Product purchased on our website, please request a Return Authorization 
              number within 5 days of receiving your order by contacting us at{" "}
              <a href="mailto:sales@kiaia.com" className="text-black underline hover:opacity-80">
                sales@kiaia.com
              </a>
              .
            </p>
            <p>
              Your item must be then shipped to us within 4 days of receiving your RA number. We will 
              accept returns with their original packaging. The pieces must be unused, unworn and in 
              an unaltered condition.
            </p>
            <p>
              You are responsible for the cost of return shipping for this item back to us.
            </p>
          </Section>

          <Section title="Privacy & Security">
            <p>
              We do not store credit card details nor do we share customer details with any 3rd parties.
            </p>
          </Section>

          <Section title="Additional Information">
            <p>
              Please do contact us if you would like any information about a particular jewellery 
              piece, whether it be further images, or if you would like to arrange an appointment.
            </p>
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