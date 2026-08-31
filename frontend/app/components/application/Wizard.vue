<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { applicationSteps } from '~/data/application';

import type { ApplicationStepId } from '~/types/application';

const {
  form,
  currentStep,
  highestStep,
  currentStepDefinition,
  progress,
  errors,
  submitting,
  submitError,
  continueToNextStep,
  previousStep,
  goToStep,
  submitApplication,
} = useApplicationWizard();

function handleSubmit(): void {
  if (currentStep.value === 5) {
    void submitApplication();
    return;
  }

  void continueToNextStep();
}
</script>

<template>
  <div class="bg-[var(--nextmile-page)]">
    <UiContainer>
      <div
        class="
          grid gap-7 pb-8 pt-8
          lg:grid-cols-[260px_minmax(0,1fr)]
          lg:gap-x-9 lg:pb-10 lg:pt-10
        "
      >
        <header>
          <h1
            class="
              text-2xl font-extrabold tracking-tight
              text-slate-950 sm:text-3xl
            "
          >
            Driver Application
          </h1>

          <p class="mt-1 text-xs text-slate-600 sm:text-sm">
            Complete the steps below to get started.
          </p>
        </header>

        <nav
          class="min-w-0 pb-2"
          aria-label="Application progress"
        >
          <div class="sm:hidden">
            <div class="flex items-center justify-between gap-4">
              <p class="text-sm font-bold text-blue-700">
                Step {{ currentStep }} of 5
              </p>

              <p class="text-xs font-semibold text-slate-500">
                {{ progress }}% complete
              </p>
            </div>

            <div
              class="
                mt-2 h-2 overflow-hidden rounded-full
                bg-slate-200
              "
              role="progressbar"
              aria-label="Application completion"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-valuenow="progress"
            >
              <div
                class="
                  h-full rounded-full bg-blue-600
                  transition-[width] duration-300
                "
                :style="{ width: `${progress}%` }"
              />
            </div>

            <p class="mt-2 text-xs font-semibold text-slate-600">
              {{ currentStepDefinition?.title }}
            </p>
          </div>

          <ol
            class="
              relative hidden grid-cols-5 gap-2
              sm:grid
            "
          >
            <div
              class="
                absolute left-[10%] right-[10%] top-[17px]
                h-px bg-slate-300
              "
              aria-hidden="true"
            />

            <li
              v-for="step in applicationSteps"
              :key="step.id"
              class="relative z-10 min-w-0 text-center"
            >
              <button
                type="button"
                class="
                  group mx-auto flex w-full flex-col
                  items-center rounded-md
                  focus-visible:outline-none
                "
                :class="
                  step.id <= highestStep
                    ? 'cursor-pointer'
                    : 'cursor-default'
                "
                :disabled="step.id > highestStep"
                :aria-current="
                  step.id === currentStep
                    ? 'step'
                    : undefined
                "
                @click="goToStep(step.id)"
              >
                <span
                  class="
                    inline-flex size-9 items-center justify-center
                    rounded-full border text-xs font-bold
                    transition-colors
                  "
                  :class="
                    step.id === currentStep
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : step.id < currentStep
                        ? 'border-blue-600 bg-white text-blue-700'
                        : 'border-slate-300 bg-white text-slate-600'
                  "
                >
                  <Icon
                    v-if="step.id < currentStep"
                    name="lucide:check"
                    class="size-4"
                    aria-hidden="true"
                  />

                  <span v-else>
                    {{ step.id }}
                  </span>
                </span>

                <span
                  class="
                    mt-2 max-w-[7rem]
                    text-[0.6875rem] font-semibold leading-4
                  "
                  :class="
                    step.id === currentStep
                      ? 'text-blue-700'
                      : 'text-slate-600'
                  "
                >
                  {{ step.title }}
                </span>
              </button>
            </li>
          </ol>
        </nav>

        <aside
          class="
            hidden rounded-xl border border-slate-200
            bg-white p-5
            lg:block
          "
          aria-label="Application progress and help"
        >
          <h2 class="text-sm font-extrabold text-slate-950">
            Application Progress
          </h2>

          <div class="mt-3 flex items-center justify-between">
            <p class="text-xs font-semibold text-slate-600">
              Step {{ currentStep }} of 5
            </p>

            <p class="text-xs font-bold text-slate-700">
              {{ progress }}%
            </p>
          </div>

          <div
            class="
              mt-2 h-2 overflow-hidden rounded-full
              bg-slate-200
            "
            role="progressbar"
            aria-label="Application completion"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="progress"
          >
            <div
              class="
                h-full rounded-full bg-blue-600
                transition-[width] duration-300
              "
              :style="{ width: `${progress}%` }"
            />
          </div>

          <p
            class="
              mt-6 text-[0.6875rem] font-bold
              uppercase tracking-wide text-slate-500
            "
          >
            Steps
          </p>

          <ol class="mt-3 space-y-2">
            <li
              v-for="step in applicationSteps"
              :key="step.id"
            >
              <button
                type="button"
                class="
                  flex w-full items-center gap-2 rounded-lg
                  px-2 py-1.5 text-left text-xs
                  transition-colors
                "
                :class="
                  step.id === currentStep
                    ? 'bg-blue-50 font-bold text-blue-700'
                    : step.id <= highestStep
                      ? 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      : 'cursor-default text-slate-400'
                "
                :disabled="step.id > highestStep"
                :aria-current="
                  step.id === currentStep
                    ? 'step'
                    : undefined
                "
                @click="goToStep(step.id)"
              >
                <span
                  class="
                    inline-flex size-5 shrink-0
                    items-center justify-center rounded-full
                    border text-[0.625rem] font-bold
                  "
                  :class="
                    step.id === currentStep
                      ? 'border-blue-600 bg-blue-600 text-white'
                      : 'border-slate-300 bg-white text-slate-600'
                  "
                >
                  {{ step.id }}
                </span>

                {{ step.title }}
              </button>
            </li>
          </ol>

          <div
            class="
              mt-7 rounded-lg border border-blue-200
              bg-blue-50 p-4
            "
          >
            <div class="flex items-start gap-3">
              <Icon
                name="lucide:headphones"
                class="mt-0.5 size-5 shrink-0 text-blue-700"
                aria-hidden="true"
              />

              <div>
                <p class="text-xs font-bold text-blue-800">
                  Need help?
                </p>

                <p class="mt-1 text-xs leading-5 text-slate-600">
                  Call or text us anytime.
                </p>

                <a
                  :href="businessConfig.phone.href"
                  class="
                    mt-1 inline-flex text-xs font-extrabold
                    text-blue-700 hover:text-blue-800
                  "
                >
                  {{ businessConfig.phone.display }}
                </a>
              </div>
            </div>
          </div>

          <div
            class="
              mt-4 rounded-lg border border-amber-200
              bg-amber-50 p-4
            "
          >
            <div class="flex items-start gap-3">
              <Icon
                name="lucide:lock-keyhole"
                class="mt-0.5 size-5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <div>
                <p class="text-xs font-bold text-slate-900">
                  Your information is secure
                </p>

                <p class="mt-1 text-xs leading-5 text-slate-600">
                  This preview stores your progress only in
                  this browser tab.
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div class="min-w-0">
          <form
            class="
              rounded-xl border border-slate-200
              bg-white p-4
              shadow-[0_2px_14px_rgb(16_42_67_/_4%)]
              sm:p-7 lg:p-8
            "
            :aria-labelledby="
              `application-step-${currentStep}`
            "
            novalidate
            @submit.prevent="handleSubmit"
          >
            <h2
              :id="`application-step-${currentStep}`"
              class="sr-only"
            >
              Step {{ currentStep }}:
              {{ currentStepDefinition?.title }}
            </h2>

            <ApplicationStepPersonal
              v-if="currentStep === 1"
              v-model="form"
              :errors="errors"
            />

            <ApplicationStepExperience
              v-else-if="currentStep === 2"
              v-model="form"
              :errors="errors"
            />

            <ApplicationStepVehicle
              v-else-if="currentStep === 3"
              v-model="form"
              :errors="errors"
            />

            <ApplicationStepEligibility
              v-else-if="currentStep === 4"
              v-model="form"
              :errors="errors"
            />

            <ApplicationStepReview
              v-else
              v-model="form"
              :errors="errors"
              @edit="goToStep"
            />

            <p
              v-if="submitError"
              class="
                mt-6 rounded-lg border border-red-200
                bg-red-50 p-3 text-sm font-medium text-red-700
              "
              role="alert"
            >
              {{ submitError }}
            </p>

            <div
              class="
                mt-8 flex flex-wrap items-center gap-3
                border-t border-slate-200 pt-5
              "
            >
              <button
                v-if="currentStep > 1"
                type="button"
                class="
                  inline-flex min-h-11 flex-1 items-center
                  justify-center gap-2
                  rounded-lg border border-slate-300
                  bg-white px-4 text-sm font-bold text-slate-700
                  transition hover:border-blue-300 hover:text-blue-700
                  sm:flex-none
                "
                @click="previousStep"
              >
                <Icon
                  name="lucide:arrow-left"
                  class="size-4"
                  aria-hidden="true"
                />

                Back
              </button>

              <button
                type="submit"
                class="
                  ml-auto inline-flex min-h-11 flex-1
                  items-center justify-center gap-2
                  rounded-lg bg-blue-600 px-5
                  text-sm font-bold text-white
                  transition hover:bg-blue-700
                  disabled:cursor-not-allowed disabled:opacity-60
                  sm:flex-none
                "
                :disabled="submitting"
              >
                <Icon
                  v-if="submitting"
                  name="lucide:loader-circle"
                  class="size-4 animate-spin"
                  aria-hidden="true"
                />

                <span>
                  <span class="sm:hidden">
                    {{
                      currentStep === 5
                        ? submitting
                          ? 'Submitting…'
                          : 'Submit'
                        : 'Continue'
                    }}
                  </span>

                  <span class="hidden sm:inline">
                    {{
                      currentStep === 5
                        ? submitting
                          ? 'Submitting…'
                          : 'Submit Application'
                        : 'Save & Continue'
                    }}
                  </span>
                </span>

                <Icon
                  v-if="!submitting"
                  :name="
                    currentStep === 5
                      ? 'lucide:send'
                      : 'lucide:arrow-right'
                  "
                  class="size-4"
                  aria-hidden="true"
                />
              </button>
            </div>
          </form>

          <p
            class="
              mt-5 flex items-center justify-center gap-2
              text-xs text-slate-500
            "
          >
            <Icon
              name="lucide:lock-keyhole"
              class="size-4 text-blue-700"
              aria-hidden="true"
            />

            Your progress is saved automatically in this tab.
          </p>
        </div>
      </div>
    </UiContainer>

    <ApplicationBenefitsStrip />
  </div>
</template>
