export type Product = {
  slug: string;
  name: string;
  subtitle?: string;
  img: string;
  alt: string;
  /** Accroche courte (max ~10 mots). */
  tagline?: string;
  desc: string;
  /** Tag "pour qui ?" */
  forWho?: string;
  /** Justification du prix (affichée pour le Premium). */
  priceNote?: string;
  badge: { text: string; bg: string } | null;
  prices: [string, string][];
};

export const products: Product[] = [
  {
    slug: "premium",
    name: "Granola Premium",
    subtitle: "Fruits Secs & Graines",
    img: "/images/produit-2.webp",
    alt: "Granola Premium aux amandes, noix de cajou, pistaches, noisettes et graines — Granola Ya Salame",
    tagline: "Tout ce qu'il y a de meilleur, dans un bol.",
    desc: "Onze ingrédients triés un par un : amandes, noix de cajou, pistaches, noisettes et une pluie de graines (chia, lin, sésame, courge). Croustillant à chaque cuillère, et ça tient jusqu'au déjeuner.",
    forWho: "Pour celles qui ne font aucun compromis.",
    priceNote: "240 DH le kilo, parce qu'il y a deux fois plus dedans : pistaches, noisettes et noix de cajou — les fruits secs les plus chers — plus cinq graines différentes. Vous ne payez pas une marque, vous payez ce que vous croquez.",
    badge: { text: "Premium", bg: "bg-secondary" },
    prices: [["250g", "65 DH"], ["500g", "120 DH"], ["750g", "185 DH"], ["1 Kg", "240 DH"]],
  },
  {
    slug: "miel",
    name: "Granola Miel & Cannelle",
    img: "/images/produit-1.webp",
    alt: "Granola au miel naturel et cannelle avec amandes et raisins secs — Granola Ya Salame",
    tagline: "Le chouchou de toute la famille.",
    desc: "Le parfum de la cannelle, la douceur du miel naturel, des amandes et des raisins moelleux. Ça sent le petit-déj du dimanche chez mama — sauf que là, c'est sain.",
    forWho: "Pour les gourmandes qui veulent se faire plaisir sans culpabiliser.",
    badge: { text: "⭐ Best-seller", bg: "bg-primary" },
    prices: [["250g", "45 DH"], ["500g", "80 DH"], ["750g", "115 DH"], ["1 Kg", "150 DH"]],
  },
  {
    slug: "chocolat",
    name: "Granola Chocolat",
    img: "/images/produit-3.webp",
    alt: "Granola au chocolat noir avec amandes et noix de cajou — Granola Ya Salame",
    tagline: "Le plaisir choco, version maligne.",
    desc: "Du vrai chocolat noir sur l'avoine dorée, des amandes et des noix de cajou. La gourmandise d'un dessert, l'énergie d'un petit-déj. Personne ne devinera que c'est healthy.",
    forWho: "Pour les accros au chocolat qui veulent rester clean.",
    badge: null,
    prices: [["250g", "50 DH"], ["500g", "90 DH"], ["750g", "130 DH"], ["1 Kg", "165 DH"]],
  },
  {
    slug: "classique",
    name: "Granola Classique",
    img: "/images/produit-4.webp",
    alt: "Granola classique avoine, amandes, noix, raisins secs et graines — Granola Ya Salame",
    tagline: "Le bon granola de tous les jours.",
    desc: "Avoine dorée, amandes, noix, raisins et graines. Simple, honnête, jamais trop sucré — celui qu'on ne se lasse jamais de retrouver le matin.",
    forWho: "Pour celles qui aiment les valeurs sûres.",
    badge: null,
    prices: [["250g", "45 DH"], ["500g", "80 DH"], ["750g", "115 DH"], ["1 Kg", "150 DH"]],
  },
];
