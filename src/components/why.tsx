import Reveal from "./reveal";
import SectionHead from "./section-head";

const cards = [
  { ico: "🌿", t: "100% Naturel", p: "Des ingrédients vrais, rien d'artificiel." },
  { ico: "🚫", t: "Sans Conservateurs", p: "Aucun additif ni conservateur ajouté." },
  { ico: "💪", t: "Riche en Fibres & Protéines", p: "L'énergie qu'il faut pour bien démarrer." },
  { ico: "❤️", t: "Fait avec Amour", p: "Préparé à la main, en petites quantités." },
  { ico: "⚡", t: "Énergie Durable", p: "Un petit-déjeuner qui tient toute la matinée." },
  { ico: "🌾", t: "Ingrédients Sélectionnés", p: "Avoine, fruits secs et graines de qualité." },
];

export default function Why() {
  return (
    <section id="why" className="py-24 bg-light">
      <div className="container-x">
        <SectionHead
          eyebrow="Pourquoi nous choisir ?"
          title="Le bon choix, chaque matin"
          sub="Six bonnes raisons de commencer ta journée avec Granola Ya Salame."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={(i % 3) * 80} className="h-full">
              <article className="h-full bg-cream rounded-[26px] p-8 border border-primary/10 shadow-[0_4px_14px_rgba(33,30,24,.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(33,30,24,.10)]">
                <div className="w-[60px] h-[60px] rounded-2xl grid place-items-center text-[1.8rem] mb-[1.1rem] bg-[linear-gradient(135deg,#2F6E57,#235543)]">{c.ico}</div>
                <h3 className="text-[1.2rem] mb-2">{c.t}</h3>
                <p className="text-muted text-[.96rem]">{c.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
