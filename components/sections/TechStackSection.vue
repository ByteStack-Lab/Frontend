<template>
  <section
    id="tech-stack"
    ref="elementRef"
    class="py-14 md:py-20 lg:py-16 bg-white transition-all duration-1000 ease-out"
    :class="{
      'opacity-0 translate-y-20': !isVisible,
      'opacity-100 translate-y-0': isVisible,
    }"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div
          class="w-16 h-1 bg-gradient-to-r from-[#3533cd] to-[#1e1b69] rounded-full mx-auto mb-6"
        />
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Our</h2>
        <h3 class="text-4xl lg:text-5xl font-bold text-gray-900">
          <span
            class="bg-gradient-to-r from-[#3533cd] to-[#1e1b69] bg-clip-text text-transparent"
            >Tech Stack</span
          >
        </h3>
      </div>

      <!-- Tech Categories -->
      <div class="flex flex-wrap justify-center gap-8 mb-16">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="[
            'px-6 py-3 font-medium text-lg transition-all duration-300 relative',
            activeCategory === category.id
              ? 'text-[#3533cd]'
              : 'text-gray-600 hover:text-gray-900',
          ]"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
          <div
            v-if="activeCategory === category.id"
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#3533cd] transition-all duration-300"
          />
        </button>
      </div>

      <!-- Tech Logos Grid -->
      <Transition name="fade" mode="out-in">
        <div
          :key="activeCategory"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          <div
            v-for="(tech, index) in getCurrentTechs"
            :key="tech.name"
            :style="{ animationDelay: `${index * 50}ms` }"
            class="flex items-center justify-center p-6 transition-all duration-300 group animate-fade-in-up float-animation pulse-on-hover"
          >
            <img
              :src="tech.logo"
              :alt="tech.name"
              class="h-16 w-auto object-contain group-hover:scale-125 transition-transform duration-500"
            >
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useScrollAnimation } from "~/composables/useScrollAnimation";

// Scroll animation
const { isVisible, elementRef } = useScrollAnimation();

const activeCategory = ref("backend");

const categories = [
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "mobile", name: "Mobile Dev" },
  { id: "database", name: "Databases" },
  { id: "cms", name: "CMS" },
  { id: "cloudtesting", name: "Cloud & Testing" },
  { id: "devops", name: "DevOps" },
];

const techStacks = {
  backend: [
    { name: "Node.js", logo: "/images/techstack/backend/nodejs.svg" },
    { name: "PHP", logo: "/images/techstack/backend/php.svg" },
    { name: "Python", logo: "/images/techstack/backend/python.svg" },
    { name: "Java", logo: "/images/techstack/backend/java.svg" },
    { name: ".NET Core", logo: "/images/techstack/backend/netcore.svg" },
    { name: "Ruby", logo: "/images/techstack/backend/ruby.svg" },
    { name: "Go", logo: "/images/techstack/backend/go.svg" },
    { name: "Django", logo: "/images/techstack/backend/django.svg" },
    { name: "Laravel", logo: "/images/techstack/backend/laravel.svg" },
    { name: "Firebase", logo: "/images/techstack/backend/firebase.svg" },
  ],
  frontend: [
    { name: "React", logo: "/images/techstack/frontend/react.svg" },
    { name: "Vue.js", logo: "/images/techstack/frontend/vue.svg" },
    { name: "Angular", logo: "/images/techstack/frontend/angular.svg" },
    { name: "Next.js", logo: "/images/techstack/frontend/next-js.svg" },
    { name: "Nuxt.js", logo: "/images/techstack/frontend/nuxt.svg" },
    { name: "HTML5", logo: "/images/techstack/frontend/html.svg" },
    { name: "CSS3", logo: "/images/techstack/frontend/css-3.svg" },
    {
      name: "Tailwind CSS",
      logo: "/images/techstack/frontend/tailwind-css.svg",
    },
    { name: "Bootstrap", logo: "/images/techstack/frontend/bootstrap-5.svg" },
    { name: "Alpine.js", logo: "/images/techstack/frontend/alpinejs.svg" },
  ],
  mobile: [
    { name: "React Native", logo: "/images/techstack/mobile/react-native.svg" },
    { name: "Flutter", logo: "/images/techstack/mobile/flutter.svg" },
    { name: "Android", logo: "/images/techstack/mobile/android.svg" },
    { name: "iOS", logo: "/images/techstack/mobile/apple.svg" },
    { name: "Kotlin", logo: "/images/techstack/mobile/kotlin.svg" },
    { name: "Swift", logo: "/images/techstack/mobile/swift.svg" },
  ],
  database: [
    { name: "MySQL", logo: "/images/techstack/db/mysql.svg" },
    { name: "MongoDB", logo: "/images/techstack/db/mongodb.svg" },
    { name: "PostgreSQL", logo: "/images/techstack/db/postgresql.svg" },
    { name: "Redis", logo: "/images/techstack/db/redis.svg" },
    { name: "SQLite", logo: "/images/techstack/db/sqlite.svg" },
    { name: "Firebase", logo: "/images/techstack/db/firebase.svg" },
  ],
  cms: [
    { name: "WordPress", logo: "/images/techstack/cms/wordpress.svg" },
    { name: "Drupal", logo: "/images/techstack/cms/drupal.svg" },
    { name: "Strapi", logo: "/images/techstack/cms/strapi.svg" },
    { name: "Shopify", logo: "/images/techstack/cms/shopify.svg" },
    { name: "Webflow", logo: "/images/techstack/cms/webflow.svg" },
  ],
  cloudtesting: [
    { name: "AWS", logo: "/images/techstack/cloudtest/aws.svg" },
    {
      name: "Google Cloud",
      logo: "/images/techstack/cloudtest/google-cloud.svg",
    },
    { name: "Azure", logo: "/images/techstack/cloudtest/azure.svg" },
    { name: "Jest", logo: "/images/techstack/cloudtest/jest.svg" },
    { name: "PHPUnit", logo: "/images/techstack/cloudtest/phpunit.svg" },
    { name: "Postman", logo: "/images/techstack/cloudtest/postman.svg" },
  ],
  devops: [
    { name: "Docker", logo: "/images/techstack/devops/docker.svg" },
    { name: "Kubernetes", logo: "/images/techstack/devops/kubernets.svg" },
    { name: "Jenkins", logo: "/images/techstack/devops/jenkins.svg" },
    { name: "Git", logo: "/images/techstack/devops/git.svg" },
    { name: "GitHub", logo: "/images/techstack/devops/github.svg" },
    { name: "GitLab", logo: "/images/techstack/devops/gitlab.svg" },
  ],
};

const getCurrentTechs = computed(() => {
  return techStacks[activeCategory.value] || [];
});
</script>

<style scoped>
/* Button hover effects */
button {
  position: relative;
}

/* Logo hover animations */
img {
  filter: grayscale(0.3);
  transition: all 0.3s ease;
}

.group:hover img {
  filter: grayscale(0);
}

/* Card hover effects */
.group {
  transition: all 0.3s ease;
}

.group:hover {
  transform: translateY(-4px);
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

/* Staggered animation for individual items */
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
</style>
