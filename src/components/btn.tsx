import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "whatsapp" | "primary" | "ghost" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full text-center transition-all duration-200 active:translate-y-px";

const variants: Record<Variant, string> = {
  whatsapp:
    "bg-cta text-white shadow-[0_8px_22px_rgba(199,91,51,.32)] hover:bg-cta-d hover:-translate-y-0.5",
  primary:
    "bg-primary text-white shadow-[0_8px_22px_rgba(47,110,87,.30)] hover:bg-primary-d hover:-translate-y-0.5",
  ghost:
    "border-[1.5px] border-ink/25 text-ink hover:border-primary hover:text-primary",
  light: "bg-white/95 text-ink hover:bg-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-7 py-[0.95rem] text-base min-h-[48px]",
  lg: "px-9 py-[1.1rem] text-[1.1rem] min-h-[56px]",
};

export function btnClass(variant: Variant = "whatsapp", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

export default function Btn({
  href,
  variant = "whatsapp",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const cls = btnClass(variant, size, className);
  const external = /^https?:\/\//.test(href);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
