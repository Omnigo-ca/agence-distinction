import Link from "next/link"

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

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        title={siteConfig.services.title}
        subtitle={siteConfig.services.subtitle}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.items.map((service: Service) => (
          <Card
            key={service.title}
            className={cn(
              "transition-shadow hover:shadow-md",
              service.featured && "border-primary/40 ring-1 ring-primary/20"
            )}
          >
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              {service.price ? (
                <p className="text-sm font-medium text-primary">{service.price}</p>
              ) : null}
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild>
          <Link href={siteConfig.cta.href}>{siteConfig.cta.label}</Link>
        </Button>
      </div>
    </SectionWrapper>
  )
}
