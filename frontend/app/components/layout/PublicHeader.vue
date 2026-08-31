<script setup lang="ts">
import { businessConfig } from '~/config/business';
import {
  publicNavigation,
  type NavigationItem,
} from '~/config/navigation';

defineProps<{
  mobileMenuOpen: boolean;
}>();

const route = useRoute();

const emit = defineEmits<{
  openMenu: [];
}>();

function isNavigationItemActive(
  item: NavigationItem,
): boolean {
  const [rawPath, rawHash] = item.to.split('#');

  const targetPath = rawPath || '/';
  const targetHash = rawHash ? `#${rawHash}` : '';

  /*
   * Hash links are active only when both their page
   * and their exact section hash match.
   */
  if (targetHash) {
    return (
      route.path === targetPath
      && route.hash === targetHash
    );
  }

  /*
   * Prefix matching is useful for route families.
   * The empty-hash check prevents a page link and
   * one of its section links from being active together.
   */
  if (item.match === 'prefix') {
    return (
      route.path.startsWith(targetPath)
      && route.hash === ''
    );
  }

  return (
    route.path === targetPath
    && route.hash === ''
  );
}
</script>

<template>
  <header
    class="
      sticky top-0 z-40
      border-b border-slate-200
      bg-white/95
      backdrop-blur
    "
  >
    <UiContainer>
      <div
        class="
          flex min-h-[4.75rem] items-center justify-between
          gap-3 sm:gap-4
        "
      >
        <!-- Brand -->
        <NuxtLink
          to="/"
          class="
            inline-flex min-w-0 shrink-0 items-center
            rounded-md
          "
          :aria-label="`${businessConfig.brandName} homepage`"
        >
          <NuxtImg
            src="/images/brand/nextmile-logo-light.png"
            alt=""
            width="360"
            height="116"
            class="
              h-auto w-[112px] object-contain
              sm:w-[145px]
              md:w-[160px]
              xl:w-[180px]
            "
            aria-hidden="true"
          />
        </NuxtLink>

        <!-- Desktop navigation -->
        <nav
          class="hidden items-center gap-1 lg:flex"
          aria-label="Primary navigation"
        >
          <NuxtLink
            v-for="item in publicNavigation"
            :key="item.to"
            :to="item.to"
            class="
              rounded-lg px-3 py-2
              text-sm font-semibold
              transition-colors duration-200
            "
            :class="
              isNavigationItemActive(item)
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
            "
            :aria-current="
              isNavigationItemActive(item)
                ? 'page'
                : undefined
            "
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Header actions -->
        <div class="flex shrink-0 items-center gap-2 sm:gap-3">
          <!-- Wide desktop: both CTAs -->
          <div class="hidden items-center gap-3 xl:flex">
            <UiButton
              to="/fleet"
              variant="secondary"
              size="md"
            >
              Check Availability
            </UiButton>

            <UiButton
              to="/apply"
              size="md"
            >
              Apply Now
            </UiButton>
          </div>

          <!-- Tablet and medium desktop: primary CTA only -->
          <div
            class="
              hidden
              md:block xl:hidden
            "
          >
            <UiButton
              to="/apply"
              size="md"
            >
              Apply Now
            </UiButton>
          </div>

          <!-- Mobile/tablet menu trigger -->
          <button
            id="public-menu-trigger"
            type="button"
            class="
              inline-flex size-11 items-center justify-center
              rounded-xl border border-slate-200
              bg-white text-slate-900
              transition-colors duration-200
              hover:border-blue-200 hover:bg-blue-50
              lg:hidden
            "
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-controls="mobile-navigation"
            :aria-expanded="mobileMenuOpen"
            @click="emit('openMenu')"
          >
            <Icon
              name="lucide:menu"
              class="size-6"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </UiContainer>
  </header>
</template>