<script setup lang="ts">
const mobileMenuOpen = ref(false);

function openMobileMenu(): void {
  mobileMenuOpen.value = true;
}

function closeMobileMenu(): void {
  mobileMenuOpen.value = false;
}
</script>

<template>
  <div
    class="
      min-h-screen
      bg-white
      pb-24 md:pb-0
    "
  >
    <LayoutUtilityBar />

    <LayoutPublicHeader
      :mobile-menu-open="mobileMenuOpen"
      @open-menu="openMobileMenu"
    />

    <LayoutMobileNavigation
      :open="mobileMenuOpen"
      @close="closeMobileMenu"
    />

    <main>
      <slot />
    </main>

    <LayoutPublicFooter />

    <LayoutMobileActionBar
      :hidden="mobileMenuOpen"
    />
  </div>
</template>