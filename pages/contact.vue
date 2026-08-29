<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
    <!-- Contact Hero Section -->
    <section class="relative pt-28 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Matrix-style Grid Lines -->
        <div
          class="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute right-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse-medium"
        />
        <div
          class="absolute top-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-pulse-slow"
        />
        <div
          class="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/15 to-transparent animate-pulse-medium"
        />
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span
              class="bg-gradient-to-r from-[#3533cd] via-[#6675F7] to-[#1e1b69] bg-clip-text text-transparent"
              >Get in Touch</span
            >
          </h1>
          <p
            class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your ideas into reality? Let's discuss your
            project and explore how ByteStackLab can help you achieve your
            goals.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form Section (First Row) -->
    <section class="pb-12">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          class="bg-white rounded-2xl shadow-card p-8 lg:p-10 contact-form-appear"
        >
          <div class="mb-8 text-center">
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Send us a Message
            </h2>
            <p class="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form class="space-y-6" @submit.prevent="submitForm">
            <!-- Name Fields -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 form-input"
                  placeholder="John"
                >
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Last Name *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 form-input"
                  placeholder="Doe"
                >
              </div>
            </div>

            <!-- Email -->
            <div>
              <label
                for="email"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 form-input"
                placeholder="john@company.com"
              >
            </div>

            <!-- Phone -->
            <div>
              <label
                for="phone"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 form-input"
                placeholder="+880 1812 209019"
              >
            </div>

            <!-- Company -->
            <div>
              <label
                for="company"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Company Name
              </label>
              <input
                id="company"
                v-model="form.company"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 form-input"
                placeholder="Your Company"
              >
            </div>

            <!-- Service Type -->
            <div>
              <label
                for="service"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Service Interested In
              </label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 form-input"
              >
                <option value="">Select a service</option>
                <option value="free-consultation">Free Consultation</option>
                <option value="ai-automation">AI Automation & Integration</option>
                <option value="saas-development">SaaS Product Development</option>
                <option value="web-application-development">Custom Web & E-commerce Development</option>
                <option value="mobile-app-development">Mobile App Development</option>
                <option value="ui-ux-design">UI/UX & Product Design</option>
                <option value="qa-test-automation">QA & Test Automation</option>
                <option value="devops-cloud-services">Cloud, DevOps & Infrastructure</option>
                <option value="cybersecurity-services">Cybersecurity & Application Security</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Project Description *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3533cd] focus:border-transparent transition-all duration-200 resize-none form-input"
                placeholder="Tell us about your project, goals, and requirements..."
              />
            </div>

            <!-- Newsletter Subscription -->
            <div
              class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100"
            >
              <div class="flex items-start space-x-3">
                <div class="flex items-center h-5">
                  <input
                    id="subscribe_newsletter"
                    v-model="form.subscribeNewsletter"
                    type="checkbox"
                    class="h-4 w-4 text-[#3533cd] focus:ring-[#3533cd] focus:ring-offset-2 border-2 border-gray-300 rounded transition-all duration-200"
                  >
                </div>
                <div class="flex-1">
                  <label
                    for="subscribe_newsletter"
                    class="text-sm text-gray-700 cursor-pointer"
                  >
                    <span class="font-semibold text-gray-900"
                      >📧 Subscribe to our newsletter</span
                    >
                    <span class="block text-gray-600 mt-1 text-xs">
                      Get the latest updates about our services, tech insights,
                      and industry news delivered to your inbox.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Honeypot field — hidden from real users, catches bots that auto-fill every input.
                 Field name is deliberately non-descriptive: browser autofill (saved address/
                 business profiles) has been known to populate honeypots named "website" for
                 real visitors, silently swallowing genuine submissions. -->
            <div
              class="absolute -left-[9999px] top-0 h-px w-px overflow-hidden"
              aria-hidden="true"
            >
              <label for="bsl_hp">Leave this field empty</label>
              <input
                id="bsl_hp"
                v-model="form.bslHp"
                type="text"
                name="bsl_hp"
                tabindex="-1"
                autocomplete="off"
              >
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white py-4 px-8 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center justify-center">
                <svg aria-hidden="true"
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
                Sending...
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Contact Information & FAQ Row (Second Row) -->
    <section class="pb-12">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Contact Information Card -->
          <div class="contact-card">
            <ContactWidget />
          </div>

          <!-- FAQ Section -->
          <div class="bg-white rounded-2xl shadow-card p-8">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h3>
              <p class="text-gray-600 text-sm">
                Quick answers to common questions.
              </p>
            </div>

            <div class="space-y-3">
              <div
                v-for="(faq, index) in faqs.slice(0, 5)"
                :key="index"
                class="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  class="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  @click="toggleFaq(index)"
                >
                  <h4 class="font-medium text-gray-900 pr-4 text-sm">
                    {{ faq.question }}
                  </h4>
                  <svg aria-hidden="true"
                    class="w-4 h-4 text-gray-500 transform transition-transform duration-200 flex-shrink-0"
                    :class="{ 'rotate-180': faq.isOpen }"
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
                <Transition
                  enter-active-class="transition-all duration-300 ease-out"
                  enter-from-class="max-h-0 opacity-0"
                  enter-to-class="max-h-96 opacity-100"
                  leave-active-class="transition-all duration-300 ease-in"
                  leave-from-class="max-h-96 opacity-100"
                  leave-to-class="max-h-0 opacity-0"
                >
                  <div
                    v-show="faq.isOpen"
                    class="overflow-hidden border-t border-gray-200"
                  >
                    <div class="px-4 py-3 bg-white">
                      <p class="text-gray-600 leading-relaxed text-sm">
                        {{ faq.answer }}
                      </p>
                    </div>
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Location & Google Map Row (Third Row) -->
    <section class="pb-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Office Location Card -->
          <div class="bg-white rounded-2xl shadow-card p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Our Office</h3>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                >
                  <svg aria-hidden="true"
                    class="w-5 h-5 text-blue-600"
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
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">Address</h4>
                  <p class="text-gray-600 leading-relaxed">
                    Uttara Sector 10, Dhaka, Bangladesh<br >
                    Available for remote and on-site consultations
                  </p>
                </div>
              </div>

              <div class="pt-4 border-t border-gray-200">
                <h4 class="font-semibold text-gray-900 mb-3">
                  Why Choose ByteStackLab?
                </h4>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li class="flex items-center space-x-2">
                    <svg aria-hidden="true"
                      class="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Expert development team</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg aria-hidden="true"
                      class="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Dedicated support & maintenance</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg aria-hidden="true"
                      class="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Agile development process</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg aria-hidden="true"
                      class="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Competitive pricing</span>
                  </li>
                  <li class="flex items-center space-x-2">
                    <svg aria-hidden="true"
                      class="w-4 h-4 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Local expertise, global standards</span>
                  </li>
                </ul>
              </div>

              <!-- Free Consultation Button -->
              <div class="pt-4">
                <a
                  href="https://calendly.com/bytestacklab/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#3533cd] to-[#1e1b69] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <svg aria-hidden="true"
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
                  Free Consultation
                </a>
              </div>
            </div>
          </div>

          <!-- Google Map Card -->
          <div class="bg-white rounded-2xl shadow-card p-8">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Find Us on Map</h3>

            <!-- Map Container -->
            <div
              class="relative h-64 lg:h-80 rounded-xl overflow-hidden bg-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.936094571845!2d90.39569431536895!3d23.87449978453776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5e127c50a81%3A0x10c8d5d4c68b8a6!2sUttara%20Sector%2010%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1672834567890!5m2!1sen!2sbd"
                title="ByteStackLab office location on Google Maps"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="absolute inset-0"
              />
            </div>

            <!-- Map Info -->
            <div class="mt-4 text-center">
              <p class="text-sm text-gray-600 mb-4">
                Located in the heart of Uttara, easily accessible by car or
                public transport.
              </p>

              <!-- Directions Button -->
              <a
                href="https://goo.gl/maps/uttara-sector-10-dhaka"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center bg-[#4285F4] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#3367D6] transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                <svg aria-hidden="true"
                  class="w-4 h-4 mr-2"
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
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] py-16">
      <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
          Join 100+ satisfied clients who have built and grown their
          businesses with our software solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+8801812209019"
            class="bg-white text-[#3533cd] px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:bg-gray-50 transition-all duration-200 inline-flex items-center justify-center space-x-2"
          >
            <svg aria-hidden="true"
              class="w-5 h-5"
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
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/8801812209019"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-200 inline-flex items-center justify-center space-x-2"
          >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
              />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: "Contact Us - ByteStackLab | Software Development Company",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with ByteStackLab for your software development needs. Contact us today to discuss your project and get a free consultation.",
    },
    {
      name: "keywords",
      content:
        "contact, software development, web development, mobile app development, consultation",
    },
    { property: "og:title", content: "Contact Us - ByteStackLab" },
    {
      property: "og:description",
      content:
        "Get in touch with ByteStackLab for your software development needs.",
    },
    { property: "og:type", content: "website" },
  ],
});

