<script setup lang="ts">
import { pricingOptions } from '~/data/pricing';
</script>

<template>
  <section
    class="
      bg-white pt-2 pb-3
      sm:pt-3 sm:pb-4
    "
    aria-labelledby="pricing-options-heading"
  >
    <UiContainer>
      <h2
        id="pricing-options-heading"
        class="
          text-center text-2xl
          font-extrabold tracking-tight
          text-slate-950
          sm:text-3xl
          lg:text-4xl
        "
      >
        Choose the Option That Fits Your Work
      </h2>

      <div
        class="
          mt-6 grid items-stretch gap-5
          lg:grid-cols-2 lg:gap-6
        "
      >
        <PricingOptionCard
          v-for="option in pricingOptions"
          :key="option.id"
          :option="option"
        />
      </div>
    </UiContainer>
  </section>
</template>
