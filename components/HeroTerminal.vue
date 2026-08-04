<template>
  <div class="w-full relative select-none">
    <!-- Outer glow -->
    <div class="absolute -inset-4 bg-gradient-to-r from-[#3533cd]/20 via-purple-500/10 to-[#1e1b69]/20 blur-2xl rounded-3xl pointer-events-none"></div>

    <!-- Terminal Window -->
    <div class="relative rounded-2xl overflow-hidden border border-[#3533cd]/40 shadow-[0_0_50px_rgba(53,51,205,0.25),0_20px_60px_rgba(0,0,0,0.5)]">

      <!-- Window Header -->
      <div class="flex items-center px-4 py-3 bg-[#111127] border-b border-white/5">
        <!-- Traffic lights -->
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.6)]"></div>
          <div class="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_rgba(255,189,46,0.5)]"></div>
          <div class="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.5)]"></div>
        </div>
        <!-- Title -->
        <div class="flex-1 text-center">
          <span class="text-gray-500 text-xs font-mono tracking-wide">root@bytestacklab:~</span>
        </div>
        <!-- Live indicator -->
        <div class="flex items-center gap-1.5">
          <div class="w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse"></div>
          <span class="text-[#28c840] text-xs font-mono">LIVE</span>
        </div>
      </div>

      <!-- Terminal Body -->
      <div
        ref="terminalRef"
        class="relative bg-[#09090f] px-5 py-3 font-mono text-[13px] overflow-hidden"
        style="height: 300px"
      >
        <!-- Scanlines overlay -->
        <div class="absolute inset-0 pointer-events-none scanlines opacity-[0.03]"></div>

        <!-- Completed Lines -->
        <TransitionGroup name="line" tag="div">
          <div
            v-for="line in visibleLines"
            :key="line.id"
            class="leading-[1.5]"
            :class="line.type === 'cmd' ? 'mb-1.5' : 'mb-px'"
          >
            <!-- Command Line: two-row powerline prompt + typed text -->
            <div v-if="line.type === 'cmd'">
              <PromptBar :dir="line.dir" :time="bdTime" />
              <div class="flex items-center flex-wrap" style="padding-left: 2px">
                <span class="text-[#6675F7] font-semibold">❯</span>
                <span class="text-white ml-1.5 tracking-wide">{{ line.text }}</span>
              </div>
            </div>

            <!-- Service Line -->
            <div v-else-if="line.type === 'svc'" class="flex items-center gap-2 pl-5">
              <span class="text-[#3533cd]">◆</span>
              <span class="text-[#a8b4ff]">{{ line.text }}</span>
              <div class="flex-1 border-b border-dashed border-gray-800/80 mx-1"></div>
              <div class="flex items-center gap-1">
                <div class="w-1.5 h-1.5 rounded-full bg-[#28c840]"></div>
                <span class="text-[#28c840] text-[11px]">ready</span>
              </div>
            </div>

            <!-- Key/Value Line -->
            <div v-else-if="line.type === 'kv'" class="pl-5 flex items-baseline gap-2">
              <span class="text-gray-600">{{ line.key }}</span>
              <span class="text-[#67e8f9]">{{ line.value }}</span>
              <span v-if="line.note" class="text-gray-700 text-[11px]">{{ line.note }}</span>
            </div>

            <!-- Output Line -->
            <div v-else-if="line.type === 'out'" class="pl-2" :class="lineColor(line.color)">
              {{ line.text }}
            </div>

            <!-- Empty Line -->
            <div v-else class="h-2"></div>
          </div>
        </TransitionGroup>

        <!-- Currently Typing -->
        <div v-if="isTyping">
          <PromptBar :dir="currentDir" :time="bdTime" />
          <div class="flex items-center" style="padding-left: 2px">
            <span class="text-[#6675F7] font-semibold">❯</span>
            <span class="text-white ml-1.5 tracking-wide">{{ typingText }}</span>
            <span class="inline-block w-[7px] h-[14px] bg-white/80 cursor-blink align-middle ml-px"></span>
          </div>
        </div>

        <!-- Idle Cursor -->
        <div v-else>
          <PromptBar :dir="currentDir" :time="bdTime" />
          <div class="flex items-center" style="padding-left: 2px">
            <span class="text-[#6675F7] font-semibold">❯</span>
            <span class="inline-block w-[7px] h-[14px] bg-white/80 cursor-blink align-middle ml-2"></span>
          </div>
        </div>
      </div>

      <!-- Status Bar -->
      <div class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] px-4 py-1.5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-white/80 text-[11px] font-mono">bash</span>
          <span class="text-white/40 text-[11px]">|</span>
          <span class="text-white/80 text-[11px] font-mono">main</span>
        </div>
        <span class="text-white/60 text-[11px] font-mono">ByteStackLab © 2026</span>
        <span class="text-white/60 text-[11px] font-mono">v2.0</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, h } from 'vue'

