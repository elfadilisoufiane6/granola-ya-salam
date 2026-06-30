import Reveal from "./reveal";
import SectionHead from "./section-head";

const cards = [
  { ico: "🍯", t: "Sucré au miel naturel", p: "Zéro sirop industriel. La douceur vient du miel naturel et des fruits secs. Point." },
  { ico: "👩‍🍳", t: "Fait main par Khaoula, à Casablanca", p: "Chaque fournée sort de sa cuisine, en petites quantités. Pas d'usine, pas de tapis roulant." },
  { ico: "📅", t: "Préparé peu et souvent", p: "On torréfie en petites séries. Le sachet que vous recevez a quelques jours — pas un an de stock." },
  { ico: "🥜", t: "Généreux en fruits secs", p: "On ne remplit pas le sachet d'avoine bon marché. Les amandes, noix et graines, vous les voyez et vous les croquez." },
  { ico: "🇲🇦", t: "Pensé pour le goût marocain", p: "Cannelle, miel, recettes qui rappellent le petit-déj de la maison. Healthy, mais jamais fade." },
  { ico: "🚚", t: "Livré frais, payé à la livraison", p: "Partout au Maroc en 24–48h, de Tanger à Agadir. Vous goûtez d'abord, vous payez ensuite." },
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
