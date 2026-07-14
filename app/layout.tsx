import { Cormorant_Garamond, DM_Sans } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://agencedistinction.ca"
  ),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  icons: {
    icon: siteConfig.logo.official,
    apple: siteConfig.logo.official,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    locale: siteConfig.seo.openGraphLocale,
    type: "website",
    images: [siteConfig.logo.official],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={siteConfig.business.locale}
      className={cn(
        "antialiased",
        dmSans.variable,
        cormorant.variable,
        "font-sans"
      )}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
