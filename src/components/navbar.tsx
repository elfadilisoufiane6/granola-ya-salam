"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/nos-saveurs", label: "Nos saveurs" },
  { href: "/nos-saveurs#story", label: "Notre histoire" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label="Granola Ya Salame – accueil" className="flex items-center">
      <Image src="/images/logo.webp" alt="Granola Ya Salame" width={600} height={270} priority className="h-14 w-auto" />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBtn =
    "inline-flex items-center justify-center rounded-full bg-cta text-white font-semibold text-[.92rem] px-5 py-2.5 transition-colors hover:bg-cta-d";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] h-[78px] flex items-center transition-[background,box-shadow] duration-300 backdrop-blur-[10px] ${
        scrolled ? "bg-cream/95 shadow-[0_4px_14px_rgba(33,30,24,.06)]" : "bg-cream/80"
      }`}
    >
      <div className="container-x flex items-center justify-between">
        <Logo />

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-[1.9rem]" aria-label="Navigation principale">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[.97rem] font-medium text-ink transition-colors hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link href="/commander" className={navBtn}>Commander</Link>
        </nav>

        {/* burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-[110]"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block w-[26px] h-[2.5px] rounded bg-ink transition-transform ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
          <span className={`block w-[26px] h-[2.5px] rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[26px] h-[2.5px] rounded bg-ink transition-transform ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
        </button>

        {/* mobile drawer */}
        <nav
          className={`md:hidden fixed inset-y-0 right-0 w-[min(78%,320px)] bg-cream p-8 flex flex-col justify-center items-start gap-6 shadow-[-20px_0_60px_rgba(0,0,0,.12)] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Navigation mobile"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[1.15rem] font-medium text-ink hover:text-primary">
              {l.label}
            </Link>
          ))}
          <Link href="/commander" onClick={() => setOpen(false)} className={navBtn}>Commander</Link>
        </nav>
      </div>
    </header>
  );
}
