<script setup lang="ts">
import { fleetBenefits } from '~/data/fleet';

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
    class="
      bg-white
      pt-2 pb-10
      sm:pt-3 sm:pb-12
    "
    aria-labelledby="fleet-benefits-heading"
  >
    <UiContainer>
      <h2
        id="fleet-benefits-heading"
        class="sr-only"
      >
        What is included with a NextMile rental
      </h2>

      <ul
        class="
          grid overflow-hidden
          rounded-2xl
          border border-[var(--nextmile-panel-border)]
          bg-[var(--nextmile-card-cool)]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <li
          v-for="(benefit, index) in fleetBenefits"
          :key="benefit.id"
          class="
            grid min-w-0
            grid-cols-[auto_minmax(0,1fr)]
            items-start gap-3
            px-5 py-5
          "
          :class="dividerClasses[index]"
        >
          <div
            class="
              flex size-10 shrink-0
              items-center justify-center
              text-blue-600
            "
            aria-hidden="true"
          >
            <Icon
              :name="benefit.icon"
              class="size-7"
            />
          </div>

          <div class="min-w-0">
            <h3
              class="
                text-sm font-extrabold
                text-slate-950
              "
            >
              {{ benefit.title }}
            </h3>

            <p
              class="
                mt-1 text-xs leading-5
                text-slate-600
              "
            >
              {{ benefit.description }}
            </p>
          </div>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
