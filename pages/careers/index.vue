<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-[#eef0ff]">
    <!-- Careers Hero Section -->
    <section class="relative pt-28 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Matrix-style Grid Lines -->
        <div
          class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6675F7]/25 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute left-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#3533cd]/20 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1e1b69]/25 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute right-64 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#6675F7]/20 to-transparent animate-pulse-medium"
        />

        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6675F7]/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute top-64 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3533cd]/25 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e1b69]/20 to-transparent animate-pulse-slow"
        />

        <!-- Moving Data Points -->
        <div
          class="absolute top-48 left-36 w-1 h-1 bg-[#6675F7] rounded-full animate-data-flow-1"
        />
        <div
          class="absolute top-72 right-48 w-1 h-1 bg-[#3533cd] rounded-full animate-data-flow-2"
        />
        <div
          class="absolute bottom-48 left-72 w-1 h-1 bg-[#1e1b69] rounded-full animate-data-flow-3"
        />
        <div
          class="absolute bottom-72 right-36 w-1 h-1 bg-[#6675F7] rounded-full animate-data-flow-4"
        />
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <!-- Decorative Line -->
          <div
            class="w-16 h-1 bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] rounded-full mx-auto mb-6"
          />

          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span class="text-gray-900">Join Our</span>
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
            >
              Team</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Build the future of technology with us. We're looking for
            passionate, innovative, and talented individuals to join our growing
            team and create amazing digital experiences.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-6 justify-center mt-10">
            <button
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              @click="scrollToPositions"
            >
              View Open Positions
              <svg
                class="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <button
              class="border-2 border-[#3533cd] text-[#3533cd] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#3533cd] hover:text-white transition-all duration-300 flex items-center justify-center"
              @click="scrollToCulture"
            >
              Learn Our Culture
              <svg
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
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-[#3533cd] mb-2">
              {{ totalJobs }}
            </div>
            <div class="text-gray-600">Open Positions</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#6675F7] mb-2">
              {{ departments.length - 1 }}
            </div>
            <div class="text-gray-600">Departments</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#1e1b69] mb-2">50+</div>
            <div class="text-gray-600">Team Members</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-[#3533cd] mb-2">4.8</div>
            <div class="text-gray-600">Employee Rating</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions Section -->
    <section
      id="open-positions"
      class="py-24 bg-gradient-to-br from-gray-50 to-[#eef0ff]"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Open Positions
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take the next step in your career? Explore our current
            openings and find the perfect role for you.
          </p>
        </div>

        <!-- Search and Filter -->
        <div class="mb-12 space-y-6">
          <!-- Search Bar -->
          <div class="max-w-md mx-auto">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search jobs by title or keyword..."
                class="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
              >
              <svg
                class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <!-- Department Filter -->
          <div class="flex flex-wrap justify-center gap-4">
            <button
              v-for="department in departments"
              :key="department.id"
              :class="[
                'px-6 py-3 font-medium text-sm lg:text-base transition-all duration-300 relative rounded-full',
                activeDepartment === department.id
                  ? 'bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg',
              ]"
              @click="activeDepartment = department.id"
            >
              {{ department.name }}
              <span
                v-if="department.id !== 'all'"
                class="ml-2 text-xs opacity-75"
              >
                ({{ getJobCountByDepartment(department.id) }})
              </span>
            </button>
          </div>
        </div>

        <!-- Job Listings -->
        <div v-if="loading" class="text-center py-16">
          <div
            class="w-16 h-16 border-4 border-[#3533cd] border-t-transparent rounded-full animate-spin mx-auto mb-4"
          />
          <p class="text-gray-600">Loading amazing opportunities...</p>
        </div>

        <div v-else-if="error" class="text-center py-16">
          <div
            class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <svg
              class="w-12 h-12 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            Failed to load jobs
          </h3>
          <p class="text-gray-600 mb-4">{{ error }}</p>
          <button
            class="bg-[#3533cd] text-white px-6 py-2 rounded-lg hover:bg-[#1e1b69] transition-colors"
            @click="fetchJobs"
          >
            Try Again
          </button>
        </div>

        <Transition v-else name="fade" mode="out-in">
          <div :key="`${activeDepartment}-${searchQuery}`" class="space-y-6">
            <!-- Featured Jobs First -->
            <div
              v-if="
                featuredJobs.length > 0 &&
                activeDepartment === 'all' &&
                !searchQuery
              "
              class="mb-12"
            >
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
                Featured Opportunities
              </h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div
                  v-for="(job, index) in featuredJobs"
                  :key="`featured-${job.id}`"
                  :style="{ animationDelay: `${index * 100}ms` }"
                  class="bg-gradient-to-br from-[#eef0ff] to-[#f5f6ff] border-2 border-[#cfd4ff] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 animate-fade-in-up relative overflow-hidden"
                >
                  <div class="absolute top-4 right-4">
                    <span
                      class="bg-gradient-to-r from-[#6675F7] to-[#3533cd] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center"
                    >
                      ⭐ Featured
                    </span>
                  </div>

                  <JobCard :job="job" :is-featured="true" />
                </div>
              </div>
            </div>

            <!-- Regular Jobs -->
            <div class="grid gap-6">
              <div
                v-for="(job, index) in regularFilteredJobs"
                :key="job.id"
                :style="{ animationDelay: `${index * 100}ms` }"
                class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 animate-fade-in-up"
              >
                <JobCard :job="job" />
              </div>
            </div>

            <!-- No Jobs Message -->
            <div v-if="filteredJobs.length === 0" class="text-center py-16">
              <div
                class="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg
                  class="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6v2a2 2 0 002 2m0 0h4m-4 0a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2"
                  />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{
                  searchQuery
                    ? "No jobs match your search"
                    : "No openings in this department"
                }}
              </h3>
              <p class="text-gray-600">
                {{
                  searchQuery
                    ? "Try different keywords or browse all positions."
                    : "Check back soon or explore other departments for available positions."
                }}
              </p>
              <button
                v-if="searchQuery || activeDepartment !== 'all'"
                class="mt-4 text-[#3533cd] hover:text-[#1e1b69] font-medium"
                @click="clearFilters"
              >
                Clear filters and show all jobs
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </section>

    <!-- Why Join Us Section -->
    <section id="why-join-us" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Why Work With Us?
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in creating an environment where innovation thrives and
            every team member can reach their full potential.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Benefits -->
          <div
            class="group bg-gradient-to-br from-[#eef0ff] to-[#f6f7ff] p-8 rounded-2xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#6675F7] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Innovation First
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Work on cutting-edge projects using the latest technologies. We
              encourage experimentation and creative problem-solving.
            </p>
          </div>

          <div
            class="group bg-gradient-to-br from-[#f3f4ff] to-[#eef0ff] p-8 rounded-2xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#6675F7] to-[#3533cd] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Continuous Learning
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Access to courses, conferences, and certifications. We invest in
              your professional growth and skill development.
            </p>
          </div>

          <div
            class="group bg-gradient-to-br from-[#f8f9ff] to-[#eef0ff] p-8 rounded-2xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#1e1b69] to-[#3533cd] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Work-Life Balance
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Flexible working hours, remote work options, and generous time-off
              policies to maintain healthy work-life balance.
            </p>
          </div>

          <div
            class="group bg-gradient-to-br from-[#eef0ff] to-[#f6f7ff] p-8 rounded-2xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#6675F7] to-[#1e1b69] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Great Team Culture
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Collaborative environment with talented individuals who support
              each other and celebrate success together.
            </p>
          </div>

          <div
            class="group bg-gradient-to-br from-[#f4f5ff] to-[#eef0ff] p-8 rounded-2xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#3533cd] to-[#6675F7] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Competitive Benefits
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Excellent salary packages, health insurance, retirement plans, and
              performance bonuses to reward your contributions.
            </p>
          </div>

          <div
            class="group bg-gradient-to-br from-[#eef0ff] to-[#f5f6ff] p-8 rounded-2xl hover:shadow-xl transition-all duration-500"
          >
            <div
              class="w-16 h-16 bg-gradient-to-r from-[#1e1b69] to-[#6675F7] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">
              Recognition & Growth
            </h3>
            <p class="text-gray-600 leading-relaxed">
              Clear career progression paths, regular performance reviews, and
              opportunities to lead projects and mentor others.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process Section -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-[#eef0ff]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Our Hiring Process
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            We've designed a straightforward and transparent hiring process to
            help you understand what to expect.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="relative mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-r from-[#3533cd] to-[#6675F7] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-2xl font-bold text-white">1</span>
              </div>
              <div
                class="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
              >
                <svg
                  class="w-8 h-8 text-[#cfd4ff]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Apply Online</h3>
            <p class="text-gray-600">
              Submit your application through our careers portal with your
              resume and cover letter.
            </p>
          </div>

          <div class="text-center group">
            <div class="relative mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-r from-[#6675F7] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-2xl font-bold text-white">2</span>
              </div>
              <div
                class="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
              >
                <svg
                  class="w-8 h-8 text-[#cfd4ff]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Initial Review</h3>
            <p class="text-gray-600">
              Our HR team reviews your application and qualifications against
              the job requirements.
            </p>
          </div>

          <div class="text-center group">
            <div class="relative mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-r from-[#1e1b69] to-[#3533cd] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-2xl font-bold text-white">3</span>
              </div>
              <div
                class="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
              >
                <svg
                  class="w-8 h-8 text-[#cfd4ff]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              Interview Process
            </h3>
            <p class="text-gray-600">
              Multiple rounds including technical assessment, team interview,
              and culture fit evaluation.
            </p>
          </div>

          <div class="text-center group">
            <div class="mb-8">
              <div
                class="w-20 h-20 bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
              >
                <span class="text-2xl font-bold text-white">4</span>
              </div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Final Decision</h3>
            <p class="text-gray-600">
              We'll make an offer to successful candidates and help with
              onboarding and next steps.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="py-24 bg-gradient-to-r from-[#3533cd] via-[#2d2a7a] to-[#1e1b69]"
    >
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p class="text-xl text-white/90 mb-10 leading-relaxed">
          Don't see a perfect match? Send us your resume anyway. We're always
          looking for exceptional talent.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            class="bg-white text-[#3533cd] px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
          >
            Submit General Application
            <svg
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
          </button>

          <NuxtLink
            to="/contact"
            class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#3533cd] transition-all duration-300 flex items-center justify-center"
          >
            Have Questions?
            <svg
              class="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: "Careers - ByteStackLab | Join Our Team",
  meta: [
    {
      name: "description",
      content:
        "Join ByteStackLab's innovative team. Explore career opportunities in web development, mobile apps, and digital transformation. Great benefits, flexible work, and continuous learning.",
    },
    {
      property: "og:title",
      content: "Careers - ByteStackLab | Join Our Team",
    },
    {
      property: "og:description",
      content:
        "Join ByteStackLab's innovative team. Explore career opportunities in web development, mobile apps, and digital transformation. Great benefits, flexible work, and continuous learning.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});

// Reactive data
const activeDepartment = ref("all");
const searchQuery = ref("");

const departments = [
  { id: "all", name: "All Departments" },
  { id: "engineering", name: "Engineering" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" },
  { id: "sales", name: "Sales" },
];

// Helper functions
const stripHtmlTags = (html) => {
  if (!html) return "";
  if (typeof document === "undefined") {
    return html.replace(/<[^>]*>/g, "");
  }
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const getDepartmentClass = (department) => {
  const classes = {
    Engineering: "bg-[#e9ecff] text-[#1e1b69]",
    Design: "bg-[#eef0ff] text-[#3533cd]",
    Marketing: "bg-[#f2f4ff] text-[#3533cd]",
    Sales: "bg-[#ecefff] text-[#1e1b69]",
    Operations: "bg-gray-100 text-gray-800",
    HR: "bg-[#eef0ff] text-[#3533cd]",
    Finance: "bg-[#e8ebff] text-[#1e1b69]",
  };
  return classes[department] || "bg-gray-100 text-gray-800";
};

// Server-side data fetching for SSR/SEO
const {
  data: pageData,
  pending: loading,
  refresh: fetchJobs,
} = await useLazyAsyncData(
  "career-jobs-index",
  async () => {
    const { getCareerJobs } = useApi();
    try {
      const jobs = await getCareerJobs();
      const jobListings = jobs.map((job) => ({
        id: job.id,
        title: job.title,
        department: job.department,
        departmentClass: getDepartmentClass(job.department),
        location: job.location,
        type: job.type,
        salary: job.salary_range,
        salaryPeriod:
          job.salary_period === "per_month" ? "per month" : "per year",
        description: stripHtmlTags(job.description),
        requirements: job.requirements,
        slug: job.slug,
        is_featured: job.is_featured,
        experience_level: job.experience_level,
      }));
      return { jobListings, error: null };
    } catch (err) {
      console.error("Error fetching jobs:", err);
      return { jobListings: [], error: err.message || "Failed to load jobs" };
    }
  },
  { default: () => ({ jobListings: [], error: null }) },
);

const jobListings = computed(() => pageData.value?.jobListings || []);
const error = computed(() => pageData.value?.error || null);

// Computed properties
const filteredJobs = computed(() => {
  let jobs = jobListings.value;

  // Filter by department
  if (activeDepartment.value !== "all") {
    jobs = jobs.filter(
      (job) => job.department.toLowerCase() === activeDepartment.value,
    );
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    jobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        (job.requirements &&
          job.requirements.some((req) => req.toLowerCase().includes(query))),
    );
  }

  return jobs;
});

const featuredJobs = computed(() => {
  return filteredJobs.value.filter((job) => job.is_featured);
});

const regularFilteredJobs = computed(() => {
  if (activeDepartment.value === "all" && !searchQuery.value) {
    return filteredJobs.value.filter((job) => !job.is_featured);
  }
  return filteredJobs.value;
});

const totalJobs = computed(() => {
  return jobListings.value.length;
});

// Methods
const getJobCountByDepartment = (departmentId) => {
  if (departmentId === "all") return jobListings.value.length;
  return jobListings.value.filter(
    (job) => job.department.toLowerCase() === departmentId,
  ).length;
};

const clearFilters = () => {
  activeDepartment.value = "all";
  searchQuery.value = "";
};

const scrollToPositions = () => {
  const element = document.getElementById("open-positions");
  if (element) {
    element.scrollIntoView({ behavior: scrollBehavior() });
  }
};

const scrollToCulture = () => {
  const element = document.getElementById("why-join-us");
  if (element) {
    element.scrollIntoView({ behavior: scrollBehavior() });
  }
};

</script>

<style scoped>
/* Custom animations */
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

/* Vue Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Staggered animation for job listings */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
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

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-4xl {
    font-size: 2.5rem;
  }
}
</style>
