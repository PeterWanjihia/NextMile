<script setup lang="ts">
import { applicationBenefits } from '~/data/application';
</script>

<template>
  <section
    class="
      mt-10 border-y border-slate-200
      bg-white
    "
    aria-label="Application benefits"
  >
    <UiContainer>
      <div
        class="
          grid grid-cols-1 gap-x-5 gap-y-6 py-8
          min-[480px]:grid-cols-2
          lg:grid-cols-4 lg:gap-8
        "
      >
        <article
          v-for="benefit in applicationBenefits"
          :key="benefit.id"
          class="flex min-w-0 items-start gap-3"
        >
          <span
            class="
              inline-flex size-10 shrink-0
              items-center justify-center rounded-full
              border border-blue-200 bg-blue-50 text-blue-700
            "
          >
            <Icon
              :name="benefit.icon"
              class="size-5"
              aria-hidden="true"
            />
          </span>

          <div class="min-w-0">
            <h2
              class="
                text-xs font-extrabold text-slate-950
                sm:text-sm
              "
            >
              {{ benefit.title }}
            </h2>

            <p
              class="
                mt-1 text-[0.6875rem] leading-4
                text-slate-500 sm:text-xs sm:leading-5
              "
            >
              {{ benefit.description }}
            </p>
          </div>
        </article>
      </div>
    </UiContainer>
  </section>
</template>
