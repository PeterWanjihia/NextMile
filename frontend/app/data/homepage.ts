import type {
  HomeApplicationStep,
  HomeEligibilityOverview,
  HomeFaqSection,
  HomeFinalCta,
  HomeFleetCategory,
  HomePricingMetric,
  HomeTestimonials,
  HomeWhyChooseItem,
} from '~/types/homepage';


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

export const homePricingSummary = {
  contentStatus: 'placeholder',

  heading:
    'Straightforward Weekly Pricing',

  description:
    'Know the weekly rate, deposit and important terms before you apply. No hidden fees.',

  detailsAction: {
    label: 'View full pricing details',
    to: '/pricing',
  },

  metrics: [
    {
      id: 'weekly-rental',

      icon: 'lucide:circle-dollar-sign',

      label: 'Weekly rentals from',

      kind: 'money',

      amount: 189,

      emphasized:true,

      currency: 'USD',

      suffix: '/ week',
    },
    {
      id: 'deposit',

      icon: 'lucide:shield-check',

      label: 'Deposit from',

      kind: 'money',

      amount: 300,

      currency: 'USD',
    },
    {
      id: 'minimum-term',

      icon: 'lucide:calendar-days',

      label: 'Minimum term',

      kind: 'text',

      value: '1 week',
    },
    {
      id: 'payment-schedule',

      icon: 'lucide:credit-card',

      label: 'Payment schedule',

      kind: 'text',

      value: 'Weekly',
    },
  ] satisfies readonly HomePricingMetric[],

  footnote:
    'Includes standard maintenance arrangement and local support.',
} as const;

export const homeApplicationProcess = {
  contentStatus: 'placeholder',

  heading:
    'From Application to Earning in Four Steps',

  description:
    'A simple, guided process designed to get you into the right vehicle without unnecessary delays.',

  steps: [
    {
      id: 'apply-online',

      icon: 'lucide:clipboard-list',

      title: 'Apply Online',

      description:
        'Tell us about your driving work and when you need a vehicle.',

      contentStatus: 'placeholder',
    },
    {
      id: 'get-reviewed',

      icon: 'lucide:user-round',

      title: 'Get Reviewed',

      description:
        'NextMile reviews your application and confirms the next requirements.',

      contentStatus: 'placeholder',
    },
    {
      id: 'choose-and-collect',

      icon: 'lucide:car-front',

      title: 'Choose & Collect',

      description:
        'Confirm availability, complete the paperwork and schedule your pickup.',

      contentStatus: 'placeholder',
    },
    {
      id: 'start-driving',

      icon: 'custom:steering-wheel',

      title: 'Start Driving',

      description:
        'Pick up your vehicle and start earning on your approved platform.',

      contentStatus: 'placeholder',
    },
  ] satisfies readonly HomeApplicationStep[],
} as const;

export const homeEligibilityOverview:
  HomeEligibilityOverview = {
    contentStatus: 'placeholder',

    sectionHeading:
      'Driver requirements and eligibility assistance',

    requirements: {
      heading: 'Basic Driver Requirements',

      items: [
        {
          id: 'minimum-age',
          label: 'Age 21 or older',
          contentStatus: 'placeholder',
        },
        {
          id: 'valid-license',
          label: 'Valid driver’s license',
          contentStatus: 'placeholder',
        },
        {
          id: 'verification',
          label: 'Ability to complete verification',
          contentStatus: 'placeholder',
        },
        {
          id: 'weekly-payments',
          label:
            'Ability to make weekly rental payments',
          contentStatus: 'placeholder',
        },
        {
          id: 'approved-use',
          label: 'Approved use of the vehicle',
          contentStatus: 'placeholder',
        },
        {
          id: 'supporting-documents',
          label: 'Required supporting documents',
          contentStatus: 'placeholder',
        },
      ],

      detailsAction: {
        label: 'See full requirements',
        to: '/requirements',
      },
    },
    assistance: {
      heading:
        'Not sure whether you qualify?',

      description:
        'Tell us which platform you drive for and when you need a vehicle. We’ll explain the next steps.',

      primaryAction: {
        label: 'Check My Eligibility',
        to: '/apply',
      },

      illustration: {
        src:
          '/images/home/eligibility/qualifications-checklist.webp',

        alt: '',

        width: 900,

        height: 760,

        objectPosition: 'center',

        contentStatus: 'placeholder',
      },
    },
  };

export const homeWhyChoose = {
  contentStatus: 'placeholder',

  heading: 'Why Choose NextMile?',

  items: [
    {
      id: 'practical-weekly-terms',

      icon: 'lucide:calendar-days',

      title: 'Practical Weekly Terms',

      description:
        'Rent based on your working needs.',

      contentStatus: 'placeholder',
    },
    {
      id: 'vehicles-for-real-work',

      icon: 'lucide:car-front',

      title: 'Vehicles for Real Work',

      description:
        'Fuel efficient, reliable and ready to go.',

      contentStatus: 'placeholder',
    },
    {
      id: 'clear-next-steps',

      icon: 'lucide:clipboard-check',

      title: 'Clear Next Steps',

      description:
        'Know the process, requirements and terms.',

      contentStatus: 'placeholder',
    },
    {
      id: 'local-support',

      icon: 'lucide:phone-call',

      title: 'Local Support',

      description:
        'Speak directly with our local team.',

      contentStatus: 'placeholder',
    },
    {
      id: 'flexible-categories',

      icon: 'custom:steering-wheel',

      title: 'Flexible Categories',

      description:
        'Choose based on your work and preferences.',

      contentStatus: 'placeholder',
    },
    {
      id: 'fast-communication',

      icon: 'lucide:messages-square',

      title: 'Fast Communication',

      description:
        'Get updates and answers without delays.',

      contentStatus: 'placeholder',
    },
  ] satisfies readonly HomeWhyChooseItem[],
} as const;

