<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
    padded?: boolean;
    interactive?: boolean;
  }>(),
  {
    as: 'div',
    padded: true,
    interactive: false,
  },
);
</script>

<template>
  <component
    :is="as"
    class="rounded-2xl border border-slate-200 bg-white"
    :class="[
      {
        'p-6 sm:p-8': padded,
        'transition duration-200 hover:-translate-y-0.5 hover:shadow-lg':
          interactive,
      },
    ]"
  >
    <slot />
  </component>
</template>