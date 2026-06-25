"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SKIP_SPLASH_KEY } from "@/lib/splash";
import { FLOWER_EMOJIS } from "@/data/flowers";

const FLOWERS = FLOWER_EMOJIS;

const SPLASH_DELAY_MS = 100;
const SPLASH_PLAY_MS = 3200;
const SPLASH_FADE_MS = 1200;

const fallingFlowers = Array.from({ length: 36 }, (_, index) => ({
  left: `${2 + ((index * 17) % 94)}%`,
  delay: (index % 12) * 0.07 + Math.floor(index / 12) * 0.12,
  duration: 2.1 + (index % 6) * 0.22,
  emoji: FLOWERS[index % FLOWERS.length],
  size: 1.35 + (index % 5) * 0.28,
}));

type SplashPhase = "pending" | "playing" | "fading" | "done";

type OpeningSplashProps = {
  onFadeStart?: () => void;
};

export function OpeningSplash({ onFadeStart }: OpeningSplashProps) {
  const [phase, setPhase] = useState<SplashPhase>("pending");
  const [flowersOn, setFlowersOn] = useState(false);

  useEffect(() => {
    const skip = sessionStorage.getItem(SKIP_SPLASH_KEY);
    if (skip) {
      sessionStorage.removeItem(SKIP_SPLASH_KEY);
      setPhase("done");
      return;
    }

    setPhase("playing");

    const flowerTimer = window.setTimeout(() => setFlowersOn(true), SPLASH_DELAY_MS);
    const fadeTimer = window.setTimeout(() => {
      setPhase("fading");
      onFadeStart?.();
    }, SPLASH_DELAY_MS + SPLASH_PLAY_MS);
    const doneTimer = window.setTimeout(
      () => setPhase("done"),
      SPLASH_DELAY_MS + SPLASH_PLAY_MS + SPLASH_FADE_MS,
    );

    return () => {
      window.clearTimeout(flowerTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(doneTimer);
    };
  }, [onFadeStart]);

  if (phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden bg-[var(--cream)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "fading" ? 0 : 1 }}
      transition={{ duration: SPLASH_FADE_MS / 1000, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      {flowersOn && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6 text-center"
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{
            opacity: phase === "fading" ? 0 : 1,
            y: phase === "fading" ? -10 : 0,
            scale: phase === "fading" ? 0.98 : 1,
          }}
          transition={{ duration: 0.85, ease: [0.2, 0.7, 0.3, 1], delay: 0.12 }}
        >
          <h1 className="max-w-[18ch] text-[clamp(1.55rem,5.5vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.01em] text-[var(--ink)] drop-shadow-[0_2px_12px_rgba(251,244,232,0.9)]">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Welcome to
            </motion.span>
            <motion.span
              className="mt-1 block text-[var(--magenta-deep)]"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.42, ease: "easeOut" }}
            >
              Smriti&apos;s Universe
            </motion.span>
          </h1>
        </motion.div>
      )}

      {flowersOn &&
        fallingFlowers.map((flower, index) => (
          <motion.span
            key={index}
            className="pointer-events-none absolute select-none"
            style={{
              left: flower.left,
              fontSize: `${flower.size}rem`,
            }}
            initial={{ y: "-15vh", opacity: 0, rotate: -20 }}
            animate={{
              y: "115vh",
              opacity: [0, 1, 1, 0.65],
              rotate: [-20, 10, -8, 15],
            }}
            transition={{
              duration: flower.duration,
              delay: flower.delay,
              ease: "easeIn",
            }}
          >
            {flower.emoji}
          </motion.span>
        ))}
    </motion.div>
  );
}
