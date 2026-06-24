import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import Btn, { btnClass } from "./btn";
import { products } from "@/lib/catalog";

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
                  <p className={`text-muted text-[.88rem] mt-2 flex-1 ${detailed ? "" : "line-clamp-2"}`}>{p.desc}</p>

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
                        {p.prices[p.prices.length - 1][1]}
                        <small className="block font-body font-medium text-[.72rem] text-muted">le 1 Kg</small>
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
