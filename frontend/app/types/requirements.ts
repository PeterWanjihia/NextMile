import type { ContentStatus } from '~/types/homepage';

export interface RequirementIconItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface RequirementDocumentItem {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface RequirementProcessStep {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface RequirementRisk {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface RequirementFaqItem {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
  readonly contentStatus: ContentStatus;
}
