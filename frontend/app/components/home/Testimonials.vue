<script setup lang="ts">
import { homeTestimonials } from '~/data/homepage';
</script>

<template>
  <section
    id="testimonials"
    class="
      scroll-mt-32
      bg-white
      pt-2 pb-2
      sm:pt-3 sm:pb-3
      lg:scroll-mt-36
      lg:pt-2 lg:pb-2
    "
    aria-labelledby="home-testimonials-heading"
  >
    <UiContainer>
      <h2
        id="home-testimonials-heading"
        class="
          text-center
          text-2xl font-extrabold
          leading-tight tracking-tight
          text-slate-950
          sm:text-3xl
        "
      >
        {{ homeTestimonials.heading }}
      </h2>

      <div
        class="
          mt-5 grid w-full
          gap-4
          md:grid-cols-3
          lg:mt-6
          lg:gap-5
        "
      >
        <figure
          v-for="testimonial in homeTestimonials.items"
          :key="testimonial.id"
          class="
            flex h-full min-w-0
            flex-col
            rounded-xl
            border border-[var(--nextmile-panel-border)]
            bg-[var(--nextmile-card-cool)]
            px-5 py-5
            shadow-[0_6px_20px_rgb(16_42_67_/_4%)]
            sm:px-6 sm:py-6
          "
        >
          <!-- Decorative quotation mark -->
          <Icon
            name="lucide:quote"
            class="
              size-8
              text-blue-200
            "
            aria-hidden="true"
          />

          <blockquote
            class="
              mt-2 flex-1
              text-[0.9375rem] leading-6
              text-slate-700
            "
          >
            <p>
              “{{ testimonial.quote }}”
            </p>
          </blockquote>

          <figcaption
            class="
              mt-5 flex
              items-center gap-3
            "
          >
            <NuxtImg
              :src="testimonial.person.image.src"
              :alt="testimonial.person.image.alt"
              :width="testimonial.person.image.width"
              :height="testimonial.person.image.height"
              sizes="48px"
              loading="lazy"
              class="
                size-12 shrink-0
                rounded-full
                border border-slate-200
                object-cover
                shadow-sm
              "
              :style="{
                objectPosition:
                  testimonial.person.image.objectPosition
                  ?? 'center',
              }"
            />

            <div class="min-w-0">
              <cite
                class="
                  block truncate
                  text-sm font-extrabold
                  not-italic
                  text-slate-950
                "
              >
                {{ testimonial.person.name }}
              </cite>

              <p
                class="
                  mt-0.5 truncate
                  text-xs
                  text-slate-600
                "
              >
                {{ testimonial.person.role }}
              </p>
            </div>
          </figcaption>
        </figure>
      </div>

      <p
        class="
          mt-3 text-center
          text-xs font-medium
          text-slate-500
        "
      >
        {{ homeTestimonials.trustStatement }}
      </p>
    </UiContainer>
  </section>
</template>