// Per-category fallback icon paths for services with no uploaded `icon` image.
// Shared between NavBar.vue (dropdown) and pages/services/index.vue (listing
// cards) so both surfaces show the same icon for a given category.
const ICON_PATHS = {
  "web-development": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "mobile-development":
    "M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z",
  "ui-ux-design":
    "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  "digital-marketing":
    "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z",
  consulting:
    "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  maintenance:
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  "ai-automation": "M13 10V3L4 14h7v7l9-11h-7z",
  "saas-development":
    "M3 15a4 4 0 004 4h9a5 5 0 001.6-9.75 6 6 0 00-11.3-2.6A4.5 4.5 0 003 15z",
  "software-testing":
    "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7l2 2 4-4",
  "ecommerce-development":
    "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  "devops-cloud":
    "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-14 5h.01M19 17h.01M9 7h.01M9 17h.01",
  cybersecurity:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
};

export function getServiceIconPath(category) {
  return ICON_PATHS[category] || ICON_PATHS["web-development"];
}

// Per-category banner gradient for the services listing cards — mirrors the
// per-product `bg_gradient` field on the Products page so both listings use
// the same "colored banner + centered icon" card shell. Every class below is
// already present in main.css's Tailwind safelist (see the comment there),
// so pairing any from-*/to-* combination here is safe.
const GRADIENTS = {
  "web-development": "bg-gradient-to-br from-indigo-600 to-violet-700",
  "mobile-development": "bg-gradient-to-br from-pink-500 to-rose-600",
  "ui-ux-design": "bg-gradient-to-br from-purple-500 to-fuchsia-500",
  "digital-marketing": "bg-gradient-to-br from-amber-500 to-orange-500",
  consulting: "bg-gradient-to-br from-blue-500 to-indigo-500",
  maintenance: "bg-gradient-to-br from-lime-500 to-green-500",
  "ai-automation": "bg-gradient-to-br from-cyan-500 to-blue-500",
  "saas-development": "bg-gradient-to-br from-teal-500 to-cyan-500",
  "software-testing": "bg-gradient-to-br from-emerald-500 to-teal-500",
  "ecommerce-development": "bg-gradient-to-br from-rose-500 to-fuchsia-500",
  "devops-cloud": "bg-gradient-to-br from-emerald-600 to-teal-700",
  cybersecurity: "bg-gradient-to-br from-green-500 to-emerald-500",
};

export function getServiceGradient(category) {
  return GRADIENTS[category] || GRADIENTS["web-development"];
}

// "ui-ux-design" -> "Ui Ux Design" is wrong, so special-case the acronyms;
// everything else is a plain slug-to-title-case conversion.
const LABEL_OVERRIDES = {
  "ui-ux-design": "UI/UX Design",
  "ai-automation": "AI Automation",
  "saas-development": "SaaS Development",
  "devops-cloud": "DevOps & Cloud",
};

export function formatCategoryLabel(category) {
  if (!category) return "";
  if (LABEL_OVERRIDES[category]) return LABEL_OVERRIDES[category];
  return category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
