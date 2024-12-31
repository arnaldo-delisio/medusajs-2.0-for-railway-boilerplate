import { cache } from "react"

export interface Store {
  id: string
  title: string
  address: string[]
  image: string
}

const MINIO_URL = `https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media`

export const getStores = cache(async (): Promise<Store[]> => {
  return [
    {
      id: "1",
      title: "Laboratorio Capri",
      address: [
        "Via Ignazio Cerio 6",
        "80073 Capri, Italy"
      ],
      image: `${MINIO_URL}/stores/capri.jpeg`
    },
    {
      id: "2",
      title: "The Conservatory Nyc",
      address: [
        "20 Hudson Yards, Suite 106,",
        "New York, NY 10001"
      ],
      image: `${MINIO_URL}/stores/nyc.jpeg`
    },
    {
      id: "3",
      title: "The Jewel",
      address: [
        "495 Grand Boulevard, Suite J-108,",
        "Miramar Beach, Florida 32550"
      ],
      image: `${MINIO_URL}/stores/florida.jpg`
    }
  ]
}) 