// Form data
const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
  subscribeNewsletter: false,
  bslHp: "", // honeypot — must stay empty
});

const isSubmitting = ref(false);

// Import the notification composable
const { showNotification } = useNotification();

// FAQ data and functionality
const faqs = ref([
  {
    question: "How quickly can you start my project?",
    answer:
      "We can typically start within 1-2 weeks after project agreement and requirements finalization. However, for urgent projects, we may be able to begin sooner depending on our current workload.",
    isOpen: false,
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive support and maintenance packages for all our projects. This includes bug fixes, security updates, performance optimization, and feature enhancements as needed.",
    isOpen: false,
  },
  {
    question: "What technologies do you work with?",
    answer:
      "We work with modern technologies including React, Vue.js, Node.js, Python, Django, Laravel, React Native, Flutter, AWS, Docker, and many more. We choose the best technology stack based on your project requirements.",
    isOpen: false,
  },
  {
    question: "What is your development process?",
    answer:
      "We follow an agile development methodology with regular client communication, sprint planning, daily stand-ups, and continuous delivery. You'll have full visibility into the development progress through our project management tools.",
    isOpen: false,
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Absolutely! We work with clients from around the world. We're experienced in remote collaboration and can adjust our working hours to accommodate different time zones for effective communication.",
    isOpen: false,
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow strict quality assurance processes including code reviews, automated testing, manual testing, performance optimization, and security audits. Every project goes through multiple quality checkpoints before delivery.",
    isOpen: false,
  },
  {
    question: "What are your payment terms?",
    answer:
      "We typically work with milestone-based payments. Usually 30% upfront, 40% at mid-project completion, and 30% upon final delivery. For larger projects, we can discuss customized payment schedules.",
    isOpen: false,
  },
  {
    question: "Do you provide project documentation?",
    answer:
      "Yes, we provide comprehensive project documentation including technical specifications, API documentation, user guides, deployment instructions, and maintenance guidelines.",
    isOpen: false,
  },
]);

