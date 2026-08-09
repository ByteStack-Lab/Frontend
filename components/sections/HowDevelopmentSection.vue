<template>
  <section
    id="how-development"
    ref="elementRef"
    class="py-14 md:py-20 lg:py-16 transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
    style="background-color: #f7f7fa"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        />
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900">
          How We Work —
          <span
            class="block bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
            >From Kickoff To Launch</span
          >
        </h2>
        <p class="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Six steps, two-week sprints, and a demo you can click at the end of
          every one. You always know what is being built and what it costs.
        </p>
      </div>

      <!-- Development Process Timeline -->
      <div class="relative max-w-7xl mx-auto">
        <!-- Desktop Layout (unchanged) -->
        <div class="hidden lg:block">
          <!-- Timeline Line -->
          <div
            class="absolute top-1/2 left-16 right-16 h-0.5 bg-[#3533cd] transform -translate-y-1/2 z-0"
          />

          <!-- Trophy Icon at end of timeline -->
          <div
            class="absolute top-1/2 right-0 w-12 h-12 flex items-center justify-center transform -translate-y-1/2 z-20"
          >
            <NuxtImg
              src="/images/icons/Trophy.png"
              alt="Trophy"
              loading="lazy"
              class="w-10 h-10 object-contain"
              width="40"
              height="40"
            />
          </div>

          <!-- Process Steps -->
          <div class="relative z-10 px-16">
            <!-- Row 1: Steps 1, 3, 5 (Top Row) -->
            <div class="grid lg:grid-cols-3 gap-12 mb-8">
              <!-- Step 1: Assemble the right team -->
              <div class="relative">
                <div
                  class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div class="mb-4">
                    <h3
                      class="text-lg font-bold text-gray-900 whitespace-nowrap"
                    >
                      <span class="text-[#3533cd] mr-2">#1</span>Team Assembly &
                      Planning
                    </h3>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    We carefully select skilled developers, designers, and
                    project managers that match your requirements and work
                    culture for optimal collaboration.
                  </p>
                </div>
                <!-- Vertical Connector -->
                <div
                  class="absolute bottom-0 w-0.5 h-8 bg-[#3533cd]"
                  style="left: 30%; top: calc(100% + 8px)"
                />
              </div>

              <!-- Step 3: Tech architecture -->
              <div class="relative">
                <div
                  class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div class="mb-4">
                    <h3
                      class="text-lg font-bold text-gray-900 whitespace-nowrap"
                    >
                      <span class="text-[#3533cd] mr-2">#3</span>Scalable
                      Architecture Design
                    </h3>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    We design clean, scalable architectures — modular or
                    microservices-based depending on project scope — using
                    cloud technologies and proven best practices for long-term
                    maintainability and growth.
                  </p>
                </div>
                <!-- Vertical Connector -->
                <div
                  class="absolute bottom-0 w-0.5 h-8 bg-[#3533cd]"
                  style="left: 50%; top: calc(100% + 8px)"
                />
              </div>

              <!-- Step 5: Code reviews -->
              <div class="relative">
                <div
                  class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div class="mb-4">
                    <h3
                      class="text-lg font-bold text-gray-900 whitespace-nowrap"
                    >
                      <span class="text-[#3533cd] mr-2">#5</span>Quality Code
                      Reviews
                    </h3>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Every code commit undergoes thorough peer review to maintain
                    code quality, security standards, and identify potential
                    performance optimizations.
                  </p>
                </div>
                <!-- Vertical Connector -->
                <div
                  class="absolute bottom-0 w-0.5 h-8 bg-[#3533cd]"
                  style="left: 70%; top: calc(100% + 8px)"
                />
              </div>
            </div>

            <!-- Row 2: Steps 2, 4, 6 (Bottom Row) -->
            <div class="grid lg:grid-cols-3 gap-12 lg:mt-16">
              <!-- Step 2: Sprint planning -->
              <div class="relative">
                <div
                  class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div class="mb-4">
                    <h3
                      class="text-lg font-bold text-gray-900 whitespace-nowrap"
                    >
                      <span class="text-[#3533cd] mr-2">#2</span>Agile Sprint
                      Planning
                    </h3>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Our sprint planning sessions involve stakeholder
                    collaboration to define clear objectives, user stories, and
                    deliverable timelines for each development cycle.
                  </p>
                </div>
                <!-- Vertical Connector to Timeline -->
                <div
                  class="absolute top-0 w-0.5 h-8 bg-[#3533cd]"
                  style="left: 40%; top: -24px"
                />
              </div>

              <!-- Step 4: Standups & weekly demos -->
              <div class="relative">
                <div
                  class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div class="mb-4">
                    <h3
                      class="text-lg font-bold text-gray-900 whitespace-nowrap"
                    >
                      <span class="text-[#3533cd] mr-2">#4</span>Daily Standups
                      & Reviews
                    </h3>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    Regular communication through daily standups, weekly demos,
                    and progress reviews ensure transparency and quick
                    resolution of any blockers.
                  </p>
                </div>
                <!-- Vertical Connector to Timeline -->
                <div
                  class="absolute top-0 w-0.5 h-8 bg-[#3533cd]"
                  style="left: 60%; top: -24px"
                />
              </div>

              <!-- Step 6: Iterative delivery -->
              <div class="relative">
                <div
                  class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
                >
                  <div class="mb-4">
                    <h3
                      class="text-lg font-bold text-gray-900 whitespace-nowrap"
                    >
                      <span class="text-[#3533cd] mr-2">#6</span>Continuous
                      Delivery
                    </h3>
                  </div>
                  <p class="text-gray-600 text-sm leading-relaxed">
                    We implement continuous integration and deployment pipelines
                    with automated testing to deliver working software
                    incrementally and reliably.
                  </p>
                </div>
                <!-- Vertical Connector to Timeline -->
                <div
                  class="absolute top-0 w-0.5 h-8 bg-[#3533cd]"
                  style="left: 80%; top: -24px"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Layout (new vertical layout) -->
        <div class="lg:hidden">
          <div class="relative px-6 space-y-6">
            <!-- Step 1: Assemble the right team -->
            <div class="relative">
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">1</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-3">
                      Team Assembly & Planning
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      We carefully select skilled developers, designers, and
                      project managers that match your requirements and work
                      culture for optimal collaboration.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Vertical Connector -->
              <div
                class="absolute left-8 top-full w-0.5 h-6 bg-[#3533cd] transform -translate-x-1/2"
              />
            </div>

            <!-- Step 2: Sprint planning -->
            <div class="relative">
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">2</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-3">
                      Agile Sprint Planning
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      Our sprint planning sessions involve stakeholder
                      collaboration to define clear objectives, user stories,
                      and deliverable timelines for each development cycle.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Vertical Connector -->
              <div
                class="absolute left-8 top-full w-0.5 h-6 bg-[#3533cd] transform -translate-x-1/2"
              />
            </div>

            <!-- Step 3: Tech architecture -->
            <div class="relative">
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">3</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-3">
                      Scalable Architecture Design
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      We design modern, scalable architectures using
                      microservices, cloud technologies, and best practices to
                      ensure long-term maintainability and growth.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Vertical Connector -->
              <div
                class="absolute left-8 top-full w-0.5 h-6 bg-[#3533cd] transform -translate-x-1/2"
              />
            </div>

            <!-- Step 4: Standups & weekly demos -->
            <div class="relative">
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">4</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-3">
                      Daily Standups & Reviews
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      Regular communication through daily standups, weekly
                      demos, and progress reviews ensure transparency and quick
                      resolution of any blockers.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Vertical Connector -->
              <div
                class="absolute left-8 top-full w-0.5 h-6 bg-[#3533cd] transform -translate-x-1/2"
              />
            </div>

            <!-- Step 5: Code reviews -->
            <div class="relative">
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">5</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-3">
                      Quality Code Reviews
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      Every code commit undergoes thorough peer review to
                      maintain code quality, security standards, and identify
                      potential performance optimizations.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Vertical Connector -->
              <div
                class="absolute left-8 top-full w-0.5 h-6 bg-[#3533cd] transform -translate-x-1/2"
              />
            </div>

            <!-- Step 6: Iterative delivery -->
            <div class="relative">
              <div
                class="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
                  >
                    <span class="text-white text-sm font-bold">6</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-3">
                      Continuous Delivery
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                      We implement continuous integration and deployment
                      pipelines with automated testing to deliver working
                      software incrementally and reliably.
                    </p>
                  </div>
                </div>
              </div>
              <!-- Final Trophy Icon -->
              <div class="flex justify-center mt-6">
                <div
                  class="w-12 h-12 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center shadow-lg"
                >
                  <img
                    src="/images/icons/Trophy.png"
                    alt="Trophy"
                    class="w-6 h-6 object-contain filter brightness-0 invert"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useScrollAnimation } from "~/composables/useScrollAnimation";

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();
</script>

