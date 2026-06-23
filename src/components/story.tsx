import Image from "next/image";
import Reveal from "./reveal";

export default function Story() {
  return (
    <section id="story" className="py-24 bg-light scroll-mt-[78px]">
      <div className="container-x grid md:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
        <Reveal className="relative">
          <div className="relative aspect-square rounded-[34px] overflow-hidden shadow-[0_26px_64px_rgba(33,30,24,.18)]">
            <Image src="/images/produit-2-b.webp" alt="Granola Ya Salame, fait main à Casablanca" fill sizes="(max-width:768px) 90vw, 40vw" className="object-cover" />
          </div>
          <span className="absolute -bottom-4 -left-4 bg-cream rounded-[18px] shadow-[0_12px_32px_rgba(33,30,24,.10)] px-5 py-3.5 font-accent text-[1.5rem] text-primary">
            depuis 2023 ✦
          </span>
        </Reveal>

        <Reveal delay={100}>
          <span className="font-accent text-primary text-[1.8rem] block leading-none mb-1.5">Notre histoire</span>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] mb-[1.1rem]">Une marque née dans une vraie cuisine</h2>
          <p className="text-muted text-[1.08rem] mb-4">
            Granola Ya Salame est née d&apos;une obsession simple : manger sain sans sacrifier le goût. On a commencé dans notre cuisine à Casablanca, en testant, en ratant, en recommençant — jusqu&apos;au granola parfait.
          </p>
          <p className="border-l-[3px] border-accent pl-4 text-ink italic mb-4">
            &ldquo;On ne fait pas du granola pour le vendre. On le fait comme on le ferait pour notre propre famille.&rdquo;
          </p>
          <p className="text-muted text-[1.08rem] mb-4">
            Aujourd&apos;hui, des centaines de familles marocaines commencent leur journée avec nous. Et ça, ça n&apos;a pas de prix.
          </p>
          <p className="font-accent text-[2rem] text-primary">
            — Salma
            <small className="block font-body not-italic text-[.9rem] text-muted">Fondatrice, Granola Ya Salame</small>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
