import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import KiaiaLogo from "@modules/common/icons/kiaia-logo"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 z-50 transition-colors duration-300 bg-black/40 [&:has(+*:hover)]:bg-black/60">
      <header className="h-16">
        <nav className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between">
          {/* Left section - Menu */}
          <div className="flex-1 flex items-center">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Center section - Logo */}
          <div className="flex items-center px-8">
            <LocalizedClientLink
              href="/"
              className="block hover:opacity-80 transition-opacity"
              data-testid="nav-store-link"
            >
              <KiaiaLogo className="w-[120px] h-[40px] my-auto text-white" />
            </LocalizedClientLink>
          </div>

          {/* Right section - Navigation */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="hidden md:flex items-center gap-6">
              {process.env.NEXT_PUBLIC_FEATURE_SEARCH_ENABLED && (
                <LocalizedClientLink
                  href="/search"
                  className="text-white hover:text-gray-200 text-sm"
                  scroll={false}
                  data-testid="nav-search-link"
                >
                  Search
                </LocalizedClientLink>
              )}
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  className="text-white hover:text-gray-200 text-sm"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
