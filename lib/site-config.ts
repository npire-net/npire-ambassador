/**
 * Site config for the Ambassador landing page (ambassador.npire.net).
 * Domain-derived URLs flow through env-driven helpers so the production
 * domain swap is one env var, not a refactor.
 */

const DEFAULT_DOMAIN = "example.com";

function readDomain(): string {
  const fromEnv =
    (typeof process !== "undefined" &&
      (process.env.APP_DOMAIN || process.env.NEXT_PUBLIC_APP_DOMAIN)) ||
    DEFAULT_DOMAIN;
  return fromEnv.replace(/^https?:\/\//, "").replace(/\/+$/, "");
}

export const APP_DOMAIN = readDomain();
export const APP_URL = `https://${APP_DOMAIN}`;
export const AMBASSADOR_URL = `https://ambassador.${APP_DOMAIN}`;
export const SUPPORT_EMAIL = `hello@${APP_DOMAIN}`;

const enc = encodeURIComponent;
export const EARLY_ACCESS_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${enc("Ambassador early access")}`;

export const IS_PLACEHOLDER_DOMAIN = APP_DOMAIN === DEFAULT_DOMAIN;

export const IS_PREVIEW_DEPLOYMENT =
  typeof process !== "undefined" &&
  process.env.VERCEL_ENV !== undefined &&
  process.env.VERCEL_ENV !== "production";