// ── Powerline-style prompt segments (left: brand + dir, right: status + BD time) ──
const PromptBar = (props) =>
  h('div', { class: 'flex items-stretch justify-between', style: 'height: 18px' }, [
    h('div', { class: 'flex items-stretch' }, [
      h(
        'span',
        {
          class: 'inline-flex items-center gap-1 px-2 text-[10px]',
          style: 'background:#1b1a3f;color:#6675F7',
        },
        [h('span', '◆')]
      ),
      h('div', { class: 'tri-r', style: 'border-left-color:#1b1a3f' }),
      h(
        'span',
        {
          class: 'inline-flex items-center gap-1 px-2 text-[10px]',
          style: 'background:#232156;color:#67e8f9',
        },
        [
          h(
            'svg',
            { width: '9', height: '9', viewBox: '0 0 14 14', fill: 'currentColor' },
            [h('path', { d: 'M2 4a1 1 0 011-1h3.3l1 1H11a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V4z' })]
          ),
          h('span', props.dir),
        ]
      ),
      h('div', { class: 'tri-r', style: 'border-left-color:#232156' }),
    ]),
    h('div', { class: 'flex items-stretch' }, [
      h('div', { class: 'tri-l', style: 'border-right-color:#3533cd' }),
      h(
        'span',
        { class: 'inline-flex items-center px-2', style: 'background:#3533cd' },
        [
          h(
            'svg',
            { width: '9', height: '9', viewBox: '0 0 12 12', fill: 'none', stroke: '#fff', 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' },
            [h('path', { d: 'M2 6.5l2.5 2.5L10 3' })]
          ),
        ]
      ),
      h('div', { class: 'tri-l', style: 'border-right-color:#1b1a3f' }),
      h(
        'span',
        {
          class: 'inline-flex items-center gap-1 px-2 text-[10px]',
          style: 'background:#1b1a3f;color:#a8b4ff',
        },
        [
          h(
            'svg',
            { width: '9', height: '9', viewBox: '0 0 12 12', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.2' },
            [
              h('circle', { cx: '6', cy: '6', r: '5' }),
              h('path', { d: 'M6 3.2v3l2 1', 'stroke-linecap': 'round' }),
            ]
          ),
          h('span', props.time),
        ]
      ),
    ]),
  ])
PromptBar.props = ['dir', 'time']

const terminalRef = ref(null)
const lines = ref([])
const typingText = ref('')
const isTyping = ref(false)
const currentDir = ref('~')

let lineCounter = 0
let running = true
let currentTimer = null

const newLine = (type, extra = {}) => ({ id: lineCounter++, type, ...extra })

const MAX_VISIBLE = 9
const visibleLines = computed(() => lines.value.slice(-MAX_VISIBLE))

const lineColor = (color) => ({
  'text-[#67e8f9]': color === 'cyan',
  'text-[#28c840]': color === 'green',
  'text-[#fbbf24]': color === 'yellow',
  'text-[#c084fc]': color === 'purple',
  'text-gray-500': color === 'dim',
  'text-[#f87171]': color === 'red',
  'text-gray-300': !color,
})

const sleep = (ms) =>
  new Promise((resolve) => {
    if (!running) return resolve()
    currentTimer = setTimeout(resolve, Math.max(0, ms))
  })

// ── Live Bangladesh clock, shown in the right-hand prompt segment (12h, AM/PM) ──
const bdTime = ref('')
let clockTimer = null
const updateBDTime = () => {
  bdTime.value = new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Dhaka',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })
}

const TYPING_SPEED = 95

// ── Real, navigable commands: whoami -> cd about -> ls -> cd services -> ls -> cd contact -> ls ──
const script = [
  { type: 'cmd', dir: '~', text: 'whoami', pre: 700 },
  { type: 'out', text: 'ByteStackLab', color: 'purple', post: 400 },
  { type: 'blank', post: 120 },

  { type: 'cmd', dir: '~', text: 'cd about', pre: 550 },
  { type: 'blank', post: 100 },
  { type: 'cmd', dir: '~/about', text: 'ls', pre: 500 },
  { type: 'kv', key: 'name     ', value: '"ByteStackLab"', post: 200 },
  { type: 'kv', key: 'bio      ', value: '"Full-stack studio: AI, SaaS & enterprise apps"', post: 200 },
  { type: 'kv', key: 'location ', value: '"Dhaka, Bangladesh 🇧🇩"', post: 200 },
  { type: 'kv', key: 'mission  ', value: '"AI-powered, scalable software"', post: 200 },
  { type: 'kv', key: 'available', value: 'true', note: '  # open for new projects', post: 600 },
  { type: 'blank', post: 120 },

  { type: 'cmd', dir: '~/about', text: 'cd ../services', pre: 550 },
  { type: 'blank', post: 100 },
  { type: 'cmd', dir: '~/services', text: 'ls', pre: 500 },
  { type: 'svc', text: 'AI & Automation', post: 240 },
  { type: 'svc', text: 'Web Development', post: 240 },
  { type: 'svc', text: 'Mobile App Development', post: 240 },
  { type: 'svc', text: 'SaaS Products', post: 240 },
  { type: 'svc', text: 'Cyber Security', post: 240 },
  { type: 'svc', text: 'UI/UX Design', post: 600 },
  { type: 'blank', post: 120 },

  { type: 'cmd', dir: '~/services', text: 'cd ../contact', pre: 550 },
  { type: 'blank', post: 100 },
  { type: 'cmd', dir: '~/contact', text: 'ls', pre: 500 },
  { type: 'kv', key: 'phone  ', value: '"+880 1812 209019"', post: 200 },
  { type: 'kv', key: 'email  ', value: '"hello@bytestacklab.com"', post: 200 },
  { type: 'kv', key: 'web    ', value: '"bytestacklab.com"', post: 600 },
  { type: 'blank', post: 120 },

  { type: 'cmd', dir: '~/contact', text: './hire --start-project', pre: 650 },
  { type: 'out', text: "→ Let's build something amazing!", color: 'purple', post: 350 },
  { type: 'out', text: '  📧 hello@bytestacklab.com', color: 'dim', post: 4200 },
  { type: 'clear', post: 500 },
]

let stepIdx = 0

const runScript = async () => {
  while (running) {
    const step = script[stepIdx % script.length]
    stepIdx++

    if (!running) break

    if (step.type === 'clear') {
      await sleep(step.post || 300)
      if (!running) break
      lines.value = []
      stepIdx = 0
      currentDir.value = '~'

    } else if (step.type === 'blank') {
      lines.value.push(newLine('blank'))
      await sleep(step.post || 80)

    } else if (step.type === 'out') {
      lines.value.push(newLine('out', { text: step.text, color: step.color }))
      await sleep(step.post || 200)

    } else if (step.type === 'svc') {
      lines.value.push(newLine('svc', { text: step.text }))
      await sleep(step.post || 160)

    } else if (step.type === 'kv') {
      lines.value.push(newLine('kv', { key: step.key, value: step.value, note: step.note }))
      await sleep(step.post || 90)

    } else if (step.type === 'cmd') {
      await sleep(step.pre || 300)
      if (!running) break

      currentDir.value = step.dir
      isTyping.value = true
      typingText.value = ''

      for (let i = 0; i <= step.text.length; i++) {
        if (!running) return
        typingText.value = step.text.slice(0, i)
        await sleep(TYPING_SPEED + (Math.random() * 18 - 9))
      }

      if (!running) return
      lines.value.push(newLine('cmd', { text: step.text, dir: step.dir }))
      isTyping.value = false
      typingText.value = ''
      await sleep(step.post || 250)
    }
  }
}

onMounted(() => {
  running = true
  updateBDTime()
  clockTimer = setInterval(updateBDTime, 1000)
  runScript()
})

onUnmounted(() => {
  running = false
  if (currentTimer) clearTimeout(currentTimer)
  if (clockTimer) clearInterval(clockTimer)
})
</script>

<style scoped>
.scanlines {
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 1) 2px,
    rgba(0, 0, 0, 1) 4px
  );
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor-blink {
  animation: cursor-blink 1s step-end infinite;
}

.line-enter-active {
  transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}
.line-enter-from {
  opacity: 0;
  transform: translateX(-6px);
}

/* Powerline arrows for the prompt segment bar */
.tri-r {
  flex-shrink: 0;
  width: 0;
  height: 0;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-left-width: 7px;
  border-left-style: solid;
}
.tri-l {
  flex-shrink: 0;
  width: 0;
  height: 0;
  border-top: 9px solid transparent;
  border-bottom: 9px solid transparent;
  border-right-width: 7px;
  border-right-style: solid;
}
</style>
