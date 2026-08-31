import { placeholderBusinesses } from "@/lib/placeholder-businesses";
import { BusinessCard } from "@/components/business-card";

export function FeaturedBusinesses() {
  return (
    <section id="businesses" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
          What our friends are building
        </h2>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          A sample of the kinds of listings you&apos;ll find here. Real businesses
          show up once people start adding theirs.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderBusinesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
}