<style scoped>
/* Card hover effects */
.bg-white {
  transition: all 0.3s ease;
}

.bg-white:hover {
  transform: translateY(-4px);
}

/* Timeline animations */
.relative {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Staggered animation delays */
.relative:nth-child(2) {
  animation-delay: 0.1s;
}
.relative:nth-child(3) {
  animation-delay: 0.2s;
}
.relative:nth-child(4) {
  animation-delay: 0.3s;
}
.relative:nth-child(5) {
  animation-delay: 0.4s;
}
.relative:nth-child(6) {
  animation-delay: 0.5s;
}
.relative:nth-child(7) {
  animation-delay: 0.6s;
}

/* Timeline connector pulse intentionally disabled to avoid build selector warnings. */

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

/* Mobile timeline animations */
@media (max-width: 1023px) {
  .relative {
    animation: slideInLeft 0.6s ease forwards;
    opacity: 0;
  }

  .relative:nth-child(1) {
    animation-delay: 0.1s;
  }
  .relative:nth-child(2) {
    animation-delay: 0.2s;
  }
  .relative:nth-child(3) {
    animation-delay: 0.3s;
  }
  .relative:nth-child(4) {
    animation-delay: 0.4s;
  }
  .relative:nth-child(5) {
    animation-delay: 0.5s;
  }
  .relative:nth-child(6) {
    animation-delay: 0.6s;
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/* Number badge animations */
.w-8.h-8.bg-gradient-to-r {
  animation: scaleIn 0.5s ease forwards;
  transform: scale(0);
}

@keyframes scaleIn {
  to {
    transform: scale(1);
  }
}

/* Vertical connector animations */
.w-0\.5.h-6 {
  animation: lineGrow 0.8s ease forwards;
  transform: scaleY(0);
  transform-origin: top;
}

@keyframes lineGrow {
  to {
    transform: scaleY(1);
  }
}
</style>
