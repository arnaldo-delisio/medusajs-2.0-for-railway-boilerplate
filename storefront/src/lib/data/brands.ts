import { cache } from "react"
import { sdk } from "@lib/config"

export interface Brand {
  id: string
  name: string
  logo: string
  link?: string
  order?: number
}

const MINIO_URL = `https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media`

// This is a temporary function until we have the API endpoint
// TODO: Replace with actual API call when backend is ready
export const getBrands = cache(async (): Promise<Brand[]> => {
  // Temporary data until we have the API
  return [
    {
      id: "1",
      name: "Vanity Fair",
      logo: `${MINIO_URL}/featured-brands/vanity-fair.svg`,
      link: "https://www.vanityfair.com",
      order: 1
    },
    {
      id: "2",
      name: "New York Times",
      logo: `${MINIO_URL}/featured-brands/ny-times.svg`,
      link: "https://www.nytimes.com",
      order: 2
    },
    {
        id: "3",
        name: "Tatler Magazine",
        logo: `${MINIO_URL}/featured-brands/tatler.svg`,
        link: "https://www.tatler.com",
        order: 3
        },
    {
      id: "4",
      name: "The Times UK",
      logo: `${MINIO_URL}/featured-brands/the-times-uk.svg`,
      link: "https://www.thetimes.com/article/2cc04384-1d58-11ed-8cc0-b6d3f6238a92",
      order: 4
    },
    {
        id: "5",
        name: "Something About Rocks",
        logo: `${MINIO_URL}/featured-brands/something-about-rocks.svg`,
        link: "https://somethingaboutrocks.com/article/meet-kiaia-jewellery-francesca-ruggiero/",
        order: 4
      }
  ]
})

// When backend is ready, uncomment and modify this:
/*
export const getBrands = cache(async (): Promise<Brand[]> => {
  try {
    const response = await sdk.store.custom.get("/brands")
    return response.brands
  } catch (error) {
    console.error("Failed to fetch brands:", error)
    return []
  }
})
*/ 