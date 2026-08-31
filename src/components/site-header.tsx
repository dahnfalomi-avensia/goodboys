import Link from "next/link";

const navLinks = [
  { href: "/#businesses", label: "Browse" },
  { href: "/#how-it-works", label: "How it works" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/[.06] bg-white/80 backdrop-blur-sm dark:border-white/[.08] dark:bg-black/80">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Good Boys Market
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/list"
          className="rounded-full bg-amber-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-700"
        >
          List your business
        </Link>
      </div>
    </header>
  );
}
