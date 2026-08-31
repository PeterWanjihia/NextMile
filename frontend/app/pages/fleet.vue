<script setup lang="ts">
useSeoMeta({
  title: 'Vehicle Categories for Gig Drivers',
  description:
    'Compare NextMile weekly rental vehicle categories, pricing, deposits and current availability in the Portland area.',

  ogTitle:
    'Vehicle Categories for Gig Drivers | NextMile Rentals',

  ogDescription:
    'Choose a practical weekly rental vehicle for delivery, rideshare and approved gig work in the Portland area.',
});
</script>

<template>
  <div>
    <FleetHero />
    <FleetAvailabilityNotice />
    <FleetCategoryList />
    <FleetAssistance />
    <FleetBenefits />
  </div>
</template>