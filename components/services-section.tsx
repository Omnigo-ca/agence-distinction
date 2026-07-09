import Link from "next/link"
import {
  Flower2Icon,
  HomeIcon,
  LeafIcon,
  MusicIcon,
  SparklesIcon,
  Wand2Icon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig, type Service } from "@/lib/site-config"
import { cn } from "@/lib/utils"

const serviceIcons = {
  music: MusicIcon,
  sparkles: SparklesIcon,
  home: HomeIcon,
  leaf: LeafIcon,
  wand: Wand2Icon,
  flower: Flower2Icon,
} as const

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title={siteConfig.services.title}
        subtitle={siteConfig.services.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.items.map((service: Service) => {
          const Icon =
            service.icon && service.icon in serviceIcons
              ? serviceIcons[service.icon as keyof typeof serviceIcons]
              : SparklesIcon

          return (
            <Card
              key={service.title}
              className={cn(
                "transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
                service.featured && "border-primary/40 ring-1 ring-primary/20"
              )}
            >
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button asChild>
          <Link href={siteConfig.cta.href}>{siteConfig.cta.label}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/services">Découvrir nos spectacles</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
