<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
    <!-- About Hero Section -->
    <section class="relative pt-20 pb-12 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Matrix-style Grid Lines -->
        <div
          class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/15 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-pink-400/15 to-transparent animate-pulse-medium"
        />

        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/15 to-transparent animate-pulse-slow"
        />

        <!-- Moving Data Points -->
        <div
          class="absolute top-48 left-36 w-1 h-1 bg-blue-500 rounded-full animate-data-flow-1"
        />
        <div
          class="absolute top-72 right-48 w-1 h-1 bg-purple-500 rounded-full animate-data-flow-2"
        />
        <div
          class="absolute bottom-48 left-72 w-1 h-1 bg-green-500 rounded-full animate-data-flow-3"
        />
        <div
          class="absolute bottom-72 right-36 w-1 h-1 bg-indigo-500 rounded-full animate-data-flow-4"
        />
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-10">
          <!-- Decorative Line -->
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"
          />

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span class="text-gray-900">About</span>
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
            >
              ByteStackLab</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Founded in 2020, ByteStackLab has been turning business ideas into
            reliable software — serving local clients across Bangladesh and
            working with international clients who find us online.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-6">
            <div
              class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            />

            <div class="space-y-6">
              <h2
                class="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Our Journey of <br >
                <span
                  class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
                  >Digital Excellence</span
                >
              </h2>

              <p class="text-lg text-gray-600 leading-relaxed">
                ByteStackLab was founded in 2020 with a clear vision — to build
                software that genuinely solves business problems. From the very
                beginning, our focus was on delivering real digital products:
                web applications, UI/UX-driven interfaces, and scalable
                solutions that businesses could actually depend on.
              </p>

              <p class="text-lg text-gray-600 leading-relaxed">
                Over the years, we've grown that foundation into a full-service
                software company. We expanded into mobile applications, SaaS
                platforms, ERP systems, and custom enterprise solutions —
                serving both local businesses in Bangladesh and international
                clients who needed a reliable, capable software partner.
              </p>

              <p class="text-lg text-gray-600 leading-relaxed">
                Today, ByteStackLab handles end-to-end software development —
                from product discovery and UI/UX design through to development,
                deployment, and ongoing support. We're a focused team, and every
                product we build carries the same standard of quality,
                regardless of project size.
              </p>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
            <div class="relative rounded-xl overflow-hidden shadow-xl">
              <NuxtImg
                src="/images/about-us.webp"
                alt="Our team at work"
                loading="eager"
                fetchpriority="high"
                width="800"
                height="600"
                class="w-full h-auto object-cover"
                sizes="100vw lg:50vw"
              />
              <div
                class="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20"
              />
            </div>

            <!-- Floating Stats -->
            <div
              class="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6 border"
            >
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600">5+</div>
                <div class="text-sm text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
            </div>

            <div
              class="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-6 border"
            >
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600">100+</div>
                <div class="text-sm text-gray-600 font-medium">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-10">
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"
          />
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Mission &
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
              >Vision</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Two things have guided every decision we've made since day one —
            building software that works, and being a company people actually
            enjoy working with.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div
            class="bg-white rounded-xl shadow-card p-8 lg:p-10 hover:shadow-card-hover transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6"
            >
              <svg aria-hidden="true"
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
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-600 leading-relaxed">
              To help businesses — local and international — build software they
              can rely on. We focus on understanding what a client actually
              needs, delivering it cleanly, and making sure it keeps working
              long after launch. No overpromising, no cutting corners. Just
              honest, quality work that creates real value.
            </p>
          </div>

          <!-- Vision -->
          <div
            class="bg-white rounded-xl shadow-card p-8 lg:p-10 hover:shadow-card-hover transition-shadow duration-300"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-6"
            >
              <svg aria-hidden="true"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-600 leading-relaxed">
              To grow into a software company that businesses worldwide turn to
              when they want something built right. We want ByteStackLab to be
              known — not just for the products we ship, but for how we treat
              the people we work with and the standards we hold ourselves to,
              every single project.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-10">
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"
          />
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Core
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
              >Values</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            These aren't values written for a website — they're the habits and
            standards we've built our team around since day one.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Innovation -->
          <div
            class="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
            >
              <svg aria-hidden="true"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p class="text-gray-600">
              We stay genuinely curious about new tools and approaches. When a
              better way to solve a problem exists, we use it — not because it's
              trendy, but because it makes the end result better for our
              clients.
            </p>
          </div>

          <!-- Quality -->
          <div
            class="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
            >
              <svg aria-hidden="true"
                class="w-10 h-10 text-white"
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
            <h3 class="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p class="text-gray-600">
              We don't ship things we're not proud of. Every project — whether
              it's a small feature or a full platform — goes through the same
              level of care. Our reputation is built one deliverable at a time.
            </p>
          </div>

          <!-- Collaboration -->
          <div
            class="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
            >
              <svg aria-hidden="true"
                class="w-10 h-10 text-white"
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
            <h3 class="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
            <p class="text-gray-600">
              The best results come from working together, not just taking
              orders. We keep clients in the loop, ask the right questions, and
              treat every project as a partnership — not a transaction.
            </p>
          </div>

          <!-- Integrity -->
          <div
            class="text-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            <div
              class="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300"
            >
              <svg aria-hidden="true"
                class="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
            <p class="text-gray-600">
              We say what we mean and do what we say. If something isn't going
              to work, we'll tell you early. If we make a mistake, we own it and
              fix it. That's the only way to build relationships that last.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <div
            class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4"
          />
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How We're
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
              >Organized</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Every project at ByteStackLab is handled by a cross-functional team
            across four core departments — each one focused on a critical part
            of delivering great software.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Card 1: Software Engineering -->
          <div
            class="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <svg aria-hidden="true"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">
              Software Engineering
            </h3>
            <p class="text-purple-600 text-sm font-semibold mb-3">
              Development Department
            </p>
            <p class="text-gray-500 text-sm leading-relaxed flex-1">
              We build web applications, mobile apps, SaaS platforms, and ERP
              systems from the ground up — with clean architecture and code that
              holds up long after launch.
            </p>
            <div class="flex flex-wrap gap-2 mt-5 justify-center">
              <span
                class="text-xs bg-purple-50 text-purple-700 font-medium px-2.5 py-1 rounded-full"
                >Web Apps</span
              >
              <span
                class="text-xs bg-purple-50 text-purple-700 font-medium px-2.5 py-1 rounded-full"
                >Mobile</span
              >
              <span
                class="text-xs bg-purple-50 text-purple-700 font-medium px-2.5 py-1 rounded-full"
                >SaaS</span
              >
              <span
                class="text-xs bg-purple-50 text-purple-700 font-medium px-2.5 py-1 rounded-full"
                >ERP</span
              >
            </div>
          </div>

          <!-- Card 2: UI/UX Design -->
          <div
            class="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <svg aria-hidden="true"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">UI/UX Design</h3>
            <p class="text-blue-600 text-sm font-semibold mb-3">
              Design Department
            </p>
            <p class="text-gray-500 text-sm leading-relaxed flex-1">
              We design interfaces that feel natural to use. From wireframes to
              polished UI, every screen is shaped around real user behavior —
              not just aesthetics.
            </p>
            <div class="flex flex-wrap gap-2 mt-5 justify-center">
              <span
                class="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full"
                >Wireframing</span
              >
              <span
                class="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full"
                >Prototyping</span
              >
              <span
                class="text-xs bg-blue-50 text-blue-700 font-medium px-2.5 py-1 rounded-full"
                >Design Systems</span
              >
            </div>
          </div>

          <!-- Card 3: Product & Strategy -->
          <div
            class="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <svg aria-hidden="true"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">
              Product & Strategy
            </h3>
            <p class="text-indigo-600 text-sm font-semibold mb-3">
              Strategy Department
            </p>
            <p class="text-gray-500 text-sm leading-relaxed flex-1">
              Before any development starts, we make sure the right problem is
              being solved. We work with clients to define scope, map user
              journeys, and build a clear product roadmap.
            </p>
            <div class="flex flex-wrap gap-2 mt-5 justify-center">
              <span
                class="text-xs bg-indigo-50 text-indigo-700 font-medium px-2.5 py-1 rounded-full"
                >Discovery</span
              >
              <span
                class="text-xs bg-indigo-50 text-indigo-700 font-medium px-2.5 py-1 rounded-full"
                >Roadmapping</span
              >
              <span
                class="text-xs bg-indigo-50 text-indigo-700 font-medium px-2.5 py-1 rounded-full"
                >Requirements</span
              >
            </div>
          </div>

          <!-- Card 4: QA & Deployment -->
          <div
            class="bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <svg aria-hidden="true"
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-1">
              QA & Deployment
            </h3>
            <p class="text-pink-600 text-sm font-semibold mb-3">
              Quality Department
            </p>
            <p class="text-gray-500 text-sm leading-relaxed flex-1">
              We test thoroughly before anything goes live. Once deployed, we
              monitor performance, handle server infrastructure, and stay
              available for post-launch support.
            </p>
            <div class="flex flex-wrap gap-2 mt-5 justify-center">
              <span
                class="text-xs bg-pink-50 text-pink-700 font-medium px-2.5 py-1 rounded-full"
                >Testing</span
              >
              <span
                class="text-xs bg-pink-50 text-pink-700 font-medium px-2.5 py-1 rounded-full"
                >DevOps</span
              >
              <span
                class="text-xs bg-pink-50 text-pink-700 font-medium px-2.5 py-1 rounded-full"
                >CI/CD</span
              >
              <span
                class="text-xs bg-pink-50 text-pink-700 font-medium px-2.5 py-1 rounded-full"
                >Support</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section v-if="teamPending || teamError || (team && team.length > 0)" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-12">
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-4"
          />
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            The People
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
              >Behind ByteStackLab</span
            >
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            A small, focused team that owns every project end to end — from
            first call to production support.
          </p>
        </div>

        <!-- Loading State -->
        <div v-if="teamPending" class="flex justify-center items-center py-12">
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
          />
        </div>

        <!-- Error State -->
        <div v-else-if="teamError" class="text-center py-12">
          <p class="text-red-600">
            Failed to load our team. Please try again later.
          </p>
        </div>

        <!-- Team Grid -->
        <div v-else class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="member in team"
            :key="member.id"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-gray-100"
          >
            <NuxtImg
              v-if="member.avatar_url"
              :src="member.avatar_url"
              :alt="member.name"
              class="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
              loading="lazy"
              width="96"
              height="96"
            />
            <div
              v-else
              class="w-24 h-24 rounded-full mb-4 shadow-md bg-gradient-to-br from-[#3533cd] to-[#1e1b69] flex items-center justify-center text-white text-2xl font-bold"
            >
              {{ member.name.charAt(0) }}
            </div>

            <h3 class="text-lg font-bold text-gray-900 mb-1">
              {{ member.name }}
            </h3>
            <p class="text-[#3533cd] text-sm font-semibold mb-3">
              {{ member.position }}
            </p>
            <p
              v-if="member.bio"
              class="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1"
            >
              {{ member.bio }}
            </p>

            <div
              v-if="member.socials && Object.keys(member.socials).length > 0"
              class="flex flex-wrap justify-center gap-2 mt-5"
            >
              <a
                v-for="(url, platform) in member.socials"
                :key="platform"
                :href="url"
                target="_blank"
                rel="noopener noreferrer"
                :title="platform"
                :class="getSocialIconStyle(platform).bg"
                class="w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg aria-hidden="true" class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="getSocialIconStyle(platform).path" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet The People Section -->
    <section class="py-16" style="background-color: #f7f7fa">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Section Header with Navigation -->
        <div class="flex justify-between items-center mb-12">
          <!-- Left: Title -->
          <div>
            <div
              class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mb-4"
            />
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
              <span class="text-gray-900">Meet</span>
              <span
                class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
              >
                The People</span
              >
            </h2>
            <p class="text-xl text-gray-700 font-medium">We Are Working With</p>
          </div>

          <!-- Right: Navigation Arrows -->
          <div class="flex space-x-4">
            <button
              aria-label="Previous partners"
              class="w-12 h-12 rounded-full border-2 border-[#3533cd] text-[#3533cd] flex items-center justify-center hover:bg-[#3533cd] hover:text-white transition-all duration-300 cursor-pointer"
              @click="prevSlide"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              aria-label="Next partners"
              class="w-12 h-12 rounded-full bg-[#3533cd] text-white flex items-center justify-center hover:bg-[#1e1b69] transition-all duration-300 cursor-pointer"
              @click="nextSlide"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Loading State -->
        <div
          v-if="partnersPending"
          class="flex justify-center items-center py-12"
        >
          <div
            class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
          />
        </div>

        <!-- Error State -->
        <div v-else-if="partnersError" class="text-center py-12">
          <p class="text-red-600 mb-4">
            Failed to load partners. Please try again later.
          </p>
          <button
            class="px-4 py-2 bg-[#3533cd] text-white rounded-lg hover:bg-[#1e1b69] transition-colors"
            @click="refreshPartners()"
          >
            Retry
          </button>
        </div>

        <!-- Partners Logo Display -->
        <div
          v-else-if="partners && partners.length > 0"
          class="relative overflow-hidden"
        >
          <Transition name="slide-fade" mode="out-in">
            <div
              :key="currentSlide"
              class="flex justify-center items-center space-x-12 lg:space-x-16"
            >
              <div
                v-for="partner in visiblePartners"
                :key="partner.id"
                class="flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <a
                  v-if="partner.website_url"
                  :href="partner.website_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :title="partner.name"
                  class="block"
                >
                  <NuxtImg
                    :src="partner.logo"
                    :alt="partner.name"
                    loading="lazy"
                    width="160"
                    height="64"
                    class="h-12 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </a>
                <NuxtImg
                  v-else
                  :src="partner.logo"
                  :alt="partner.name"
                  :title="partner.name"
                  loading="lazy"
                  width="160"
                  height="64"
                  class="h-12 lg:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            </div>
          </Transition>
        </div>

        <!-- No Data State -->
        <div v-else class="text-center py-12">
          <p class="text-gray-600">No partners available at the moment.</p>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="pt-16 pb-20 bg-white relative">
      <div class="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
          />
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Customers
            <span
              class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
              >Love Working With Us</span
            >
          </h2>
        </div>

        <!-- Main Testimonial Container -->
        <div class="relative max-w-5xl mx-auto px-4 lg:px-8">
          <!-- Loading State -->
          <div
            v-if="testimonialsPending"
            class="flex justify-center items-center py-12"
          >
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3533cd]"
            />
          </div>

          <!-- Error State -->
          <div
            v-else-if="testimonialsError && dynamicTestimonials.length === 0"
            class="text-center py-12"
          >
            <p class="text-red-600">
              Failed to load testimonials. Please try again later.
            </p>
          </div>

          <!-- Testimonials Content -->
          <div v-else-if="dynamicTestimonials.length > 0">
            <!-- Navigation Arrows -->
            <button
              aria-label="Previous testimonial"
              class="absolute left-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-[#3533cd] text-[#3533cd] items-center justify-center hover:bg-[#3533cd] hover:text-white transition-all duration-300 z-30 hidden lg:flex"
              @click="prevTestimonial"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              aria-label="Next testimonial"
              class="absolute right-[-60px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-[#3533cd] text-white items-center justify-center hover:bg-[#1e1b69] transition-all duration-300 z-30 hidden lg:flex"
              @click="nextTestimonial"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <!-- Quote Mark -->
            <div class="flex justify-center mb-8">
              <svg aria-hidden="true"
                class="w-16 h-16 text-[#3533cd]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
                />
              </svg>
            </div>

            <!-- Testimonial Text -->
            <div class="text-center mb-10">
              <Transition name="fade" mode="out-in">
                <p
                  :key="currentTestimonial"
                  class="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
                >
                  {{ dynamicTestimonials[currentTestimonial].quote }}
                </p>
              </Transition>
            </div>

            <!-- Avatar Row with User Info -->
            <div
              class="flex justify-center items-center space-x-4 lg:space-x-6 relative"
            >
              <!-- Left Avatars -->
              <div
                v-for="(testimonial, index) in leftAvatars"
                :key="'left-' + index"
                class="cursor-pointer transition-all duration-500 opacity-60 hover:opacity-80 flex items-center"
                @click="goToTestimonial(getLeftIndex(index))"
              >
                <NuxtImg
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  loading="lazy"
                  width="64"
                  height="64"
                  :class="[
                    index === 0
                      ? 'w-12 h-12 lg:w-14 lg:h-14'
                      : 'w-16 h-16 lg:w-18 lg:h-18',
                  ]"
                  class="rounded-full object-cover border border-gray-200"
                />
              </div>

              <!-- Center Avatar -->
              <div class="flex items-center justify-center">
                <NuxtImg
                  :src="dynamicTestimonials[currentTestimonial].image"
                  :alt="dynamicTestimonials[currentTestimonial].name"
                  loading="lazy"
                  width="96"
                  height="96"
                  class="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-3 border-[#3533cd]"
                />
              </div>

              <!-- Right Avatars -->
              <div
                v-for="(testimonial, index) in rightAvatars"
                :key="'right-' + index"
                class="cursor-pointer transition-all duration-500 opacity-60 hover:opacity-80 flex items-center"
                @click="goToTestimonial(getRightIndex(index))"
              >
                <NuxtImg
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  loading="lazy"
                  width="64"
                  height="64"
                  :class="[
                    index === 1
                      ? 'w-12 h-12 lg:w-14 lg:h-14'
                      : 'w-16 h-16 lg:w-18 lg:h-18',
                  ]"
                  class="rounded-full object-cover border border-gray-200"
                />
              </div>
            </div>

            <!-- User Info -->
            <div class="text-center mt-8">
              <!-- Star Rating -->
              <div class="flex justify-center items-center mb-3 space-x-1">
                <svg
                  v-for="i in 5"
                  :key="i"
                  aria-hidden="true"
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>

              <Transition name="fade" mode="out-in">
                <div :key="currentTestimonial">
                  <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                    {{ dynamicTestimonials[currentTestimonial].name }}
                  </h3>
                  <p class="text-gray-600 text-base lg:text-lg mb-1">
                    {{ dynamicTestimonials[currentTestimonial].position }}
                  </p>
                  <p class="text-[#3533cd] font-medium text-sm lg:text-base">
                    {{ dynamicTestimonials[currentTestimonial].company }}
                  </p>
                </div>
              </Transition>
            </div>

            <!-- Mobile Navigation -->
            <div class="flex justify-center space-x-4 mt-12 lg:hidden">
              <button
                aria-label="Previous testimonial"
                class="w-12 h-12 rounded-full border-2 border-[#3533cd] text-[#3533cd] flex items-center justify-center hover:bg-[#3533cd] hover:text-white transition-all duration-300"
                @click="prevTestimonial"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                aria-label="Next testimonial"
                class="w-12 h-12 rounded-full bg-[#3533cd] text-white flex items-center justify-center hover:bg-[#1e1b69] transition-all duration-300"
                @click="nextTestimonial"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- No Data State -->
          <div v-else class="text-center py-12">
            <p class="text-gray-600">
              No testimonials available at the moment.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div class="space-y-8">
            <div
              class="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
            />

            <div class="space-y-6">
              <h2
                class="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
              >
                Why Choose <br >
                <span
                  class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                  >ByteStackLab?</span
                >
              </h2>

              <p class="text-lg text-gray-600 leading-relaxed">
                We're not the biggest software company — and we don't try to be.
                What we offer is a focused team that takes your project
                seriously, communicates honestly, and delivers work you won't
                need to redo six months later.
              </p>
            </div>

            <div class="space-y-6">
              <!-- Proven Track Record -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg aria-hidden="true"
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Proven Track Record
                  </h3>
                  <p class="text-gray-600">
                    Since 2020, we've delivered 100+ software projects — web
                    applications, mobile apps, SaaS platforms, ERP systems, and
                    digital products for clients locally and internationally.
                  </p>
                </div>
              </div>

              <!-- Custom Solutions -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg aria-hidden="true"
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Built for Your Business
                  </h3>
                  <p class="text-gray-600">
                    We don't copy-paste generic solutions. Everything we build
                    is shaped around how your business actually works — your
                    workflows, your users, your goals.
                  </p>
                </div>
              </div>

              <!-- 24/7 Support -->
              <div class="flex items-start space-x-4">
                <div
                  class="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg aria-hidden="true"
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">
                    Support After Launch
                  </h3>
                  <p class="text-gray-600">
                    We don't disappear after go-live. We provide post-launch
                    support, monitor for issues, and stay available when you
                    need updates or have questions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Stats Grid -->
          <div class="grid grid-cols-2 gap-6">
            <!-- Projects Completed -->
            <div class="text-center group">
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <svg aria-hidden="true"
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
                <div class="text-4xl font-bold text-gray-900">
                  <span>100</span>
                  <span class="text-purple-600">+</span>
                </div>
                <p class="text-sm text-gray-600 font-medium">
                  Projects Completed
                </p>
              </div>
            </div>

            <!-- Happy Clients -->
            <div class="text-center group">
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <svg aria-hidden="true"
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
                <div class="text-4xl font-bold text-gray-900">
                  <span>100</span>
                  <span class="text-blue-600">+</span>
                </div>
                <p class="text-sm text-gray-600 font-medium">Happy Clients</p>
              </div>
            </div>

            <!-- Years Experience -->
            <div class="text-center group">
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <svg aria-hidden="true"
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7"
                    />
                  </svg>
                </div>
              </div>
              <div class="space-y-2">
                <div class="text-4xl font-bold text-gray-900">
                  <span>5</span>
                  <span class="text-indigo-600">+</span>
                </div>
                <p class="text-sm text-gray-600 font-medium">
                  Years Experience
                </p>
              </div>
            </div>

            <!-- Premium Products -->
            <div class="text-center group">
              <div class="flex items-center justify-center mb-4">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <svg aria-hidden="true"
                    class="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
              <div class="space-y-2">
                <div class="text-4xl font-bold text-gray-900">
                  <span>15</span>
                  <span class="text-pink-600">+</span>
                </div>
                <p class="text-sm text-gray-600 font-medium">
                  Industries Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-16 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]"
    >
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Have a Project in Mind?
        </h2>
        <p class="text-xl text-white/90 mb-8 leading-relaxed">
          Whether you need a custom web application, a mobile app, a SaaS
          platform, or just want to figure out where to start — we're happy to
          have a straightforward conversation about what you're building.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-[#3533cd] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
          >
            Get Started Today
            <svg aria-hidden="true"
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </NuxtLink>

          <NuxtLink
            to="/services"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3533cd] transition-all duration-300 flex items-center justify-center"
          >
            View Our Services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: "About ByteStackLab | Custom Software Development Company Since 2020",
  meta: [
    {
      name: "description",
      content:
        "ByteStackLab is a software development company founded in 2020. We deliver custom web applications, mobile apps, SaaS platforms, ERP systems, and AI-powered solutions for businesses locally and worldwide. Explore our story, mission, and values.",
    },
    {
      name: "keywords",
      content:
        "ByteStackLab, software development company, custom software Bangladesh, web application development, mobile app development, SaaS development, ERP system, software company Bangladesh, international software development",
    },
    {
      property: "og:title",
      content:
        "About ByteStackLab | Custom Software Development Company Since 2020",
    },
    {
      property: "og:description",
      content:
        "ByteStackLab is a software development company founded in 2020. We deliver custom web applications, mobile apps, SaaS platforms, ERP systems, and AI-powered solutions for businesses locally and worldwide.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
});

