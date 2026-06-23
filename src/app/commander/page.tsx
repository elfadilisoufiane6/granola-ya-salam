import type { Metadata } from "next";
import { Suspense } from "react";
import OrderForm from "@/components/order-form";
import Faq from "@/components/faq";

export const metadata: Metadata = {
  title: "Commander",
  description:
    "Commandez votre granola Ya Salame en 2 minutes : nom, téléphone, ville et saveur. Confirmation sur WhatsApp, paiement à la livraison, livraison partout au Maroc en 24–48h.",
};

const steps = [
  { n: 1, t: "Choisis ta saveur", p: "Indique la saveur qui te fait envie." },
  { n: 2, t: "Laisse tes infos", p: "Nom, téléphone et ville — c'est tout." },
  { n: 3, t: "Reçois chez toi", p: "Livraison soignée en 24–48h partout au Maroc." },
];

export default function CommanderPage() {
  return (
    <>
      <section
        id="order"
        className="text-white relative overflow-hidden pt-[calc(78px+4rem)] pb-24 bg-[radial-gradient(60%_80%_at_12%_8%,rgba(226,148,78,.20),transparent_60%),linear-gradient(135deg,#2F6E57_0%,#235543_100%)]"
      >
        <div className="container-x">
          <div className="text-center max-w-[680px] mx-auto mb-[3.2rem]">
            <span className="font-accent text-accent text-[1.8rem] block leading-none mb-1.5">Passe ta commande</span>
            <h2 className="text-white text-[clamp(2rem,4.6vw,3.1rem)]">Commander, c&apos;est 2 minutes ⚡</h2>
            <p className="text-white/85 mt-3 text-[1.1rem]">Remplis le formulaire — ta commande part directement sur notre WhatsApp.</p>
          </div>

          <div className="grid md:grid-cols-[1fr_1.05fr] gap-12 items-start">
            <div>
              <div className="grid gap-5">
                {steps.map((s) => (
                  <div key={s.n} className="flex gap-4 items-start">
                    <div className="shrink-0 w-[46px] h-[46px] rounded-full bg-white/10 border-2 border-white/80 grid place-items-center font-display font-semibold text-[1.2rem]">
                      {s.n}
                    </div>
                    <div>
                      <h3 className="text-white text-[1.1rem] mb-0.5">{s.t}</h3>
                      <p className="text-white/80 text-[.94rem]">{s.p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2.5 mt-7 px-[1.1rem] py-2.5 rounded-full bg-white/10 border border-white/20">
                <span className="text-[#FFD27A] tracking-[2px]">★★★★★</span>
                <span className="text-[.92rem]"><b>4.9/5</b> · 800+ clients satisfaits</span>
              </div>
            </div>

            <Suspense fallback={<div className="bg-cream rounded-[34px] min-h-[420px]" />}>
              <OrderForm />
            </Suspense>
          </div>
        </div>
      </section>

      <Faq />
    </>
  );
}
