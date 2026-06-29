import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import Story from "@/components/story";
import Timeline from "@/components/timeline";
import Faq from "@/components/faq";
import CtaBand from "@/components/cta-band";
import Btn from "@/components/btn";

export const metadata: Metadata = {
  title: "Notre histoire",
  description:
    "L'histoire de Granola Ya Salame — fondée par Khaoula dans sa cuisine à Casablanca. Un granola fait main, sans conservateurs ni sucre raffiné, préparé comme pour sa propre famille.",
};

const extraFaq = [
  {
    q: "Livrez-vous partout au Maroc ?",
    a: "Oui, partout au Maroc 🇲🇦 De Tanger à Dakhla, on vous livre à domicile. Les grandes villes reçoivent souvent en 24–48h, le reste du pays en 2 à 3 jours ouvrables.",
  },
  {
    q: "Les quantités sont-elles limitées ?",
    a: "On prépare tout en petites fournées, à la main — donc oui, certaines saveurs partent vite et peuvent manquer quelques jours. Si c'est le cas, écrivez-nous sur WhatsApp : on vous prévient dès que la prochaine fournée sort du four.",
  },
  {
    q: "Puis-je commander pour offrir en cadeau ?",
    a: "Avec plaisir ❤️ On prépare de jolies box cadeaux et des packs découverte multi-saveurs, avec un petit mot si vous le souhaitez. Dites-le-nous dans le formulaire ou sur WhatsApp et on s'occupe de tout.",
  },
];

export default function NotreHistoirePage() {
  return (
    <>
      <PageHero
        title="Notre histoire"
        sub="Celle d'une maman de Casablanca qui voulait juste un bon petit-déjeuner pour ses enfants."
      />
      <Story className="py-24 bg-light scroll-mt-[78px]" />
      <Timeline />
      <Faq extra={extraFaq} />
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
