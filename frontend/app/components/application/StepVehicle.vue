<script setup lang="ts">
import {
  pickupPreferenceOptions,
  rentalDurationOptions,
  vehicleCategoryOptions,
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
  bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none
  transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100
  aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-100
`;

const minimumDate = computed(
  () => new Date().toISOString().slice(0, 10),
);
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
          name="lucide:car-front"
          class="size-5"
          aria-hidden="true"
        />
      </span>

      <div>
        <h2 class="text-lg font-extrabold text-slate-950">
          Vehicle Requirements
        </h2>

        <p class="mt-0.5 text-sm text-slate-600">
          Help us match you with the right available category.
        </p>
      </div>
    </div>

    <fieldset class="mt-7">
      <legend class="text-xs font-bold text-slate-900">
        Preferred vehicle category

        <span class="text-red-600" aria-hidden="true">*</span>
      </legend>

      <div
        id="vehicleCategory"
        class="mt-3 grid gap-3 sm:grid-cols-2"
        tabindex="-1"
        data-field="vehicleCategory"
      >
        <label
          v-for="option in vehicleCategoryOptions"
          :key="option.value"
          class="
            relative flex cursor-pointer items-start gap-3
            rounded-xl border p-4 transition
          "
          :class="
            form.vehicleCategory === option.value
              ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500'
              : 'border-slate-200 bg-white hover:border-blue-200'
          "
        >
          <input
            v-model="form.vehicleCategory"
            type="radio"
            name="vehicleCategory"
            :value="option.value"
            class="
              mt-1 size-4 shrink-0 border-slate-300
              text-blue-600 focus:ring-blue-500
            "
          >

          <span class="min-w-0">
            <span class="flex items-center gap-2">
              <Icon
                :name="option.icon"
                class="size-5 shrink-0 text-blue-700"
                aria-hidden="true"
              />

              <span class="text-sm font-bold text-slate-900">
                {{ option.label }}
              </span>
            </span>

            <span
              class="
                mt-2 block text-xs leading-5 text-slate-600
              "
            >
              {{ option.description }}
            </span>
          </span>
        </label>
      </div>

      <p
        v-if="errors.vehicleCategory"
        class="mt-2 text-xs font-medium text-red-700"
        role="alert"
      >
        {{ errors.vehicleCategory }}
      </p>
    </fieldset>

    <div class="mt-6 grid gap-5 sm:grid-cols-2">
      <ApplicationField
        id="vehicleNeededBy"
        label="When do you need a vehicle?"
        required
        :error="errors.vehicleNeededBy"
      >
        <template #default="{ descriptionId, invalid }">
          <input
            id="vehicleNeededBy"
            v-model="form.vehicleNeededBy"
            type="date"
            name="vehicleNeededBy"
            :min="minimumDate"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
        </template>
      </ApplicationField>

      <ApplicationField
        id="rentalDuration"
        label="Expected rental duration"
        required
        :error="errors.rentalDuration"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="rentalDuration"
            v-model="form.rentalDuration"
            name="rentalDuration"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select duration
            </option>

            <option
              v-for="option in rentalDurationOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </template>
      </ApplicationField>
    </div>

    <div class="mt-5">
      <ApplicationField
        id="pickupPreference"
        label="Preferred pickup time"
        required
        helper="We’ll confirm an exact time if your application is approved."
        :error="errors.pickupPreference"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="pickupPreference"
            v-model="form.pickupPreference"
            name="pickupPreference"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select a pickup preference
            </option>

            <option
              v-for="option in pickupPreferenceOptions"
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
        mt-6 flex cursor-pointer items-start gap-3
        rounded-lg border border-slate-200 bg-slate-50 p-4
        text-sm leading-6 text-slate-700
      "
    >
      <input
        v-model="form.alternateCategoryAccepted"
        type="checkbox"
        name="alternateCategoryAccepted"
        class="
          mt-1 size-4 shrink-0 rounded border-slate-300
          text-blue-600 focus:ring-blue-500
        "
      >

      <span>
        <span class="font-bold text-slate-900">
          I’m open to another vehicle category.
        </span>

        <span class="mt-0.5 block text-xs text-slate-500">
          This may help us offer you an available vehicle sooner.
        </span>
      </span>
    </label>

    <aside
      class="
        mt-5 flex items-start gap-3 rounded-lg
        border border-amber-200 bg-amber-50 p-4
      "
    >
      <Icon
        name="lucide:clock-3"
        class="mt-0.5 size-5 shrink-0 text-amber-700"
        aria-hidden="true"
      />

      <p class="text-xs leading-5 text-slate-600">
        Vehicle category and pickup timing depend on current
        availability. A selection here does not reserve a vehicle.
      </p>
    </aside>
  </div>
</template>
