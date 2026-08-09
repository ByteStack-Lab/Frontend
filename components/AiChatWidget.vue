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
        class="mb-4 w-[calc(100vw-3rem)] max-w-sm h-[30rem] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
      >
        <!-- Header -->
        <div class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <svg aria-hidden="true" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">ByteStackLab Assistant</p>
              <p class="text-violet-200 text-xs">Instant answers — no waiting</p>
            </div>
          </div>
          <button
            type="button"
            aria-label="Close chat"
            class="text-white/80 hover:text-white transition-colors"
            @click="isOpen = false"
          >
            <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              class="max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
              :class="
                message.from === 'user'
                  ? 'bg-[#3533cd] text-white rounded-br-sm'
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-sm'
              "
            >
              <!-- Every response.text here is a hand-written PHP string literal
                   (see AssistantIntentResolver) — never model output or
                   admin rich-text — so plain interpolation is intentionally
                   used instead of v-html + sanitizeHtml. -->
              <p>{{ message.text }}</p>

              <div v-if="message.items && message.items.length" class="mt-2 space-y-1.5">
                <NuxtLink
                  v-for="item in message.items"
                  :key="item.url + item.title"
                  :to="item.url"
                  class="flex items-center justify-between gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-xs hover:border-[#3533cd] transition-colors"
                  @click="isOpen = false"
                >
                  <span class="font-medium text-gray-800">{{ item.title }}</span>
                  <span v-if="item.meta" class="text-[#3533cd] whitespace-nowrap">{{ item.meta }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>

          <div v-if="isSending" class="flex justify-start">
            <div class="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]" />
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]" />
              <span class="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
            </div>
          </div>

          <!-- Inline lead capture — posts to the existing, unmodified
               /contact/submit endpoint. No new backend surface. -->
          <div v-if="leadFormVisible" class="flex justify-start">
            <form
              class="max-w-[90%] w-full bg-white border border-gray-100 rounded-2xl rounded-bl-sm p-3 space-y-2"
              @submit.prevent="submitLead"
            >
              <input
                v-model="leadForm.name"
                type="text"
                aria-label="Your name"
                placeholder="Your name"
                required
                class="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3533cd]/30 focus:border-[#3533cd]"
              >
              <input
                v-model="leadForm.email"
                type="email"
                aria-label="Your email"
                placeholder="Your email"
                required
                class="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3533cd]/30 focus:border-[#3533cd]"
              >
              <!-- Honeypot — same field name the rest of the API expects
                   (ContactSubmitRequest), so the existing server-side
                   handling covers this form too. Hidden from real visitors. -->
              <input
                v-model="leadForm.bslHp"
                type="text"
                tabindex="-1"
                autocomplete="off"
                aria-hidden="true"
                class="hidden"
              >
              <button
                type="submit"
                :disabled="leadSubmitting"
                class="w-full text-sm font-medium px-3 py-2 rounded-lg bg-[#3533cd] text-white hover:bg-[#1e1b69] transition-colors disabled:opacity-40"
              >
                {{ leadSubmitting ? 'Sending…' : 'Send' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Quick reply / intent chips -->
        <div v-if="currentChips.length" class="px-4 pb-2 flex flex-wrap gap-2 flex-shrink-0">
          <button
            v-for="chip in currentChips"
            :key="chip.label"
            type="button"
            class="text-xs px-3 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:border-[#3533cd] hover:text-[#3533cd] transition-colors"
            @click="handleChipTap(chip)"
          >
            {{ chip.label }}
          </button>
        </div>

        <!-- Input -->
        <form class="border-t border-gray-100 p-3 flex items-center gap-2 flex-shrink-0" @submit.prevent="handleSend">
          <input
            ref="inputEl"
            v-model="draft"
            type="text"
            aria-label="Ask about services, pricing, careers"
            placeholder="Ask about services, pricing, careers..."
            :disabled="isSending"
            class="flex-1 text-sm px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#3533cd]/30 focus:border-[#3533cd] disabled:opacity-60"
          >
          <button
            type="submit"
            :disabled="!draft.trim() || isSending"
            class="w-10 h-10 flex-shrink-0 rounded-xl bg-[#3533cd] text-white flex items-center justify-center hover:bg-[#1e1b69] transition-colors disabled:opacity-40 disabled:hover:bg-[#3533cd]"
            aria-label="Send message"
          >
            <svg aria-hidden="true" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg v-if="!isOpen" aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <svg v-else aria-hidden="true" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup>
// Deterministic assistant — every reply comes from
// POST /api/assistant/resolve (App\Services\AssistantIntentResolver on the
// backend), matched against real services/FAQs/jobs/content. No external AI
// API call, no cost. See AI-ASSISTANT-IMPLEMENTATION.md Phase 0.

import { ref, nextTick } from 'vue'

const { resolveAssistant, submitContact } = useApi()

const isOpen = ref(false)
const draft = ref('')
const isSending = ref(false)
const messagesEl = ref(null)
const inputEl = ref(null)

const messages = ref([
  {
    from: 'bot',
    text: "Hi! I'm the ByteStackLab assistant. Ask me about our services, pricing, or open roles — I answer instantly from our real data.",
    items: [],
  },
])

const INTRO_CHIPS = [
  { label: 'Web App', intent: 'web' },
  { label: 'Mobile App', intent: 'mobile' },
  { label: 'SaaS', intent: 'saas' },
  { label: 'AI Automation', intent: 'ai' },
  { label: 'Careers', intent: 'career' },
  { label: 'Something else', intent: null },
]

const currentChips = ref(INTRO_CHIPS)

// A per-tab conversation id, generated once and reused for every message so
// the backend can group them into one AssistantConversation for Filament
// visibility (see AssistantController::logConversation). sessionStorage, not
// localStorage — a chat thread shouldn't outlive the tab.
const CONVERSATION_STORAGE_KEY = 'bsl_assistant_conversation_id'
const conversationId = ref(null)
if (import.meta.client) {
  const stored = sessionStorage.getItem(CONVERSATION_STORAGE_KEY)
  conversationId.value = stored || crypto.randomUUID()
  if (!stored) sessionStorage.setItem(CONVERSATION_STORAGE_KEY, conversationId.value)
}

// This is a separate, purely client-side convenience — unrelated to logging
// above: it lets a follow-up quick reply like "What's the price?" carry the
// previously-discussed service's name along, since the resolver only sees
// one message at a time and has no memory of its own between requests.
const lastServiceTitle = ref(null)

const leadFormVisible = ref(false)
const leadForm = ref({ name: '', email: '', bslHp: '' })
const leadSubmitting = ref(false)

const scrollToBottom = async () => {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}

const applyResult = (result) => {
  messages.value.push({ from: 'bot', text: result.text, items: result.items || [] })

  if ((result.type === 'services' || result.type === 'quote') && result.items?.length === 1) {
    lastServiceTitle.value = result.items[0].title
  } else if (result.type !== 'faq') {
    // Leave lastServiceTitle alone on an FAQ answer — it's often a tangent
    // on the same service, not a topic change. Any other type (a multi-item
    // list, jobs, content, fallback, lead prompt) clears it: showing several
    // services or switching topics makes "the current service" ambiguous.
    lastServiceTitle.value = null
  }

  leadFormVisible.value = result.type === 'lead_prompt'
  currentChips.value = (result.quick_replies || []).map((label) => ({ label, intent: null }))
}

const resolve = async (payload, displayText) => {
  messages.value.push({ from: 'user', text: displayText })
  currentChips.value = []
  scrollToBottom()

  isSending.value = true
  try {
    const result = await resolveAssistant({ ...payload, conversation_id: conversationId.value })
    applyResult(result)
  } catch (error) {
    console.error('Error resolving assistant message:', error)
    messages.value.push({
      from: 'bot',
      text: 'Something went wrong on my end. You can reach the team directly instead.',
      items: [{ title: 'Contact us', url: '/contact', meta: '' }],
    })
    currentChips.value = INTRO_CHIPS
  } finally {
    isSending.value = false
    scrollToBottom()
  }
}

const handleSend = () => {
  const text = draft.value.trim()
  if (!text || isSending.value) return

  draft.value = ''
  resolve({ message: text }, text)
}

const handleChipTap = (chip) => {
  if (isSending.value) return

  if (chip.label === 'Something else' && !chip.intent) {
    messages.value.push({ from: 'bot', text: "Sure — what's on your mind?", items: [] })
    currentChips.value = []
    scrollToBottom()
    nextTick(() => inputEl.value?.focus())
    return
  }

  if (chip.intent) {
    resolve({ intent: chip.intent }, chip.label)
    return
  }

  // A quick-reply chip from a previous response — send as free text,
  // carrying the last-discussed service forward so context isn't lost.
  const composed = lastServiceTitle.value ? `${chip.label} ${lastServiceTitle.value}` : chip.label
  resolve({ message: composed }, chip.label)
}

const submitLead = async () => {
  if (!leadForm.value.name.trim() || !leadForm.value.email.trim()) return

  leadSubmitting.value = true
  try {
    const nameParts = leadForm.value.name.trim().split(/\s+/)
    const recentUserText = messages.value
      .filter((message) => message.from === 'user')
      .slice(-3)
      .map((message) => message.text)
      .join(' | ')

    await submitContact({
      first_name: nameParts[0],
      last_name: nameParts.slice(1).join(' ') || '-',
      email: leadForm.value.email.trim(),
      phone: null,
      company: null,
      service: lastServiceTitle.value,
      message: lastServiceTitle.value
        ? `[From AI assistant] Asked about: ${lastServiceTitle.value}. ${recentUserText}`
        : `[From AI assistant] ${recentUserText || 'Visitor requested contact via the chat widget.'}`,
      subscribe_newsletter: false,
      bsl_hp: leadForm.value.bslHp,
    })

    leadFormVisible.value = false
    messages.value.push({
      from: 'bot',
      text: 'Thanks! The team has your details and will follow up by email.',
      items: [],
    })
    leadForm.value = { name: '', email: '', bslHp: '' }
    currentChips.value = INTRO_CHIPS
  } catch (error) {
    console.error('Error submitting assistant lead form:', error)
    messages.value.push({
      from: 'bot',
      text: "That didn't go through. You can also reach us directly at /contact.",
      items: [{ title: 'Contact us', url: '/contact', meta: '' }],
    })
  } finally {
    leadSubmitting.value = false
    scrollToBottom()
  }
}
</script>