// Toggle FAQ function
const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

// Form submission
const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Prepare form data
    const formData = {
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      email: form.value.email,
      phone: form.value.phone || null,
      company: form.value.company || null,
      service: form.value.service || null,
      message: form.value.message,
      subscribe_newsletter: form.value.subscribeNewsletter,
      bsl_hp: form.value.bslHp,
    };

    // Send form data to backend API
    const { submitContact } = useApi();
    await submitContact(formData);

    // Show success notification
    showNotification(
      "Thank you for your message! We'll get back to you within 24 hours.",
      "success",
    );

    // Reset form
    form.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      subscribeNewsletter: false,
      bslHp: "",
    };
  } catch (error) {
    console.error("Error submitting form:", error);

    // Show error notification
    let errorMessage =
      "Sorry, there was an error sending your message. Please try again.";

    // Check if it's a rate limit error
    if (error.status === 429 || error.response?.status === 429) {
      errorMessage =
        "Too many requests. Please wait a few minutes before trying again.";
    } else if (error.response?.status === 422 && error.response?.data?.errors) {
      // Check if it's a validation error
      const firstError = Object.values(error.response.data.errors)[0][0];
      errorMessage = firstError || errorMessage;
    }

    showNotification(errorMessage, "error");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Additional animations for contact page */
.animate-pulse-medium {
  animation: pulse-medium 2s infinite;
}

@keyframes pulse-medium {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Form focus styles */
input:focus,
select:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(53, 51, 205, 0.1);
}

/* FAQ Smooth Animation */
.max-h-0 {
  max-height: 0;
}

.max-h-96 {
  max-height: 24rem;
}

/* Button hover effects */
button:hover {
  transform: translateY(-1px);
}

/* Contact card animations */
.contact-card {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.contact-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Form animation */
.contact-form-appear {
  animation: slideUpFade 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideUpFade {
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
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
