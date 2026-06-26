import Image from "next/image";
import Link from "next/link";
import Btn, { btnClass } from "./btn";
import Reveal from "./reveal";
import UrgencyBadge from "./urgency-badge";

const avatars = [
  { i: "FZ", c: "bg-[#2F6E57]" },
  { i: "YB", c: "bg-[#C75B33]" },
  { i: "KM", c: "bg-[#B5532E]" },
  { i: "SA", c: "bg-[#4F7A4A]" },
];

export default function Hero() {
  return (
    <>
      {/* ===================== MOBILE ===================== */}
      <section className="md:hidden relative isolate overflow-hidden">
        {/* image entière, claire */}
        <Image
          src="/images/hero-mobile.png"
          alt="Granola artisanal marocain Granola Ya Salame — fruits secs, miel et avoine, fait main à Casablanca"
          width={887}
          height={1774}
          priority
          sizes="100vw"
          className="w-full h-auto"
        />
        {/* léger voile clair sur la zone marbre (sous les sachets) pour la lisibilité */}
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-[linear-gradient(0deg,rgba(250,246,238,.96)_18%,rgba(250,246,238,.72)_55%,rgba(250,246,238,0)_100%)]" />
        {/* titre court + petit CTA, posés sur l'espace vide EN DESSOUS du produit */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-7 text-center">
          <h1 className="text-[1.85rem] leading-[1.08] text-ink">
            Le granola qui <span className="text-accent italic">change ton matin</span>
          </h1>
          <p className="text-[.98rem] text-muted font-medium mt-2.5">
            Sans sucre raffiné · sans conservateurs · 100% artisanal 🇲🇦
          </p>
          <p className="text-[.95rem] text-ink font-semibold mt-2">
            À partir de <span className="text-primary">45 DH</span> · Livraison 24–48h partout au Maroc
          </p>
          <div className="flex justify-center mt-3">
            <UrgencyBadge />
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <Link
              href="/commander"
              className={btnClass("whatsapp", "md", "px-5! py-2.5! min-h-[44px]! text-[.92rem]!")}
            >
              Commander
            </Link>
            <Link
              href="/nos-saveurs"
              className={btnClass("ghost", "md", "px-5! py-2.5! min-h-[44px]! text-[.92rem]!")}
            >
              Nos saveurs ↓
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== DESKTOP ===================== */}
      <section className="hidden md:flex relative min-h-[100svh] items-center pt-[calc(78px+2rem)] pb-12 overflow-hidden isolate">
        {/* full-bleed image */}
        <Image
          src="/images/hero-full.webp"
          alt="Bols de granola artisanal Granola Ya Salame aux fruits secs et miel — petit-déjeuner sain fait main à Casablanca"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right -z-20"
        />
        {/* desktop scrim (left) */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,246,238,.94)_0%,rgba(250,246,238,.7)_36%,rgba(250,246,238,.15)_58%,rgba(250,246,238,0)_75%)]" />

        <div className="container-x">
          <Reveal className="max-w-[600px]">
            <span className="inline-flex items-center gap-2 bg-white/70 border border-primary/25 text-primary font-semibold text-[.88rem] px-[1.1rem] py-2 rounded-full mb-5 backdrop-blur-[4px]">
              🌿 Énergie · Nature · Bien-être
            </span>
            <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] text-ink">
              Le granola qui <span className="text-accent italic">change ton matin</span>
            </h1>
            <p className="font-accent text-[clamp(1.5rem,3vw,2.1rem)] text-secondary mt-2 font-bold">
              Le plaisir sain, partagé avec amour 🇲🇦
            </p>
            <p className="text-[1.15rem] text-muted max-w-[33rem] mt-[1.3rem] mb-3">
              Granola artisanal marocain — sans sucre raffiné, sans conservateurs, plein de fruits secs croustillants. Le petit-déjeuner idéal pour toute la famille.
            </p>
            <p className="text-[1.15rem] text-ink font-semibold mb-[1.3rem]">
              À partir de <span className="text-primary">45 DH</span> · Livraison 24–48h partout au Maroc
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Btn href="/commander" variant="whatsapp" size="lg">Commander maintenant</Btn>
              <Btn href="/nos-saveurs" variant="ghost" size="lg">Voir nos saveurs ↓</Btn>
              <UrgencyBadge />
            </div>
            <div className="flex items-center gap-[.9rem] mt-[1.9rem] flex-wrap">
              <div className="flex" aria-hidden="true">
                {avatars.map((a) => (
                  <span key={a.i} className={`w-9 h-9 rounded-full border-2 border-white -ml-2.5 first:ml-0 grid place-items-center text-white font-bold text-[.82rem] font-display shadow-[0_4px_14px_rgba(33,30,24,.06)] ${a.c}`}>
                    {a.i}
                  </span>
                ))}
              </div>
              <div className="text-[.94rem] text-ink">
                <span className="text-[#E2A93B] tracking-[1px]">★★★★★</span> <b>4.9/5</b> — 800+ clients satisfaits
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
