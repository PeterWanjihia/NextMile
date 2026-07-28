<script setup lang="ts">
import { businessConfig } from '~/config/business';

withDefaults(
  defineProps<{
    hidden?: boolean;
  }>(),
  {
    hidden: false,
  },
);
</script>

<template>
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="translate-y-full opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="translate-y-full opacity-0"
  >
    <aside
      v-if="!hidden"
      class="
        fixed inset-x-0 bottom-0 z-30
        border-t border-slate-200
        bg-white/95
        px-4 pt-3
        pb-[max(0.75rem,env(safe-area-inset-bottom))]
        shadow-[0_-10px_30px_rgb(15_23_42_/_0.10)]
        backdrop-blur
        md:hidden
      "
      aria-label="Quick contact and application actions"
    >
      <div
        class="
          mx-auto grid w-full max-w-lg
          grid-cols-[0.9fr_1.1fr]
          gap-3
        "
      >
        <a
          :href="businessConfig.phone.href"
          class="
            inline-flex min-h-12 items-center justify-center
            gap-2 rounded-xl
            border border-slate-300
            bg-white px-4
            text-sm font-bold text-slate-900
            transition-colors duration-200
            hover:border-blue-300
            hover:bg-blue-50
            hover:text-blue-700
          "
          :aria-label="`Call NextMile Rentals at ${businessConfig.phone.display}`"
        >
          <Icon
            name="lucide:phone"
            class="size-5 shrink-0"
            aria-hidden="true"
          />

          <span>
            Call
          </span>
        </a>

        <NuxtLink
          to="/apply"
          class="
            inline-flex min-h-12 items-center justify-center
            gap-2 rounded-xl
            bg-blue-600 px-4
            text-sm font-bold text-white
            transition-colors duration-200
            hover:bg-blue-700
          "
          aria-label="Apply for a NextMile vehicle rental"
        >
          <span>
            Apply Now
          </span>

          <Icon
            name="lucide:arrow-right"
            class="size-5 shrink-0"
            aria-hidden="true"
          />
        </NuxtLink>
      </div>
    </aside>
  </Transition>
</template>