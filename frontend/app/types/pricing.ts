import type { ContentStatus } from '~/types/homepage';

export interface PricingFeature {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface PricingMetric {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
  readonly value: string;
}

export interface PricingExpectation {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface PricingFee {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
  readonly value: string;
}

export interface PricingFaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly contentStatus: ContentStatus;
}
