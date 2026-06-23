import Link from "next/link";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-white">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.97.24 2.67.5.72.28 1.33.66 1.94 1.27.61.61.99 1.22 1.27 1.94.26.7.45 1.5.5 2.67.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.24 1.97-.5 2.67a5.4 5.4 0 0 1-1.27 1.94 5.4 5.4 0 0 1-1.94 1.27c-.7.26-1.5.45-2.67.5-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.97-.24-2.67-.5a5.4 5.4 0 0 1-1.94-1.27 5.4 5.4 0 0 1-1.27-1.94c-.26-.7-.45-1.5-.5-2.67C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.24-1.97.5-2.67.28-.72.66-1.33 1.27-1.94A5.4 5.4 0 0 1 5.98 1.2c.7-.26 1.5-.45 2.67-.5C9.95 2.2 10.35 2.2 12 2.2z" />
  </svg>
);
const FbIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-white">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-ink text-[#e9e1d3] pt-16 pb-7 relative z-[2]">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1.3fr] mb-10">
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Granola Ya Salame – accueil">
              <span className="inline-block bg-cream rounded-2xl px-4 py-3 shadow-[0_4px_14px_rgba(0,0,0,.25)]">
                <Image src="/images/logo.webp" alt="Granola Ya Salame" width={600} height={270} className="h-12 w-auto" />
              </span>
            </Link>
            <p className="text-[#b6ab98] max-w-[22rem] text-[.96rem]">
              Granola artisanal marocain, fait main à Casablanca. Healthy, naturel, sans conservateurs — pour des matins qui ont du goût.
            </p>
          </div>

          <div>
            <h4 className="font-body font-bold text-base mb-4 text-white">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { href: "/", label: "Accueil" },
                { href: "/nos-saveurs", label: "Nos saveurs" },
                { href: "/commander", label: "Commander" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-[#c4b9a6] text-[.95rem] hover:text-accent transition-colors">
                  {l.label}
                </Link>
              ))}
              <a href={site.instagramUrl} target="_blank" rel="noopener" className="text-[#c4b9a6] text-[.95rem] hover:text-accent transition-colors">
                Instagram
              </a>
            </nav>
          </div>

          <div>
            <h4 className="font-body font-bold text-base mb-4 text-white">Contact</h4>
            <ul className="flex flex-col gap-2.5 text-[#c4b9a6] text-[.95rem]">
              <li>📱 WhatsApp : <a href={waLink()} className="hover:text-accent">{site.whatsappDisplay}</a></li>
              <li>📧 <a href={`mailto:${site.email}`} className="hover:text-accent">{site.email}</a></li>
              <li>📍 {site.city}, Maroc</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href={site.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram" className="w-[42px] h-[42px] rounded-xl bg-white/[.08] grid place-items-center transition-all hover:bg-cta hover:-translate-y-0.5">
                <InstaIcon />
              </a>
              <a href={site.facebookUrl} target="_blank" rel="noopener" aria-label="Facebook" className="w-[42px] h-[42px] rounded-xl bg-white/[.08] grid place-items-center transition-all hover:bg-cta hover:-translate-y-0.5">
                <FbIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-[#9d9279] text-[.9rem]">
          © {new Date().getFullYear()} Granola Ya Salame · Fait avec ❤️ au Maroc
        </div>
      </div>
    </footer>
  );
}
