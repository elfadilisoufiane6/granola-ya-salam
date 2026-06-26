"use client";

import { useEffect, useState } from "react";

/** Messages d'urgence — alternent chaque semaine (selon le n° de semaine ISO). */
const messages = [
  "⚡ Stock limité cette semaine",
  "🚚 Prochaine livraison : vendredi",
  "🔥 Fournée fraîche du moment — quantités limitées",
];

/** Numéro de semaine ISO 8601 (1–53). */
function isoWeek(d: Date) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil(((date.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
}

export default function UrgencyBadge({ className = "" }: { className?: string }) {
  // SSR + premier rendu client : message[0] (pas de mismatch d'hydratation).
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(isoWeek(new Date()) % messages.length);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-accent/15 text-secondary border border-accent/30 font-semibold text-[.82rem] px-3.5 py-1.5 rounded-full ${className}`}
    >
      {messages[idx]}
    </span>
  );
}
