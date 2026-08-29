<template>
  <nav class="bg-white shadow-nav fixed top-0 left-0 right-0 z-[9999] w-full">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex justify-between items-center py-5">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <NuxtLink to="/">
            <img
              src="/images/bytestacklab-180x48.png"
              width="180"
              height="48"
              srcset="
                /images/bytestacklab-180x48.png 1x,
                /images/bytestacklab360x96.png  2x
              "
              alt="ByteStackLab"
              class="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
          </NuxtLink>
        </div>

        <!-- Desktop Navigation - Home Page -->
        <div
          v-if="isHomePage"
          class="hidden md:flex items-center space-x-6 lg:space-x-8"
        >
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base"
            >Home</NuxtLink
          >
          <a
            href="#about"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium cursor-pointer text-sm lg:text-base"
            @click="scrollToSection('about')"
            >About Us</a
          >
          <NavServicesDropdown :services="navbarServices" />
          <NavProductsDropdown :products="navbarProducts" />
          <a
            href="#case-studies"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium cursor-pointer text-sm lg:text-base"
            @click="scrollToSection('case-studies')"
            >Case Studies</a
          >
          <a
            href="#blog"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium cursor-pointer text-sm lg:text-base"
            @click="scrollToSection('blog')"
            >Blog</a
          >
        </div>

        <!-- Desktop Navigation - Other Pages -->
        <div v-else class="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base"
            >Home</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base"
            >About Us</NuxtLink
          >
          <NavServicesDropdown :services="navbarServices" />
          <NavProductsDropdown :products="navbarProducts" />
          <NuxtLink
            to="/case-studies"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base"
            >Case Studies</NuxtLink
          >
          <NuxtLink
            to="/blog"
            class="text-gray-600 hover:text-[#3533cd] transition-colors duration-200 font-medium text-sm lg:text-base"
            >Blog</NuxtLink
          >
        </div>

        <!-- CTA Button -->
        <div class="hidden md:block">
          <NuxtLink
            to="/contact"
            class="interactive-button bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-6 lg:px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 text-sm lg:text-base inline-block"
          >
            Hire Us
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="isMenuOpen"
            class="text-gray-700 hover:text-[#3533cd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3533cd] focus-visible:ring-offset-2 p-3 rounded-xl bg-gray-50 hover:bg-[#3533cd]/10 border border-gray-200 hover:border-[#3533cd]/20 transition-all duration-200 shadow-sm hover:shadow-md"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                v-if="!isMenuOpen"
                d="M4 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM10 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V5zM16 5a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V5zM4 11a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM10 11a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zM16 11a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zM4 17a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM10 17a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2zM16 17a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"
              />
              <path
                v-else
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 z-[10000] md:hidden w-screen h-screen"
    >
      <!-- Left sidebar menu -->
      <div
        class="mobile-sidebar relative w-full h-full bg-white shadow-2xl transform transition-all duration-1000 ease-out overflow-y-auto"
        :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        @click.stop
      >
        <!-- Menu header -->
        <div
          class="flex items-center justify-between p-6 border-b border-gray-100 header-gradient"
        >
          <NuxtLink to="/" @click="isMenuOpen = false">
            <img
              src="/images/bytestacklab-180x48.png"
              width="180"
              height="48"
              srcset="
                /images/bytestacklab-180x48.png 1x,
                /images/bytestacklab360x96.png  2x
              "
              alt="ByteStackLab"
              class="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity duration-200"
            >
          </NuxtLink>
          <button
            aria-label="Close menu"
            class="p-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3533cd] focus-visible:ring-offset-2"
            @click="isMenuOpen = false"
          >
            <svg
              class="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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

        <!-- Menu content -->
        <div class="flex flex-col p-6 space-y-4">
          <NuxtLink
            to="/"
            class="menu-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="menu-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>About Us</span>
          </NuxtLink>

          <!-- Services with submenu -->
          <div class="menu-item">
            <button
              class="w-full flex items-center justify-between space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
              @click="isServicesOpen = !isServicesOpen"
            >
              <div class="flex items-center space-x-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
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
                <span>Services</span>
              </div>
              <svg
                aria-hidden="true"
                class="w-4 h-4 transition-transform duration-200"
                :class="isServicesOpen ? 'rotate-180' : ''"
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
            <!-- Services submenu -->
            <div
              v-if="isServicesOpen"
              class="ml-4 mt-3 space-y-3 bg-gray-50 rounded-xl p-4"
            >
              <NuxtLink
                v-for="service in navbarServices"
                :key="service.id"
                :to="`/services/${service.slug}`"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item"
                @click="isMenuOpen = false"
              >
                <div
                  class="w-10 h-10 shrink-0 bg-gradient-to-r rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200"
                  :class="`${getServiceColor(service.category).from} ${getServiceColor(service.category).to}`"
                >
                  <svg
                    v-if="service.icon"
                    aria-hidden="true"
                    class="w-5 h-5 shrink-0 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <image :href="service.icon" width="20" height="20" />
                  </svg>
                  <svg
                    v-else
                    aria-hidden="true"
                    class="w-5 h-5 shrink-0 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="getServiceIcon(service.category)"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="font-medium text-gray-900 transition-colors duration-200"
                    :class="getServiceColor(service.category).text"
                  >
                    {{ service.title }}
                  </p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Products with submenu -->
          <div class="menu-item">
            <button
              class="w-full flex items-center justify-between space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
              @click="isProductsOpen = !isProductsOpen"
            >
              <div class="flex items-center space-x-3">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span>Products</span>
              </div>
              <svg
                aria-hidden="true"
                class="w-4 h-4 transition-transform duration-200"
                :class="isProductsOpen ? 'rotate-180' : ''"
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
            <!-- Products submenu -->
            <div
              v-if="isProductsOpen"
              class="ml-4 mt-3 space-y-3 bg-gray-50 rounded-xl p-4"
            >
              <NuxtLink
                v-for="product in navbarProducts"
                :key="product.id"
                :to="`/products/${product.slug}`"
                class="flex items-center space-x-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group/item"
                @click="isMenuOpen = false"
              >
                <div
                  class="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200"
                  :class="
                    product.bg_gradient ||
                    'bg-gradient-to-br from-[#3533cd] to-[#1e1b69]'
                  "
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 shrink-0 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      :d="product.icon_path || defaultProductIcon"
                    />
                  </svg>
                </div>
                <div>
                  <p
                    class="font-medium text-gray-900 group-hover/item:text-[#3533cd] transition-colors duration-200"
                  >
                    {{ product.name }}
                  </p>
                </div>
              </NuxtLink>
              <p
                v-if="!navbarProducts.length"
                class="text-sm text-gray-500 px-3 py-2"
              >
                Explore our full product lineup.
              </p>
              <NuxtLink
                to="/products"
                class="flex items-center justify-center space-x-2 text-[#3533cd] font-medium py-2.5 px-4 rounded-lg border border-[#3533cd]/30 hover:bg-[#3533cd] hover:text-white transition-all duration-200"
                @click="isMenuOpen = false"
              >
                <span>View all products</span>
              </NuxtLink>
            </div>
          </div>

          <NuxtLink
            to="/case-studies"
            class="menu-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Case Studies</span>
          </NuxtLink>

          <NuxtLink
            to="/blog"
            class="menu-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
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
            <span>Blog</span>
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="menu-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-all duration-300 font-medium py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-[#3533cd]/10 hover:to-[#1e1b69]/10 hover:shadow-sm"
            @click="isMenuOpen = false"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Contact Us</span>
          </NuxtLink>
        </div>

        <!-- CTA Button -->
        <div class="mt-6 mx-6 mb-4">
          <NuxtLink
            to="/contact"
            class="interactive-button w-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 block text-center"
            @click="isMenuOpen = false"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Contact Section -->
        <div
          class="mt-8 mx-6 p-6 bg-gradient-to-br from-[#3533cd]/10 via-[#1e1b69]/10 to-[#0f0d3d]/10 rounded-2xl border border-[#3533cd]/20"
        >
          <!-- Get in Touch Title -->
          <h3 class="text-lg font-bold text-gray-900 mb-4 text-center">
            Get in Touch
          </h3>

          <!-- Contact Info -->
          <div class="space-y-4 mb-6">
            <!-- Phone -->
            <a
              href="tel:+8801812209019"
              class="contact-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm"
            >
              <div
                class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium">+880-1812-209019</p>
                <p class="text-xs text-gray-500">Call anytime</p>
              </div>
            </a>

            <!-- Email -->
            <a
              href="mailto:hello@bytestacklab.com"
              class="contact-item flex items-center space-x-3 text-gray-700 hover:text-[#3533cd] transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white hover:shadow-sm"
            >
              <div
                class="w-8 h-8 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center"
              >
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p class="text-sm font-medium">hello@bytestacklab.com</p>
                <p class="text-xs text-gray-500">Email us</p>
              </div>
            </a>
          </div>

          <!-- Get Connected -->
          <div class="text-center mb-4">
            <p class="text-sm font-semibold text-gray-800 mb-3">
              Get Connected
            </p>

            <!-- Social Media Links -->
            <div class="flex justify-center space-x-4">
              <!-- Facebook -->
              <a
                href="https://www.facebook.com/ByteStackLab"
                class="social-icon w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md"
                title="Facebook"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://www.linkedin.com/company/bytestacklab"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon w-10 h-10 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full flex items-center justify-center shadow-md"
                title="LinkedIn"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>

              <!-- Twitter/X -->
              <a
                href="https://twitter.com/ByteStackLab"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon w-10 h-10 bg-gradient-to-r from-slate-800 to-black rounded-full flex items-center justify-center shadow-md"
                title="Twitter/X"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>

              <!-- YouTube -->
              <a
                href="https://www.youtube.com/@ByteStackLab"
                target="_blank"
                rel="noopener noreferrer"
                class="social-icon w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-md"
                title="YouTube"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile app style bottom icon menu -->
    <div class="mobile-bottom-nav md:hidden">
      <NuxtLink
        to="/"
        class="mobile-tab-item"
        :class="isRouteActive('/') ? 'mobile-tab-active' : ''"
        @click="closeMenu"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <span>Home</span>
      </NuxtLink>

      <NuxtLink
        to="/services"
        class="mobile-tab-item"
        :class="isRouteActive('/services') ? 'mobile-tab-active' : ''"
        @click="closeMenu"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 9l-3 3 3 3M14 9l3 3-3 3M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
          />
        </svg>
        <span>Services</span>
      </NuxtLink>

      <NuxtLink
        to="/products"
        class="mobile-tab-item"
        :class="isRouteActive('/products') ? 'mobile-tab-active' : ''"
        @click="closeMenu"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.75 3h4.5L16 6h4a1 1 0 011 1v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a1 1 0 011-1h4l1.75-3zM8 12h8M8 16h5"
          />
        </svg>
        <span>Products</span>
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="mobile-tab-item"
        :class="isRouteActive('/contact') ? 'mobile-tab-active' : ''"
        @click="closeMenu"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <span>Contact</span>
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick, computed } from "vue";
import { useRoute } from "vue-router";
import { getServiceIconPath } from "~/utils/serviceIcons";
import { getServiceColor } from "~/utils/serviceColors";

