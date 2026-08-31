import type { Business } from "@/lib/placeholder-businesses";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="flex flex-col rounded-2xl border border-black/[.06] bg-white p-6 transition-shadow hover:shadow-md dark:border-white/[.08] dark:bg-zinc-950">
      {business.photoKey ? (
        // eslint-disable-next-line @next/next/no-img-element -- served from R2 via a route handler, not next/image optimized
        <img
          src={`/media/${business.photoKey}`}
          alt={business.name}
          className="-mx-6 -mt-6 mb-4 h-40 w-[calc(100%+3rem)] rounded-t-2xl object-cover"
        />
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
          {business.category}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
        {business.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {business.description}
      </p>

      <div className="mt-6 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-950">
          {initials(business.ownerName)}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-500">
          Run by {business.ownerName}
        </span>
      </div>
    </div>
  );
}
