<script setup lang="ts">
useSeoMeta({
  title: 'Straightforward Weekly Vehicle Rental Pricing',
  description:
    'Compare NextMile weekly vehicle rental rates, deposits, rental terms and potential additional charges for gig and delivery drivers.',

  ogTitle:
    'Weekly Vehicle Rental Pricing | NextMile Rentals',

  ogDescription:
    'See clear weekly rental rates, deposits and terms for NextMile delivery and rideshare vehicle categories.',
});
</script>

<template>
  <div>
    <PricingHero />
    <PricingFeatureStrip />
    <PricingOptions />
    <PricingMetricStrip />
    <PricingPolicies />
    <PricingFaq />
    <PricingFinalCta />
  </div>
</template>