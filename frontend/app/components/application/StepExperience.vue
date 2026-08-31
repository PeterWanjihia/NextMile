<script setup lang="ts">
import {
  approvalStatusOptions,
  experienceOptions,
  platformOptions,
  weeklyHoursOptions,
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

const selectedPlatforms = computed(
  () => platformOptions.filter(
    option => form.value.platforms.includes(option.value),
  ),
);

watch(
  () => form.value.platforms,
  (platforms) => {
    if (!platforms.includes(form.value.primaryPlatform)) {
      form.value.primaryPlatform = '';
    }
  },
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
          name="lucide:route"
          class="size-5"
          aria-hidden="true"
        />
      </span>

      <div>
        <h2 class="text-lg font-extrabold text-slate-950">
          Driving Platform & Experience
        </h2>

        <p class="mt-0.5 text-sm text-slate-600">
          Tell us how you plan to use your NextMile vehicle.
        </p>
      </div>
    </div>

    <fieldset class="mt-7">
      <legend class="text-xs font-bold text-slate-900">
        Which platforms do you drive for or plan to use?

        <span class="text-red-600" aria-hidden="true">*</span>
      </legend>

      <div
        id="platforms"
        class="mt-3 grid gap-3 sm:grid-cols-2"
        tabindex="-1"
        data-field="platforms"
      >
        <label
          v-for="option in platformOptions"
          :key="option.value"
          class="
            flex cursor-pointer items-center gap-3
            rounded-lg border p-4 transition
          "
          :class="
            form.platforms.includes(option.value)
              ? 'border-blue-500 bg-blue-50'
              : 'border-slate-200 bg-white hover:border-blue-200'
          "
        >
          <input
            v-model="form.platforms"
            type="checkbox"
            name="platforms"
            :value="option.value"
            class="
              size-4 shrink-0 rounded border-slate-300
              text-blue-600 focus:ring-blue-500
            "
          >

          <Icon
            :name="option.icon"
            class="size-5 shrink-0 text-blue-700"
            aria-hidden="true"
          />

          <span class="text-sm font-semibold text-slate-800">
            {{ option.label }}
          </span>
        </label>
      </div>

      <p
        v-if="errors.platforms"
        class="mt-2 text-xs font-medium text-red-700"
        role="alert"
      >
        {{ errors.platforms }}
      </p>
    </fieldset>

    <div class="mt-6">
      <ApplicationField
        id="primaryPlatform"
        label="What will be your primary platform?"
        required
        :error="errors.primaryPlatform"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="primaryPlatform"
            v-model="form.primaryPlatform"
            name="primaryPlatform"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select your primary platform
            </option>

            <option
              v-for="option in selectedPlatforms"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </template>
      </ApplicationField>
    </div>

    <div class="mt-5 grid gap-5 sm:grid-cols-2">
      <ApplicationField
        id="approvalStatus"
        label="Current platform status"
        required
        :error="errors.approvalStatus"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="approvalStatus"
            v-model="form.approvalStatus"
            name="approvalStatus"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select status
            </option>

            <option
              v-for="option in approvalStatusOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </select>
        </template>
      </ApplicationField>

      <ApplicationField
        id="experienceLength"
        label="Gig-driving experience"
        required
        :error="errors.experienceLength"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="experienceLength"
            v-model="form.experienceLength"
            name="experienceLength"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select experience
            </option>

            <option
              v-for="option in experienceOptions"
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
        id="weeklyHours"
        label="How many hours do you expect to drive each week?"
        required
        :error="errors.weeklyHours"
      >
        <template #default="{ descriptionId, invalid }">
          <select
            id="weeklyHours"
            v-model="form.weeklyHours"
            name="weeklyHours"
            :class="controlClass"
            :aria-describedby="descriptionId"
            :aria-invalid="invalid"
          >
            <option value="" disabled>
              Select expected hours
            </option>

            <option
              v-for="option in weeklyHoursOptions"
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
        mt-6 flex items-start gap-3 rounded-lg
        border border-blue-200 bg-blue-50/70 p-4
      "
    >
      <Icon
        name="lucide:info"
        class="mt-0.5 size-5 shrink-0 text-blue-700"
        aria-hidden="true"
      />

      <p class="text-xs leading-5 text-slate-600">
        You can still apply if your platform application is in
        progress. We may request proof of platform approval later.
      </p>
    </aside>
  </div>
</template>
