import Image from "next/image";
import data from "@/data/packages.json";

export default function Gallery() {
  return (
    <section className="bg-charcoal py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <header className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
            Recent Work
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
            Moments We&apos;ve Created
          </h2>
        </header>
      </div>

      {/* Horizontal scroll — mobile-first, snap on touch */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:justify-center sm:flex-wrap">
        {data.gallery.map((item) => (
          <div
            key={item.id}
            className="relative h-56 w-44 flex-none snap-center overflow-hidden rounded-xl sm:h-64 sm:w-56"
          >
            <Image
              src={item.url}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 176px, 224px"
              className="object-cover transition duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-neutral-400">
        Swipe to explore →
      </p>
    </section>
  );
}
