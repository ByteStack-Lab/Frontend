<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-[#eef0ff]">
    <!-- Notification Component -->
    <Transition name="notification" mode="out-in">
      <div
        v-if="notification.show"
        class="fixed top-4 right-4 z-[9999] max-w-md w-full"
      >
        <div
          :class="[
            'rounded-lg shadow-lg p-4',
            notification.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200',
          ]"
        >
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <!-- Success Icon -->
              <svg
                v-if="notification.type === 'success'"
                class="w-6 h-6 text-green-600"
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
              <!-- Error Icon -->
              <svg
                v-else
                class="w-6 h-6 text-red-600"
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
            <div class="ml-3 flex-1">
              <h3
                :class="[
                  'text-sm font-medium',
                  notification.type === 'success'
                    ? 'text-green-800'
                    : 'text-red-800',
                ]"
              >
                {{ notification.title }}
              </h3>
              <p
                :class="[
                  'mt-1 text-sm',
                  notification.type === 'success'
                    ? 'text-green-700'
                    : 'text-red-700',
                ]"
              >
                {{ notification.message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0">
              <button
                :class="[
                  'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                  notification.type === 'success'
                    ? 'text-green-500 hover:bg-green-100 focus:ring-green-600'
                    : 'text-red-500 hover:bg-red-100 focus:ring-red-600',
                ]"
                @click="hideNotification"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Loading State -->
    <div v-if="loading" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div
          class="w-16 h-16 border-4 border-[#3533cd] border-t-transparent rounded-full animate-spin mx-auto mb-4"
        />
        <p class="text-gray-600">Loading job details...</p>
      </div>
    </div>
    <!-- Error State -->
    <div
      v-else-if="error"
      class="min-h-screen flex items-center justify-center"
    >
      <div class="text-center">
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
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Job Not Found</h1>
        <p class="text-gray-600 mb-6">{{ error }}</p>
        <NuxtLink
          to="/careers"
          class="bg-[#3533cd] text-white px-6 py-3 rounded-lg hover:bg-[#1e1b69] transition-colors"
        >
          Back to Careers
        </NuxtLink>
      </div>
    </div>

    <!-- Job Details -->
    <div v-else-if="job" class="pt-28 pb-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <!-- Back Button -->
        <NuxtLink
          to="/careers"
          class="inline-flex items-center text-[#3533cd] hover:text-[#1e1b69] transition-colors mb-8"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Careers
        </NuxtLink>

        <!-- Job Header -->
        <div
          class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 lg:p-8 mb-8"
        >
          <div
            class="flex flex-col lg:flex-row lg:items-start lg:justify-between"
          >
            <div class="flex-1">
              <div class="flex items-center mb-4 flex-wrap gap-2">
                <span
                  :class="getDepartmentClass(job.department)"
                  class="px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ job.department }}
                </span>
                <span
                  v-if="job.is_featured"
                  class="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                >
                  ⭐ Featured
                </span>
                <span class="text-sm text-gray-500 flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {{ job.location }}
                </span>
                <span class="mx-2 text-gray-300">•</span>
                <span class="text-sm text-gray-500 flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
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
                  {{ job.type.replace("-", " ") }}
                </span>
              </div>

              <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ job.title }}
              </h1>
              <p v-if="job.experience_level" class="text-lg text-gray-600 mb-6">
                {{ job.experience_level }}
              </p>

              <div
                class="flex items-center space-x-6 text-sm text-gray-500 mb-6 flex-wrap gap-y-2"
              >
                <div class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2"
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
                  <span class="font-semibold">{{ job.salary_range }}</span>
                </div>
                <div v-if="job.application_deadline" class="flex items-center">
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span
                    >Apply by {{ formatDate(job.application_deadline) }}</span
                  >
                </div>
              </div>
            </div>

            <div class="lg:ml-8 mt-6 lg:mt-0">
              <button
                class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center w-full lg:w-auto justify-center text-lg hover:scale-105"
                @click="scrollToApplication"
              >
                Apply Now
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

        <div class="grid lg:grid-cols-5 xl:grid-cols-3 gap-6 lg:gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-3 xl:col-span-2 space-y-6">
            <!-- Job Description -->
            <div
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8"
            >
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Job Description
              </h2>
              <!-- eslint-disable vue/no-v-html -- sanitized via sanitizeHtml() below, which strips <script> tags, inline event handlers, and javascript: URLs -->
              <div
                class="prose prose-lg max-w-none text-gray-600"
                v-html="sanitizeHtml(job.description)"
              />
              <!-- eslint-enable vue/no-v-html -->
            </div>

            <!-- Responsibilities -->
            <div
              v-if="job.responsibilities && job.responsibilities.length > 0"
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8"
            >
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Key Responsibilities
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="responsibility in job.responsibilities"
                  :key="responsibility"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-[#6675F7] mr-3 mt-0.5 flex-shrink-0"
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
                  <span class="text-gray-700">{{ responsibility }}</span>
                </li>
              </ul>
            </div>

            <!-- Requirements -->
            <div
              v-if="job.requirements && job.requirements.length > 0"
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8"
            >
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Requirements
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="requirement in job.requirements"
                  :key="requirement"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-[#3533cd] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span class="text-gray-700">{{ requirement }}</span>
                </li>
              </ul>
            </div>

            <!-- Benefits -->
            <div
              v-if="job.benefits && job.benefits.length > 0"
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8"
            >
              <h2 class="text-2xl font-bold text-gray-900 mb-6">
                Benefits & Perks
              </h2>
              <ul class="space-y-3">
                <li
                  v-for="benefit in job.benefits"
                  :key="benefit"
                  class="flex items-start"
                >
                  <svg
                    class="w-5 h-5 text-[#1e1b69] mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span class="text-gray-700">{{ benefit }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-2 xl:col-span-1 space-y-6 min-w-0">
            <!-- Quick Apply -->
            <div
              class="bg-gradient-to-br from-[#eef0ff] to-[#f5f6ff] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8 sticky top-8 border border-[#cfd4ff]"
            >
              <div class="text-center">
                <div
                  class="w-16 h-16 bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] rounded-full flex items-center justify-center mx-auto mb-4"
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
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2M8 6v2a2 2 0 002 2m0 0h4m-4 0a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2"
                    />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-3">
                  Ready to Apply?
                </h3>
                <p class="text-gray-600 mb-6 text-sm leading-relaxed">
                  Join our innovative team and build the future of technology
                  with us. Submit your application today!
                </p>
                <button
                  class="w-full bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  @click="scrollToApplication"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Apply Now
                </button>
              </div>
            </div>

            <!-- Job Info -->
            <div
              class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 lg:p-8"
            >
              <h3 class="text-xl font-bold text-gray-900 mb-6">
                Job Information
              </h3>
              <div class="space-y-5">
                <div class="border-b border-gray-100 pb-3">
                  <span class="text-gray-600 text-sm block mb-1"
                    >Department</span
                  >
                  <span class="font-semibold text-gray-900 text-lg">{{
                    job.department
                  }}</span>
                </div>
                <div class="border-b border-gray-100 pb-3">
                  <span class="text-gray-600 text-sm block mb-1">Location</span>
                  <span class="font-semibold text-gray-900 text-lg">{{
                    job.location
                  }}</span>
                </div>
                <div class="border-b border-gray-100 pb-3">
                  <span class="text-gray-600 text-sm block mb-1"
                    >Employment Type</span
                  >
                  <span
                    class="font-semibold text-gray-900 text-lg capitalize"
                    >{{ job.type.replace("-", " ") }}</span
                  >
                </div>
                <div class="border-b border-gray-100 pb-3">
                  <span class="text-gray-600 text-sm block mb-1"
                    >Experience Level</span
                  >
                  <span class="font-semibold text-gray-900 text-lg">{{
                    job.experience_level || "Not specified"
                  }}</span>
                </div>
                <div class="border-b border-gray-100 pb-3">
                  <span class="text-gray-600 text-sm block mb-1"
                    >Salary Range</span
                  >
                  <span class="font-semibold text-[#3533cd] text-lg">{{
                    job.salary_range
                  }}</span>
                </div>
                <div v-if="job.application_deadline" class="pt-1">
                  <span class="text-gray-600 text-sm block mb-1"
                    >Application Deadline</span
                  >
                  <span class="font-semibold text-red-600 text-lg">{{
                    formatDate(job.application_deadline)
                  }}</span>
                </div>
              </div>
            </div>

            <!-- Share -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">
                Share this Job
              </h3>
              <div class="flex justify-center space-x-4">
                <button
                  class="w-12 h-12 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-110 flex items-center justify-center group share-button"
                  title="Share on X"
                  @click="shareJob('twitter')"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.658-5.848 6.658H2.117l7.645-8.746L2.82 2.25h6.8l4.759 6.284L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                    />
                  </svg>
                </button>
                <button
                  class="w-12 h-12 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-all duration-300 hover:scale-110 flex items-center justify-center group share-button"
                  title="Share on LinkedIn"
                  @click="shareJob('linkedin')"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </button>
                <button
                  class="w-12 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group share-button"
                  title="Share on Facebook"
                  @click="shareJob('facebook')"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    />
                  </svg>
                </button>
                <button
                  class="w-12 h-12 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center group share-button"
                  title="Share on WhatsApp"
                  @click="shareJob('whatsapp')"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                    />
                  </svg>
                </button>
                <button
                  class="w-12 h-12 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110 flex items-center justify-center group share-button"
                  title="Copy Job Link"
                  @click="copyJobLink"
                >
                  <svg
                    class="w-5 h-5 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Application Form -->
        <div
          id="application-form"
          class="mt-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 lg:p-8"
        >
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
            Apply for this Position
          </h2>

          <form class="space-y-6" @submit.prevent="submitApplication">
            <!-- Honeypot field — hidden from real users, catches bots that auto-fill every input -->
            <div
              class="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label for="job-apply-website">Leave this field empty</label>
              <input
                id="job-apply-website"
                v-model="applicationForm.website"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              >
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >First Name *</label
                >
                <input
                  v-model="applicationForm.first_name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                  placeholder="Enter your first name"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Last Name *</label
                >
                <input
                  v-model="applicationForm.last_name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                  placeholder="Enter your last name"
                >
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Email Address *</label
                >
                <input
                  v-model="applicationForm.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                  placeholder="Enter your email"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Phone Number</label
                >
                <input
                  v-model="applicationForm.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                  placeholder="Enter your phone number"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Resume/CV *</label
              >
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                @change="handleFileUpload"
              >
              <p class="text-sm text-gray-500 mt-1">
                Upload your resume in PDF, DOC, or DOCX format (max 5MB)
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Portfolio URL</label
                >
                <input
                  v-model="applicationForm.portfolio_url"
                  type="url"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                  placeholder="https://yourportfolio.com"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >LinkedIn Profile</label
                >
                <input
                  v-model="applicationForm.linkedin_url"
                  type="url"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                >
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >GitHub Profile</label
              >
              <input
                v-model="applicationForm.github_url"
                type="url"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                placeholder="https://github.com/yourusername"
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Cover Letter</label
              >
              <textarea
                v-model="applicationForm.cover_letter"
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                placeholder="Tell us why you're interested in this position and why you'd be a great fit..."
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Additional Information</label
              >
              <textarea
                v-model="applicationForm.additional_info"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3533cd] focus:border-transparent"
                placeholder="Any additional information you'd like to share..."
              />
            </div>

            <div class="flex items-center justify-between pt-6">
              <div class="flex items-center">
                <input
                  id="terms"
                  v-model="applicationForm.terms"
                  type="checkbox"
                  required
                  class="w-4 h-4 text-[#3533cd] bg-gray-100 border-gray-300 rounded focus:ring-[#3533cd]"
                >
                <label for="terms" class="ml-2 text-sm text-gray-700">
                  I agree to the
                  <NuxtLink to="/terms-conditions" class="text-[#3533cd] hover:underline">Terms of Service</NuxtLink>
                  and
                  <NuxtLink to="/privacy-policy" class="text-[#3533cd] hover:underline">Privacy Policy</NuxtLink>
                </label>
              </div>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg
                v-if="submitting"
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {{ submitting ? "Submitting..." : "Submit Application" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

// Reactive data
const submitting = ref(false);

// Notification system
const notification = ref({
  show: false,
  type: "success", // 'success' or 'error'
  title: "",
  message: "",
});

// Application form data
const applicationForm = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  cover_letter: "",
  resume: null,
  portfolio_url: "",
  linkedin_url: "",
  github_url: "",
  additional_info: "",
  terms: false,
  website: "", // honeypot — must stay empty
});

// Server-side data fetching for SSR/SEO
const { data: pageData, pending: loading } = await useLazyAsyncData(
  `career-job-${route.params.slug}`,
  async () => {
    const { getCareerJob } = useApi();
    try {
      const job = await getCareerJob(route.params.slug);
      return { job, error: null };
    } catch (err) {
      return {
        job: null,
        error:
          err.response?.data?.message || err.data?.message || "Job not found",
      };
    }
  },
  { default: () => ({ job: null, error: null }) },
);

const job = computed(() => pageData.value?.job || null);
const error = computed(() => pageData.value?.error || null);

// Correct HTTP status for crawlers/SEO, while keeping this page's own
// "Job Not Found" UI (below) instead of redirecting to a generic error page
if (import.meta.server && !job.value) {
  setResponseStatus(404);
}

// Dynamic SEO meta tags
const breadcrumbSchema = useBreadcrumbSchema();

useHead(() => {
  const head = {};

  if (job.value?.meta_title) {
    head.title = job.value.meta_title;
    head.meta = [
      {
        name: "description",
        content: job.value.meta_description || job.value.description,
      },
    ];
  }

  head.script = [
    ...(job.value?.schemaMarkup
      ? [
          {
            type: "application/ld+json",
            innerHTML: JSON.stringify(job.value.schemaMarkup),
          },
        ]
      : []),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Careers", path: "/careers" },
      {
        name: job.value?.title || "Job Opening",
        path: `/careers/${route.params.slug}`,
      },
    ]),
  ];

  return head;
});

