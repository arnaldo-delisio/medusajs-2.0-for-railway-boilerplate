import { Button } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[120vh] w-full relative bg-black -mt-[64px]">
      <Image
        src={`https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media/Hero.png`}
        alt="Hero background"
        fill
        className="object-cover opacity-90"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      
      <div className="absolute inset-0">
        <div className="container h-full mx-auto px-4 md:px-8 lg:px-12">
          <div className="h-full flex flex-col justify-center md:justify-start md:pt-48">
            <div 
              className="w-full md:w-1/2 text-white opacity-0 translate-x-[-20px] animate-fade-in-slide"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Iconic Jewelry<br />since 2023
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Celebrate every facet of love with iconic gifts from KIAIA.
              </p>
              <div className="group">
                <a 
                  href="/store" 
                  className="inline-block border-2 border-white px-8 py-3 text-lg hover:bg-white hover:text-black transition-all duration-300 transform group-hover:scale-105 active:scale-95"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
