<script setup lang="ts">
import {
  documentsYouMayNeed,
  documentReviewNotice,
  platformGuidelines,
} from '~/data/requirements';
</script>

<template>
  <section
    class="bg-white py-2 sm:py-3"
    aria-labelledby="requirements-guidance-heading"
  >
    <UiContainer>
      <h2
        id="requirements-guidance-heading"
        class="sr-only"
      >
        Documents, platform and location guidelines
      </h2>

      <div
        class="
          grid items-stretch gap-4
          lg:grid-cols-2
        "
      >
        <article
          class="
            flex h-full min-w-0 flex-col
            rounded-xl border
            border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            p-5 sm:p-6
            lg:p-4
          "
          aria-labelledby="documents-heading"
        >
          <h3
            id="documents-heading"
            class="
              text-xl font-extrabold
              tracking-tight text-slate-950
              sm:text-2xl
              lg:text-xl
            "
          >
            What You May Need Later
          </h3>

          <ul
            class="
              mt-4 space-y-3
              lg:mt-3 lg:space-y-2
            "
          >
            <li
              v-for="item in documentsYouMayNeed"
              :key="item.id"
              class="
                flex min-w-0
                items-start gap-3
                lg:gap-2
              "
            >
              <Icon
                :name="item.icon"
                class="
                  mt-0.5 size-5 shrink-0
                  text-blue-600
                "
                aria-hidden="true"
              />

              <div class="min-w-0">
                <h4
                  class="
                    text-sm font-extrabold
                    leading-5 text-slate-950
                    lg:text-xs lg:leading-4
                  "
                >
                  {{ item.title }}
                </h4>

                <p
                  class="
                    text-xs leading-5
                    text-slate-600
                    lg:text-[0.6875rem]
                    lg:leading-4
                  "
                >
                  {{ item.description }}
                </p>
              </div>
            </li>
          </ul>

          <div
            class="
              mt-auto flex items-start gap-3
              rounded-lg border border-blue-100
              bg-blue-50/70 px-4 py-3
              lg:px-3 lg:py-2
            "
          >
            <Icon
              :name="documentReviewNotice.icon"
              class="
                mt-0.5 size-5 shrink-0
                text-blue-600
              "
              aria-hidden="true"
            />

            <p
              class="
                text-xs leading-5
                text-slate-600
              "
            >
              <strong
                class="
                  block font-extrabold
                  text-slate-950
                "
              >
                {{ documentReviewNotice.title }}
              </strong>

              {{ documentReviewNotice.description }}
            </p>
          </div>
        </article>

        <article
          class="
            h-full min-w-0
            rounded-xl border
            border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            p-5 sm:p-6
            lg:p-4
          "
          aria-labelledby="platform-guidelines-heading"
        >
          <h3
            id="platform-guidelines-heading"
            class="
              text-xl font-extrabold
              tracking-tight text-slate-950
              sm:text-2xl
              lg:text-xl
            "
          >
            Platform and Location Guidelines
          </h3>

          <ul
            class="
              mt-4 grid gap-3
              sm:grid-cols-2
              lg:mt-3 lg:grid-cols-6
              lg:gap-2
            "
          >
            <li
              v-for="(item, index) in platformGuidelines"
              :key="item.id"
              class="
                flex min-w-0 flex-col
                items-center rounded-lg
                border border-slate-200
                bg-white px-4 py-4
                text-center
                lg:px-3 lg:py-3
              "
              :class="
                index < 3
                  ? 'lg:col-span-2'
                  : 'lg:col-span-3'
              "
            >
              <Icon
                :name="item.icon"
                class="
                  size-9 text-blue-600
                  lg:size-7
                "
                aria-hidden="true"
              />

              <h4
                class="
                  mt-3 text-sm font-extrabold
                  leading-5 text-slate-950
                  lg:mt-2 lg:text-xs
                  lg:leading-4
                "
              >
                {{ item.title }}
              </h4>

              <p
                class="
                  mt-2 text-xs leading-5
                  text-slate-600
                  lg:mt-1.5
                  lg:text-[0.625rem]
                  lg:leading-3.5
                "
              >
                {{ item.description }}
              </p>
            </li>
          </ul>
        </article>
      </div>
    </UiContainer>
  </section>
</template>
