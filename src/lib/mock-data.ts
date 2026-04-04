import type { Animal } from "@/types";

export const MOCK_ANIMALS: Animal[] = [
  {
    id: "mock-1",
    name: "AV-DOE-001",
    breed: "Dorper",
    type: "Sheep",
    purpose: ["Breeding", "Meat"],
    age_months: 18,
    price: 45000,
    price_visible: true,
    tags: ["Imported", "Top Genetics", "Champion Line"],
    description:
      "Exceptional Dorper ewe from proven South African bloodlines. High fertility record, three lambs in first two seasons. Excellent maternal instincts and rapid growth rates.",
    genetics_notes:
      "Sired by SA Champion Ram AV-001. EBV: Weaning Weight +12.4, Post-Weaning Weight +18.6. Dam with 180% lambing rate over 4 seasons.",
    images: [
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80",
      "https://images.unsplash.com/photo-1484557985045-edf25e08da73?w=800&q=80",
    ],
    status: "Available",
    featured: true,
    slug: "av-doe-001",
  },
  {
    id: "mock-2",
    name: "AV-BUCK-007",
    breed: "Boer",
    type: "Goat",
    purpose: ["Breeding"],
    age_months: 24,
    price: 85000,
    price_visible: true,
    tags: ["Imported", "Top Genetics"],
    description:
      "Full-blood Boer buck imported from South Africa. Heavy-muscled hindquarters, excellent confirmation, and outstanding libido. Proven sire with progeny across Kenya.",
    genetics_notes:
      "100% registered Boer bloodline. Sire: SA Grand Champion. Average kid birth weight 4.2kg, 90-day weight 32kg.",
    images: [
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80",
    ],
    status: "Available",
    featured: true,
    slug: "av-buck-007",
  },
  {
    id: "mock-3",
    name: "AV-EWE-024",
    breed: "Red Maasai",
    type: "Sheep",
    purpose: ["Breeding", "Meat"],
    age_months: 36,
    price: undefined,
    price_visible: false,
    tags: ["Indigenous Elite", "Parasite Resistant"],
    description:
      "Prime Red Maasai ewe from certified KARI breeding program. Naturally resistant to internal parasites. Adapted to East African conditions. Exceptional in semi-arid environments.",
    genetics_notes:
      "Certified KARI genetics. Haemonchus contortus resistance score: 9/10. Faecal egg count consistently below 200 EPG without treatment.",
    images: [
      "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=800&q=80",
    ],
    status: "Available",
    featured: true,
    slug: "av-ewe-024",
  },
  {
    id: "mock-4",
    name: "AV-COW-003",
    breed: "Ankole",
    type: "Cattle",
    purpose: ["Breeding", "Dairy"],
    age_months: 48,
    price: 280000,
    price_visible: true,
    tags: ["Heritage Breed", "High-Fat Milk"],
    description:
      "Mature Ankole cow with spectacular horn conformation. Producing 8L/day of high-butterfat milk. Calm temperament, easy to handle. Ideal for breeding or premium dairy.",
    genetics_notes:
      "Uganda Ankole bloodline, verified through Stud Book. Milk fat content 6.8% (vs 3.5% Friesian average). Naturally heat-adapted, thermo-neutral zone 32°C.",
    images: [
      "https://images.unsplash.com/photo-1527153818091-1a9638521e2a?w=800&q=80",
    ],
    status: "Available",
    featured: false,
    slug: "av-cow-003",
  },
  {
    id: "mock-5",
    name: "AV-RAM-012",
    breed: "Dorper",
    type: "Sheep",
    purpose: ["Breeding"],
    age_months: 30,
    price: 120000,
    price_visible: true,
    tags: ["Champion Line", "Top Genetics"],
    description:
      "AcaciaVelds flagship Dorper ram. Sire of over 200 lambs across client farms. Consistently passes his exceptional growth genetics to progeny.",
    genetics_notes:
      "SA registered. EBV Growth Index: +2.8 SD above breed average. All progeny weaning at 28–33kg at 90 days.",
    images: [
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80",
    ],
    status: "Reserved",
    featured: true,
    slug: "av-ram-012",
  },
  {
    id: "mock-6",
    name: "AV-DOE-033",
    breed: "Boer",
    type: "Goat",
    purpose: ["Meat", "Breeding"],
    age_months: 14,
    price: undefined,
    price_visible: false,
    tags: ["Young Stock"],
    description:
      "Young Boer doe, ready for first mating. Excellent body condition, broad frame, and superior rear-end muscling. Fast maturing with good feed conversion.",
    genetics_notes:
      "Daughter of AV-BUCK-007. Expected mature weight 85kg. Already showing strong performance traits at 14 months.",
    images: [
      "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&q=80",
    ],
    status: "Available",
    featured: false,
    slug: "av-doe-033",
  },
];
