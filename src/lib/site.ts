/**
 * Configuration centrale du site, alimentée par les variables d'environnement
 * (NEXT_PUBLIC_*, inlinées au build). Des valeurs par défaut sûres sont fournies,
 * donc l'app fonctionne même sans .env — voir .env.example.
 */
export const site = {
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "212620142004",
  whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+212 620-142004",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/granola_ya_salame/",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/profile.php?id=61588802024962",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "granolayasalame@gmail.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://granolayasalame.com",
  city: process.env.NEXT_PUBLIC_CITY || "Casablanca",
};

/** Construit un lien wa.me, avec message pré-rempli optionnel. */
export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsappPhone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
