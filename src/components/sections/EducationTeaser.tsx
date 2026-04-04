import SectionReveal from "@/components/ui/SectionReveal";

export default function EducationTeaser() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <SectionReveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Our Philosophy
          </p>
          <h2 className="heading text-3xl sm:text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
            We don&apos;t sell animals.
            <br />
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #1F7A3E 0%, #22C55E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We sell performance.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray-500">
            Every animal at AcaciaVelds is selected not just for how it looks, but
            for what it produces. Weaning weights. Conception rates. Feed conversion.
            Real data. Verified genetics.
          </p>
        </SectionReveal>

        <SectionReveal delay={150} className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            {
              icon: "🧬",
              title: "Verified Genetics",
              body: "Every breeding animal comes with documented pedigree and performance history.",
            },
            {
              icon: "📊",
              title: "Performance Data",
              body: "Growth records, reproduction rates, and health histories — not just show photos.",
            },
            {
              icon: "🤝",
              title: "Post-Sale Support",
              body: "We don't disappear after payment. Our team is available for management advice.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 text-left"
            >
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h3 className="heading mb-2 text-base font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
