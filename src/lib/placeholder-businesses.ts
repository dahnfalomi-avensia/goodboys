export type Business = {
  id: string;
  name: string;
  category: string;
  ownerName: string;
  description: string;
};

// Placeholder listings so the landing page can show what a real
// business/side-hustle grid will look like once people start adding theirs.
export const placeholderBusinesses: Business[] = [
  {
    id: "1",
    name: "Rise & Crumb",
    category: "Bakery",
    ownerName: "Mika",
    description: "Small-batch sourdough and pastries baked to order every weekend.",
  },
  {
    id: "2",
    name: "Field & Frame",
    category: "Photography",
    ownerName: "Theo",
    description: "Portrait and event photography with a fast, no-fuss turnaround.",
  },
  {
    id: "3",
    name: "Hearth Leather Co.",
    category: "Handmade Goods",
    ownerName: "Sam",
    description: "Hand-stitched wallets, bags, and belts made from full-grain leather.",
  },
  {
    id: "4",
    name: "Pixel & Pine",
    category: "Web Design",
    ownerName: "Ari",
    description: "Simple, fast websites for small businesses that don't need the bloat.",
  },
  {
    id: "5",
    name: "Ember Candle Studio",
    category: "Home Goods",
    ownerName: "Nadia",
    description: "Soy candles poured in small batches with scents you won't find elsewhere.",
  },
  {
    id: "6",
    name: "Bench Press Coaching",
    category: "Fitness",
    ownerName: "Deion",
    description: "1-on-1 and small group strength coaching, in-person or remote.",
  },
];
