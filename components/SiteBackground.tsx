export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/bg-mixed.jpg')" }}
      />
      <div className="absolute inset-0 bg-[rgba(251,244,232,0.32)]" />
    </div>
  );
}
