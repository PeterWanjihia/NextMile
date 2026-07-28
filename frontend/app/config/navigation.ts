export interface NavigationItem {
  readonly label: string;
  readonly to: string;
  readonly match?: 'exact' | 'prefix';
}

export const publicNavigation = [
  {
    label: 'Fleet',
    to: '/fleet',
    match: 'exact',
  },
  {
    label: 'Pricing',
    to: '/pricing',
    match: 'exact',
  },
  {
    label: 'Requirements',
    to: '/requirements',
    match: 'exact',
  },
  {
    label: 'How It Works',
    to: '/#how-it-works',
    match: 'exact',
  },
  {
    label: 'FAQ',
    to: '/requirements#faq',
    match: 'exact',
  },
  {
    label: 'Contact',
    to: '/contact',
    match: 'exact',
  },
] as const satisfies readonly NavigationItem[];