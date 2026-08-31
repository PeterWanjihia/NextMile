<script setup lang="ts">
import { businessConfig } from '~/config/business';
import {
  contactHours,
  contactInfoCards,
  contactServiceArea,
} from '~/data/contact';
</script>

<template>
  <div class="grid min-w-0 gap-3">
    <article
      v-for="card in contactInfoCards"
      :key="card.id"
      class="
        grid min-w-0
        grid-cols-[auto_minmax(0,1fr)]
        gap-4 rounded-xl border
        border-[var(--nextmile-panel-border)]
        bg-white p-5
        shadow-[0_2px_12px_rgb(16_42_67_/_3%)]
      "
    >
      <div
        class="
          flex size-12 shrink-0
          items-center justify-center
          rounded-full bg-blue-50
          text-blue-600
        "
        aria-hidden="true"
      >
        <Icon
          :name="card.icon"
          class="size-7"
        />
      </div>

      <div class="min-w-0">
        <h2
          class="
            text-sm font-extrabold
            text-slate-950
          "
        >
          {{ card.eyebrow }}
        </h2>

        <template v-if="card.id === 'phone'">
          <a
            :href="businessConfig.phone.href"
            class="
              mt-1 block text-2xl
              font-extrabold tracking-tight
              text-blue-700
              transition-colors
              hover:text-blue-800
            "
          >
            {{ businessConfig.phone.display }}
          </a>

          <p
            class="
              mt-1 text-xs font-semibold
              text-slate-700
            "
          >
            {{ businessConfig.businessHours.join(' · ') }}
          </p>
        </template>

        <template v-else-if="card.id === 'email'">
          <a
            :href="businessConfig.email.href"
            class="
              mt-1 block break-all
              text-base font-extrabold
              text-blue-700
              transition-colors
              hover:text-blue-800
            "
          >
            {{ businessConfig.email.display }}
          </a>
        </template>

        <template v-else-if="card.id === 'hours'">
          <dl class="mt-3 space-y-2">
            <div
              v-for="row in contactHours"
              :key="row.id"
              class="
                grid grid-cols-[minmax(0,1fr)_auto]
                gap-4 text-sm
              "
            >
              <dt class="font-bold text-slate-800">
                {{ row.label }}
              </dt>

              <dd
                class="font-semibold text-slate-700"
                :class="{
                  'text-red-600': row.closed,
                }"
              >
                {{ row.value }}
              </dd>
            </div>
          </dl>
        </template>

        <template v-else>
          <p
            class="
              mt-2 text-sm font-semibold
              text-slate-800
            "
          >
            {{ card.title }}
          </p>

          <a
            :href="contactServiceArea.map.directionsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="
              mt-3 inline-flex items-center gap-2
              text-sm font-extrabold
              text-blue-700
              hover:text-blue-800
            "
          >
            Get Directions

            <Icon
              name="lucide:external-link"
              class="size-4"
              aria-hidden="true"
            />
          </a>
        </template>

        <p
          v-if="card.description"
          class="
            mt-2 text-xs leading-5
            text-slate-600
          "
        >
          {{ card.description }}
        </p>
      </div>
    </article>
  </div>
</template>
