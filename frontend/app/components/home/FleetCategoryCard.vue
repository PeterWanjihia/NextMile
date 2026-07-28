<script setup lang="ts">
import type {
  FleetAvailabilityStatus,
  HomeFleetCategory,
} from '~/types/homepage';

const { category } = defineProps<{
  category: HomeFleetCategory;
}>();

const formattedPrice = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: category.price.currency,
    maximumFractionDigits: 0,
  }).format(category.price.amount);
});

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
      overflow-hidden
      rounded-[1.125rem]
      border border-[var(--nextmile-border)]
      bg-white
      shadow-[0_8px_24px_rgb(16_42_67_/_5%)]
    "
  >
    <!-- Vehicle image stage -->
    <div
      class="
        relative flex h-48
        items-end justify-center
        overflow-hidden
        bg-[#f0f4fa]
        from-blue-50
        via-blue-50/70
        to-white
        sm:h-44
        lg:h-40
        xl:h-44
      "
    >
      <NuxtImg
        v-if="category.image"
        :src="category.image.src"
        :alt="category.image.alt"
        :width="category.image.width"
        :height="category.image.height"
        sizes="
          100vw
          sm:90vw
          lg:42vw
          xl:36vw
        "
        loading="lazy"
        class="
          absolute bottom-0 left-1/2
          h-[100%] w-[102%]
          max-w-none
          -translate-x-1/2
          object-contain object-bottom
          sm:h-[104%] sm:w-[112%]
        "
        :style="{
          objectPosition:
            category.image.objectPosition
            ?? 'center bottom',
        }"
      />

      <!-- Temporary image fallback -->
      <div
        v-else
        class="
          flex flex-col items-center
          gap-3 pb-8 text-center
        "
      >
        <Icon
          name="lucide:car-front"
          class="size-16 text-blue-600"
          aria-hidden="true"
        />

        <p
          class="
            text-xs font-semibold
            uppercase tracking-wide
            text-slate-400
          "
        >
          Vehicle image placeholder
        </p>
      </div>
    </div>

    <!-- Card content -->
    <div
      class="
        relative z-10 -mt-3
        flex flex-1 flex-col
        rounded-t-[1.25rem]
        bg-white
        px-6 pt-5 pb-6
        sm:px-7 sm:pt-6 sm:pb-7
      "
    >
      <h3
        class="
          text-xl font-extrabold
          tracking-tight
          text-slate-950
        "
      >
        {{ category.title }}
      </h3>

      <p
        class="
          mt-2
          text-sm leading-6
          text-slate-600
        "
      >
        {{ category.description }}
      </p>

      <!-- Feature checklist -->
      <ul
        class="mt-5 space-y-2.5"
        :aria-label="`${category.title} features`"
      >
        <li
          v-for="feature in category.features"
          :key="feature"
          class="
            flex items-start gap-2.5
            text-sm text-slate-700
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
            {{ feature }}
          </span>
        </li>
      </ul>

      <!-- Price, availability and action -->
      <div class="mt-auto pt-6">
        <div
          class="
            flex flex-wrap items-end
            justify-between gap-3
          "
        >
          <p class="text-sm text-slate-600">
            <span>
              {{ category.price.prefix }}
            </span>

            <strong
              class="
                ml-1
                text-2xl font-extrabold
                text-blue-700
              "
            >
              {{ formattedPrice }}
            </strong>

            <span class="ml-1 text-slate-700">
              / {{ category.price.cadence }}
            </span>
          </p>

          <span
            class="
              inline-flex items-center
              rounded-full border
              px-3 py-1
              text-xs font-bold
            "
            :class="
              availabilityClassByStatus[
                category.availability.status
              ]
            "
          >
            {{ category.availability.label }}
          </span>
        </div>

        <UiButton
          :to="category.action.to"
          size="md"
          class="
            mt-5 w-full
            justify-center
          "
        >
          {{ category.action.label }}
        </UiButton>
      </div>
    </div>
  </article>
</template>