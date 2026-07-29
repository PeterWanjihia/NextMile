<script setup lang="ts">
import { computed } from 'vue';

import { homeFaq } from '~/data/homepage';

const faqColumns = computed(() => {
  const midpoint =
    Math.ceil(homeFaq.items.length / 2);

  return [
    homeFaq.items.slice(0, midpoint),
    homeFaq.items.slice(midpoint),
  ];
});
</script>

<template>
  <section
    id="faq"
    class="
      scroll-mt-32
      bg-white
      pt-4 pb-6
      sm:pt-5 sm:pb-8
      lg:scroll-mt-36
      lg:pt-4 lg:pb-6
    "
    aria-labelledby="home-faq-heading"
  >
    <UiContainer>
      <h2
        id="home-faq-heading"
        class="
          text-xl font-extrabold
          leading-tight tracking-tight
          text-slate-950
          sm:text-2xl
        "
      >
        {{ homeFaq.heading }}
      </h2>

      <div
        class="
          mt-4 grid gap-4
          lg:grid-cols-2
          lg:items-start
        "
      >
        <div
          v-for="(column, columnIndex) in faqColumns"
          :key="columnIndex"
          class="
            rounded-xl
            border border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            p-2
          "
        >
          <div class="space-y-1.5">
            <details
              v-for="faq in column"
              :key="faq.id"
              class="
                group overflow-hidden
                rounded-lg
                border border-slate-200
                bg-white
                transition-colors duration-200
                open:border-blue-200
              "
            >
              <summary
                class="
                  flex cursor-pointer
                  list-none items-center
                  justify-between gap-4
                  px-4 py-3
                  text-sm font-bold
                  text-slate-900
                  transition-colors duration-200
                  hover:bg-slate-50
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-inset
                  focus-visible:ring-blue-600
                  [&::-webkit-details-marker]:hidden
                "
              >
                <span>
                  {{ faq.question }}
                </span>

                <Icon
                  name="lucide:chevron-down"
                  class="
                    size-5 shrink-0
                    text-blue-700
                    transition-transform duration-200
                    group-open:rotate-180
                  "
                  aria-hidden="true"
                />
              </summary>

              <div
                class="
                  border-t border-slate-100
                  px-4 py-3
                "
              >
                <p
                  class="
                    text-sm leading-6
                    text-slate-600
                  "
                >
                  {{ faq.answer }}
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>