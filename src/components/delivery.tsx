import Reveal from "./reveal";

const zones = [
  { icon: "🏙️", zone: "Casablanca", delay: "24h", price: "25 DH" },
  { icon: "🇲🇦", zone: "Reste du Maroc", delay: "48h", price: "35 DH" },
];

function Divider() {
  return <span className="hidden md:block w-px h-7 bg-ink/10 shrink-0" aria-hidden="true" />;
}

/** Bandeau livraison compact (sous les produits) — infos clés en une ligne. */
export default function Delivery() {
  return (
    <section className="pb-16 pt-2" aria-label="Livraison partout au Maroc">
      <div className="container-x">
        <Reveal className="mx-auto max-w-[940px] rounded-[20px] bg-cream border border-primary/15 shadow-[0_16px_38px_-26px_rgba(33,30,24,.55)] px-5 py-4 md:px-7 flex flex-col md:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 text-center">
          <span className="flex items-center gap-2 font-semibold text-primary whitespace-nowrap">
            🚚 Livraison partout au Maroc
          </span>

          <Divider />

          {zones.map((z) => (
            <span key={z.zone} className="flex items-center gap-1.5 text-[.95rem] whitespace-nowrap">
              <span aria-hidden="true">{z.icon}</span>
              <b className="text-ink">{z.zone}</b>
              <span className="text-muted">· {z.delay} ·</span>
              <span className="font-display font-semibold text-ink">{z.price}</span>
            </span>
          ))}

          <Divider />

          <span className="flex items-center gap-1.5 font-semibold text-primary whitespace-nowrap">
            🎁 Offerte dès 250 DH
          </span>
        </Reveal>
      </div>
    </section>
  );
}
