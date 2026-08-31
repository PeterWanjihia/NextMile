<script setup lang="ts">
import { pricingMetrics } from '~/data/pricing';

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
    class="bg-white py-3 sm:py-4"
    aria-labelledby="pricing-metrics-heading"
  >
    <UiContainer>
      <h2
        id="pricing-metrics-heading"
        class="sr-only"
      >
        Rental term summary
      </h2>

      <dl
        class="
          grid overflow-hidden
          rounded-xl
          border border-[var(--nextmile-panel-border)]
          bg-[var(--nextmile-card-cool)]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <div
          v-for="(metric, index) in pricingMetrics"
          :key="metric.id"
          class="
            flex min-w-0 items-center
            gap-4 px-5 py-4
            lg:justify-center lg:px-6
          "
          :class="dividerClasses[index]"
        >
          <Icon
            :name="metric.icon"
            class="
              size-8 shrink-0
              text-blue-600
            "
            aria-hidden="true"
          />

          <div class="min-w-0">
            <dt
              class="
                text-sm font-medium
                text-slate-600
              "
            >
              {{ metric.label }}
            </dt>

            <dd
              class="
                mt-0.5 text-lg font-extrabold
                leading-tight text-slate-950
              "
            >
              {{ metric.value }}
            </dd>
          </div>
        </div>
      </dl>
    </UiContainer>
  </section>
</template>
