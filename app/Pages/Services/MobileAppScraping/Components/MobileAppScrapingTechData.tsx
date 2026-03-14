import { IconType } from "react-icons";

import { TbBrandPython } from "react-icons/tb";

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
  { id: "cruise", name: "Cruise" },
  { id: "esim", name: "ESim" },
  { id: "flight", name: "Flight" },
  { id: "hotel", name: "Hotel" },
  { id: "restaurant", name: "Restaurant" },
  { id: "movies", name: "Movies" },
];

/* =========================
   TECH LOGOS
========================= */

export const techLogos: Record<string, TechItem[]> = {
  ecommerce: [
    { id: "1", name: "Ajio (India)" },
    { id: "2", name: "Allegro (Poland)" },
    { id: "3", name: "Amazon (India)" },
    { id: "4", name: "ASDA (UK)" },
    { id: "5", name: "BigBasket (India)" },
    { id: "6", name: "Blinkit (India)" },
    { id: "7", name: "Zepto (India)" },
    { id: "8", name: "Swiggy Instamart (India)" },
    { id: "9", name: "UberEats (Multiple)" },
    { id: "10", name: "FairPrice (Singapore)" },
    { id: "11", name: "Flipkart (India)" },
    { id: "12", name: "Myntra (India)" },
    { id: "13", name: "Plein (Netherlands)" },
    { id: "14", name: "Target (US)" },
  ],

  carparts: [
    { id: "15", name: "AutoDoc (UK)" },
  ],

  liquor: [
    { id: "16", name: "BWS (Germany)" },
    { id: "17", name: "Danmurphys (Australia)" },
    { id: "18", name: "Liquorland (Australia)" },
    { id: "19", name: "Waitrose (UK)" },
    { id: "20", name: "Costco (UK)" },
    { id: "21", name: "Norman Good Fellows (South Africa)" },
  ],

  airport: [
    { id: "22", name: "Klook Airport Transfer (Middle East)" },
  ],

  carrental: [
    { id: "23", name: "Klook Car Rental (Middle East)" },
    { id: "24", name: "Avis (US)" },
  ],

  cruise: [
    { id: "25", name: "Klook Cruise (Middle East)" },
  ],

  esim: [
    { id: "26", name: "Klook ESim (Middle East)" },
  ],

  flight: [
    { id: "27", name: "Google Flight (India)" },
  ],

  hotel: [
    { id: "28", name: "Booking (Multiple Country)" },
  ],

  restaurant: [
    { id: "29", name: "Zomato (India)" },
    { id: "30", name: "GoFood (Indonesia)" },
  ],

  movies: [
    { id: "31", name: "IMDb (USA)" },
  ],
};

/* =========================
   DERIVED TYPES
========================= */

export type CategoryId = keyof typeof techLogos;