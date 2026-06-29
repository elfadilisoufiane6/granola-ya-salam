/** [format, prix actuel, ancien prix barré (optionnel)]. */
export type PriceRow = [string, string, string?];

export type Product = {
  slug: string;
  name: string;
  subtitle?: string;
  img: string;
  alt: string;
  /** Accroche courte (max ~10 mots). */
  tagline?: string;
  desc: string;
  /** Suggestions d'accord — affiché comme « Idéal avec … ». */
  idealWith?: string;
  /** Liste d'ingrédients, séparés par « · ». */
  ingredients?: string;
  /** Justification du prix (affichée pour le Premium). */
  priceNote?: string;
  badge: { text: string; bg: string } | null;
  prices: PriceRow[];
};

/** Garanties communes à toutes les saveurs. */
export const qualityPoints = [
  "Sans sucre raffiné",
  "Sans conservateurs",
  "Fait avec amour",
];

export const products: Product[] = [
  {
    slug: "premium",
    name: "Granola Premium",
    subtitle: "Fruits Secs & Graines",
    img: "/images/produit-2.png",
    alt: "Granola Premium aux amandes, noix de cajou, pistaches, noisettes et graines — Granola Ya Salame",
    tagline: "Quand le granola devient une expérience.",
    desc: "Notre fierté. Des ingrédients rares, triés un par un, et des saveurs complexes qui se révèlent à chaque bouchée. Croustillant jusqu'à la dernière cuillère — pour celles et ceux qui ne font aucun compromis sur la qualité.",
    idealWith: "yaourt grec, lait d'amande, fruits exotiques",
    ingredients: "Flocons d'avoine · Noix de cajou & pécan · Fruits secs premium · Miel naturel · Graines rares",
    priceNote: "240 DH le kilo, parce qu'il y a deux fois plus dedans : pistaches, noisettes et noix de cajou — les fruits secs les plus chers — plus cinq graines différentes. Vous ne payez pas une marque, vous payez ce que vous croquez.",
    badge: { text: "Premium", bg: "bg-secondary" },
    prices: [["250g", "65 DH", "79 DH"], ["500g", "120 DH", "145 DH"], ["750g", "185 DH", "219 DH"], ["1 Kg", "240 DH", "290 DH"]],
  },
  {
    slug: "miel",
    name: "Granola Miel & Cannelle",
    img: "/images/produit-1.png",
    alt: "Granola au miel naturel et cannelle avec amandes et raisins secs — Granola Ya Salame",
    tagline: "La douceur qui réchauffe.",
    desc: "Le miel qui caramélise doucement, la cannelle qui réchauffe de l'intérieur — une combinaison intemporelle qui sent bon le matin. Réconfortant, naturel, et irrésistiblement parfumé. Ça sent le petit-déj du dimanche chez mama, sauf que là, c'est sain.",
    idealWith: "yaourt nature, lait chaud, pomme râpée",
    ingredients: "Flocons d'avoine · Miel naturel · Cannelle pure · Amandes · Graines",
    badge: { text: "⭐ Best-seller", bg: "bg-primary" },
    prices: [["250g", "45 DH", "55 DH"], ["500g", "80 DH", "95 DH"], ["750g", "115 DH", "135 DH"], ["1 Kg", "150 DH", "179 DH"]],
  },
  {
    slug: "chocolat",
    name: "Granola Chocolat",
    img: "/images/produit-3.png",
    alt: "Granola au chocolat noir avec amandes et noix de cajou — Granola Ya Salame",
    tagline: "Pour les gourmands, sans culpabilité.",
    desc: "Un granola généreux et intense, avec de vrais éclats de cacao. Croquant à souhait, naturellement sucré, il transforme chaque petit-déjeuner en moment de plaisir. Juste le vrai goût du chocolat — personne ne devinera que c'est healthy.",
    idealWith: "yaourt nature, lait végétal, banane fraîche",
    ingredients: "Flocons d'avoine · Éclats de cacao · Fruits secs · Miel naturel · Graines",
    badge: null,
    prices: [["250g", "50 DH", "59 DH"], ["500g", "90 DH", "109 DH"], ["750g", "130 DH", "155 DH"], ["1 Kg", "165 DH", "195 DH"]],
  },
  {
    slug: "classique",
    name: "Granola Classique",
    img: "/images/produit-4.png",
    alt: "Granola classique avoine, amandes, noix, raisins secs et graines — Granola Ya Salame",
    tagline: "Le retour à l'essentiel.",
    desc: "Flocons dorés, graines croquantes, saveur authentique. Le Granola Classique, c'est la base parfaite — celle qui se marie avec tout et qui ne déçoit jamais. Simple, honnête, délicieux, et jamais trop sucré.",
    idealWith: "lait, yaourt, fruits rouges, miel",
    ingredients: "Flocons d'avoine · Noix & amandes · Graines de tournesol · Miel naturel · Noix de coco",
    badge: null,
    prices: [["250g", "45 DH", "55 DH"], ["500g", "80 DH", "95 DH"], ["750g", "115 DH", "135 DH"], ["1 Kg", "150 DH", "179 DH"]],
  },
];
