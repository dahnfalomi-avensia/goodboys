import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { FeaturedBusinesses } from "@/components/featured-businesses";
import { HowItWorks } from "@/components/how-it-works";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-black">
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <FeaturedBusinesses />
        <HowItWorks />
      </main>
      <SiteFooter />
    </div>
  );
}
