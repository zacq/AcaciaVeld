"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import BreedBadge from "@/components/livestock/BreedBadge";
import LeadModal from "@/components/forms/LeadModal";
import type { Animal } from "@/types";
import { ArrowRight } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
}

const STATUS_COLORS = {
  Available: "green",
  Reserved: "gold",
  Sold: "red",
} as const;

export default function AnimalCard({ animal }: AnimalCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const imgSrc = animal.images[0] ?? `https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&q=80`;

  return (
    <>
      <motion.div
        whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(31,122,62,0.35)" }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="glass rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Image */}
        <Link href={`/catalogue/${animal.slug}`} className="relative block aspect-[4/3] overflow-hidden">
          <Image
            src={imgSrc}
            alt={`${animal.name} — ${animal.breed}`}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-3 right-3">
            <Badge variant={STATUS_COLORS[animal.status]}>{animal.status}</Badge>
          </div>
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="heading text-base font-bold text-white">{animal.name}</p>
              <p className="text-xs text-white/50 mt-0.5">{animal.type} · {animal.age_months}mo</p>
            </div>
            <BreedBadge breed={animal.breed} />
          </div>

          {animal.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {animal.tags.map((tag) => (
                <Badge key={tag} variant="default" className="text-[10px]">{tag}</Badge>
              ))}
            </div>
          )}

          {animal.price_visible && animal.price ? (
            <p className="text-brand-accent font-bold text-lg">
              KSh {animal.price.toLocaleString()}
            </p>
          ) : (
            <p className="text-white/40 text-xs italic">Price on request</p>
          )}

          <div className="mt-auto flex gap-2 pt-2">
            <button
              onClick={() => setModalOpen(true)}
              disabled={animal.status === "Sold"}
              className="flex-1 rounded-full bg-brand-accent py-2 text-xs font-semibold text-white transition hover:bg-green-600 disabled:opacity-40 disabled:pointer-events-none"
            >
              Enquire
            </button>
            <Link
              href={`/catalogue/${animal.slug}`}
              className="flex items-center justify-center rounded-full border border-white/20 px-3 py-2 text-white/60 transition hover:border-brand-accent/50 hover:text-brand-accent"
            >
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={`Enquire about ${animal.name}`}
        source="Catalogue"
        prefilledInterest={`${animal.name} (${animal.breed})`}
      />
    </>
  );
}
