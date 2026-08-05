interface BreadcrumbItem {
  name: string
  path: string
}

// Builds a schema.org BreadcrumbList <script> entry for useHead(), so detail
// pages show a breadcrumb trail in Google search results.
export const useBreadcrumbSchema = () => {
  const siteUrl = useSiteConfig().url.replace(/\/$/, '')

  return (items: BreadcrumbItem[]) => ({
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${siteUrl}${item.path}`,
      })),
    }),
  })
}
