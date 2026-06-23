import Btn from "./btn";
import Reveal from "./reveal";

/**
 * "Hero 2" — bandeau plein écran en bas du site, effet parallax.
 * Parallax via background-attachment: fixed (bg-fixed) sur desktop ;
 * bg-scroll sur mobile (le fixed est saccadé / non supporté sur iOS).
 */
export default function ParallaxBanner() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden bg-[url('/images/hero-2.webp')] bg-cover bg-center bg-scroll md:bg-fixed">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_50%_50%,rgba(250,246,238,.62),rgba(250,246,238,.18))]" />
      <Reveal className="relative container-x py-20">
        <span className="font-accent text-primary text-[2rem] block leading-none mb-2">Granola Ya Salame</span>
        <h2 className="text-[clamp(2rem,5vw,3.4rem)] text-ink mx-auto max-w-[16ch]">Que du bon, dans chaque bol.</h2>
        <p className="text-muted text-[1.1rem] mt-3 mb-7 mx-auto max-w-[34rem]">
          Avoine, amandes, miel, fruits secs — des ingrédients vrais, rien d&apos;autre.
        </p>
        <Btn href="/commander" variant="whatsapp" size="lg">Commander maintenant</Btn>
      </Reveal>
    </section>
  );
}
