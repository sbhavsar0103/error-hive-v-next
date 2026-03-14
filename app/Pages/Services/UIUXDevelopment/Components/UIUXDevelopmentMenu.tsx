import {
  PencilRuler,
  LayoutDashboard,
  Layout,
  Smartphone,
  TestTube,
  Users
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "User Research & UX Strategy",
    description:
      "We analyze user behavior, market trends, and business goals to create a strong UX strategy. Through user research, competitor analysis, and journey mapping, we design experiences that align with real user needs.",
    icon: Users,
  },
  {
    id: 2,
    title: "Wireframing & Information Architecture",
    description:
      "Our UI/UX designers build structured wireframes and information architecture to organize content and navigation effectively. This ensures users can easily find information and interact with your digital product.",
    icon: Layout,
  },
  {
    id: 3,
    title: "UI Design & Visual Interface Design",
    description:
      "We create modern, visually engaging user interfaces using consistent colors, typography, and UI components that strengthen brand identity while delivering intuitive user experiences.",
    icon: PencilRuler,
  },
  {
    id: 4,
    title: "Responsive Web & Mobile App Design",
    description:
      "Our UI/UX services include responsive design that delivers seamless experiences across desktops, tablets, and mobile devices, ensuring accessibility and usability on every screen size.",
    icon: Smartphone,
  },
  {
    id: 5,
    title: "Usability Testing & UX Optimization",
    description:
      "We conduct usability testing to identify friction points and improve product usability. Continuous UX improvements ensure higher engagement, better user satisfaction, and improved conversion rates.",
    icon: TestTube,
  },
  {
    id: 6,
    title: "Interactive Prototyping & Product Design",
    description:
      "Before development begins, we build interactive prototypes that simulate real user interactions. This allows businesses to validate ideas, refine features, and create high-quality digital products.",
    icon: LayoutDashboard,
  },
];

export default services;