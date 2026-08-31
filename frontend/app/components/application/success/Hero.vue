<script setup lang="ts">
import { applicationSuccess } from '~/data/application';

const props = defineProps<{
  reference: string;
}>();

const copied = ref(false);

async function copyReference(): Promise<void> {
  if (!import.meta.client) {
    return;
  }

  try {
    await navigator.clipboard.writeText(props.reference);
    copied.value = true;

    window.setTimeout(() => {
      copied.value = false;
    }, 2000);
  }
  catch {
    copied.value = false;
  }
}
</script>

<template>
  <section
    class="
      relative overflow-hidden
      border-b border-blue-100 bg-blue-50/70
      py-8 sm:py-12 lg:py-16
    "
    aria-labelledby="application-success-heading"
  >
    <div
      class="
        pointer-events-none absolute -right-32 -top-52
        size-[34rem] rounded-full bg-white/50
      "
      aria-hidden="true"
    />

    <UiContainer>
      <div
        class="
          relative grid items-center gap-8
          md:grid-cols-[auto_minmax(0,1fr)]
          lg:grid-cols-[180px_minmax(0,1fr)_340px]
          lg:gap-10
        "
      >
        <div
          class="
            relative mx-auto flex size-24
            items-center justify-center
            sm:size-32 lg:size-36
          "
          aria-hidden="true"
        >
          <span
            class="
              absolute inset-3 rounded-full
              bg-emerald-600
            "
          />

          <Icon
            name="lucide:check"
            class="
              relative z-10 size-14 text-white
              sm:size-20
            "
          />

          <span
            class="
              absolute left-0 top-2 size-2 rounded-full
              bg-blue-500
            "
          />

          <span
            class="
              absolute bottom-2 right-2 size-2 rounded-full
              bg-emerald-500
            "
          />

          <span
            class="
              absolute right-0 top-6 h-5 w-0.5
              rotate-45 bg-emerald-500
            "
          />

          <span
            class="
              absolute bottom-6 left-1 h-5 w-0.5
              -rotate-45 bg-blue-400
            "
          />
        </div>

        <div class="text-center md:text-left">
          <h1
            id="application-success-heading"
            class="
              text-2xl font-black tracking-tight
              text-slate-950
              min-[420px]:text-3xl
              sm:text-4xl lg:text-5xl
            "
          >
            {{ applicationSuccess.heading }}
          </h1>

          <p
            class="
              mt-2 text-base font-extrabold
              text-emerald-700
              sm:text-xl
            "
          >
            {{ applicationSuccess.accent }}
          </p>

          <p
            class="
              mx-auto mt-4 max-w-2xl
              text-sm leading-6 text-slate-700
              md:mx-0 sm:text-base sm:leading-7
            "
          >
            {{ applicationSuccess.description }}
          </p>
        </div>

        <div
          class="
            md:col-span-2 lg:col-span-1
            rounded-xl border border-slate-200
            bg-white p-5 text-center sm:p-6
            shadow-[0_2px_14px_rgb(16_42_67_/_4%)]
          "
        >
          <p
            class="
              text-xs font-extrabold uppercase
              tracking-wide text-slate-600
            "
          >
            Your application reference
          </p>

          <p
            class="
              mt-3 break-all text-xl font-black
              tracking-tight text-slate-950
              min-[420px]:text-2xl sm:text-3xl
            "
          >
            {{ reference }}
          </p>

          <button
            type="button"
            class="
              mx-auto mt-4 inline-flex items-center gap-2
              rounded-md px-2 py-1
              text-sm font-bold text-blue-700
              transition hover:bg-blue-50 hover:text-blue-800
            "
            @click="copyReference"
          >
            <Icon
              :name="
                copied
                  ? 'lucide:check'
                  : 'lucide:copy'
              "
              class="size-4"
              aria-hidden="true"
            />

            {{
              copied
                ? 'Reference copied'
                : 'Copy reference number'
            }}
          </button>
        </div>
      </div>
    </UiContainer>
  </section>
</template>
