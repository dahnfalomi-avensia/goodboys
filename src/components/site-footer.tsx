export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[.06] dark:border-white/[.08]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">Good Boys Market</p>

        <nav className="flex items-center gap-6">
          <a
            href="#businesses"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Browse
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            How it works
          </a>
        </nav>

        <p className="text-sm text-zinc-500 dark:text-zinc-500" suppressHydrationWarning>
          &copy; {year} Good Boys Market. Made by a bunch of friends building things on the side.
        </p>
      </div>
    </footer>
  );
}
