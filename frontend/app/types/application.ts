export type ApplicationStepId = 1 | 2 | 3 | 4 | 5;

export interface ApplicationStep {
  readonly id: ApplicationStepId;
  readonly title: string;
  readonly shortTitle: string;
  readonly icon: string;
}

export interface ApplicationOption {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
  readonly icon?: string;
}

export interface ApplicationFormData {
  schemaVersion: 1;
  clientSubmissionId: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  streetAddress: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
  addressDuration: string;
  referralSource: string;
  ageConfirmed: boolean;
  platforms: string[];
  primaryPlatform: string;
  approvalStatus: string;
  experienceLength: string;
  weeklyHours: string;
  vehicleCategory: string;
  vehicleNeededBy: string;
  rentalDuration: string;
  pickupPreference: string;
  alternateCategoryAccepted: boolean;
  validLicense: boolean;
  portlandServiceArea: boolean;
  verificationConsent: boolean;
  weeklyPaymentAcknowledged: boolean;
  approvedUseAcknowledged: boolean;
  informationCertified: boolean;
  contactConsent: boolean;
  termsAccepted: boolean;
}

export type ApplicationFormErrors = Record<string, string>;

export interface ApplicationDraft {
  readonly currentStep: ApplicationStepId;
  readonly highestStep: ApplicationStepId;
  readonly form: ApplicationFormData;
}

export interface ApplicationSubmission
  extends ApplicationFormData {
  readonly submittedAt: string;
}

export interface ApplicationSubmitResponse {
  readonly reference: string;
  readonly receivedAt: string;
  readonly status: 'preview-received';
}

export interface ApplicationBenefit {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

export interface ApplicationSuccessPanel {
  readonly id: string;
  readonly icon: string;
  readonly title: string;
}
