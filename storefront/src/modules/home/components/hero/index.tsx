import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <Image
        src={`https://${process.env.NEXT_PUBLIC_MINIO_ENDPOINT}/medusa-media/Hero.png`}
        alt="Hero background"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-start items-center text-center small:p-32" style={{ gap: '400px' }}>
        <span>
        </span>
        <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <Button style={{ backgroundColor: '#yourColorCode' }}>
            Shop Now
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
