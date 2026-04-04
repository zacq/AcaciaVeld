"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const TYPES = ["Sheep", "Goat", "Cattle", "Horse"];
const BREEDS = ["Dorper", "Boer", "Red Maasai", "Ankole", "Boran", "Other"];
const PURPOSES = ["Breeding", "Meat", "Dairy"];

interface FilterSidebarProps {
  onClose?: () => void;
}

export default function FilterSidebar({ onClose }: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const set = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`${pathname}?${params.toString()}`);
      onClose?.();
    },
    [router, pathname, searchParams, onClose]
  );

  const current = (key: string) => searchParams.get(key) ?? "";

  const clear = () => {
    router.push(pathname);
    onClose?.();
  };

  const hasFilters = ["type", "breed", "purpose"].some((k) => searchParams.has(k));

  return (
    <div className="glass-dark rounded-2xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="heading text-sm font-bold text-white">Filters</h3>
        {hasFilters && (
          <button
            onClick={clear}
            className="text-xs text-white/40 transition hover:text-brand-accent"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Type */}
      <FilterGroup
        label="Type"
        options={TYPES}
        current={current("type")}
        onChange={(v) => set("type", v)}
      />

      {/* Breed */}
      <FilterGroup
        label="Breed"
        options={BREEDS}
        current={current("breed")}
        onChange={(v) => set("breed", v)}
      />

      {/* Purpose */}
      <FilterGroup
        label="Purpose"
        options={PURPOSES}
        current={current("purpose")}
        onChange={(v) => set("purpose", v)}
      />
    </div>
  );
}

function FilterGroup({
  label,
  options,
  current,
  onChange,
}: {
  label: string;
  options: string[];
  current: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/40">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(current === opt ? "" : opt)}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              current === opt
                ? "border-brand-accent bg-brand-accent/15 text-brand-accent"
                : "border-white/15 text-white/50 hover:border-white/30 hover:text-white"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
