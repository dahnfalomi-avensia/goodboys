import { createBusiness } from "./actions";
import { SubmitButton } from "./submit-button";

export default async function ListBusinessPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; listed?: string }>;
}) {
  const { error, listed } = await searchParams;

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-20 sm:py-28">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
        List your business
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        Add your shop, service, or side hustle to the market. Takes a couple of minutes.
      </p>

      {listed ? (
        <p className="mt-6 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          Your listing is live — check it out on the homepage.
        </p>
      ) : null}

      {error ? (
        <p className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
          {error}
        </p>
      ) : null}

      <form action={createBusiness} className="mt-8 flex flex-col gap-5">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Business name
          <input
            name="name"
            required
            maxLength={80}
            className="rounded-lg border border-black/[.08] bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-amber-600 dark:border-white/[.1] dark:bg-zinc-950 dark:text-zinc-50"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Category
          <input
            name="category"
            required
            maxLength={40}
            placeholder="Bakery, Photography, Web Design…"
            className="rounded-lg border border-black/[.08] bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-amber-600 dark:border-white/[.1] dark:bg-zinc-950 dark:text-zinc-50"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Your name
          <input
            name="ownerName"
            required
            maxLength={60}
            className="rounded-lg border border-black/[.08] bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-amber-600 dark:border-white/[.1] dark:bg-zinc-950 dark:text-zinc-50"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Description
          <textarea
            name="description"
            required
            maxLength={500}
            rows={4}
            className="rounded-lg border border-black/[.08] bg-white px-3 py-2 text-sm text-zinc-950 outline-none focus:border-amber-600 dark:border-white/[.1] dark:bg-zinc-950 dark:text-zinc-50"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-medium text-zinc-950 dark:text-zinc-50">
          Photo (optional)
          <input
            type="file"
            name="photo"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="text-sm text-zinc-600 file:mr-3 file:rounded-full file:border-0 file:bg-zinc-950 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white dark:text-zinc-400 dark:file:bg-zinc-50 dark:file:text-zinc-950"
          />
          <span className="text-xs font-normal text-zinc-500 dark:text-zinc-500">
            JPEG, PNG, WEBP, or GIF, up to 5MB.
          </span>
        </label>

        <SubmitButton />
      </form>
    </div>
  );
}
