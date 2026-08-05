import { watch } from "vue";

// Loads Google Analytics 4 only when NUXT_PUBLIC_GA_ID is configured AND the
// visitor has accepted the cookie consent banner. Without a gaId, this plugin
// does nothing — no placeholder/broken script ships.
export default defineNuxtPlugin(() => {
  const {
    public: { gaId },
  } = useRuntimeConfig();

  if (!gaId) return;

  const { consent, load } = useCookieConsent();
  load();

  let loaded = false;

  const loadGa = () => {
    if (loaded) return;
    loaded = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);

    const router = useRouter();
    router.afterEach((to) => {
      gtag("event", "page_view", { page_path: to.fullPath });
    });
  };

  watch(
    consent,
    (value) => {
      if (value === "accepted") loadGa();
    },
    { immediate: true },
  );
});
