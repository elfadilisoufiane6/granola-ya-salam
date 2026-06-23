import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Stats from "@/components/stats";
import Products from "@/components/products";
import Testimonials from "@/components/testimonials";
import CtaBand from "@/components/cta-band";
import Btn from "@/components/btn";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Products />
      <Testimonials />
      <CtaBand
        title="Prête à goûter le meilleur granola du Maroc ?"
        sub="Commande en 2 minutes — on te livre chez toi en 24–48h."
      >
        <Btn href="/commander" variant="light" size="lg">Commander maintenant 🛒</Btn>
        <Btn href="/nos-saveurs" variant="ghost" size="lg" className="text-white! border-white/50! hover:border-white! hover:text-accent!">
          Découvrir nos saveurs
        </Btn>
      </CtaBand>
    </>
  );
}
