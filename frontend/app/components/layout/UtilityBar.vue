<script setup lang="ts">
import { businessConfig } from '~/config/business';
</script>

<template>
  <div
    class="bg-[var(--nextmile-navy-950)] text-white"
    aria-label="NextMile service area and contact information"
  >
    <UiContainer>
      <div
        class="
          flex min-h-9 items-center justify-center
          py-2 text-xs
          sm:justify-between sm:text-sm
        "
      >
        <p
          class="
            hidden items-center gap-2
            text-white/85
            sm:inline-flex
          "
        >
          <Icon
            name="lucide:map-pin"
            class="size-4 shrink-0"
            aria-hidden="true"
          />

          <span>
            {{ businessConfig.utilityBarMessage }}
          </span>
        </p>

        <a
          :href="businessConfig.phone.href"
          class="
            inline-flex min-h-7 items-center gap-2
            rounded-md font-semibold text-white
            transition-colors duration-200
            hover:text-blue-200
          "
          :aria-label="`Call or text NextMile Rentals at ${businessConfig.phone.display}`"
        >
          <Icon
            name="lucide:phone"
            class="size-4 shrink-0"
            aria-hidden="true"
          />

          <span>
            Call or Text {{ businessConfig.phone.display }}
          </span>
        </a>
      </div>
    </UiContainer>
  </div>
</template>