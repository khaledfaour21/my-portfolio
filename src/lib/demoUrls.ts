function resolveDemoUrl(envValue: string | undefined, localPort: number): string {
  const configured = envValue?.trim();
  if (configured) return configured;
  if (import.meta.env.DEV) return `http://localhost:${localPort}`;
  return "";
}

const school = resolveDemoUrl(import.meta.env.VITE_SCHOOL_DEMO_URL, 3001);
const emenu = resolveDemoUrl(import.meta.env.VITE_EMENU_DEMO_URL, 3002);

export const portfolioDemoUrls = {
  school,
  emenu,
} as const;