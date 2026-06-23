import type { ReactNode } from "react";
import Reveal from "./reveal";

export default function CtaBand({
  title,
  sub,
  children,
}: {
  title: string;
  sub: string;
  children: ReactNode;
}) {
  return (
    <section className="py-[4.5rem] text-center text-white relative overflow-hidden bg-[radial-gradient(60%_80%_at_12%_8%,rgba(226,148,78,.20),transparent_60%),linear-gradient(135deg,#2F6E57_0%,#235543_100%)]">
      <div className="container-x">
        <Reveal>
          <h2 className="text-white text-[clamp(1.8rem,4vw,2.7rem)]">{title}</h2>
          <p className="text-white/90 mx-auto mt-3 mb-7 max-w-[36rem]">{sub}</p>
          <div className="flex gap-4 justify-center flex-wrap">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
