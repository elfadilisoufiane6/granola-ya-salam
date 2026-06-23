import Image from "next/image";
import Btn from "./btn";
import Reveal from "./reveal";

const avatars = [
  { i: "FZ", c: "bg-[#2F6E57]" },
  { i: "YB", c: "bg-[#C75B33]" },
  { i: "KM", c: "bg-[#B5532E]" },
  { i: "SA", c: "bg-[#4F7A4A]" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-[calc(78px+2rem)] pb-12 overflow-hidden isolate">
      {/* full-bleed image */}
      <Image
        src="/images/hero-full.webp"
        alt="La gamme Granola Ya Salame — granola artisanal marocain"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] md:object-center -z-20"
      />
      {/* desktop scrim (left) */}
      <div className="hidden md:block absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(250,246,238,.94)_0%,rgba(250,246,238,.7)_36%,rgba(250,246,238,.15)_58%,rgba(250,246,238,0)_75%)]" />
      {/* mobile scrim (top→bottom) */}
      <div className="md:hidden absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(250,246,238,.92)_0%,rgba(250,246,238,.72)_45%,rgba(250,246,238,.55)_100%)]" />

      <div className="container-x">
        <Reveal className="max-w-[600px]">
          <span className="inline-flex items-center gap-2 bg-white/70 border border-primary/25 text-primary font-semibold text-[.88rem] px-[1.1rem] py-2 rounded-full mb-5 backdrop-blur-[4px]">
            🌿 100% Naturel · Fait Main à Casablanca
          </span>
          <h1 className="text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.03] text-ink">
            Le granola qui <span className="text-accent italic">change ton matin</span>
          </h1>
          <p className="font-accent text-[clamp(1.5rem,3vw,2.1rem)] text-secondary mt-2 font-bold">
            Le plaisir sain, chaque jour 🇲🇦
          </p>
          <p className="text-[1.15rem] text-muted max-w-[33rem] my-[1.3rem]">
            Granola artisanal marocain — sans sucre raffiné, sans conservateurs, plein de fruits secs croustillants. Mdarbi b yddik, b qalbi.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <Btn href="/commander" variant="whatsapp" size="lg">Commander maintenant</Btn>
            <Btn href="/nos-saveurs" variant="ghost" size="lg">Voir nos saveurs ↓</Btn>
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
  );
}
