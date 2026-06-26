"use client";

import { useEffect, useState } from "react";
import { FallingFlowers } from "@/components/FallingFlowers";
import { Reveal } from "@/components/Reveal";
import { FLOWER_MARK } from "@/data/flowers";

export function SendFlowersSection() {
  const [showFlowers, setShowFlowers] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    if (!showFlowers) return;
    const timer = window.setTimeout(() => setShowFlowers(false), 5000);
    return () => window.clearTimeout(timer);
  }, [showFlowers]);

  function handleClick() {
    setShowFlowers(false);
    window.requestAnimationFrame(() => {
      setBurstKey((key) => key + 1);
      setShowFlowers(true);
    });
  }

  return (
    <>
      <section className="flex flex-col items-center px-[6vw] pb-28 pt-8 text-center sm:px-[8vw]">
        <Reveal>
          <button
            type="button"
            onClick={handleClick}
            className="font-inter flex items-center gap-2.5 rounded-[50px] border-[1.5px] border-[var(--magenta)] bg-[var(--magenta)] px-10 py-[18px] text-[0.95rem] tracking-wide text-[var(--cream)] shadow-[0_16px_40px_-14px_rgba(194,24,91,0.5)] transition hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_22px_50px_-14px_rgba(194,24,91,0.6)] active:translate-y-0 active:scale-[0.98]"
          >
            Have Some Flowers! {FLOWER_MARK}
          </button>
        </Reveal>
      </section>

      <FallingFlowers key={burstKey} active={showFlowers} burst />
    </>
  );
}
