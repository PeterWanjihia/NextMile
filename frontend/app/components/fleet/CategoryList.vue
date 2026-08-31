<script setup lang="ts">
import { fleetCategories } from '~/data/fleet';
</script>

<template>
  <section
    class="
      bg-white
      pt-7 pb-4
      sm:pt-8 sm:pb-5
      lg:pt-9
    "
    aria-labelledby="fleet-categories-heading"
  >
    <UiContainer>
      <h2
        id="fleet-categories-heading"
        class="
          text-center text-3xl
          font-extrabold tracking-tight
          text-slate-950
          sm:text-4xl
        "
      >
        Our Vehicle Categories
      </h2>

      <div
        class="
          mt-7 grid items-stretch gap-5
          lg:grid-cols-2
          lg:gap-6
        "
      >
        <FleetCategoryCard
          v-for="category in fleetCategories"
          :key="category.id"
          :category="category"
        />
      </div>
    </UiContainer>
  </section>
</template>
