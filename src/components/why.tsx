import Reveal from "./reveal";
import SectionHead from "./section-head";

const cards = [
  { ico: "🏠", t: "Fait Maison", p: "Préparé en petites quantités, jamais en grande usine. Chaque sachet est soigné." },
  { ico: "🌿", t: "Ingrédients Purs", p: "Avoine, miel, amandes, noix — zéro additif, zéro conservateur, zéro compromis." },
  { ico: "🇲🇦", t: "Saveurs Marocaines", p: "Amandes d'Oulmès, miel de Zagora, amlou du Souss — notre terroir dans un bol." },
  { ico: "🎁", t: "Box & Cadeaux", p: "Packs découverte et box cadeaux personnalisées, emballées avec amour." },
];

const badges = ["100% Naturel", "Sans conservateur", "Sans sucre raffiné", "Ingrédients locaux"];

const Shield = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-primary">
    <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3zm-1.2 13.4-3.2-3.2 1.4-1.4 1.8 1.8 4.2-4.2 1.4 1.4-5.6 5.6z" />
  </svg>
);

export default function Why() {
  return (
    <section id="why" className="py-24 bg-light">
      <div className="container-x">
        <SectionHead
          eyebrow="Ce qui nous rend différents"
          title="La qualité, sans compromis"
          sub="Chaque sachet est préparé à la main, avec des ingrédients qu'on assume — et qu'on adore."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 80} className="h-full">
              <article className="h-full bg-cream rounded-[26px] p-8 border border-primary/10 shadow-[0_4px_14px_rgba(33,30,24,.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(33,30,24,.10)]">
                <div className="w-[60px] h-[60px] rounded-2xl grid place-items-center text-[1.8rem] mb-[1.1rem] bg-[linear-gradient(135deg,#2F6E57,#235543)]">{c.ico}</div>
                <h3 className="text-[1.22rem] mb-2">{c.t}</h3>
                <p className="text-muted text-[.96rem]">{c.p}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="flex flex-wrap justify-center gap-3 mt-11">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 px-5 py-2.5 bg-cream border-[1.5px] border-primary/25 rounded-full font-semibold text-[.9rem] text-primary">
              <Shield />{b}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
