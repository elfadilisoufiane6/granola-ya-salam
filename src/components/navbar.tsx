"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, waLink } from "@/lib/site";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/nos-saveurs", label: "Nos saveurs" },
  { href: "/notre-histoire", label: "Notre histoire" },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} aria-label="Granola Ya Salame – accueil" className="flex items-center">
      <Image src="/images/logo.webp" alt="Granola Ya Salame" width={600} height={270} priority className="h-14 w-auto" />
    </Link>
  );
}

function IgIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[1.15rem] h-[1.15rem]" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.3" cy="6.7" r=".6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.15rem] h-[1.15rem]" aria-hidden="true">
      <path d="M14 9h2.5l.5-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.2 15.7.1 14.6.1 12.2.1 10.6 1.5 10.6 4.2V6H8v3h2.6v9H14V9z" />
    </svg>
  );
}
function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1.2rem] h-[1.2rem]" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.1-.5 0-.7-.3-1.5-.7-2.1-1.6-.2-.3.2-.3.5-1 .1-.1 0-.3 0-.4 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.5 4 3.4.6.3 1 .4 1.4.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1 0-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBtn =
    "inline-flex items-center justify-center rounded-full bg-cta text-white font-semibold text-[.92rem] px-5 py-2.5 transition-colors hover:bg-cta-d";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] h-[78px] flex items-center transition-[background,box-shadow] duration-300 ${
        scrolled || open ? "bg-cream/90 backdrop-blur-[10px] shadow-[0_4px_14px_rgba(33,30,24,.06)]" : "bg-transparent"
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

        {/* burger (hidden while the drawer is open — the drawer has its own close button) */}
        <button
          className={`md:hidden flex-col gap-[5px] p-2 z-[120] ${open ? "hidden" : "flex"}`}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span className="block w-[26px] h-[2.5px] rounded bg-ink" />
          <span className="block w-[26px] h-[2.5px] rounded bg-ink" />
          <span className="block w-[26px] h-[2.5px] rounded bg-ink" />
        </button>
      </div>

      {/* ===== mobile menu ===== */}
      {/* backdrop */}
      <button
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[105] bg-ink/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* drawer */}
      <nav
        className={`md:hidden fixed inset-y-0 right-0 z-[110] w-[min(88%,360px)] bg-cream flex flex-col shadow-[-24px_0_70px_rgba(33,30,24,.18)] transition-transform duration-[350ms] ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Navigation mobile"
      >
        {/* drawer header */}
        <div className="flex items-center justify-between h-[78px] px-6 border-b border-ink/[.07]">
          <Logo onClick={() => setOpen(false)} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="grid place-items-center w-9 h-9 rounded-full text-ink/70 hover:text-ink hover:bg-ink/[.05] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-5 h-5" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* links */}
        <div className="flex-1 overflow-y-auto px-6 py-7">
          <ul className="flex flex-col">
            {links.map((l, i) => {
              const active = pathname === l.href;
              return (
                <li key={l.href} className="border-b border-ink/[.06]">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-3 py-4"
                  >
                    <span className="font-display text-[.8rem] text-accent/70 tabular-nums w-6">0{i + 1}</span>
                    <span className={`font-display text-[1.55rem] leading-none transition-colors ${active ? "text-primary" : "text-ink group-hover:text-primary"}`}>
                      {l.label}
                    </span>
                    {active && <span className="ml-auto self-center w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/commander"
            onClick={() => setOpen(false)}
            className="mt-8 flex items-center justify-center gap-2 w-full rounded-full bg-cta text-white font-semibold text-[1rem] py-3.5 shadow-[0_10px_24px_-8px_rgba(199,91,51,.6)] transition-colors hover:bg-cta-d"
          >
            🛒 Commander maintenant
          </Link>
        </div>

        {/* footer: contact + social */}
        <div className="px-6 py-6 border-t border-ink/[.07] bg-light/40">
          <p className="text-[.78rem] uppercase tracking-[.14em] text-muted/80 font-semibold mb-2">Suivez-nous</p>
          <div className="flex items-center gap-2.5">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="grid place-items-center w-10 h-10 rounded-full bg-wa text-white transition-transform hover:scale-105">
              <WaIcon />
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center w-10 h-10 rounded-full bg-white text-secondary ring-1 ring-ink/[.08] transition-transform hover:scale-105">
              <IgIcon />
            </a>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center w-10 h-10 rounded-full bg-white text-primary ring-1 ring-ink/[.08] transition-transform hover:scale-105">
              <FbIcon />
            </a>
          </div>
          <p className="mt-4 text-[.82rem] text-muted">
            <span className="block">📍 {site.city}, Maroc</span>
            <a href={waLink()} className="block mt-0.5 text-ink/80 hover:text-primary transition-colors">{site.whatsappDisplay}</a>
          </p>
        </div>
      </nav>
    </header>
  );
}
