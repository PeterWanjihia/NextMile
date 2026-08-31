<script setup lang="ts">
import {
  addressDurationOptions,
  approvalStatusOptions,
  experienceOptions,
  pickupPreferenceOptions,
  platformOptions,
  referralOptions,
  rentalDurationOptions,
  vehicleCategoryOptions,
  weeklyHoursOptions,
} from '~/data/application';

import type {
  ApplicationFormData,
  ApplicationFormErrors,
  ApplicationOption,
  ApplicationStepId,
} from '~/types/application';

defineProps<{
  errors: ApplicationFormErrors;
}>();

const emit = defineEmits<{
  edit: [step: ApplicationStepId];
}>();

const form = defineModel<ApplicationFormData>({
  required: true,
});

function optionLabel(
  options: readonly ApplicationOption[],
  value: string,
): string {
  return (
    options.find(option => option.value === value)?.label
    ?? value
    ?? 'Not provided'
  );
}

const reviewGroups = computed(() => [
  {
    step: 1 as const,
    title: 'Personal Information',
    icon: 'lucide:user-round',
    rows: [
      {
        label: 'Name',
        value:
          `${form.value.firstName} ${form.value.lastName}`,
      },
      {
        label: 'Phone',
        value: form.value.phone,
      },
      {
        label: 'Email',
        value: form.value.email,
      },
      {
        label: 'Address',
        value: [
          form.value.streetAddress,
          form.value.addressLine2,
          `${form.value.city}, ${form.value.state} ${form.value.zipCode}`,
        ].filter(Boolean).join(', '),
      },
      {
        label: 'Time at address',
        value: optionLabel(
          addressDurationOptions,
          form.value.addressDuration,
        ),
      },
      {
        label: 'Referral',
        value: optionLabel(
          referralOptions,
          form.value.referralSource,
        ),
      },
    ],
  },
  {
    step: 2 as const,
    title: 'Driving Platform & Experience',
    icon: 'lucide:route',
    rows: [
      {
        label: 'Platforms',
        value: form.value.platforms
          .map(value => optionLabel(platformOptions, value))
          .join(', '),
      },
      {
        label: 'Primary platform',
        value: optionLabel(
          platformOptions,
          form.value.primaryPlatform,
        ),
      },
      {
        label: 'Platform status',
        value: optionLabel(
          approvalStatusOptions,
          form.value.approvalStatus,
        ),
      },
      {
        label: 'Experience',
        value: optionLabel(
          experienceOptions,
          form.value.experienceLength,
        ),
      },
      {
        label: 'Expected activity',
        value: optionLabel(
          weeklyHoursOptions,
          form.value.weeklyHours,
        ),
      },
    ],
  },
  {
    step: 3 as const,
    title: 'Vehicle Requirements',
    icon: 'lucide:car-front',
    rows: [
      {
        label: 'Preferred category',
        value: optionLabel(
          vehicleCategoryOptions,
          form.value.vehicleCategory,
        ),
      },
      {
        label: 'Vehicle needed by',
        value: form.value.vehicleNeededBy,
      },
      {
        label: 'Rental duration',
        value: optionLabel(
          rentalDurationOptions,
          form.value.rentalDuration,
        ),
      },
      {
        label: 'Pickup preference',
        value: optionLabel(
          pickupPreferenceOptions,
          form.value.pickupPreference,
        ),
      },
      {
        label: 'Alternative category',
        value: form.value.alternateCategoryAccepted
          ? 'Accepted'
          : 'Not requested',
      },
    ],
  },
  {
    step: 4 as const,
    title: 'Basic Eligibility',
    icon: 'lucide:shield-check',
    rows: [
      {
        label: 'Driver’s license',
        value: form.value.validLicense
          ? 'Confirmed'
          : 'Not confirmed',
      },
      {
        label: 'Service area',
        value: form.value.portlandServiceArea
          ? 'Confirmed'
          : 'Not confirmed',
      },
      {
        label: 'Verification',
        value: form.value.verificationConsent
          ? 'Consented'
          : 'Not confirmed',
      },
      {
        label: 'Weekly payments',
        value: form.value.weeklyPaymentAcknowledged
          ? 'Acknowledged'
          : 'Not confirmed',
      },
      {
        label: 'Approved use',
        value: form.value.approvedUseAcknowledged
          ? 'Acknowledged'
          : 'Not confirmed',
      },
    ],
  },
]);
</script>

