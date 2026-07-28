<script setup lang="ts">
import { businessConfig } from '~/config/business';
</script>

<template>
  <header
    class="
      sticky top-0 z-40
      border-b border-slate-200
      bg-white/95
      backdrop-blur
    "
  >
    <UiContainer>
      <div
        class="
          flex min-h-[4.5rem] items-center justify-between
          gap-4
        "
      >
        <!-- Brand -->
        <NuxtLink
          to="/"
          class="
            inline-flex shrink-0 items-center
            rounded-md
          "
          :aria-label="`${businessConfig.brandName} homepage`"
        >
          <NuxtImg
            src="/images/brand/nextmile-logo-light.png"
            alt=""
            width="360"
            height="116"
            class="
              h-auto w-[120px] object-contain
              sm:w-[150px]
              md:w-[165px]
            "
            aria-hidden="true"
          />
        </NuxtLink>

        <!-- Desktop/tablet support details -->
        <div
          class="
            hidden items-center gap-3
            sm:flex
          "
        >
          <div class="text-right">
            <p
              class="
                text-xs font-medium
                text-slate-500
              "
            >
              Need help?
            </p>

            <a
              :href="businessConfig.phone.href"
              class="
                mt-0.5 inline-flex items-center gap-2
                rounded-md
                text-sm font-bold text-blue-700
                transition-colors duration-200
                hover:text-blue-800
              "
              :aria-label="`Call NextMile Rentals at ${businessConfig.phone.display}`"
            >
              <Icon
                name="lucide:phone"
                class="size-4"
                aria-hidden="true"
              />

              <span>
                {{ businessConfig.phone.display }}
              </span>
            </a>
          </div>
        </div>

        <!-- Mobile phone action -->
        <a
          :href="businessConfig.phone.href"
          class="
            inline-flex size-11 items-center justify-center
            rounded-xl border border-blue-200
            bg-blue-50 text-blue-700
            transition-colors duration-200
            hover:border-blue-300
            hover:bg-blue-100
            sm:hidden
          "
          :aria-label="`Call NextMile Rentals at ${businessConfig.phone.display}`"
        >
          <Icon
            name="lucide:phone"
            class="size-5"
            aria-hidden="true"
          />
        </a>
      </div>
    </UiContainer>
  </header>
</template>