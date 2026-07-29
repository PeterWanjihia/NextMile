<script setup lang="ts">
import { homeWhyChoose } from '~/data/homepage';
</script>

<template>
  <section
    id="why-nextmile"
    class="
      bg-white
      pt-2 pb-8
      sm:pt-3 sm:pb-10
      lg:pt-2 lg:pb-9
    "
    aria-labelledby="home-why-choose-heading"
  >
    <UiContainer>
      <h2
        id="home-why-choose-heading"
        class="
          text-center
          text-xl font-extrabold
          leading-tight tracking-tight
          text-slate-950
          sm:text-2xl
        "
      >
        {{ homeWhyChoose.heading }}
      </h2>

      <ul
        class="
          mx-auto mt-5 grid
          max-w-6xl
          grid-cols-2
          gap-x-4 gap-y-8

          sm:mt-6
          sm:grid-cols-3
          sm:gap-x-6

          lg:grid-cols-6
          lg:gap-x-5
          lg:gap-y-0
        "
        aria-label="Reasons to choose NextMile Rentals"
      >
        <li
          v-for="item in homeWhyChoose.items"
          :key="item.id"
          class="
            min-w-0
            text-center
          "
        >
          <!-- Benefit icon -->
          <div
            class="
              mx-auto flex size-12
              items-center justify-center
              text-blue-600
            "
            aria-hidden="true"
          >
            <!-- Custom steering wheel -->
            <svg
              v-if="item.icon === 'custom:steering-wheel'"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="size-10"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
              />

              <circle
                cx="12"
                cy="12"
                r="2.25"
              />

              <path d="M3.5 10.5h17" />

              <path d="M12 14.25V21" />

              <path d="m12 14.25-4.6-4.7" />

              <path d="m12 14.25 4.6-4.7" />
            </svg>

            <Icon
              v-else
              :name="item.icon"
              class="size-10"
            />
          </div>

          <h3
            class="
              mt-2
              text-sm font-extrabold
              leading-5
              text-slate-950
            "
          >
            {{ item.title }}
          </h3>

          <p
            class="
              mx-auto mt-1.5
              max-w-[11rem]
              text-xs leading-5
              text-slate-600
              sm:text-[0.8125rem]
            "
          >
            {{ item.description }}
          </p>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>