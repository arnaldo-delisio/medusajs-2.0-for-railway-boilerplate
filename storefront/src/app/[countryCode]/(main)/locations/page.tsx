"use client"

import { motion } from "framer-motion"
import { getStores, Store } from "@lib/data/stores"
import { useEffect, useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const StoreLocation = ({ 
  title, 
  address,
  image,
  delay = 0
}: { 
  title: string
  address: string[]
  image: string
  delay?: number
}) => (
  <motion.div 
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{
      initial: { opacity: 0, y: 50 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.6,
          delay: delay
        }
      }
    }}
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img 
        src={image} 
        alt={`${title} store location`}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="relative p-6 text-center">
      <h3 className="text-xl font-medium mb-4 text-gray-900">{title}</h3>
      <div className="space-y-1">
        {address.map((line) => (
          <p key={`${title}-${line}`} className="text-gray-600 leading-relaxed">{line}</p>
        ))}
      </div>
      <motion.div 
        className="mt-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(address.join(' '))}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Get Directions
        </a>
      </motion.div>
    </div>
  </motion.div>
)

export default function StoresPage() {
  const [stores, setStores] = useState<Store[]>([])

  useEffect(() => {
    const loadStores = async () => {
      const storeData = await getStores()
      setStores(storeData)
    }
    loadStores()
  }, [])

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Header Section */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-medium mb-6 text-gray-900">
            Locations
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6">
              While I love to keep the production artisanal and niche, I understand how essential it is to try
              on jewelry. Factors like size, weight, and color can vary significantly when worn. Ensuring
              customers can try on pieces allows them to experience the unique qualities of each item,
              helping them find the perfect match for their style and comfort.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Find below our retail locations in Italy and the US.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For any enquiries or bespoke orders feel free to{" "}
              <a href="/contact" className="text-black underline hover:opacity-80">
                contact us
              </a>
              .
            </p>
          </div>
        </motion.div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stores.map((store, index) => (
            <StoreLocation
              key={store.id}
              title={store.title}
              address={store.address}
              image={store.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 