<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { homeEligibilityOverview } from '~/data/homepage';

const requirements =
  homeEligibilityOverview.requirements;

const assistance =
  homeEligibilityOverview.assistance;
</script>

<template>
  <section
    id="eligibility-overview"
    class="
      bg-white
      pt-0 pb-4
      sm:pb-5
      lg:pb-4
    "
    aria-labelledby="home-eligibility-heading"
  >
    <UiContainer>
      <h2
        id="home-eligibility-heading"
        class="sr-only"
      >
        {{ homeEligibilityOverview.sectionHeading }}
      </h2>

      <!--
        Uses the complete UiContainer width.

        Desktop proportions:
        Requirements: 42%
        Assistance: 58%
      -->
      <div
        class="
          grid w-full items-stretch gap-4
          lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]
        "
      >
        <!-- Requirements panel -->
        <article
          class="
            h-full
            rounded-lg
            border border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            px-5 py-4
            shadow-[0_1px_2px_rgb(16_42_67_/_3%)]
            sm:px-6 sm:py-5
          "
          aria-labelledby="basic-requirements-heading"
        >
          <h3
            id="basic-requirements-heading"
            class="
              text-xl font-extrabold
              leading-tight tracking-tight
              text-slate-950
            "
          >
            {{ requirements.heading }}
          </h3>

          <ul
            class="mt-3 space-y-1.5"
            aria-label="Basic driver requirements"
          >
            <li
              v-for="requirement in requirements.items"
              :key="requirement.id"
              class="
                flex items-start gap-2.5
                text-[0.9375rem] leading-5
                text-slate-700
              "
            >
              <Icon
                name="lucide:circle-check"
                class="
                  mt-0.5 size-4 shrink-0
                  text-emerald-600
                "
                aria-hidden="true"
              />

              <span>
                {{ requirement.label }}
              </span>
            </li>
          </ul>

          <NuxtLink
            :to="requirements.detailsAction.to"
            class="
              mt-3 inline-flex
              items-center gap-2
              rounded-md
              text-sm font-bold
              text-blue-700
              transition-colors duration-200
              hover:text-blue-800
            "
          >
            {{ requirements.detailsAction.label }}

            <Icon
              name="lucide:arrow-right"
              class="size-4 shrink-0"
              aria-hidden="true"
            />
          </NuxtLink>
        </article>

        <!-- Eligibility assistance panel -->
        <article
          class="
            h-full overflow-hidden
            rounded-lg
            border border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-surface-blue)]
            px-5 py-4
            shadow-[0_1px_2px_rgb(16_42_67_/_3%)]
            sm:px-6 sm:py-5
          "
          aria-labelledby="eligibility-assistance-heading"
        >
          <div
            class="
              grid h-full items-center gap-5
              md:grid-cols-[minmax(0,1fr)_11rem]
              lg:grid-cols-[minmax(0,1fr)_12rem]
            "
          >
            <!-- Copy and actions -->
            <div class="min-w-0">
              <h3
                id="eligibility-assistance-heading"
                class="
                  text-xl font-extrabold
                  leading-tight tracking-tight
                  text-slate-950
                "
              >
                {{ assistance.heading }}
              </h3>

              <p
                class="
                  mt-2 max-w-[32rem]
                  text-[0.9375rem] leading-5
                  text-slate-700
                "
              >
                {{ assistance.description }}
              </p>

              <div
                class="
                  mt-4 flex flex-col gap-3
                  sm:flex-row sm:flex-wrap
                  lg:flex-nowrap
                "
              >
                <UiButton
                  :to="assistance.primaryAction.to"
                  size="sm"
                  class="
                    w-full
                    whitespace-nowrap
                    sm:w-auto
                  "
                >
                  {{ assistance.primaryAction.label }}
                </UiButton>

                <UiButton
                  :href="businessConfig.phone.href"
                  variant="secondary"
                  size="sm"
                  class="
                    w-full
                    whitespace-nowrap
                    sm:w-auto
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

            <!-- Decorative illustration -->
            <div
              class="
                flex items-center justify-center
                self-center
                md:justify-end
              "
              aria-hidden="true"
            >
              <NuxtImg
                v-if="assistance.illustration"
                :src="assistance.illustration.src"
                alt=""
                :width="assistance.illustration.width"
                :height="assistance.illustration.height"
                sizes="
                  160px
                  md:176px
                  lg:192px
                "
                loading="lazy"
                class="
                  h-auto max-h-[10.5rem]
                  w-full object-contain
                "
                :style="{
                  objectPosition:
                    assistance.illustration.objectPosition
                    ?? 'center',
                }"
              />

              <!-- Development fallback -->
              <div
                v-else
                class="
                  flex size-36
                  items-center justify-center
                "
              >
                <Icon
                  name="lucide:image"
                  class="
                    size-14
                    text-slate-300
                  "
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </UiContainer>
  </section>
</template>