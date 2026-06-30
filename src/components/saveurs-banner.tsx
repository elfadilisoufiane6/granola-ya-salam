import Reveal from "./reveal";

/**
 * Bandeau parallax sous les produits (page Nos saveurs).
 * Photo lifestyle famille — titre court ancré en bas pour ne pas masquer la scène.
 * Parallax via bg-fixed (desktop) ; bg-scroll sur mobile (fixed saccadé sur iOS).
 */
export default function SaveursBanner() {
  return (
    <section className="relative min-h-[62vh] flex items-end overflow-hidden bg-[url('/images/hero-nos-saveurs.png')] bg-cover bg-center bg-scroll md:bg-fixed">
      {/* dégradé bas → laisse la scène visible, rend le titre lisible */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] bg-[linear-gradient(0deg,rgba(34,21,10,.72)_0%,rgba(34,21,10,.34)_45%,rgba(34,21,10,0)_100%)]" />
      <Reveal className="relative container-x pb-10 md:pb-14">
        <span className="font-accent text-accent text-[1.5rem] md:text-[1.8rem] block leading-none mb-1.5 drop-shadow-[0_1px_8px_rgba(0,0,0,.4)]">
          Fait avec amour 🇲🇦
        </span>
        <h2 className="text-white text-[clamp(1.7rem,4vw,3rem)] leading-tight max-w-[18ch] drop-shadow-[0_2px_12px_rgba(0,0,0,.45)]">
          Un bon matin, ça se partage en famille.
        </h2>
      </Reveal>
    </section>
  );
}
