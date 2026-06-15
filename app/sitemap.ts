import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trevorahcharters.co.uk"
  const lastModified = new Date()

  // This is a single-page site, so the sitemap contains only the homepage.
  // Anchor/fragment URLs (e.g. /#about) must never be listed in a sitemap:
  // Google strips the fragment, treats them as duplicates of "/", and reports
  // them as "Page with redirect" / "Crawled - currently not indexed".
  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]
}
