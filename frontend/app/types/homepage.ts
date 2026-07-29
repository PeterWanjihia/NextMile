export type ContentStatus =
  | 'placeholder'
  | 'client-review'
  | 'approved';

export type FleetAvailabilityStatus =
  | 'available'
  | 'limited'
  | 'waitlist'
  | 'unconfirmed';

export interface HomepageImage {
  /**
   * Public URL beginning from the /public directory.
   *
   * Example:
   * /images/home/fleet/economy-delivery.webp
   */
  readonly src: string;

  /**
   * Accessible description of the image.
   *
   * It should describe the vehicle as an example
   * of a category rather than promise an exact model.
   */
  readonly alt: string;

  /**
   * Intrinsic dimensions of the original image.
   * These help the browser reserve space before loading.
   */
  readonly width: number;
  readonly height: number;

  /**
   * Optional crop/focus position.
   *
   * Examples:
   * center
   * 60% center
   * right center
   */
  readonly objectPosition?: string;

  /**
   * Internal project metadata.
   * This is not displayed publicly.
   */
  readonly contentStatus: ContentStatus;
}

export interface HomeFleetCategory {
  /**
   * Stable internal identifier.
   * This should not change when the display title changes.
   */
  readonly id: string;

  readonly title: string;
  readonly description: string;

  /**
   * Null while the final category image is unavailable.
   * The component will show a temporary fallback.
   */
  readonly image: HomepageImage | null;

  /**
   * Keep this concise on the homepage.
   * The full Fleet page may contain more information.
   */
  readonly features: readonly string[];

  readonly price: {
    readonly prefix: string;
    readonly amount: number;
    readonly currency: 'USD';
    readonly cadence: 'week';
  };

  readonly availability: {
    readonly status: FleetAvailabilityStatus;
    readonly label: string;
  };

  readonly action: {
    readonly label: string;
    readonly to: string;
  };

  /**
   * Tracks whether this category's copy, pricing
   * and claims have been approved.
   */
  readonly contentStatus: ContentStatus;
}

export type HomePricingMetric =
  | {
      readonly id: string;
      readonly icon: string;
      readonly label: string;

      readonly kind: 'money';
      readonly amount: number;
      readonly currency: 'USD';
      readonly suffix?: string;
      readonly emphasized?: boolean;
    }
  | {
      readonly id: string;
      readonly icon: string;
      readonly label: string;

      readonly kind: 'text';
      readonly value: string;
};

export interface HomeApplicationStep {
  
  readonly id: string;
 
  readonly icon: string;

  readonly title: string;
  readonly description: string;

  readonly contentStatus: ContentStatus;
}

export interface HomeRequirementItem {
  readonly id: string;
  readonly label: string;
  readonly contentStatus: ContentStatus;
}

export interface HomeEligibilityIllustration {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly objectPosition?: string;
  readonly contentStatus: ContentStatus;
}

export interface HomeEligibilityOverview {
  readonly contentStatus: ContentStatus;

  /**
   * Semantic heading for the complete paired section.
   * This is rendered as a visually hidden heading.
   */
  readonly sectionHeading: string;

  readonly requirements: {
    readonly heading: string;

    readonly items:
      readonly HomeRequirementItem[];

    readonly detailsAction: {
      readonly label: string;
      readonly to: string;
    };
  };

  readonly assistance: {
    readonly heading: string;
    readonly description: string;

    readonly primaryAction: {
      readonly label: string;
      readonly to: string;
    };

    /**
     * A real illustration can be provided later.
     * Null keeps the development fallback valid.
     */
    readonly illustration:
      HomeEligibilityIllustration | null;
  };
}

export interface HomeWhyChooseItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
  readonly contentStatus: ContentStatus;
}

export interface HomeTestimonialImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
  readonly objectPosition?: string;
  readonly contentStatus: ContentStatus;
}

export interface HomeTestimonial {
  readonly id: string;
  readonly quote: string;

  readonly person: {
    readonly name: string;
    readonly role: string;
    readonly image: HomeTestimonialImage;
  };

  readonly contentStatus: ContentStatus;
}

export interface HomeTestimonials {
  readonly contentStatus: ContentStatus;
  readonly heading: string;
  readonly trustStatement: string;
  readonly items: readonly HomeTestimonial[];
}

export interface HomeFaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly contentStatus: ContentStatus;
}

export interface HomeFaqSection {
  readonly contentStatus: ContentStatus;
  readonly heading: string;
  readonly items: readonly HomeFaqItem[];
}

export interface HomeFinalCtaTrustItem {
  readonly id: string;
  readonly icon: string;
  readonly label: string;
}

export interface HomeFinalCta {
  readonly contentStatus: ContentStatus;
  readonly heading: string;
  readonly description: string;

  readonly primaryAction: {
    readonly label: string;
    readonly to: string;
  };

  readonly trustItems:
    readonly HomeFinalCtaTrustItem[];
}