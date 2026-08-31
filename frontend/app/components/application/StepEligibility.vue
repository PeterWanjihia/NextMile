<script setup lang="ts">
import type {
  ApplicationFormData,
  ApplicationFormErrors,
} from '~/types/application';

defineProps<{
  errors: ApplicationFormErrors;
}>();

const form = defineModel<ApplicationFormData>({
  required: true,
});

const eligibilityItems = [
  {
    field: 'validLicense',
    icon: 'lucide:contact',
    title: 'Valid U.S. driver’s license',
    description:
      'I have a current, valid U.S. driver’s license.',
  },
  {
    field: 'portlandServiceArea',
    icon: 'lucide:map-pin',
    title: 'Portland-area operation',
    description:
      'I will primarily operate the vehicle within the Portland metropolitan area and approved surrounding communities.',
  },
  {
    field: 'verificationConsent',
    icon: 'lucide:shield-check',
    title: 'Follow-up verification',
    description:
      'I understand that NextMile may request identity, license, address, or platform verification after this application.',
  },
  {
    field: 'weeklyPaymentAcknowledged',
    icon: 'lucide:circle-dollar-sign',
    title: 'Weekly rental payments',
    description:
      'I understand that an approved payment method is required for the deposit and weekly rental charges.',
  },
  {
    field: 'approvedUseAcknowledged',
    icon: 'lucide:car-front',
    title: 'Approved vehicle use',
    description:
      'I will use the vehicle only for approved gig, delivery, rideshare, and personal purposes described in my rental agreement.',
  },
] as const;
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
          name="lucide:shield-check"
          class="size-5"
          aria-hidden="true"
        />
      </span>

      <div>
        <h2 class="text-lg font-extrabold text-slate-950">
          Basic Eligibility
        </h2>

        <p class="mt-0.5 text-sm text-slate-600">
          Confirm the basic requirements for a NextMile rental.
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

      <div>
        <p class="text-sm font-bold text-slate-900">
          No documents are uploaded at this stage.
        </p>

        <p class="mt-1 text-xs leading-5 text-slate-600">
          If your application moves forward, our team will
          explain how to provide any required documents securely.
        </p>
      </div>
    </aside>

    <fieldset class="mt-6">
      <legend class="text-xs font-bold text-slate-900">
        Please confirm each statement

        <span class="text-red-600" aria-hidden="true">*</span>
      </legend>

      <div class="mt-3 space-y-3">
        <label
          v-for="item in eligibilityItems"
          :key="item.field"
          class="
            flex cursor-pointer items-start gap-4
            rounded-xl border p-4 transition
          "
          :class="
            form[item.field]
              ? 'border-blue-400 bg-blue-50/70'
              : errors[item.field]
                ? 'border-red-300 bg-red-50/40'
                : 'border-slate-200 bg-white hover:border-blue-200'
          "
        >
          <input
            :id="item.field"
            v-model="form[item.field]"
            type="checkbox"
            :name="item.field"
            class="
              mt-1 size-4 shrink-0 rounded border-slate-300
              text-blue-600 focus:ring-blue-500
            "
            :aria-invalid="Boolean(errors[item.field])"
          >

          <Icon
            :name="item.icon"
            class="mt-0.5 size-5 shrink-0 text-blue-700"
            aria-hidden="true"
          />

          <span class="min-w-0">
            <span class="text-sm font-bold text-slate-900">
              {{ item.title }}
            </span>

            <span
              class="
                mt-1 block text-xs leading-5 text-slate-600
              "
            >
              {{ item.description }}
            </span>

            <span
              v-if="errors[item.field]"
              class="
                mt-1 block text-xs font-medium text-red-700
              "
              role="alert"
            >
              {{ errors[item.field] }}
            </span>
          </span>
        </label>
      </div>
    </fieldset>

    <aside
      class="
        mt-6 flex items-start gap-3 rounded-lg
        border border-amber-200 bg-amber-50 p-4
      "
    >
      <Icon
        name="lucide:lock-keyhole"
        class="mt-0.5 size-5 shrink-0 text-amber-700"
        aria-hidden="true"
      />

      <p class="text-xs leading-5 text-slate-600">
        Never enter your Social Security number, bank account,
        payment card, or driver’s-license number in this form.
        We will request sensitive information securely if needed.
      </p>
    </aside>
  </div>
</template>