export const homeTestimonials: HomeTestimonials = {
  contentStatus: 'placeholder',

  heading: 'What Drivers Are Saying',

  trustStatement:
    'Real drivers. Real experiences.',

  items: [
    {
      id: 'marcus',

      quote:
        'The application was clear and I knew exactly what documents I needed before pickup. Great experience!',

      person: {
        name: 'Marcus T.',

        role: 'Delivery Driver',

        image: {
          src:
            '/images/home/testimonials/marcus.webp',

          alt:
            'Portrait of Marcus T., a delivery driver',

          width: 320,
          height: 320,

          objectPosition: 'center',

          contentStatus: 'placeholder',
        },
      },

      contentStatus: 'placeholder',
    },
    {
      id: 'jasmine',

      quote:
        'The car gets great gas mileage and is perfect for my delivery routes. Weekly payments make budgeting easy.',

      person: {
        name: 'Jasmine R.',

        role: 'Instacart Shopper',

        image: {
          src:
            '/images/home/testimonials/jasmine.webp',

          alt:
            'Portrait of Jasmine R., an Instacart shopper',

          width: 320,
          height: 320,

          objectPosition: 'center',

          contentStatus: 'placeholder',
        },
      },

      contentStatus: 'placeholder',
    },
    {
      id: 'daniel',

      quote:
        'Support is fast and local. I can actually talk to someone when I need help.',

      person: {
        name: 'Daniel K.',

        role: 'Rideshare Driver',

        image: {
          src:
            '/images/home/testimonials/daniel.webp',

          alt:
            'Portrait of Daniel K., a rideshare driver',

          width: 320,
          height: 320,

          objectPosition: 'center',

          contentStatus: 'placeholder',
        },
      },

      contentStatus: 'placeholder',
    },
  ],
};

export const homeFaq: HomeFaqSection = {
  contentStatus: 'placeholder',

  heading: 'Frequently Asked Questions',

  items: [
    {
      id: 'weekly-rental-cost',

      question:
        'How much is the weekly rental?',

      answer:
        'Weekly rental rates currently start from $189 for economy delivery vehicles and $229 for rideshare-style vehicles. Your final rate depends on the available vehicle category and agreed rental terms.',

      contentStatus: 'placeholder',
    },
    {
      id: 'supported-platforms',

      question:
        'Which platforms can I use the vehicle for?',

      answer:
        'Vehicles may be suitable for approved delivery and rideshare platforms such as DoorDash, Uber Eats, Instacart and similar services. Platform eligibility should be confirmed before you apply.',

      contentStatus: 'placeholder',
    },
    {
      id: 'application-documents',

      question:
        'What documents do I need to apply?',

      answer:
        'Applicants generally need a valid driver’s license, identity and address information, proof of eligibility to drive, and any additional documents required during verification.',

      contentStatus: 'placeholder',
    },
    {
      id: 'approval-time',

      question:
        'How quickly can I get approved?',

      answer:
        'Approval time depends on how quickly your information and supporting documents can be verified. Complete applications can usually be reviewed faster than applications with missing information.',

      contentStatus: 'placeholder',
    },
    {
      id: 'insurance',

      question:
        'Is insurance included?',

      answer:
        'Insurance arrangements depend on the rental agreement, vehicle category and approved use of the vehicle. The applicable coverage and driver responsibilities will be explained before collection.',

      contentStatus: 'placeholder',
    },
    {
      id: 'maintenance',

      question:
        'What happens if the vehicle needs maintenance?',

      answer:
        'Contact NextMile as soon as you notice a mechanical issue. We will explain the appropriate next steps and coordinate approved maintenance where required.',

      contentStatus: 'placeholder',
    },
    {
      id: 'personal-use',

      question:
        'Can I use the vehicle for personal trips?',

      answer:
        'Permitted personal use depends on the rental agreement. Any mileage, location or usage restrictions should be reviewed before you begin the rental.',

      contentStatus: 'placeholder',
    },
    {
      id: 'missed-payment',

      question:
        'What happens if I miss a payment?',

      answer:
        'Contact NextMile immediately if you expect a payment problem. Missed payments may affect your rental agreement, so early communication is important.',

      contentStatus: 'placeholder',
    },
  ],
};

export const homeFinalCta: HomeFinalCta = {
  contentStatus: 'placeholder',

  heading:
    'Ready to Get Back on the Road?',

  description:
    'Check current availability and tell us what kind of driving work you plan to do. The application only takes a few minutes.',

  primaryAction: {
    label:
      'Check Vehicle Availability',

    to:
      '/fleet',
  },

  trustItems: [
    {
      id: 'no-obligation',

      icon:
        'lucide:circle-check',

      label:
        'No obligation to apply',
    },
    {
      id: 'mobile-friendly',

      icon:
        'lucide:smartphone',

      label:
        'Mobile-friendly process',
    },
    {
      id: 'local-support',

      icon:
        'lucide:headphones',

      label:
        'Local support',
    },
  ],
};