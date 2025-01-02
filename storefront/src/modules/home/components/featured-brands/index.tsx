"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"
import { getBrands, Brand } from "@lib/data/brands"
import { Spinner } from "@medusajs/icons"

interface FeaturedBrandsProps {
  speed?: number
  pauseOnHover?: boolean
  gap?: number
}

const FeaturedBrands = ({
  speed = 30,
  pauseOnHover = true,
  gap = 64,
}: FeaturedBrandsProps) => {
  const [brands, setBrands] = useState<Brand[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [duplicates, setDuplicates] = useState(2)

  // Calculate how many times we need to duplicate the brands to fill the screen
  const calculateDuplicates = useCallback(() => {
    if (!containerRef.current || brands.length === 0) return

    const containerWidth = containerRef.current.offsetWidth
    const brandWidth = 120 + gap // brand width + gap
    const totalBrandsWidth = brands.length * brandWidth
    const necessaryDuplicates = Math.ceil((containerWidth * 3) / totalBrandsWidth)
    setDuplicates(Math.max(necessaryDuplicates, 2))
  }, [brands, gap]) // calculateDuplicates depends on brands and gap

  useEffect(() => {
    const loadBrands = async () => {
      try {
        setIsLoading(true)
        const fetchedBrands = await getBrands()
        setBrands(fetchedBrands)
      } catch (error) {
        console.error("Failed to load brands:", error)
      } finally {
        setIsLoading(false)
      }
    }
    loadBrands()
  }, [])

  useEffect(() => {
    calculateDuplicates()
    window.addEventListener('resize', calculateDuplicates)
    return () => window.removeEventListener('resize', calculateDuplicates)
  }, [brands, gap, calculateDuplicates]) // Keep all dependencies

  useEffect(() => {
    if (!containerRef.current || brands.length === 0) return

    let animationFrameId: number
    let lastTimestamp: number

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      const delta = timestamp - lastTimestamp
      
      if (!isPaused) {
        setTranslateX(prev => {
          const brandWidth = 120 + gap
          const resetPoint = -brandWidth * brands.length
          const newTranslate = prev - (speed * delta) / 1000
          return newTranslate <= resetPoint ? 0 : newTranslate
        })
      }
      
      lastTimestamp = timestamp
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [brands, speed, isPaused, gap])

  if (isLoading) {
    return (
      <div className="w-full bg-black py-12 flex justify-center items-center">
        <Spinner className="animate-spin text-white" />
      </div>
    )
  }

  if (brands.length === 0) {
    return null
  }

  // Create an array of duplicated brand lists
  const duplicatedBrands = Array(duplicates).fill(brands).flat()

  return (
    <div className="w-full bg-black py-6 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div 
          ref={containerRef}
          className="relative"
          onMouseEnter={() => pauseOnHover && setIsPaused(true)}
          onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        >
          <div 
            className="flex items-center"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {duplicatedBrands.map((brand, idx) => (
              <BrandItem 
                key={`${brand.id}-${idx}`} 
                brand={brand} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Separate component for brand item
const BrandItem = ({ brand }: { brand: Brand }) => {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="flex-shrink-0 w-[120px] h-[60px] flex items-center justify-center text-gray-400">
        {brand.name}
      </div>
    )
  }

  return (
    <div className="flex-shrink-0 hover:opacity-60 transition-opacity">
      {brand.link ? (
        <a
          href={brand.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={120}
            height={60}
            className="object-contain brightness-0 invert"
            onError={() => setImageError(true)}
            priority
          />
        </a>
      ) : (
        <Image
          src={brand.logo}
          alt={brand.name}
          width={120}
          height={60}
          className="object-contain brightness-0 invert"
          onError={() => setImageError(true)}
          priority
        />
      )}
    </div>
  )
}

export default FeaturedBrands 