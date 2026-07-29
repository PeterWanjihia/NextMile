<script setup lang="ts">
import { homeFleetPreview } from '~/data/homepage';
import type { HomeFleetCategory } from '~/types/homepage';

function getFleetCategory(
  id: string,
): HomeFleetCategory {
  const category =
    homeFleetPreview.categories.find(
      (item) => item.id === id,
    );

  if (!category) {
    throw new Error(
      `Homepage fleet category "${id}" was not found.`,
    );
  }

  return category;
}

const economyCategory =
  getFleetCategory('economy-delivery');
</script>
<template>
  <section
    id="fleet-preview"
    class="
    bg-[var(--nextmile-surface-subtle)]
    pt-8 pb-14
    sm:pt-9 sm:pb-5
    lg:pt-10 lg:pb-5
    "
    aria-labelledby="home-fleet-heading"
  >
    <UiContainer>
      <!-- Section introduction -->
      <div
        class="
          mx-auto max-w-3xl
          text-center
        "
      >
        <h2
          id="home-fleet-heading"
          class="
            text-3xl font-extrabold
            leading-tight tracking-tight
            text-slate-950
            sm:text-4xl
          "
        >
          {{ homeFleetPreview.heading }}
        </h2>

        <p
          class="
            mx-auto mt-4 max-w-2xl
            text-base leading-7
            text-slate-600
          "
        >
          {{ homeFleetPreview.description }}
        </p>
      </div>

      <!--
        Temporary single-card calibration area.

        The max width approximates the width that one card
        will have once the final desktop two-column grid exists.
      -->
      <div
        class="
          mx-auto mt-7 grid
          max-w-5xl
          gap-y-6
          sm:mt-8
          lg:grid-cols-2
          lg:gap-x-4
          lg:gap-y-0
        "
      >
        <HomeFleetCategoryCard
          v-for="category in homeFleetPreview.categories"
          :key="category.id"
          :category="category"
        />
      </div>

      <!-- Fleet-page navigation -->
      <div class="mt-7 text-center">
        <NuxtLink
          :to="homeFleetPreview.detailsAction.to"
          class="
            inline-flex items-center gap-2
            rounded-md
            text-sm font-bold
            text-blue-700
            transition-colors duration-200
            hover:text-blue-800
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-blue-600
          "
        >
          {{ homeFleetPreview.detailsAction.label }}

          <Icon
            name="lucide:arrow-right"
            class="size-4 shrink-0"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>