/* =========================
   TYPES
========================= */

export interface Category {
  id: string;
  name: string;
}

export interface TechItem {
  id: string;
  name: string;
  logo: string;
}

/* =========================
   CATEGORIES
========================= */

export const categories: Category[] = [
  { id: "ecommerce", name: "Ecommerce" },
  { id: "carparts", name: "Car Parts" },
  { id: "liquor", name: "Liquor" },
  { id: "airport", name: "Airport Transfer" },
  { id: "carrental", name: "Car Rental" },
  { id: "travelling", name: "Travelling" },
  { id: "esim", name: "ESim" },
  { id: "restaurant", name: "Restaurant" },
  { id: "movies", name: "Movies" },
];

/* =========================
   TECH LOGOS
========================= */

export const techLogos: Record<string, TechItem[]> = {
  ecommerce: [
    { id: "1", name: "Ajio (India)", logo: "/web-data-extraction-logos/ajio.jpg" },
    { id: "2", name: "Allegro (Poland)", logo: "/web-data-extraction-logos/allegro.png" },
    { id: "3", name: "Amazon (India)", logo: "/web-data-extraction-logos/amazon.png" },
    { id: "4", name: "ASDA (UK)", logo: "/web-data-extraction-logos/asda.jpg" },
    { id: "5", name: "BigBasket (India)", logo: "/web-data-extraction-logos/bigbasket.png" },
    { id: "6", name: "Blinkit (India)", logo: "/web-data-extraction-logos/blinkit.png" },
    { id: "7", name: "Zepto (India)", logo: "/web-data-extraction-logos/zepto.png" },
    { id: "8", name: "Swiggy Instamart (India)", logo: "/web-data-extraction-logos/swiggy-instamart.png" },
    { id: "9", name: "UberEats (Multiple)", logo: "/web-data-extraction-logos/ubereats.png" },
    { id: "10", name: "FairPrice (Singapore)", logo: "/web-data-extraction-logos/fairprice.jpg" },
    { id: "11", name: "Flipkart (India)", logo: "/web-data-extraction-logos/flipkart.png" },
    { id: "12", name: "Myntra (India)", logo: "/web-data-extraction-logos/myntra.jpg" },
    { id: "13", name: "Plein (Netherlands)", logo: "/web-data-extraction-logos/plein.png" },
    { id: "14", name: "Target (US)", logo: "/web-data-extraction-logos/target.png" },
  ],

  carparts: [
    { id: "15", name: "AutoDoc (UK)", logo: "/web-data-extraction-logos/autodoc.png" },
  ],

  liquor: [
    { id: "16", name: "BWS (Germany)", logo: "/web-data-extraction-logos/bws.png" },
    { id: "17", name: "Danmurphys (Australia)", logo: "/web-data-extraction-logos/dan-murphys.png" },
    { id: "18", name: "Liquorland (Australia)", logo: "/web-data-extraction-logos/liquorland.png" },
    { id: "19", name: "Waitrose (UK)", logo: "/web-data-extraction-logos/waitrose.png" },
    { id: "20", name: "Costco (UK)", logo: "/web-data-extraction-logos/costco.jpg" },
    { id: "21", name: "Norman Good Fellows (South Africa)", logo: "/web-data-extraction-logos/norman-goodfellows.png" },
  ],

  airport: [
    { id: "22", name: "Klook Airport Transfer (Middle East)", logo: "/web-data-extraction-logos/klook.png" },
  ],

  carrental: [
    { id: "23", name: "Klook Car Rental (Middle East)", logo: "/web-data-extraction-logos/klook.png" },
    { id: "24", name: "Avis (US)", logo: "/web-data-extraction-logos/avis.png" },
  ],

  travelling: [
    { id: "25", name: "Klook Cruise (Middle East)", logo: "/web-data-extraction-logos/klook.png" },
    { id: "27", name: "Google Flight (India)", logo: "/web-data-extraction-logos/google-flights.png" },
    { id: "28", name: "Booking (Multiple Country)", logo: "/web-data-extraction-logos/booking.png" },
  ],

  esim: [
    { id: "26", name: "Klook ESim (Middle East)", logo: "/web-data-extraction-logos/klook.png" },
  ],

  restaurant: [
    { id: "29", name: "Zomato (India)", logo: "/web-data-extraction-logos/zomato.png" },
    { id: "30", name: "GoFood (Indonesia)", logo: "/web-data-extraction-logos/gofood.png" },
  ],

  movies: [
    { id: "31", name: "IMDb (USA)", logo: "/web-data-extraction-logos/imdb.jpg" },
  ],
};

/* =========================
   DERIVED TYPES
========================= */

export type CategoryId = keyof typeof techLogos;
