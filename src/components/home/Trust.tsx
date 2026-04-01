"use client";
import React from "react";
import {
  ShieldCheck,
  Zap,
  Award,
  Globe,
  Users,
  Headphones,
} from "lucide-react";

const Trust = () => {
  // 
  const features = [
    {
      title: "Secure & Reliable",
      desc: "Advanced security systems to protect your business data and transactions at every level.",
      icon: <ShieldCheck size={36} />,
    },
    {
      title: "Fast Execution",
      desc: "Quick turnaround time with efficient workflows to deliver projects on time.",
      icon: <Zap size={36} />,
    },
    {
      title: "Proven Expertise",
      desc: "Years of experience delivering high-quality IT and documentation solutions.",
      icon: <Award size={36} />,
    },
    {
      title: "Global Reach",
      desc: "Serving clients across India and worldwide with scalable digital solutions.",
      icon: <Globe size={36} />,
    },
    {
      title: "Trusted by Clients",
      desc: "Hundreds of happy clients who trust us for consistent and quality service.",
      icon: <Users size={36} />,
    },
    {
      title: "24/7 Support",
      desc: "Dedicated support team ready to help you anytime with your queries.",
      icon: <Headphones size={36} />,
    },
  ];

  return (
    <section
      id="trust"
      className="bg-zinc-950 py-32 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* 🔥 HEADING */}
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-red-600 font-black uppercase tracking-[0.4em] text-sm italic">
            The SIMAM Advantage
          </h2>

          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
            Why Businesses <br />
            <span className="text-red-600 underline decoration-8 decoration-red-600/20 underline-offset-8">
              Trust Us.
            </span>
          </h1>

          <p className="text-zinc-500 text-lg lg:text-xl font-medium max-w-2xl mx-auto">
            We combine technology with trust to deliver seamless digital and
            documentation experiences.
          </p>
        </div>

        {/* 🧩 FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 bg-zinc-900/50 rounded-[3rem] border border-zinc-800 hover:border-red-600 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)]"
            >
              {/* ICON */}
              <div className="w-20 h-20 bg-zinc-800 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-red-600 transition-all duration-500 group-hover:rotate-6 shadow-xl">
                {React.cloneElement(feature.icon, {
                  className: "group-hover:text-white transition-colors",
                })}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight italic">
                {feature.title}
              </h3>

              {/* DESC */}
              <p className="text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-300 transition-colors">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 🚀 BOTTOM TRUST LINE */}
        <div className="mt-32 pt-16 border-t border-zinc-900 text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-zinc-100 opacity-60 leading-tight italic">
            Empowering Over{" "}
            <span className="text-red-600">250+ Business</span> <br />
            Across India & Globally with Reliable Solutions.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Trust;