import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Products from "@/components/products";
import Why from "@/components/why";
import Faq from "@/components/faq";
import CtaBand from "@/components/cta-band";
import Btn from "@/components/btn";

export const metadata: Metadata = {
  title: "Nos saveurs",
  description:
    "Découvrez les 4 saveurs de granola artisanal Granola Ya Salame : Classique, Marocain (amlou), Chocolat-Noisettes et Tropical. Fait main à Casablanca, sans conservateur.",
};

export default function NosSaveursPage() {
  return (
    <>
      <PageHero
        title="Nos saveurs 🥣"
        sub="Quatre recettes faites main à Casablanca — croustillant, naturel, et plein de goût."
      />
      <Products showHeader={false} detailed />
      <Why />
      <Faq />
      <CtaBand
        title="Une saveur t'a tapé dans l'œil ?"
        sub="Passe commande en 2 minutes — livraison partout au Maroc en 24–48h."
      >
        <Btn href="/commander" variant="light" size="lg">Commander maintenant 🛒</Btn>
      </CtaBand>
    </>
  );
}
