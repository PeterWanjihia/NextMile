<template>
  <div class="min-h-screen bg-slate-50">
    <LayoutUtilityBar />

    <LayoutApplicationHeader />

    <main>
      <slot />
    </main>

    <LayoutPublicFooter />
  </div>
</template>