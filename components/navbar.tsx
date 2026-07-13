"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <BrandLogo variant="official" height="md" />

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-6"
          aria-label="Navigation principale"
        >
          {siteConfig.navigation.map((link) => {
            const isActive = isNavLinkActive(pathname, link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "whitespace-nowrap text-sm font-medium transition-colors",
                  isActive
                    ? "font-semibold text-primary underline decoration-primary decoration-2 underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex" size="sm">
            <Link href={siteConfig.cta.href}>{siteConfig.cta.label}</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Ouvrir le menu de navigation"
              >
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetHeader>
                <SheetTitle className="sr-only">{siteConfig.business.name}</SheetTitle>
                <BrandLogo variant="official" height="md" linked={false} />
              </SheetHeader>
              <nav
                className="mt-8 flex flex-col gap-2"
                aria-label="Navigation mobile"
              >
                {siteConfig.navigation.map((link) => {
                  const isActive = isNavLinkActive(pathname, link.href)

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleNavClick}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}
                <Button asChild className="mt-4 w-full">
                  <Link href={siteConfig.cta.href} onClick={handleNavClick}>
                    {siteConfig.cta.label}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