<template>
  <div>
    <div class="flex items-start gap-3">
      <span
        class="
          inline-flex size-10 shrink-0 items-center
          justify-center rounded-full bg-blue-50 text-blue-700
        "
      >
        <Icon
          name="lucide:clipboard-check"
          class="size-5"
          aria-hidden="true"
        />
      </span>

      <div>
        <h2 class="text-lg font-extrabold text-slate-950">
          Review & Submit
        </h2>

        <p class="mt-0.5 text-sm text-slate-600">
          Make sure everything is correct before submitting.
        </p>
      </div>
    </div>

    <aside
      class="
        mt-7 flex items-start gap-3 rounded-lg
        border border-blue-200 bg-blue-50/70 p-4
      "
    >
      <Icon
        name="lucide:info"
        class="mt-0.5 size-5 shrink-0 text-blue-700"
        aria-hidden="true"
      />

      <p class="text-xs leading-5 text-slate-600">
        This frontend-only version demonstrates the complete
        application experience. It does not send or permanently
        store your information on a server.
      </p>
    </aside>

    <div class="mt-6 space-y-4">
      <section
        v-for="group in reviewGroups"
        :key="group.step"
        class="
          overflow-hidden rounded-xl border border-slate-200
          bg-white
        "
      >
        <div
          class="
            flex items-center justify-between gap-4
            border-b border-slate-200 bg-slate-50 px-4 py-3
          "
        >
          <h3
            class="
              flex items-center gap-2
              text-sm font-bold text-slate-900
            "
          >
            <Icon
              :name="group.icon"
              class="size-4 text-blue-700"
              aria-hidden="true"
            />

            {{ group.title }}
          </h3>

          <button
            type="button"
            class="
              rounded-md px-2 py-1
              text-xs font-bold text-blue-700
              hover:bg-blue-100 hover:text-blue-800
            "
            @click="emit('edit', group.step)"
          >
            Edit
          </button>
        </div>

        <dl class="grid gap-x-8 gap-y-3 p-4 sm:grid-cols-2">
          <div
            v-for="row in group.rows"
            :key="row.label"
            class="min-w-0"
          >
            <dt class="text-xs font-medium text-slate-500">
              {{ row.label }}
            </dt>

            <dd
              class="
                mt-0.5 break-words
                text-sm font-semibold text-slate-800
              "
            >
              {{ row.value }}
            </dd>
          </div>
        </dl>
      </section>
    </div>

    <fieldset class="mt-7">
      <legend class="text-xs font-bold text-slate-900">
        Final confirmations

        <span class="text-red-600" aria-hidden="true">*</span>
      </legend>

      <div class="mt-3 space-y-3">
        <label
          class="
            flex cursor-pointer items-start gap-3
            text-xs leading-5 text-slate-700
          "
        >
          <input
            id="informationCertified"
            v-model="form.informationCertified"
            type="checkbox"
            name="informationCertified"
            class="
              mt-0.5 size-4 shrink-0 rounded
              border-slate-300 text-blue-600
              focus:ring-blue-500
            "
          >

          <span>
            I certify that the information in this application
            is complete and accurate.

            <span class="text-red-600" aria-hidden="true">*</span>

            <span
              v-if="errors.informationCertified"
              class="mt-1 block font-medium text-red-700"
              role="alert"
            >
              {{ errors.informationCertified }}
            </span>
          </span>
        </label>

        <label
          class="
            flex cursor-pointer items-start gap-3
            text-xs leading-5 text-slate-700
          "
        >
          <input
            id="contactConsent"
            v-model="form.contactConsent"
            type="checkbox"
            name="contactConsent"
            class="
              mt-0.5 size-4 shrink-0 rounded
              border-slate-300 text-blue-600
              focus:ring-blue-500
            "
          >

          <span>
            I consent to calls, texts, or emails about this
            application.

            <span class="text-red-600" aria-hidden="true">*</span>

            <span
              v-if="errors.contactConsent"
              class="mt-1 block font-medium text-red-700"
              role="alert"
            >
              {{ errors.contactConsent }}
            </span>
          </span>
        </label>

        <label
          class="
            flex cursor-pointer items-start gap-3
            text-xs leading-5 text-slate-700
          "
        >
          <input
            id="termsAccepted"
            v-model="form.termsAccepted"
            type="checkbox"
            name="termsAccepted"
            class="
              mt-0.5 size-4 shrink-0 rounded
              border-slate-300 text-blue-600
              focus:ring-blue-500
            "
          >

          <span>
            I agree to the

            <NuxtLink
              to="/privacy"
              class="font-bold text-blue-700 hover:text-blue-800"
              target="_blank"
            >
              Privacy Policy
            </NuxtLink>

            and

            <NuxtLink
              to="/terms"
              class="font-bold text-blue-700 hover:text-blue-800"
              target="_blank"
            >
              Terms of Use
            </NuxtLink>.

            <span class="text-red-600" aria-hidden="true">*</span>

            <span
              v-if="errors.termsAccepted"
              class="mt-1 block font-medium text-red-700"
              role="alert"
            >
              {{ errors.termsAccepted }}
            </span>
          </span>
        </label>
      </div>
    </fieldset>
  </div>
</template>
