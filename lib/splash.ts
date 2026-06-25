export const SKIP_SPLASH_KEY = "portfolio-skip-splash";

export function markSkipSplash() {
  if (typeof window !== "undefined") {
    sessionStorage.setItem(SKIP_SPLASH_KEY, "1");
  }
}
