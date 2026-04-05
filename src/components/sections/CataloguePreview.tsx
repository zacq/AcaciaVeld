"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/forms/LeadModal";

const featuredStock = [
  {
    id: "cat-1",
    name: "Boer Doe",
    breed: "Boer",
    type: "Goat",
    image: "/images/Catalogue/img1.png",
    tagline: "Classic Boer conformation — ideal breeding female",
    highlights: ["Proven fertility", "Strong maternal", "Disease resistant"],
    status: "Available",
  },
  {
    id: "cat-2",
    name: "Red Maasai Ram",
    breed: "Red Maasai",
    type: "Sheep",
    image: "/images/Catalogue/img2.png",
    tagline: "East Africa's indigenous elite",
    highlights: ["Parasite resistant", "Heat adapted", "Trypanotolerant"],
    status: "Available",
  },
  {
    id: "cat-3",
    name: "Speckled Persian Ewe & Lamb",
    breed: "Speckled Persian",
    type: "Sheep",
    image: "/images/Catalogue/img3.png",
    tagline: "Exceptional mothering — proven lambing record",
    highlights: ["Excellent mothering", "High fertility", "Hardy"],
    status: "Available",
  },
  {
    id: "cat-4",
    name: "Speckled Persian Young",
    breed: "Speckled Persian",
    type: "Sheep",
    image: "/images/Catalogue/img4.png",
    tagline: "Young stock — ready for first mating",
    highlights: ["Young stock", "Good frame", "Arid-climate hardy"],
    status: "Available",
  },
  {
    id: "cat-5",
    name: "Boer Buck",
    breed: "Boer",
    type: "Goat",
    image: "/images/Catalogue/img5.png",
    tagline: "Full-blood Boer — champion muscle conformation",
    highlights: ["High dressing %", "Prolific sire", "Fast maturing"],
    status: "Available",
  },
  {
    id: "cat-6",
    name: "Zebu Bull",
    breed: "Zebu",
    type: "Cattle",
    image: "/images/Catalogue/img6.png",
    tagline: "Heat-adapted Zebu — premium tropical genetics",
    highlights: ["Heat tolerant", "Tick resistant", "Low maintenance"],
    status: "Available",
  },
  {
    id: "cat-7",
    name: "Zebu Cow & Calf",
    breed: "Zebu",
    type: "Cattle",
    image: "/images/Catalogue/img7.png",
    tagline: "Proven Zebu dam — strong maternal line",
    highlights: ["Good milking", "Strong calf", "Hardy"],
    status: "Available",
  },
  {
    id: "cat-8",
    name: "Dairy Cow & Calf",
    breed: "Friesian Cross",
    type: "Cattle",
    image: "/images/Catalogue/img8.png",
    tagline: "High-production dairy — farm-direct",
    highlights: ["High yield", "Calm temperament", "Proven dam"],
    status: "Available",
  },
  {
    id: "cat-9",
    name: "Grey Mare",
    breed: "Horse",
    type: "Horse",
    image: "/images/Catalogue/img9.png",
    tagline: "Well-conformed grey mare — calm & reliable",
    highlights: ["Good conformation", "Calm", "Working horse"],
    status: "Available",
  },
  {
    id: "cat-10",
    name: "Chestnut Stallion",
    breed: "Horse",
    type: "Horse",
    image: "/images/Catalogue/img10.png",
    tagline: "Strong chestnut — excellent working lines",
    highlights: ["Athletic build", "Strong back", "Well-trained"],
    status: "Available",
  },
  {
    id: "cat-11",
    name: "Brown Horse Pair",
    breed: "Horse",
    type: "Horse",
    image: "/images/Catalogue/img11.png",
    tagline: "Matched pair — working or breeding",
    highlights: ["Matched pair", "Field ready", "Hardy"],
    status: "Available",
  },
  {
    id: "cat-12",
    name: "Speckled Ewe",
    breed: "Speckled Persian",
    type: "Sheep",
    image: "/images/Catalogue/img12.png",
    tagline: "Prime Speckled Persian — excellent body condition",
    highlights: ["Prime condition", "Fertile", "Arid-climate hardy"],
    status: "Available",
  },
  {
    id: "cat-13",
    name: "Black Goat Buck",
    breed: "Black Goat",
    type: "Goat",
    image: "/images/Catalogue/img13.png",
    tagline: "Hardy black goat — strong & healthy",
    highlights: ["Hardy", "Disease resistant", "Good sire"],
    status: "Available",
  },
  {
    id: "cat-14",
    name: "Spotted Persian",
    breed: "Speckled Persian",
    type: "Sheep",
    image: "/images/Catalogue/img14.png",
    tagline: "Spotted Persian — distinctive & productive",
    highlights: ["Unique markings", "Good growth", "Hardy"],
    status: "Available",
  },
];

export default function CataloguePreview() {
  const [selected, setSelected] = useState<(typeof featuredStock)[0] | null>(null);

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

        {/* Stock grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredStock.map((animal, i) => (
            <SectionReveal key={animal.id} delay={i * 50}>
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-100">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={animal.image}
                    alt={`${animal.name} — ${animal.breed}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-brand-accent px-2.5 py-0.5 text-[10px] font-semibold text-white">
                    {animal.status}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <p className="heading text-base font-bold text-gray-900">
                      {animal.name}
                    </p>
                    <span className="shrink-0 rounded-full border border-green-100 bg-green-50 px-2 py-0.5 text-[10px] font-medium text-brand-green">
                      {animal.type}
                    </span>
                  </div>

                  <p className="mb-3 text-xs text-gray-500 leading-relaxed">{animal.tagline}</p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {animal.highlights.map((h) => (
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
                      onClick={() => setSelected(animal)}
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
