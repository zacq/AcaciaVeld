import { cn } from "@/lib/utils";

export default function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("glass rounded-2xl overflow-hidden animate-pulse", className)}>
      <div className="aspect-[4/3] bg-white/5" />
      <div className="p-5 space-y-3">
        <div className="h-4 w-3/4 rounded bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-white/8" />
        <div className="flex gap-2 mt-2">
          <div className="h-5 w-16 rounded-full bg-white/8" />
          <div className="h-5 w-20 rounded-full bg-white/8" />
        </div>
        <div className="h-10 w-full rounded-full bg-white/10 mt-4" />
      </div>
    </div>
  );
}
