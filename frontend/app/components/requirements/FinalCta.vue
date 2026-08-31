<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { requirementsFinalCta } from '~/data/requirements';
</script>

<template>
  <section
    class="
      bg-white pt-1 pb-3
      sm:pt-2 sm:pb-4
    "
    aria-labelledby="requirements-final-cta-heading"
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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="size-9"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle
              cx="12"
              cy="12"
              r="9"
            />

            <circle
              cx="12"
              cy="12"
              r="2.25"
            />

            <path d="M3.5 10.5h17" />

            <path d="M12 14.25V21" />

            <path d="m12 14.25-4.6-4.7" />

            <path d="m12 14.25 4.6-4.7" />
          </svg>
        </div>

        <div class="min-w-0">
          <h2
            id="requirements-final-cta-heading"
            class="
              text-2xl font-extrabold
              tracking-tight text-slate-950
            "
          >
            {{ requirementsFinalCta.heading }}
          </h2>

          <p
            class="
              mt-1.5 text-sm leading-6
              text-slate-600
            "
          >
            {{ requirementsFinalCta.description }}
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
            :to="requirementsFinalCta.primaryAction.to"
            class="w-full whitespace-nowrap"
          >
            {{ requirementsFinalCta.primaryAction.label }}
          </UiButton>

          <UiButton
            :href="businessConfig.phone.href"
            variant="secondary"
            class="
              w-full whitespace-nowrap
              border-blue-300 text-blue-700
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
    </UiContainer>
  </section>
</template>
