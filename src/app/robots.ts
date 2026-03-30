import type { MetadataRoute } from "next";

import { getRequiredEnv } from "@/utils/env";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getRequiredEnv("NEXT_PUBLIC_SITE_URL");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
