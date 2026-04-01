"use client";
import React from "react";
import { useParams } from "next/navigation";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CaseStudyPage = () => {
  const params = useParams();
  const id = params.id;

  // Project Data 
  const projectData: any = {
    ecommerce: {
      title: "Smart E-Commerce Dashboard",
      client: "Retail Giant Concept",
      problem:
        "Traditional retailers struggle with real-time inventory tracking and customer insights.",
      solution:
        "A high-speed Next.js dashboard with integrated AI for sales prediction and automated stock alerts.",
      features: [
        "Real-time Analytics",
        "AI Sales Forecast",
        "Multi-vendor Support",
      ],
      color: "blue",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    },

     
    fintech: {
      title: "FinTech Mobile App",
      client: "Secure Pay Solutions",
      problem:
        "Users needed a more secure and faster way to manage international money transfers.",
      solution:
        "A blockchain-powered mobile app with real-time currency conversion and biometric security.",
      features: [
        "Multi-currency Wallet",
        "Biometric Login",
        "Instant P2P Transfer",
      ],
      color: "red",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    },

    saas: {
      title: "SaaS Management Tool",
      client: "Startup Tech Demo",
      problem:
        "Teams find it difficult to manage multiple subscriptions and team productivity in one place.",
      solution:
        "A unified platform to track subscription costs, team tasks, and cloud resource usage.",
      features: [
        "Cost Analysis",
        "Project Kanban",
        "Cloud Integration",
      ],
      color: "zinc",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    },
  };

  const project = projectData[id as string] || projectData.ecommerce;

  // Colors
  const colorMap: any = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-600/5",
    },
    red: {
      text: "text-red-600",
      bg: "bg-red-600/5",
    },
    zinc: {
      text: "text-zinc-600",
      bg: "bg-zinc-600/5",
    },
  };

  const currentColor = colorMap[project.color];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">

        {/* 🔙 Back */}
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600 font-bold mb-10 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* 🔹 LEFT */}
          <div className="space-y-12">

            {/* Title */}
            <div>
              <span className={`${currentColor.text} font-black uppercase tracking-widest text-sm`}>
                Case Study
              </span>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight uppercase tracking-tighter mt-4">
                {project.title}
              </h1>
            </div>

            {/* Problem */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-3">
                The Challenge
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                {project.problem}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-3">
                Our Solution
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed italic">
                {project.solution}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-black text-gray-900 uppercase mb-6">
                Core Features
              </h3>

              <div className="space-y-3">
                {project.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 font-semibold">
                    <CheckCircle2 className={currentColor.text} size={22} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="bg-zinc-950 text-white px-12 py-5 rounded-full font-black uppercase text-sm hover:bg-red-600 transition-all shadow-xl">
              Get Similar Project
            </button>

          </div>

          {/* 🔹 RIGHT IMAGE */}
          <div className="relative">
            <div
              className={`absolute -inset-4 ${currentColor.bg} blur-3xl -z-10 rounded-full`}
            ></div>

            <div className="bg-gray-100 rounded-[3rem] p-4 border-8 border-gray-50 shadow-2xl overflow-hidden aspect-4/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-4xl"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;