import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import Btn, { btnClass } from "./btn";
import { products, qualityPoints, type Product, type PriceRow } from "@/lib/catalog";

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
          <p className="mt-2 flex items-baseline gap-1.5 drop-shadow-[0_1px_8px_rgba(0,0,0,.4)]">
            {p.prices[p.prices.length - 1][2] && (
              <span className="font-body font-medium text-[.85rem] text-white/70 line-through">{p.prices[p.prices.length - 1][2]}</span>
            )}
            <span className="text-white font-display font-semibold text-[1.3rem]">{p.prices[p.prices.length - 1][1]}</span>
            <span className="font-body font-medium text-[.8rem] text-white/85">le 1 Kg</span>
          </p>
        </div>

        {/* whole card → Nos saveurs */}
        <Link
          href="/nos-saveurs"
          aria-label={`Voir ${p.name} dans Nos saveurs`}
          className="absolute inset-0 z-[1]"
        />

        {/* floating add-to-cart icon button bottom-right (sits above the card link) */}
        <Link
          href={`/commander?saveur=${p.slug}`}
          aria-label={`Commander ${p.name}`}
          className="absolute bottom-4 right-4 z-[2] grid place-items-center w-12 h-12 rounded-full bg-primary text-white shadow-[0_8px_20px_-4px_rgba(47,110,87,.6)] ring-1 ring-white/20 transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <CartIcon />
        </Link>
      </div>
    </article>
  );
}

function PriceTable({ prices }: { prices: PriceRow[] }) {
  return (
    <div className="mt-3 mb-4">
      <div className="flex items-center justify-between pb-1.5 text-[.66rem] font-semibold uppercase tracking-[.12em] text-muted/70">
        <span>Format</span>
        <span>Prix de lancement</span>
      </div>
      {prices.map(([g, p, old], i) => {
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
            <span className="flex items-baseline gap-1.5">
              {old && <span className="text-[.78rem] text-muted/60 line-through">{old}</span>}
              <span className={`font-display font-semibold ${best ? "text-[1.05rem] text-primary" : "text-[.98rem] text-ink/80"}`}>{p}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

function CustomPackCard({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <article className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,#2F6E57_0%,#235543_58%,#1B4436_100%)] px-7 py-8 text-white shadow-[0_18px_40px_-22px_rgba(33,30,24,.55)] md:px-10 md:py-10">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-14 h-56 w-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div className="max-w-[42rem]">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[.7rem] font-bold uppercase tracking-[.12em] text-[#FFE1A8]">
              À composer selon tes envies
            </span>
            <h3 className="mt-4 text-[clamp(1.8rem,4vw,2.5rem)] text-white">Pack personnalisé</h3>
            <p className="mt-3 text-[1rem] leading-relaxed text-white/85">
              Compose ta box avec les saveurs que tu aimes. Choisis une ou plusieurs recettes, puis indique le format qui te convient : on confirme le total avec toi sur WhatsApp.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-[.86rem] font-semibold">
              {products.map((product) => (
                <li key={product.slug} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                  {product.name.replace("Granola ", "")}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/commander?saveur=pack" className={btnClass("light", "md", "w-full md:w-auto whitespace-nowrap")}>Composer mon pack</Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative min-h-full overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#2F6E57_0%,#235543_62%,#1B4436_100%)] p-6 text-white shadow-[0_18px_40px_-22px_rgba(33,30,24,.55)] ring-1 ring-ink/[.04] transition-shadow duration-300 hover:shadow-[0_26px_55px_-22px_rgba(33,30,24,.6)]">
      <div className="absolute -right-12 -top-14 h-48 w-48 rounded-full bg-accent/25 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      {/* pleine largeur sur la grille : mise en page horizontale dès sm */}
      <div className="relative flex h-full flex-col items-start sm:flex-row sm:items-center sm:gap-7">
        <span className="hidden shrink-0 place-items-center rounded-2xl border border-white/20 bg-white/10 text-[1.7rem] shadow-inner sm:grid sm:h-14 sm:w-14" aria-hidden="true">✦</span>
        <div className="flex flex-col items-start sm:flex-1">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[.67rem] font-bold uppercase tracking-[.12em] text-[#FFE1A8]">Nouveau</span>
          <span className="mt-7 grid h-14 w-14 place-items-center rounded-2xl border border-white/20 bg-white/10 text-[1.7rem] shadow-inner sm:hidden" aria-hidden="true">✦</span>
          <h3 className="mt-5 text-[1.65rem] leading-tight text-white sm:mt-3">Pack personnalisé</h3>
          <p className="mt-2 max-w-[25rem] text-[.94rem] leading-relaxed text-white/80">Ta box, tes saveurs. Coche ce qui te fait envie et on prépare le pack sur mesure.</p>
          <div className="mt-5 flex flex-wrap gap-2 text-[.75rem] font-semibold text-white/90 sm:mt-4">
            <span className="rounded-full bg-white/10 px-2.5 py-1">Choix des saveurs</span>
            <span className="rounded-full bg-white/10 px-2.5 py-1">Box cadeau possible</span>
          </div>
        </div>
        <Link href="/commander?saveur=pack" className="mt-auto inline-flex shrink-0 items-center gap-2 pt-6 text-[.95rem] font-bold text-[#FFE1A8] transition-transform duration-200 group-hover:translate-x-1 sm:mt-0 sm:pt-0">
          Composer mon pack <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
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
        <div className={detailed ? "flex flex-col gap-12 md:gap-16 max-w-[1000px] mx-auto" : "grid gap-6 grid-cols-1 sm:grid-cols-2 max-w-[920px] mx-auto"}>
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              {detailed ? (
                <article className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch group">
                  <div className="relative w-full md:w-[42%] md:shrink-0 aspect-square md:aspect-auto md:min-h-[330px] overflow-hidden bg-light/50 rounded-[20px]">
                    <Image src={p.img} alt={p.alt} fill sizes="(max-width:768px) 100vw, 420px" className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]" />
                    {p.badge && (
                      <span className={`absolute top-4 left-4 ${p.badge.bg} text-white text-[.7rem] font-bold tracking-[.4px] uppercase px-3 py-1.5 rounded-full`}>
                        {p.badge.text}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col flex-1 md:py-1">
                    <h3 className="leading-tight text-[1.2rem]">{p.name}</h3>
                    {p.subtitle && <p className="font-accent text-accent leading-none mt-1 text-[1.15rem]">{p.subtitle}</p>}
                    {p.tagline && <p className="mt-2 text-[.95rem] font-semibold text-ink leading-snug">{p.tagline}</p>}
                    <p className="text-muted mt-1.5 text-[.88rem]">{p.desc}</p>
                    {p.idealWith && (
                      <p className="mt-2.5 text-[.82rem] text-ink/75 leading-snug">
                        <span className="font-semibold text-ink">Idéal avec :</span> {p.idealWith}
                      </p>
                    )}
                    {p.ingredients && (
                      <p className="mt-1.5 text-[.78rem] text-muted leading-snug">
                        <span className="font-semibold text-ink/70">Ingrédients :</span> {p.ingredients}
                      </p>
                    )}
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-[.76rem] font-semibold text-primary">
                      {qualityPoints.map((q) => (
                        <li key={q} className="inline-flex items-center gap-1">
                          <span aria-hidden="true">✓</span> {q}
                        </li>
                      ))}
                    </ul>
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
          <Reveal delay={products.length * 100} className={detailed ? "" : "h-full sm:col-span-2"}>
            <CustomPackCard detailed={detailed} />
          </Reveal>
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
