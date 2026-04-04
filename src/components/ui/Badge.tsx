import { cn } from "@/lib/utils";

type BadgeVariant = "green" | "gold" | "blue" | "red" | "default";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  green: "bg-brand-accent/15 text-brand-accent border-brand-accent/30",
  gold: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  red: "bg-red-500/15 text-red-400 border-red-500/30",
  default: "bg-white/10 text-white/80 border-white/20",
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
