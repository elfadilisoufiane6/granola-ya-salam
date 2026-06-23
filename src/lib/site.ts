/**
 * Configuration centrale du site, alimentée par les variables d'environnement
 * (NEXT_PUBLIC_*, inlinées au build). Des valeurs par défaut sûres sont fournies,
 * donc l'app fonctionne même sans .env — voir .env.example.
 */
export const site = {
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "212620142004",
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+212 620-142004",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/granola_ya_salame",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/granolayasalame",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "granolayasalame@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://granolayasalame.ma",
  city: process.env.NEXT_PUBLIC_CITY || "Casablanca",
};

/** Construit un lien wa.me, avec message pré-rempli optionnel. */
export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappPhone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
