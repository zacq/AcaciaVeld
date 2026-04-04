"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import AnimalCard from "@/components/livestock/AnimalCard";
import FilterSidebar from "@/components/livestock/FilterSidebar";
import SkeletonCard from "@/components/ui/SkeletonCard";
import type { Animal } from "@/types";

interface AnimalGridProps {
  animals: Animal[];
  loading?: boolean;
}

export default function AnimalGrid({ animals, loading = false }: AnimalGridProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="flex gap-8">
      {/* Sidebar — desktop */}
      <aside className="hidden w-56 shrink-0 lg:block">
        <div className="sticky top-24">
          <FilterSidebar />
        </div>
      </aside>

      {/* Main grid area */}
      <div className="flex-1 min-w-0">
        {/* Mobile filter toggle */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <p className="text-sm text-white/50">
            {loading ? "Loading…" : `${animals.length} animal${animals.length !== 1 ? "s" : ""}`}
          </p>
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-white/70 transition hover:border-brand-accent/50 hover:text-brand-accent"
          >
            <SlidersHorizontal size={14} /> Filters
          </button>
        </div>

        {/* Desktop count */}
        <p className="mb-6 hidden text-sm text-white/40 lg:block">
          {loading ? "Loading…" : `${animals.length} animal${animals.length !== 1 ? "s" : ""} found`}
        </p>

        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : animals.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <span className="text-5xl">🐑</span>
            <p className="heading text-lg text-white">No animals match your filters</p>
            <p className="text-sm text-white/50">Try clearing some filters or browse the full catalogue.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {animals.map((animal) => (
                <motion.div
                  key={animal.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimalCard animal={animal} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 lg:hidden"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-72 overflow-y-auto bg-[#0d2818] p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="heading text-base font-bold text-white">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <FilterSidebar onClose={() => setMobileFiltersOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
