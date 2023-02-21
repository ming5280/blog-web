interface ImportMetaEnv extends ViteEnv {
  __: unknown;
}
declare interface ViteEnv {
  VITE_PORT: number;
  VITE_APP_TITLE: string;
  VITE_APP_ENV: string;
  VITE_API_PREFIX: string;
  VITE_PROXY: [string, string, string][];
  VITE_BASE_API_URL: string;
  VITE_OUTPUT_DIR: string;
  VITE_PUBLIC_PATH: string;
  VITE_ANALYSIS: boolean;
  VITE_COMPRESSION: boolean;
  VITE_DROP_CONSOLE: boolean;
  VITE_LEGACY: boolean;
}
