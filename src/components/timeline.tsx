import Reveal from "./reveal";
import SectionHead from "./section-head";

const steps = [
  {
    tag: "La première fournée",
    text: "2025. Dans ma cuisine à Casablanca, entre deux essais ratés et un four qui chauffe un peu trop.",
  },
  {
    tag: "Les 100 premières commandes",
    text: "Le bouche-à-oreille s'emballe. Je prépare mes sachets le soir, à la main, un par un.",
  },
  {
    tag: "Première ville hors de Casa",
    text: "Notre granola prend la route. Le premier colis qui quitte Casablanca — et le cœur qui bat.",
  },
  {
    tag: "800+ familles",
    text: "Aujourd'hui, des centaines de familles marocaines commencent leur matin avec nous.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Le chemin parcouru" title="De ma cuisine à tout le Maroc" />

        <ol className="relative max-w-[760px] mx-auto border-l-2 border-primary/20 pl-8 md:pl-10">
          {steps.map((s, i) => (
            <Reveal key={s.tag} delay={i * 90}>
              <li className="relative pb-10 last:pb-0">
                {/* dot */}
                <span className="absolute -left-[2.6rem] md:-left-[3.1rem] top-1 grid place-items-center w-7 h-7 rounded-full bg-primary text-cream text-[.8rem] font-bold shadow-[0_6px_16px_-4px_rgba(47,110,87,.6)]">
                  {i + 1}
                </span>
                <h3 className="text-[1.3rem] leading-tight text-ink">{s.tag}</h3>
                <p className="text-muted text-[1.02rem] mt-1.5">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
