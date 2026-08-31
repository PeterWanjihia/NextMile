<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string;
    label: string;
    required?: boolean;
    helper?: string;
    error?: string;
  }>(),
  {
    required: false,
    helper: '',
    error: '',
  },
);

const descriptionId = computed(
  () => `${props.id}-description`,
);
</script>

<template>
  <div>
    <label
      :for="id"
      class="block text-xs font-bold text-slate-900"
    >
      {{ label }}

      <span
        v-if="required"
        class="text-red-600"
        aria-hidden="true"
      >
        *
      </span>
    </label>

    <div class="mt-2">
      <slot
        :description-id="descriptionId"
        :invalid="Boolean(error)"
      />
    </div>

    <p
      v-if="error"
      :id="descriptionId"
      class="mt-1.5 text-xs font-medium text-red-700"
      role="alert"
    >
      {{ error }}
    </p>

    <p
      v-else-if="helper"
      :id="descriptionId"
      class="mt-1.5 text-xs leading-5 text-slate-500"
    >
      {{ helper }}
    </p>
  </div>
</template>
