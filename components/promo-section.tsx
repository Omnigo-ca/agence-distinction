'use client';

import Link from 'next/link';
import { CalendarIcon } from 'lucide-react';

import { NotificationList } from '@/components/animate-ui/components/community/notification-list';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/section-wrapper';
import { siteConfig } from '@/lib/site-config';

export function PromoSection() {
  const { promo } = siteConfig;

  const notificationItems = promo.benefits.map((benefit, index) => ({
    id: index + 1,
    title: benefit,
  }));

  const handleCtaClick = () => {
    window.dispatchEvent(new Event('promo-cta-pulse'));
  };

  return (
    <SectionWrapper variant="muted">
      <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12">
        <div className="order-2 lg:order-1">
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <CalendarIcon className="size-5" aria-hidden="true" />
          </div>
          <h2 className="font-heading text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {promo.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {promo.description}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 h-10 px-5 text-sm hover:bg-primary/90"
          >
            <Link href={promo.ctaHref} onClick={handleCtaClick}>
              {promo.ctaLabel}
            </Link>
          </Button>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <NotificationList
            items={notificationItems}
            footerExpandedHref={promo.ctaHref}
            footerExpandedLabel={promo.ctaLabel}
            className="md:max-w-md"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