// Get department class for styling
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

// Format date
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Scroll to application form
const scrollToApplication = () => {
  const element = document.getElementById("application-form");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Handle file upload
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      showNotification(
        "error",
        "File Too Large ⚠️",
        "Resume file size must be less than 5MB. Please choose a smaller file.",
      );
      event.target.value = "";
      return;
    }

    // Check file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(file.type)) {
      showNotification(
        "error",
        "Invalid File Type ⚠️",
        "Please upload your resume in PDF, DOC, or DOCX format only.",
      );
      event.target.value = "";
      return;
    }

    applicationForm.value.resume = file;

    // Show success feedback
    showNotification(
      "success",
      "Resume Uploaded ✅",
      `File "${file.name}" has been successfully selected.`,
    );
  }
};

// Submit application
const submitApplication = async () => {
  // Basic validation
  if (
    !applicationForm.value.first_name ||
    !applicationForm.value.last_name ||
    !applicationForm.value.email
  ) {
    showNotification(
      "error",
      "Missing Required Fields ⚠️",
      "Please fill in all required fields (First Name, Last Name, Email).",
    );
    return;
  }

  if (!applicationForm.value.resume) {
    showNotification(
      "error",
      "Resume Required ⚠️",
      "Please upload your resume to proceed with the application.",
    );
    return;
  }

  if (!applicationForm.value.terms) {
    showNotification(
      "error",
      "Terms Not Accepted ⚠️",
      "Please accept the Terms of Service and Privacy Policy to continue.",
    );
    return;
  }

  try {
    submitting.value = true;

    const { applyToJob } = useApi();
    const formData = new FormData();
    formData.append("first_name", applicationForm.value.first_name);
    formData.append("last_name", applicationForm.value.last_name);
    formData.append("email", applicationForm.value.email);
    formData.append("website", applicationForm.value.website || "");
    formData.append("phone", applicationForm.value.phone || "");
    formData.append("cover_letter", applicationForm.value.cover_letter || "");
    formData.append("portfolio_url", applicationForm.value.portfolio_url || "");
    formData.append("linkedin_url", applicationForm.value.linkedin_url || "");
    formData.append("github_url", applicationForm.value.github_url || "");
    formData.append(
      "additional_info",
      applicationForm.value.additional_info || "",
    );

    if (applicationForm.value.resume) {
      formData.append("resume", applicationForm.value.resume);
    }

    await applyToJob(route.params.slug, formData);

    // Show success notification
    showNotification(
      "success",
      "Application Submitted Successfully! 🎉",
      `Thank you for applying to ${job.value.title}. We'll review your application and get back to you soon.`,
    );

    // Reset form
    applicationForm.value = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      cover_letter: "",
      resume: null,
      portfolio_url: "",
      linkedin_url: "",
      github_url: "",
      additional_info: "",
      terms: false,
      website: "",
    };

    // Reset file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = "";

    // Scroll to top to show notification
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (err) {
    console.error("Application submission error:", err);

    // Handle different types of errors
    let errorTitle = "Application Submission Failed ❌";
    let errorMessage = "Failed to submit application. Please try again.";

    if (err.response?.status === 422) {
      // Validation errors
      const validationErrors = err.response.data.errors;
      if (validationErrors) {
        const firstError = Object.values(validationErrors)[0];
        errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
        errorTitle = "Validation Error ⚠️";
      }
    } else if (err.response?.status === 404) {
      errorMessage = "Job position not found. Please try refreshing the page.";
      errorTitle = "Job Not Found ❌";
    } else if (err.response?.status >= 500) {
      errorMessage = "Server error occurred. Please try again later.";
      errorTitle = "Server Error ⚠️";
    } else if (err.response?.data?.message) {
      errorMessage = err.response.data.message;
    } else if (err.data?.message) {
      errorMessage = err.data.message;
    }

    // Show error notification
    showNotification("error", errorTitle, errorMessage);
  } finally {
    submitting.value = false;
  }
};

