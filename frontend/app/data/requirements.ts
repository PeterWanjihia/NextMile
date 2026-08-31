import type {
  RequirementDocumentItem,
  RequirementFaqItem,
  RequirementIconItem,
  RequirementProcessStep,
  RequirementRisk,
} from '~/types/requirements';

export const requirementsHero = {
  heading: {
    beforeAccent: 'See if You',
    accent: 'Qualify',
    afterAccent: 'Before You Apply',
  },
  description:
    'NextMile keeps requirements straightforward so you know what to expect before you apply. We’re here to help you get on the road with confidence.',
  primaryAction: {
    label: 'Start My Application',
    to: '/apply',
  },
  image: {
    src: '/images/home/hero/driver-vehicle-portland.webp',
    alt:
      'Driver standing beside a dark sedan with the Portland skyline behind him',
    width: 1448,
    height: 1086,
    objectPosition: '58% 24%',
    contentStatus: 'placeholder',
  },
  trustItems: [
    {
      id: 'clear-requirements',
      icon: 'lucide:shield-check',
      title: 'Clear requirements',
      description: 'Upfront and easy to understand.',
    },
    {
      id: 'fast-review',
      icon: 'lucide:clock-3',
      title: 'Fast review',
      description: 'We move quickly so you can get moving.',
    },
    {
      id: 'local-support',
      icon: 'lucide:users-round',
      title: 'Local support',
      description: 'Real people ready to help.',
    },
    {
      id: 'simple-process',
      icon: 'lucide:clipboard-list',
      title: 'Simple process',
      description: 'Designed for busy drivers like you.',
    },
  ] satisfies readonly RequirementIconItem[],
} as const;

export const basicDriverRequirements = [
  {
    id: 'minimum-age',
    icon: 'lucide:user-round',
    title: 'Minimum age: 21 or older',
    description:
      'You must be at least 21 years old to rent a vehicle.',
  },
  {
    id: 'drivers-license',
    icon: 'lucide:contact',
    title: 'Valid driver’s license',
    description:
      'A valid U.S. driver’s license is required at the time of application.',
  },
  {
    id: 'verification',
    icon: 'lucide:shield-check',
    title: 'Ability to complete verification',
    description:
      'We verify identity and driver information to keep our process safe.',
  },
  {
    id: 'weekly-payments',
    icon: 'lucide:circle-dollar-sign',
    title: 'Ability to make weekly rental payments',
    description:
      'You must be able to make on-time weekly rental payments.',
  },
  {
    id: 'service-area',
    icon: 'lucide:map-pin',
    title: 'Operate within the service area',
    description:
      'Vehicles must be used within the Portland, Oregon area.',
  },
  {
    id: 'approved-use',
    icon: 'lucide:car-front',
    title: 'Approved use of the vehicle',
    description:
      'Vehicles must be used for gigs, delivery, and approved purposes.',
  },
] satisfies readonly RequirementIconItem[];

export const documentsYouMayNeed = [
  {
    id: 'drivers-license',
    icon: 'lucide:contact',
    title: 'Driver’s license',
    description:
      'Front and back of a valid U.S. driver’s license.',
  },
  {
    id: 'address',
    icon: 'lucide:building-2',
    title: 'Proof of address',
    description:
      'Recent utility bill, bank statement, or official mail.',
  },
  {
    id: 'platform',
    icon: 'lucide:circle-check',
    title: 'Platform information',
    description:
      'Gig or delivery platform details or approval status.',
  },
  {
    id: 'payment',
    icon: 'lucide:credit-card',
    title: 'Payment method',
    description:
      'Card or bank account for deposit and weekly rent.',
  },
  {
    id: 'additional-information',
    icon: 'lucide:clipboard-list',
    title: 'Additional information',
    description:
      'We may request additional documents if needed.',
  },
] satisfies readonly RequirementDocumentItem[];

export const documentReviewNotice = {
  icon: 'lucide:info',
  title:
    'Documents are reviewed after your initial application.',
  description:
    'We handle all information securely and confidentially.',
} as const;

export const platformGuidelines = [
  {
    id: 'delivery-focus',
    icon: 'lucide:bike',
    title: 'Delivery and gig-work focus',
    description:
      'Our vehicles are intended for delivery and gig-work use only.',
  },
  {
    id: 'compatibility',
    icon: 'lucide:puzzle',
    title: 'Platform compatibility may vary',
    description:
      'You are responsible for meeting platform requirements.',
  },
  {
    id: 'service-area',
    icon: 'lucide:map-pin',
    title: 'Service area',
    description:
      'We operate in the Portland, Oregon area and surrounding communities.',
  },
  {
    id: 'availability',
    icon: 'lucide:car-front',
    title: 'Vehicle availability',
    description:
      'Availability may vary by vehicle category, trim, and market demand.',
  },
  {
    id: 'approval-details',
    icon: 'lucide:shield-check',
    title: 'Approval depends on details',
    description:
      'All approvals depend on application information and vehicle availability.',
  },
] satisfies readonly RequirementIconItem[];

