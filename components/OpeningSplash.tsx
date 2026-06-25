"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SKIP_SPLASH_KEY } from "@/lib/splash";
import { FLOWER_EMOJIS } from "@/data/flowers";

const FLOWERS = FLOWER_EMOJIS;

const fallingFlowers = [
  { left: "6%", delay: 0, duration: 2.4, emoji: FLOWERS[0], size: 2.2 },
  { left: "18%", delay: 0.15, duration: 2.8, emoji: FLOWERS[1], size: 1.8 },
  { left: "32%", delay: 0.05, duration: 2.2, emoji: FLOWERS[2], size: 2.4 },
  { left: "48%", delay: 0.25, duration: 3, emoji: FLOWERS[3], size: 2 },
  { left: "62%", delay: 0.1, duration: 2.6, emoji: FLOWERS[4], size: 2.2 },
  { left: "76%", delay: 0.2, duration: 2.9, emoji: FLOWERS[0], size: 1.9 },
  { left: "88%", delay: 0.08, duration: 2.5, emoji: FLOWERS[1], size: 2.1 },
  { left: "12%", delay: 0.35, duration: 3.1, emoji: FLOWERS[2], size: 1.7 },
  { left: "42%", delay: 0.4, duration: 2.7, emoji: FLOWERS[3], size: 2.3 },
  { left: "70%", delay: 0.3, duration: 2.8, emoji: FLOWERS[4], size: 1.8 },
  { left: "24%", delay: 0.5, duration: 3.2, emoji: FLOWERS[5], size: 2 },
  { left: "56%", delay: 0.45, duration: 2.6, emoji: FLOWERS[6], size: 2.2 },
] as const;

export function OpeningSplash() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);

    const skip = sessionStorage.getItem(SKIP_SPLASH_KEY);
    if (skip) {
      sessionStorage.removeItem(SKIP_SPLASH_KEY);
      return;
    }

    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!ready || !visible) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[var(--cream)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
          aria-hidden="true"
        >
          {fallingFlowers.map((flower, index) => (
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
                opacity: [0, 1, 1, 0.6],
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
      )}
    </AnimatePresence>
  );
}
