<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { homeHero } from '~/data/homepage';
</script>

<template>
  <section
    class="
      relative overflow-hidden
      border-b border-slate-200
      bg-[var(--nextmile-page)]
    "
    aria-labelledby="homepage-hero-heading"
  >
    <UiContainer>
      <div
        class="
          grid items-stretch gap-8
          py-10
          sm:py-14
          lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]
          lg:gap-0 lg:py-0
        "
      >
        <!-- Hero content -->
        <div
          class="
            relative z-20
            flex flex-col justify-center
            lg:min-h-[32rem]
            lg:py-16 lg:pr-10
            xl:min-h-[34rem] xl:pr-14
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
            {{ homeHero.eyebrow }}
          </p>

          <h1
            id="homepage-hero-heading"
            class="
              mt-4 max-w-2xl
              text-4xl font-extrabold
              leading-[1.04] tracking-[-0.035em]
              text-slate-950
              sm:text-5xl
              lg:text-[3.35rem]
              xl:text-[3.65rem]
            "
          >
            <span class="block">
              {{ homeHero.heading.primary }}
            </span>

            <span class="block text-blue-700">
              {{ homeHero.heading.accent }}
            </span>
          </h1>

          <p
            class="
              mt-6 max-w-xl
              text-base leading-7
              text-slate-600
              sm:text-lg sm:leading-8
            "
          >
            {{ homeHero.description }}
          </p>

          <!-- Hero actions -->
          <div
            class="
              mt-8 flex flex-col gap-3
              sm:flex-row sm:items-center
            "
          >
            <UiButton
              :to="homeHero.primaryAction.to"
              size="lg"
              class="
                w-full justify-center
                sm:w-auto
              "
            >
              {{ homeHero.primaryAction.label }}
            </UiButton>

            <a
              :href="businessConfig.phone.href"
              class="
                inline-flex min-h-12 w-full
                items-center justify-center gap-2
                rounded-xl border border-blue-300
                bg-white px-5
                text-sm font-bold text-blue-700
                transition-colors duration-200
                hover:border-blue-400
                hover:bg-blue-50
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-blue-600
                sm:w-auto
              "
              :aria-label="`Call NextMile Rentals at ${businessConfig.phone.display}`"
            >
              <Icon
                name="lucide:phone"
                class="size-5 shrink-0"
                aria-hidden="true"
              />

              <span>
                Call {{ businessConfig.phone.display }}
              </span>
            </a>
          </div>

          <!-- Trust points -->
          <ul
            class="
              mt-7 flex flex-wrap
              gap-x-5 gap-y-3
            "
            aria-label="NextMile service benefits"
          >
            <li
              v-for="point in homeHero.trustPoints"
              :key="point"
              class="
                inline-flex items-center gap-2
                text-sm font-semibold
                text-slate-700
              "
            >
              <Icon
                name="lucide:circle-check"
                class="size-4 shrink-0 text-blue-600"
                aria-hidden="true"
              />

              <span>
                {{ point }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Hero visual -->
        <div
          class="
            relative
            aspect-[4/3]
            min-w-0 overflow-hidden
            rounded-3xl
            bg-slate-100
            sm:aspect-[16/11]
            lg:aspect-auto
            lg:min-h-[32rem]
            lg:rounded-none
            xl:min-h-[34rem]
          "
        >
          <NuxtImg
            :src="homeHero.image.src"
            :alt="homeHero.image.alt"
            :width="homeHero.image.width"
            :height="homeHero.image.height"
            sizes="
              100vw
              sm:100vw
              lg:55vw
              xl:52vw
            "
            quality="85"
            preload
            loading="eager"
            class="
              absolute inset-0
              h-full w-full
              object-cover
            "
            :style="{
              objectPosition: homeHero.image.objectPosition,
            }"
          />

          <!-- Desktop fade joining the copy and image -->
         <div
          class="
            pointer-events-none
            absolute inset-y-0 left-0 z-[1]
            hidden w-[20%]
            bg-gradient-to-r
            from-[var(--nextmile-page)]
            via-white/20
            to-transparent
            lg:block
          "
          aria-hidden="true"
        />

          <!-- Subtle lower contrast layer -->
          <div
            class="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-1/3
              bg-gradient-to-t
              from-slate-950/20
              to-transparent
            "
            aria-hidden="true"
          />

          <!-- Availability card -->
          <article
            class="
              absolute inset-x-4 bottom-4 z-10
              rounded-2xl
              border border-white/80
              bg-white/95 p-4
              shadow-xl
              backdrop-blur
              sm:inset-x-auto
              sm:right-5 sm:w-[18rem] sm:p-5
              lg:bottom-7 lg:right-7
            "
            aria-label="Current vehicle availability"
          >
            <p
              class="
                inline-flex items-center gap-2
                text-xs font-extrabold
                uppercase tracking-[0.08em]
                text-emerald-700
              "
            >
              <span
                class="
                  inline-flex size-5 items-center
                  justify-center rounded-full
                  bg-emerald-100
                "
                aria-hidden="true"
              >
                <Icon
                  name="lucide:check"
                  class="size-3.5"
                />
              </span>

              {{ homeHero.availability.status }}
            </p>

            <h2
              class="
                mt-3 text-lg font-extrabold
                tracking-tight text-slate-950
              "
            >
              {{ homeHero.availability.title }}
            </h2>

            <p
              class="
                mt-1 text-sm leading-6
                text-slate-600
              "
            >
              {{ homeHero.availability.description }}
            </p>

            <NuxtLink
              :to="homeHero.availability.to"
              class="
                mt-4 inline-flex items-center gap-2
                rounded-md
                text-sm font-bold text-blue-700
                transition-colors duration-200
                hover:text-blue-800
              "
            >
              {{ homeHero.availability.linkLabel }}

              <Icon
                name="lucide:arrow-right"
                class="size-4"
                aria-hidden="true"
              />
            </NuxtLink>
          </article>
        </div>
      </div>
    </UiContainer>
  </section>
</template>