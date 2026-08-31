import { fleetCategories } from '~/data/fleet';

import type {
  ApplicationBenefit,
  ApplicationOption,
  ApplicationStep,
} from '~/types/application';

export const applicationSteps = [
  {
    id: 1,
    title: 'Personal Information',
    shortTitle: 'Personal',
    icon: 'lucide:user-round',
  },
  {
    id: 2,
    title: 'Driving Platform & Experience',
    shortTitle: 'Experience',
    icon: 'lucide:route',
  },
  {
    id: 3,
    title: 'Vehicle Requirements',
    shortTitle: 'Vehicle',
    icon: 'lucide:car-front',
  },
  {
    id: 4,
    title: 'Basic Eligibility',
    shortTitle: 'Eligibility',
    icon: 'lucide:shield-check',
  },
  {
    id: 5,
    title: 'Review & Submit',
    shortTitle: 'Review',
    icon: 'lucide:clipboard-check',
  },
] satisfies readonly ApplicationStep[];

export const addressDurationOptions = [
  {
    value: 'under-6-months',
    label: 'Less than 6 months',
  },
  {
    value: '6-to-12-months',
    label: '6–12 months',
  },
  {
    value: '1-to-2-years',
    label: '1–2 years',
  },
  {
    value: '2-to-5-years',
    label: '2–5 years',
  },
  {
    value: '5-plus-years',
    label: '5 years or longer',
  },
] satisfies readonly ApplicationOption[];

export const referralOptions = [
  {
    value: 'search',
    label: 'Google or another search engine',
  },
  {
    value: 'social',
    label: 'Social media',
  },
  {
    value: 'friend',
    label: 'Friend or family member',
  },
  {
    value: 'driver',
    label: 'Another gig or delivery driver',
  },
  {
    value: 'vehicle',
    label: 'Saw a NextMile vehicle',
  },
  {
    value: 'other',
    label: 'Other',
  },
] satisfies readonly ApplicationOption[];

export const stateOptions = [
  {
    value: 'OR',
    label: 'Oregon',
  },
  {
    value: 'WA',
    label: 'Washington',
  },
] satisfies readonly ApplicationOption[];

export const platformOptions = [
  {
    value: 'doordash',
    label: 'DoorDash',
    icon: 'lucide:shopping-bag',
  },
  {
    value: 'uber-eats',
    label: 'Uber Eats',
    icon: 'lucide:utensils',
  },
  {
    value: 'instacart',
    label: 'Instacart',
    icon: 'lucide:shopping-cart',
  },
  {
    value: 'amazon-flex',
    label: 'Amazon Flex',
    icon: 'lucide:package',
  },
  {
    value: 'rideshare',
    label: 'Uber or Lyft rideshare',
    icon: 'lucide:users-round',
  },
  {
    value: 'other',
    label: 'Another platform',
    icon: 'lucide:plus',
  },
] satisfies readonly ApplicationOption[];

export const approvalStatusOptions = [
  {
    value: 'active',
    label: 'Active and currently driving',
  },
  {
    value: 'approved',
    label: 'Approved, but not currently driving',
  },
  {
    value: 'applying',
    label: 'Application in progress',
  },
  {
    value: 'planning',
    label: 'Planning to apply',
  },
] satisfies readonly ApplicationOption[];

export const experienceOptions = [
  {
    value: 'new',
    label: 'I’m new to gig driving',
  },
  {
    value: 'under-6-months',
    label: 'Less than 6 months',
  },
  {
    value: '6-to-12-months',
    label: '6–12 months',
  },
  {
    value: '1-to-2-years',
    label: '1–2 years',
  },
  {
    value: '2-plus-years',
    label: '2 years or longer',
  },
] satisfies readonly ApplicationOption[];

export const weeklyHoursOptions = [
  {
    value: 'under-20',
    label: 'Less than 20 hours',
  },
  {
    value: '20-to-39',
    label: '20–39 hours',
  },
  {
    value: '40-to-59',
    label: '40–59 hours',
  },
  {
    value: '60-plus',
    label: '60 hours or more',
  },
] satisfies readonly ApplicationOption[];

export const vehicleCategoryOptions =
  fleetCategories.map(category => ({
    value: category.id,
    label: category.title,
    description: category.description,
    icon: category.icon,
  })) satisfies readonly ApplicationOption[];

export const rentalDurationOptions = [
  {
    value: '1-to-4-weeks',
    label: '1–4 weeks',
  },
  {
    value: '1-to-3-months',
    label: '1–3 months',
  },
  {
    value: '3-to-6-months',
    label: '3–6 months',
  },
  {
    value: '6-plus-months',
    label: '6 months or longer',
  },
  {
    value: 'not-sure',
    label: 'I’m not sure yet',
  },
] satisfies readonly ApplicationOption[];

export const pickupPreferenceOptions = [
  {
    value: 'weekday-morning',
    label: 'Weekday morning',
  },
  {
    value: 'weekday-afternoon',
    label: 'Weekday afternoon',
  },
  {
    value: 'saturday',
    label: 'Saturday',
  },
  {
    value: 'flexible',
    label: 'I’m flexible',
  },
] satisfies readonly ApplicationOption[];

export const applicationBenefits = [
  {
    id: 'fast',
    icon: 'lucide:gauge',
    title: 'Fast Application',
    description: 'Takes about 5 minutes to complete',
  },
  {
    id: 'credit',
    icon: 'lucide:ban',
    title: 'No Credit Check',
    description: 'We don’t run credit checks as part of our process',
  },
  {
    id: 'secure',
    icon: 'lucide:lock-keyhole',
    title: 'Secure & Private',
    description: 'Your information is always protected',
  },
  {
    id: 'response',
    icon: 'lucide:life-buoy',
    title: 'Quick Response',
    description: 'We aim to respond within 24 hours',
  },
] satisfies readonly ApplicationBenefit[];

export const applicationSuccess = {
  heading: 'Application Received!',
  accent: 'Thank you for applying with NextMile Rentals.',
  description:
    'We’ve received your application and our team will review it shortly. You’re one step closer to getting a reliable vehicle for your work.',
  nextSteps: [
    {
      id: 'review',
      icon: 'lucide:mail',
      title: 'Application Review',
      description:
        'We’ll review your application and information to make sure everything looks good.',
    },
    {
      id: 'contact',
      icon: 'lucide:phone',
      title: 'We’ll Contact You',
      description:
        'Our team will reach out by phone or text if we have questions or need additional details.',
    },
    {
      id: 'decision',
      icon: 'lucide:circle-check',
      title: 'Decision & Next Steps',
      description:
        'We’ll let you know if you’re approved and discuss vehicle options and pickup.',
    },
  ],
  documents: [
    'Valid driver’s license',
    'Proof of insurance',
    'Proof of address',
    'Platform approval (if applicable)',
    'Payment method for deposit & weekly payments',
  ],
} as const;
