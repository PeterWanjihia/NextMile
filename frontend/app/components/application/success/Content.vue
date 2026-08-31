<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { applicationSuccess } from '~/data/application';
</script>

<template>
  <div class="bg-white">
    <UiContainer>
      <div
        class="
          grid gap-5 py-10
          md:grid-cols-2
          lg:grid-cols-3 lg:gap-7 lg:py-12
        "
      >
        <section
          class="
            rounded-xl border border-slate-200
            bg-white p-5 sm:p-6
          "
          aria-labelledby="next-steps-heading"
        >
          <span
            class="
              mx-auto inline-flex size-14
              items-center justify-center rounded-full
              bg-blue-50 text-blue-700
            "
          >
            <Icon
              name="lucide:clock-3"
              class="size-8"
              aria-hidden="true"
            />
          </span>

          <h2
            id="next-steps-heading"
            class="
              mt-4 text-center text-lg font-extrabold
              text-slate-950
            "
          >
            What Happens Next?
          </h2>

          <ol class="relative mt-7 space-y-6">
            <div
              class="
                absolute bottom-4 left-[0.4375rem]
                top-4 w-px bg-blue-500
              "
              aria-hidden="true"
            />

            <li
              v-for="step in applicationSuccess.nextSteps"
              :key="step.id"
              class="relative flex items-start gap-4"
            >
              <span
                class="
                  relative z-10 mt-1.5 size-3
                  shrink-0 rounded-full border-2
                  border-white bg-blue-600
                  ring-1 ring-blue-600
                "
                aria-hidden="true"
              />

              <Icon
                :name="step.icon"
                class="mt-0.5 size-5 shrink-0 text-blue-700"
                aria-hidden="true"
              />

              <div>
                <h3 class="text-sm font-extrabold text-slate-900">
                  {{ step.title }}
                </h3>

                <p
                  class="
                    mt-1 text-xs leading-5 text-slate-600
                  "
                >
                  {{ step.description }}
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section
          class="
            rounded-xl border border-slate-200
            bg-white p-5 sm:p-6
          "
          aria-labelledby="response-heading"
        >
          <span
            class="
              mx-auto inline-flex size-14
              items-center justify-center rounded-full
              bg-blue-50 text-blue-700
            "
          >
            <Icon
              name="lucide:timer-reset"
              class="size-8"
              aria-hidden="true"
            />
          </span>

          <h2
            id="response-heading"
            class="
              mt-4 text-center text-lg font-extrabold
              text-slate-950
            "
          >
            Expected Response Time
          </h2>

          <div
            class="
              mt-7 rounded-xl border border-blue-200
              bg-blue-50/70 p-5
            "
          >
            <p
              class="
                flex items-center gap-2 text-lg
                font-black text-slate-950
              "
            >
              <Icon
                name="lucide:calendar-days"
                class="size-5 text-blue-700"
                aria-hidden="true"
              />

              Within 24–48 Hours
            </p>

            <p
              class="
                mt-4 text-sm leading-6 text-slate-700
              "
            >
              Most applicants hear from us within one
              business day. You’ll receive a call or text
              from our team.
            </p>

            <div class="mt-5 border-t border-blue-200 pt-5">
              <p class="text-xs font-bold text-slate-700">
                Questions in the meantime?
              </p>

              <a
                :href="businessConfig.phone.href"
                class="
                  mt-2 inline-flex items-center gap-2
                  text-xl font-black text-blue-700
                  hover:text-blue-800
                "
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
        </section>

        <section
          class="
            rounded-xl border border-slate-200
            bg-white p-5 sm:p-6
            md:col-span-2
            lg:col-span-1
          "
          aria-labelledby="documents-heading"
        >
          <span
            class="
              mx-auto inline-flex size-14
              items-center justify-center rounded-full
              bg-blue-50 text-blue-700
            "
          >
            <Icon
              name="lucide:clipboard-list"
              class="size-8"
              aria-hidden="true"
            />
          </span>

          <h2
            id="documents-heading"
            class="
              mt-4 text-center text-lg font-extrabold
              text-slate-950
            "
          >
            Documents You May Need Later
          </h2>

          <p class="mt-7 text-sm leading-6 text-slate-700">
            If approved, we may ask for the following
            documents before finalizing your rental:
          </p>

          <ul class="mt-5 space-y-3">
            <li
              v-for="document in applicationSuccess.documents"
              :key="document"
              class="
                flex items-start gap-3
                text-sm leading-5 text-slate-700
              "
            >
              <Icon
                name="lucide:circle-check"
                class="mt-0.5 size-4 shrink-0 text-emerald-600"
                aria-hidden="true"
              />

              {{ document }}
            </li>
          </ul>

          <p class="mt-6 text-sm font-semibold text-slate-700">
            We’ll guide you through the process.
          </p>
        </section>
      </div>

      <section
        class="
          flex items-center gap-4 rounded-xl
          border border-amber-200 bg-amber-50
          p-5 sm:p-6
        "
        aria-labelledby="sensitive-information-heading"
      >
        <span
          class="
            inline-flex size-12 shrink-0
            items-center justify-center rounded-full
            bg-amber-100 text-amber-700
          "
        >
          <Icon
            name="lucide:triangle-alert"
            class="size-6"
            aria-hidden="true"
          />
        </span>

        <div class="min-w-0 flex-1">
          <h2
            id="sensitive-information-heading"
            class="text-base font-extrabold text-slate-950"
          >
            Do Not Email Sensitive Information
          </h2>

          <p class="mt-1 text-sm leading-6 text-slate-700">
            For your security, please do not email or text
            sensitive documents such as your Social Security
            number, full card details, or checking account
            information. We will request secure uploads when needed.
          </p>
        </div>

        <Icon
          name="lucide:mail-warning"
          class="
            hidden size-14 shrink-0 text-amber-700
            sm:block
          "
          aria-hidden="true"
        />
      </section>

      <section
        class="
          mt-4 flex items-center gap-4 rounded-xl
          border border-emerald-200 bg-emerald-50
          p-5 sm:p-6
        "
        aria-labelledby="security-heading"
      >
        <span
          class="
            inline-flex size-12 shrink-0
            items-center justify-center rounded-full
            bg-emerald-100 text-emerald-700
          "
        >
          <Icon
            name="lucide:shield-check"
            class="size-6"
            aria-hidden="true"
          />
        </span>

        <div class="min-w-0 flex-1">
          <h2
            id="security-heading"
            class="text-base font-extrabold text-slate-950"
          >
            Your Information Is Safe With Us
          </h2>

          <p class="mt-1 text-sm leading-6 text-slate-700">
            We use industry-standard security practices to
            protect your personal information. We’ll only use
            it to process your application and communicate with you.
          </p>
        </div>

        <Icon
          name="lucide:lock-keyhole"
          class="
            hidden size-14 shrink-0 text-emerald-700
            sm:block
          "
          aria-hidden="true"
        />
      </section>

      <div class="py-12 text-center sm:py-14">
        <p
          class="
            text-base font-medium leading-7 text-slate-800
          "
        >
          We appreciate your interest in NextMile Rentals.

          <span class="block">
            We’ll be in touch soon!
          </span>
        </p>

        <UiButton
          to="/"
          class="
            mt-6 w-full max-w-[18rem]
            sm:w-auto sm:min-w-[18rem]
          "
        >
          <Icon
            name="lucide:house"
            class="size-5"
            aria-hidden="true"
          />

          Return to Homepage
        </UiButton>
      </div>
    </UiContainer>
  </div>
</template>
