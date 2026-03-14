import { Bot, FileText, Search, ScanText, FileCheck, Code } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Enterprise Software Strategy & Roadmapping",
    description:
      "We evaluate your current technology ecosystem and create a strategic roadmap for scalable digital transformation. Our consulting aligns software investments with long-term business goals, ensuring measurable ROI and operational efficiency.",
    icon: Bot,
  },
  {
    id: 2,
    title: "Custom ERP & CRM Implementation",
    description:
      "Design and implement tailored ERP and CRM systems that centralize operations, improve collaboration, and enhance data visibility across departments. We ensure seamless integration with your existing tools and workflows.",
    icon: FileText,
  },
  {
    id: 3,
    title: "Business Intelligence & Data Analytics",
    description:
      "Transform raw business data into actionable insights with advanced dashboards and reporting systems. We help leadership teams make faster, data-driven decisions with real-time analytics and performance tracking.",
    icon: Search,
  },
  {
    id: 4,
    title: "Workflow Automation & Process Optimization",
    description:
      "Reduce manual effort and eliminate inefficiencies by automating repetitive processes. From finance to HR to operations, we streamline workflows to increase productivity and reduce operational costs.",
    icon: ScanText,
  },
  {
    id: 5,
    title: "System Integration & Digital Modernization",
    description:
      "Integrate disconnected tools into a unified software ecosystem. We modernize legacy systems, improve data synchronization, and ensure secure, scalable infrastructure that supports business growth.",
    icon: FileCheck,
  },
  {
    id: 6,
    title: "Custom Business Application Development",
    description:
      "Build scalable, secure, and performance-driven business applications tailored to your unique operational needs. From internal management systems to SaaS platforms, we develop solutions that drive efficiency and competitive advantage.",
    icon: Code,
  },
];

export default services;