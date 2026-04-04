const partners = [
  "Kenya Stud Book",
  "SASDA",
  "Dorper Society of SA",
  "Boer Goat Breeders Kenya",
  "KARI",
  "Africa Livestock",
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/8 bg-[#0a1f12]/80 py-5">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Registered With &amp; Recognised By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {partners.map((p) => (
            <span
              key={p}
              className="text-xs font-medium text-white/40 transition hover:text-white/70"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
