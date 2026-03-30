import type { MetadataRoute } from "next";

import { PATH } from "@/lib/constants/path";
import { getRequiredEnv } from "@/utils/env";
import { getAllBlogPostList, getAllTags } from "@/utils/notion/get-item";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getRequiredEnv("NEXT_PUBLIC_SITE_URL");
  const posts = getAllBlogPostList();
  const tags = getAllTags();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}${PATH.SEARCH}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}${PATH.BLOG(post.id)}`,
    lastModified: post.created_at ? new Date(post.created_at) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tagEntries: MetadataRoute.Sitemap = tags.map((tag) => ({
    url: `${baseUrl}${PATH.SEARCH_TAG(tag)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  return [...staticEntries, ...postEntries, ...tagEntries];
}
