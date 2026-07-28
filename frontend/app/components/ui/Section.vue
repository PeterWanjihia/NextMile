<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string;
    tone?: 'white' | 'muted' | 'brand-soft' | 'navy';
    spacing?: 'compact' | 'default' | 'large';
  }>(),
  {
    as: 'section',
    tone: 'white',
    spacing: 'default',
  },
);

const toneClasses = {
  white: 'bg-white text-slate-950',
  muted: 'bg-slate-50 text-slate-950',
  'brand-soft': 'bg-blue-50 text-slate-950',
  navy: 'bg-slate-950 text-white',
} as const;

const spacingClasses = {
  compact: 'py-12 sm:py-16',
  default: 'py-16 sm:py-24',
  large: 'py-20 sm:py-28 lg:py-32',
} as const;
</script>

<template>
  <component
    :is="as"
    :class="[toneClasses[tone], spacingClasses[spacing]]"
  >
    <slot />
  </component>
</template>