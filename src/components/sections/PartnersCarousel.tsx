const logos = [
  "Kenya Stud Book",
  "SASDA",
  "Dorper Society of SA",
  "Boer Goat Society Kenya",
  "KARI / KALRO",
  "Africa Livestock",
  "AgriKe",
  "Kenya Veterinary Board",
  "EAC Livestock Trade",
  "Livestock Kenya",
];

export default function PartnersCarousel() {
  // Duplicate for seamless loop
  const items = [...logos, ...logos];

  return (
    <section className="py-12 border-y border-white/8 overflow-hidden">
      <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-widest text-white/25">
        Industry Partners &amp; Affiliations
      </p>
      <div className="relative">
        <div className="carousel-track">
          {items.map((logo, i) => (
            <div
              key={i}
              className="mx-8 flex shrink-0 items-center whitespace-nowrap text-sm font-medium text-white/35 transition hover:text-white/70"
            >
              <span className="mr-3 text-brand-accent/40">✦</span>
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
