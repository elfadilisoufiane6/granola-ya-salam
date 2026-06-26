import Reveal from "./reveal";
import SectionHead from "./section-head";

// L'avis le plus émouvant — épinglé en haut, carte mise en avant.
const featured = {
  q: "Emballage soigné, goût authentique… on sent qu'il y a de l'amour derrière chaque sachet. Ça m'a rappelé le petit-déjeuner de ma grand-mère. Bravo, vous faites quelque chose de spécial.",
  n: "Salim A.",
  city: "Tanger",
  i: "SA",
  c: "bg-[#4F7A4A]",
};

const reviews = [
  { q: "Le meilleur granola que j'ai mangé au Maroc — ya salame vraiment ! Croustillant et pas trop sucré.", n: "Fatima Z.", city: "Casablanca", i: "FZ", c: "bg-[#2F6E57]" },
  { q: "La saveur miel & cannelle est incroyable, ça sent vraiment le fait maison. Livraison rapide en plus.", n: "Yasmine B.", city: "Rabat", i: "YB", c: "bg-[#C75B33]" },
  { q: "Je commande chaque mois pour mon petit-déj. Mes enfants adorent le chocolat !", n: "Khadija M.", city: "Marrakech", i: "KM", c: "bg-[#B5532E]" },
  { q: "Enfin un granola healthy et marocain. Le premium est parfait, plein de fruits secs. Je recommande à 100%.", n: "Imane K.", city: "Agadir", i: "IK", c: "bg-[#C9893A]" },
  { q: "Produit premium, service au top. Commande reçue en 2 jours à Fès, tout était parfait.", n: "Hajar R.", city: "Fès", i: "HR", c: "bg-[#2F6E57]" },
];

const Check = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-primary">
    <path d="m9 16.2-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="avis" className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Ils ont goûté, ils ont adoré" title="800+ clients nous font confiance" />
        <Reveal className="flex items-center justify-center gap-3 mb-10 flex-wrap text-center">
          <span className="text-[#E2A93B] text-[1.4rem] tracking-[2px]">★★★★★</span>
          <b className="font-display text-[1.3rem]">4.9 / 5</b>
          <span className="text-muted">· basé sur 800+ commandes au Maroc</span>
        </Reveal>
        {/* avis vedette épinglé */}
        <Reveal className="mb-6">
          <article className="relative bg-primary text-cream rounded-[26px] p-8 sm:p-10 shadow-[0_18px_44px_-18px_rgba(47,110,87,.55)] overflow-hidden">
            <span className="absolute top-5 right-6 text-[5rem] leading-none font-display text-cream/15 select-none">&rdquo;</span>
            <span className="inline-flex items-center gap-1.5 bg-cream/15 text-cream text-[.78rem] font-semibold uppercase tracking-[.1em] px-3 py-1 rounded-full mb-4">
              ★ Avis coup de cœur
            </span>
            <blockquote className="text-[1.25rem] sm:text-[1.4rem] leading-relaxed font-display max-w-[52rem]">
              &ldquo;{featured.q}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-6">
              <span className={`w-[50px] h-[50px] rounded-full grid place-items-center text-white font-bold font-display text-[1.15rem] ring-2 ring-cream/40 ${featured.c}`}>{featured.i}</span>
              <span className="font-semibold">
                {featured.n}
                <small className="block font-normal text-cream/75 text-[.88rem]">{featured.city}</small>
              </span>
              <span className="ml-auto inline-flex items-center gap-1 text-cream/90 text-[.8rem] font-semibold">
                <span className="text-[#FFD27A] tracking-[1.5px]">★★★★★</span>
              </span>
            </div>
          </article>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={(i % 3) * 80} className="h-full">
              <article className="h-full bg-cream border border-primary/10 rounded-[26px] p-7 shadow-[0_4px_14px_rgba(33,30,24,.06)] flex flex-col gap-[.9rem]">
                <div className="text-[#E2A93B] tracking-[1.5px]">★★★★★</div>
                <blockquote className="text-[1.02rem] text-ink leading-relaxed flex-1">&ldquo;{r.q}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <span className={`w-[46px] h-[46px] rounded-full grid place-items-center text-white font-bold font-display text-[1.1rem] ${r.c}`}>{r.i}</span>
                  <span className="font-semibold">
                    {r.n}
                    <small className="block font-normal text-muted text-[.85rem]">{r.city}</small>
                  </span>
                  <span className="ml-auto inline-flex items-center gap-1 text-primary text-[.78rem] font-semibold">
                    <Check />Vérifié
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
