import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchAnimalBySlug, fetchAnimals } from "@/lib/airtable";
import AnimalGallery from "@/components/livestock/AnimalGallery";
import BreedBadge from "@/components/livestock/BreedBadge";
import Badge from "@/components/ui/Badge";
import AnimalDetailActions from "@/components/livestock/AnimalDetailActions";
import Footer from "@/components/sections/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const animal = await fetchAnimalBySlug(slug);
    if (!animal) return {};
    return {
      title: `${animal.name} — ${animal.breed} for Sale`,
      description: `${animal.breed} ${animal.type.toLowerCase()}, ${animal.age_months} months old. ${animal.description.slice(0, 140)}`,
    };
  } catch {
    return {};
  }
}

export async function generateStaticParams() {
  try {
    const animals = await fetchAnimals({});
    return animals.map((a) => ({ slug: a.slug }));
  } catch {
    return [];
  }
}

const STATUS_COLORS = {
  Available: "green",
  Reserved: "gold",
  Sold: "red",
} as const;

export default async function AnimalDetailPage({ params }: PageProps) {
  const { slug } = await params;

  let animal;
  try {
    animal = await fetchAnimalBySlug(slug);
  } catch {
    notFound();
  }

  if (!animal) notFound();

  const ageLabel =
    animal.age_months < 12
      ? `${animal.age_months} months`
      : `${(animal.age_months / 12).toFixed(1)} years`;

  return (
    <>
      <main className="min-h-screen px-6 pt-28 pb-16">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-white/40">
            <a href="/" className="transition hover:text-white">Home</a>
            <span>/</span>
            <a href="/catalogue" className="transition hover:text-white">Catalogue</a>
            <span>/</span>
            <span className="text-white/70">{animal.name}</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div>
              <AnimalGallery images={animal.images} animalName={animal.name} />
            </div>

            {/* Detail panel */}
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <BreedBadge breed={animal.breed} />
                  <Badge variant={STATUS_COLORS[animal.status]}>{animal.status}</Badge>
                  <span className="text-xs text-white/40">{animal.type}</span>
                </div>
                <h1 className="heading text-3xl font-bold text-white sm:text-4xl">
                  {animal.name}
                </h1>
                <p className="mt-1 text-sm text-white/50">Age: {ageLabel}</p>
              </div>

              {/* Tags */}
              {animal.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {animal.tags.map((tag) => (
                    <Badge key={tag} variant="default">{tag}</Badge>
                  ))}
                </div>
              )}

              {/* Price */}
              {animal.price_visible && animal.price ? (
                <div className="glass rounded-xl p-4">
                  <p className="text-xs text-white/40 mb-1">Listed Price</p>
                  <p className="heading text-2xl font-bold text-brand-accent">
                    KSh {animal.price.toLocaleString()}
                  </p>
                </div>
              ) : (
                <div className="glass rounded-xl p-4">
                  <p className="text-sm text-white/60 italic">
                    Price available on request. Contact us for a quote.
                  </p>
                </div>
              )}

              {/* Description */}
              {animal.description && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                    About This Animal
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
                    {animal.description}
                  </p>
                </div>
              )}

              {/* Genetics */}
              {animal.genetics_notes && (
                <div className="glass-dark rounded-xl p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-accent/70">
                    Genetics &amp; Performance Notes
                  </p>
                  <p className="text-sm text-white/70 leading-relaxed whitespace-pre-line">
                    {animal.genetics_notes}
                  </p>
                </div>
              )}

              {/* Purpose */}
              {animal.purpose.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                    Suitable For
                  </p>
                  <div className="flex gap-2">
                    {animal.purpose.map((p) => (
                      <Badge key={p} variant="green">{p}</Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <AnimalDetailActions animal={animal} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
