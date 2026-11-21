/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_SITE_VERIFICATION?: string;
  readonly VITE_SCHOOL_DEMO_URL?: string;
  readonly VITE_EMENU_DEMO_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}