"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(9, "Enter a valid phone number")
    .regex(/^[\+\d\s\-()]+$/, "Invalid phone number"),
  interest: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export type LeadFormSource = "Catalogue" | "Chat" | "Hero CTA" | "Detail Page" | "Breed Page";

interface LeadFormProps {
  source: LeadFormSource;
  prefilledInterest?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export default function LeadForm({ source, prefilledInterest, onSuccess, compact = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: prefilledInterest ?? "" },
  });

  async function onSubmit(data: FormData) {
    setError(null);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      onSuccess?.();
    } catch {
      setError("Something went wrong. Please try WhatsApp or call us directly.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-6 text-center">
        <CheckCircle className="h-10 w-10 text-brand-accent" />
        <p className="heading text-lg text-white">We&apos;ll be in touch!</p>
        <p className="text-sm text-white/60">
          Expect a call or SMS within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("name")}
          placeholder="Your name"
          className="w-full rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent/60 focus:bg-white/12"
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Phone number (e.g. +254 712 345 678)"
          type="tel"
          className="w-full rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent/60 focus:bg-white/12"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>

      {!compact && (
        <div>
          <input
            {...register("interest")}
            placeholder="Which animal / breed are you interested in?"
            className="w-full rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent/60 focus:bg-white/12"
          />
        </div>
      )}

      {!compact && (
        <div>
          <textarea
            {...register("message")}
            placeholder="Any specific questions? (optional)"
            rows={3}
            className="w-full resize-none rounded-xl bg-white/8 border border-white/15 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-brand-accent/60 focus:bg-white/12"
          />
        </div>
      )}

      {error && <p className="text-xs text-red-400">{error}</p>}

      <Button
        type="submit"
        variant="primary"
        glow
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending…" : "Request Callback"}
      </Button>
    </form>
  );
}
