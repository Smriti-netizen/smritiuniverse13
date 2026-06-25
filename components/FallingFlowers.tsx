"use client";

import { motion } from "framer-motion";
import { FLOWER_EMOJIS } from "@/data/flowers";

const FLOWERS = FLOWER_EMOJIS;

const baseConfig = [
  { left: "4%", delay: 0, duration: 3.1, rotate: -18, size: 1.6, emoji: FLOWERS[0] },
  { left: "12%", delay: 0.3, duration: 3.6, rotate: 12, size: 1.3, emoji: FLOWERS[1] },
  { left: "22%", delay: 0.1, duration: 2.9, rotate: -8, size: 1.8, emoji: FLOWERS[2] },
  { left: "34%", delay: 0.5, duration: 3.4, rotate: 20, size: 1.4, emoji: FLOWERS[3] },
  { left: "46%", delay: 0.15, duration: 3.2, rotate: -14, size: 1.7, emoji: FLOWERS[4] },
  { left: "58%", delay: 0.4, duration: 3.5, rotate: 8, size: 1.5, emoji: FLOWERS[5] },
  { left: "68%", delay: 0.05, duration: 2.8, rotate: -22, size: 1.9, emoji: FLOWERS[0] },
  { left: "78%", delay: 0.35, duration: 3.3, rotate: 16, size: 1.4, emoji: FLOWERS[1] },
  { left: "88%", delay: 0.2, duration: 3, rotate: -10, size: 1.6, emoji: FLOWERS[2] },
  { left: "16%", delay: 0.55, duration: 3.7, rotate: 6, size: 1.2, emoji: FLOWERS[3] },
  { left: "52%", delay: 0.65, duration: 3.1, rotate: -16, size: 1.5, emoji: FLOWERS[4] },
  { left: "72%", delay: 0.45, duration: 3.4, rotate: 18, size: 1.3, emoji: FLOWERS[5] },
  { left: "28%", delay: 0.75, duration: 3.2, rotate: -6, size: 1.7, emoji: FLOWERS[0] },
  { left: "42%", delay: 0.85, duration: 3.5, rotate: 14, size: 1.4, emoji: FLOWERS[1] },
  { left: "62%", delay: 0.7, duration: 3, rotate: -12, size: 1.6, emoji: FLOWERS[2] },
  { left: "92%", delay: 0.6, duration: 3.3, rotate: 10, size: 1.5, emoji: FLOWERS[3] },
  { left: "8%", delay: 0.9, duration: 3.6, rotate: -20, size: 1.3, emoji: FLOWERS[4] },
  { left: "36%", delay: 0.95, duration: 3.1, rotate: 8, size: 1.8, emoji: FLOWERS[5] },
  { left: "84%", delay: 1, duration: 3.4, rotate: -14, size: 1.4, emoji: FLOWERS[0] },
  { left: "50%", delay: 1.05, duration: 3.2, rotate: 22, size: 1.6, emoji: FLOWERS[1] },
] as const;

const extraBurst = [
  { left: "2%", delay: 0.05, duration: 2.6, rotate: -10, size: 1.9, emoji: FLOWERS[2] },
  { left: "10%", delay: 0.2, duration: 2.8, rotate: 14, size: 1.5, emoji: FLOWERS[4] },
  { left: "20%", delay: 0.12, duration: 2.5, rotate: -16, size: 1.7, emoji: FLOWERS[5] },
  { left: "30%", delay: 0.28, duration: 3, rotate: 8, size: 1.6, emoji: FLOWERS[0] },
  { left: "40%", delay: 0.08, duration: 2.7, rotate: -12, size: 1.8, emoji: FLOWERS[1] },
  { left: "54%", delay: 0.18, duration: 2.9, rotate: 20, size: 1.4, emoji: FLOWERS[3] },
  { left: "64%", delay: 0.32, duration: 2.6, rotate: -8, size: 1.9, emoji: FLOWERS[2] },
  { left: "74%", delay: 0.14, duration: 2.8, rotate: 16, size: 1.5, emoji: FLOWERS[4] },
  { left: "82%", delay: 0.24, duration: 2.5, rotate: -18, size: 1.7, emoji: FLOWERS[5] },
  { left: "94%", delay: 0.1, duration: 3.1, rotate: 10, size: 1.6, emoji: FLOWERS[0] },
  { left: "6%", delay: 0.38, duration: 2.7, rotate: -14, size: 1.3, emoji: FLOWERS[1] },
  { left: "26%", delay: 0.42, duration: 2.9, rotate: 12, size: 1.8, emoji: FLOWERS[3] },
  { left: "48%", delay: 0.36, duration: 2.6, rotate: -6, size: 1.5, emoji: FLOWERS[2] },
  { left: "66%", delay: 0.48, duration: 3, rotate: 18, size: 1.4, emoji: FLOWERS[4] },
  { left: "86%", delay: 0.4, duration: 2.8, rotate: -20, size: 1.7, emoji: FLOWERS[5] },
] as const;

type FallingFlowersProps = {
  active: boolean;
  burst?: boolean;
};

export function FallingFlowers({ active, burst = false }: FallingFlowersProps) {
  if (!active) return null;

  const petals = burst ? [...baseConfig, ...extraBurst] : baseConfig;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <motion.span
          key={index}
          className="absolute top-0 select-none"
          style={{
            left: petal.left,
            fontSize: `${petal.size}rem`,
          }}
          initial={{ y: "-10vh", opacity: 0, rotate: petal.rotate }}
          animate={{
            y: "110vh",
            opacity: [0, 1, 1, 0],
            rotate: petal.rotate + 180,
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
          }}
        >
          {petal.emoji}
        </motion.span>
      ))}
    </div>
  );
}
