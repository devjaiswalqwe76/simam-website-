"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServicesMainPage = () => {
  return (
    <main className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter mb-8">
          Our <span className="text-red-600">Services</span>
        </h1>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto mb-12 font-medium">
          Choose between our IT Solutions and Government Documentation services.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/it-solutions" className="bg-blue-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black transition-all">
            IT Solutions
          </Link>
          <Link href="/govt-services" className="bg-red-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black transition-all">
            Govt Services
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ServicesMainPage; // YE LINE SABSE ZAROORI HAI