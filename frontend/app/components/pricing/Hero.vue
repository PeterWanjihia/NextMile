<script setup lang="ts">
import { pricingHero } from '~/data/pricing';
</script>

<template>
  <section
    class="
      overflow-hidden
      border-b border-slate-200
      bg-[var(--nextmile-page)]
    "
    aria-labelledby="pricing-hero-heading"
  >
    <UiContainer>
      <div
        class="
          grid items-stretch
          lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
        "
      >
        <div
          class="
            relative z-10 py-10
            sm:py-12
            lg:flex lg:min-h-[19rem]
            lg:flex-col lg:justify-center
            lg:py-10 lg:pr-8
          "
        >
          <h1
            id="pricing-hero-heading"
            class="
              max-w-xl text-4xl
              font-extrabold leading-[1.05]
              tracking-[-0.035em]
              text-slate-950
              sm:text-5xl
              lg:text-[3.25rem]
            "
          >
            <span class="block">
              {{ pricingHero.heading.primary }}
            </span>

            <span class="block">
              {{ pricingHero.heading.accent }}
            </span>
          </h1>

          <p
            class="
              mt-5 max-w-xl
              text-base leading-7
              text-slate-700
              sm:text-lg sm:leading-8
            "
          >
            {{ pricingHero.description }}
          </p>

          <div
            class="
              mt-6 grid max-w-lg gap-3
              sm:grid-cols-2
            "
          >
            <UiButton
              :to="pricingHero.primaryAction.to"
              class="w-full"
            >
              {{ pricingHero.primaryAction.label }}
            </UiButton>

            <UiButton
              :to="pricingHero.secondaryAction.to"
              variant="secondary"
              class="w-full"
            >
              {{ pricingHero.secondaryAction.label }}
            </UiButton>
          </div>
        </div>

        <div
          class="
            relative -mx-5
            aspect-[559/333] overflow-hidden
            bg-blue-50
            sm:-mx-8
            lg:mx-0 lg:aspect-auto
            lg:min-h-[19rem]
          "
        >
          <NuxtImg
            :src="pricingHero.image.src"
            :alt="pricingHero.image.alt"
            :width="pricingHero.image.width"
            :height="pricingHero.image.height"
            sizes="100vw lg:60vw"
            quality="90"
            preload
            loading="eager"
            class="
              absolute inset-0
              size-full object-cover
            "
            :style="{
              objectPosition: pricingHero.image.objectPosition,
            }"
          />
        </div>
      </div>
    </UiContainer>
  </section>
</template>
