const SERVICE_COLORS = {
  "web-development": {
    from: "from-blue-500",
    to: "to-blue-600",
    hover: "hover:from-blue-50 hover:to-blue-100",
    text: "group-hover/item:text-blue-600",
  },
  "mobile-development": {
    from: "from-green-500",
    to: "to-green-600",
    hover: "hover:from-green-50 hover:to-green-100",
    text: "group-hover/item:text-green-600",
  },
  "ui-ux-design": {
    from: "from-purple-500",
    to: "to-purple-600",
    hover: "hover:from-purple-50 hover:to-purple-100",
    text: "group-hover/item:text-purple-600",
  },
  "digital-marketing": {
    from: "from-orange-500",
    to: "to-orange-600",
    hover: "hover:from-orange-50 hover:to-orange-100",
    text: "group-hover/item:text-orange-600",
  },
  consulting: {
    from: "from-indigo-500",
    to: "to-indigo-600",
    hover: "hover:from-indigo-50 hover:to-indigo-100",
    text: "group-hover/item:text-indigo-600",
  },
  maintenance: {
    from: "from-gray-500",
    to: "to-gray-600",
    hover: "hover:from-gray-50 hover:to-gray-100",
    text: "group-hover/item:text-gray-600",
  },
  "ai-automation": {
    from: "from-violet-500",
    to: "to-violet-600",
    hover: "hover:from-violet-50 hover:to-violet-100",
    text: "group-hover/item:text-violet-600",
  },
  "saas-development": {
    from: "from-cyan-500",
    to: "to-cyan-600",
    hover: "hover:from-cyan-50 hover:to-cyan-100",
    text: "group-hover/item:text-cyan-600",
  },
  "software-testing": {
    from: "from-amber-500",
    to: "to-amber-600",
    hover: "hover:from-amber-50 hover:to-amber-100",
    text: "group-hover/item:text-amber-600",
  },
  "ecommerce-development": {
    from: "from-rose-500",
    to: "to-rose-600",
    hover: "hover:from-rose-50 hover:to-rose-100",
    text: "group-hover/item:text-rose-600",
  },
  "devops-cloud": {
    from: "from-teal-500",
    to: "to-teal-600",
    hover: "hover:from-teal-50 hover:to-teal-100",
    text: "group-hover/item:text-teal-600",
  },
  cybersecurity: {
    from: "from-red-500",
    to: "to-red-600",
    hover: "hover:from-red-50 hover:to-red-100",
    text: "group-hover/item:text-red-600",
  },
};

export const getServiceColor = (category) => {
  return SERVICE_COLORS[category] || SERVICE_COLORS["web-development"];
};
