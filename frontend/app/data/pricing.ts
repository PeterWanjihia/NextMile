import {
  fleetCategories,
  fleetHero,
} from '~/data/fleet';

import type { FleetCategory } from '~/types/fleet';
import type {
  PricingExpectation,
  PricingFaqItem,
  PricingFeature,
  PricingFee,
  PricingMetric,
} from '~/types/pricing';

export const pricingHero = {
  heading: {
    primary: 'Straightforward',
    accent: 'Weekly Pricing',
  },
  description:
    'We believe in clear, upfront pricing for gig and delivery drivers. See weekly rates, deposits, and basic rental terms so you can make the right choice with confidence before you apply.',
  primaryAction: {
    label: 'Check Availability',
    to: '/fleet',
  },
  secondaryAction: {
    label: 'Apply Now',
    to: '/apply',
  },
  image: fleetHero.image,
} as const;

export const pricingFeatures = [
  {
    id: 'transparent-rates',
    icon: 'lucide:circle-dollar-sign',
    title: 'Transparent weekly rates',
    description: 'Know exactly what to expect.',
  },
  {
    id: 'clear-deposits',
    icon: 'lucide:shield',
    title: 'Clear deposit information',
    description: 'Upfront and honest.',
  },
  {
    id: 'simple-terms',
    icon: 'lucide:receipt-text',
    title: 'Simple rental terms',
    description: 'Easy to understand.',
  },
  {
    id: 'local-support',
    icon: 'lucide:users-round',
    title: 'Local support',
    description: 'Real people, real help.',
  },
] satisfies readonly PricingFeature[];

export const pricingOptions = fleetCategories.map((category) => {
  const isEconomy = category.id === 'economy-delivery';

  return {
    ...category,
    primaryAction: {
      label: 'Check Availability',
      to: `/fleet#${category.id}`,
    },
    secondaryAction: {
      label: isEconomy ? 'Apply Now' : 'Join Waitlist',
      to: `/apply?category=${category.id}`,
    },
  };
}) satisfies readonly FleetCategory[];

export const pricingMetrics = [
  {
    id: 'minimum-term',
    icon: 'lucide:calendar-days',
    label: 'Minimum term',
    value: '1 week',
  },
  {
    id: 'payment-schedule',
    icon: 'lucide:clock-3',
    label: 'Payment schedule',
    value: 'Weekly',
  },
  {
    id: 'availability',
    icon: 'lucide:car-front',
    label: 'Availability',
    value: 'Varies by category',
  },
  {
    id: 'application-time',
    icon: 'lucide:user-round',
    label: 'Application time',
    value: 'A few minutes',
  },
] satisfies readonly PricingMetric[];

export const pricingExpectations = [
  {
    id: 'deposit',
    icon: 'lucide:shield',
    title: 'Deposit',
    description:
      'A refundable deposit is required and held for the duration of your rental.',
  },
  {
    id: 'weekly-billing',
    icon: 'lucide:calendar-days',
    title: 'Weekly Billing',
    description:
      'Rent is billed weekly in advance. Payments are due each week.',
  },
  {
    id: 'maintenance',
    icon: 'lucide:wrench',
    title: 'Maintenance',
    description:
      'Standard maintenance arrangement is included with your rental.',
  },
  {
    id: 'availability',
    icon: 'lucide:car-front',
    title: 'Availability',
    description:
      'Exact vehicle assignment may vary based on current inventory.',
  },
] satisfies readonly PricingExpectation[];

export const pricingFees = [
  {
    id: 'late-payment',
    icon: 'lucide:clock-3',
    label: 'Late payment fee',
    value: '$25',
  },
  {
    id: 'lost-key',
    icon: 'lucide:key-round',
    label: 'Lost key replacement',
    value: '$150',
  },
  {
    id: 'cleaning',
    icon: 'lucide:ban',
    label: 'Smoking / cleaning charge',
    value: 'Up to $250',
  },
  {
    id: 'vehicle-return',
    icon: 'lucide:save',
    label: 'Vehicle-return expectations',
    value:
      'Returned with the same fuel level and in clean condition.',
  },
] satisfies readonly PricingFee[];

export const pricingFeesFootnote =
  'All amounts are examples and subject to change. See rental agreement for full terms.';

export const pricingFaq = [
  {
    id: 'deposit-amount',
    question: 'How much is the deposit?',
    answer:
      'Deposits currently start at $300 for economy delivery vehicles and $350 for rideshare-style vehicles. Your confirmed deposit depends on the available category and rental agreement.',
    contentStatus: 'client-review',
  },
  {
    id: 'payment-due-date',
    question: 'When are weekly payments due?',
    answer:
      'Weekly rent is billed in advance. Your payment schedule and due date will be confirmed in your rental agreement before collection.',
    contentStatus: 'client-review',
  },
  {
    id: 'different-vehicle',
    question: 'What happens if I need a different vehicle?',
    answer:
      'Contact NextMile as early as possible. A different category or vehicle may be offered when inventory and your approved use allow it.',
    contentStatus: 'client-review',
  },
  {
    id: 'additional-fees',
    question: 'Are there additional fees?',
    answer:
      'Additional charges may apply for late payments, lost keys, smoking, cleaning or vehicle-return issues. The applicable terms will be shown in your rental agreement.',
    contentStatus: 'client-review',
  },
] satisfies readonly PricingFaqItem[];

export const pricingFinalCta = {
  icon: 'custom:steering-wheel',
  heading: 'Ready to Get Back on the Road?',
  description:
    'Check availability and get started in just a few minutes.',
  primaryAction: {
    label: 'Check Vehicle Availability',
    to: '/fleet',
  },
} as const;
