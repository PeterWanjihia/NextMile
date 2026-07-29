<script setup lang="ts">
import { homePricingSummary } from '~/data/homepage';

import type {
  HomePricingMetric,
} from '~/types/homepage';

const metricDividerClasses = [
  /*
   * Item 1
   *
   * Mobile: bottom divider.
   * Tablet: bottom and right dividers.
   * Desktop: right divider only.
   */
  `
    border-b border-slate-200
    sm:border-r
    lg:border-b-0
  `,

  /*
   * Item 2
   *
   * Mobile and tablet: bottom divider.
   * Desktop: right divider only.
   */
  `
    border-b border-slate-200
    lg:border-r lg:border-b-0
  `,

  /*
   * Item 3
   *
   * Mobile: bottom divider.
   * Tablet and desktop: right divider.
   */
  `
    border-b border-slate-200
    sm:border-b-0 sm:border-r
  `,

  /*
   * Final item has no divider.
   */
  '',
] as const;

function formatMetricValue(
  metric: HomePricingMetric,
): string {
  if (metric.kind === 'money') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: metric.currency,
      maximumFractionDigits: 0,
    }).format(metric.amount);
  }

  return metric.value;
}
</script>

<template>
  <section
    id="pricing-summary"
    class="
      bg-[var(--nextmile-surface-blue)]
      py-8
      sm:py-9
      lg:py-5
    "
    aria-labelledby="home-pricing-heading"
  >
    <UiContainer>
      <div
        class="
          grid items-center gap-8
          lg:grid-cols-[minmax(0,0.72fr)_minmax(0,2fr)]
          lg:gap-10
          xl:gap-12
        "
      >
        <!-- Pricing introduction -->
        <div class="max-w-md">
          <h2
            id="home-pricing-heading"
            class="
              text-3xl font-extrabold
              leading-tight tracking-tight
              text-slate-950
              lg:text-[2rem]
            "
          >
            {{ homePricingSummary.heading }}
          </h2>

          <p
            class="
              mt-4
              text-base leading-7
              text-slate-600
            "
          >
            {{ homePricingSummary.description }}
          </p>

          <NuxtLink
            :to="homePricingSummary.detailsAction.to"
            class="
              mt-5 inline-flex items-center gap-2
              rounded-md
              text-sm font-bold
              text-blue-700
              transition-colors duration-200
              hover:text-blue-800
            "
          >
            {{ homePricingSummary.detailsAction.label }}

            <Icon
              name="lucide:arrow-right"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>

        <!-- Pricing metrics panel -->
        <div
          class="
            overflow-hidden
            rounded-2xl
            border border-[var(--nextmile-border)]
            bg-white
            shadow-[0_8px_24px_rgb(16_42_67_/_5%)]
          "
        >
          <dl
            class="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            <div
              v-for="(metric, index) in homePricingSummary.metrics"
              :key="metric.id"
              class="
                min-w-0 p-5
                sm:p-5
                lg:px-5 lg:py-4
                xl:px-6
              "
              :class="metricDividerClasses[index]"
            >
              <div
                class="
                  flex items-start gap-4
                  sm:block
                "
              >
                <Icon
                  :name="metric.icon"
                  class="
                    size-7 shrink-0
                    text-blue-600
                  "
                  aria-hidden="true"
                />

                <div class="min-w-0 sm:mt-4">
                  <dt
                    class="
                      text-sm font-medium
                      leading-5
                      text-slate-600
                    "
                  >
                    {{ metric.label }}
                  </dt>

                  <dd
                    class="
                      mt-1 flex flex-wrap
                      items-baseline gap-x-1
                    "
                  >
                    <strong
                      class="
                        text-2xl font-extrabold
                        tracking-tight
                        text-slate-950
                        xl:text-3xl
                      "
                      :class="{
                        'text-blue-700':
                          metric.kind === 'money',
                      }"
                    >
                      {{ formatMetricValue(metric) }}
                    </strong>

                    <span
                      v-if="
                        metric.kind === 'money'
                        && metric.suffix
                      "
                      class="
                        text-sm font-medium
                        text-slate-600
                      "
                    >
                      {{ metric.suffix }}
                    </span>
                  </dd>
                </div>
              </div>
            </div>
          </dl>

          <p
            class="
              border-t border-slate-200
              px-5 py-2.5
              text-center
              text-sm leading-5
              text-slate-600
              sm:px-6
            "
          >
            {{ homePricingSummary.footnote }}
          </p>
        </div>
      </div>
    </UiContainer>
  </section>
</template>