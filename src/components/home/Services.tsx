"use client";
import React from "react";
import Link from "next/link";

import {
  Monitor,
  Smartphone,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Star,
} from "lucide-react";

const Services = () => {
  const stats = [
    { label: "Google Rating", value: "4.9+", sub: "Trust & Quality" },
    { label: "Happy Clients", value: "10k+", sub: "Across India" },
    { label: "Digital Reach", value: "5M+", sub: "Brand Visibility" },
  ];

  const serviceList = [
    {
      title: "Web Development",
      slug: "web-development",
      desc: "Modern, fast and scalable websites using latest technologies.",
      icon: <Monitor size={40} />,
    },
    {
      title: "App Development",
      slug: "app-development",
      desc: "Android & iOS apps with smooth performance and UI.",
      icon: <Smartphone size={40} />,
    },
    {
      title: "Cyber Security",
      slug: "cyber-security",
      desc: "Protect your business with advanced security solutions.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "SEO & Marketing",
      slug: "seo-marketing",
      desc: "Boost your online visibility and grow your business.",
      icon: <TrendingUp size={40} />,
    },
    {
      title: "Govt Services",
      slug: "aadhar-pan",
      desc: "Aadhar, PAN, RC transfer and all documentation services.",
      icon: <ShieldCheck size={40} />,
    },
    {
      title: "Business Growth",
      slug: "business-growth",
      desc: "Complete digital solutions to scale your startup or company.",
      icon: <TrendingUp size={40} />,
    },
  ];

  return (
    <section id="services" className="bg-white">

      {/* 🔴 STATS SECTION */}
      <div className="bg-red-600 py-16 text-white shadow-2xl relative z-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${index !== 2 ? "md:border-r border-red-400" : ""} space-y-2`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="white" className="text-white" />
                ))}
              </div>

              <h2 className="text-5xl font-black tracking-tighter uppercase">
                {stat.value}
              </h2>

              <p className="uppercase tracking-widest text-xs font-black opacity-90">
                {stat.label}
              </p>

              <p className="text-[10px] uppercase font-bold text-red-200">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🧩 SERVICES GRID */}
      <div className="py-28 bg-gray-50/50">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-sm">
              Best Digital Solutions
            </h2>

            <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">
              Our Services
            </h1>

            <div className="h-2 w-24 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {serviceList.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-red-600/20 transition-all duration-500 text-center flex flex-col items-center"
              >
                {/* ICON */}
                <div className="w-24 h-24 bg-gray-50 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-500 leading-relaxed mb-10 font-medium">
                  {service.desc}
                </p>

                {/* LINK */}
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 font-black text-xs uppercase tracking-widest text-gray-900 group-hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600 pb-1"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;