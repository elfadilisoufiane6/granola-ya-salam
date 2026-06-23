import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import Btn, { btnClass } from "./btn";

export type Product = {
  slug: string;
  name: string;
  subtitle?: string;
  img: string;
  alt: string;
  desc: string;
  badge: { text: string; bg: string } | null;
  prices: [string, string][];
};

export const products: Product[] = [
  {
    slug: "premium",
    name: "Granola Premium",
    subtitle: "Fruits Secs & Graines",
    img: "/images/produit-2-b.webp",
    alt: "Granola Premium fruits secs et graines",
    desc: "Avoine, amandes, noix, noix de cajou, pistaches, noisettes, graines de chia, lin et sésame, tournesol et graines de courge.",
    badge: { text: "Premium", bg: "bg-secondary" },
    prices: [["100g", "25 DH"], ["250g", "65 DH"], ["500g", "120 DH"], ["750g", "185 DH"], ["1 Kg", "240 DH"]],
  },
  {
    slug: "miel",
    name: "Granola Miel & Cannelle",
    img: "/images/produit-1-b.webp",
    alt: "Granola miel et cannelle",
    desc: "Avoine, miel naturel, cannelle, amandes et raisins secs.",
    badge: { text: "⭐ Best-seller", bg: "bg-primary" },
    prices: [["100g", "20 DH"], ["250g", "45 DH"], ["500g", "80 DH"], ["750g", "115 DH"], ["1 Kg", "150 DH"]],
  },
  {
    slug: "chocolat",
    name: "Granola Chocolat",
    img: "/images/produit-3-b.webp",
    alt: "Granola chocolat noir",
    desc: "Avoine, chocolat noir, amandes et noix de cajou.",
    badge: null,
    prices: [["100g", "22 DH"], ["250g", "50 DH"], ["500g", "90 DH"], ["750g", "130 DH"], ["1 Kg", "165 DH"]],
  },
  {
    slug: "classique",
    name: "Granola Classique",
    img: "/images/produit-4-b.webp",
    alt: "Granola classique",
    desc: "Avoine, amandes, noix, raisins secs et graines saines.",
    badge: null,
    prices: [["100g", "20 DH"], ["250g", "45 DH"], ["500g", "80 DH"], ["750g", "115 DH"], ["1 Kg", "150 DH"]],
  },
];

function PriceTable({ prices }: { prices: [string, string][] }) {
  return (
    <div className="mt-3 mb-4 border-t border-primary/10">
      {prices.map(([g, p]) => (
        <div key={g} className="flex items-center justify-between py-1 border-b border-primary/10 last:border-0">
          <span className="text-muted text-[.9rem]">📦 {g}</span>
          <span className="font-display font-semibold text-primary text-[.98rem]">{p}</span>
        </div>
      ))}
    </div>
  );
}

export default function Products({ showHeader = true, detailed = false }: { showHeader?: boolean; detailed?: boolean }) {
  return (
    <section id="products" className="py-24">
      <div className="container-x">
        {showHeader && (
          <SectionHead
            eyebrow="Nos Granolas"
            title="Nos saveurs 🥣"
            sub="Disponible de 100g à 1 Kg — prix dégressifs. Le petit-déjeuner idéal pour toute la famille."
          />
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.6rem]">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              <article className="bg-cream rounded-[26px] overflow-hidden shadow-[0_4px_14px_rgba(33,30,24,.06)] border border-[rgba(232,200,154,.55)] flex flex-col h-full transition-[transform,box-shadow] duration-300 hover:-translate-y-2 hover:shadow-[0_26px_64px_rgba(33,30,24,.18)] group">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.07]" />
                  {p.badge && (
                    <span className={`absolute top-3 left-3 ${p.badge.bg} text-white text-[.7rem] font-bold tracking-[.4px] uppercase px-3 py-1.5 rounded-full`}>
                      {p.badge.text}
                    </span>
                  )}
                </div>
                <div className="p-[1.4rem] flex flex-col flex-1">
                  <h3 className="text-[1.2rem] leading-tight">{p.name}</h3>
                  {p.subtitle && <p className="font-accent text-accent text-[1.15rem] leading-none mt-1">{p.subtitle}</p>}
                  <p className="text-muted text-[.88rem] mt-2 flex-1">{p.desc}</p>

                  {detailed ? (
                    <>
                      <PriceTable prices={p.prices} />
                      <Link href={`/commander?saveur=${p.slug}`} className={btnClass("whatsapp", "md", "w-full min-h-[46px]! text-[.9rem]")}>
                        Commander
                      </Link>
                    </>
                  ) : (
                    <div className="flex items-center justify-between mt-3 gap-2">
                      <span className="font-display font-bold text-[1.2rem] text-primary whitespace-nowrap">
                        dès {p.prices[0][1]}
                        <small className="block font-body font-medium text-[.72rem] text-muted">le 100g · jusqu&apos;à 1 Kg</small>
                      </span>
                      <Link href={`/commander?saveur=${p.slug}`} className={btnClass("whatsapp", "md", "px-4! py-2.5! min-h-[44px]! text-[.85rem] whitespace-nowrap")}>
                        Commander
                      </Link>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {!detailed && (
          <div className="text-center mt-10">
            <Btn href="/nos-saveurs" variant="ghost" size="lg">Voir tous les prix &amp; grammages →</Btn>
          </div>
        )}
      </div>
    </section>
  );
}
