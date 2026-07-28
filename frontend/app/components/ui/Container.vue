<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
    size?: 'default' | 'narrow' | 'wide';
  }>(),
  {
    as: 'div',
    size: 'default',
  },
);

const sizeClasses = {
  narrow: 'max-w-4xl',
  default: 'max-w-7xl',
  wide: 'max-w-[90rem]',
} as const;
</script>

<template>
  <component
    :is="as"
    class="mx-auto w-full px-5 sm:px-8 lg:px-10"
    :class="sizeClasses[size]"
  >
    <slot />
  </component>
</template>