// Share job
const shareJob = (platform) => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(`${job.value.title} - ByteStackLab`);

  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    whatsapp: `https://wa.me/?text=${title}%20${url}`,
  };

  if (shareUrls[platform]) {
    window.open(shareUrls[platform], "_blank");
  }
};

// Copy job link
const copyJobLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showNotification(
      "success",
      "Link Copied! 📋",
      "Job link has been copied to your clipboard.",
    );
  } catch {
    showNotification(
      "error",
      "Copy Failed ❌",
      "Failed to copy job link. Please try again.",
    );
  }
};

// Notification system functions
const showNotification = (type, title, message) => {
  notification.value = {
    show: true,
    type,
    title,
    message,
  };

  // Auto-hide after 5 seconds
  setTimeout(() => {
    hideNotification();
  }, 5000);
};

const hideNotification = () => {
  notification.value.show = false;
};

</script>

<style scoped>
.prose {
  max-width: none;
}

.prose p {
  margin-bottom: 1rem;
}

.prose ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose ol {
  list-style: decimal;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-bottom: 0.5rem;
}

.prose h1,
.prose h2,
.prose h3,
.prose h4,
.prose h5,
.prose h6 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.prose strong {
  font-weight: 600;
}

.prose em {
  font-style: italic;
}

/* Social media share buttons */
.share-button {
  position: relative;
  overflow: hidden;
}

.share-button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition:
    width 0.3s ease,
    height 0.3s ease;
}

.share-button:hover::before {
  width: 100%;
  height: 100%;
}

.share-button svg {
  position: relative;
  z-index: 1;
}

/* Individual social media colors */
.twitter-btn:hover {
  background-color: #1da1f2 !important;
}

.linkedin-btn:hover {
  background-color: #0077b5 !important;
}

.facebook-btn:hover {
  background-color: #1877f2 !important;
}

.whatsapp-btn:hover {
  background-color: #25d366 !important;
}

.copy-btn:hover {
  background-color: #374151 !important;
}

/* Notification animations */
.notification-enter-active,
.notification-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%) scale(0.95);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%) scale(0.95);
}

.notification-enter-to,
.notification-leave-from {
  opacity: 1;
  transform: translateX(0) scale(1);
}
</style>
