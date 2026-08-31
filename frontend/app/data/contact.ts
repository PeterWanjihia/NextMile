import { fleetHero } from '~/data/fleet';

import type {
  ContactHour,
  ContactInfoCard,
  ContactServiceArea,
  ContactTopic,
} from '~/types/contact';

export const contactHero = {
  eyebrow: 'Contact NextMile Rentals',
  heading: {
    primary: 'We’re Here to Help',
    accent: 'You Get on the Road',
  },
  description:
    'Have questions about renting a vehicle, requirements, or availability? Reach out to our team. We’re happy to help.',
  primaryAction: {
    label: 'Call',
  },
  secondaryAction: {
    label: 'Apply Now',
    to: '/apply',
  },
  image: fleetHero.image,
} as const;

export const contactInfoCards = [
  {
    id: 'phone',
    icon: 'lucide:phone',
    eyebrow: 'Call or Text',
    description: 'We respond as quickly as possible.',
  },
  {
    id: 'email',
    icon: 'lucide:mail',
    eyebrow: 'Email Us',
    description:
      'We typically respond within 24 hours during business days.',
  },
  {
    id: 'hours',
    icon: 'lucide:clock-3',
    eyebrow: 'Business Hours',
  },
  {
    id: 'location',
    icon: 'lucide:map-pin',
    eyebrow: 'Our Location',
    title: 'Portland, Oregon',
    description:
      'Serving the Portland metropolitan area and surrounding communities.',
  },
] satisfies readonly ContactInfoCard[];

export const contactHours = [
  {
    id: 'weekdays',
    label: 'Monday – Friday',
    value: '9:00 AM – 6:00 PM',
  },
  {
    id: 'saturday',
    label: 'Saturday',
    value: '10:00 AM – 4:00 PM',
  },
  {
    id: 'sunday',
    label: 'Sunday',
    value: 'Closed',
    closed: true,
  },
] satisfies readonly ContactHour[];

export const contactTopics = [
  {
    id: 'availability',
    label: 'Vehicle availability',
  },
  {
    id: 'pricing',
    label: 'Pricing and deposits',
  },
  {
    id: 'requirements',
    label: 'Driver requirements',
  },
  {
    id: 'application',
    label: 'My application',
  },
  {
    id: 'rental',
    label: 'Current rental support',
  },
  {
    id: 'other',
    label: 'Something else',
  },
] satisfies readonly ContactTopic[];

export const contactServiceArea = {
  icon: 'lucide:car-front',
  heading: 'Service Area',
  description:
    'We currently serve the Portland metropolitan area and surrounding communities.',
  areas: [
    {
      id: 'portland',
      label: 'Portland, OR and Metro Area',
    },
    {
      id: 'vancouver',
      label: 'Vancouver, WA',
    },
    {
      id: 'beaverton',
      label: 'Beaverton | Hillsboro',
    },
    {
      id: 'gresham',
      label: 'Gresham | Clackamas',
    },
    {
      id: 'tigard',
      label: 'Tigard | Lake Oswego',
    },
  ] satisfies readonly ContactServiceArea[],
  map: {
    title: 'NextMile Rentals service area map',
    image: {
      src:
        '/images/contact/portland-service-area.webp',
      alt:
        'Map showing the NextMile Rentals service area around Portland, Oregon',
      width: 702,
      height: 255,
    },
    largerMapUrl:
      'https://www.openstreetmap.org/?mlat=45.5152&mlon=-122.6784#map=10/45.5152/-122.6784',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Portland%2C%20Oregon',
  },
} as const;

export const contactFinalCta = {
  icon: 'lucide:shield',
  heading: 'Ready to Get Started?',
  description:
    'Check vehicle availability and start your application today.',
  availabilityAction: {
    label: 'Check Availability',
    to: '/fleet',
  },
  applyAction: {
    label: 'Apply Now',
    to: '/apply',
  },
} as const;
