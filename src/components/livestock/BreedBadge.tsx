import { cn } from "@/lib/utils";

const BREED_COLORS: Record<string, string> = {
  Dorper: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  Boer: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  "Red Maasai": "bg-red-500/15 text-red-300 border-red-500/25",
  Ankole: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "Boran": "bg-blue-500/15 text-blue-300 border-blue-500/25",
};

export default function BreedBadge({ breed, className }: { breed: string; className?: string }) {
  const colors = BREED_COLORS[breed] ?? "bg-white/10 text-white/70 border-white/20";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        colors,
        className
      )}
    >
      {breed}
    </span>
  );
}
