import Reveal from "./reveal";
import SectionHead from "./section-head";

const reviews = [
  {
    q: "J'ai pris le Miel & Cannelle un peu par curiosité… franchement je suis accro maintenant. Le seul souci c'est que mes enfants finissent le sachet avant moi 😅",
    n: "Salwa",
    city: "Casablanca",
    i: "S",
    c: "bg-[#2F6E57]",
  },
  {
    q: "Reçu en 2 jours, bien emballé. Le Premium est un peu cher mais on comprend pourquoi quand on voit la quantité de fruits secs. Je reprendrai c'est sûr.",
    n: "Nadia",
    city: "Rabat",
    i: "N",
    c: "bg-[#C75B33]",
  },
  {
    q: "Le chocolat est vraiment bon, pas écœurant du tout. J'aurais juste aimé un format plus grand, le 250g part trop vite chez nous 🙈",
    n: "Hind",
    city: "Marrakech",
    i: "H",
    c: "bg-[#B5532E]",
  },
];

export default function SaveursReviews() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Elles ont goûté" title="Ce qu'en disent nos clientes" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={i * 90} className="h-full">
              <article className="h-full bg-cream border border-primary/10 rounded-[26px] p-7 shadow-[0_4px_14px_rgba(33,30,24,.06)] flex flex-col gap-[.9rem]">
                <div className="text-[#E2A93B] tracking-[1.5px]">★★★★★</div>
                <blockquote className="text-[1.02rem] text-ink leading-relaxed flex-1">&ldquo;{r.q}&rdquo;</blockquote>
                <div className="flex items-center gap-3">
                  <span className={`w-[46px] h-[46px] rounded-full grid place-items-center text-white font-bold font-display text-[1.1rem] ${r.c}`}>{r.i}</span>
                  <span className="font-semibold">
                    {r.n}
                    <small className="block font-normal text-muted text-[.85rem]">{r.city}</small>
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
