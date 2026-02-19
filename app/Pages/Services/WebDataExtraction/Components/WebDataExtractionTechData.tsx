import { IconType } from "react-icons";

import {
  SiApacheairflow,
  SiTensorflow,
  SiPytorch,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiTableau,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiSpacy,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

import { FaChartLine } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

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
  icon: IconType;
}

/* =========================
   CATEGORIES
========================= */

export const categories: Category[] = [
  { id: "automation", name: "Automation" },
  { id: "vision", name: "Computer Vision" },
  { id: "data", name: "Data Science" },
  { id: "ai", name: "Generative AI" },
  { id: "llm", name: "LLM" },
  { id: "language", name: "Language" },
  { id: "nlp", name: "NLP" },
  { id: "web", name: "Web Technology" },
];

/* =========================
   TECH LOGOS
========================= */

export const techLogos: Record<string, TechItem[]> = {
  automation: [
    { id: "1", name: "Apache Airflow", icon: SiApacheairflow },
    { id: "2", name: "Luigi", icon: TbBrandPython },
  ],

  vision: [
    { id: "3", name: "OpenCV", icon: SiOpencv },
    { id: "4", name: "Pillow", icon: TbBrandPython },
  ],

  data: [
    { id: "5", name: "TensorFlow", icon: SiTensorflow },
    { id: "6", name: "Tableau", icon: SiTableau },
    { id: "7", name: "ZenML", icon: GiArtificialIntelligence },
    { id: "8", name: "Seaborn", icon: FaChartLine },
    { id: "9", name: "Keras", icon: SiKeras },
    { id: "10", name: "PyTorch", icon: SiPytorch },
    { id: "11", name: "Pandas", icon: SiPandas },
    { id: "12", name: "NumPy", icon: SiNumpy },
    { id: "13", name: "Matplotlib", icon: FaChartLine },
  ],

  ai: [
    { id: "14", name: "OpenAI", icon: SiOpenai },
    { id: "15", name: "Hugging Face", icon: SiHuggingface },
  ],

  llm: [
    { id: "16", name: "LangChain", icon: SiLangchain },
    { id: "17", name: "Llama", icon: GiArtificialIntelligence },
  ],

  language: [
    { id: "18", name: "NLTK", icon: TbBrandPython },
    { id: "19", name: "SpaCy", icon: SiSpacy },
  ],

  nlp: [
    { id: "20", name: "Transformers", icon: GiArtificialIntelligence },
    { id: "21", name: "BERT", icon: GiArtificialIntelligence },
  ],

  web: [
    { id: "22", name: "React", icon: SiReact },
    { id: "23", name: "Node.js", icon: SiNodedotjs },
  ],
};

/* =========================
   DERIVED TYPES
========================= */

export type CategoryId = keyof typeof techLogos;