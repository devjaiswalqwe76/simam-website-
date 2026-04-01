"use client";
import React from "react";
import { ArrowRight, Zap } from "lucide-react";
import { WHATSAPP_LINK } from "../../lib/constants";

const AboutLead = () => {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-20">

        {/* LEFT SIDE (Images + Cards) */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">

          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="rounded-3xl shadow-xl hover:scale-105 transition duration-500"
              alt="Team Work"
            />

            <div className="bg-gray-900 p-8 rounded-3xl text-white">
              <h4 className="font-black text-xl uppercase tracking-tighter">
                Growth Strategy
              </h4>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-red-600 p-8 rounded-3xl text-white">
              <Zap size={40} className="mb-4" />
              <h4 className="font-black text-xl uppercase tracking-tighter">
                Instant Results
              </h4>
            </div>

            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              className="rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              alt="Results"
            />
          </div>

        </div>

        {/* RIGHT SIDE (Content) */}
        <div className="lg:w-1/2 space-y-10">

          <h2 className="text-4xl lg:text-7xl font-black text-gray-900 leading-[0.9] uppercase tracking-tighter">
            Generate Leads <br />
            <span className="text-red-600 underline decoration-8 decoration-gray-200 underline-offset-8">
              Effortlessly
            </span>
          </h2>

          <div className="space-y-6 text-gray-600 text-xl font-medium leading-relaxed max-w-xl">
            <p>
              You've probably wondered at some point, "How can we enhance lead
              generation for our business?"
            </p>

            <p className="text-gray-900 font-black uppercase tracking-widest text-sm bg-gray-200 inline-block px-3 py-1">
              Worry no more because SIMAM has your back.
            </p>
          </div>
          <a 
            href={WHATSAPP_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gray-900 text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-red-600 transition-all shadow-2xl active:scale-95 group"
          >
            Contact Expert 
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        
        </div>
      </div>
    </section>
  );
};

export default AboutLead;