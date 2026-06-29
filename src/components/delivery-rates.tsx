/** Tarifs de livraison — partout au Maroc. Compact, lisible, scannable. */
const rows: { zone: string; delay: string; price: string; free?: boolean }[] = [
  { zone: "Casablanca", delay: "24h", price: "25 DH" },
  { zone: "Rabat / Marrakech", delay: "24–48h", price: "30 DH" },
  { zone: "Reste du Maroc", delay: "48h", price: "35 DH" },
];

export default function DeliveryRates({ className = "" }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-white/70 backdrop-blur-[4px] border border-primary/15 shadow-[0_14px_36px_-22px_rgba(33,30,24,.5)] p-4 ${className}`}
    >
      <p className="flex items-center gap-1.5 text-[.78rem] font-semibold uppercase tracking-[.1em] text-primary mb-2.5">
        🚚 Livraison partout au Maroc
      </p>
      <ul className="divide-y divide-ink/[.07]">
        {rows.map((r) => (
          <li key={r.zone} className="flex items-center justify-between gap-3 py-1.5 text-[.9rem]">
            <span className="text-ink/85 font-medium">{r.zone}</span>
            <span className="text-muted text-[.82rem]">{r.delay}</span>
            <span className="font-display font-semibold text-ink/85 w-[3.4rem] text-right">{r.price}</span>
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-1.5 mt-2.5 pt-2.5 border-t border-ink/[.07] text-[.86rem] font-semibold text-primary">
        🎁 Livraison offerte dès 150 DH
      </p>
    </div>
  );
}
