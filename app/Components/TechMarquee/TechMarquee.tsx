"use client";

import React from "react";

/** ✅ Type definition */
interface Technology {
  name: string;
  img: string; // public URL path
}

const TechMarquee: React.FC = () => {
  const technologies: Technology[] = [
    { name: "React", img: "/SVG/React.svg" },
    { name: "Python", img: "/SVG/Python.svg" },
    { name: "JavaScript", img: "/SVG/JS.svg" },
    { name: "TypeScript", img: "/SVG/TS.svg" },
    { name: "Node.js", img: "/SVG/NodeJs.svg" },
    { name: "TensorFlow", img: "/SVG/TensorFlow.svg" },
    { name: "PyTorch", img: "/SVG/PyTorch.svg" },
    { name: "Docker", img: "/SVG/Docker.svg" },
    { name: "Kubernetes", img: "/SVG/Kubernetes.svg" },
    { name: "AWS", img: "/SVG/AWS.svg" },
    { name: "Azure", img: "/SVG/Azure.svg" },
    { name: "MongoDB", img: "/SVG/MongoDB.svg" },
    { name: "PostgreSQL", img: "/SVG/PostgresSQL.svg" },
    { name: "GraphQL", img: "/SVG/GraphQL.svg" },
    { name: "Next.js", img: "/SVG/Next.js.svg" },
    { name: "Vue.js", img: "/SVG/Vue.js.svg" },
  ];

  const allTechs: Technology[] = [...technologies, ...technologies];

  return (
    <section className="bg-[#060010] border-y border-amber-500/20 overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {allTechs.map((tech, index) => (
            <div
              key={index}
              className="tech-card inline-flex items-center justify-center mx-8 px-8 py-4 transition-all duration-300 group"
            >
              <div className="tech-icon">
                <img
                  src={tech.img}
                  alt={tech.name}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .tech-icon {
          width: 3rem;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tech-card {
          flex: 0 0 auto;
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;