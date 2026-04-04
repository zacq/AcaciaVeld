import SectionReveal from "@/components/ui/SectionReveal";
import Link from "next/link";

const breeds = [
  {
    name: "Dorper",
    type: "Sheep",
    emoji: "🐑",
    tagline: "The world's fastest-growing meat sheep",
    phenotype: "White body, black head. Broad, blocky frame with exceptional muscle depth.",
    genotype: "South African composite of Dorset Horn × Blackhead Persian. Superior meat-to-bone ratio.",
    highlights: ["High fertility", "Self-shedding fleece", "Drought tolerant", "Excellent ADG"],
    href: "/breeds/dorper",
  },
  {
    name: "Boer",
    type: "Goat",
    emoji: "🐐",
    tagline: "The king of meat goats",
    phenotype: "White body with red-brown head. Pendulous ears, Roman nose, heavily muscled hindquarters.",
    genotype: "South African breed developed for meat production. Exceptional growth rates on poor pasture.",
    highlights: ["Prolific breeder", "High dressing %", "Hardy in arid climates", "Disease resistant"],
    href: "/breeds/boer",
  },
  {
    name: "Red Maasai",
    type: "Sheep",
    emoji: "🐑",
    tagline: "East Africa's indigenous elite",
    phenotype: "Reddish-brown coat, fat tail, long legs. Evolved for the East African savanna.",
    genotype: "Naturally selected over centuries for resistance to internal parasites and heat stress.",
    highlights: ["Trypanotolerant", "Parasite resistant", "Adapted to tropics", "High survivability"],
    href: "/breeds/red-maasai",
  },
  {
    name: "Ankole",
    type: "Cattle",
    emoji: "🐄",
    tagline: "Africa's icon — now a premium asset",
    phenotype: "Long, sweeping horns. Reddish-brown coat. Compact, efficient body structure.",
    genotype: "Sanga cattle from the Great Lakes. Superior milk fat content and heat adaptation.",
    highlights: ["Heat tolerant", "High-fat milk", "Low input needs", "Cultural prestige"],
    href: "/breeds/ankole",
  },
];

export default function BreedGuide() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-10 sm:mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Breed Intelligence
          </p>
          <h2 className="heading text-3xl sm:text-4xl font-bold text-gray-900 sm:text-5xl">
            Know What You&apos;re Buying
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
            Phenotype tells you what an animal looks like. Genotype tells you what it will produce.
            We breed for both.
          </p>
        </SectionReveal>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {breeds.map((breed, i) => (
            <SectionReveal key={breed.name} delay={i * 80}>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:shadow-green-100 transition-all duration-300 p-5 sm:p-6 h-full flex flex-col">
                <div className="mb-4 text-4xl">{breed.emoji}</div>
                <div className="mb-1 flex items-center gap-2 flex-wrap">
                  <h3 className="heading text-lg font-bold text-gray-900">{breed.name}</h3>
                  <span className="rounded-full bg-green-50 border border-green-100 px-2 py-0.5 text-[10px] font-medium text-brand-green">
                    {breed.type}
                  </span>
                </div>
                <p className="mb-4 text-xs text-brand-green font-medium">{breed.tagline}</p>

                <div className="space-y-3 text-sm flex-1">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Phenotype</p>
                    <p className="text-gray-600 leading-relaxed">{breed.phenotype}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Genotype</p>
                    <p className="text-gray-600 leading-relaxed">{breed.genotype}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {breed.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-brand-accent/10 px-2 py-0.5 text-[10px] font-medium text-brand-green"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href={breed.href}
                  className="mt-4 text-xs text-brand-green transition hover:text-brand-accent underline underline-offset-2"
                >
                  Learn more →
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
