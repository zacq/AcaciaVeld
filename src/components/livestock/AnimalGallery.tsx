"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface AnimalGalleryProps {
  images: string[];
  animalName: string;
}

export default function AnimalGallery({ images, animalName }: AnimalGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const safeImages = images.length > 0
    ? images
    : ["https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=80"];

  function prev() {
    setLightbox((i) => (i === null ? 0 : (i - 1 + safeImages.length) % safeImages.length));
  }
  function next() {
    setLightbox((i) => (i === null ? 0 : (i + 1) % safeImages.length));
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {safeImages.map((src, idx) => (
          <button
            key={idx}
            onClick={() => setLightbox(idx)}
            className={`relative overflow-hidden rounded-xl ${idx === 0 ? "col-span-2 aspect-[16/9] sm:col-span-2" : "aspect-square"}`}
          >
            <Image
              src={src}
              alt={`${animalName} photo ${idx + 1}`}
              fill
              sizes="(max-width:640px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition hover:bg-black/20" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
              onClick={() => setLightbox(null)}
            />

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              <X size={20} />
            </button>

            {safeImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-14 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative z-10 max-h-[80vh] max-w-4xl w-full aspect-[16/9]"
            >
              <Image
                src={safeImages[lightbox]}
                alt={`${animalName} photo ${lightbox + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <p className="absolute bottom-4 z-10 text-white/50 text-sm">
              {lightbox + 1} / {safeImages.length}
            </p>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
