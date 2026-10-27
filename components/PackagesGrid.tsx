import data from "@/data/packages.json";
import PackageCard from "./PackageCard";

export default function PackagesGrid() {
  return (
    <section id="packages" className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
      <header className="mb-8 text-center sm:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-500">
          Service Packages
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
          Choose Your Celebration
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-neutral-600">
          Curated packages for every occasion. Every booking includes a free
          consultation call.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}
