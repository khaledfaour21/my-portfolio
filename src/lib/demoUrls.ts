const school =
  import.meta.env.VITE_SCHOOL_DEMO_URL?.trim() || "http://localhost:3001";
const emenu =
  import.meta.env.VITE_EMENU_DEMO_URL?.trim() || "http://localhost:3002";

export const portfolioDemoUrls = {
  school,
  emenu,
} as const;