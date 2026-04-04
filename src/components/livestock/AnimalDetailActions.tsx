"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/forms/LeadModal";
import { buildAnimalWhatsAppLink } from "@/lib/whatsapp";
import type { Animal } from "@/types";

export default function AnimalDetailActions({ animal }: { animal: Animal }) {
  const [priceModalOpen, setPriceModalOpen] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  const waHref = buildAnimalWhatsAppLink(animal.name, animal.breed);
  const isSold = animal.status === "Sold";

  return (
    <>
      <div className="flex flex-col gap-3 pt-2">
        <Button
          variant="primary"
          size="lg"
          glow
          disabled={isSold}
          onClick={() => setPriceModalOpen(true)}
          className="w-full"
        >
          {isSold ? "Sold" : "Request Price / Enquire"}
        </Button>

        {!isSold && (
          <Button
            variant="secondary"
            size="lg"
            disabled={animal.status === "Reserved"}
            onClick={() => setReserveModalOpen(true)}
            className="w-full"
          >
            {animal.status === "Reserved" ? "Currently Reserved" : "Reserve This Animal"}
          </Button>
        )}

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/30 py-3 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/10"
        >
          <MessageCircle size={16} />
          Ask on WhatsApp
        </a>
      </div>

      <LeadModal
        open={priceModalOpen}
        onClose={() => setPriceModalOpen(false)}
        title={`Enquire about ${animal.name}`}
        source="Detail Page"
        prefilledInterest={`${animal.name} (${animal.breed})`}
      />

      <LeadModal
        open={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
        title={`Reserve ${animal.name}`}
        source="Detail Page"
        prefilledInterest={`RESERVE: ${animal.name} (${animal.breed})`}
      />
    </>
  );
}
