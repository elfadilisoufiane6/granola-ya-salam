import Link from "next/link";

export default function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="pt-[calc(78px+3.5rem)] pb-14 text-center bg-[radial-gradient(60%_60%_at_85%_0%,rgba(226,148,78,.16),transparent_70%),radial-gradient(50%_50%_at_5%_100%,rgba(47,110,87,.12),transparent_70%),#F1EAD9]">
      <div className="container-x">
        <p className="text-[.85rem] text-muted mb-2.5">
          <Link href="/" className="hover:text-primary">Accueil</Link> · {title}
        </p>
        <h1 className="text-[clamp(2.2rem,5vw,3.4rem)]">{title}</h1>
        {sub && <p className="text-muted text-[1.1rem] mt-3 mx-auto max-w-[40rem]">{sub}</p>}
      </div>
    </section>
  );
}
