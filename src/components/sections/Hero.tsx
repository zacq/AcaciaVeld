"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import LeadModal from "@/components/forms/LeadModal";
import { Play } from "lucide-react";

const videoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID ?? "";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        {videoId ? (
          <div className="absolute inset-0 z-0">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1`}
              allow="autoplay; encrypted-media"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full h-[56.25vw] min-h-full pointer-events-none"
              title="AcaciaVelds farm walkthrough"
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=80')",
            }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a1f12]/60 via-[#0a1f12]/70 to-[#0a1f12]" />

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Kenya&apos;s Premier Livestock Breeders
          </p>

          <h1 className="heading text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            Genetics That{" "}
            <span className="text-gradient">Outperform</span>
            <br />
            In Any Market
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70">
            Dorper sheep. Boer goats. Red Maasai. Ankole cattle.
            Verified bloodlines, performance-tracked, farm-direct.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center">
            <Link href="/catalogue" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" glow className="w-full sm:w-auto">
                Browse Catalogue
              </Button>
            </Link>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto"
            >
              {videoId ? (
                <>
                  <Play size={16} /> Watch Farm Tour
                </>
              ) : (
                "Enquire Now"
              )}
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/10 pt-8 sm:pt-10">
            {[
              { value: "500+", label: "Animals Sold" },
              { value: "15+", label: "Breeds Available" },
              { value: "10 Yrs", label: "Breeding Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="heading text-2xl sm:text-3xl font-bold text-brand-accent">{stat.value}</p>
                <p className="mt-1 text-[10px] sm:text-xs text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/30">
            <div className="h-8 w-px bg-gradient-to-b from-transparent to-white/30" />
            <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          </div>
        </div>
      </section>

      <LeadModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        source="Hero CTA"
        title="Get in Touch"
      />
    </>
  );
}
