<script setup lang="ts">
import { pricingFeatures } from '~/data/pricing';

const dividerClasses = [
  `
    border-b border-slate-200
    sm:border-r
    lg:border-b-0
  `,
  `
    border-b border-slate-200
    lg:border-r lg:border-b-0
  `,
  `
    border-b border-slate-200
    sm:border-b-0 sm:border-r
  `,
  '',
] as const;
</script>

<template>
  <section
    class="bg-white py-4 sm:py-5"
    aria-labelledby="pricing-features-heading"
  >
    <UiContainer>
      <h2
        id="pricing-features-heading"
        class="sr-only"
      >
        What to know about NextMile pricing
      </h2>

      <ul
        class="
          grid overflow-hidden
          rounded-xl
          border border-[var(--nextmile-panel-border)]
          bg-[var(--nextmile-card-cool)]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <li
          v-for="(feature, index) in pricingFeatures"
          :key="feature.id"
          class="
            flex min-w-0 items-center
            gap-4 px-5 py-5
            lg:px-6
          "
          :class="dividerClasses[index]"
        >
          <Icon
            :name="feature.icon"
            class="
              size-9 shrink-0
              text-blue-600
            "
            aria-hidden="true"
          />

          <div class="min-w-0">
            <h3
              class="
                text-sm font-extrabold
                text-slate-950
              "
            >
              {{ feature.title }}
            </h3>

            <p
              class="
                mt-1 text-xs leading-5
                text-slate-600
              "
            >
              {{ feature.description }}
            </p>
          </div>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
