"use client";
import React from "react";
import Link from "next/link";
import { WHATSAPP_LINK } from "../../lib/constants";

import {
  Mail,
  MapPin,
  Phone,
  Link2,
  Share2,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white">
      
      {/* 🔴 FLOATING CTA CARD */}
      <div className="container mx-auto px-6 lg:px-12 -mb-32 relative z-30">
        <div className="flex flex-col lg:flex-row bg-zinc-950 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] border border-zinc-800">
          
          {/* IMAGE */}
          <div className="lg:w-1/2 relative min-h-100">
            <img 
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="Discuss Project" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/60 to-zinc-950"></div>
          </div>

          {/* CONTENT */}
          <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-10 uppercase leading-none">
              Have any <span className="text-red-600 italic">project?</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-10">

              {/* ✅ WhatsApp Button */}
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-zinc-950 transition-all shadow-xl flex items-center gap-3 active:scale-95 group"
              >
                Submit Now 
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact */}
              <div className="text-left">
                <p className="text-[10px] uppercase text-zinc-500 tracking-widest font-black">
                  Call Us Directly
                </p>
                <span className="text-xl lg:text-2xl font-black">
                  +91 9990756048
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 🔵 MAIN FOOTER */}
      <div className="bg-zinc-950 pt-60 pb-12 text-zinc-400">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 border-b border-zinc-900 pb-20">
          
          {/* COMPANY */}
          <div className="space-y-8">
            <div className="text-4xl font-black text-white uppercase">
              SIMAM<span className="text-red-600">.</span>
            </div>

            <p className="text-sm leading-loose opacity-80">
              Your trusted partner for Software Development and Government Document services.
            </p>

            {/* SOCIAL (Using your icons) */}
            <div className="flex gap-4">
              {[Link2, Share2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-sm uppercase tracking-widest">
              Explore
            </h4>

            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link href="/#hero" className="hover:text-red-600">Home</Link></li>
              <li><Link href="/#about" className="hover:text-red-600">About</Link></li>
              <li><Link href="/#services" className="hover:text-red-600">Services</Link></li>
              <li><Link href="/#contact" className="hover:text-red-600">Contact</Link></li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-sm uppercase tracking-widest">
              Solutions
            </h4>

            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest">
              <li><Link href="/it-solutions" className="hover:text-red-600">Web Design</Link></li>
              <li><Link href="/it-solutions" className="hover:text-red-600">App Development</Link></li>
              <li><Link href="/govt-services" className="hover:text-red-600">Aadhar Services</Link></li>
              <li><Link href="/govt-services" className="hover:text-red-600">PAN Card</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-sm uppercase tracking-widest">
              Contact
            </h4>

            <ul className="space-y-6 text-sm font-bold">
              
              <li className="flex gap-4">
                <MapPin className="text-red-600" size={20} />
                <span>
                  Dwarka Sector 23 <br />
                  New Delhi 110077
                </span>
              </li>

              <li className="flex gap-4 items-center">
                <Mail className="text-red-600" size={20} />
                <a href="mailto:amritjaiswalqwe76@email.com" className="hover:text-white">
                  amritjaiswalqwe76@email.com
                </a>
              </li>

              <li className="flex gap-4 items-center">
                <Phone className="text-red-600" size={20} />
                <span>+91 9990756048</span>
              </li>

            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="container mx-auto px-6 text-center">
          <div className="bg-red-600 inline-block px-10 py-2 rounded-full text-white text-xs font-black uppercase tracking-widest">
            © 2026 SIMAM Technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;