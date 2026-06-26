import Image from "next/image";
import Reveal from "./reveal";

export default function Story({ className = "py-24 bg-light scroll-mt-[78px]" }: { className?: string }) {
  return (
    <section id="story" className={className}>
      <div className="container-x grid md:grid-cols-[0.9fr_1.1fr] gap-14 md:gap-16 items-center">
        {/* Founder photo — placeholder, à remplacer par une vraie photo de Khadija */}
        <Reveal className="relative">
          <figure className="relative">
            <div className="relative aspect-[4/5] rounded-[34px] overflow-hidden shadow-[0_26px_64px_rgba(33,30,24,.18)]">
              <Image
                src="/images/pack-1.jfif"
                alt="Khadija, fondatrice de Granola Ya Salame, prépare le granola à la main à Casablanca"
                fill
                sizes="(max-width:768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute -bottom-5 left-4 right-8 bg-cream rounded-[18px] shadow-[0_12px_32px_rgba(33,30,24,.12)] px-5 py-3.5">
              <span className="font-accent text-[1.5rem] text-primary leading-none block">Khadija, fondatrice</span>
              <span className="text-[.92rem] text-muted">elle prépare chaque fournée à la main.</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={100}>
          <span className="font-accent text-primary text-[1.8rem] block leading-none mb-1.5">Notre histoire</span>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] mb-[1.1rem]">Tout a commencé dans ma cuisine</h2>

          <p className="text-muted text-[1.08rem] mb-4">
            Je m&apos;appelle Khadija. Avant Granola Ya Salame, je cherchais simplement un petit-déjeuner dont je n&apos;aurais pas à me méfier — quelque chose de sain pour mes enfants, mais qu&apos;ils auraient vraiment <em>envie</em> de manger. Dans les rayons, je ne trouvais que des céréales pleines de sucre raffiné et d&apos;ingrédients dont je n&apos;arrivais même pas à lire les noms.
          </p>
          <p className="text-muted text-[1.08rem] mb-4">
            Alors un matin, je me suis dit&nbsp;: et si je le faisais moi-même&nbsp;? J&apos;ai sorti mon four, de l&apos;avoine, du miel, quelques amandes. Mes premières fournées étaient… disons honnêtes&nbsp;: trop cuites, trop sucrées, parfois carrément ratées. Mais à chaque essai, j&apos;ajustais. Une cuillère de miel en moins, quelques minutes de cuisson en plus.
          </p>

          <p className="border-l-[3px] border-accent pl-4 text-ink italic mb-4">
            &ldquo;On ne fait pas du granola pour le vendre. On le fait comme on le ferait pour notre propre famille.&rdquo;
          </p>

          <p className="text-muted text-[1.08rem] mb-4">
            Le jour où j&apos;ai su que je tenais quelque chose, c&apos;est quand mes enfants ont commencé à réclamer &laquo;&nbsp;le granola de maman&nbsp;&raquo; chaque matin. Puis les voisines en ont voulu. Puis les amies des voisines. Je préparais des sachets le soir, sur ma table de cuisine, et je n&apos;arrivais plus à suivre.
          </p>
          <p className="text-muted text-[1.08rem] mb-5">
            Aujourd&apos;hui, ce petit granola fait à la main réveille des centaines de familles partout au Maroc. Et dans chaque fournée, je mets toujours la même chose&nbsp;: du temps, de bons ingrédients, et beaucoup d&apos;amour.
          </p>

          <p className="font-accent text-[2rem] text-primary">
            — Khadija
            <small className="block font-body not-italic text-[.9rem] text-muted">Fondatrice, Granola Ya Salame</small>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
