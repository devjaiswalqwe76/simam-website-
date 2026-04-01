"use client";
import React from "react";
import { ExternalLink, Globe2 } from "lucide-react";
import Link from "next/link";

const Portfolio = () => {
  
  const projects = [
    {
      name: "Smart E-Commerce Dashboard",
      tag: "Web Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "/case-study/ecommerce",
    },
    {
      name: "SaaS Management Tool",
      tag: "App Development",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      link: "/case-study/saas",
    },
    {
      id: "fintech",
      name: "FinTech Mobile App",
      tag: "App Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
      link: "/case-study/fintech",
    },
  ];

  return (
    <section id="portfolio" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">

        {/* 🔥 HEADING */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-red-600 font-black uppercase tracking-[0.4em] text-sm">
            Our Recent Work
          </h2>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
            Trusted By{" "}
            <span className="text-red-600 underline decoration-8 decoration-gray-100 underline-offset-8">
              500+ Clients
            </span>
          </h1>

          <div className="h-2 w-32 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col space-y-8 animate-in fade-in zoom-in duration-700"
            >

              {/*  IMAGE CLICKABLE */}
              <Link href={project.link}>
                <div className="relative aspect-4/3 cursor-pointer rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-50 bg-gray-100 group-hover:border-red-50 transition-all duration-500">

                  <img
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-[2px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-600 shadow-2xl transform translate-y-10 group-hover:translate-y-0 transition duration-500">
                      <ExternalLink size={24} />
                    </div>
                  </div>

                  {/* TAG */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md text-red-600 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {project.tag}
                    </span>
                  </div>
                </div>
              </Link>

              {/*  TITLE CLICKABLE */}
              <div className="text-center space-y-2">
                <Link
                  href={project.link}
                  className="text-2xl font-black text-gray-900 hover:text-red-600 transition flex items-center justify-center gap-2 tracking-tight"
                >
                  <Globe2 size={20} className="text-red-600" />
                  {project.name}
                </Link>

                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                  Case Study • 2026
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* 🔘 BUTTON */}
        <div className="mt-24 text-center">
          <button className="bg-gray-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-red-600 transition-all shadow-2xl active:scale-95">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;