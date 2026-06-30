import Reveal from "./reveal";
import SectionHead from "./section-head";

const zones = [
  { icon: "🏙️", zone: "Casablanca", delay: "Livré en 24h", price: "25 DH" },
  { icon: "🚗", zone: "Rabat / Marrakech", delay: "Livré en 24–48h", price: "30 DH" },
  { icon: "🇲🇦", zone: "Reste du Maroc", delay: "Livré en 48h", price: "35 DH" },
];

export default function Delivery() {
  return (
    <section className="py-20 bg-light" aria-label="Livraison partout au Maroc">
      <div className="container-x">
        <SectionHead
          eyebrow="Livraison"
          title="Livré chez toi, partout au Maroc 🚚"
          sub="Commande aujourd'hui, reçois en 24–48h. Livraison à partir de 25 DH — paiement à la livraison."
        />

        <div className="grid gap-5 sm:grid-cols-3 max-w-[920px] mx-auto">
          {zones.map((z, i) => (
            <Reveal key={z.zone} delay={i * 90} className="h-full">
              <div className="h-full flex flex-col items-center text-center rounded-[24px] bg-cream border border-primary/10 px-6 py-7 shadow-[0_18px_40px_-28px_rgba(33,30,24,.5)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-26px_rgba(33,30,24,.55)]">
                <span className="text-[2rem] leading-none mb-3" aria-hidden="true">{z.icon}</span>
                <h3 className="text-[1.15rem] text-ink leading-tight">{z.zone}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[.82rem] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  ⏱ {z.delay}
                </span>
                <p className="mt-4 font-display font-semibold text-[1.6rem] text-ink leading-none">{z.price}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="max-w-[920px] mx-auto mt-6">
          <div className="flex items-center justify-center gap-2.5 text-center rounded-[20px] bg-primary text-white px-6 py-4 font-semibold text-[clamp(.98rem,2.4vw,1.1rem)] shadow-[0_18px_40px_-26px_rgba(47,110,87,.8)]">
            <span aria-hidden="true">🎁</span>
            <span>Livraison <span className="text-accent">offerte</span> dès 250 DH d&apos;achat</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
