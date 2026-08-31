import type {
  ContentStatus,
  FleetAvailabilityStatus,
} from '~/types/homepage';

export interface FleetPageImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly objectPosition?: string;
  readonly contentStatus: ContentStatus;
}

export interface FleetHeroTrustItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface FleetCategory {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly image: FleetPageImage;
  readonly features: readonly string[];

  readonly price: {
    readonly amount: number;
    readonly currency: 'USD';
    readonly cadence: 'week';
  };

  readonly deposit: {
    readonly amount: number;
    readonly currency: 'USD';
  };

  readonly availability: {
    readonly status: FleetAvailabilityStatus;
    readonly label: string;
    readonly actionLabel: string;
  };

  readonly primaryAction: {
    readonly label: string;
    readonly to: string;
  };

  readonly secondaryAction: {
    readonly label: string;
    readonly to: string;
  };

  readonly contentStatus: ContentStatus;
}

export interface FleetBenefit {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}
