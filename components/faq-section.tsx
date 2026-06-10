"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionHeading } from "@/components/section-heading"
import { SectionWrapper } from "@/components/section-wrapper"
import { siteConfig } from "@/lib/site-config"

export function FaqSection() {
  return (
    <SectionWrapper id="faq" variant="muted">
      <SectionHeading
        title={siteConfig.faq.title}
        subtitle={siteConfig.faq.subtitle}
      />

      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {siteConfig.faq.items.map((item, index) => (
          <AccordionItem key={item.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  )
}
