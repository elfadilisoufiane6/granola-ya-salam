import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";
import SectionHead from "./section-head";
import Btn, { btnClass } from "./btn";
import { products, qualityPoints, packIngredients, packCard, type Product, type PriceRow } from "@/lib/catalog";

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

/* Habillage de secours tant qu'aucune photo de pack n'est fournie : les
   ingrédients eux-mêmes tiennent lieu de visuel. Dès que `packCard.img` est
   renseigné, la photo prend le dessus. */
function PackBackdrop({ compact = false }: { compact?: boolean }) {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(150deg,#2F6E57_0%,#235543_55%,#1B4436_100%)]" aria-hidden="true">
      <div className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-accent/30 blur-3xl" />
      <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div
        className={`absolute inset-x-0 top-0 flex flex-wrap content-start justify-center gap-1.5 px-4 pt-14 font-semibold text-white/85 ${compact ? "text-[.68rem]" : "text-[.75rem]"}`}
      >
        {packIngredients.slice(0, compact ? 6 : 8).map((ing) => (
          <span key={ing} className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 backdrop-blur-[2px]">
            {ing}
          </span>
        ))}
      </div>
    </div>
  );
}

/* Le pack se présente comme un produit à part entière, dans le même gabarit
   que les saveurs (BoldCard sur l'accueil, ligne détaillée sur /nos-saveurs). */
function CustomPackCard({ detailed = false }: { detailed?: boolean }) {
  const badge = (
    <span className="absolute top-4 left-4 bg-primary text-white text-[.7rem] font-bold tracking-[.4px] uppercase px-3 py-1.5 rounded-full shadow-sm">
      Sur mesure
    </span>
  );

  if (detailed) {
    return (
      <article className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch group">
        <div className="relative w-full md:w-[42%] md:shrink-0 aspect-square md:aspect-auto md:min-h-[330px] overflow-hidden bg-light/50 rounded-[20px]">
          {packCard.img ? (
            <Image src={packCard.img} alt={packCard.alt} fill sizes="(max-width:768px) 100vw, 420px" className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]" />
          ) : (
            <PackBackdrop />
          )}
          {badge}
        </div>
        <div className="flex flex-col flex-1 md:py-1">
          <h3 className="leading-tight text-[1.2rem]">{packCard.name}</h3>
          <p className="font-accent text-accent leading-none mt-1 text-[1.15rem]">{packCard.subtitle}</p>
          <p className="mt-2 text-[.95rem] font-semibold text-ink leading-snug">{packCard.tagline}</p>
          <p className="text-muted mt-1.5 text-[.88rem]">{packCard.desc}</p>
          <p className="mt-2.5 text-[.82rem] text-ink/75 leading-snug">
            <span className="font-semibold text-ink">Au choix :</span> {packIngredients.join(" · ")}
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-3 text-[.76rem] font-semibold text-primary">
            {qualityPoints.map((q) => (
              <li key={q} className="inline-flex items-center gap-1">
                <span aria-hidden="true">✓</span> {q}
              </li>
            ))}
          </ul>
          <div className="flex-1" />
          <p className="text-[.78rem] text-muted italic leading-snug mt-4 mb-3.5 border-l-2 border-secondary/30 pl-3">
            Le total dépend des ingrédients et du poids choisis — on te le confirme sur WhatsApp avant de préparer.
          </p>
          <Link href="/commander?saveur=pack" className={btnClass("whatsapp", "md", "w-full min-h-[46px]! text-[.9rem]")}>
            Composer mon pack
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative rounded-[16px] overflow-hidden bg-light/40 shadow-[0_18px_40px_-22px_rgba(33,30,24,.55)] ring-1 ring-ink/[.04] transition-shadow duration-300 hover:shadow-[0_26px_55px_-22px_rgba(33,30,24,.6)]">
      {/* Étroit (mobile) : carré, texte posé sur la photo comme les saveurs.
          Large (sm+) : la carte occupe les deux colonnes, donc la photo carrée
          remplit exactement la moitié gauche — aucun recadrage — et le texte
          s'installe à droite sur un crème qui prolonge le fond de la photo. */}
      <div className="relative aspect-square sm:aspect-[2/1]">
        {/* panneau de droite : dégradé relevé sur le bord droit de la photo,
            pour que la jointure ne se voie pas */}
        <div
          className="hidden sm:block absolute inset-y-0 left-1/2 right-0 bg-[linear-gradient(180deg,#F7F1E8_0%,#F7EEE3_25%,#F1E5D5_50%,#EFE0D1_75%,#EBDBC7_100%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 overflow-hidden sm:right-1/2">
          {packCard.img ? (
            <Image
              src={packCard.img}
              alt={packCard.alt}
              fill
              sizes="(max-width:640px) 100vw, 460px"
              className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
            />
          ) : (
            <PackBackdrop compact />
          )}
        </div>

        {/* Voile chaud seulement quand le texte est posé sur la photo. Bien plus
            dense que sur les cartes saveurs : ce cliché est clair de bout en
            bout, le blanc ne tient pas sur un voile léger. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,18,8,.92)_0%,rgba(28,18,8,.74)_26%,rgba(28,18,8,.34)_52%,rgba(28,18,8,0)_76%)] sm:hidden" />
        {badge}

        <div className="absolute bottom-0 left-0 right-0 p-5 pr-[4.75rem] sm:top-0 sm:left-1/2 sm:flex sm:flex-col sm:justify-center sm:p-8 sm:pr-24">
          {/* entre sm et md le panneau de droite est étroit (moitié d'une carte
              de ~620px) : titre réduit et accroche masquée pour éviter le pavé */}
          <h3 className="text-white text-[1.3rem] leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,.45)] sm:text-ink sm:text-[1.55rem] sm:drop-shadow-none md:text-[1.9rem]">
            {packCard.name}
          </h3>
          <p className="font-accent text-accent text-[1.05rem] leading-none mt-1 drop-shadow-[0_1px_6px_rgba(0,0,0,.5)] sm:mt-1.5 sm:text-[1.25rem] sm:drop-shadow-none md:text-[1.4rem]">
            {packCard.subtitle}
          </p>
          <p className="hidden md:block text-muted text-[.92rem] leading-relaxed mt-3 max-w-[24rem]">
            {packCard.tagline}
          </p>
          {/* en étroit la mention « confirmé sur WhatsApp » ne tient pas à côté
              du prix : on la garde pour les écrans larges */}
          <p className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 drop-shadow-[0_1px_8px_rgba(0,0,0,.5)] sm:mt-4 sm:drop-shadow-none">
            <span className="text-white font-display font-semibold text-[1.05rem] sm:text-ink sm:text-[1.3rem]">{packCard.priceFrom}</span>
            <span className="hidden sm:inline font-body font-medium text-[.8rem] text-white/85 sm:text-muted">confirmé sur WhatsApp</span>
          </p>
          <span className="hidden sm:inline-flex items-center gap-2 mt-5 text-[.95rem] font-bold text-primary transition-transform duration-200 group-hover:translate-x-1">
            Composer mon pack <span aria-hidden="true">→</span>
          </span>
        </div>

        {/* toute la carte mène au formulaire pré-rempli */}
        <Link href="/commander?saveur=pack" aria-label="Composer mon pack personnalisé" className="absolute inset-0 z-[1]" />

        {/* pastille décorative : le lien couvre déjà la carte entière */}
        <span
          className="absolute bottom-4 right-4 z-[2] grid place-items-center w-12 h-12 rounded-full bg-primary text-white shadow-[0_8px_20px_-4px_rgba(47,110,87,.6)] ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <CartIcon />
        </span>
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
