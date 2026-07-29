<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { homeFinalCta } from '~/data/homepage';
</script>

<template>
  <section
    class="
      bg-[linear-gradient(105deg,#102a43_0%,#0c2741_58%,#09223a_100%)]
      text-white
    "
    aria-labelledby="home-final-cta-heading"
  >
    <UiContainer>
      <div
        class="
          grid gap-6
          border-b border-white/15
          py-6
          lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]
          lg:items-center
          lg:gap-10
        "
      >
        <!-- Copy -->
        <div>
          <h2
            id="home-final-cta-heading"
            class="
              text-2xl font-extrabold
              leading-tight tracking-tight
              text-white
              sm:text-[1.7rem]
            "
          >
            {{ homeFinalCta.heading }}
          </h2>

          <p
            class="
              mt-2 max-w-[34rem]
              text-sm leading-5
              text-slate-200
              sm:leading-6
            "
          >
            {{ homeFinalCta.description }}
          </p>
        </div>

        <!-- Actions and trust signals -->
        <div class="min-w-0">
          <div
            class="
              grid gap-3
              sm:grid-cols-2
            "
          >
            <UiButton
              :to="homeFinalCta.primaryAction.to"
              size="md"
              class="
                min-h-10 w-full
                justify-center
              "
            >
              {{ homeFinalCta.primaryAction.label }}
            </UiButton>

            <a
              :href="businessConfig.phone.href"
              class="
                inline-flex min-h-10 w-full
                items-center justify-center gap-2
                rounded-lg
                border border-white/70
                bg-transparent
                px-5 py-2.5
                text-sm font-bold
                text-white
                transition-colors duration-200
                hover:border-white
                hover:bg-white/10
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#102a43]
              "
              :aria-label="
                `Call NextMile Rentals at ${businessConfig.phone.display}`
              "
            >
              <Icon
                name="lucide:phone"
                class="size-4 shrink-0"
                aria-hidden="true"
              />

              <span>
                Call {{ businessConfig.phone.display }}
              </span>
            </a>
          </div>

          <ul
            class="
              mt-3 flex flex-col
              gap-2
              text-xs font-semibold
              text-slate-200
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:justify-center
              sm:gap-x-5
              sm:gap-y-2
              lg:text-sm
            "
            aria-label="Application benefits"
          >
            <li
              v-for="item in homeFinalCta.trustItems"
              :key="item.id"
              class="flex items-center gap-2"
            >
              <Icon
                :name="item.icon"
                class="
                  size-4 shrink-0
                  text-slate-300
                "
                aria-hidden="true"
              />

              <span>
                {{ item.label }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </UiContainer>
  </section>
</template>