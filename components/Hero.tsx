import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1519674807507-ff75efbc17b4?auto=format&fit=crop&w=1600&q=70"
        alt="Elegant celebration event with warm lighting"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 py-16 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
          Premium Event Planning • Lagos
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Unforgettable Events,{" "}
          <span className="text-gold-400">Seamlessly Planned.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-200 sm:text-base">
          From intimate birthdays to grand weddings and corporate galas —
          Enoms Creations turns your vision into a celebration your guests
          will never forget.
        </p>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <WhatsAppButton
            label="Plan My Event on WhatsApp"
            packageName="a custom event"
            className="w-full sm:w-auto"
          />
          <a
            href="#packages"
            className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-charcoal active:scale-[0.98]"
          >
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
}
