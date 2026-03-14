import { LucideIcon } from "lucide-react";
import {
  Code,
  Smartphone,
  Database,
  Workflow,
  Cloud,
  ShieldCheck,
} from "lucide-react";

export interface CustomSoftwareServicesMenu {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: CustomSoftwareServicesMenu[] = [
  {
    id: 1,
    title: "Custom Web Application Development",
    description:
      "We build scalable and secure web applications tailored to your business needs. From enterprise portals to SaaS platforms, our solutions are optimized for performance, user experience, and long-term growth.",
    icon: Code,
  },
  {
    id: 2,
    title: "Custom Mobile App Development",
    description:
      "Design and develop high-performance Android and iOS applications that deliver seamless user experiences. We create mobile solutions aligned with your business objectives and digital strategy.",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Enterprise Software Solutions",
    description:
      "Develop robust enterprise-grade software to streamline operations, improve productivity, and enhance business workflows. Our solutions are built for scalability and long-term reliability.",
    icon: Database,
  },
  {
    id: 4,
    title: "Business Process Automation",
    description:
      "Automate repetitive tasks and complex workflows with intelligent software systems. Reduce operational costs, eliminate manual errors, and improve efficiency across departments.",
    icon: Workflow,
  },
  {
    id: 5,
    title: "Cloud-Based Software Development",
    description:
      "Leverage cloud technologies to build secure, scalable, and high-availability applications. We develop cloud-native solutions that ensure flexibility and future-ready infrastructure.",
    icon: Cloud,
  },
  {
    id: 6,
    title: "Software Maintenance & Security",
    description:
      "Ensure long-term performance and protection of your applications with continuous monitoring, updates, and security enhancements. We provide proactive support to keep your software reliable and secure.",
    icon: ShieldCheck,
  },
];

export default services;