// Fetch team members from API
const {
  data: team,
  pending: teamPending,
  error: teamError,
} = await useLazyAsyncData("about-team", () => {
  const { getTeam } = useApi();
  return getTeam();
});

// Brand-colored icon background per social platform; unrecognized keys
// (e.g. a personal site) fall back to a neutral generic-link icon.
const SOCIAL_ICON_STYLES = {
  linkedin: { bg: "bg-[#0077B5] hover:bg-[#006BA1]", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  facebook: { bg: "bg-[#1877F2] hover:bg-[#166FE5]", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  twitter: { bg: "bg-black hover:bg-gray-800", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.658-5.848 6.658H2.117l7.645-8.746L2.82 2.25h6.8l4.759 6.284L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
  x: { bg: "bg-black hover:bg-gray-800", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.658-5.848 6.658H2.117l7.645-8.746L2.82 2.25h6.8l4.759 6.284L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" },
  github: { bg: "bg-gray-800 hover:bg-gray-900", path: "M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.334-5.467-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" },
  instagram: { bg: "bg-gradient-to-r from-[#F56040] to-[#C13584] hover:from-[#E55A36] hover:to-[#B12A78]", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
};
const DEFAULT_SOCIAL_ICON = {
  bg: "bg-[#3533cd] hover:bg-[#1e1b69]",
  path: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
};
const getSocialIconStyle = (platform) =>
  SOCIAL_ICON_STYLES[platform?.toLowerCase()] || DEFAULT_SOCIAL_ICON;

// Fetch partners data from API
const {
  data: partners,
  pending: partnersPending,
  error: partnersError,
  refresh: refreshPartners,
} = await useLazyAsyncData("about-partners", () => {
  const { getPartners } = useApi();
  return getPartners();
});

// Fetch testimonials data from API
const {
  data: testimonialsData,
  pending: testimonialsPending,
  error: testimonialsError,
} = await useLazyAsyncData("testimonials", () => {
  const { getAllTestimonials } = useApi();
  return getAllTestimonials();
});

// Dynamic testimonials with fallback
const dynamicTestimonials = computed(() => {
  if (testimonialsData.value && testimonialsData.value.length > 0) {
    return testimonialsData.value;
  }

  // Fallback data if API fails
  return [
    {
      quote:
        "ByteStackLab transformed our vision into a stunning reality. Their attention to detail and innovative approach exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CEO & Founder",
      company: "TechStart Inc.",
      image: "/images/testimonials/sarah.svg",
    },
    {
      quote:
        "Working with ByteStackLab was a game-changer for our business. They delivered exceptional results on time and within budget.",
      name: "Michael Chen",
      position: "CTO",
      company: "Digital Solutions",
      image: "/images/testimonials/michael.svg",
    },
    {
      quote:
        "The team's expertise and professionalism made our project a huge success. I highly recommend ByteStackLab for any digital needs.",
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "GrowthCorp",
      image: "/images/testimonials/emily.svg",
    },
    {
      quote:
        "ByteStackLab's innovative solutions helped us scale our business to new heights. Their support has been invaluable.",
      name: "David Thompson",
      position: "Founder",
      company: "InnovateHub",
      image: "/images/testimonials/david.svg",
    },
    {
      quote:
        "Exceptional quality and outstanding service. ByteStackLab is our go-to partner for all digital transformation projects.",
      name: "Lisa Wang",
      position: "Project Manager",
      company: "FutureTech",
      image: "/images/testimonials/lisa.svg",
    },
  ];
});

// Partners functionality
const currentSlide = ref(0);

const itemsPerPage = computed(() => {
  if (import.meta.client) {
    if (window.innerWidth >= 1024) return 6;
    if (window.innerWidth >= 768) return 4;
    return 2;
  }
  return 6;
});

const visiblePartners = computed(() => {
  if (!partners.value || partners.value.length === 0) return [];
  const start = currentSlide.value * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return partners.value.slice(start, end);
});

const nextSlide = () => {
  if (!partners.value || partners.value.length === 0) return;
  const maxSlides = Math.ceil(partners.value.length / itemsPerPage.value);
  if (currentSlide.value < maxSlides - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
};

const prevSlide = () => {
  if (!partners.value || partners.value.length === 0) return;
  const maxSlides = Math.ceil(partners.value.length / itemsPerPage.value);
  if (currentSlide.value > 0) {
    currentSlide.value--;
  } else {
    currentSlide.value = maxSlides - 1;
  }
};

// Auto slide functionality for partners
let autoSlideInterval = null;

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 8000);
};

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};

const handleResize = () => {
  // Keep pagination aligned when the viewport size changes.
  currentSlide.value = 0;
};

// Testimonials functionality
const currentTestimonial = ref(0);

const leftAvatars = computed(() => {
  if (!dynamicTestimonials.value.length) return [];
  const left = [];
  const total = dynamicTestimonials.value.length;

  // Get 2 testimonials to the left of current
  for (let i = 2; i >= 1; i--) {
    const index = (currentTestimonial.value - i + total) % total;
    left.push(dynamicTestimonials.value[index]);
  }

  return left;
});

const rightAvatars = computed(() => {
  if (!dynamicTestimonials.value.length) return [];
  const right = [];
  const total = dynamicTestimonials.value.length;

  // Get 2 testimonials to the right of current
  for (let i = 1; i <= 2; i++) {
    const index = (currentTestimonial.value + i) % total;
    right.push(dynamicTestimonials.value[index]);
  }

  return right;
});

const getLeftIndex = (avatarIndex) => {
  if (!dynamicTestimonials.value.length) return 0;
  const total = dynamicTestimonials.value.length;
  return (currentTestimonial.value - (2 - avatarIndex) + total) % total;
};

const getRightIndex = (avatarIndex) => {
  if (!dynamicTestimonials.value.length) return 0;
  const total = dynamicTestimonials.value.length;
  return (currentTestimonial.value + avatarIndex + 1) % total;
};

const nextTestimonial = () => {
  if (!dynamicTestimonials.value.length) return;
  currentTestimonial.value =
    (currentTestimonial.value + 1) % dynamicTestimonials.value.length;
};

const prevTestimonial = () => {
  if (!dynamicTestimonials.value.length) return;
  const total = dynamicTestimonials.value.length;
  currentTestimonial.value = (currentTestimonial.value - 1 + total) % total;
};

const goToTestimonial = (index) => {
  if (!dynamicTestimonials.value.length) return;
  currentTestimonial.value = index;
};

// Initialize animations when component is mounted
onMounted(() => {
  if (
    partners.value &&
    partners.value.length > 0 &&
    !partnersPending.value &&
    !partnersError.value
  ) {
    startAutoSlide();
  }

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  stopAutoSlide();
  window.removeEventListener("resize", handleResize);
});

watch(
  [partners, partnersPending, partnersError],
  ([newPartners, newPending, newError]) => {
    stopAutoSlide();

    if (newPartners && newPartners.length > 0 && !newPending && !newError) {
      setTimeout(() => {
        startAutoSlide();
      }, 1000);
    }
  },
);
</script>

<style scoped>
/* Custom animations matching the existing theme */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes pulse-medium {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes data-flow-1 {
  0% {
    transform: translateX(-100px) translateY(-100px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100px) translateY(100px);
    opacity: 0;
  }
}

@keyframes data-flow-2 {
  0% {
    transform: translateX(100px) translateY(-100px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100px) translateY(100px);
    opacity: 0;
  }
}

@keyframes data-flow-3 {
  0% {
    transform: translateX(-100px) translateY(100px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(100px) translateY(-100px);
    opacity: 0;
  }
}

@keyframes data-flow-4 {
  0% {
    transform: translateX(100px) translateY(100px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(-100px) translateY(-100px);
    opacity: 0;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-medium 2.5s ease-in-out infinite;
}

.animate-data-flow-1 {
  animation: data-flow-1 8s ease-in-out infinite;
}

.animate-data-flow-2 {
  animation: data-flow-2 10s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-data-flow-3 {
  animation: data-flow-3 9s ease-in-out infinite;
  animation-delay: 4s;
}

.animate-data-flow-4 {
  animation: data-flow-4 7s ease-in-out infinite;
  animation-delay: 6s;
}

/* Partner slider effects (same as home) */
.hover\:scale-105:hover {
  transform: scale(1.1);
}

.filter.grayscale {
  filter: grayscale(100%);
  opacity: 0.7;
}

.filter.grayscale:hover {
  filter: grayscale(0%);
  opacity: 1;
}

.transition-all {
  transition: all 0.3s ease;
}

button {
  pointer-events: auto;
  z-index: 10;
}

/* Transition animations for testimonials and partners */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
