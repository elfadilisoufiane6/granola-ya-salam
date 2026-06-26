import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import Btn, { btnClass } from "./btn";
import { products, type Product } from "@/lib/catalog";

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[1.15rem] h-[1.15rem]" aria-hidden="true">
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2 3h2.2l2.3 12.4a1.6 1.6 0 0 0 1.6 1.3h8.6a1.6 1.6 0 0 0 1.6-1.2L21.5 7H5.4" />
    </svg>
  );
}

/* Bold overlay card — large square image, warm gradient, white name + price,
   floating "add to cart" icon button. Used on the home page. */
function BoldCard({ p }: { p: Product }) {
  return (
    <article className="group relative rounded-[16px] overflow-hidden bg-light/40 shadow-[0_18px_40px_-22px_rgba(33,30,24,.55)] ring-1 ring-ink/[.04] transition-shadow duration-300 hover:shadow-[0_26px_55px_-22px_rgba(33,30,24,.6)]">
      <div className="relative aspect-square">
        <Image
          src={p.img}
          alt={p.alt}
          fill
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
        />
        {/* soft warm gradient — transparent → deep brown for legibility */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(34,21,10,.72)_0%,rgba(34,21,10,.34)_36%,rgba(34,21,10,0)_66%)]" />

        {p.badge && (
          <span className={`absolute top-4 left-4 ${p.badge.bg} text-white text-[.7rem] font-bold tracking-[.4px] uppercase px-3 py-1.5 rounded-full shadow-sm`}>
            {p.badge.text}
          </span>
        )}

        {/* name + price overlaid bottom-left */}
        <div className="absolute inset-x-0 bottom-0 p-5 pr-20">
          <h3 className="text-white text-[1.5rem] leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,.35)]">{p.name}</h3>
          {p.subtitle && (
            <p className="font-accent text-accent text-[1.15rem] leading-none mt-0.5 drop-shadow-[0_1px_6px_rgba(0,0,0,.4)]">{p.subtitle}</p>
          )}
          <p className="mt-2 text-white font-display font-semibold text-[1.3rem] drop-shadow-[0_1px_8px_rgba(0,0,0,.4)]">
            {p.prices[p.prices.length - 1][1]}
            <span className="ml-1.5 font-body font-medium text-[.8rem] text-white/85">le 1 Kg</span>
          </p>
        </div>

        {/* floating add-to-cart icon button bottom-right */}
        <Link
          href={`/commander?saveur=${p.slug}`}
          aria-label={`Commander ${p.name}`}
          className="absolute bottom-4 right-4 grid place-items-center w-12 h-12 rounded-full bg-primary text-white shadow-[0_8px_20px_-4px_rgba(47,110,87,.6)] ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <CartIcon />
        </Link>
      </div>
    </article>
  );
}

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
            sub="Disponible de 250g à 1 Kg — prix dégressifs. Le petit-déjeuner idéal pour toute la famille."
          />
        )}
        <div className={`grid ${detailed ? "gap-x-10 gap-y-12 grid-cols-1 sm:grid-cols-2 max-w-[940px] mx-auto" : "gap-6 grid-cols-1 sm:grid-cols-2 max-w-[920px] mx-auto"}`}>
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              {detailed ? (
                <article className="flex flex-col h-full group">
                  <div className="relative aspect-square overflow-hidden bg-light/50 rounded-[20px]">
                    <Image src={p.img} alt={p.alt} fill sizes="(max-width:640px) 100vw, 470px" className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]" />
                    {p.badge && (
                      <span className={`absolute top-4 left-4 ${p.badge.bg} text-white text-[.7rem] font-bold tracking-[.4px] uppercase px-3 py-1.5 rounded-full`}>
                        {p.badge.text}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 pt-[1.1rem]">
                    <h3 className="leading-tight text-[1.2rem]">{p.name}</h3>
                    {p.subtitle && <p className="font-accent text-accent leading-none mt-1 text-[1.15rem]">{p.subtitle}</p>}
                    {p.tagline && <p className="mt-2 text-[.95rem] font-semibold text-ink leading-snug">{p.tagline}</p>}
                    <p className="text-muted mt-1.5 text-[.88rem]">{p.desc}</p>
                    {p.forWho && (
                      <p className="mt-2.5 text-[.8rem] text-primary leading-snug">
                        <span className="font-semibold">Pour qui ?</span> {p.forWho}
                      </p>
                    )}
                    <div className="flex-1" />
                    <PriceTable prices={p.prices} />
                    {p.priceNote && (
                      <p className="text-[.78rem] text-muted italic leading-snug -mt-1 mb-3.5 border-l-2 border-secondary/30 pl-3">
                        {p.priceNote}
                      </p>
                    )}
                    <Link href={`/commander?saveur=${p.slug}`} className={btnClass("whatsapp", "md", "w-full min-h-[46px]! text-[.9rem]")}>
                      Commander
                    </Link>
                  </div>
                </article>
              ) : (
                <BoldCard p={p} />
              )}
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
