import Reveal from "./reveal";

export default function SectionHead({
  eyebrow,
  title,
  sub,
  eyebrowClassName = "text-primary",
  titleClassName = "text-ink",
  subClassName = "text-muted",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  subClassName?: string;
}) {
  return (
    <Reveal className="text-center max-w-[680px] mx-auto mb-[3.2rem]">
      <span className={`font-accent text-[1.8rem] block leading-none mb-1.5 ${eyebrowClassName}`}>
        {eyebrow}
      </span>
      <h2 className={`text-[clamp(2rem,4.6vw,3.1rem)] ${titleClassName}`}>{title}</h2>
      {sub && <p className={`mt-3 text-[1.1rem] ${subClassName}`}>{sub}</p>}
    </Reveal>
  );
}
