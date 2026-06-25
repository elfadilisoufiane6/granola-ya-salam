"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { btnClass } from "./btn";
import { waLink } from "@/lib/site";
import { products } from "@/lib/catalog";

type Row = [string, string];

const flavorOptions: { label: string; slug: string; prices: Row[] | null }[] = [
  ...products.map((p) => ({
    label: p.subtitle ? `${p.name} — ${p.subtitle}` : p.name,
    slug: p.slug,
    prices: p.prices,
  })),
  { label: "Pack découverte", slug: "pack", prices: null },
];

const genericGrammages: Row[] = [["250g", ""], ["500g", ""], ["750g", ""], ["1 Kg", ""]];

const field =
  "w-full px-4 py-3.5 rounded-xl border-[1.5px] border-ink/15 bg-white text-ink transition-[border-color,box-shadow] focus:outline-none focus:border-primary focus:ring-[3px] focus:ring-primary/15";

export default function OrderForm() {
  const sp = useSearchParams();
  const slug = sp.get("saveur") ?? "";
  const preLabel = flavorOptions.find((o) => o.slug === slug)?.label ?? "";

  const [flavorLabel, setFlavorLabel] = useState(preLabel);
  const selected = flavorOptions.find((o) => o.label === flavorLabel);
  const variantRows: Row[] = selected?.prices ?? genericGrammages;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const fd = new FormData(form);
    const v = (k: string) => (fd.get(k)?.toString() ?? "").trim();
    const msg =
      `Salam ! 🌿 Nouvelle commande Granola Ya Salame\n\n` +
      `👤 Nom : ${v("name")}\n` +
      `📱 Téléphone : ${v("phone")}\n` +
      `📍 Ville : ${v("city")}\n` +
      `🥣 Saveur : ${v("flavor")}\n` +
      `⚖️ Poids & prix : ${v("variant")}\n\n` +
      `Merci de me confirmer la disponibilité et le total. 🙏`;
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-cream text-ink rounded-[34px] px-[1.9rem] py-8 shadow-[0_26px_64px_rgba(33,30,24,.18)]">
      <h3 className="text-[1.4rem] mb-1.5">Votre commande</h3>
      <p className="text-muted text-[.92rem] mb-5">On vous recontacte sur WhatsApp pour confirmer.</p>

      <div className="mb-4">
        <label htmlFor="of-name" className="block font-semibold text-[.9rem] mb-1.5">Nom complet *</label>
        <input id="of-name" name="name" type="text" placeholder="Ex. Salma Benali" required className={field} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="of-phone" className="block font-semibold text-[.9rem] mb-1.5">Téléphone *</label>
          <input id="of-phone" name="phone" type="tel" inputMode="tel" placeholder="06 12 34 56 78" required className={field} />
        </div>
        <div>
          <label htmlFor="of-city" className="block font-semibold text-[.9rem] mb-1.5">Ville *</label>
          <input id="of-city" name="city" type="text" list="cities" placeholder="Casablanca" required className={field} />
          <datalist id="cities">
            {["Casablanca", "Rabat", "Marrakech", "Tanger", "Fès", "Agadir", "Meknès", "Oujda", "Kénitra", "Tétouan"].map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="of-flavor" className="block font-semibold text-[.9rem] mb-1.5">Saveur *</label>
        <select
          id="of-flavor"
          name="flavor"
          required
          value={flavorLabel}
          onChange={(e) => setFlavorLabel(e.target.value)}
          className={`${field} ${flavorLabel ? "border-primary ring-[3px] ring-primary/10" : ""}`}
        >
          <option value="" disabled>Choisir une saveur…</option>
          {flavorOptions.map((o) => (
            <option key={o.slug} value={o.label}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="mb-2">
        <label htmlFor="of-variant" className="block font-semibold text-[.9rem] mb-1.5">Poids &amp; prix *</label>
        <select id="of-variant" name="variant" required defaultValue="" key={flavorLabel} className={field}>
          <option value="" disabled>
            {selected?.prices ? "Choisir le poids…" : "Choisis d'abord une saveur"}
          </option>
          {variantRows.map(([g, p]) => (
            <option key={g} value={p ? `${g} — ${p}` : g}>
              {p ? `${g} — ${p}` : g}
            </option>
          ))}
        </select>
        {selected?.prices && (
          <p className="text-muted text-[.78rem] mt-1.5">Prix dégressifs : plus c&apos;est grand, plus c&apos;est avantageux 😉</p>
        )}
      </div>

      <button type="submit" className={btnClass("whatsapp", "lg", "w-full mt-3")}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.2-.6-.4zM12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2z" />
        </svg>
        Envoyer ma commande sur WhatsApp
      </button>
      <p className="text-center text-muted text-[.82rem] mt-3.5">🔒 Aucun paiement en ligne · Confirmation par WhatsApp</p>
    </form>
  );
}
