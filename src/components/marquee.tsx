const items = [
  "🌿 100% Naturel",
  "🏠 Fait Main à Casablanca",
  "🚫 Sans conservateur",
  "🚫 Sans sucre raffiné",
  "🍯 Au miel naturel",
  "🚚 Livraison 24–48h",
  "⭐ 4.9/5 · 800+ clients",
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="bg-primary text-white py-[.85rem] overflow-hidden group" aria-label="Nos garanties">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {loop.map((it, i) => (
          <span key={i} className="inline-flex items-center px-[1.6rem] font-semibold text-[.96rem] whitespace-nowrap after:content-['•'] after:ml-[1.6rem] after:text-accent">
            {it}
          </span>
        ))}
      </div>
    </section>
  );
}
