<script setup lang="ts">
import { basicDriverRequirements } from '~/data/requirements';
</script>

<template>
  <section
    class="
      bg-white pt-3 pb-4
      sm:pt-4 sm:pb-5
    "
    aria-labelledby="basic-driver-requirements-heading"
  >
    <UiContainer>
      <h2
        id="basic-driver-requirements-heading"
        class="
          text-2xl font-extrabold
          tracking-tight text-slate-950
        "
      >
        Basic Driver Requirements
      </h2>

      <ul
        class="
          mt-3 grid items-stretch gap-3
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
        "
      >
        <li
          v-for="item in basicDriverRequirements"
          :key="item.id"
          class="
            flex min-w-0 flex-col
            items-center rounded-lg
            border border-[var(--nextmile-panel-border)]
            bg-white px-4 py-4
            text-center
            shadow-[0_2px_10px_rgb(16_42_67_/_3%)]
          "
        >
          <div
            class="
              flex size-12 items-center
              justify-center rounded-full
              border-2 border-blue-500
              text-blue-600
            "
            aria-hidden="true"
          >
            <Icon
              :name="item.icon"
              class="size-7"
            />
          </div>

          <h3
            class="
              mt-3 text-sm font-extrabold
              leading-5 text-slate-950
            "
          >
            {{ item.title }}
          </h3>

          <p
            class="
              mt-3 flex items-start gap-2
              text-left text-xs leading-5
              text-slate-600
            "
          >
            <Icon
              name="lucide:circle-check"
              class="
                mt-0.5 size-4 shrink-0
                text-emerald-600
              "
              aria-hidden="true"
            />

            <span>{{ item.description }}</span>
          </p>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>
