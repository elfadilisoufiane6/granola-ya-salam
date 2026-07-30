import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Stats from "@/components/stats";
import Products from "@/components/products";
import Delivery from "@/components/delivery";
import FounderTeaser from "@/components/founder-teaser";
import Testimonials from "@/components/testimonials";
import CtaBand from "@/components/cta-band";
import ParallaxBanner from "@/components/parallax-banner";
import Btn from "@/components/btn";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Products />
      <Delivery />
      <ParallaxBanner />
      <Testimonials />
      <FounderTeaser />
      <CtaBand
        title="Prête à goûter le meilleur granola du Maroc ?"
        sub="Commande en 2 minutes — la promesse de livraison 24h–48h."
      >
        <Btn href="/commander" variant="light" size="lg">Commander maintenant 🛒</Btn>
        <Btn href="/nos-saveurs" variant="ghost" size="lg" className="text-white! border-white/50! hover:border-white! hover:text-accent!">
          Découvrir nos saveurs
        </Btn>
      </CtaBand>
    </>
  );
}
