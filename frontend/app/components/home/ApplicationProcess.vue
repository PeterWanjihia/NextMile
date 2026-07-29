<script setup lang="ts">
import {
  homeApplicationProcess,
} from '~/data/homepage';
</script>

<template>
  <section
    id="how-it-works"
    class="
      scroll-mt-32
      bg-white
      pt-5 pb-2
      sm:pt-6 sm:pb-3
      lg:scroll-mt-36
      lg:pt-5 lg:pb-3
    "
    aria-labelledby="home-process-heading"
  >
    <UiContainer>
      <h2
        id="home-process-heading"
        class="
          text-center
          text-xl font-extrabold
          leading-tight tracking-tight
          text-slate-950
          sm:text-2xl
        "
      >
        {{ homeApplicationProcess.heading }}
      </h2>

      <ol
        class="
          mx-auto mt-6
          max-w-6xl
          lg:grid lg:grid-cols-4
          lg:gap-0
        "
        aria-label="NextMile application process"
      >
        <li
          v-for="(
            step,
            index
          ) in homeApplicationProcess.steps"
          :key="step.id"
          class="
            relative grid
            grid-cols-[2rem_2.75rem_minmax(0,1fr)]
            gap-x-3 pb-8
            last:pb-0
            lg:block lg:px-4 lg:pb-0
            lg:text-center
          "
        >
          <!-- Mobile vertical connector -->
          <span
            v-if="
              index
              < homeApplicationProcess.steps.length - 1
            "
            class="
              absolute top-8 bottom-0 left-4
              w-px
              -translate-x-1/2
              bg-slate-200
              lg:hidden
            "
            aria-hidden="true"
          />

          <!-- Step number -->
          <span
            class="
              relative z-10
              flex size-8
              items-center justify-center
              rounded-full
              bg-blue-600
              text-xs font-extrabold
              text-white

              lg:absolute
              lg:top-1.5
              lg:left-[calc(50%_-_4rem)]
              lg:size-7
            "
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>

          <!-- Process icon -->
          <div
            class="
              flex size-11
              items-center justify-center
              text-blue-600

              lg:mx-auto
            "
            aria-hidden="true"
          >
            <!-- Custom steering-wheel icon -->
            <svg
              v-if="
                step.icon
                === 'custom:steering-wheel'
              "
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
              :name="step.icon"
              class="size-9"
            />
          </div>

          <!-- Step copy -->
          <div
            class="
              min-w-0
              lg:mt-1.5
            "
          >
            <h3
              class="
                text-sm font-extrabold
                text-slate-950
              "
            >
              {{ step.title }}
            </h3>

            <p
              class="
                mt-1.5 max-w-sm
                text-xs leading-5
                text-slate-600

                lg:mx-auto
                lg:max-w-[12.5rem]
              "
            >
              {{ step.description }}
            </p>
          </div>

          <!-- Desktop process connector -->
          <div
            v-if="
              index
              < homeApplicationProcess.steps.length - 1
            "
            class="
              absolute
              top-[1.35rem]
              left-[calc(50%_+_2rem)]
              hidden
              w-[calc(100%_-_7rem)]
              items-center

              lg:flex
            "
            aria-hidden="true"
          >
            <span
              class="
                h-px flex-1
                bg-slate-300
              "
            />

            <Icon
              name="lucide:chevron-right"
              class="
                -ml-1 size-4 shrink-0
                text-slate-300
              "
            />
          </div>
        </li>
      </ol>
    </UiContainer>
  </section>
</template>