"use client";
import React from "react";
import { FileCheck, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINK } from "../../lib/constants";
import { CONTACT_NUMBER } from "../../lib/constants";

const GovtServices = () => {
  // Govt Services Data
  
  const services = [
    {
      title: "Aadhar Services",
      list: ["New Aadhar", "Update Aadhar", "Mobile Link", "Address Change"],
    },
    {
      title: "Legal Services",
      list: [
      "Affidavit Making",
      "Notary Services",
      "Rental Agreement",
      "Name Change Process",
      "Court Documentation",
      "Legal सलाह & Consultation"
         ],
    },
    {
     title: "Financial Services",
     list: [
      "GST Registration",
      "GST Return Filing",
      "Income Tax Filing (ITR)",
      "Business Registration",
      "MSME Registration",
      "Loan Assistance"
     ],
     },
    {
     title: "Investment Services",
     list: [
      "Stock Market Account (Demat)",
      "Mutual Fund Investment",
      "SIP Setup",
      "Insurance Plans",
      "Retirement Planning",
      "Gold Investment"
        ],
    },
    {
      title: "PAN Card Services",
      list: ["New PAN", "PAN Correction", "Lost PAN Reprint"],
    },
    {
      title: "Voter ID Services",
      list: ["New Voter ID", "Correction", "Duplicate Voter ID"],
    },
    {
      title: "Passport Services",
      list: ["New Passport", "Renewal", "Tatkal Passport"],
    },
    {
      title: "Driving License Services",
      list: ["New License", "Renewal", "International Permit"],
    },
    {
      title: "Vehicle Services",
      list: ["RC Transfer", "Ownership Change", "Vehicle Loan", "Challan Payment"],
    },
    {
      title: "Business Documents",
      list: ["GST Registration", "MSME Udyam", "Shop License", "Trade License"],
    },
    {
      title: "Education Services",
      list: ["10th/12th Admission", "College Forms", "Scholarships", "Exam Results"],
    },
    {
      title: "Other Certificates",
      list: ["Income Certificate", "Domicile", "Caste Certificate", "Birth/Death Certificate"],
    },
    {
      title: "Loan Services",
      list: ["Home Loan", "Personal Loan", "Business Loan", "MUDRA Loan"],
    },
    {
      title: "Housing Services",
      list: ["PM Awas Yojana", "Property Registration", "Land Records", "Building Permits"],
    },
    {
      title: "Healthcare Services",
      list: ["Ayushman Bharat Card", "Vaccination Certificate", "Disability Certificate", "Health Insurance Claim"],
    },
    {
      title: "Employment Services",
      list: ["EPFO PF Balance", "ESIC Benefits", "NCS Job Portal", "Apprenticeship Registration"],
    },
    {
      title: "Agriculture Services",
      list: ["PM Kisan", "Soil Health Card", "Crop Insurance", "Kisan Credit Card"],
    },
    {
      title: "Legal & Safety Services",
      list: ["FIR Online", "Police Clearance", "RTI Filing", "Traffic Challan Payment"],
    },
    {
      title: "Travel & International",
      list: ["Visa Application", "OCI Card", "Railway Booking", "Air Travel Subsidy"],
    },
    {
      title: "Digital Services",
      list: ["DigiLocker", "UMANG App", "MyGov Portal", "Bharat BillPay"],
    },
    {
    title: "10th Marksheet Assistance",
    desc: "Lost ya correction ke liye 10th marksheet support.",
    list: ["10th marksheet correction", "Duplicate 10th marksheet", "10th marksheet re-issue", "10th marksheet name change"],
    tag: "Education",
  },
  {
    title: "12th Marksheet Assistance",
    list: ["12th marksheet correction", "Duplicate 12th marksheet", "12th marksheet re-issue", "12th marksheet name change"],
    desc: "12th marksheet correction & duplicate services.",
    tag: "Education",
  },
  {
    title: "Graduation Support",
    list: ["BA,BCA,BTECH admission help", "BCom admission help", "BSc admission help", "Graduation documentation support"],
    desc: "BA, BCom, BSc admission & documentation help.",
    tag: "Education",
  },
  {
    title: "Post Graduation Support",
    list: ["MA,MCom,MSc admission help", "Post Graduation documentation support"],
    desc: "MA, MCom, MSc admission guidance & processing.",
    tag: "Education",
  },
  {
    title: "Distance Education",
    list: ["Open schooling admission help", "Distance learning support", "Online course guidance"],
    desc: "Open schooling & distance learning solutions.",
    tag: "Education",
  },
  {
    title: "Marksheet Correction",
    list: ["Name correction", "DOB correction", "Subject correction"],
    desc: "Name, DOB, subject correction assistance.",
    tag: "Education",
  },
  {
    title: "Migration Certificate",
    list: ["Board migration help", "University migration support"],
    desc: "Board/university migration process help.",
    tag: "Education",
  },
  {
    title: "Transfer Certificate",
    list: ["TC issue support", "TC correction help"],
    desc: "School/college TC issue & correction.",
    tag: "Education",
  },
  {
    title: "Skill Development Courses",
    list: ["Digital Literacy", "Coding Bootcamps", "Soft Skills Training"],
    desc: "Affordable IT & job-ready skill programs.",
    tag: "Courses",
  },
  {
    title: "Computer Courses",
    list: ["Basic Computer", "MS Office", "Programming Languages"],
    desc: "Basic to advanced computer training.",
    tag: "Courses",
  },
  {
    title: "Spoken English Classes",
    list: ["Basic English", "Conversational English", "Business English"],
    desc: "Communication improvement at low cost.",
    tag: "Courses",
  },
  {
    title: "Tuitions (All Classes)",
    list: ["Class 1-5", "Class 6-8", "Class 9-10", "Class 11-12", "Competitive Exams"],
    desc: "Class 1 to 12 + competitive exam support.",
    tag: "Education",
  },
  {
    title: "ITI / Diploma Guidance",
    list: ["ITI admission help", "Diploma course guidance"],
    desc: "Technical course admission support.",
    tag: "Education",
  },
  {
    title: "Online Courses Access",
    list: ["CODING", "Data Science", "Digital Marketing", "Soft Skills", "Language Learning","PYTHON", "JAVA", "WEB DEVELOPMENT","DATA ANALYSIS", "SEO", "Communication Skills", "Foreign Languages","FLUTTER", "C++", "APP DEVELOPMENT","MACHINE LEARNING", "Content Writing", "Public Speaking"],
    desc: "Cheapest online certification programs.",
    tag: "Courses",
  },
  {
    title: "Exam Form Filling",
    list: ["Board exam form help", "University exam form support", "Competitive exam form assistance", "Online exam registration"],
    desc: "Board & university exam form support.",
    tag: "Education",
  },
  {
    title: "Scholarship Assistance",
    list: ["Government scholarships", "Private scholarships", "Scholarship application help", "Scholarship tracking support"],
    desc: "Govt scholarship apply & tracking help.",
    tag: "Education",
  },
  {
    title: "Loan Help",
    list: ["Home loan guidance", "Personal loan support", "Business loan assistance", "MUDRA loan help","Loan documentation support"],
    desc: "Loan processing & documentation support.",
    tag: "Finance",
  },
  {
    title: "Complete Education Recovery",
    list: ["10th/12th marksheet recovery", "Degree certificate recovery", "Education documentation support"],
    desc: "Break education, pending marksheet & degree solutions with full guidance.",
    tag: "Special",
  }
  ];

  return (
    <section className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-red-600 font-black uppercase tracking-[0.3em] text-sm">
            Government Services
          </h2>

          <h1 className="text-4xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter mt-4">
            Fast & Reliable <span className="text-red-600">Documentation</span>
          </h1>

          <p className="text-gray-500 text-lg mt-6 max-w-2xl mx-auto font-medium">
            We provide hassle-free government and legal documentation services
            with quick processing and expert support.
          </p>
        </div>

        {/* 🧩 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 p-10 rounded-4xl border border-gray-100 hover:shadow-2xl hover:border-red-600/30 transition-all duration-500"
            >

              <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase">
                {item.title}
              </h3>

              <ul className="space-y-4 mb-10">
                {item.list?.map((service, sIndex) => (
                  <li
                    key={sIndex}
                    className="flex items-center gap-3 text-gray-500 font-semibold group-hover:text-gray-700 transition"
                  >
                    <ShieldCheck size={18} className="text-red-600" />
                    {service}
                  </li>
                ))}
              </ul>

              

            

            <a href={`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(
                `Hi SIMAM, I am enquiring about ${item.title}`
            )}`} target="_blank" rel="noopener noreferrer"
            className="w-full py-4 border-2 border-gray-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-red-600 hover:border-red-600 hover:text-white transition-all flex items-center justify-center cursor-pointer"
            >
                Enquire Now
            </a>

            </div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <div className="mt-32 bg-red-600 p-12 lg:p-20 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_25px_60px_rgba(220,38,38,0.3)]">

          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter">
              Need Urgent <br />
              <span className="text-black italic">Assistance?</span>
            </h2>

            <p className="text-red-100 text-lg lg:text-xl font-medium">
              Talk to our documentation experts right now.
            </p>
          </div>

          <Link
            href="https://wa.me/918802801381"
            target="_blank"
            className="bg-white text-red-600 px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-all active:scale-95"
          >
            WhatsApp Support
          </Link>

        </div>

      </div>
    </section>
  );
};

export default GovtServices;