<script setup lang="ts">
import { businessConfig } from '~/config/business';
import {
  footerCompanyLinks,
  footerExploreLinks,
  footerLegalLinks,
} from '~/config/footer-navigation';

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

const currentYear = new Date().getFullYear();

interface SocialLink {
  name: string;
  icon: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    icon: 'lucide:facebook',
    href: businessConfig.socialLinks.facebook,
  },
  {
    name: 'Instagram',
    icon: 'lucide:instagram',
    href: businessConfig.socialLinks.instagram,
  },
  {
    name: 'TikTok',
    icon: 'simple-icons:tiktok',
    href: businessConfig.socialLinks.tiktok,
  },
  {
    name: 'YouTube',
    icon: 'lucide:youtube',
    href: businessConfig.socialLinks.youtube,
  },
];
</script>

<template>
  <footer
    class="bg-[var(--nextmile-navy-950)] text-white"
    aria-labelledby="footer-brand"
  >
    <UiContainer>
      <div
        class="
          grid gap-x-10 gap-y-12 py-12
          sm:py-14
          md:grid-cols-2
          lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.55fr)_minmax(240px,1.15fr)]
          lg:gap-x-12 lg:py-16
        "
      >
        <!--
          Mobile: first
          Tablet: left column
          Desktop: left column
        -->
        <section class="order-1 min-w-0">
          <NuxtLink
            to="/"
            class="
              inline-flex rounded-md
              focus-visible:outline-none
              focus-visible:ring-2 focus-visible:ring-blue-400
              focus-visible:ring-offset-4
              focus-visible:ring-offset-[var(--nextmile-navy-950)]
            "
            :aria-label="`${businessConfig.brandName} homepage`"
          >
            <NuxtImg
              src="/images/brand/nextmile-logo-light.png"
              alt=""
              width="360"
              height="116"
              class="
                h-auto w-[190px]
                object-contain
                brightness-0 invert
              "
              aria-hidden="true"
            />
          </NuxtLink>

          <h2
            id="footer-brand"
            class="sr-only"
          >
            {{ businessConfig.brandName }}
          </h2>

          <p
            class="
              mt-5 max-w-sm
              text-sm leading-6 text-slate-300
              sm:text-[0.9375rem] sm:leading-7
            "
          >
            {{ businessConfig.description }}
          </p>

          <div
            v-if="socialLinks.length"
            class="mt-6 flex flex-wrap items-center gap-2.5"
            aria-label="Social media"
          >
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="
                inline-flex size-11 shrink-0
                items-center justify-center
                rounded-full border border-white/15
                text-slate-300
                transition-colors duration-200
                hover:border-blue-400
                hover:bg-blue-500/10
                hover:text-white
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-blue-400
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[var(--nextmile-navy-950)]
              "
              :aria-label="`${businessConfig.brandName} on ${social.name}`"
            >
              <Icon
                :name="social.icon"
                class="size-5"
                aria-hidden="true"
              />
            </a>
          </div>
        </section>

        <!--
          Mobile: directly after brand
          Tablet: right column beside brand
          Desktop: right column after navigation
        -->
        <section
          class="
            order-2 min-w-0
            md:col-start-2 md:row-start-1
            lg:order-3 lg:col-start-auto lg:row-start-auto
          "
          aria-labelledby="footer-contact-heading"
        >
          <h2
            id="footer-contact-heading"
            class="text-sm font-bold text-white"
          >
            Contact
          </h2>

          <address class="mt-5 not-italic">
            <ul class="space-y-4">
              <li>
                <a
                  :href="businessConfig.phone.href"
                  class="
                    group inline-flex min-w-0 items-start gap-3
                    rounded-sm py-1
                    text-sm leading-6 text-slate-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[var(--nextmile-navy-950)]
                  "
                  :aria-label="`Call ${businessConfig.brandName} at ${businessConfig.phone.display}`"
                >
                  <Icon
                    name="lucide:phone"
                    class="
                      mt-1 size-4 shrink-0
                      text-blue-400
                      transition-colors duration-200
                      group-hover:text-blue-300
                    "
                    aria-hidden="true"
                  />

                  <span class="whitespace-nowrap">
                    {{ businessConfig.phone.display }}
                  </span>
                </a>
              </li>

              <li>
                <a
                  :href="businessConfig.email.href"
                  class="
                    group inline-flex min-w-0 max-w-full
                    items-start gap-3
                    rounded-sm py-1
                    text-sm leading-6 text-slate-300
                    transition-colors duration-200
                    hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[var(--nextmile-navy-950)]
                  "
                  :aria-label="`Email ${businessConfig.brandName} at ${businessConfig.email.display}`"
                >
                  <Icon
                    name="lucide:mail"
                    class="
                      mt-1 size-4 shrink-0
                      text-blue-400
                      transition-colors duration-200
                      group-hover:text-blue-300
                    "
                    aria-hidden="true"
                  />

                  <span class="min-w-0 break-words">
                    {{ businessConfig.email.display }}
                  </span>
                </a>
              </li>

              <li
                class="
                  flex min-w-0 items-start gap-3
                  text-sm leading-6 text-slate-300
                "
              >
                <Icon
                  name="lucide:map-pin"
                  class="mt-1 size-4 shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <span class="min-w-0">
                  {{ businessConfig.serviceArea.full }}
                </span>
              </li>

              <li
                class="
                  flex min-w-0 items-start gap-3
                  text-sm leading-6 text-slate-300
                "
              >
                <Icon
                  name="lucide:clock-3"
                  class="mt-1 size-4 shrink-0 text-blue-400"
                  aria-hidden="true"
                />

                <div class="min-w-0 space-y-1">
                  <p
                    v-for="hours in businessConfig.businessHours"
                    :key="hours"
                  >
                    {{ hours }}
                  </p>
                </div>
              </li>
            </ul>
          </address>
        </section>

        <!--
          Mobile: after contact, groups stacked
          Tablet: spans full row with three columns
          Desktop: middle column
        -->
        <nav
          class="
            order-3 min-w-0
            md:col-span-2
            lg:order-2 lg:col-span-1
          "
          aria-label="Footer navigation"
        >
          <div
            class="
              grid grid-cols-1 gap-x-8 gap-y-9
              sm:grid-cols-3
            "
          >
            <!-- Explore -->
            <section aria-labelledby="footer-explore-heading">
              <h2
                id="footer-explore-heading"
                class="text-sm font-bold text-white"
              >
                Explore
              </h2>

              <ul class="mt-4 space-y-1">
                <li
                  v-for="link in footerExploreLinks"
                  :key="link.to"
                >
                  <NuxtLink
                    :to="link.to"
                    class="
                      inline-flex min-h-9 items-center
                      rounded-sm py-1
                      text-sm leading-6 text-slate-300
                      transition-colors duration-200
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-400
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[var(--nextmile-navy-950)]
                    "
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </section>

            <!-- Company -->
            <section aria-labelledby="footer-company-heading">
              <h2
                id="footer-company-heading"
                class="text-sm font-bold text-white"
              >
                Company
              </h2>

              <ul class="mt-4 space-y-1">
                <li
                  v-for="link in footerCompanyLinks"
                  :key="link.to"
                >
                  <NuxtLink
                    :to="link.to"
                    class="
                      inline-flex min-h-9 items-center
                      rounded-sm py-1
                      text-sm leading-6 text-slate-300
                      transition-colors duration-200
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-400
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[var(--nextmile-navy-950)]
                    "
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </section>

            <!-- Legal -->
            <section aria-labelledby="footer-legal-heading">
              <h2
                id="footer-legal-heading"
                class="text-sm font-bold text-white"
              >
                Legal
              </h2>

              <ul class="mt-4 space-y-1">
                <li
                  v-for="link in footerLegalLinks"
                  :key="link.to"
                >
                  <NuxtLink
                    :to="link.to"
                    class="
                      inline-flex min-h-9 items-center
                      rounded-sm py-1
                      text-sm leading-6 text-slate-300
                      transition-colors duration-200
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-blue-400
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-[var(--nextmile-navy-950)]
                    "
                  >
                    {{ link.label }}
                  </NuxtLink>
                </li>
              </ul>
            </section>
          </div>
        </nav>
      </div>

      <!-- Bottom company and copyright strip -->
      <div
        class="
          flex flex-col items-start gap-2
          border-t border-white/10
          py-6
          text-xs leading-5 text-slate-400
          md:flex-row
          md:items-center
          md:justify-between
          md:gap-8
        "
      >
        <p>
          © {{ currentYear }}
          {{ businessConfig.legalName }}.
          All rights reserved.
        </p>

        <p class="md:text-right">
          {{ businessConfig.tradeName }} is a DBA of
          {{ businessConfig.legalName }}.
        </p>
      </div>
    </UiContainer>
  </footer>
</template>