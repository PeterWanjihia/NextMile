<script setup lang="ts">
import type { FleetAvailabilityStatus } from '~/types/homepage';
import type { FleetCategory } from '~/types/fleet';

const { category } = defineProps<{
  category: FleetCategory;
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
    :id="category.id"
    class="
      flex h-full min-w-0 flex-col
      overflow-hidden rounded-2xl
      border border-[var(--nextmile-panel-border)]
      bg-white
      shadow-[0_8px_24px_rgb(16_42_67_/_5%)]
    "
    :aria-labelledby="`${category.id}-heading`"
  >
    <div
      class="
        relative h-52 overflow-hidden
        bg-[#f0f4fa]
        sm:h-56
      "
    >
      <span
        class="
          absolute top-4 left-4 z-10
          inline-flex items-center
          rounded-full border
          px-3 py-1
          text-[0.6875rem] font-extrabold
          uppercase tracking-[0.06em]
        "
        :class="
          availabilityClassByStatus[
            category.availability.status
          ]
        "
      >
        {{ category.availability.label }}
      </span>

      <NuxtImg
        :src="category.image.src"
        :alt="category.image.alt"
        :width="category.image.width"
        :height="category.image.height"
        sizes="100vw sm:90vw lg:45vw"
        loading="lazy"
        class="
          absolute inset-x-0 bottom-0
          h-full w-full object-contain
          object-bottom
        "
        :style="{
          objectPosition:
            category.image.objectPosition
            ?? 'center bottom',
        }"
      />
    </div>

    <div
      class="
        flex flex-1 flex-col
        px-5 pt-5 pb-6
        sm:px-6 sm:pt-6
      "
    >
      <div
        class="
          grid gap-4
          sm:grid-cols-[3rem_minmax(0,1fr)]
          sm:items-start
        "
      >
        <div
          class="
            flex size-12
            items-center justify-center
            rounded-full bg-blue-50
            text-blue-600
          "
          aria-hidden="true"
        >
          <Icon
            :name="category.icon"
            class="size-6"
          />
        </div>

        <div class="min-w-0">
          <h2
            :id="`${category.id}-heading`"
            class="
              text-xl font-extrabold
              tracking-tight text-slate-950
              sm:text-2xl
            "
          >
            {{ category.title }}
          </h2>

          <p
            class="
              mt-2 text-sm leading-6
              text-slate-600
            "
          >
            {{ category.description }}
          </p>
        </div>
      </div>

      <ul
        class="
          mt-5 grid gap-x-6 gap-y-2.5
          border-t border-slate-200
          pt-5
          sm:grid-cols-2
        "
        :aria-label="`${category.title} features`"
      >
        <li
          v-for="feature in category.features"
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

      <div class="mt-auto pt-5">
        <dl
          class="
            grid grid-cols-2
            overflow-hidden rounded-xl
            border border-blue-100
            bg-blue-50/60
          "
        >
          <div
            class="
              border-r border-blue-100
              px-4 py-3
              sm:px-5
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

            <dd class="mt-0.5">
              <strong
                class="
                  text-2xl font-extrabold
                  tracking-tight text-blue-700
                "
              >
                {{
                  formatMoney(
                    category.price.amount,
                    category.price.currency,
                  )
                }}
              </strong>

              <span
                class="
                  ml-1 text-xs font-semibold
                  text-slate-700
                "
              >
                / {{ category.price.cadence }}
              </span>
            </dd>
          </div>

          <div class="px-4 py-3 sm:px-5">
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
                mt-0.5 text-2xl
                font-extrabold tracking-tight
                text-slate-950
              "
            >
              {{
                formatMoney(
                  category.deposit.amount,
                  category.deposit.currency,
                )
              }}
            </dd>
          </div>
        </dl>

        <p
          class="
            mt-4 text-center
            text-sm font-semibold
            text-slate-700
          "
        >
          Availability:

          <span
            :class="
              category.availability.status === 'available'
                ? 'text-emerald-700'
                : 'text-orange-700'
            "
          >
            {{ category.availability.label }}
          </span>
        </p>

        <div
          class="
            grid gap-3 pt-5
            sm:grid-cols-2
          "
        >
          <UiButton
            :to="category.primaryAction.to"
            size="md"
            class="w-full"
          >
            {{ category.primaryAction.label }}
          </UiButton>

          <UiButton
            :to="category.secondaryAction.to"
            variant="secondary"
            size="md"
            class="w-full"
          >
            {{ category.secondaryAction.label }}
          </UiButton>
        </div>
      </div>
    </div>
  </article>
</template>
