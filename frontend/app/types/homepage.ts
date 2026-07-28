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