const route = useRoute();
const isMenuOpen = ref(false);
const isServicesOpen = ref(false);
const isProductsOpen = ref(false);
const navbarServices = ref([]);
const navbarProducts = ref([]);
const api = useApi();

// Fallback icon (matches the "Products" tab icon in the mobile bottom nav)
// for any navbar-flagged product that has no icon_path set in Filament.
const defaultProductIcon =
  "M9.75 3h4.5L16 6h4a1 1 0 011 1v11a3 3 0 01-3 3H6a3 3 0 01-3-3V7a1 1 0 011-1h4l1.75-3zM8 12h8M8 16h5";

// Check if current route is home page
const isHomePage = computed(() => {
  return route.path === "/";
});

const closeMenu = () => {
  isMenuOpen.value = false;
};

const isRouteActive = (path) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(path);
};

// Load navbar-flagged products on component mount
onMounted(async () => {
  try {
    navbarProducts.value = await api.getNavbarProducts();
  } catch (error) {
    console.error("Failed to load navbar products:", error);
    navbarProducts.value = [];
  }
});

// Load navbar services on component mount
onMounted(async () => {
  try {
    navbarServices.value = await api.getNavbarServices();
  } catch (error) {
    console.error("Failed to load navbar services:", error);
    // Fallback to default services if API fails
    navbarServices.value = [
      {
        id: 1,
        title: "AI Automation & Integration",
        slug: "ai-automation",
        short_description: "AI chatbots, workflows & LLM integrations",
        category: "ai-automation",
        icon: null,
      },
      {
        id: 2,
        title: "SaaS Product Development",
        slug: "saas-development",
        short_description: "Multi-tenant SaaS products, built to scale",
        category: "saas-development",
        icon: null,
      },
      {
        id: 3,
        title: "Custom Web & E-commerce Development",
        slug: "web-application-development",
        short_description: "Business sites & online stores that convert",
        category: "web-development",
        icon: null,
      },
      {
        id: 4,
        title: "Mobile App Development",
        slug: "mobile-app-development",
        short_description: "iOS & Android applications",
        category: "mobile-development",
        icon: null,
      },
      {
        id: 5,
        title: "UI/UX & Product Design",
        slug: "ui-ux-design",
        short_description: "User-centered design solutions",
        category: "ui-ux-design",
        icon: null,
      },
      {
        id: 6,
        title: "QA & Test Automation",
        slug: "qa-test-automation",
        short_description: "Manual & automated QA testing",
        category: "software-testing",
        icon: null,
      },
      {
        id: 7,
        title: "Cloud, DevOps & Infrastructure",
        slug: "devops-cloud-services",
        short_description: "CI/CD, infrastructure & cloud ops",
        category: "devops-cloud",
        icon: null,
      },
      {
        id: 8,
        title: "Cybersecurity & Application Security",
        slug: "cybersecurity-services",
        short_description: "Security audits & application hardening",
        category: "cybersecurity",
        icon: null,
      },
    ];
  }
});

