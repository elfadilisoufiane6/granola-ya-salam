export type Product = {
  slug: string;
  name: string;
  subtitle?: string;
  img: string;
  alt: string;
  desc: string;
  badge: { text: string; bg: string } | null;
  prices: [string, string][];
};

export const products: Product[] = [
  {
    slug: "premium",
    name: "Granola Premium",
    subtitle: "Fruits Secs & Graines",
    img: "/images/produit-2-b.webp",
    alt: "Granola Premium fruits secs et graines",
    desc: "Avoine, amandes, noix, noix de cajou, pistaches, noisettes, graines de chia, lin et sésame, tournesol et graines de courge.",
    badge: { text: "Premium", bg: "bg-secondary" },
    prices: [["100g", "25 DH"], ["250g", "65 DH"], ["500g", "120 DH"], ["750g", "185 DH"], ["1 Kg", "240 DH"]],
  },
  {
    slug: "miel",
    name: "Granola Miel & Cannelle",
    img: "/images/produit-1-b.webp",
    alt: "Granola miel et cannelle",
    desc: "Avoine, miel naturel, cannelle, amandes et raisins secs.",
    badge: { text: "⭐ Best-seller", bg: "bg-primary" },
    prices: [["100g", "20 DH"], ["250g", "45 DH"], ["500g", "80 DH"], ["750g", "115 DH"], ["1 Kg", "150 DH"]],
  },
  {
    slug: "chocolat",
    name: "Granola Chocolat",
    img: "/images/produit-3-b.webp",
    alt: "Granola chocolat noir",
    desc: "Avoine, chocolat noir, amandes et noix de cajou.",
    badge: null,
    prices: [["100g", "22 DH"], ["250g", "50 DH"], ["500g", "90 DH"], ["750g", "130 DH"], ["1 Kg", "165 DH"]],
  },
  {
    slug: "classique",
    name: "Granola Classique",
    img: "/images/produit-4-b.webp",
    alt: "Granola classique",
    desc: "Avoine, amandes, noix, raisins secs et graines saines.",
    badge: null,
    prices: [["100g", "20 DH"], ["250g", "45 DH"], ["500g", "80 DH"], ["750g", "115 DH"], ["1 Kg", "150 DH"]],
  },
];
