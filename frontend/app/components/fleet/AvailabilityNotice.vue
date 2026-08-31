<script setup lang="ts">
import { fleetAvailabilityNotice } from '~/data/fleet';
</script>

<template>
  <section
    class="
      bg-white
      pt-5 pb-2
      sm:pt-6
    "
    aria-label="Vehicle availability information"
  >
    <UiContainer>
      <div
        class="
          flex items-start gap-3
          rounded-xl
          border border-blue-200
          bg-blue-50/70
          px-4 py-3.5
          text-sm leading-6
          text-slate-700
          sm:items-center sm:px-5
        "
      >
        <Icon
          :name="fleetAvailabilityNotice.icon"
          class="
            mt-0.5 size-5 shrink-0
            text-blue-600
            sm:mt-0
          "
          aria-hidden="true"
        />

        <p>
          {{ fleetAvailabilityNotice.message }}
        </p>
      </div>
    </UiContainer>
  </section>
</template>
