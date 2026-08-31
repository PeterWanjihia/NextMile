<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { requirementsHero } from '~/data/requirements';
</script>

<template>
  <section
    class="
      relative overflow-hidden
      border-b border-slate-200
      bg-[var(--nextmile-page)]
    "
    aria-labelledby="requirements-hero-heading"
  >
    <div
      class="
        absolute inset-y-0 right-0
        hidden w-[65%] overflow-hidden
        lg:block
      "
      style="
        -webkit-mask-image: linear-gradient(
          to right,
          transparent 0%,
          transparent 8%,
          rgba(0, 0, 0, 0.12) 22%,
          rgba(0, 0, 0, 0.55) 38%,
          rgba(0, 0, 0, 0.9) 50%,
          black 60%,
          black 100%
        );
        mask-image: linear-gradient(
          to right,
          transparent 0%,
          transparent 8%,
          rgba(0, 0, 0, 0.12) 22%,
          rgba(0, 0, 0, 0.55) 38%,
          rgba(0, 0, 0, 0.9) 50%,
          black 60%,
          black 100%
        );
      "
      aria-hidden="true"
    >
      <NuxtImg
        :src="requirementsHero.image.src"
        alt=""
        :width="requirementsHero.image.width"
        :height="requirementsHero.image.height"
        sizes="100vw lg:66vw"
        quality="90"
        preload
        loading="eager"
        class="
          absolute inset-0
          size-full object-cover
        "
        :style="{
          objectPosition:
            requirementsHero.image.objectPosition,
        }"
      />
    </div>

    <UiContainer class="relative">
      <div
        class="
          relative z-10 py-10
          sm:py-12
          lg:flex lg:min-h-[20rem]
          lg:flex-col lg:justify-center
          lg:py-8
        "
      >
        <div class="max-w-[35rem]">
          <h1
            id="requirements-hero-heading"
            class="
              text-4xl font-extrabold
              leading-[1.04] tracking-[-0.035em]
              text-slate-950
              sm:text-5xl
              lg:text-[3.25rem]
            "
          >
            <span>
              {{ requirementsHero.heading.beforeAccent }}
            </span>

            <span class="text-blue-700">
              {{ requirementsHero.heading.accent }}
            </span>

            <span class="block">
              {{ requirementsHero.heading.afterAccent }}
            </span>
          </h1>

          <p
            class="
              mt-4 max-w-[34rem]
              text-base leading-7
              text-slate-700
              sm:text-lg sm:leading-8
            "
          >
            {{ requirementsHero.description }}
          </p>

          <div
            class="
              mt-5 grid max-w-lg gap-3
              sm:grid-cols-2
            "
          >
            <UiButton
              :to="requirementsHero.primaryAction.to"
              class="w-full"
            >
              {{ requirementsHero.primaryAction.label }}
            </UiButton>

            <UiButton
              :href="businessConfig.phone.href"
              variant="secondary"
              class="
                w-full border-blue-300
                text-blue-700
              "
              :aria-label="
                `Call NextMile Rentals at ${businessConfig.phone.display}`
              "
            >
              <Icon
                name="lucide:phone"
                class="size-4"
                aria-hidden="true"
              />

              Call {{ businessConfig.phone.display }}
            </UiButton>
          </div>
        </div>

        <ul
          class="
            mt-7 grid max-w-3xl gap-4
            sm:grid-cols-2
            lg:max-w-[34rem]
            lg:grid-cols-4 lg:gap-4
            xl:max-w-[40rem]
          "
          aria-label="Application support benefits"
        >
          <li
            v-for="item in requirementsHero.trustItems"
            :key="item.id"
            class="
              flex min-w-0
              items-start gap-2.5
            "
          >
            <Icon
              :name="item.icon"
              class="
                mt-0.5 size-5 shrink-0
                text-blue-600
              "
              aria-hidden="true"
            />

            <div class="min-w-0">
              <strong
                class="
                  block text-xs font-extrabold
                  leading-4 text-slate-950
                "
              >
                {{ item.title }}
              </strong>

              <span
                class="
                  mt-1 block text-xs
                  leading-4 text-slate-600
                "
              >
                {{ item.description }}
              </span>
            </div>
          </li>
        </ul>
      </div>

      <div
        class="
          relative -mx-5
          aspect-[4/3] overflow-hidden
          bg-blue-50
          sm:-mx-8 sm:aspect-[16/9]
          lg:hidden
        "
      >
        <NuxtImg
          :src="requirementsHero.image.src"
          :alt="requirementsHero.image.alt"
          :width="requirementsHero.image.width"
          :height="requirementsHero.image.height"
          sizes="100vw lg:66vw"
          quality="90"
          loading="eager"
          class="
            absolute inset-0
            size-full object-cover
          "
          :style="{
            objectPosition:
              requirementsHero.image.objectPosition,
          }"
        />

        <div
          class="
            pointer-events-none
            absolute inset-x-0 top-0 h-16
            bg-gradient-to-b
            from-[var(--nextmile-page)]
            to-transparent
          "
          aria-hidden="true"
        />
      </div>
    </UiContainer>
  </section>
</template>
