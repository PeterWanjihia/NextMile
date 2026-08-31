<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { fleetAssistance } from '~/data/fleet';
</script>

<template>
  <section
    class="bg-white py-4 sm:py-5"
    aria-labelledby="fleet-assistance-heading"
  >
    <UiContainer>
      <div
        class="
          grid items-center gap-5
          rounded-2xl
          border border-blue-100
          bg-[var(--nextmile-surface-blue)]
          px-5 py-5
          sm:grid-cols-[auto_minmax(0,1fr)]
          sm:px-6
          lg:grid-cols-[auto_minmax(0,1fr)_auto]
          lg:gap-6 lg:px-8
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
            :name="fleetAssistance.icon"
            class="size-7"
          />
        </div>

        <div class="min-w-0">
          <h2
            id="fleet-assistance-heading"
            class="
              text-xl font-extrabold
              tracking-tight text-slate-950
              sm:text-2xl
            "
          >
            {{ fleetAssistance.heading }}
          </h2>

          <p
            class="
              mt-1.5 max-w-2xl
              text-sm leading-6
              text-slate-600
            "
          >
            {{ fleetAssistance.description }}
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
            :to="fleetAssistance.primaryAction.to"
            variant="secondary"
            size="md"
            class="w-full whitespace-nowrap"
          >
            <Icon
              name="lucide:user-round"
              class="size-4"
              aria-hidden="true"
            />

            {{ fleetAssistance.primaryAction.label }}
          </UiButton>

          <UiButton
            :href="businessConfig.phone.href"
            size="md"
            class="w-full whitespace-nowrap"
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
