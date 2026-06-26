import Image from "next/image";
import Link from "next/link";
import Reveal from "./reveal";

export default function FounderTeaser() {
  return (
    <section className="py-16 bg-light">
      <div className="container-x">
        <Reveal className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left max-w-[760px] mx-auto">
          <div className="relative w-[120px] h-[120px] shrink-0 rounded-full overflow-hidden ring-4 ring-cream shadow-[0_12px_30px_-8px_rgba(33,30,24,.25)]">
            <Image
              src="/images/pack-1.jfif"
              alt="Khadija, fondatrice de Granola Ya Salame, prépare le granola à la main dans sa cuisine à Casablanca"
              fill
              sizes="120px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-accent text-primary text-[1.4rem] leading-none mb-1">Fait main, avec amour</p>
            <p className="text-[1.3rem] text-ink leading-snug">
              Fabriqué par Khadija, dans sa cuisine à Casablanca.
            </p>
            <Link
              href="/notre-histoire"
              className="inline-flex items-center gap-1.5 mt-3 font-semibold text-secondary hover:text-cta transition-colors"
            >
              Découvrir notre histoire →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
