"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const slideIn = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen relative bg-black flex items-center -mt-[64px]"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-1/2 text-white mb-8 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
              Where History<br />Becomes Art
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Each piece whispers stories of myths, symbols, and extraordinary heritage, 
              connecting the past to the present.
            </p>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/store" 
                className="inline-block border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-colors"
              >
                Shop Now
              </a>
            </motion.div>
          </motion.div>
          <div className="w-full md:w-1/2" />
        </div>
        <Image
          src={`https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media/coins.webp`}
          alt="KIAIA Craftsmanship"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </motion.div>

      {/* Content Sections */}
      <div className="relative z-10 bg-white">
        <div className="max-w-screen-lg mx-auto px-4 py-12">
          {/* Welcome Section */}
          <motion.section 
            {...fadeIn}
            className="mb-24 text-center max-w-3xl mx-auto"
          >
            <p className="text-gray-700 leading-relaxed text-lg">
              At KIAIA, history comes alive through the art of jewelry. Our creations draw inspiration 
              from the timeless beauty of ancient relics, transforming them into contemporary masterpieces 
              that resonate with the eternal spirit of history.
            </p>
          </motion.section>

          {/* Philosophy Section */}
          <motion.section 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={slideIn}>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Our Philosophy</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                KIAIA is inspired by the rich Greek-Roman cultural heritage, particularly the historical 
                treasures of Naples. We believe that every relic, no matter how ancient, holds a tale 
                waiting to be told. By carefully reinterpreting these stories, we craft modern jewels 
                that evoke emotions and celebrate the enduring allure of history.
              </p>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src={`https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media/phylosophy.webp`}
                alt="KIAIA Philosophy"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </motion.section>

          {/* Craftsmanship Section */}
          <motion.section 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div 
              variants={fadeIn}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl order-last md:order-first"
            >
              <Image
                src={`https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media/about-hero.webp`}
                alt="KIAIA Craftsmanship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            <motion.div variants={slideIn}>
              <h2 className="text-2xl md:text-3xl font-medium mb-6">Craftsmanship and Uniqueness</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Each KIAIA creation is a testament to the unparalleled artistry of Italian craftsmanship. 
                Using the finest materials and stones, our skilled artisans transform designs into 
                one-of-a-kind pieces. With a clean, distinctive aesthetic, KIAIA jewelry is more than 
                adornment – it is a connection to the immortal spirit of history.
              </p>
            </motion.div>
          </motion.section>

          {/* Values Section */}
          <motion.section 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-24 text-center"
          >
            <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-medium mb-12">Our Values</motion.h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Heritage",
                  description: "Preserving and celebrating the rich cultural heritage of Greek-Roman civilization."
                },
                {
                  title: "Artistry",
                  description: "Combining traditional craftsmanship with contemporary design sensibilities."
                },
                {
                  title: "Innovation",
                  description: "Reimagining historical elements for the modern jewelry connoisseur."
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="p-8 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center bg-black text-white py-16 px-8 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Join Our Journey</h2>
            <p className="text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">
              Experience the allure of KIAIA and become part of a community that values history, 
              artistry, and timeless beauty.
            </p>
            <motion.div 
              className="inline-flex gap-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/store" 
                className="inline-block bg-white text-black px-8 py-3 rounded hover:bg-gray-100 transition-colors"
              >
                Explore Collection
              </a>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  )
} 