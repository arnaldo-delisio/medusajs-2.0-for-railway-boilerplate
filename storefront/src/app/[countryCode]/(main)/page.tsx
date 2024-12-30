import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import ProductRail from "@modules/home/components//featured-products/product-rail"

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
