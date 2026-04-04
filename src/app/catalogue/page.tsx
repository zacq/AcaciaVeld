import { Suspense } from "react";
import type { Metadata } from "next";
import { fetchAnimals } from "@/lib/airtable";
import AnimalGrid from "@/components/livestock/AnimalGrid";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Livestock for Sale Kenya | Dorper, Boer, Red Maasai",
  description:
    "Browse AcaciaVelds' full catalogue of premium livestock: Dorper sheep, Boer goats, Red Maasai sheep, and Ankole cattle. Available for sale in Kenya.",
};

interface PageProps {
  searchParams: Promise<{ type?: string; breed?: string; purpose?: string }>;
}

export default async function CataloguePage({ searchParams }: PageProps) {
  const params = await searchParams;
  let animals: import("@/types").Animal[] = [];

  try {
    animals = await fetchAnimals({
      type: params.type,
      breed: params.breed,
      purpose: params.purpose,
    });
  } catch {
    // Airtable not configured
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Header */}
        <div className="border-b border-white/8 bg-[#0a1f12] px-6 pt-28 pb-12">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
              AcaciaVelds Catalogue
            </p>
            <h1 className="heading text-4xl font-bold text-white sm:text-5xl">
              Premium Livestock
              <br />
              <span className="text-gradient">For Sale in Kenya</span>
            </h1>
            <p className="mt-4 max-w-xl text-white/60">
              All animals are health-certified, vaccinated, and verified by our
              resident veterinarian. Farm-direct pricing with no middlemen.
            </p>
          </div>
        </div>

        {/* Grid + Filters */}
        <div className="px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <Suspense fallback={null}>
              <AnimalGrid animals={animals} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