export const approvalSteps = [
  {
    id: 'submit',
    icon: 'lucide:file-pen-line',
    title: 'Submit application',
    description:
      'Complete the online application with your basic information.',
  },
  {
    id: 'review',
    icon: 'lucide:search',
    title: 'We review your information',
    description:
      'We verify details and check requirements as quickly as possible.',
  },
  {
    id: 'contact',
    icon: 'lucide:users-round',
    title: 'We contact you and discuss options',
    description:
      'We’ll reach out to review eligibility and available vehicle options.',
  },
  {
    id: 'pickup',
    icon: 'lucide:car-front',
    title: 'Schedule pickup if approved',
    description:
      'Confirm details and schedule a convenient pickup time.',
  },
] satisfies readonly RequirementProcessStep[];

export const approvalRisks = [
  {
    id: 'incorrect-information',
    title: 'Missing or incorrect information',
    description:
      'Incomplete or inaccurate details can slow down the review process.',
  },
  {
    id: 'service-area',
    title: 'Service-area mismatch',
    description:
      'Vehicles must be used within our approved service area.',
  },
  {
    id: 'payment-requirements',
    title: 'Inability to meet payment requirements',
    description:
      'We must be able to approve your deposit and weekly rent arrangement.',
  },
  {
    id: 'platform-mismatch',
    title: 'Platform or usage mismatch',
    description:
      'Your intended use must align with approved gig and delivery purposes.',
  },
  {
    id: 'vehicle-unavailable',
    title: 'No suitable vehicle available',
    description:
      'Demand may impact availability in your preferred category.',
  },
  {
    id: 'follow-up-verification',
    title: 'Unable to complete follow-up verification',
    description:
      'We may need additional verification to complete your application.',
  },
] satisfies readonly RequirementRisk[];

export const requirementsFaq = [
  {
    id: 'minimum-age',
    question: 'What is the minimum age?',
    answer:
      'Applicants must be at least 21 years old to rent a NextMile vehicle.',
    contentStatus: 'client-review',
  },
  {
    id: 'rideshare',
    question: 'Can I use the vehicle for rideshare?',
    answer:
      'Rideshare use depends on the selected category, platform requirements and your approved rental use.',
    contentStatus: 'client-review',
  },
  {
    id: 'experience',
    question: 'Do I need gig-driving experience?',
    answer:
      'Previous gig-driving experience is not always required, but you must meet the requirements for your intended platform and approved use.',
    contentStatus: 'client-review',
  },
  {
    id: 'after-application',
    question: 'What happens after I apply?',
    answer:
      'We review your information, contact you about eligibility and discuss available vehicle options and next steps.',
    contentStatus: 'client-review',
  },
  {
    id: 'documents',
    question: 'What documents do I need?',
    answer:
      'You will generally need a valid driver’s license, proof of address, platform information and an approved payment method.',
    contentStatus: 'client-review',
  },
  {
    id: 'delays',
    question: 'Why might my application be delayed?',
    answer:
      'Missing information, verification issues, service-area restrictions or vehicle availability can affect review time.',
    contentStatus: 'client-review',
  },
  {
    id: 'approval-time',
    question: 'How quickly can I get approved?',
    answer:
      'Review time depends on complete information, successful verification and current vehicle availability.',
    contentStatus: 'client-review',
  },
  {
    id: 'unavailable',
    question: 'What if no vehicle is available right now?',
    answer:
      'You can still apply. We may place you on a waitlist and contact you when a suitable category becomes available.',
    contentStatus: 'client-review',
  },
  {
    id: 'delivery-platforms',
    question:
      'Can I use the vehicle for DoorDash or Instacart?',
    answer:
      'Delivery-platform use may be approved when you meet platform requirements and the use is permitted by your rental agreement.',
    contentStatus: 'client-review',
  },
  {
    id: 'weekly-payments',
    question: 'How are weekly payments handled?',
    answer:
      'Rent is billed weekly in advance using the payment method confirmed in your rental agreement.',
    contentStatus: 'client-review',
  },
] satisfies readonly RequirementFaqItem[];

export const requirementsFinalCta = {
  heading: 'Ready to Check Your Eligibility?',
  description:
    'Start your application today and take the first step toward getting on the road.',
  primaryAction: {
    label: 'Start My Application',
    to: '/apply',
  },
} as const;
