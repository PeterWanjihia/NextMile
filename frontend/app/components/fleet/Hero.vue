<script setup lang="ts">
import { fleetHero } from '~/data/fleet';
</script>

<template>
  <section
    class="
      overflow-hidden
      border-b border-slate-200
      bg-[var(--nextmile-page)]
    "
    aria-labelledby="fleet-hero-heading"
  >
    <UiContainer>
      <div
        class="
          grid items-stretch
          xl:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)]
        "
      >
        <div
          class="
            relative z-20
            py-10
            sm:py-12
            xl:flex xl:min-h-[25rem]
            xl:flex-col xl:justify-center
            xl:py-14 xl:pr-6
          "
        >
          <p
            class="
              text-xs font-extrabold
              uppercase tracking-[0.12em]
              text-blue-700
              sm:text-sm
            "
          >
            {{ fleetHero.eyebrow }}
          </p>

          <h1
            id="fleet-hero-heading"
            class="
              mt-4 max-w-xl
              text-4xl font-extrabold
              leading-[1.05] tracking-[-0.035em]
              text-slate-950
              sm:text-5xl
              lg:max-w-[39rem]
              lg:text-[2.8rem]
            "
          >
            <span class="block">
              {{ fleetHero.heading.primary }}
            </span>

            <span class="block text-blue-700">
              {{ fleetHero.heading.accent }}
            </span>
          </h1>

          <p
            class="
              mt-5 max-w-xl
              text-base leading-7
              text-slate-600
              sm:text-lg sm:leading-8
            "
          >
            {{ fleetHero.description }}
          </p>

          <ul
            class="
              mt-7 grid gap-4
              sm:grid-cols-3
              xl:max-w-2xl
            "
            aria-label="Fleet service benefits"
          >
            <li
              v-for="item in fleetHero.trustItems"
              :key="item.id"
              class="flex min-w-0 items-start gap-3"
            >
              <span
                class="
                  flex size-9 shrink-0
                  items-center justify-center
                  rounded-full bg-blue-50
                  text-blue-600
                "
                aria-hidden="true"
              >
                <Icon
                  :name="item.icon"
                  class="size-5"
                />
              </span>

              <span class="min-w-0">
                <strong
                  class="
                    block text-xs font-bold
                    leading-4 text-slate-950
                  "
                >
                  {{ item.title }}
                </strong>

                <span
                  class="
                    mt-1 block text-xs
                    leading-4 text-slate-500
                  "
                >
                  {{ item.description }}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <div
          class="
            relative -mx-5
            aspect-[559/333] overflow-hidden
            bg-blue-50
            sm:-mx-8
            xl:mx-0 xl:aspect-auto
            xl:min-h-[25rem]
          "
        >
          <NuxtImg
            :src="fleetHero.image.src"
            :alt="fleetHero.image.alt"
            :width="fleetHero.image.width"
            :height="fleetHero.image.height"
            sizes="100vw xl:60vw"
            quality="90"
            preload
            loading="eager"
            class="
              absolute inset-0
              size-full object-cover
            "
            :style="{
              objectPosition: fleetHero.image.objectPosition,
            }"
          />
        </div>
      </div>
    </UiContainer>
  </section>
</template>
