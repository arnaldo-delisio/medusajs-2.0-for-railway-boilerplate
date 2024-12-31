import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import FeaturedBrands from "@modules/home/components/featured-brands"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import ProductRail from "@modules/home/components//featured-products/product-rail"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "KIAIA",
  description:
    "FINE JEWELLERY | KIAIA | LONDON",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  console.log("Collections passed to Home:", collections);

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      
      <div className="max-w-screen-lg mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-medium mb-6">
          Where History Meets Elegance
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          At KIAIA, we transform the timeless beauty of ancient relics into contemporary masterpieces. 
          Drawing inspiration from the rich Greek-Roman cultural heritage and the historical treasures of Naples, 
          each piece is a testament to unparalleled Italian craftsmanship. Our creations don't just adorn – 
          they tell stories of myths, symbols, and extraordinary heritage, connecting the eternal spirit of 
          history with modern elegance.
        </p>
        <LocalizedClientLink 
          href="/about"
          className="inline-block bg-black text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
        >
          Discover Our Story
        </LocalizedClientLink>
      </div>

      <FeaturedBrands 
        speed={40}
        pauseOnHover={true}
        gap={80}
      />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
          {collections && collections.length > 0 ? (
            <ProductRail collection={collections[0]} region={region} />
          ) : (
            <p>No collections available.</p>
          )}
        </ul>
      </div>
    </>
  )
}
