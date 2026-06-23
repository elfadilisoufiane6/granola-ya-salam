import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import { btnClass } from "./btn";

export const products = [
  { slug: "classique", img: "/images/produit-1-b.webp", name: "Granola Classique", alt: "Granola Classique avoine et miel", desc: "Croustillante, dorée, parfaite au yaourt. Avoine & miel.", price: "95 DH", badge: { text: "Best-seller", bg: "bg-secondary" } },
  { slug: "marocain", img: "/images/produit-2-b.webp", name: "Granola Marocain", alt: "Granola Marocain amlou et amandes", desc: "Amlou du Souss + miel naturel. Un goût bien de chez nous.", price: "110 DH", badge: { text: "⭐ Le favori", bg: "bg-primary" } },
  { slug: "chocolat", img: "/images/produit-3-b.webp", name: "Chocolat & Noisettes", alt: "Granola chocolat et noisettes", desc: "Pépites de chocolat noir & noisettes torréfiées. Gourmand, mais healthy.", price: "105 DH", badge: null },
  { slug: "tropical", img: "/images/produit-4-b.webp", name: "Granola Tropical", alt: "Granola tropical coco et ananas", desc: "Noix de coco grillée & ananas séché. Ensoleillé à souhait.", price: "100 DH", badge: { text: "Édition été", bg: "bg-secondary" } },
];

export default function Products({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="products" className="py-24">
      <div className="container-x">
        {showHeader && (
          <SectionHead
            eyebrow="Notre gamme"
            title="Nos saveurs 🥣"
            sub="Quatre recettes, une même promesse : croustillant, naturel et plein de goût."
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
                  <h3 className="text-[1.25rem] mb-1.5">{p.name}</h3>
                  <p className="text-muted text-[.92rem] flex-1">{p.desc}</p>
                  <div className="flex items-center justify-between mt-[1.1rem] gap-2">
                    <span className="font-display font-bold text-[1.25rem] text-primary whitespace-nowrap">
                      {p.price}
                      <small className="block font-body font-medium text-[.72rem] text-muted">500g</small>
                    </span>
                    <Link href={`/commander?saveur=${p.slug}`} className={btnClass("whatsapp", "md", "px-4! py-2.5! min-h-[44px]! text-[.85rem] whitespace-nowrap")}>
                      Commander
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
