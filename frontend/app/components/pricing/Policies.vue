<script setup lang="ts">
import {
  pricingExpectations,
  pricingFees,
  pricingFeesFootnote,
} from '~/data/pricing';
</script>

<template>
  <section
    class="
      bg-white py-4
      sm:py-5
    "
    aria-labelledby="pricing-policies-heading"
  >
    <UiContainer>
      <h2
        id="pricing-policies-heading"
        class="sr-only"
      >
        Rental expectations, fees and policies
      </h2>

      <div
        class="
          grid gap-8
          lg:grid-cols-2 lg:gap-7
        "
      >
        <div>
          <h3
            class="
              text-2xl font-extrabold
              tracking-tight text-slate-950
            "
          >
            What to Expect
          </h3>

          <ul
            class="
              mt-4 grid gap-y-5
              sm:grid-cols-2
              lg:grid-cols-4 lg:gap-y-0
            "
          >
            <li
              v-for="(item, index) in pricingExpectations"
              :key="item.id"
              class="
                min-w-0 px-4
                first:pl-0 last:pr-0
                lg:border-r lg:border-slate-200
                lg:last:border-r-0
              "
              :class="{
                'sm:pl-0': index % 2 === 0,
                'sm:border-r sm:border-slate-200':
                  index % 2 === 0,
              }"
            >
              <Icon
                :name="item.icon"
                class="
                  size-9 text-blue-600
                "
                aria-hidden="true"
              />

              <h4
                class="
                  mt-3 text-sm font-extrabold
                  text-slate-950
                "
              >
                {{ item.title }}
              </h4>

              <p
                class="
                  mt-2 text-xs leading-5
                  text-slate-600
                "
              >
                {{ item.description }}
              </p>
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="
              text-2xl font-extrabold
              tracking-tight text-slate-950
            "
          >
            Additional Fees and Policies
          </h3>

          <dl
            class="
              mt-4 overflow-hidden
              rounded-xl border
              border-[var(--nextmile-panel-border)]
              bg-white
            "
          >
            <div
              v-for="fee in pricingFees"
              :key="fee.id"
              class="
                grid min-w-0
                grid-cols-[auto_minmax(0,1fr)]
                gap-x-3 border-b
                border-slate-200 px-4 py-2.5
                last:border-b-0
                sm:grid-cols-[auto_minmax(0,1fr)_minmax(8rem,auto)]
                sm:items-center
              "
            >
              <Icon
                :name="fee.icon"
                class="
                  size-5 shrink-0
                  text-blue-600
                "
                aria-hidden="true"
              />

              <dt
                class="
                  min-w-0 text-sm
                  text-slate-600
                "
              >
                {{ fee.label }}
              </dt>

              <dd
                class="
                  col-start-2 mt-1
                  text-sm font-extrabold
                  leading-5 text-slate-950
                  sm:col-start-3 sm:mt-0
                  sm:text-right
                "
              >
                {{ fee.value }}
              </dd>
            </div>
          </dl>

          <p
            class="
              mt-3 text-xs leading-5
              text-slate-500
            "
          >
            {{ pricingFeesFootnote }}
          </p>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
