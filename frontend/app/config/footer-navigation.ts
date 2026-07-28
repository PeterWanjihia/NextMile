export interface FooterLink {
  readonly label: string;
  readonly to: string;
}

export const footerExploreLinks = [
  {
    label: 'Fleet',
    to: '/fleet',
  },
  {
    label: 'Pricing',
    to: '/pricing',
  },
  {
    label: 'Requirements',
    to: '/requirements',
  },
  {
    label: 'How It Works',
    to: '/#how-it-works',
  },
  {
    label: 'FAQ',
    to: '/requirements#faq',
  },
] as const satisfies readonly FooterLink[];

export const footerCompanyLinks = [
  {
    label: 'About NextMile',
    to: '/#about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
] as const satisfies readonly FooterLink[];

export const footerLegalLinks = [
  {
    label: 'Privacy Policy',
    to: '/privacy',
  },
  {
    label: 'Terms of Use',
    to: '/terms',
  },
  {
    label: 'Rental Disclaimer',
    to: '/disclaimer',
  },
] as const satisfies readonly FooterLink[];