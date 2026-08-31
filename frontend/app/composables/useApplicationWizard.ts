import { applicationSteps, vehicleCategoryOptions } from '~/data/application';
import { submitApplicationPreview } from '~/services/application';

import type {
  ApplicationDraft,
  ApplicationFormData,
  ApplicationFormErrors,
  ApplicationStepId,
} from '~/types/application';

const DRAFT_STORAGE_KEY =
  'nextmile-application-draft-v1';

const RESULT_STORAGE_KEY =
  'nextmile-application-result-v1';

function createSubmissionId(): string {
  if (
    typeof globalThis.crypto !== 'undefined'
    && 'randomUUID' in globalThis.crypto
  ) {
    return globalThis.crypto.randomUUID();
  }

  return `application-${Date.now()}`;
}

function createInitialForm(): ApplicationFormData {
  return {
    schemaVersion: 1,
    clientSubmissionId: createSubmissionId(),
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    addressDuration: '',
    referralSource: '',
    ageConfirmed: false,
    platforms: [],
    primaryPlatform: '',
    approvalStatus: '',
    experienceLength: '',
    weeklyHours: '',
    vehicleCategory: '',
    vehicleNeededBy: '',
    rentalDuration: '',
    pickupPreference: '',
    alternateCategoryAccepted: false,
    validLicense: false,
    portlandServiceArea: false,
    verificationConsent: false,
    weeklyPaymentAcknowledged: false,
    approvedUseAcknowledged: false,
    informationCertified: false,
    contactConsent: false,
    termsAccepted: false,
  };
}

function ageOnDate(dateOfBirth: string): number {
  const birthDate = new Date(`${dateOfBirth}T00:00:00`);

  if (Number.isNaN(birthDate.getTime())) {
    return 0;
  }

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference =
    today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0
    || (
      monthDifference === 0
      && today.getDate() < birthDate.getDate()
    )
  ) {
    age -= 1;
  }

  return age;
}

function errorsForStep(
  step: ApplicationStepId,
  form: ApplicationFormData,
): ApplicationFormErrors {
  const nextErrors: ApplicationFormErrors = {};

  if (step === 1) {
    if (!form.firstName.trim()) {
      nextErrors.firstName = 'Enter your first name.';
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = 'Enter your last name.';
    }

    if (
      form.phone.replace(/\D/g, '').length < 10
    ) {
      nextErrors.phone =
        'Enter a valid 10-digit phone number.';
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = 'Enter a valid email address.';
    }

    if (!form.dateOfBirth) {
      nextErrors.dateOfBirth =
        'Enter your date of birth.';
    }
    else if (ageOnDate(form.dateOfBirth) < 21) {
      nextErrors.dateOfBirth =
        'You must be at least 21 years old to apply.';
    }

    if (!form.streetAddress.trim()) {
      nextErrors.streetAddress =
        'Enter your street address.';
    }

    if (!form.city.trim()) {
      nextErrors.city = 'Enter your city.';
    }

    if (!form.state) {
      nextErrors.state = 'Select your state.';
    }

    if (!/^\d{5}(-\d{4})?$/.test(form.zipCode)) {
      nextErrors.zipCode = 'Enter a valid ZIP code.';
    }

    if (!form.addressDuration) {
      nextErrors.addressDuration =
        'Select how long you have lived here.';
    }

    if (!form.referralSource) {
      nextErrors.referralSource =
        'Tell us how you heard about NextMile.';
    }

    if (!form.ageConfirmed) {
      nextErrors.ageConfirmed =
        'Confirm that you are at least 21.';
    }
  }

  if (step === 2) {
    if (form.platforms.length === 0) {
      nextErrors.platforms =
        'Select at least one platform.';
    }

    if (!form.primaryPlatform) {
      nextErrors.primaryPlatform =
        'Select your primary platform.';
    }

    if (!form.approvalStatus) {
      nextErrors.approvalStatus =
        'Select your current approval status.';
    }

    if (!form.experienceLength) {
      nextErrors.experienceLength =
        'Select your experience level.';
    }

    if (!form.weeklyHours) {
      nextErrors.weeklyHours =
        'Select your expected weekly hours.';
    }
  }

  if (step === 3) {
    if (!form.vehicleCategory) {
      nextErrors.vehicleCategory =
        'Select a preferred vehicle category.';
    }

    if (!form.vehicleNeededBy) {
      nextErrors.vehicleNeededBy =
        'Select when you need a vehicle.';
    }

    if (!form.rentalDuration) {
      nextErrors.rentalDuration =
        'Select your expected rental duration.';
    }

    if (!form.pickupPreference) {
      nextErrors.pickupPreference =
        'Select a pickup preference.';
    }
  }

  if (step === 4) {
    if (!form.validLicense) {
      nextErrors.validLicense =
        'A valid U.S. driver’s license is required.';
    }

    if (!form.portlandServiceArea) {
      nextErrors.portlandServiceArea =
        'Confirm that you will operate in our service area.';
    }

    if (!form.verificationConsent) {
      nextErrors.verificationConsent =
        'Consent to follow-up verification is required.';
    }

    if (!form.weeklyPaymentAcknowledged) {
      nextErrors.weeklyPaymentAcknowledged =
        'Confirm that you understand the payment requirement.';
    }

    if (!form.approvedUseAcknowledged) {
      nextErrors.approvedUseAcknowledged =
        'Confirm the approved vehicle-use requirement.';
    }
  }

  if (step === 5) {
    if (!form.informationCertified) {
      nextErrors.informationCertified =
        'Certify that your information is accurate.';
    }

    if (!form.contactConsent) {
      nextErrors.contactConsent =
        'Consent to application-related contact is required.';
    }

    if (!form.termsAccepted) {
      nextErrors.termsAccepted =
        'Accept the Privacy Policy and Terms of Use.';
    }
  }

  return nextErrors;
}

