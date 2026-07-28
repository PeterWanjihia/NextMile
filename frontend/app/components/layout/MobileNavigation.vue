<script setup lang="ts">
import { businessConfig } from '~/config/business';
import {
  publicNavigation,
  type NavigationItem,
} from '~/config/navigation';

const props = defineProps<{
  open: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const route = useRoute();

const closeButton =
  useTemplateRef<HTMLButtonElement>('closeButton');

let previousBodyOverflow = '';

function isNavigationItemActive(
  item: NavigationItem,
): boolean {
  const [rawPath, rawHash] = item.to.split('#');

  const targetPath = rawPath || '/';
  const targetHash = rawHash ? `#${rawHash}` : '';

  if (targetHash) {
    return (
      route.path === targetPath
      && route.hash === targetHash
    );
  }

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

function restoreMenuTriggerFocus(): void {
  if (!import.meta.client) {
    return;
  }

  requestAnimationFrame(() => {
    document
      .getElementById('public-menu-trigger')
      ?.focus();
  });
}

function closeMenu(
  restoreTriggerFocus = true,
): void {
  emit('close');

  if (restoreTriggerFocus) {
    restoreMenuTriggerFocus();
  }
}

function handleEscape(
  event: KeyboardEvent,
): void {
  if (event.key === 'Escape' && props.open) {
    closeMenu();
  }
}

/*
 * Close the drawer whenever navigation succeeds.
 * Focus is not returned to the old trigger because
 * the visitor has intentionally moved to a new route.
 */
watch(
  () => route.fullPath,
  () => {
    if (props.open) {
      closeMenu(false);
    }
  },
);

/*
 * Lock background-page scrolling while the drawer is open.
 * Preserve and restore any previous inline overflow value.
 */
watch(
  () => props.open,
  async (isOpen) => {
    if (!import.meta.client) {
      return;
    }

    if (isOpen) {
      previousBodyOverflow =
        document.body.style.overflow;

      document.body.style.overflow = 'hidden';

      await nextTick();
      closeButton.value?.focus();

      return;
    }

    document.body.style.overflow =
      previousBodyOverflow;
  },
  {
    immediate: true,
  },
);

onMounted(() => {
  window.addEventListener(
    'keydown',
    handleEscape,
  );
});

onBeforeUnmount(() => {
  window.removeEventListener(
    'keydown',
    handleEscape,
  );

  document.body.style.overflow =
    previousBodyOverflow;
});
</script>

<template>
  <Teleport to="body">
    <!-- Backdrop -->
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="
          fixed inset-0 z-50
          bg-slate-950/45 backdrop-blur-[2px]
          lg:hidden
        "
        aria-hidden="true"
        @click="closeMenu()"
      />
    </Transition>

    <!-- Drawer -->
    <Transition
      enter-active-class="
        transition-transform
        duration-[250ms] ease-out
      "
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="
        transition-transform
        duration-200 ease-in
      "
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="open"
        id="mobile-navigation"
        class="
          fixed inset-y-0 right-0 z-[60]
          flex w-full max-w-sm flex-col
          bg-white shadow-2xl
          lg:hidden
        "
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <!-- Drawer header -->
        <div
          class="
            flex items-center justify-between
            border-b border-slate-200
            px-5 py-4
          "
        >
          <NuxtLink
            to="/"
            class="
              inline-flex items-center
              rounded-md
            "
            :aria-label="`${businessConfig.brandName} homepage`"
            @click="closeMenu(false)"
          >
            <NuxtImg
              src="/images/brand/nextmile-logo-light.png"
              alt=""
              width="360"
              height="116"
              class="
                h-auto w-[145px]
                object-contain
              "
              aria-hidden="true"
            />
          </NuxtLink>

          <button
            ref="closeButton"
            type="button"
            class="
              inline-flex size-11 items-center justify-center
              rounded-xl border border-slate-200
              bg-white text-slate-900
              transition-colors duration-200
              hover:border-blue-200 hover:bg-blue-50
            "
            aria-label="Close navigation menu"
            @click="closeMenu()"
          >
            <Icon
              name="lucide:x"
              class="size-6"
              aria-hidden="true"
            />
          </button>
        </div>

        <!-- Scrollable drawer content -->
        <div
          class="
            flex-1 overflow-y-auto
            px-5 py-6
          "
        >
          <nav aria-label="Mobile primary navigation">
            <ul class="space-y-1">
              <li
                v-for="item in publicNavigation"
                :key="item.to"
              >
                <NuxtLink
                  :to="item.to"
                  class="
                    flex min-h-12 items-center
                    rounded-xl px-4
                    text-base font-semibold
                    transition-colors duration-200
                  "
                  :class="
                    isNavigationItemActive(item)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-800 hover:bg-slate-50 hover:text-blue-700'
                  "
                  :aria-current="
                    isNavigationItemActive(item)
                      ? 'page'
                      : undefined
                  "
                  @click="closeMenu(false)"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Primary actions -->
          <div
            class="
              mt-8 space-y-3
              border-t border-slate-200
              pt-6
            "
          >
            <UiButton
              to="/fleet"
              variant="secondary"
              size="lg"
              class="w-full"
              @click="closeMenu(false)"
            >
              Check Availability
            </UiButton>

            <UiButton
              to="/apply"
              size="lg"
              class="w-full"
              @click="closeMenu(false)"
            >
              Apply Now
            </UiButton>
          </div>

          <!-- Contact assistance -->
          <div
            class="
              mt-8 rounded-2xl
              bg-blue-50 p-5
            "
          >
            <p
              class="
                text-sm font-semibold
                text-slate-950
              "
            >
              Need help choosing a vehicle?
            </p>

            <p
              class="
                mt-1 text-sm leading-6
                text-slate-600
              "
            >
              Call or text the NextMile team for
              assistance.
            </p>

            <a
              :href="businessConfig.phone.href"
              class="
                mt-4 inline-flex items-center gap-2
                rounded-lg font-bold text-blue-700
                transition-colors
                hover:text-blue-800
              "
              :aria-label="`Call or text NextMile Rentals at ${businessConfig.phone.display}`"
            >
              <Icon
                name="lucide:phone"
                class="size-5"
                aria-hidden="true"
              />

              {{ businessConfig.phone.display }}
            </a>
          </div>
        </div>

        <!-- Drawer footer -->
        <div
          class="
            border-t border-slate-200
            px-5 pt-4
            pb-[max(1rem,env(safe-area-inset-bottom))]
            text-center text-xs text-slate-500
          "
        >
          Serving drivers in the
          {{ businessConfig.serviceArea.short }}
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>