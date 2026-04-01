"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react'; // icons ke liye: npm install lucide-react
import { WHATSAPP_LINK } from "../../lib/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for professional look
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Our Institute', href: '/#trust' },
    { name: 'Our Projects', href: '/#portfolio' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-md py-5'
    }`}>
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* 1. Logo Section (Exactly like SIMAM branding) */}
        <Link href="/" className="text-3xl font-black tracking-tighter text-gray-900 group">
          SIMAM<span className="text-red-600 group-hover:text-blue-900 transition-colors">.</span>
        </Link>

        {/* 2. Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-red-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 3. CTA Button (Phone Number like PraharX) */}
        <div className="hidden lg:block">
          <a
            href={WHATSAPP_LINK}
            target='_blank'
            rel='noopener noreferrer'

            className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-900 transition-all shadow-lg shadow-red-600/20"
          >
            <Phone size={18} fill="white" />
            +91 9990756048
          </a>
        </div>

        {/* 4. Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 5. Mobile Menu Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
      }`}>
        <ul className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-lg font-bold uppercase text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t">
            <a 
            href={WHATSAPP_LINK}
            target='_blank'
            rel='noopener noreferrer'
             className="text-red-600 font-black text-xl tracking-wider">
              <Phone size={20} fill="white" />
              +91 9990756048
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;