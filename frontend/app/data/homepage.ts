import type {  HomeFleetCategory,} from '~/types/homepage';
export const homeHero = {
  eyebrow: 'Weekly vehicle rentals for gig drivers',

  heading: {
    primary: 'Get a Reliable Vehicle.',
    accent: 'Start Earning.',
  },

  description:
    'Affordable weekly rentals for delivery and approved gig-work platforms, including DoorDash, Instacart, Uber Eats, Amazon Flex and other driving opportunities.',

  primaryAction: {
    label: 'Check Vehicle Availability',
    to: '/fleet',
  },

  trustPoints: [
    'Fast application',
    'Weekly terms',
    'Local support',
  ],

  image: {
    src: '/images/home/hero/driver-vehicle-portland.webp',

    alt:
      'Driver standing beside a sedan with the Portland skyline in the background.',

    width: 1448,
    height: 1086,

    /*
     * Controls which part of the photograph remains visible
     * when object-cover crops it.
     */
    objectPosition: '59% center',

    contentStatus: 'placeholder',
  },

  availability: {
    status: 'Available this week',
    title: 'Economy Delivery Vehicles',
    description: 'Fuel efficient · Easy city driving',
    linkLabel: 'View Availability',
    to: '/fleet',
  },
} as const;

export const homeBenefits = {
  contentStatus: 'placeholder',

  accessibleHeading:
    'Benefits of renting with NextMile',

  items: [
    {
      id: 'fast-application',
      icon: 'lucide:clipboard-check',
      title: 'Fast Application',
      description:
        'A simple process from your phone.',
    },
    {
      id: 'weekly-rentals',
      icon: 'lucide:calendar-days',
      title: 'Weekly Rentals',
      description:
        'Straightforward weekly terms that fit your work.',
    },
    {
      id: 'reliable-vehicles',
      icon: 'lucide:car-front',
      title: 'Reliable Vehicles',
      description:
        'Selected for fuel efficiency, comfort and everyday use.',
    },
    {
      id: 'local-support',
      icon: 'lucide:phone-call',
      title: 'Local Support',
      description:
        'Talk to a real person who understands your needs.',
    },
  ],
} as const;

export const homeFleetPreview = {
  contentStatus: 'placeholder',

  heading:
    'Choose the Right Vehicle for the Work You Do',

  description:
    'We focus on practical vehicle categories rather than fixed inventory, so availability may change throughout the week.',

  categories: [
    {
      id: 'economy-delivery',

      title: 'Economy Delivery Vehicles',

      description:
        'Ideal for DoorDash, Uber Eats, Instacart and other delivery work.',

      /*
       * This remains null until the vehicle image
       * has been placed in /public.
       */
      image: {
          src: '/images/home/fleet/economy-delivery.webp',

          alt:
            'Example compact sedan representing the economy delivery vehicle category',

          width: 1600,
          height: 700,

          objectPosition: 'center',

          contentStatus: 'placeholder',
      },

      features: [
        'Great fuel economy',
        'Easy city driving',
        'Practical cargo space',
      ],

      price: {
        prefix: 'From',
        amount: 189,
        currency: 'USD',
        cadence: 'week',
      },

      availability: {
        status: 'available',
        label: 'Available this week',
      },

      action: {
        label: 'Check Availability',
        to: '/fleet',
      },

      contentStatus: 'placeholder',
    },

    {
      id: 'rideshare-style',

      title: 'Rideshare-Style Vehicles',

      description:
        'Comfortable and dependable vehicles for rideshare and passenger transport.',

      image: {
        src: '/images/home/fleet/rideshare-style.webp',

        alt:
          'Example sedan representing the rideshare-style vehicle category',

        width: 1600,
        height: 700,

        objectPosition: 'center bottom',

        contentStatus: 'placeholder',
      },

      features: [
        'Comfortable seating',
        'Good passenger space',
        'Suitable for long hours',
      ],

      price: {
        prefix: 'From',
        amount: 229,
        currency: 'USD',
        cadence: 'week',
      },

      availability: {
        status: 'available',
        label: 'Available this week',
      },

      action: {
        label: 'Check Availability',
        to: '/fleet',
      },

      contentStatus: 'placeholder',
    },
  ] satisfies readonly HomeFleetCategory[],

  detailsAction: {
    label: 'View all details about our fleet',
    to: '/fleet',
  },
} as const;