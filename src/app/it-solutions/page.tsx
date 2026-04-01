"use client";
import React from "react";
import { WHATSAPP_LINK } from "../../lib/constants";
import { CONTACT_NUMBER } from "../../lib/constants";

import {
  // Infra + Core
  Cloud,
  Server,
  Database,
  Wifi,
  Headphones,
  Settings,
  RefreshCw,
  HardDrive,
  Lock,
  Monitor,

  // Web
  Globe,
  ShoppingCart,
  FileText,
  Smartphone,
  Code,
  Zap,
  GitBranch,
  Layout,

  // DevOps
  CloudUpload,
  Box,
  Shield,
  Cpu,
  DollarSign,
  Activity,

  // Security
  AlertTriangle,
  UserCheck,
  Mail,
  BookOpen,
  AlertCircle,

  // Data
  BarChart,
  PieChart,
  TrendingUp,
  Search,
  Shuffle,
  Users,
  Clipboard,

  // AI
  MessageSquare,
  Bot,
  Mic,

  // Business / Marketing
  Share2,
  Target,
  Palette,
  CreditCard,
  Lightbulb,

  // Courses
  Terminal,
  FileSpreadsheet,
  ShieldCheck,
  ArrowRight,
  Video,
  Calculator

} from "lucide-react";
import Link from "next/link";

