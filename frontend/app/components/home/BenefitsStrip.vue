<script setup lang="ts">
import { homeBenefits } from '~/data/homepage';

const dividerClasses = [
  /*
   * Mobile: bottom border.
   * Tablet: bottom + right border.
   * Desktop: right border only.
   */
  `
    border-b border-slate-200
    sm:border-r
    lg:border-b-0
  `,

  /*
   * Mobile and tablet: bottom border.
   * Desktop: right border only.
   */
  `
    border-b border-slate-200
    lg:border-b-0 lg:border-r
  `,

  /*
   * Mobile: bottom border.
   * Tablet and desktop: right border.
   */
  `
    border-b border-slate-200
    sm:border-b-0 sm:border-r
  `,

  /*
   * Last item has no divider.
   */
  '',
] as const;
</script>

<template>
    <section
        class="
            bg-[var(--nextmile-surface-subtle)]
            px-0 pt-4 pb-0
            sm:pt-5 sm:pb-0
            lg:pt-4 lg:pb-0
        "
        aria-labelledby="home-benefits-heading"
    >
    <UiContainer>
      <h2
        id="home-benefits-heading"
        class="sr-only"
      >
        {{ homeBenefits.accessibleHeading }}
      </h2>

      <ul
        class="
          grid overflow-hidden
          rounded-2xl
          border border-slate-200
          bg-white
          shadow-[var(--nextmile-shadow-card)]
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <li
          v-for="(benefit, index) in homeBenefits.items"
          :key="benefit.id"
          class="
            grid min-w-0
            grid-cols-[auto_minmax(0,1fr)]
            items-start gap-4
            p-5
            sm:p-6
            lg:p-5
            xl:p-6
          "
          :class="dividerClasses[index]"
        >
          <div
            class="
              flex size-12 shrink-0
              items-center justify-center
              text-blue-600
            "
            aria-hidden="true"
          >
            <Icon
              :name="benefit.icon"
              class="size-8"
            />
          </div>

          <div class="min-w-0">
            <h3
              class="
                text-base font-extrabold
                tracking-tight
                text-slate-950
              "
            >
              {{ benefit.title }}
            </h3>

            <p
              class="
                mt-1
                text-sm leading-6
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