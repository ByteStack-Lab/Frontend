<template>
  <section
    class="py-8 md:py-12 lg:py-10 bg-gradient-to-br from-[#3533cd] to-[#1e1b69] relative overflow-hidden"
    style="overflow-x: hidden"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Card Container -->
      <div
        class="bg-white rounded-3xl border-2 border-blue-300 shadow-lg p-6 lg:p-8 relative overflow-hidden"
      >
        <div
          class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center relative z-10"
        >
          <!-- Left Content -->
          <div class="space-y-6">
            <h2
              class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Subscribe To Our
              <span
                class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
                >Newsletter!</span
              >
            </h2>

            <!-- Newsletter Form -->
            <div class="space-y-6">
              <div class="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  v-model="email"
                  class="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3533cd] focus:border-transparent text-lg bg-white"
                />
                <button
                  @click="subscribe"
                  :disabled="!email || isLoading"
                  class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] hover:from-[#1e1b69] hover:to-[#0f0d3a] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  <span v-if="!isLoading">Subscribe Now</span>
                  <span v-else class="flex items-center">
                    <svg
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
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing...
                  </span>
                </button>
              </div>

              <!-- Success/Error Messages -->
              <div
                v-if="message"
                class="p-4 rounded-lg"
                :class="
                  messageType === 'success'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                "
              >
                {{ message }}
              </div>

              <!-- Privacy Note -->
              <p class="text-sm text-gray-600">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <!-- Right Content - CTA Button -->
          <div class="flex justify-center lg:justify-end relative">
            <button
              @click="hireDevelopers"
              class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] hover:from-[#1e1b69] hover:to-[#0f0d3a] text-white px-12 py-6 rounded-xl font-semibold text-xl relative z-10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              style="animation: none !important"
            >
              <!-- Static Sun Ray Style Pipes positioned relative to button - Hidden on mobile only, visible on tablet and desktop -->
              <!-- Top 3 pipes - moved higher and mirrored opposite angles -->
              <div
                class="sun-ray-container absolute -top-20 left-1/2 transform -translate-x-1/2 pointer-events-none z-20 hidden sm:block"
              >
                <div
                  class="sun-ray-pipe w-1.5 h-12 bg-[#3533cd] rounded-full absolute -left-8 -rotate-[30deg] opacity-90"
                ></div>
                <div
                  class="sun-ray-pipe w-1.5 h-14 bg-[#3533cd] rounded-full absolute left-0 -top-2 rotate-180 opacity-100"
                ></div>
                <div
                  class="sun-ray-pipe w-1.5 h-12 bg-[#3533cd] rounded-full absolute left-8 rotate-[30deg] opacity-90"
                ></div>
              </div>

              <!-- Bottom 3 pipes starting from button center -->
              <div
                class="sun-ray-container absolute -bottom-14 left-1/2 transform -translate-x-1/2 pointer-events-none z-20 hidden sm:block"
              >
                <div
                  class="sun-ray-pipe w-1.5 h-12 bg-[#3533cd] rounded-full absolute -left-8 rotate-[30deg] opacity-90"
                ></div>
                <div
                  class="sun-ray-pipe w-1.5 h-14 bg-[#3533cd] rounded-full absolute left-0 opacity-100"
                ></div>
                <div
                  class="sun-ray-pipe w-1.5 h-12 bg-[#3533cd] rounded-full absolute left-8 -rotate-[30deg] opacity-90"
                ></div>
              </div>

              <!-- Button Text -->
              <span>Start a Project</span>

              <!-- Button Arrow -->
              <svg
                class="w-6 h-6 ml-3 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="
                  animation: none !important;
                  transition: none !important;
                  transform: none !important;
                "
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
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const isLoading = ref(false);
const message = ref("");
const messageType = ref("");

const subscribe = async () => {
  if (!email.value) return;

  isLoading.value = true;
  message.value = "";

  try {
    const api = useApi();
    const response = await api.subscribeNewsletter(email.value);

    if (response.success) {
      message.value =
        response.message || "Successfully subscribed to our newsletter!";
      messageType.value = "success";
      email.value = "";

      // Clear message after 5 seconds
      setTimeout(() => {
        message.value = "";
      }, 5000);
    } else {
      message.value =
        response.message || "Something went wrong. Please try again.";
      messageType.value = "error";
    }
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    if (error.data && error.data.message) {
      message.value = error.data.message;
    } else {
      message.value = "Something went wrong. Please try again.";
    }
    messageType.value = "error";
  } finally {
    isLoading.value = false;
  }
};

const hireDevelopers = () => {
  // Navigate to contact page
  navigateTo("/contact");
};
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(12deg);
  }
  50% {
    transform: translateY(-10px) rotate(12deg);
  }
}

.absolute:nth-child(1) {
  animation: float 3s ease-in-out infinite;
}

.absolute:nth-child(2) {
  animation: float 3s ease-in-out infinite 0.5s;
}

.absolute:nth-child(3) {
  animation: float 3s ease-in-out infinite 1s;
}

.absolute:nth-child(4) {
  animation: float 3s ease-in-out infinite 1.5s;
}

.absolute:nth-child(5) {
  animation: float 3s ease-in-out infinite 2s;
}

.absolute:nth-child(6) {
  animation: float 3s ease-in-out infinite 2.5s;
}

/* Input focus styles */
input:focus {
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

/* Button hover effects */
button:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}
</style>
