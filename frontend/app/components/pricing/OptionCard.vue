<script setup lang="ts">
import type { FleetAvailabilityStatus } from '~/types/homepage';
import type { FleetCategory } from '~/types/fleet';

const { option } = defineProps<{
  option: FleetCategory;
}>();

function formatMoney(
  amount: number,
  currency: 'USD',
): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

const availabilityClassByStatus = {
  available:
    'border-emerald-200 bg-emerald-50 text-emerald-700',
  limited:
    'border-amber-200 bg-amber-50 text-amber-700',
  waitlist:
    'border-orange-200 bg-orange-50 text-orange-700',
  unconfirmed:
    'border-slate-200 bg-slate-50 text-slate-700',
} satisfies Record<FleetAvailabilityStatus, string>;
</script>

<template>
  <article
    class="
      flex h-full min-w-0 flex-col
      overflow-hidden rounded-xl
      border border-[var(--nextmile-panel-border)]
      bg-white
      shadow-[0_6px_20px_rgb(16_42_67_/_4%)]
    "
    :aria-labelledby="`pricing-${option.id}-heading`"
  >
    <div class="px-5 pt-5 sm:px-6">
      <span
        class="
          inline-flex items-center
          rounded-full border
          px-2.5 py-1
          text-[0.6875rem] font-extrabold
          uppercase tracking-[0.05em]
        "
        :class="
          availabilityClassByStatus[
            option.availability.status
          ]
        "
      >
        {{ option.availability.label }}
      </span>

      <div
        class="
          mt-3 grid min-w-0 gap-4
          sm:grid-cols-[minmax(0,1.25fr)_minmax(10rem,0.75fr)]
          sm:items-center
        "
      >
        <div class="min-w-0">
          <h2
            :id="`pricing-${option.id}-heading`"
            class="
              text-xl font-extrabold
              leading-tight tracking-tight
              text-slate-950
              sm:text-2xl
              lg:text-lg
              xl:text-[1.35rem]
            "
          >
            {{ option.title }}
          </h2>

          <p
            class="
              mt-2 text-sm leading-6
              text-slate-600
            "
          >
            {{ option.description }}
          </p>

          <dl
            class="
              mt-4 grid
              grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)]
            "
          >
            <div
              class="
                border-r border-slate-200
                pr-4
              "
            >
              <dt
                class="
                  text-xs font-medium
                  text-slate-600
                "
              >
                From
              </dt>

              <dd
                class="
                  mt-0.5 flex
                  items-baseline whitespace-nowrap
                "
              >
                <strong
                  class="
                    text-3xl font-extrabold
                    tracking-tight text-blue-700
                    lg:text-2xl
                    xl:text-3xl
                  "
                >
                  {{
                    formatMoney(
                      option.price.amount,
                      option.price.currency,
                    )
                  }}
                </strong>

                <span
                  class="
                    ml-1 text-xs font-semibold
                    text-slate-700
                  "
                >
                  / {{ option.price.cadence }}
                </span>
              </dd>
            </div>

            <div class="pl-4">
              <dt
                class="
                  text-xs font-medium
                  text-slate-600
                "
              >
                Deposit
              </dt>

              <dd
                class="
                  mt-0.5 text-3xl
                  font-extrabold tracking-tight
                  text-slate-950
                  lg:text-2xl
                  xl:text-3xl
                "
              >
                {{
                  formatMoney(
                    option.deposit.amount,
                    option.deposit.currency,
                  )
                }}
              </dd>
            </div>
          </dl>
        </div>

        <div
          class="
            relative aspect-[8/5]
            min-w-0 overflow-hidden
            rounded-lg bg-[#f5f7fa]
          "
        >
          <NuxtImg
            :src="option.image.src"
            :alt="option.image.alt"
            :width="option.image.width"
            :height="option.image.height"
            sizes="100vw sm:45vw lg:25vw"
            loading="lazy"
            class="
              absolute inset-0
              size-full object-contain
              object-center
            "
            :style="{
              objectPosition:
                option.image.objectPosition
                ?? 'center',
            }"
          />
        </div>
      </div>
    </div>

    <div class="mt-auto px-5 pt-5 pb-5 sm:px-6">
      <ul
        class="
          grid gap-x-6 gap-y-2.5
          sm:grid-cols-2
        "
        :aria-label="`${option.title} features`"
      >
        <li
          v-for="feature in option.features"
          :key="feature"
          class="
            flex items-start gap-2
            text-sm leading-5
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

          <span>{{ feature }}</span>
        </li>
      </ul>

      <div
        class="
          mt-5 grid gap-3
          sm:grid-cols-2
        "
      >
        <UiButton
          :to="option.primaryAction.to"
          size="sm"
          class="w-full"
        >
          {{ option.primaryAction.label }}
        </UiButton>

        <UiButton
          :to="option.secondaryAction.to"
          variant="secondary"
          size="sm"
          class="w-full"
        >
          {{ option.secondaryAction.label }}
        </UiButton>
      </div>
    </div>
  </article>
</template>
