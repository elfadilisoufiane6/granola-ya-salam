import type { Metadata } from "next";
import Story from "@/components/story";
import Faq from "@/components/faq";
import CtaBand from "@/components/cta-band";
import Btn from "@/components/btn";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "L'histoire de Granola Ya Salame — une marque marocaine née dans une vraie cuisine, fait maison, sans conservateurs ni sucre raffiné.",
};

export default function NotreHistoirePage() {
  return (
    <>
      <Story className="pt-[calc(78px+3.5rem)] pb-24 bg-light scroll-mt-[78px]" />
      <Faq />
      <CtaBand
        title="Envie de goûter notre granola ?"
        sub="Fait maison, livré chez toi en 24–48h partout au Maroc."
      >
        <Btn href="/commander" variant="light" size="lg">Commander maintenant 🛒</Btn>
        <Btn href="/nos-saveurs" variant="ghost" size="lg" className="text-white! border-white/50! hover:border-white! hover:text-accent!">
          Voir nos saveurs
        </Btn>
      </CtaBand>
    </>
  );
}
