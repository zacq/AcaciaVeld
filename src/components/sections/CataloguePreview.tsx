"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/forms/LeadModal";

const featuredBreeds = [
  {
    id: "featured-1",
    name: "Dorper Ram",
    breed: "Dorper",
    type: "Sheep",
    image: "/images/Dorper.png",
    tagline: "World's fastest-growing meat sheep",
    highlights: ["Self-shedding", "High ADG", "Drought tolerant"],
  },
  {
    id: "featured-2",
    name: "Boer Buck",
    breed: "Boer",
    type: "Goat",
    image: "/images/boer.png",
    tagline: "The king of meat goats",
    highlights: ["High dressing %", "Prolific breeder", "Disease resistant"],
  },
  {
    id: "featured-3",
    name: "Red Maasai Ewe",
    breed: "Red Maasai",
    type: "Sheep",
    image: "/images/Red%20masai.png",
    tagline: "East Africa's indigenous elite",
    highlights: ["Parasite resistant", "Heat adapted", "Trypanotolerant"],
  },
  {
    id: "featured-4",
    name: "Speckled Persian",
    breed: "Speckled Persian",
    type: "Sheep",
    image: "/images/Speckled%20persian.png",
    tagline: "Hardy & highly productive",
    highlights: ["Excellent mothering", "Fertile", "Arid-climate hardy"],
  },
];

export default function CataloguePreview() {
  const [selected, setSelected] = useState<(typeof featuredBreeds)[0] | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <SectionReveal className="mb-10 sm:mb-12 flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              Featured Stock
            </p>
            <h2 className="heading text-3xl sm:text-4xl font-bold text-gray-900">
              Available Now
            </h2>
          </div>
          <Link href="/catalogue" className="shrink-0">
            <Button variant="secondary" size="md">
              View Full Catalogue →
            </Button>
          </Link>
        </SectionReveal>

        {/* Breed cards */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBreeds.map((breed, i) => (
            <SectionReveal key={breed.id} delay={i * 80}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={breed.image}
                    alt={`${breed.name} — ${breed.breed}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-accent px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    Available
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="heading text-base font-bold text-gray-900">
                      {breed.name}
                    </p>
                    <span className="shrink-0 rounded-full border border-green-100 bg-green-50 px-2 py-0.5 text-[10px] font-medium text-brand-green">
                      {breed.type}
                    </span>
                  </div>

                  <p className="mb-3 text-xs text-gray-500">{breed.tagline}</p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {breed.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-brand-accent/10 px-2 py-0.5 text-[10px] font-medium text-brand-green"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <p className="mb-3 text-xs italic text-gray-400">Price on request</p>
                    <button
                      onClick={() => setSelected(breed)}
                      className="block w-full rounded-full bg-brand-accent py-2 text-center text-xs font-semibold text-white transition hover:bg-brand-green"
                    >
                      Enquire Now →
                    </button>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lead capture modal */}
      <LeadModal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected ? `Enquire about ${selected.name}` : "Enquire"}
        source="Catalogue"
        prefilledInterest={selected ? `${selected.name} (${selected.breed})` : ""}
      />
    </section>
  );
}