export function useApplicationWizard() {
  const form = useState<ApplicationFormData>(
    'application-form',
    createInitialForm,
  );

  const currentStep = useState<ApplicationStepId>(
    'application-current-step',
    () => 1,
  );

  const highestStep = useState<ApplicationStepId>(
    'application-highest-step',
    () => 1,
  );

  const errors = ref<ApplicationFormErrors>({});
  const submitting = ref(false);
  const submitError = ref('');
  const draftReady = ref(false);

  const currentStepDefinition = computed(
    () => applicationSteps[currentStep.value - 1],
  );

  const progress = computed(
    () => currentStep.value * 20,
  );

  function saveDraft(): void {
    if (!import.meta.client || !draftReady.value) {
      return;
    }

    const draft: ApplicationDraft = {
      currentStep: currentStep.value,
      highestStep: highestStep.value,
      form: form.value,
    };

    sessionStorage.setItem(
      DRAFT_STORAGE_KEY,
      JSON.stringify(draft),
    );
  }

  function restoreDraft(): void {
    if (!import.meta.client) {
      return;
    }

    const rawDraft =
      sessionStorage.getItem(DRAFT_STORAGE_KEY);

    if (rawDraft) {
      try {
        const draft =
          JSON.parse(rawDraft) as Partial<ApplicationDraft>;

        if (
          draft.form?.schemaVersion === 1
          && draft.currentStep
          && draft.highestStep
        ) {
          form.value = {
            ...createInitialForm(),
            ...draft.form,
          };

          currentStep.value = draft.currentStep;
          highestStep.value = draft.highestStep;
        }
      }
      catch {
        sessionStorage.removeItem(DRAFT_STORAGE_KEY);
      }
    }

    const category =
      useRoute().query.category;

    if (
      typeof category === 'string'
      && vehicleCategoryOptions.some(
        option => option.value === category,
      )
    ) {
      form.value.vehicleCategory = category;
    }

    draftReady.value = true;
  }

  function clearDraft(): void {
    if (import.meta.client) {
      sessionStorage.removeItem(DRAFT_STORAGE_KEY);
    }
  }

  async function focusFirstError(): Promise<void> {
    if (!import.meta.client) {
      return;
    }

    await nextTick();

    const firstField = Object.keys(errors.value)[0];

    if (!firstField) {
      return;
    }

    const element =
      document.getElementById(firstField)
      ?? document.querySelector<HTMLElement>(
        `[data-field="${firstField}"]`,
      );

    element?.focus();
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }

  async function continueToNextStep(): Promise<void> {
    errors.value =
      errorsForStep(currentStep.value, form.value);

    if (Object.keys(errors.value).length > 0) {
      await focusFirstError();
      return;
    }

    if (currentStep.value < 5) {
      currentStep.value =
        (currentStep.value + 1) as ApplicationStepId;

      highestStep.value =
        Math.max(
          highestStep.value,
          currentStep.value,
        ) as ApplicationStepId;

      errors.value = {};
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  function goToStep(step: ApplicationStepId): void {
    if (step > highestStep.value) {
      return;
    }

    currentStep.value = step;
    errors.value = {};

    if (import.meta.client) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  function previousStep(): void {
    if (currentStep.value > 1) {
      goToStep(
        (currentStep.value - 1) as ApplicationStepId,
      );
    }
  }

  async function submitApplication(): Promise<void> {
    const allErrors: ApplicationFormErrors = {};
    let firstInvalidStep: ApplicationStepId | null = null;

    for (const step of applicationSteps) {
      const stepErrors =
        errorsForStep(step.id, form.value);

      if (
        firstInvalidStep === null
        && Object.keys(stepErrors).length > 0
      ) {
        firstInvalidStep = step.id;
      }

      Object.assign(allErrors, stepErrors);
    }

    if (firstInvalidStep !== null) {
      currentStep.value = firstInvalidStep;
      highestStep.value =
        Math.max(
          highestStep.value,
          firstInvalidStep,
        ) as ApplicationStepId;
      errors.value = allErrors;
      await focusFirstError();
      return;
    }

    submitting.value = true;
    submitError.value = '';

    try {
      const response =
        await submitApplicationPreview({
          ...form.value,
          submittedAt: new Date().toISOString(),
        });

      if (import.meta.client) {
        sessionStorage.setItem(
          RESULT_STORAGE_KEY,
          JSON.stringify(response),
        );
      }

      clearDraft();

      await navigateTo({
        path: '/apply/success',
        query: {
          reference: response.reference,
        },
      });
    }
    catch {
      submitError.value =
        'We could not complete the preview submission. Please try again.';
    }
    finally {
      submitting.value = false;
    }
  }

  onMounted(restoreDraft);

  watch(
    [form, currentStep, highestStep],
    saveDraft,
    {
      deep: true,
    },
  );

  return {
    form,
    currentStep,
    highestStep,
    currentStepDefinition,
    progress,
    errors,
    submitting,
    submitError,
    continueToNextStep,
    previousStep,
    goToStep,
    submitApplication,
  };
}
