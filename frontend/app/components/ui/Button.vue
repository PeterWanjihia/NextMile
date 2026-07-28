<script setup lang="ts">
import type { NuxtLinkProps } from '#app';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const props = withDefaults(
  defineProps<{
    to?: NuxtLinkProps['to'];
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
);

const variantClasses = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600',
  secondary:
    'border border-slate-300 bg-white text-slate-950 hover:border-blue-300 hover:text-blue-700',
  ghost:
    'bg-transparent text-blue-700 hover:bg-blue-50',
} as const;

const sizeClasses = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-12 px-5 text-base',
  lg: 'min-h-14 px-6 text-base',
} as const;

const componentTag = computed(() => {
  if (props.to) {
    return resolveComponent('NuxtLink');
  }

  if (props.href) {
    return 'a';
  }

  return 'button';
});
</script>

<template>
  <component
    :is="componentTag"
    :to="to"
    :href="href"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200"
    :class="[
      variantClasses[variant],
      sizeClasses[size],
      {
        'cursor-not-allowed opacity-60': disabled || loading,
      },
    ]"
  >
    <Icon
      v-if="loading"
      name="lucide:loader-circle"
      class="size-5 animate-spin"
    />

    <slot />
  </component>
</template>