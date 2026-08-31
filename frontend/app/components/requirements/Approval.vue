<script setup lang="ts">
import {
  approvalRisks,
  approvalSteps,
} from '~/data/requirements';
</script>

<template>
  <section
    class="bg-white py-2 sm:py-3"
    aria-labelledby="requirements-approval-heading"
  >
    <UiContainer>
      <h2
        id="requirements-approval-heading"
        class="sr-only"
      >
        How approval works and what may affect it
      </h2>

      <div
        class="
          grid items-stretch gap-4
          lg:grid-cols-2
        "
      >
        <article
          class="
            h-full min-w-0
            rounded-xl border
            border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            p-5 sm:p-6
          "
          aria-labelledby="approval-process-heading"
        >
          <h3
            id="approval-process-heading"
            class="
              text-xl font-extrabold
              tracking-tight text-slate-950
              sm:text-2xl
            "
          >
            How Approval Works
          </h3>

          <ol
            class="
              mt-4 grid gap-4
              sm:grid-cols-2
              lg:grid-cols-4 lg:gap-3
            "
          >
            <li
              v-for="(step, index) in approvalSteps"
              :key="step.id"
              class="
                relative flex min-w-0 flex-col
              "
            >
              <div
                class="
                  mb-2 flex items-center
                  px-2
                "
                aria-hidden="true"
              >
                <span
                  class="
                    flex size-7 shrink-0
                    items-center justify-center
                    rounded-full bg-blue-600
                    text-xs font-extrabold
                    text-white
                  "
                >
                  {{ index + 1 }}
                </span>

                <span
                  v-if="index < approvalSteps.length - 1"
                  class="
                    ml-2 hidden h-px flex-1
                    border-t border-dashed
                    border-blue-300
                    lg:block
                  "
                />

                <Icon
                  v-if="index < approvalSteps.length - 1"
                  name="lucide:chevron-right"
                  class="
                    -ml-1 hidden size-3
                    shrink-0 text-blue-400
                    lg:block
                  "
                />
              </div>

              <div
                class="
                  flex flex-1 flex-col
                  items-center rounded-lg
                  border border-slate-200
                  bg-white px-3 py-4
                  text-center
                "
              >
                <Icon
                  :name="step.icon"
                  class="
                    size-7 text-blue-600
                  "
                  aria-hidden="true"
                />

                <h4
                  class="
                    mt-3 text-xs font-extrabold
                    leading-4 text-slate-950
                  "
                >
                  {{ step.title }}
                </h4>

                <p
                  class="
                    mt-2 text-[0.6875rem]
                    leading-4 text-slate-600
                  "
                >
                  {{ step.description }}
                </p>
              </div>
            </li>
          </ol>
        </article>

        <article
          class="
            h-full min-w-0
            rounded-xl border
            border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            p-5 sm:p-6
          "
          aria-labelledby="approval-risks-heading"
        >
          <h3
            id="approval-risks-heading"
            class="
              text-xl font-extrabold
              tracking-tight text-slate-950
              sm:text-2xl
            "
          >
            What Can Delay or Affect Approval
          </h3>

          <ul
            class="
              mt-5 grid gap-x-6 gap-y-4
              sm:grid-cols-2
            "
          >
            <li
              v-for="risk in approvalRisks"
              :key="risk.id"
              class="
                flex min-w-0
                items-start gap-3
              "
            >
              <Icon
                name="lucide:triangle-alert"
                class="
                  mt-0.5 size-5 shrink-0
                  text-blue-600
                "
                aria-hidden="true"
              />

              <div class="min-w-0">
                <h4
                  class="
                    text-xs font-extrabold
                    leading-4 text-slate-950
                  "
                >
                  {{ risk.title }}
                </h4>

                <p
                  class="
                    mt-1 text-[0.6875rem]
                    leading-4 text-slate-600
                  "
                >
                  {{ risk.description }}
                </p>
              </div>
            </li>
          </ul>
        </article>
      </div>
    </UiContainer>
  </section>
</template>
