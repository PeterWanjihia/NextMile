<script setup lang="ts">
import { businessConfig } from '~/config/business';
import { contactTopics } from '~/data/contact';

const form = reactive({
  fullName: '',
  phone: '',
  email: '',
  topic: '',
  message: '',
  consent: false,
});

function submitMessage(): void {
  const selectedTopic =
    contactTopics.find(
      topic => topic.id === form.topic,
    )?.label ?? 'General question';

  const subject =
    `NextMile website enquiry: ${selectedTopic}`;

  const body = [
    `Name: ${form.fullName}`,
    `Phone: ${form.phone || 'Not provided'}`,
    `Email: ${form.email}`,
    `Topic: ${selectedTopic}`,
    '',
    form.message,
  ].join('\n');

  window.location.href =
    `${businessConfig.email.href}`
    + `?subject=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;
}
</script>

<template>
  <form
    class="
      min-w-0 rounded-xl
      border border-[var(--nextmile-panel-border)]
      bg-white p-5
      shadow-[0_2px_12px_rgb(16_42_67_/_3%)]
      sm:p-6
    "
    @submit.prevent="submitMessage"
  >
    <h2
      class="
        text-2xl font-extrabold
        tracking-tight text-slate-950
      "
    >
      Send Us a Message
    </h2>

    <p
      class="
        mt-1 text-sm leading-6
        text-slate-600
      "
    >
      Fill out the form below and we’ll get back to you.
    </p>

    <div
      class="
        mt-5 grid gap-4
        sm:grid-cols-2
      "
    >
      <label
        class="
          block text-sm font-bold
          text-slate-900
        "
      >
        Full Name

        <span class="text-red-600">*</span>

        <input
          v-model.trim="form.fullName"
          type="text"
          name="name"
          autocomplete="name"
          required
          placeholder="Enter your full name"
          class="
            mt-2 min-h-11 w-full
            rounded-lg border border-slate-300
            bg-white px-3.5 py-2.5
            text-sm font-normal text-slate-900
            outline-none transition
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-100
          "
        >
      </label>

      <label
        class="
          block text-sm font-bold
          text-slate-900
        "
      >
        Phone Number

        <span class="text-red-600">*</span>

        <input
          v-model.trim="form.phone"
          type="tel"
          name="phone"
          autocomplete="tel"
          required
          placeholder="(555) 123-4567"
          class="
            mt-2 min-h-11 w-full
            rounded-lg border border-slate-300
            bg-white px-3.5 py-2.5
            text-sm font-normal text-slate-900
            outline-none transition
            placeholder:text-slate-400
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-100
          "
        >
      </label>
    </div>

    <label
      class="
        mt-4 block text-sm font-bold
        text-slate-900
      "
    >
      Email Address

      <span class="text-red-600">*</span>

      <input
        v-model.trim="form.email"
        type="email"
        name="email"
        autocomplete="email"
        required
        placeholder="Enter your email address"
        class="
          mt-2 min-h-11 w-full
          rounded-lg border border-slate-300
          bg-white px-3.5 py-2.5
          text-sm font-normal text-slate-900
          outline-none transition
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-100
        "
      >
    </label>

    <label
      class="
        mt-4 block text-sm font-bold
        text-slate-900
      "
    >
      What can we help you with?

      <span class="text-red-600">*</span>

      <select
        v-model="form.topic"
        name="topic"
        required
        class="
          mt-2 min-h-11 w-full
          rounded-lg border border-slate-300
          bg-white px-3.5 py-2.5
          text-sm font-normal text-slate-700
          outline-none transition
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-100
        "
      >
        <option
          value=""
          disabled
        >
          Select a topic
        </option>

        <option
          v-for="topic in contactTopics"
          :key="topic.id"
          :value="topic.id"
        >
          {{ topic.label }}
        </option>
      </select>
    </label>

    <label
      class="
        mt-4 block text-sm font-bold
        text-slate-900
      "
    >
      Your Message

      <span class="text-red-600">*</span>

      <textarea
        v-model.trim="form.message"
        name="message"
        rows="5"
        required
        placeholder="Type your message here..."
        class="
          mt-2 w-full resize-y
          rounded-lg border border-slate-300
          bg-white px-3.5 py-3
          text-sm font-normal leading-6
          text-slate-900
          outline-none transition
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-100
        "
      />
    </label>

    <label
      class="
        mt-4 flex cursor-pointer
        items-start gap-3
        text-xs leading-5
        text-slate-600
      "
    >
      <input
        v-model="form.consent"
        type="checkbox"
        name="consent"
        required
        class="
          mt-0.5 size-4 shrink-0
          rounded border-slate-300
          text-blue-600
          focus:ring-blue-500
        "
      >

      <span>
        I agree to the

        <NuxtLink
          to="/privacy"
          class="
            font-bold text-blue-700
            hover:text-blue-800
          "
        >
          Privacy Policy
        </NuxtLink>

        and consent to being contacted by NextMile Rentals.
      </span>
    </label>

    <UiButton
      type="submit"
      class="mt-5 w-full"
    >
      <Icon
        name="lucide:send"
        class="size-4"
        aria-hidden="true"
      />

      Send Message
    </UiButton>
  </form>
</template>
