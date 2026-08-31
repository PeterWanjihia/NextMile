<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Application Received',
  description:
    'Your NextMile Rentals application has been received.',
});

const route = useRoute();

const reference = computed(() => {
  const value = route.query.reference;

  if (
    typeof value === 'string'
    && /^NMR-[A-Z0-9-]{5,24}$/.test(value)
  ) {
    return value;
  }

  return 'NMR-DEMO-05172';
});
</script>

<template>
  <div>
    <ApplicationSuccessHero :reference="reference" />
    <ApplicationSuccessContent />
  </div>
</template>