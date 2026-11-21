/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PortfolioDemoHosts = {
  school?: string;
  emenu?: string;
};

declare global {
  interface Window {
    __PORTFOLIO_DEMO_HOSTS__?: PortfolioDemoHosts;
  }
}

/** Loaded from /demo-hosts.json before React mounts (see main.tsx). */
export function getRuntimeDemoHosts(): PortfolioDemoHosts {
  if (typeof window === "undefined") return {};
  return window.__PORTFOLIO_DEMO_HOSTS__ ?? {};
}

function resolveDemoUrl(
  envValue: string | undefined,
  runtimeKey: keyof PortfolioDemoHosts,
  localPort: number,
  bakedDefault?: string,
): string {
  const fromEnv = envValue?.trim();
  if (fromEnv) return fromEnv;

  const fromFile = getRuntimeDemoHosts()[runtimeKey]?.trim();
  if (fromFile) return fromFile;

  const fromBaked = bakedDefault?.trim();
  if (fromBaked) return fromBaked;

  if (import.meta.env.DEV) return `http://localhost:${localPort}`;

  return "";
}

/** Vite `define` — optional baked defaults when env + demo-hosts.json are empty. */
const BAKED_SCHOOL = "https://school-erp-portfolio.vercel.app";
const BAKED_EMENU = "https://amohamed.vercel.app";

export function getSchoolDemoUrl(): string {
  return resolveDemoUrl(
    import.meta.env.VITE_SCHOOL_DEMO_URL,
    "school",
    3001,
    BAKED_SCHOOL,
  );
}

export function getEmenuDemoUrl(): string {
  return resolveDemoUrl(
    import.meta.env.VITE_EMENU_DEMO_URL,
    "emenu",
    3002,
    BAKED_EMENU,
  );
}

/** @deprecated Use getSchoolDemoUrl / getEmenuDemoUrl — values resolve at call time. */
export const portfolioDemoUrls = {
  get school() {
    return getSchoolDemoUrl();
  },
  get emenu() {
    return getEmenuDemoUrl();
  },
};