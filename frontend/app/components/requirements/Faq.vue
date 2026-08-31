<script setup lang="ts">
import { requirementsFaq } from '~/data/requirements';
</script>

<template>
  <section
    class="
      bg-white pt-3 pb-4
      sm:pt-4 sm:pb-5
    "
    aria-labelledby="requirements-faq-heading"
  >
    <UiContainer>
      <h2
        id="requirements-faq-heading"
        class="
          text-2xl font-extrabold
          tracking-tight text-slate-950
        "
      >
        Frequently Asked Questions
      </h2>

      <div
        class="
          mt-3 grid gap-2
          lg:grid-cols-2
        "
      >
        <details
          v-for="faq in requirementsFaq"
          :key="faq.id"
          class="
            group self-start overflow-hidden
            rounded-lg border
            border-[var(--nextmile-panel-border)]
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
              px-4 py-2.5
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
            <span>{{ faq.question }}</span>

            <Icon
              name="lucide:chevron-down"
              class="
                size-4 shrink-0
                text-slate-700
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
    </UiContainer>
  </section>
</template>
