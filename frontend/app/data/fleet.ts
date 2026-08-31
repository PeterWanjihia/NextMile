import type {
  FleetBenefit,
  FleetCategory,
  FleetHeroTrustItem,
} from '~/types/fleet';

export const fleetHero = {
  eyebrow: 'Our vehicle categories',

  heading: {
    primary: 'Choose the Right Vehicle',
    accent: 'for the Work You Do',
  },

  description:
    'NextMile focuses on practical vehicle categories rather than fixed inventory, so availability may change throughout the week.',

  trustItems: [
    {
      id: 'weekly-pricing',
      icon: 'lucide:circle-dollar-sign',
      title: 'Straightforward weekly pricing',
      description: 'Clear rates and deposits.',
    },
    {
      id: 'insurance-maintenance',
      icon: 'lucide:shield-check',
      title: 'Insurance & maintenance included*',
      description: 'Review the applicable terms.',
    },
    {
      id: 'local-support',
      icon: 'lucide:messages-square',
      title: 'Local support from real people',
      description: 'Help when you need it.',
    },
  ] satisfies readonly FleetHeroTrustItem[],

  image: {
    src: '/images/fleet/nextmile-fleet-hero.webp',
    alt:
      'White delivery sedan and dark rideshare vehicle beside the Portland skyline',
    width: 559,
    height: 333,
    objectPosition: 'center',
    contentStatus: 'client-review',
  },
} as const;

export const fleetAvailabilityNotice = {
  icon: 'lucide:info',
  message:
    'Availability updates every day. If a category shows “Waitlist Only,” you can still apply and we’ll contact you when a vehicle is available.',
} as const;

export const fleetCategories = [
  {
    id: 'economy-delivery',
    title: 'Economy Delivery Vehicles',
    description:
      'Ideal for DoorDash, Uber Eats, Instacart and other delivery work.',
    icon: 'lucide:car-front',
    image: {
      src: '/images/home/fleet/economy-delivery.webp',
      alt: 'White economy sedan representing the delivery vehicle category',
      width: 1600,
      height: 700,
      objectPosition: 'center bottom',
      contentStatus: 'placeholder',
    },
    features: [
      'Great fuel economy',
      'Practical cargo space',
      'Easy city driving',
      'Low cost to operate',
    ],
    price: {
      amount: 189,
      currency: 'USD',
      cadence: 'week',
    },
    deposit: {
      amount: 300,
      currency: 'USD',
    },
    availability: {
      status: 'available',
      label: 'Available This Week',
      actionLabel: 'Check Availability',
    },
    primaryAction: {
      label: 'Check Availability',
      to: '/apply?category=economy-delivery',
    },
    secondaryAction: {
      label: 'View Details',
      to: '/contact?category=economy-delivery',
    },
    contentStatus: 'placeholder',
  },
  {
    id: 'rideshare-style',
    title: 'Rideshare-Style Vehicles',
    description:
      'Comfortable and dependable vehicles for rideshare and passenger transport.',
    icon: 'lucide:user-round',
    image: {
      src: '/images/home/fleet/rideshare-style.webp',
      alt: 'Dark sedan representing the rideshare-style vehicle category',
      width: 1600,
      height: 700,
      objectPosition: 'center bottom',
      contentStatus: 'placeholder',
    },
    features: [
      'Comfortable seating',
      'Smooth & reliable',
      'Good passenger space',
      'Suitable for long hours',
    ],
    price: {
      amount: 229,
      currency: 'USD',
      cadence: 'week',
    },
    deposit: {
      amount: 350,
      currency: 'USD',
    },
    availability: {
      status: 'waitlist',
      label: 'Waitlist Only',
      actionLabel: 'Join Waitlist',
    },
    primaryAction: {
      label: 'Join Waitlist',
      to: '/apply?category=rideshare-style',
    },
    secondaryAction: {
      label: 'View Details',
      to: '/contact?category=rideshare-style',
    },
    contentStatus: 'placeholder',
  },
] satisfies readonly FleetCategory[];

export const fleetAssistance = {
  icon: 'lucide:calendar-days',
  heading: 'Not sure which category is right for you?',
  description:
    'Tell us what kind of work you do and when you need a vehicle. We’ll help you choose the best option.',
  primaryAction: {
    label: 'Check My Eligibility',
    to: '/apply',
  },
} as const;

export const fleetBenefits = [
  {
    id: 'simple-terms',
    icon: 'lucide:ticket-check',
    title: 'Simple Weekly Terms',
    description: 'No long contracts. Rent based on your work.',
  },
  {
    id: 'insurance',
    icon: 'lucide:shield-check',
    title: 'Insurance Included',
    description: 'Insurance coverage is included with every rental.',
  },
  {
    id: 'maintenance',
    icon: 'lucide:wrench',
    title: 'Maintenance Included',
    description: 'Standard maintenance arrangement included.',
  },
  {
    id: 'support',
    icon: 'lucide:messages-square',
    title: 'Local Support',
    description: 'Speak with real people who understand your needs.',
  },
] satisfies readonly FleetBenefit[];
