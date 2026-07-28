<script setup lang="ts">
type BadgeTone = 'success' | 'warning' | 'danger' | 'neutral' | 'brand';

withDefaults(
  defineProps<{
    tone?: BadgeTone;
  }>(),
  {
    tone: 'neutral',
  },
);

const toneClasses = {
  success: 'border-green-200 bg-green-50 text-green-800',
  warning: 'border-amber-200 bg-amber-50 text-amber-800',
  danger: 'border-red-200 bg-red-50 text-red-800',
  neutral: 'border-slate-200 bg-slate-50 text-slate-700',
  brand: 'border-blue-200 bg-blue-50 text-blue-800',
} as const;
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide"
    :class="toneClasses[tone]"
  >
    <slot />
  </span>
</template>