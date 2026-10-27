export default function LocationBadge() {
  return (
    <section className="flex justify-center bg-gold-500/10 border-y border-gold-500/30">
      <div className="mx-4 my-4 flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 shadow-sm ring-1 ring-gold-500/40">
        <span aria-hidden>📍</span>
        <p className="text-xs font-semibold text-charcoal sm:text-sm">
          Allen Avenue, Ikeja, Lagos —{" "}
          <span className="text-gold-600">trusted by Lagos&apos; finest hosts</span>
        </p>
      </div>
    </section>
  );
}
