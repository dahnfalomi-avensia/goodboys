const steps = [
  {
    number: "01",
    title: "Add your hustle",
    description:
      "Create a listing for your business or side hustle in a couple of minutes — name, category, and what you offer.",
  },
  {
    number: "02",
    title: "Keep it fresh",
    description:
      "Update your details, offers, or links any time things change. No need to ask anyone to do it for you.",
  },
  {
    number: "03",
    title: "Get discovered",
    description:
      "Friends, family, and their networks can browse the market and find out what you're up to.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-black/[.06] bg-zinc-50 dark:border-white/[.08] dark:bg-zinc-950/50"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-zinc-50">
            How it works
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-semibold text-amber-600">{step.number}</span>
              <h3 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
