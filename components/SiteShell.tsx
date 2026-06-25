"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { OpeningSplash } from "@/components/OpeningSplash";
import { SKIP_SPLASH_KEY } from "@/lib/splash";

function readSkipSplash() {
  if (typeof window === "undefined") return false;
  return !!sessionStorage.getItem(SKIP_SPLASH_KEY);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [siteVisible, setSiteVisible] = useState(readSkipSplash);

  useEffect(() => {
    if (readSkipSplash()) {
      setSiteVisible(true);
    }
  }, []);

  const handleFadeStart = useCallback(() => {
    setSiteVisible(true);
  }, []);

  return (
    <>
      <OpeningSplash onFadeStart={handleFadeStart} />
      <motion.div
        initial={false}
        animate={{
          opacity: siteVisible ? 1 : 0,
          y: siteVisible ? 0 : 14,
          filter: siteVisible ? "blur(0px)" : "blur(6px)",
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
