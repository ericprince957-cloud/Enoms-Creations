import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import type { Package } from "@/lib/types";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-gold-500/10">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={`${pkg.name} event styling`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-xl font-bold text-charcoal">
          {pkg.name}
        </h3>
        <p className="mt-0.5 text-xs italic text-neutral-500">{pkg.tagline}</p>

        <ul className="mt-4 flex-1 space-y-2">
          {pkg.inclusions.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
              <span aria-hidden className="mt-0.5 text-gold-500">✦</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-5 font-serif text-lg font-bold text-gold-600">
          {pkg.priceRange}
        </p>

        <WhatsAppButton packageName={pkg.name} className="mt-3 w-full" />
      </div>
    </article>
  );
}
