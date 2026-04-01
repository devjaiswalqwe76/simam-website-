"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle2 } from "lucide-react";
import { CONTACT_NUMBER } from "../../lib/constants";

const Hero = () => {

  // ✅ Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Interested Service?",
    message: "",
  });

  // ✅ Handle Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ WhatsApp Submit
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.phone) {
      alert("Please fill Name & Phone");
      return;
    }

    const message = `New Inquiry from SIMAM Website

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}`;

    const url = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white pt-28 pb-20 overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-red-50 rounded-full blur-[100px] -z-10 opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* 🔹 LEFT */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 text-red-600 rounded-full text-xs font-black uppercase">
            <CheckCircle2 size={16} /> #1 Digital Partner
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase">
            Build Your <span className="text-blue-900">Software</span> & Manage{" "}
            <span className="text-red-600">Documents</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Web, App Development & Govt Services – all in one place.
          </p>

          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="/it-solutions">
              <button className="bg-blue-900 text-white px-8 py-4 rounded-full font-black text-sm hover:bg-blue-800">
                IT Solutions
              </button>
            </Link>

            <Link href="/govt-services">
              <button className="border-2 border-gray-900 px-8 py-4 rounded-full font-black text-sm hover:bg-gray-900 hover:text-white">
                Govt Services
              </button>
            </Link>
          </div>
        </div>

        {/* 🔹 RIGHT FORM */}
        <div className="lg:w-5/12 w-full max-w-md">
          <div className="bg-white p-8 rounded-4xl shadow-2xl relative">

            <div className="absolute -top-5 -right-5 bg-red-600 text-white text-xs px-3 py-2 rounded-full font-black">
              Book Now
            </div>

            <h3 className="text-2xl font-black mb-2">Free Consultation</h3>
            <p className="text-gray-500 mb-6 text-sm">Talk to our experts</p>

            {/* ✅ IMPORTANT: form onSubmit */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 rounded-xl"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 rounded-xl"
                required
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 rounded-xl"
              >
                <option>Interested Service?</option>
                <option>Website/App Development</option>
                <option>Software Solutions</option>
                <option>Aadhar/PAN Services</option>
                <option>Business Documentation</option>
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 bg-gray-50 rounded-xl"
              />

              {/*  */}
              {/* ✅ button use kiya */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 hover:bg-red-700 transition-all"
              >
                Send Request <Send size={18} />
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;