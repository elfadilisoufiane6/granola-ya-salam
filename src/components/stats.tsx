import Reveal from "./reveal";

const stats = [
  { n: "800+", l: "clients satisfaits" },
  { n: "500+", l: "commandes livrées" },
  { n: "4.9/5", l: "note moyenne" },
  { n: "12", l: "villes livrées" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-cream" aria-label="Granola Ya Salame en chiffres">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 80} className="py-6 px-4 rounded-[26px] bg-light border border-primary/10">
              <strong className="block font-display font-semibold text-[clamp(2rem,4vw,2.9rem)] text-primary leading-none">{s.n}</strong>
              <span className="block mt-2 text-muted text-[.95rem] font-medium">{s.l}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
