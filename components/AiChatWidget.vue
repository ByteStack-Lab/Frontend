<template>
  <div class="fixed bottom-6 right-6 z-[9000]">
    <!-- Chat panel -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-4 scale-95"
    >
      <div
        v-if="isOpen"
        class="mb-4 w-[calc(100vw-3rem)] max-w-sm h-[28rem] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
      >
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">ByteStackLab Assistant</p>
              <p class="text-violet-200 text-xs">Usually replies in a few minutes</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            class="text-white/80 hover:text-white transition-colors"
            @click="isOpen = false"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesEl" class="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="flex"
            :class="message.from === 'user' ? 'justify-end' : 'justify-start'"
          >
            <div
              class="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
              :class="
                message.from === 'user'
                  ? 'bg-[#3533cd] text-white rounded-br-sm'
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm'
              "
            >
              {{ message.text }}
            </div>
          </div>

          <div v-if="isTyping" class="flex justify-start">
            <div class="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
            </div>
          </div>
        </div>

        <!-- Quick prompts -->
        <div v-if="messages.length <= 1" class="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
          <button
            v-for="prompt in quickPrompts"
            :key="prompt"
            type="button"
            class="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#3533cd] hover:text-[#3533cd] transition-colors"
            @click="send(prompt)"
          >
            {{ prompt }}
          </button>
        </div>

        <!-- Input -->
        <form class="border-t border-gray-100 p-3 flex items-center gap-2 flex-shrink-0" @submit.prevent="send()">
          <input
            v-model="draft"
            type="text"
            placeholder="Ask about services, pricing, timelines..."
            class="flex-1 text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3533cd]/30 focus:border-[#3533cd]"
          >
          <button
            type="submit"
            :disabled="!draft.trim()"
            class="w-10 h-10 flex-shrink-0 rounded-xl bg-[#3533cd] text-white flex items-center justify-center hover:bg-[#1e1b69] transition-colors disabled:opacity-40 disabled:hover:bg-[#3533cd]"
            aria-label="Send message"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </Transition>

    <!-- Toggle button -->
    <button
      type="button"
      :aria-label="isOpen ? 'Close chat' : 'Open chat'"
      class="w-14 h-14 rounded-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
      @click="isOpen = !isOpen"
    >
      <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
// NOTE: replies are canned/rule-based placeholders, not a real AI backend.
// To wire up a real assistant, replace getReply() below with a call to a
// new backend endpoint (e.g. POST /api/assistant) that proxies to an LLM.

import { ref, nextTick } from "vue";

const isOpen = ref(false);
const draft = ref("");
const isTyping = ref(false);
const messagesEl = ref(null);

const messages = ref([
  {
    from: "bot",
    text: "Hi! I'm the ByteStackLab assistant. Ask me about our services, pricing, or how we work — I'll do my best to help.",
  },
]);

const quickPrompts = [
  "What services do you offer?",
  "How much does a project cost?",
  "How do I get started?",
];

const scrollToBottom = async () => {
  await nextTick();
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight;
  }
};

// Simple keyword-matched canned responses so the widget is useful out of the
// box even before a real AI backend is wired up.
const getReply = (text) => {
  const lower = text.toLowerCase();

  if (lower.includes("price") || lower.includes("cost") || lower.includes("much")) {
    return "Pricing depends on scope, but MVPs typically start around $3,000 and full products around $8,000. Book a free discovery call and we'll put together an exact quote for your project.";
  }
  if (lower.includes("service") || lower.includes("offer") || lower.includes("do you")) {
    return "We build web apps, mobile apps, SaaS products, and AI/automation solutions — from MVPs to full production systems. Which of those is closest to what you're planning?";
  }
  if (lower.includes("start") || lower.includes("begin") || lower.includes("contact")) {
    return "The best first step is a free discovery call — just head to our Contact page and send a message. We usually reply within 24 hours.";
  }
  if (lower.includes("ai") || lower.includes("automation") || lower.includes("chatbot")) {
    return "We build AI chatbots, workflow automation, and LLM integrations. Take a look at our AI & Automation page for details, or ask me anything specific.";
  }
  if (lower.includes("time") || lower.includes("long") || lower.includes("timeline")) {
    return "Most MVPs take 4–6 weeks; full products are typically 2–4 months depending on scope. We'll give you a real timeline after a quick discovery call.";
  }

  return "Thanks for the message! For anything specific to your project, the fastest way to get a real answer is through our Contact page — our team replies within 24 hours.";
};

const send = (text) => {
  const value = (text ?? draft.value).trim();
  if (!value) return;

  messages.value.push({ from: "user", text: value });
  draft.value = "";
  scrollToBottom();

  isTyping.value = true;
  setTimeout(() => {
    messages.value.push({ from: "bot", text: getReply(value) });
    isTyping.value = false;
    scrollToBottom();
  }, 700);
};
</script>