// Helper function to get service icon based on category
const getServiceIcon = (category, icon) => {
  if (icon) return icon;
  return getServiceIconPath(category);
};

// Watch for menu state changes to toggle body scroll
watch(isMenuOpen, (newValue) => {
  if (import.meta.client) {
    if (newValue) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");

      // Trigger menu item animations when menu opens
      nextTick(() => {
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach((item, index) => {
          item.style.animationDelay = `${400 + index * 150}ms`; // Start after sidebar animation, then stagger by 150ms
          item.style.opacity = "0";
          item.style.transform = "translateX(-30px)";
          item.style.animation =
            "slideInLeft 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards";
        });
      });
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("menu-open");

      // Reset menu item styles when menu closes
      const menuItems = document.querySelectorAll(".menu-item");
      menuItems.forEach((item) => {
        item.style.animation = "none";
        item.style.opacity = "0";
        item.style.transform = "translateX(-30px)";
      });
    }
  }
});

// Clean up on component unmount
onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = "";
    document.body.classList.remove("menu-open");
  }
});

// Smooth scroll to section function
const scrollToSection = (sectionId) => {
  // Close mobile menu if open
  isMenuOpen.value = false;

  // Prevent default anchor behavior
  event.preventDefault();

  // Find the target element
  const element = document.getElementById(sectionId);
  if (element) {
    // Get navbar height for offset
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 80;

    // Calculate scroll position with offset
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - navbarHeight - 20; // 20px extra padding

    // Smooth scroll to the section
    window.scrollTo({
      top: offsetPosition,
      behavior: scrollBehavior(),
    });
  }
};
</script>

