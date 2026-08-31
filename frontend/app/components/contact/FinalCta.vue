<script setup lang="ts">
import { contactFinalCta } from '~/data/contact';
</script>

<template>
  <section
    class="
      bg-white pt-1 pb-3
      sm:pt-2 sm:pb-4
    "
    aria-labelledby="contact-final-cta-heading"
  >
    <UiContainer>
      <div
        class="
          grid items-center gap-5
          rounded-xl border border-blue-100
          bg-[var(--nextmile-surface-blue)]
          px-5 py-5
          sm:grid-cols-[auto_minmax(0,1fr)]
          sm:px-6
          lg:grid-cols-[auto_minmax(0,1fr)_minmax(27rem,0.85fr)]
          lg:gap-6 lg:px-7
        "
      >
        <div
          class="
            flex size-14 shrink-0
            items-center justify-center
            rounded-full bg-blue-100
            text-blue-600
          "
          aria-hidden="true"
        >
          <Icon
            :name="contactFinalCta.icon"
            class="size-8"
          />
        </div>

        <div class="min-w-0">
          <h2
            id="contact-final-cta-heading"
            class="
              text-2xl font-extrabold
              tracking-tight text-slate-950
            "
          >
            {{ contactFinalCta.heading }}
          </h2>

          <p
            class="
              mt-1.5 text-sm leading-6
              text-slate-600
            "
          >
            {{ contactFinalCta.description }}
          </p>
        </div>

        <div
          class="
            grid gap-3
            sm:col-span-2 sm:grid-cols-2
            lg:col-span-1
          "
        >
          <UiButton
            :to="contactFinalCta.availabilityAction.to"
            variant="secondary"
            class="
              w-full whitespace-nowrap
              border-blue-300 text-blue-700
            "
          >
            <Icon
              name="lucide:car-front"
              class="size-4"
              aria-hidden="true"
            />

            {{ contactFinalCta.availabilityAction.label }}
          </UiButton>

          <UiButton
            :to="contactFinalCta.applyAction.to"
            class="w-full whitespace-nowrap"
          >
            <Icon
              name="lucide:car-front"
              class="size-4"
              aria-hidden="true"
            />

            {{ contactFinalCta.applyAction.label }}

            <Icon
              name="lucide:arrow-right"
              class="size-4"
              aria-hidden="true"
            />
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
