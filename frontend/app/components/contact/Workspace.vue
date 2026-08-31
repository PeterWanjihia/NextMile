<template>
  <section
    class="
      bg-white py-5
      sm:py-6
    "
    aria-labelledby="contact-workspace-heading"
  >
    <UiContainer>
      <h2
        id="contact-workspace-heading"
        class="sr-only"
      >
        Contact information and message form
      </h2>

      <div
        class="
          grid items-stretch gap-4
          lg:grid-cols-[minmax(18rem,0.76fr)_minmax(0,1.24fr)]
          lg:gap-5
        "
      >
        <ContactInfo />
        <ContactForm />
      </div>
    </UiContainer>
  </section>
</template>
