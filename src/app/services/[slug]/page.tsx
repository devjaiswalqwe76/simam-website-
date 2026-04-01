"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  Star,
} from "lucide-react";
import Link from "next/link";
import { CONTACT_NUMBER } from "../../../lib/constants";

//  Services Data
const serviceDetails: any = {
  "web-development": {
    title: "Web Development",
    tagline: "High-speed, SEO-friendly websites starting at budget price.",
    description:
      "Small business ho ya Startup, hum aapke liye mobile-responsive website banate hain jo Google par rank kare.",
    inr: "4,999",
    usd: "99",
    features: [
      "1-Page Portfolio",
      "Mobile Responsive",
      "Contact Form",
      "SSL Integration",
      "1 Year Support",
      "SEO Ready",
    ],
  },
  "app-development": {
    title: "App Development",
    tagline: "Your business in the pocket of your customers.",
    description:
      "Android Apps jo aapke business ki reach badhayenge aur customer retention improve karenge.",
    inr: "24,999",
    usd: "349",
    features: [
      "Android App (Webview)",
      "Play Store Submission",
      "Push Notifications",
      "Fast Performance",
      "Basic UI/UX",
    ],
  },
  "aadhar-pan": {
    title: "Aadhar & PAN Services",
    tagline: "Fast & Reliable Documentation Support.",
    description:
      "No more long queues. Hum handle karenge aapka paperwork minto mein.",
    inr: "249",
    usd: "19", // (ignored in UI)
    features: [
      "New Enrollment",
      "Mobile Number Update",
      "Name/Address Correction",
      "Instant PAN (2 Hours)",
      "Doorstep Pick-up",
    ],
  },
  "cyber-security": {
    title: "Cyber Security",
    tagline: "Protect your digital assets from hackers.",
    description:
      "Website audit aur malware removal services taaki aapka data safe rahe.",
    inr: "2,999",
    usd: "49",
    features: [
      "SSL Setup",
      "Malware Scan",
      "Database Backup",
      "Firewall Protection",
      "Security Audit",
    ],
  },
};

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug as string;

  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const data = serviceDetails[slug] || serviceDetails["web-development"];

  //  WhatsApp Order
  const handleOrder = () => {
    const price =
      slug === "aadhar-pan"
        ? `₹${data.inr}`
        : currency === "INR"
        ? `₹${data.inr}`
        : `$${data.usd}`;

    const msg = `Hi SIMAM, I want to order ${data.title} service. (Price: ${price})`;

    const url = `https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(
      msg
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12">

        {/*  HEADER */}
        <div className="max-w-4xl mb-16">
          <Link
            href="/#services"
            className="text-gray-400 flex items-center gap-2 mb-8 hover:text-red-600 transition font-bold uppercase text-xs"
          >
            <ArrowRight className="rotate-180" size={16} />
            Back to All Services
          </Link>

          <h1 className="text-5xl lg:text-8xl font-black text-gray-900 uppercase mb-6">
            {data.title} <span className="text-red-600 italic">Solutions</span>
          </h1>

          <p className="text-xl text-gray-500 italic max-w-2xl">
            {data.tagline}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* 🔹 LEFT */}
          <div className="lg:w-2/3 space-y-12">

            <div className="p-10 bg-gray-50 rounded-4xl">
              <h3 className="text-3xl font-black mb-6">
                Features & Benefits
              </h3>

              <p className="text-gray-600 mb-8">{data.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                {data.features.map((f: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-red-600" size={20} />
                    <span className="font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Icons */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-2xl text-center">
                <Zap className="mx-auto text-red-600 mb-2" />
                <p className="text-xs font-bold uppercase">Instant Start</p>
              </div>

              <div className="p-6 border rounded-2xl text-center">
                <Shield className="mx-auto text-red-600 mb-2" />
                <p className="text-xs font-bold uppercase">Secure Process</p>
              </div>

              <div className="p-6 border rounded-2xl text-center">
                <Star className="mx-auto text-red-600 mb-2" />
                <p className="text-xs font-bold uppercase">Expert Support</p>
              </div>
            </div>
          </div>

          {/* 🔹 RIGHT (PRICING) */}
          <div className="lg:w-1/3 sticky top-32">
            <div className="bg-zinc-950 p-8 rounded-4xl text-white">

              {/*  CONDITION: Aadhar/PAN → Only India */}
              {slug !== "aadhar-pan" ? (
                <div className="flex bg-zinc-800 p-1 rounded-full mb-6">
                  <button
                    onClick={() => setCurrency("INR")}
                    className={`flex-1 py-2 rounded-full text-xs font-bold ${
                      currency === "INR"
                        ? "bg-red-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    ₹ INR
                  </button>

                  <button
                    onClick={() => setCurrency("USD")}
                    className={`flex-1 py-2 rounded-full text-xs font-bold ${
                      currency === "USD"
                        ? "bg-red-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    $ USD
                  </button>
                </div>
              ) : (
                <div className="mb-6 text-center bg-red-600/10 py-3 rounded-xl border border-red-600/20">
                  <span className="text-red-600 text-[10px] font-black uppercase tracking-widest">
                    Available in India Only 🇮🇳
                  </span>
                </div>
              )}

              {/* 💰 PRICE */}
              <h2 className="text-5xl font-black mb-6">
                {slug === "aadhar-pan"
                  ? `₹${data.inr}`
                  : currency === "INR"
                  ? `₹${data.inr}`
                  : `$${data.usd}`}
              </h2>

              {/*  BUTTON */}
              <button
                onClick={handleOrder}
                className="w-full bg-red-600 py-4 rounded-xl font-black hover:bg-white hover:text-black transition flex items-center justify-center gap-2"
              >
                Order Now <ArrowRight size={18} />
              </button>

              <p className="text-center text-xs mt-6 text-gray-400">
                Govt Fees Extra • Trusted Service
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;