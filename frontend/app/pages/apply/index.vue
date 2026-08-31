<script setup lang="ts">
definePageMeta({
  layout: 'application',
});

useSeoMeta({
  title: 'Driver Application',
  description:
    'Apply for a weekly vehicle rental with NextMile Rentals.',
});
</script>
<template>
  <ApplicationWizard />
</template>