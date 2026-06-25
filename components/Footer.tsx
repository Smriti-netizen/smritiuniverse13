export function Footer() {
  return (
    <footer className="px-[6vw] py-5 text-center sm:px-[8vw]">
      <p className="font-inter flex flex-wrap items-center justify-center gap-1.5 text-[0.72rem] tracking-wide text-[var(--ink-soft)]">
        <span>My Universe</span>
        <span className="text-[var(--magenta)]" aria-hidden="true">
          ❤
        </span>
        <span>Smriti Srivastava</span>
      </p>
      <p
        className="font-inter mt-1 text-[0.62rem] text-[var(--ink-soft)]/70"
        suppressHydrationWarning
      >
        © 2026 Smriti Srivastava. All Rights Reserved.
      </p>
    </footer>
  );
}
