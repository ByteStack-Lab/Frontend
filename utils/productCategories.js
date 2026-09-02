// Friendlier labels for product categories — mirrors the CATEGORY_LABELS
// map in the backend's ProductResource so the admin dropdown and the public
// Products page agree on how each category slug should read. Categories are
// a plain string field (see ProductSeeder.php), not a separate table, so
// anything created later via the admin's "+" button falls back to a
// title-cased version of the slug here too.
const LABELS = {
  saas: "SaaS",
  analytics: "Analytics",
  automation: "Automation",
  security: "Security",
  devtools: "Dev Tools",
  design: "Design",
  marketing: "Marketing",
  wordpress: "WordPress",
  shopify: "Shopify",
  ecommerce: "eCommerce",
  crm: "CRM",
  pim: "PIM",
  erp: "ERP",
  hrms: "HRMS",
  other: "Other",
};

export function getProductCategoryLabel(category) {
  if (!category) return "";
  if (LABELS[category]) return LABELS[category];
  return category
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
