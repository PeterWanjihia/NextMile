<script setup lang="ts">
import { contactServiceArea } from '~/data/contact';
</script>

<template>
  <section
    class="
      bg-white pt-0 pb-4
      sm:pb-5
    "
    aria-labelledby="contact-service-area-heading"
  >
    <UiContainer>
      <div
        class="
          grid overflow-hidden rounded-xl
          border border-[var(--nextmile-panel-border)]
          bg-white
          lg:grid-cols-[17rem_minmax(0,1fr)]
          xl:grid-cols-[20rem_minmax(0,1fr)]
        "
      >
        <div
          class="
            border-b border-slate-200
            bg-[var(--nextmile-card-cool)]
            p-5 sm:p-6
            lg:border-r lg:border-b-0
          "
        >
          <div class="flex items-start gap-4">
            <div
              class="
                flex size-11 shrink-0
                items-center justify-center
                rounded-full bg-emerald-50
                text-emerald-700
              "
              aria-hidden="true"
            >
              <Icon
                :name="contactServiceArea.icon"
                class="size-6"
              />
            </div>

            <div class="min-w-0">
              <h2
                id="contact-service-area-heading"
                class="
                  text-lg font-extrabold
                  text-slate-950
                "
              >
                {{ contactServiceArea.heading }}
              </h2>

              <p
                class="
                  mt-2 text-sm leading-6
                  text-slate-600
                "
              >
                {{ contactServiceArea.description }}
              </p>
            </div>
          </div>

          <ul class="mt-5 space-y-2.5">
            <li
              v-for="area in contactServiceArea.areas"
              :key="area.id"
              class="
                flex items-center gap-2.5
                text-sm font-medium
                text-slate-700
              "
            >
              <Icon
                name="lucide:circle-check"
                class="
                  size-4 shrink-0
                  text-emerald-600
                "
                aria-hidden="true"
              />

              {{ area.label }}
            </li>
          </ul>

          <a
            :href="contactServiceArea.map.largerMapUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="
              mt-5 inline-flex items-center gap-2
              text-sm font-extrabold
              text-blue-700
              hover:text-blue-800
            "
          >
            View full service area

            <Icon
              name="lucide:arrow-right"
              class="size-4"
              aria-hidden="true"
            />
          </a>
        </div>

        <div
          class="
            relative min-h-[22rem]
            overflow-hidden bg-blue-50
            sm:min-h-[25rem]
            lg:min-h-0
          "
        >
          <img
            :src="contactServiceArea.map.image.src"
            :alt="contactServiceArea.map.image.alt"
            :width="contactServiceArea.map.image.width"
            :height="contactServiceArea.map.image.height"
            class="
              absolute inset-0
              h-full w-full object-cover
              object-center
            "
            loading="eager"
          />

          <div
            class="
              absolute top-0 left-0
              w-[29%] min-w-[14rem]
              max-w-[16rem] rounded-br-lg
              border border-slate-200
              bg-white/95 p-4
              shadow-lg backdrop-blur-sm
            "
          >
            <h3
              class="
                text-sm font-extrabold
                text-slate-950
              "
            >
              NextMile Rentals
            </h3>

            <p
              class="
                mt-1 text-xs leading-5
                text-slate-600
              "
            >
              {{ contactServiceArea.description }}
            </p>

            <div
              class="
                mt-3 flex flex-wrap
                items-center gap-x-4 gap-y-2
              "
            >
              <a
                :href="contactServiceArea.map.directionsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  text-xs font-extrabold
                  text-blue-700
                  hover:text-blue-800
                "
              >
                Directions
              </a>

              <a
                :href="contactServiceArea.map.largerMapUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  text-xs font-extrabold
                  text-blue-700
                  hover:text-blue-800
                "
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
