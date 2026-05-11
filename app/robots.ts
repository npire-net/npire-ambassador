import type { MetadataRoute } from "next";
import { AMBASSADOR_URL, IS_PREVIEW_DEPLOYMENT, IS_PLACEHOLDER_DOMAIN } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  const blockIndexing = IS_PREVIEW_DEPLOYMENT || IS_PLACEHOLDER_DOMAIN;
  if (blockIndexing) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${AMBASSADOR_URL}/sitemap.xml`,
  };
}
