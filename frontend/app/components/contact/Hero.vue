<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { contactHero } from '~/data/contact';
</script>

<template>
  <section
    class="
      relative overflow-hidden
      border-b border-slate-200
      bg-[var(--nextmile-page)]
    "
    aria-labelledby="contact-hero-heading"
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
        :src="contactHero.image.src"
        alt=""
        :width="contactHero.image.width"
        :height="contactHero.image.height"
        sizes="100vw lg:65vw"
        quality="90"
        preload
        loading="eager"
        class="
          absolute inset-0
          size-full object-cover
        "
        :style="{
          objectPosition: contactHero.image.objectPosition,
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
          lg:py-9
        "
      >
        <div class="max-w-[35rem]">
          <p
            class="
              text-xs font-extrabold
              uppercase tracking-[0.08em]
              text-blue-700
              sm:text-sm
            "
          >
            {{ contactHero.eyebrow }}
          </p>

          <h1
            id="contact-hero-heading"
            class="
              mt-4 text-4xl font-extrabold
              leading-[1.04] tracking-[-0.035em]
              text-slate-950
              sm:text-5xl
              lg:text-[3.25rem]
            "
          >
            <span class="block">
              {{ contactHero.heading.primary }}
            </span>

            <span class="block">
              You Get

              <span class="text-blue-700">
                on the Road
              </span>
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
            {{ contactHero.description }}
          </p>

          <div
            class="
              mt-6 grid max-w-lg gap-3
              sm:grid-cols-2
            "
          >
            <UiButton
              :href="businessConfig.phone.href"
              class="w-full"
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

            <UiButton
              :to="contactHero.secondaryAction.to"
              variant="secondary"
              class="
                w-full border-blue-300
                text-blue-700
              "
            >
              <Icon
                name="lucide:send"
                class="size-4"
                aria-hidden="true"
              />

              {{ contactHero.secondaryAction.label }}
            </UiButton>
          </div>
        </div>
      </div>

      <div
        class="
          relative -mx-5
          aspect-[559/333] overflow-hidden
          bg-blue-50
          sm:-mx-8
          lg:hidden
        "
      >
        <NuxtImg
          :src="contactHero.image.src"
          :alt="contactHero.image.alt"
          :width="contactHero.image.width"
          :height="contactHero.image.height"
          sizes="100vw lg:65vw"
          quality="90"
          loading="eager"
          class="
            absolute inset-0
            size-full object-cover
          "
          :style="{
            objectPosition: contactHero.image.objectPosition,
          }"
        />

        <div
          class="
            pointer-events-none
            absolute inset-x-0 top-0 h-14
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
