"use client";

import { useState } from "react";
import SectionHead from "./section-head";

type Item = { q: string; a: string };

const items: Item[] = [
  { q: "Vos produits contiennent-ils du sucre ajouté ?", a: "Nous utilisons du miel naturel comme sucrant — jamais de sirops industriels." },
  { q: "Quel est le délai de livraison ?", a: "2 à 3 jours ouvrables partout au Maroc après confirmation. Les grandes villes sont souvent livrées en 24–48h." },
  { q: "Comment payer ma commande ?", a: "Paiement à la livraison (cash) ou par virement — on en discute simplement sur WhatsApp. Aucun paiement en ligne requis." },
  { q: "Comment conserver le granola ?", a: "Dans un bocal hermétique, à l'abri de l'humidité. Il reste croustillant environ 3 semaines — s'il survit aussi longtemps 😋" },
  { q: "Proposez-vous des packs ou cadeaux ?", a: "Oui ! Box cadeaux personnalisées et packs découverte multi-saveurs. Indiquez-le dans le formulaire ou sur WhatsApp." },
];

export default function Faq({ extra = [] }: { extra?: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const all = [...items, ...extra];

  return (
    <section id="faq" className="py-24">
      <div className="container-x">
        <SectionHead eyebrow="Vous vous demandez ?" title="Questions fréquentes" />
        <div className="max-w-[760px] mx-auto">
          {all.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`border rounded-[18px] mb-4 overflow-hidden bg-cream transition-[box-shadow,border-color] ${
                  isOpen ? "border-primary shadow-[0_4px_14px_rgba(33,30,24,.06)]" : "border-primary/15"
                }`}
              >
                <button
                  className="w-full text-left flex items-center justify-between gap-4 px-[1.4rem] py-5 font-semibold text-[1.05rem] text-ink"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {it.q}
                  <span className="relative w-[26px] h-[26px] shrink-0">
                    <span className="absolute top-1/2 left-1 right-1 h-[2.5px] -translate-y-1/2 rounded bg-primary" />
                    <span className={`absolute left-1/2 top-1 bottom-1 w-[2.5px] -translate-x-1/2 rounded bg-primary transition-[transform,opacity] duration-300 ${isOpen ? "scale-y-0 opacity-0" : ""}`} />
                  </span>
                </button>
                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-[1.4rem] pb-[1.3rem] text-muted">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