const ITSolutions = () => {
  //  Services Data
  const solutions = [
    //  INFRA (1–10)
  { title: "Cloud Hosting", desc: "AWS, Azure, GCP hosting.", icon: <Cloud size={40} />, tag: "Infrastructure" },
  { title: "VPS Hosting", desc: "Dedicated virtual servers.", icon: <Server size={40} />, tag: "Infrastructure" },
  { title: "Data Center Mgmt", desc: "Enterprise infra handling.", icon: <Database size={40} />, tag: "Infrastructure" },
  { title: "Network Setup", desc: "LAN/WAN setup.", icon: <Wifi size={40} />, tag: "Infrastructure" },
  { title: "IT Helpdesk", desc: "24/7 IT support.", icon: <Headphones size={40} />, tag: "Infrastructure" },
  { title: "Server Maintenance", desc: "Updates & monitoring.", icon: <Settings size={40} />, tag: "Infrastructure" },
  { title: "Backup & Recovery", desc: "Disaster recovery systems.", icon: <RefreshCw size={40} />, tag: "Infrastructure" },
  { title: "Storage Systems", desc: "NAS/SAN storage.", icon: <HardDrive size={40} />, tag: "Infrastructure" },
  { title: "VPN Services", desc: "Secure remote access.", icon: <Lock size={40} />, tag: "Infrastructure" },
  { title: "Remote Desktop", desc: "Work from anywhere.", icon: <Monitor size={40} />, tag: "Infrastructure" },

  //  WEB (11–20)
  { title: "Website Development", desc: "Modern responsive sites.", icon: <Globe size={40} />, tag: "Web" },
  { title: "E-commerce", desc: "Online stores.", icon: <ShoppingCart size={40} />, tag: "Web" },
  { title: "CMS Dev", desc: "WordPress etc.", icon: <FileText size={40} />, tag: "Web" },
  { title: "Mobile Apps", desc: "Android/iOS apps.", icon: <Smartphone size={40} />, tag: "Web" },
  { title: "Cross Platform", desc: "Flutter apps.", icon: <Code size={40} />, tag: "Web" },
  { title: "PWA", desc: "Offline apps.", icon: <Zap size={40} />, tag: "Web" },
  { title: "API Dev", desc: "REST APIs.", icon: <GitBranch size={40} />, tag: "Web" },
  { title: "SaaS Dev", desc: "Cloud platforms.", icon: <Cloud size={40} />, tag: "Web" },
  { title: "UI/UX", desc: "Design systems.", icon: <Layout size={40} />, tag: "Web" },
  { title: "Domains & Hosting", desc: "Web infra.", icon: <Globe size={40} />, tag: "Web" },

  //  DEVOPS (21–30)
  { title: "Cloud Migration", desc: "Move to cloud.", icon: <CloudUpload size={40} />, tag: "DevOps" },
  { title: "Kubernetes", desc: "Container mgmt.", icon: <Box size={40} />, tag: "DevOps" },
  { title: "CI/CD", desc: "Auto deploy.", icon: <GitBranch size={40} />, tag: "DevOps" },
  { title: "IaC", desc: "Infra automation.", icon: <Code size={40} />, tag: "DevOps" },
  { title: "Cloud Security", desc: "Audit & fix.", icon: <Shield size={40} />, tag: "DevOps" },
  { title: "Serverless", desc: "Lambda apps.", icon: <Cpu size={40} />, tag: "DevOps" },
  { title: "Multi-cloud", desc: "Hybrid infra.", icon: <Cloud size={40} />, tag: "DevOps" },
  { title: "Cost Optimization", desc: "Save infra cost.", icon: <DollarSign size={40} />, tag: "DevOps" },
  { title: "Hybrid Cloud", desc: "On-prem + cloud.", icon: <Cloud size={40} />, tag: "DevOps" },
  { title: "Monitoring", desc: "Track performance.", icon: <Activity size={40} />, tag: "DevOps" },

  //  SECURITY (31–40)
  { title: "Pen Testing", desc: "Ethical hacking.", icon: <Shield size={40} />, tag: "Security" },
  { title: "Vulnerability Scan", desc: "Security audit.", icon: <AlertTriangle size={40} />, tag: "Security" },
  { title: "Firewall Setup", desc: "Network security.", icon: <Lock size={40} />, tag: "Security" },
  { title: "Endpoint Security", desc: "Device protection.", icon: <Cpu size={40} />, tag: "Security" },
  { title: "IAM", desc: "User auth systems.", icon: <UserCheck size={40} />, tag: "Security" },
  { title: "SIEM", desc: "Security monitoring.", icon: <Activity size={40} />, tag: "Security" },
  { title: "DDoS Protection", desc: "Attack prevention.", icon: <Zap size={40} />, tag: "Security" },
  { title: "Email Security", desc: "Spam protection.", icon: <Mail size={40} />, tag: "Security" },
  { title: "Security Training", desc: "Employee awareness.", icon: <BookOpen size={40} />, tag: "Security" },
  { title: "Incident Response", desc: "Breach handling.", icon: <AlertCircle size={40} />, tag: "Security" },

  //  DATA (41–50)
  { title: "Data Warehouse", desc: "Central data.", icon: <Database size={40} />, tag: "Data" },
  { title: "BI Dashboards", desc: "Insights.", icon: <BarChart size={40} />, tag: "Data" },
  { title: "Big Data", desc: "Hadoop/Spark.", icon: <Cpu size={40} />, tag: "Data" },
  { title: "Visualization", desc: "Power BI.", icon: <PieChart size={40} />, tag: "Data" },
  { title: "Predictive Analytics", desc: "ML forecasting.", icon: <TrendingUp size={40} />, tag: "Data" },
  { title: "Data Mining", desc: "Extract patterns.", icon: <Search size={40} />, tag: "Data" },
  { title: "ETL Pipelines", desc: "Data flow.", icon: <Shuffle size={40} />, tag: "Data" },
  { title: "Real-time Data", desc: "Live analytics.", icon: <Activity size={40} />, tag: "Data" },
  { title: "CDP", desc: "Customer data.", icon: <Users size={40} />, tag: "Data" },
  { title: "Governance", desc: "Compliance.", icon: <Clipboard size={40} />, tag: "Data" },

  //  AI (51–60)
  { title: "ML Models", desc: "Custom ML.", icon: <Cpu size={40} />, tag: "AI" },
  { title: "NLP", desc: "Language AI.", icon: <MessageSquare size={40} />, tag: "AI" },
  { title: "Computer Vision", desc: "Image AI.", icon: <Cpu size={40} />, tag: "AI" },
  { title: "Chatbots", desc: "AI bots.", icon: <Bot size={40} />, tag: "AI" },
  { title: "Recommendation", desc: "Smart suggestions.", icon: <TrendingUp size={40} />, tag: "AI" },
  { title: "Automation AI", desc: "Workflow AI.", icon: <Zap size={40} />, tag: "AI" },
  { title: "Speech AI", desc: "Voice systems.", icon: <Mic size={40} />, tag: "AI" },
  { title: "Deep Learning", desc: "Neural nets.", icon: <Cpu size={40} />, tag: "AI" },
  { title: "AI Assistants", desc: "GPT tools.", icon: <Bot size={40} />, tag: "AI" },
  { title: "Fraud Detection", desc: "Anomaly detect.", icon: <Shield size={40} />, tag: "AI" },

  //  BUSINESS (61–75)
  { title: "SEO", desc: "Google ranking.", icon: <TrendingUp size={40} />, tag: "Marketing" },
  { title: "Social Media", desc: "Brand growth.", icon: <Share2 size={40} />, tag: "Marketing" },
  { title: "Google Ads", desc: "Paid ads.", icon: <Target size={40} />, tag: "Marketing" },
  { title: "Content Marketing", desc: "Blogs.", icon: <FileText size={40} />, tag: "Marketing" },
  { title: "Brand Design", desc: "Identity.", icon: <Palette size={40} />, tag: "Marketing" },
  { title: "CRM", desc: "Customer mgmt.", icon: <Users size={40} />, tag: "Business" },
  { title: "ERP", desc: "Enterprise systems.", icon: <Database size={40} />, tag: "Business" },
  { title: "Payment Gateway", desc: "Online payments.", icon: <CreditCard size={40} />, tag: "Business" },
  { title: "Startup Consulting", desc: "Launch help.", icon: <Lightbulb size={40} />, tag: "Business" },
  { title: "Automation Tools", desc: "Workflow tools.", icon: <Settings size={40} />, tag: "Business" },
  { title: "Lead Generation", desc: "Get clients.", icon: <Users size={40} />, tag: "Marketing" },
  { title: "Email Marketing", desc: "Campaigns.", icon: <Mail size={40} />, tag: "Marketing" },
  { title: "Affiliate Systems", desc: "Partner sales.", icon: <Share2 size={40} />, tag: "Marketing" },
  { title: "Funnels", desc: "Sales funnels.", icon: <TrendingUp size={40} />, tag: "Marketing" },
  { title: "Analytics Setup", desc: "Track growth.", icon: <BarChart size={40} />, tag: "Marketing" },

  //  COURSES (76–101)
  { title: "Full Stack Course", desc: "Web dev complete.", icon: <Code size={40} />, tag: "Course" },
  { title: "Flutter Course", desc: "App dev.", icon: <Smartphone size={40} />, tag: "Course" },
  { title: "Python Course", desc: "Programming.", icon: <Terminal size={40} />, tag: "Course" },
  { title: "Data Science", desc: "ML + data.", icon: <BarChart size={40} />, tag: "Course" },
  { title: "Cyber Security Course", desc: "Ethical hacking.", icon: <Shield size={40} />, tag: "Course" },
  { title: "Digital Marketing Course", desc: "SEO & ads.", icon: <TrendingUp size={40} />, tag: "Course" },
  { title: "UI/UX Course", desc: "Design.", icon: <Layout size={40} />, tag: "Course" },
  { title: "AWS Course", desc: "Cloud.", icon: <Cloud size={40} />, tag: "Course" },
  { title: "DevOps Course", desc: "CI/CD.", icon: <GitBranch size={40} />, tag: "Course" },
  { title: "Excel Course", desc: "Data tools.", icon: <FileSpreadsheet size={40} />, tag: "Course" },
  { title: "Java Course", desc: "Backend dev.", icon: <Code size={40} />, tag: "Course" },
  { title: "C++ Course", desc: "DSA.", icon: <Code size={40} />, tag: "Course" },
  { title: "DSA Course", desc: "Interview prep.", icon: <Cpu size={40} />, tag: "Course" },
  { title: "React Course", desc: "Frontend.", icon: <Code size={40} />, tag: "Course" },
  { title: "Next.js Course", desc: "Fullstack.", icon: <Code size={40} />, tag: "Course" },
  { title: "MongoDB Course", desc: "Database.", icon: <Database size={40} />, tag: "Course" },
  { title: "SQL Course", desc: "Queries.", icon: <Database size={40} />, tag: "Course" },
  { title: "AI Course", desc: "AI basics.", icon: <Bot size={40} />, tag: "Course" },
  { title: "ML Course", desc: "Machine learning.", icon: <Cpu size={40} />, tag: "Course" },
  { title: "Freelancing Course", desc: "Earn online.", icon: <DollarSign size={40} />, tag: "Course" },
  { title: "Graphic Design", desc: "Photoshop etc.", icon: <Palette size={40} />, tag: "Course" },
  { title: "Video Editing", desc: "Premiere Pro.", icon: <Video size={40} />, tag: "Course" },
  { title: "Tally Course", desc: "Accounting.", icon: <Calculator size={40} />, tag: "Course" },
  { title: "Spoken English", desc: "Communication.", icon: <Mic size={40} />, tag: "Course" },
  ];

  return (
    <section className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">

        {/* 🔥 HEADER */}
        <div className="max-w-4xl mb-20 animate-in fade-in slide-in-from-bottom duration-1000">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-sm">
            Innovate with SIMAM
          </span>

          <h1 className="text-5xl lg:text-8xl font-black text-gray-900 leading-tight uppercase tracking-tighter mt-4">
            Next-Gen <span className="text-blue-900">IT Solutions</span> for Global Growth.
          </h1>

          <p className="text-gray-500 text-xl lg:text-2xl mt-8 font-medium leading-relaxed">
            We provide a comprehensive suite of digital services designed to scale your business and outpace the competition.
          </p>
        </div>

        {/*  GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {solutions.map((item, index) => (
            <div
              key={index}
              className="group p-10 bg-gray-50 rounded-[2.5rem] border border-transparent hover:border-blue-900 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              {/* ICON */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all">
                {item.icon}
              </div>

              {/* TAG */}
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                {item.tag}
              </span>

              {/* TITLE */}
              <h3 className="text-2xl font-black text-gray-900 mt-6 mb-4 uppercase">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 font-medium mb-10 leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <a href={`https://wa.me/${CONTACT_NUMBER}?text=${encodeURIComponent(
                 `Hi SIMAM, I want to enquire about ${item.title}`
                 )}`}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-blue-900 border-b-2 border-transparent hover:border-blue-900 pb-1 cursor-pointer transition-all hover:gap-4">
                      Enquire Now <ArrowRight size={16} />
              </a>

            </div>
          ))}

        </div>

        {/*  CTA */}
        <div className="mt-32 bg-zinc-950 p-12 lg:p-20 rounded-[3rem] text-white flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter italic">
              Ready to <span className="text-red-600">Start?</span>
            </h2>

            <p className="text-zinc-400 text-lg lg:text-xl font-medium">
              Let's discuss your project and build something incredible.
            </p>
          </div>

          <Link
            href="/#contact"
            className="bg-white text-zinc-950 px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-red-600 hover:text-white transition-all shadow-xl active:scale-95"
          >
            Get a Quote
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ITSolutions;