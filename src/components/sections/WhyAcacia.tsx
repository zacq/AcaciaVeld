import SectionReveal from "@/components/ui/SectionReveal";

const differentiators = [
  {
    icon: "🏆",
    title: "Champion Bloodlines",
    body: "Our breeding stock traces to award-winning lines from South Africa, New Zealand, and East Africa's elite herds.",
  },
  {
    icon: "📍",
    title: "Farm Direct",
    body: "Buy straight from the source. No middlemen, no inflated markups. You know exactly where your animal was born.",
  },
  {
    icon: "🔬",
    title: "Health Certified",
    body: "All animals are vaccinated, dewormed, and certified by a licensed veterinarian before any sale.",
  },
  {
    icon: "🚚",
    title: "Delivery Available",
    body: "We can arrange transport across Kenya. Animals arrive healthy, stress-minimised, and ready to integrate.",
  },
  {
    icon: "📱",
    title: "WhatsApp Support",
    body: "After-sale management support via WhatsApp. Ask about nutrition, health events, or breeding schedules anytime.",
  },
  {
    icon: "💳",
    title: "Flexible Terms",
    body: "Bulk discounts available for serious breeders. M-Pesa, bank transfer, and instalment plans considered.",
  },
];

export default function WhyAcacia() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="mx-auto max-w-6xl">
        <SectionReveal className="mb-10 sm:mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Why Choose Us
          </p>
          <h2 className="heading text-3xl sm:text-4xl font-bold text-gray-900 sm:text-5xl">
            The AcaciaVelds Difference
          </h2>
        </SectionReveal>

        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 60}>
              <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-5 sm:p-6 h-full transition-all duration-300 hover:shadow-md hover:shadow-green-100 hover:-translate-y-0.5 group">
                <div className="mb-4 text-3xl">{item.icon}</div>
                <h3 className="heading mb-2 text-base font-bold text-gray-900 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
