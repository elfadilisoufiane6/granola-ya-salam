import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import Btn, { btnClass } from "./btn";
import { products } from "@/lib/catalog";

function PriceTable({ prices }: { prices: [string, string][] }) {
  return (
    <div className="mt-3 mb-4">
      <div className="flex items-center justify-between pb-1.5 text-[.66rem] font-semibold uppercase tracking-[.12em] text-muted/70">
        <span>Format</span>
        <span>Prix</span>
      </div>
      {prices.map(([g, p], i) => {
        const best = i === prices.length - 1;
        return (
          <div
            key={g}
            className="flex items-center justify-between py-2 border-t border-ink/[.08]"
          >
            <span className="flex items-center gap-2 text-ink/80 text-[.92rem]">
              {g}
              {best && (
                <span className="text-[.6rem] font-bold uppercase tracking-[.06em] text-primary">
                  Meilleur prix
                </span>
              )}
            </span>
            <span className={`font-display font-semibold ${best ? "text-[1.05rem] text-primary" : "text-[.98rem] text-ink/80"}`}>{p}</span>
          </div>
        );
      })}
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
        <div className={`grid gap-x-8 ${detailed ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10" : "grid-cols-1 sm:grid-cols-2 gap-y-16 max-w-[920px] mx-auto"}`}>
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              <article className="flex flex-col h-full group">
                <div className={`relative aspect-square overflow-hidden bg-light/50 ${detailed ? "rounded-[20px]" : "rounded-[24px]"}`}>
                  <Image src={p.img} alt={p.alt} fill sizes={detailed ? "(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw" : "(max-width:640px) 100vw, 460px"} className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]" />
                  {p.badge && (
                    <span className={`absolute top-4 left-4 ${p.badge.bg} text-white text-[.7rem] font-bold tracking-[.4px] uppercase px-3 py-1.5 rounded-full`}>
                      {p.badge.text}
                    </span>
                  )}
                </div>
                <div className={`flex flex-col flex-1 ${detailed ? "pt-[1.1rem]" : "pt-[1.4rem]"}`}>
                  <h3 className={`leading-tight ${detailed ? "text-[1.2rem]" : "text-[1.5rem]"}`}>{p.name}</h3>
                  {p.subtitle && <p className={`font-accent text-accent leading-none mt-1 ${detailed ? "text-[1.15rem]" : "text-[1.3rem]"}`}>{p.subtitle}</p>}
                  <p className={`text-muted mt-2 flex-1 ${detailed ? "text-[.88rem]" : "text-[.95rem] line-clamp-2"}`}>{p.desc}</p>

                  {detailed ? (
                    <>
                      <PriceTable prices={p.prices} />
                      <Link href={`/commander?saveur=${p.slug}`} className={btnClass("whatsapp", "md", "w-full min-h-[46px]! text-[.9rem]")}>
                        Commander
                      </Link>
                    </>
                  ) : (
                    <div className="flex items-center justify-between mt-4 gap-2">
                      <span className="font-display font-bold text-[1.5rem] text-primary whitespace-nowrap">
                        {p.prices[p.prices.length - 1][1]}
                        <small className="block font-body font-medium text-[.74rem] text-muted">le 1 Kg</small>
                      </span>
                      <Link href={`/commander?saveur=${p.slug}`} className={btnClass("whatsapp", "md", "px-5! py-2.5! min-h-[46px]! text-[.9rem] whitespace-nowrap")}>
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
