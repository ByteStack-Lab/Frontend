<template>
  <section
    ref="sectionRef"
    class="py-10 md:py-16 lg:py-14 bg-gradient-to-r from-[#3533cd]/5 via-[#1e1b69]/5 to-[#0f0d3d]/5"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Years of Experience -->
        <div class="text-center group">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl lg:text-5xl font-bold text-gray-900">
              <span>{{ displayWeeksToRelease }}</span>
              <span class="text-[#3533cd] text-2xl lg:text-3xl">wk</span>
            </div>
            <p class="text-sm lg:text-base text-gray-600 font-medium">
              Average time to first release
            </p>
          </div>
        </div>

        <!-- Projects Completed -->
        <div class="text-center group">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl lg:text-5xl font-bold text-gray-900">
              <span>{{ displayProductsShipped }}</span>
              <span class="text-emerald-600">+</span>
            </div>
            <p class="text-sm lg:text-base text-gray-600 font-medium">
              Products shipped to production
            </p>
          </div>
        </div>

        <!-- Team Members -->
        <div class="text-center group">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#1e1b69] to-[#0f0d3d] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl lg:text-5xl font-bold text-gray-900">
              <span>{{ displayClientsServed }}</span>
              <span class="text-[#1e1b69]">+</span>
            </div>
            <p class="text-sm lg:text-base text-gray-600 font-medium">
              Clients served since 2020
            </p>
          </div>
        </div>

        <!-- Happy Clients -->
        <div class="text-center group">
          <div class="flex items-center justify-center mb-4">
            <div
              class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl lg:text-5xl font-bold text-gray-900">
              <span>{{ displayRepeatRate }}</span>
              <span class="text-red-600">%</span>
            </div>
            <p class="text-sm lg:text-base text-gray-600 font-medium">
              Return for a second project
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// Counter target values — admin-editable via Filament Settings, with the
// previous hardcoded numbers as a fallback if the API is unreachable.
const { data: counters } = await useLazyAsyncData(
  "homepage-counters",
  async () => {
    const { getSettings } = useApi();
    return (await getSettings("homepage_counters")) ?? {};
  },
  { default: () => ({}) },
);

// ⚠️ PLACEHOLDER FIGURES — replace with audited numbers in Filament before
// treating these as public claims. They were chosen to be realistic and, more
// importantly, internally consistent: 50 clients / 100 products / 70% repeat
// rate only adds up if repeat clients run more than one project. Changing one
// without the others makes the set contradict itself.
//
// The old metrics (years in business, projects completed, team members,
// satisfied clients) were the four numbers every agency publishes. These four
// answer questions a buyer actually has: how fast, how much have you shipped,
// how many trusted you, and did they come back.
const targetWeeksToRelease = computed(
  () => counters.value?.counter_weeks_to_release ?? 12,
);
const targetProductsShipped = computed(
  () => counters.value?.counter_products_shipped ?? 100,
);
const targetClientsServed = computed(
  () => counters.value?.counter_clients_served ?? 50,
);
const targetRepeatRate = computed(
  () => counters.value?.counter_repeat_client_rate ?? 70,
);

// Display values (animated numbers) — initialised to the real target, not 0.
// counters.value is already resolved at this point (the useLazyAsyncData
// above is awaited), so this renders the correct final numbers on the
// server. Search crawlers, JS-disabled visitors, and the pre-hydration first
// paint all see "12wk / 100+ / 50+ / 70%" — not the "0wk / 0+ / 0+ / 0%" a
// plain ref(0) would render, which is not a value anyone should be quoting.
const displayWeeksToRelease = ref(targetWeeksToRelease.value);
const displayProductsShipped = ref(targetProductsShipped.value);
const displayClientsServed = ref(targetClientsServed.value);
const displayRepeatRate = ref(targetRepeatRate.value);

// Animation status
const animationStarted = ref(false);
const sectionRef = ref(null);

// Counter animation function
const animateCounter = (startValue, endValue, duration, callback) => {
  const startTime = Date.now();
  const animate = () => {
    const currentTime = Date.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(
      startValue + (endValue - startValue) * easeOutQuart,
    );

    callback(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };
  animate();
};

// Start counter animations
const startCounterAnimations = () => {
  if (animationStarted.value) return;
  animationStarted.value = true;

  // Start all counters with staggered delays
  setTimeout(() => {
    animateCounter(0, targetWeeksToRelease.value, 2000, (value) => {
      displayWeeksToRelease.value = value;
    });
  }, 300);

  setTimeout(() => {
    animateCounter(0, targetProductsShipped.value, 2500, (value) => {
      displayProductsShipped.value = value;
    });
  }, 600);

  setTimeout(() => {
    animateCounter(0, targetClientsServed.value, 1800, (value) => {
      displayClientsServed.value = value;
    });
  }, 900);

  setTimeout(() => {
    animateCounter(0, targetRepeatRate.value, 2200, (value) => {
      displayRepeatRate.value = value;
    });
  }, 1200);
};

// Setup intersection observer
onMounted(() => {
  if (!sectionRef.value) {
    console.error("CounterSection: sectionRef is null!");
    return;
  }

  // Reduced-motion visitors keep the real numbers set above and never see
  // the count-up — the animation is decorative, not the content.
  if (prefersReducedMotion()) return;

  // Drop to 0 now, synchronously before this frame paints, so the count-up
  // below has something to animate from. This runs after hydration, so it
  // never touches what SSR/no-JS visitors see — only JS-enabled browsers
  // reach this line at all.
  displayWeeksToRelease.value = 0;
  displayProductsShipped.value = 0;
  displayClientsServed.value = 0;
  displayRepeatRate.value = 0;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationStarted.value) {
          startCounterAnimations();
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    },
  );

  observer.observe(sectionRef.value);
});
</script>

<style scoped>
/* Counter specific animations */
.group:hover .w-16 {
  transform: scale(1.1) rotateY(180deg);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Floating animation for icons */
@keyframes float-icon {
  0%,
  100% {
    transform: translateY(0px) scale(1);
  }
  50% {
    transform: translateY(-5px) scale(1.05);
  }
}

.w-16 {
  animation: float-icon 3s ease-in-out infinite;
}

.w-16:nth-child(1) {
  animation-delay: 0s;
}
.w-16:nth-child(2) {
  animation-delay: 0.5s;
}
.w-16:nth-child(3) {
  animation-delay: 1s;
}
.w-16:nth-child(4) {
  animation-delay: 1.5s;
}

/* Number glow effect */
.text-4xl,
.text-5xl {
  text-shadow: 0 0 20px rgba(107, 114, 128, 0.1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }
}
</style>
