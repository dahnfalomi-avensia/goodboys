export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20 pt-20 sm:pb-28 sm:pt-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium text-amber-600">By us, for our people</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl dark:text-zinc-50">
          The businesses our friends are building, all in one place
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Good Boys Market is a shared home for the shops, services, and side hustles
          we&apos;re building outside our day jobs. Browse what&apos;s new, or add your own.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#businesses"
            className="w-full rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            Browse businesses
          </a>
          <a
            href="#how-it-works"
            className="w-full rounded-full border border-zinc-950/10 px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-950/[.04] sm:w-auto dark:border-zinc-50/15 dark:text-zinc-50 dark:hover:bg-zinc-50/[.06]"
          >
            List your business
          </a>
        </div>
      </div>
    </section>
  );
}
