import Link from "next/link";
import Image from "next/image";
import { site, waLink } from "@/lib/site";

const InstaIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.97.24 2.67.5.72.28 1.33.66 1.94 1.27.61.61.99 1.22 1.27 1.94.26.7.45 1.5.5 2.67.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.24 1.97-.5 2.67a5.4 5.4 0 0 1-1.27 1.94 5.4 5.4 0 0 1-1.94 1.27c-.7.26-1.5.45-2.67.5-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.97-.24-2.67-.5a5.4 5.4 0 0 1-1.94-1.27 5.4 5.4 0 0 1-1.27-1.94c-.26-.7-.45-1.5-.5-2.67C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.24-1.97.5-2.67.28-.72.66-1.33 1.27-1.94A5.4 5.4 0 0 1 5.98 1.2c.7-.26 1.5-.45 2.67-.5C9.95 2.2 10.35 2.2 12 2.2zm0 1.98c-3.15 0-3.52.01-4.76.07-1.15.05-1.77.24-2.18.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.05 1.15.24 1.77.4 2.18.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c1.15-.05 1.77-.24 2.18-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.05-1.15-.24-1.77-.4-2.18a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.76-.07zm0 3.36a4.46 4.46 0 1 1 0 8.92 4.46 4.46 0 0 1 0-8.92zm0 7.36a2.9 2.9 0 1 0 0-5.8 2.9 2.9 0 0 0 0 5.8zm5.68-7.55a1.04 1.04 0 1 1-2.08 0 1.04 1.04 0 0 1 2.08 0z" />
  </svg>
);
const FbIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
  </svg>
);

const socials = [
  { label: "Instagram", href: site.instagramUrl, Icon: InstaIcon },
  { label: "Facebook", href: site.facebookUrl, Icon: FbIcon },
  { label: "WhatsApp", href: waLink(), Icon: WaIcon },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-[#e9e1d3] pt-16 pb-7 relative z-[2]">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1.3fr] mb-10">
          <div>
            <Link href="/" className="inline-block mb-4" aria-label="Granola Ya Salame – accueil">
              <Image src="/images/logo-light.webp" alt="Granola Ya Salame" width={600} height={270} className="h-12 w-auto" />
            </Link>
            <p className="text-[#b6ab98] max-w-[22rem] text-[.96rem]">
              Granola artisanal marocain, fait maison — sans conservateurs, sans sucre raffiné.
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
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  aria-label={label}
                  className="w-11 h-11 rounded-full grid place-items-center bg-white/10 border border-white/15 text-cream/90 transition-all duration-200 hover:bg-cta hover:border-cta hover:text-white hover:-translate-y-0.5 hover:scale-105"
                >
                  <Icon />
                </a>
              ))}
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
