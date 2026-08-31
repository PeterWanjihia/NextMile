export interface ContactInfoCard {
  readonly id: string;
  readonly icon: string;
  readonly eyebrow: string;
  readonly title?: string;
  readonly description?: string;
}

export interface ContactHour {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly closed?: boolean;
}

export interface ContactServiceArea {
  readonly id: string;
  readonly label: string;
}

export interface ContactTopic {
  readonly id: string;
  readonly label: string;
}