<style scoped>
/* Mobile sidebar animations - Enhanced smoothness with slower timing */
.mobile-sidebar-enter-active,
.mobile-sidebar-leave-active {
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}

.mobile-sidebar-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.mobile-sidebar-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* Smooth overlay transitions with slower timing */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 1s ease-out;
}

.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Prevent body scroll when menu is open */
body.menu-open {
  overflow: hidden;
  height: 100vh;
  position: fixed;
  width: 100%;
}

/* Ensure mobile menu is truly full screen */
@media (max-width: 1023px) {
  .fixed.inset-0 {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Mobile sidebar takes full width */
  .mobile-sidebar {
    width: 100vw !important;
    max-width: 100vw !important;
  }
}

/* Custom scrollbar for sidebar */
.sidebar-content::-webkit-scrollbar {
  width: 3px;
}

.sidebar-content::-webkit-scrollbar-track {
  background: rgba(243, 244, 246, 0.3);
}

.sidebar-content::-webkit-scrollbar-thumb {
  background: rgba(156, 163, 175, 0.5);
  border-radius: 3px;
}

.sidebar-content::-webkit-scrollbar-thumb:hover {
  background: rgba(107, 114, 128, 0.7);
}

/* Enhanced mobile menu item animations with much slower, smoother timing */
.menu-item {
  transform: translateX(-40px);
  opacity: 0;
  animation: slideInLeftSmooth 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.menu-item:nth-child(1) {
  animation-delay: 0.4s;
}
.menu-item:nth-child(2) {
  animation-delay: 0.55s;
}
.menu-item:nth-child(3) {
  animation-delay: 0.7s;
}
.menu-item:nth-child(4) {
  animation-delay: 0.85s;
}
.menu-item:nth-child(5) {
  animation-delay: 1s;
}
.menu-item:nth-child(6) {
  animation-delay: 1.15s;
}

@keyframes slideInLeftSmooth {
  0% {
    transform: translateX(-40px);
    opacity: 0;
  }
  70% {
    transform: translateX(8px);
    opacity: 0.9;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Social media icon hover effects */
.social-icon {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.social-icon:hover {
  transform: scale(1.15) translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

/* Contact item animations */
.contact-item {
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

/* Enhanced button hover effects */
.interactive-button {
  position: relative;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.interactive-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(79, 70, 229, 0.3);
}

.interactive-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.interactive-button:hover::before {
  left: 100%;
}

/* Responsive breakpoints */
@media (max-width: 767px) {
  .hidden.md\\:flex {
    display: none !important;
  }
  .hidden.md\\:block {
    display: none !important;
  }
  .md\\:hidden.block {
    display: block !important;
  }
}

@media (min-width: 768px) {
  .hidden.md\\:flex {
    display: flex !important;
  }
  .hidden.md\\:block {
    display: block !important;
  }
  .md\\:hidden {
    display: none !important;
  }
}

@media (min-width: 1024px) {
  .hidden.lg\\:flex {
    display: flex !important;
  }
  .hidden.lg\\:block {
    display: block !important;
  }
  .lg\\:hidden {
    display: none !important;
  }
}

/* Additional smooth transitions for all interactive elements with slower timing */
* {
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}

/* Header gradient animation */
.header-gradient {
  background: linear-gradient(-45deg, #f0f4ff, #e8e5ff, #ddd6fe, #e0e7ff);
  background-size: 400% 400%;
  animation: gradientShift 4s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Dropdown animations */
.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\\:visible {
  visibility: visible;
}

.group:hover .group-hover\\:translate-y-0 {
  transform: translateY(0);
}

/* Nuxt link active state */
.router-link-active {
  color: #3533cd !important;
}

/* Services dropdown z-index */
.group .absolute {
  z-index: 9999;
}

/* Mobile bottom icon tab bar */
.mobile-bottom-nav {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.75rem calc(0.5rem + env(safe-area-inset-bottom));
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(53, 51, 205, 0.15);
  box-shadow: 0 -8px 30px rgba(30, 27, 105, 0.12);
}

.mobile-tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  color: #6b7280;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.45rem 0.25rem;
  border-radius: 0.7rem;
  transition: all 0.25s ease;
}

.mobile-tab-item:hover {
  color: #3533cd;
  background: rgba(53, 51, 205, 0.08);
}

.mobile-tab-active {
  color: #3533cd;
  background: linear-gradient(
    135deg,
    rgba(53, 51, 205, 0.12),
    rgba(30, 27, 105, 0.1)
  );
}

@media (min-width: 768px) {
  .mobile-bottom-nav {
    display: none;
  }
}

@media (max-width: 767px) {
  :global(body) {
    padding-bottom: 82px;
  }
}
</style>
