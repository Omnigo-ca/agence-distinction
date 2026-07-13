'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckIcon } from 'lucide-react';
import { motion, type Transition, type Variants } from 'motion/react';

import { cn } from '@/lib/utils';

export type NotificationListItem = {
  id: number | string;
  title: string;
  subtitle?: string;
  time?: string;
  count?: number;
};

type NotificationListProps = {
  items: NotificationListItem[];
  className?: string;
  showFooter?: boolean;
  footerExpandedHref?: string;
  footerExpandedLabel?: string;
};

const transition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
};

const getCardVariants = (i: number): Variants => ({
  collapsed: {
    marginTop: i === 0 ? 0 : -36,
    scaleX: 1 - i * 0.03,
  },
  expanded: {
    marginTop: i === 0 ? 0 : 4,
    scaleX: 1,
  },
});

const textSwitchTransition: Transition = {
  duration: 0.22,
  ease: 'easeInOut',
};

const notificationTextVariants: Variants = {
  collapsed: { opacity: 1, y: 0, pointerEvents: 'auto' as const },
  expanded: { opacity: 0, y: -16, pointerEvents: 'none' as const },
};

const viewAllTextVariants: Variants = {
  collapsed: { opacity: 0, y: 16, pointerEvents: 'none' as const },
  expanded: { opacity: 1, y: 0, pointerEvents: 'auto' as const },
};

function useTouchDefaultExpanded() {
  const [defaultExpanded, setDefaultExpanded] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia('(hover: none), (pointer: coarse)');
    const update = () => setDefaultExpanded(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  return defaultExpanded;
}

function NotificationList({
  items,
  className,
  showFooter = true,
  footerExpandedHref,
  footerExpandedLabel,
}: NotificationListProps) {
  const touchExpanded = useTouchDefaultExpanded();
  const [ctaPulse, setCtaPulse] = React.useState(false);

  React.useEffect(() => {
    if (!ctaPulse) return;
    const timer = window.setTimeout(() => setCtaPulse(false), 1200);
    return () => window.clearTimeout(timer);
  }, [ctaPulse]);

  React.useEffect(() => {
    const handleCtaPulse = () => setCtaPulse(true);
    window.addEventListener('promo-cta-pulse', handleCtaPulse);
    return () => window.removeEventListener('promo-cta-pulse', handleCtaPulse);
  }, []);

  return (
    <motion.div
      className={cn(
        'w-full max-w-sm space-y-3 rounded-2xl border border-border bg-secondary/60 p-3 shadow-[0_8px_24px_rgba(117,65,70,0.06)]',
        ctaPulse && 'ring-2 ring-primary/30',
        className,
      )}
      initial={touchExpanded ? 'expanded' : 'collapsed'}
      whileHover={touchExpanded ? undefined : 'expanded'}
      animate={touchExpanded ? 'expanded' : undefined}
    >
      <div>
        {items.map((notification, i) => (
          <motion.div
            key={notification.id}
            className="relative rounded-xl border border-border/80 bg-card px-4 py-2.5 shadow-sm transition-shadow duration-200 hover:shadow-md"
            variants={getCardVariants(i)}
            transition={transition}
            style={{
              zIndex: items.length - i,
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-medium leading-snug text-foreground">
                {notification.title}
              </h3>
              {notification.count ? (
                <div className="flex shrink-0 items-center gap-0.5 text-xs font-medium text-muted-foreground">
                  <span>{notification.count}</span>
                </div>
              ) : (
                <CheckIcon
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
              )}
            </div>
            {(notification.time || notification.subtitle) && (
              <div className="mt-1 text-xs font-medium text-muted-foreground">
                {notification.time ? <span>{notification.time}</span> : null}
                {notification.time && notification.subtitle ? (
                  <span>&nbsp;•&nbsp;</span>
                ) : null}
                {notification.subtitle ? <span>{notification.subtitle}</span> : null}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {showFooter ? (
        <div className="flex items-center gap-2 px-1">
          <div className="flex size-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
            {items.length}
          </div>
          <span className="grid">
            <motion.span
              className="col-start-1 row-start-1 text-sm font-medium text-muted-foreground"
              variants={notificationTextVariants}
              transition={textSwitchTransition}
              aria-hidden="true"
            >
              &nbsp;
            </motion.span>
            {footerExpandedHref && footerExpandedLabel ? (
              <motion.span
                className="col-start-1 row-start-1"
                variants={viewAllTextVariants}
                transition={textSwitchTransition}
              >
                <Link
                  href={footerExpandedHref}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {footerExpandedLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
              </motion.span>
            ) : null}
          </span>
        </div>
      ) : null}
    </motion.div>
  );
}

export { NotificationList };
