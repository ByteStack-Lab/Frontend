<template>
  <footer
    class="bg-gradient-to-br from-gray-50 to-purple-50 border-t border-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <!-- Main Footer Content -->
      <div class="grid lg:grid-cols-4 gap-12">
        <!-- Widget 1: Company Info & Social Links -->
        <div class="space-y-6">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <img
              src="/images/bytestacklab-180x48.png"
              srcset="
                /images/bytestacklab-180x48.png 1x,
                /images/bytestacklab360x96.png  2x
              "
              alt="ByteStackLab"
              class="h-10 w-auto"
            >
          </div>

          <!-- Description -->
          <p class="text-gray-600 leading-relaxed text-sm">
            Professional software development services for modern businesses. We
            help build and manage world-class development teams.
          </p>

          <!-- Social Media Links -->
          <div class="space-y-4">
            <h5 class="text-sm font-semibold text-gray-900">Follow Us</h5>
            <div class="flex space-x-3">
              <!-- Facebook -->
              <a
                href="https://facebook.com/bytestacklab"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>

              <!-- X (Twitter) -->
              <a
                href="https://x.com/bytestacklab"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.637l-5.1-6.658-5.848 6.658H2.117l7.645-8.746L2.82 2.25h6.8l4.759 6.284L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                  />
                </svg>
              </a>

              <!-- LinkedIn -->
              <a
                href="https://linkedin.com/company/bytestacklab"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-[#0077B5] hover:bg-[#006BA1] rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>

              <!-- Instagram -->
              <a
                href="https://instagram.com/bytestacklab"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-gradient-to-r from-[#F56040] to-[#C13584] hover:from-[#E55A36] hover:to-[#B12A78] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>

              <!-- YouTube -->
              <a
                href="https://youtube.com/@bytestacklab"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 bg-[#FF0000] hover:bg-[#E60000] rounded-lg flex items-center justify-center transition-colors duration-300"
              >
                <svg
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

          <!-- Google Rating Badge -->
          <div
            class="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2"
          >
            <!-- Google Logo -->
            <div class="flex items-center space-x-1">
              <span class="text-blue-500 font-bold text-sm">G</span>
              <span class="text-red-500 font-bold text-sm">o</span>
              <span class="text-yellow-500 font-bold text-sm">o</span>
              <span class="text-blue-500 font-bold text-sm">g</span>
              <span class="text-green-500 font-bold text-sm">l</span>
              <span class="text-red-500 font-bold text-sm">e</span>
            </div>

            <!-- Reviews Badge -->
            <div
              class="flex items-center space-x-1 bg-teal-500 text-white px-2 py-1 rounded text-xs font-medium"
            >
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span>100</span>
            </div>
          </div>
        </div>

        <!-- Widget 2: Links -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-gray-900">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                to="/about"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >About Us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/services"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/case-studies"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Case Studies</NuxtLink
              >
            </li>
            <li>
              <a
                href="/products"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Products</a
              >
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Blogs</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/careers"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Careers</NuxtLink
              >
            </li>
            <li>
              <a
                href="/terms-conditions"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Terms & Conditions</a
              >
            </li>
            <li>
              <a
                href="/privacy-policy"
                class="text-gray-600 hover:text-gray-900 transition-colors duration-300"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>

        <!-- Widget 3: Contact us -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-gray-900">Contact us</h4>
          <div class="space-y-4">
            <p class="text-gray-600 text-sm leading-relaxed">
              Get in touch with us for any project inquiries or business
              collaborations. We're here to help bring your ideas to life.
            </p>

            <!-- Contact Information -->
            <div class="space-y-3">
              <!-- Phone -->
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-blue-600"
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
                  <a
                    href="tel:+8801812209019"
                    class="text-gray-900 font-medium hover:text-blue-600 transition-colors duration-300"
                  >
                    +880-1812-209019
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-green-600"
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
                  <a
                    href="mailto:hello@bytestacklab.com"
                    class="text-gray-900 font-medium hover:text-green-600 transition-colors duration-300"
                  >
                    hello@bytestacklab.com
                  </a>
                </div>
              </div>

              <!-- WhatsApp -->
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    href="https://wa.me/8801812209019"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 font-medium hover:text-[#25D366] transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <!-- Telegram -->
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 bg-[#0088CC] rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    href="https://t.me/+8801812209019"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-gray-900 font-medium hover:text-[#0088CC] transition-colors duration-300"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Widget 4: Location with Google Map -->
        <div class="space-y-6">
          <h4 class="text-lg font-semibold text-gray-900">Our Location</h4>
          <div class="space-y-4">
            <p class="text-gray-600 text-sm leading-relaxed">
              Visit our office or reach out to us for any inquiries.
            </p>

            <!-- Address -->
            <div class="text-gray-900 text-sm">
              <div class="flex items-start space-x-2">
                <svg
                  class="w-4 h-4 text-gray-600 mt-1 flex-shrink-0"
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
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <!-- Google Map Iframe -->
            <div
              class="w-full h-32 rounded-lg overflow-hidden border border-gray-200"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187767277!2d90.34132765820314!3d23.780753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1704634800000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="border-t border-gray-200 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div class="text-center">
          <p class="text-gray-600 text-sm">
            © {{ currentYear }} Copyright by ByteStackLab. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
/* Component-specific styles */
</style>
