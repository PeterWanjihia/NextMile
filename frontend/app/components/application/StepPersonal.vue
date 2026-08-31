<script setup lang="ts">
import {
  addressDurationOptions,
  referralOptions,
  stateOptions,
} from '~/data/application';

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

const controlClass = `
  min-h-11 w-full rounded-lg border border-slate-300
  bg-white px-3.5 py-2.5 text-sm font-normal text-slate-900
  outline-none transition placeholder:text-slate-400
  focus:border-blue-500 focus:ring-2 focus:ring-blue-100
  aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-100
`;

const maximumBirthDate = computed(() => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 21);

  return date.toISOString().slice(0, 10);
});
</script>

<template>
  <div>
    <div class="flex items-start gap-3">
      <span
        class="
          inline-flex size-10 shrink-0
          items-center justify-center rounded-full
          bg-blue-50 text-blue-700
        "
      >
        <Icon
          name="lucide:user-round"
          class="size-5"
          aria-hidden="true"
        />
      </span>

      <div>
        <h2 class="text-lg font-extrabold text-slate-950">
          Personal Information
        </h2>

        <p class="mt-0.5 text-sm text-slate-600">
          Let’s start with some basic information about you.
        </p>
      </div>
    </div>

    <div class="mt-7 grid gap-5 sm:grid-cols-2">
      <ApplicationField
        id="firstName"
        label="First Name"
        required
        :error="errors.firstName"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="firstName"
            v-model.trim="form.firstName"
            name="firstName"
            type="text"
            autocomplete="given-name"
            placeholder="Enter your first name"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>

      <ApplicationField
        id="lastName"
        label="Last Name"
        required
        :error="errors.lastName"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="lastName"
            v-model.trim="form.lastName"
            name="lastName"
            type="text"
            autocomplete="family-name"
            placeholder="Enter your last name"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>
    </div>

    <div class="mt-5">
      <ApplicationField
        id="phone"
        label="Phone Number"
        required
        helper="We’ll use this to contact you about your application."
        :error="errors.phone"
      >
        <template #default="{ descriptionId, invalid }">
          <div class="flex">
            <span
              class="
                inline-flex min-h-11 items-center gap-1.5
                rounded-l-lg border border-r-0 border-slate-300
                bg-slate-50 px-3 text-sm text-slate-700
              "
              aria-hidden="true"
            >
              <span>🇺🇸</span>
              <span>+1</span>
            </span>

            <input
              id="phone"
              v-model.trim="form.phone"
              name="phone"
              type="tel"
              autocomplete="tel-national"
              inputmode="tel"
              placeholder="(555) 123-4567"
              :class="[
                controlClass,
                '!rounded-l-none',
              ]"
              :aria-describedby="descriptionId"
              :aria-invalid="invalid"
            >
          </div>
        </template>
      </ApplicationField>
    </div>

    <div class="mt-5">
      <ApplicationField
        id="email"
        label="Email Address"
        required
        helper="Important updates will be sent to this email."
        :error="errors.email"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="email"
            v-model.trim="form.email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="Enter your email address"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>
    </div>

    <div class="mt-5">
      <ApplicationField
        id="dateOfBirth"
        label="Date of Birth"
        required
        helper="You must be at least 21 years old to apply."
        :error="errors.dateOfBirth"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="dateOfBirth"
            v-model="form.dateOfBirth"
            name="dateOfBirth"
            type="date"
            autocomplete="bday"
            :max="maximumBirthDate"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>
    </div>

    <fieldset class="mt-6">
      <legend class="text-xs font-bold text-slate-900">
        Current Address

        <span class="text-red-600" aria-hidden="true">
          *
        </span>
      </legend>

      <div class="mt-2 space-y-3">
        <input
          id="streetAddress"
          v-model.trim="form.streetAddress"
          name="streetAddress"
          type="text"
          autocomplete="address-line1"
          placeholder="Street address"
          :class="controlClass"
          :aria-invalid="Boolean(errors.streetAddress)"
          :aria-describedby="
            errors.streetAddress
              ? 'streetAddress-error'
              : undefined
          "
        >

        <p
          v-if="errors.streetAddress"
          id="streetAddress-error"
          class="text-xs font-medium text-red-700"
          role="alert"
        >
          {{ errors.streetAddress }}
        </p>

        <input
          v-model.trim="form.addressLine2"
          name="addressLine2"
          type="text"
          autocomplete="address-line2"
          placeholder="Apt, suite, etc. (optional)"
          :class="controlClass"
        >
      </div>
    </fieldset>

    <div
      class="
        mt-5 grid gap-5
        sm:grid-cols-[1.15fr_1fr_1fr]
      "
    >
      <ApplicationField
        id="city"
        label="City"
        required
        :error="errors.city"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="city"
            v-model.trim="form.city"
            name="city"
            type="text"
            autocomplete="address-level2"
            placeholder="Enter your city"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>

      <ApplicationField
        id="state"
        label="State"
        required
        :error="errors.state"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="state"
            v-model="form.state"
            name="state"
            autocomplete="address-level1"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select state
            </option>

            <option
              v-for="option in stateOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </template>
      </ApplicationField>

      <ApplicationField
        id="zipCode"
        label="ZIP Code"
        required
        :error="errors.zipCode"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="zipCode"
            v-model.trim="form.zipCode"
            name="zipCode"
            type="text"
            autocomplete="postal-code"
            inputmode="numeric"
            placeholder="Enter ZIP code"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>
    </div>

    <div class="mt-5">
      <ApplicationField
        id="addressDuration"
        label="How long have you lived at this address?"
        required
        :error="errors.addressDuration"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="addressDuration"
            v-model="form.addressDuration"
            name="addressDuration"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select duration
            </option>

            <option
              v-for="option in addressDurationOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </template>
      </ApplicationField>
    </div>

    <aside
      class="
        mt-5 flex items-start gap-3
        rounded-lg border border-blue-200
        bg-blue-50/70 p-4
      "
    >
      <Icon
        name="lucide:map-pin"
        class="mt-0.5 size-5 shrink-0 text-blue-700"
        aria-hidden="true"
      />

      <div>
        <p class="text-xs font-bold text-blue-800">
          Service Area
        </p>

        <p class="mt-1 text-xs leading-5 text-slate-600">
          We currently serve the Portland, OR metropolitan
          area and surrounding communities. Your address
          must be within our service area to qualify.
        </p>
      </div>
    </aside>

    <div class="mt-6">
      <ApplicationField
        id="referralSource"
        label="How did you hear about NextMile Rentals?"
        required
        :error="errors.referralSource"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="referralSource"
            v-model="form.referralSource"
            name="referralSource"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select an option
            </option>

            <option
              v-for="option in referralOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </template>
      </ApplicationField>
    </div>

    <label
      class="
        mt-5 flex cursor-pointer items-start gap-3
        text-xs leading-5 text-slate-700
      "
    >
      <input
        id="ageConfirmed"
        v-model="form.ageConfirmed"
        type="checkbox"
        name="ageConfirmed"
        class="
          mt-0.5 size-4 shrink-0 rounded
          border-slate-300 text-blue-600
          focus:ring-blue-500
        "
        :aria-invalid="Boolean(errors.ageConfirmed)"
        :aria-describedby="
          errors.ageConfirmed
            ? 'ageConfirmed-error'
            : undefined
        "
      >

      <span>
        <span class="font-semibold">
          I confirm that I am 21 years of age or older.
        </span>

        <span class="text-red-600" aria-hidden="true">
          *
        </span>

        <span class="block text-slate-500">
          You must be at least 21 years old to rent a vehicle.
        </span>

        <span
          v-if="errors.ageConfirmed"
          id="ageConfirmed-error"
          class="mt-1 block font-medium text-red-700"
          role="alert"
        >
          {{ errors.ageConfirmed }}
        </span>
      </span>
    </label>
  </div>
</template>
