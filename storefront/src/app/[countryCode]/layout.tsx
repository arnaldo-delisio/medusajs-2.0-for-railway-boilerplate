import CookieBanner from "@modules/common/components/cookie-banner"

export default async function RootLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      {props.children}
      <CookieBanner />
    </>
  )
} 