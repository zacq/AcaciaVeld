import SectionReveal from "@/components/ui/SectionReveal";
import LeadForm from "@/components/forms/LeadForm";

export default function LeadCaptureSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a1f12] to-[#0d2818]">
      <div className="mx-auto max-w-2xl">
        <SectionReveal className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Ready to Invest in Quality?
          </p>
          <h2 className="heading text-4xl font-bold text-white">
            Talk to a Breeder Today
          </h2>
          <p className="mt-3 text-white/60">
            Leave your details and we&apos;ll call you within 24 hours to discuss
            your needs and available stock.
          </p>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="glass-dark rounded-2xl p-8">
            <LeadForm source="Catalogue" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
