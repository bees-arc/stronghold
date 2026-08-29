"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowUpRight, 
  ShieldCheck, 
  Eye, 
  Cpu, 
  FileText, 
  Activity, 
  CheckCircle2,
  Users,
  Compass,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Layers
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import SurrealEcosystem from "@/components/visuals/SurrealEcosystem";
import BentoVisual from "@/components/visuals/BentoVisual";

// Core Values definitions
const CORE_VALUES = [
  {
    id: "INTEGRITY",
    title: "INTEGRITY",
    definition: "Acting with honesty, transparency and accountability.",
    details: "Our foundation is built on absolute transparency. In an industry where trust is paramount, Stronghold maintains uncompromised ethical standards in all field deployments and intelligence operations.",
    code: "VAL_01 // INTG",
    color: "#c5a059"
  },
  {
    id: "VIGILANCE",
    title: "VIGILANCE",
    definition: "Remaining alert and proactive in every environment.",
    details: "Constant surveillance, intelligence gathering, and operational readiness. We do not rest. Threats never sleep, and neither does our multi-tiered monitoring apparatus.",
    code: "VAL_02 // VIGL",
    color: "#0e1b30"
  },
  {
    id: "INNOVATION",
    title: "INNOVATION",
    definition: "Using technology to create smarter and more effective protection.",
    details: "Integrating state-of-the-art predictive software, sensor matrices, and cybersecurity defenses into physical environments to create next-generation barriers.",
    code: "VAL_03 // INOV",
    color: "#c5a059"
  },
  {
    id: "TRUST",
    title: "TRUST",
    definition: "Building long-term relationships through reliability and confidence.",
    details: "Our relationships are partnerships. We act as an extension of our clients' leadership teams, protecting assets and reputations with complete discretion.",
    code: "VAL_04 // TRST",
    color: "#0e1b30"
  },
  {
    id: "EXCELLENCE",
    title: "EXCELLENCE",
    definition: "Maintaining professional discipline, precision and high standards.",
    details: "Rooted in military precision, our training regimens and performance evaluations demand nothing less than flawless execution across all divisions.",
    code: "VAL_05 // EXCL",
    color: "#c5a059"
  }
];

// Timeline process steps
const TIMELINE_STEPS = [
  {
    step: "01",
    phase: "ASSESS",
    short: "Understand risks, vulnerabilities and client priorities.",
    detailed: "We deploy field officers and digital security engineers to perform an exhaustive vulnerability analysis of physical sites, infrastructure, and electronic perimeters.",
    status: "SYSTEM_SCANNING"
  },
  {
    step: "02",
    phase: "PLAN",
    short: "Develop a tailored security strategy.",
    detailed: "Our command team structures an integrated defense matrix mapping personnel schedules, surveillance sensor overlays, digital firewalls, and incident escalation paths.",
    status: "STRATEGY_MAPPED"
  },
  {
    step: "03",
    phase: "DEPLOY",
    short: "Assign the right professionals, technology and resources.",
    detailed: "We mobilize professionally trained security agents, activate CCTV networks, set up distance sensors, and initiate secure network tunneling protocols.",
    status: "ACTIVE_DEPLOY"
  },
  {
    step: "04",
    phase: "MONITOR",
    short: "Maintain continuous surveillance and rapid response capability.",
    detailed: "Our 24/7 Operations Control Center supervises real-time telemetry from all active projects, dispatching armed tactical mobile units at the first trigger.",
    status: "MONITORING_LIVE"
  },
  {
    step: "05",
    phase: "EVOLVE",
    short: "Regularly evaluate, update and improve security readiness.",
    detailed: "We review threat patterns, refine standard operational procedures, and update physical and digital system assets to match the emerging threat environment.",
    status: "READY_UPGRADE"
  }
];

// Service list items
const SERVICES = [
  {
    num: "01",
    title: "MAN GUARD SECURITY",
    desc: "Professionally trained security personnel for private and public sector environments.",
    details: "Ex-military and elite tactical staff offering executive close protection, access controls, static guarding, and canine security support."
  },
  {
    num: "02",
    title: "SPECIAL EVENT SECURITY",
    desc: "Expert security planning and management for events of all sizes.",
    details: "Crowd control choreography, credential scanning, sweep protocols, and rapid emergency evacuation blueprints."
  },
  {
    num: "03",
    title: "CYBERSECURITY SERVICES",
    desc: "Protecting digital assets, systems and information from modern threats.",
    details: "Penetration testing, real-time threat detection, cloud configuration hardening, and incident response readiness checks."
  },
  {
    num: "04",
    title: "ELECTRONIC SECURITY SOLUTIONS",
    desc: "Installation and maintenance of CCTV, intrusion detection and alarm systems.",
    details: "Smart integration of smart door strikes, biometrics, vibration sensors, glass-break sensors, and visual triggers."
  },
  {
    num: "05",
    title: "CCTV & DISTANCE SENSOR SYSTEMS",
    desc: "Advanced surveillance and detection technologies designed to improve security awareness.",
    details: "Thermal imaging cameras, infrared perimeter tripwires, radar boundary scanning, and video analytics dashboards."
  },
  {
    num: "06",
    title: "24/7 MONITORING & RESPONSE",
    desc: "Continuous surveillance and rapid response to security incidents.",
    details: "Constant live video feeds analyzed by on-duty watch teams, coupled with immediate armored response vehicle dispatch."
  }
];

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [activeValue, setActiveValue] = useState(CORE_VALUES[0]);
  const [activeTimeline, setActiveTimeline] = useState(0);

  // Form submission status
  const [formData, setFormData] = useState({ name: "", email: "", org: "", type: "Full Audit", msg: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [accessCode, setAccessCode] = useState("");

  useEffect(() => {
    if (showPreloader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPreloader]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormStatus("submitting");

    // Simulate premium system dispatch animation
    setTimeout(() => {
      const code = "SH-" + Math.floor(100000 + Math.random() * 900000);
      setAccessCode(code);
      setFormStatus("success");
    }, 2000);
  };

  const textRevealVariants: Variants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onComplete={() => setShowPreloader(false)} />
        )}
      </AnimatePresence>

      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="overview" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-accent-navy border-b border-border-thin">
        {/* Background video loop (tech HUD / networking wireframe) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15 filter grayscale contrast-125 pointer-events-none"
        >
          <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c040d73f1d8f1e29cf46c766e409ec8e&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
        </video>

        {/* Subtle grid layout lines */}
        <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <motion.div
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 mb-6 border border-accent-gold/20 px-3.5 py-1.5 bg-white/5 backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 bg-accent-gold animate-pulse rounded-full" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-white/85 font-sans">
                STRONGHOLD SECURITY & INVESTIGATION
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-light text-white leading-[1.1] tracking-tight mb-8">
              <span className="title-reveal-mask">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={textRevealVariants}
                  className="block font-serif"
                >
                  REDEFINING PROTECTION
                </motion.span>
              </span>
              <br />
              <span className="title-reveal-mask">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={textRevealVariants}
                  className="block font-serif italic font-normal text-accent-gold"
                >
                  THROUGH INTELLIGENCE,
                </motion.span>
              </span>
              <br />
              <span className="title-reveal-mask">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  variants={textRevealVariants}
                  className="block font-serif"
                >
                  DISCIPLINE & TECHNOLOGY.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              className="text-sm font-sans text-white/70 leading-relaxed max-w-lg mb-10"
            >
              Stronghold Security & Investigation is a next-generation security firm combining military-grade discipline with intelligence analysis and electronic safeguards to protect people, property, and information.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUpVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#portfolio"
                className="group flex items-center justify-center gap-3 bg-accent-gold text-accent-navy px-8 py-4 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-accent-navy transition-all duration-300 button-gold-accent shadow-sm"
              >
                EXPLORE OUR PROTECTION
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 border border-white/20 bg-transparent px-8 py-4 text-xs font-bold tracking-[0.2em] text-white hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                TALK TO A SECURITY EXPERT
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Hero Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <div className="w-full max-w-[480px] lg:max-w-none border border-accent-gold/20 bg-[#0c182a]/80 backdrop-blur-md rounded-sm p-4 relative">
              <SurrealEcosystem />
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. INTRO EDITORIAL SECTION */}
      <section className="py-24 md:py-32 bg-surface-ivory border-b border-border-thin relative overflow-hidden">
        {/* Radar sweep ambient background */}
        <div className="radar-sweep opacity-[0.03]" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent-gold font-sans uppercase">
              // STRATEGIC OUTLOOK
            </span>
            <h2 className="text-3xl font-serif text-accent-navy leading-tight mt-4 max-w-xs font-light">
              SECURITY IS NO LONGER ABOUT SIMPLY REACTING TO THREATS.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col items-start">
            <p className="text-lg md:text-xl font-serif font-light text-accent-navy/80 leading-relaxed mb-8">
              Today’s risks move faster, become more complex and exist across both physical and digital environments.
            </p>
            <p className="text-sm font-sans text-accent-navy/60 leading-relaxed max-w-2xl mb-12">
              At Stronghold, we combine strategic foresight, disciplined professionals and advanced technology to build protection systems designed to anticipate risks before they become incidents.
            </p>

            <blockquote className="border-l-2 border-accent-gold pl-8 py-2 relative mt-4">
              <p className="editorial-quote text-2xl md:text-3xl text-accent-navy italic">
                “WE DON'T JUST PROVIDE SECURITY. WE CREATE INTELLIGENT DEFENCE ECOSYSTEMS.”
              </p>
              <cite className="block mt-4 font-mono text-[9px] text-accent-navy/40 tracking-[0.25em] not-italic">
                STRONGHOLD OPERATIONAL COMMAND
              </cite>
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. WHAT WE PROTECT (Bento Grid) */}
      <section id="portfolio" className="py-24 md:py-32 bg-background border-b border-border-thin relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent-navy/40 font-sans uppercase">
                // TARGET PORTFOLIOS
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-accent-navy font-light mt-4">
                WHAT WE PROTECT
              </h2>
            </div>
            <p className="text-xs font-sans text-accent-navy/50 max-w-xs leading-relaxed">
              We engineer specialized security frameworks tailored for high-asset and critical infrastructure segments.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* Businesses & Corporations (Split design with Guards Image) */}
            <div className="bento-card-interactive md:col-span-4 bg-surface-ivory border border-border-thin p-8 md:p-10 flex flex-col md:flex-row justify-between min-h-[300px] hover:border-accent-navy/20 transition-all duration-500 relative group overflow-hidden">
              <div className="flex flex-col justify-between h-full relative z-10 md:w-1/2">
                <div>
                  <span className="text-xs font-mono text-accent-navy/30">C_PORT // 01</span>
                  <h3 className="text-xl font-serif font-light text-accent-navy tracking-tight mt-6">
                    BUSINESSES & CORPORATIONS
                  </h3>
                </div>
                <p className="text-xs font-sans text-accent-navy/60 max-w-[280px] mt-8 relative z-10 leading-relaxed">
                  Integrated protection for offices, corporate headquarters, properties, facilities and operations.
                </p>
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 h-full opacity-10 group-hover:opacity-20 md:opacity-100 transition-opacity duration-500 pointer-events-none md:border-l md:border-border-thin">
                <div className="relative w-full h-full bg-[#0e1b30]">
                  <Image
                    src="/guards.jpg"
                    alt="Corporate Guard Protection"
                    fill
                    sizes="(max-w-768px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle fade overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-surface-ivory via-surface-ivory/80 to-transparent md:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-ivory to-transparent md:hidden" />
                </div>
              </div>
            </div>

            {/* Institutions */}
            <div className="bento-card-interactive md:col-span-2 bg-surface-ivory border border-border-thin p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:border-accent-navy/20 transition-all duration-500 relative group overflow-hidden">
              <BentoVisual type="institutions" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-navy/30">C_PORT // 02</span>
                <h3 className="text-xl font-serif font-light text-accent-navy tracking-tight mt-6">
                  INSTITUTIONS
                </h3>
              </div>
              <p className="text-xs font-sans text-accent-navy/60 mt-8 relative z-10 leading-relaxed">
                Professional security strategies for complex, high-traffic institutional environments.
              </p>
            </div>

            {/* Private & Residential */}
            <div className="bento-card-interactive md:col-span-2 bg-surface-ivory border border-border-thin p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:border-accent-navy/20 transition-all duration-500 relative group overflow-hidden">
              <BentoVisual type="residential" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-navy/30">C_PORT // 03</span>
                <h3 className="text-xl font-serif font-light text-accent-navy tracking-tight mt-6">
                  PRIVATE & RESIDENTIAL
                </h3>
              </div>
              <p className="text-xs font-sans text-accent-navy/60 mt-8 relative z-10 leading-relaxed">
                Reliable protection for residential properties, communities and personal estates.
              </p>
            </div>

            {/* Digital Infrastructure */}
            <div className="bento-card-interactive md:col-span-4 bg-surface-ivory border border-border-thin p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:border-accent-navy/20 transition-all duration-500 relative group overflow-hidden">
              <BentoVisual type="digital" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-navy/30">C_PORT // 04</span>
                <h3 className="text-xl font-serif font-light text-accent-navy tracking-tight mt-6">
                  DIGITAL INFRASTRUCTURE
                </h3>
              </div>
              <p className="text-xs font-sans text-accent-navy/60 max-w-sm mt-8 relative z-10 leading-relaxed">
                Cybersecurity diagnostics and resilience parameters for modern digital networks.
              </p>
            </div>

            {/* Events */}
            <div className="bento-card-interactive md:col-span-3 bg-surface-ivory border border-border-thin p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:border-accent-navy/20 transition-all duration-500 relative group overflow-hidden">
              <BentoVisual type="events" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-navy/30">C_PORT // 05</span>
                <h3 className="text-xl font-serif font-light text-accent-navy tracking-tight mt-6">
                  EVENTS
                </h3>
              </div>
              <p className="text-xs font-sans text-accent-navy/60 mt-8 relative z-10 leading-relaxed">
                Strategic crowd containment, check-point design, and protocol supervision for events.
              </p>
            </div>

            {/* People */}
            <div className="bento-card-interactive md:col-span-3 bg-surface-ivory border border-border-thin p-8 md:p-10 flex flex-col justify-between min-h-[300px] hover:border-accent-navy/20 transition-all duration-500 relative group overflow-hidden">
              <BentoVisual type="people" />
              <div className="relative z-10">
                <span className="text-xs font-mono text-accent-navy/30">C_PORT // 06</span>
                <h3 className="text-xl font-serif font-light text-accent-navy tracking-tight mt-6">
                  PEOPLE
                </h3>
              </div>
              <p className="text-xs font-sans text-accent-navy/60 mt-8 relative z-10 leading-relaxed">
                Protection designed around safety, confidentiality, and armored VIP transport support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 bg-surface-ivory border-b border-border-thin">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent-gold font-sans uppercase">
              // CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-accent-navy font-light mt-4">
              ONE INTELLIGENT SECURITY ECOSYSTEM.
            </h2>
          </div>

          {/* Editorial Catalogue Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {SERVICES.map((service) => (
              <div 
                key={service.num} 
                className="group flex flex-col justify-between border-t border-border-thin pt-6 min-h-[220px] transition-all duration-500 hover:border-accent-navy"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-accent-navy/40 mb-4">
                    <span>CAP_SYS // {service.num}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border-thin group-hover:bg-accent-gold transition-colors" />
                  </div>
                  <h3 className="text-lg font-serif tracking-tight text-accent-navy font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans text-accent-navy/70 mt-3 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                
                <p className="text-[11px] font-sans text-accent-navy/55 mt-4 leading-normal opacity-0 max-h-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-6 transition-all duration-500 overflow-hidden">
                  {service.details}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. STRONGHOLD ADVANTAGE */}
      <section id="advantage" className="py-24 md:py-32 bg-background border-b border-border-thin">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-20 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent-navy/40 font-sans uppercase">
              // DESIGNED FOR EXCELLENCE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-accent-navy font-light mt-4">
              BUILT ON EXPERIENCE. DESIGNED FOR TOMORROW.
            </h2>
          </div>

          {/* Advantage Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-surface-ivory border border-border-thin p-8 flex flex-col justify-between min-h-[280px] rounded-sm relative">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 border border-accent-navy/15 flex items-center justify-center bg-white/40">
                  <ShieldCheck className="w-4 h-4 text-accent-navy" />
                </div>
                <span className="font-mono text-[9px] text-accent-navy/30">PIL_01 // DISCIPLINE</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-accent-navy mt-8">MILITARY DISCIPLINE</h3>
                <p className="text-xs font-sans text-accent-navy/60 leading-relaxed mt-4">
                  Operations structured on rigorous army protocols, ensuring immediate accountability and zero margin of error.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-surface-ivory border border-border-thin p-8 flex flex-col justify-between min-h-[280px] rounded-sm relative">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 border border-accent-navy/15 flex items-center justify-center bg-white/40">
                  <Cpu className="w-4 h-4 text-accent-navy" />
                </div>
                <span className="font-mono text-[9px] text-accent-navy/30">PIL_02 // SYSTEMS</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-accent-navy mt-8">INTELLIGENT TECH</h3>
                <p className="text-xs font-sans text-accent-navy/60 leading-relaxed mt-4">
                  Surveillance streams backed by distance detectors, motion grids, and cybersecurity perimeter defense nodes.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-surface-ivory border border-border-thin p-8 flex flex-col justify-between min-h-[280px] rounded-sm relative">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 border border-accent-navy/15 flex items-center justify-center bg-white/40">
                  <Users className="w-4 h-4 text-accent-navy" />
                </div>
                <span className="font-mono text-[9px] text-accent-navy/30">PIL_03 // TRAINED</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-accent-navy mt-8">EX-MILITARY LEADERS</h3>
                <p className="text-xs font-sans text-accent-navy/60 leading-relaxed mt-4">
                  Tactical teams supervised and vetted by former officers from the Sri Lankan Armed Forces.
                </p>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-surface-ivory border border-border-thin p-8 flex flex-col justify-between min-h-[280px] rounded-sm relative">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 border border-accent-navy/15 flex items-center justify-center bg-white/40">
                  <Compass className="w-4 h-4 text-accent-navy" />
                </div>
                <span className="font-mono text-[9px] text-accent-navy/30">PIL_04 // VIGILANCE</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider text-accent-navy mt-8">PROACTIVE PATROLS</h3>
                <p className="text-xs font-sans text-accent-navy/60 leading-relaxed mt-4">
                  24/7 Operations Command Center coordinating rapid physical response vehicle deployments.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SECURE CODE MATRICES (Core Values Layout) */}
      <section className="py-24 md:py-32 bg-surface-grey border-b border-border-thin relative">
        <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
            
            {/* Value Selectors (Left Panel) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-accent-gold font-sans uppercase">
                  // OPERATIONAL VALUES
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-accent-navy font-light mt-4 mb-12">
                  OUR CORE ETHOS
                </h2>
                
                <div className="flex flex-col gap-3 font-sans">
                  {CORE_VALUES.map((val) => (
                    <button
                      key={val.id}
                      onClick={() => setActiveValue(val)}
                      className={`text-left p-5 border transition-all duration-300 rounded-sm flex items-center justify-between group ${
                        activeValue.id === val.id
                          ? "bg-background border-accent-navy shadow-sm"
                          : "bg-background/40 border-border-thin/40 opacity-75 hover:opacity-100"
                      }`}
                    >
                      <span className="text-xs font-bold tracking-widest text-accent-navy">{val.title}</span>
                      <span className="font-mono text-[8px] text-accent-navy/40 group-hover:text-accent-navy transition-colors">
                        {val.code}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-border-thin pt-6 mt-8 hidden lg:block font-mono text-[9px] text-accent-navy/40">
                STRONGHOLD // AUTHENTICATED_VALUES
              </div>
            </div>

            {/* Readout Terminal (Right Panel) */}
            <div className="lg:col-span-7 bg-background border border-border-thin p-8 md:p-12 rounded-sm flex flex-col justify-between min-h-[380px]">
              <div className="flex items-center justify-between border-b border-border-thin pb-4 font-mono text-[9px] text-accent-navy/45">
                <span>TERMINAL_ID: CORE_VAL_READ</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                  SECURED
                </span>
              </div>

              <div className="my-8">
                <span className="font-mono text-[8px] text-accent-gold block mb-1">
                  {activeValue.code}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif italic text-accent-navy leading-tight mb-4">
                  {activeValue.title}
                </h3>
                <p className="text-sm font-sans font-semibold text-accent-navy/80 mb-6">
                  {activeValue.definition}
                </p>
                <p className="text-xs font-sans text-accent-navy/60 leading-relaxed">
                  {activeValue.details}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border-thin pt-6 font-mono text-[8px] text-accent-navy/40">
                <span>HASH_SHA256: VALID</span>
                <span>LEVEL_01_ACCESS</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. HOW WE WORK (Operations Timeline) */}
      <section id="timeline" className="py-24 md:py-32 bg-background border-b border-border-thin">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-20 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent-navy/40 font-sans uppercase">
              // TACTICAL METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-accent-navy font-light mt-4">
              HOW WE WORK
            </h2>
            <p className="text-xs font-sans text-accent-navy/60 mt-4 leading-relaxed">
              We approach each assignment through a structured, iterative command lifecycle.
            </p>
          </div>

          {/* Operational Timeline Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Step triggers (Left Column) */}
            <div className="lg:col-span-5 flex flex-col gap-4 font-sans">
              {TIMELINE_STEPS.map((t, idx) => (
                <div
                  key={t.step}
                  onMouseEnter={() => setActiveTimeline(idx)}
                  onClick={() => setActiveTimeline(idx)}
                  className={`border p-6 flex items-center gap-6 transition-all duration-300 rounded-sm cursor-pointer ${
                    activeTimeline === idx
                      ? "bg-surface-ivory border-accent-navy"
                      : "bg-surface-ivory/30 border-border-thin/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className={`text-2xl font-serif italic ${
                    activeTimeline === idx ? "text-accent-gold font-semibold" : "text-accent-navy/30"
                  }`}>
                    {t.step}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest text-accent-navy mb-1">{t.phase}</h3>
                    <p className="text-[11px] font-sans text-accent-navy/55 leading-normal max-w-xs">{t.short}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simulated Radar Command Terminal (Right Column) */}
            <div className="lg:col-span-7 bg-surface-grey border border-border-thin p-8 md:p-12 rounded-sm flex flex-col justify-between min-h-[420px] relative overflow-hidden">
              <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between border-b border-accent-navy/10 pb-4 font-mono text-[9px] text-accent-navy/50">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-ping" />
                  COMMAND_READOUT: ACTIVE
                </span>
                <span>PHASE // {TIMELINE_STEPS[activeTimeline].step}</span>
              </div>

              {/* Big active visualization block */}
              <div className="relative z-10 my-8">
                <span className="text-[9px] font-mono text-accent-navy/40 uppercase block mb-1">
                  // {TIMELINE_STEPS[activeTimeline].status}
                </span>
                <h3 className="text-3xl font-serif italic text-accent-navy leading-tight mb-6">
                  {TIMELINE_STEPS[activeTimeline].phase}
                </h3>
                <p className="text-xs font-sans text-accent-navy/70 leading-relaxed max-w-xl">
                  {TIMELINE_STEPS[activeTimeline].detailed}
                </p>
              </div>

              {/* Simulated status gauges */}
              <div className="relative z-10 grid grid-cols-3 gap-4 border-t border-accent-navy/10 pt-6 mt-4 font-mono text-[8px] text-accent-navy/55">
                <div className="flex flex-col gap-1 border-r border-accent-navy/10 pr-2">
                  <span>THREAT_INDEX</span>
                  <div className="flex gap-0.5 mt-1">
                    {[1, 2, 3, 4, 5].map((idx) => (
                      <div 
                        key={idx} 
                        className={`w-2.5 h-1.5 ${
                          idx <= activeTimeline + 1 
                            ? "bg-accent-navy" 
                            : "bg-accent-navy/10"
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1 border-r border-accent-navy/10 pr-2">
                  <span>DEPLOY_VECTOR</span>
                  <span className="font-semibold text-accent-navy">SH-MATRIX_{TIMELINE_STEPS[activeTimeline].step}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span>SYSTEM_HEALTH</span>
                  <span className="font-semibold text-green-700">99.86% ONLINE</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. VISION AND MISSION */}
      <section className="py-24 md:py-32 bg-surface-ivory border-b border-border-thin relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Vision Column */}
            <div className="flex flex-col justify-between border-t border-border-thin pt-10 min-h-[300px]">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-accent-gold font-sans uppercase">
                  // GLOBAL ASPIRATION
                </span>
                <h2 className="text-3xl font-serif text-accent-navy leading-tight mt-6 font-light">
                  OUR VISION
                </h2>
              </div>
              <p className="text-lg md:text-xl font-serif font-light italic text-accent-navy/80 leading-relaxed mt-10">
                To be the most trusted and innovative security partner, setting the industry standard for excellence and proactive protection in a constantly evolving world.
              </p>
              <div className="border-t border-border-thin/50 pt-4 mt-8 font-mono text-[9px] text-accent-navy/40">
                VIS_2026 // GLOBAL_STANDARD
              </div>
            </div>

            {/* Mission Column */}
            <div className="flex flex-col justify-between border-t border-border-thin pt-10 min-h-[300px]">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-accent-navy/40 font-sans uppercase">
                  // CORE OBLIGATION
                </span>
                <h2 className="text-3xl font-serif text-accent-navy leading-tight mt-6 font-light">
                  OUR MISSION
                </h2>
              </div>
              <p className="text-sm font-sans text-accent-navy/60 leading-relaxed mt-10">
                Stronghold Security delivers highly qualified and technologically advanced security solutions for corporations, government agencies and private individuals. 
                <br /><br />
                By combining expertly trained professionals with modern technology, we protect clients while anticipating threats, adapting to challenges and maintaining the highest standards of integrity and trust.
              </p>
              <div className="border-t border-border-thin/50 pt-4 mt-8 font-mono text-[9px] text-accent-navy/40">
                MIS_2026 // ADAPT_OVERCOME
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. LEADERSHIP SECTION */}
      <section id="leadership" className="py-24 md:py-32 bg-background border-b border-border-thin">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="mb-20">
            <span className="text-[10px] font-bold tracking-[0.3em] text-accent-navy/40 font-sans uppercase">
              // EXECUTIVE COMMAND
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-accent-navy font-light mt-4">
              EXPERIENCE BEHIND THE STRONGHOLD.
            </h2>
          </div>

          {/* Magazine/Editorial leadership spreads */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            
            {/* Leader 1 - Chairman Brigadier Nandana Weeratunga */}
            <div className="group border-b border-border-thin pb-8 lg:pb-0 lg:border-b-0 lg:border-r lg:pr-6 lg:border-border-thin flex flex-col justify-between min-h-[440px]">
              <div>
                {/* Chairman Portrait */}
                <div className="w-full aspect-[3/4] border border-border-thin/80 relative overflow-hidden flex items-center justify-center bg-[#0e1b30]">
                  <Image
                    src="/chairman.jpg"
                    alt="Brigadier (Retd.) Nandana Weeratunga"
                    fill
                    sizes="(max-w-768px) 100vw, 20vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-background border border-border-thin px-2 py-0.5 font-mono text-[8px] text-accent-navy/60 z-10">
                    O_CMD // BRIG
                  </div>
                </div>
                
                <h3 className="text-base font-serif text-accent-navy mt-6 leading-tight">
                  Brigadier (Retd.) <br />Nandana Weeratunga
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-accent-navy/40 font-sans uppercase block mt-2">
                  CHAIRMAN
                </span>
              </div>
              <p className="text-[11px] font-sans text-accent-navy/55 leading-relaxed mt-6">
                Decades of high-level command experience in the Sri Lankan Armed Forces, dictating operational discipline and strategic oversight.
              </p>
            </div>

            {/* Leader 2 - Major Muditha Kaluarachchi (with Guards image representation) */}
            <div className="group border-b border-border-thin pb-8 lg:pb-0 lg:border-b-0 lg:border-r lg:pr-6 lg:border-border-thin flex flex-col justify-between min-h-[440px]">
              <div>
                <div className="w-full aspect-[3/4] border border-border-thin/80 relative overflow-hidden flex items-center justify-center bg-[#0e1b30]">
                  <Image
                    src="/guards.jpg"
                    alt="Major (Retd.) Muditha Kaluarachchi"
                    fill
                    sizes="(max-w-768px) 100vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 left-2 bg-background border border-border-thin px-2 py-0.5 font-mono text-[8px] text-accent-navy/60 z-10">
                    T_ADV // MAJ
                  </div>
                </div>

                <h3 className="text-base font-serif text-accent-navy mt-6 leading-tight">
                  Major (Retd.) <br />Muditha Kaluarachchi
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-accent-navy/40 font-sans uppercase block mt-2">
                  TECHNICAL ADVISER
                </span>
              </div>
              <p className="text-[11px] font-sans text-accent-navy/55 leading-relaxed mt-6">
                Oversees technical integration, operational logistics, electronic security protocols, and tactical defense training programs.
              </p>
            </div>

            {/* Leader 3 */}
            <div className="group border-b border-border-thin pb-8 lg:pb-0 lg:border-b-0 lg:border-r lg:pr-6 lg:border-border-thin flex flex-col justify-between min-h-[440px]">
              <div>
                <div className="w-full aspect-[3/4] bg-surface-grey border border-border-thin/80 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-lines opacity-20" />
                  <div className="w-24 h-24 rounded-full border border-accent-navy/15 flex items-center justify-center">
                    <Compass className="w-8 h-8 text-accent-navy/30" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-background border border-border-thin px-2 py-0.5 font-mono text-[8px] text-accent-navy/60">
                    EXEC // DIR
                  </div>
                </div>

                <h3 className="text-base font-serif text-accent-navy mt-6 leading-tight">
                  Diduli Lihansika <br />Weeratunga
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-accent-navy/40 font-sans uppercase block mt-2">
                  DIRECTOR
                </span>
              </div>
              <p className="text-[11px] font-sans text-accent-navy/55 leading-relaxed mt-6">
                Leads corporate governance, international relations, business planning, and client engagement systems.
              </p>
            </div>

            {/* Leader 4 */}
            <div className="group border-b border-border-thin pb-8 lg:pb-0 lg:border-b-0 lg:border-r lg:pr-6 lg:border-border-thin flex flex-col justify-between min-h-[440px]">
              <div>
                <div className="w-full aspect-[3/4] bg-surface-grey border border-border-thin/80 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-lines opacity-20" />
                  <div className="w-24 h-24 rounded-full border border-accent-navy/15 flex items-center justify-center">
                    <Activity className="w-8 h-8 text-accent-navy/30" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-background border border-border-thin px-2 py-0.5 font-mono text-[8px] text-accent-navy/60">
                    INTEL // CYB
                  </div>
                </div>

                <h3 className="text-base font-serif text-accent-navy mt-6 leading-tight">
                  K. M. N. P. <br />Kulathunga
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-accent-navy/40 font-sans uppercase block mt-2">
                  HEAD OF CYBERSECURITY
                </span>
              </div>
              <p className="text-[11px] font-sans text-accent-navy/55 leading-relaxed mt-6">
                Manages digital protection assets, infrastructure defense systems, cloud security, and cybersecurity operations.
              </p>
            </div>

            {/* Leader 5 */}
            <div className="group pb-8 lg:pb-0 flex flex-col justify-between min-h-[440px]">
              <div>
                <div className="w-full aspect-[3/4] bg-surface-grey border border-border-thin/80 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 grid-lines opacity-20" />
                  <div className="w-24 h-24 rounded-full border border-accent-navy/15 flex items-center justify-center">
                    <Layers className="w-8 h-8 text-accent-navy/30" />
                  </div>
                  <div className="absolute bottom-2 left-2 bg-background border border-border-thin px-2 py-0.5 font-mono text-[8px] text-accent-navy/60">
                    SAFE // SQN
                  </div>
                </div>

                <h3 className="text-base font-serif text-accent-navy mt-6 leading-tight">
                  Squadron Leader <br />Niroshan (Ret.)
                </h3>
                <span className="text-[9px] font-bold tracking-widest text-accent-navy/40 font-sans uppercase block mt-2">
                  FIRE OFFICER
                </span>
              </div>
              <p className="text-[11px] font-sans text-accent-navy/55 leading-relaxed mt-6">
                Ex-air force officer in charge of industrial fire prevention programs, crisis containment, hazard control, and building audits.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FINAL CTA / CONTACT FORM */}
      <section id="contact" className="py-24 md:py-32 bg-surface-ivory relative overflow-hidden">
        {/* Grid and subtle gradient background */}
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Left Column: CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] text-accent-gold font-sans uppercase">
                // SECURE YOUR WORLD
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-accent-navy font-light leading-tight mt-6">
                YOUR SECURITY SHOULD NEVER BE AN AFTERTHOUGHT.
              </h2>
              <p className="text-sm font-sans text-accent-navy/60 mt-6 leading-relaxed max-w-sm">
                Let’s build a protection strategy designed for your world.
              </p>
            </div>

            <div className="mt-12 lg:mt-24 border-t border-border-thin pt-8 font-sans">
              <span className="text-[9px] font-mono text-accent-navy/40 uppercase block mb-4">
                // IMMEDIATE RESPONSE HOTLINE
              </span>
              <div className="flex flex-col gap-2">
                <a href="tel:+94117654321" className="text-2xl font-serif text-accent-navy font-semibold hover:text-accent-gold transition-colors">
                  +94 11 765 4321
                </a>
                <span className="text-[10px] text-accent-navy/50 tracking-wider">
                  Available 24 hours a day, 7 days a week.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Request Terminal */}
          <div className="lg:col-span-7 bg-background border border-border-thin p-8 md:p-12 rounded-sm shadow-sm relative">
            
            {formStatus !== "success" ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="flex items-center justify-between border-b border-border-thin pb-4 mb-4 font-mono text-[9px] text-accent-navy/40">
                  <span>COMM_CHANNEL: SH_SECURE_PORT</span>
                  <span>STANDBY</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 font-sans">
                    <label htmlFor="name" className="text-[10px] font-bold tracking-widest text-accent-navy/60">
                      FULL NAME *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Muditha Perera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border border-border-thin bg-surface-ivory px-4 py-3 text-xs text-accent-navy placeholder-accent-navy/30 focus:outline-none focus:border-accent-navy transition-colors rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-sans">
                    <label htmlFor="email" className="text-[10px] font-bold tracking-widest text-accent-navy/60">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. client@domain.lk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border border-border-thin bg-surface-ivory px-4 py-3 text-xs text-accent-navy placeholder-accent-navy/30 focus:outline-none focus:border-accent-navy transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2 font-sans">
                    <label htmlFor="org" className="text-[10px] font-bold tracking-widest text-accent-navy/60">
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      id="org"
                      type="text"
                      placeholder="e.g. Apex Holdings"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="border border-border-thin bg-surface-ivory px-4 py-3 text-xs text-accent-navy placeholder-accent-navy/30 focus:outline-none focus:border-accent-navy transition-colors rounded-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2 font-sans">
                    <label htmlFor="type" className="text-[10px] font-bold tracking-widest text-accent-navy/60">
                      SCOPE OF PROTECTION
                    </label>
                    <select
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="border border-border-thin bg-surface-ivory px-4 py-3 text-xs text-accent-navy focus:outline-none focus:border-accent-navy transition-colors rounded-sm cursor-pointer"
                    >
                      <option value="Full Audit">Threat Vulnerability Audit</option>
                      <option value="Man Guarding">Armed & Static Man Guarding</option>
                      <option value="Cyber">Cybersecurity Auditing</option>
                      <option value="Electronic">CCTV & Electronic Security</option>
                      <option value="Executive">Executive Close Protection</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 font-sans">
                  <label htmlFor="msg" className="text-[10px] font-bold tracking-widest text-accent-navy/60">
                    OPERATIONAL DETAILS / REQUEST DESCRIPTION
                  </label>
                  <textarea
                    id="msg"
                    rows={4}
                    placeholder="Briefly describe the assets or perimeters requiring security audits..."
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    className="border border-border-thin bg-surface-ivory px-4 py-3 text-xs text-accent-navy placeholder-accent-navy/30 focus:outline-none focus:border-accent-navy transition-colors rounded-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full flex items-center justify-center gap-3 bg-accent-navy text-white px-8 py-4.5 text-xs font-bold tracking-[0.2em] hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 button-gold-accent shadow-sm disabled:bg-accent-navy/40 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <>
                      TRANSMITTING ENCRYPTED PACKET...
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    "REQUEST A CONSULTATION"
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 border border-accent-navy/20 bg-surface-ivory flex items-center justify-center rounded-full mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-serif text-accent-navy font-semibold italic">
                  TRANSMISSION COMPLETED
                </h3>
                <p className="text-xs font-sans text-accent-navy/60 max-w-sm mt-4 leading-relaxed">
                  Your request has been routed to our Operations Command Division. A security expert will review your profile and contact you securely within 4 hours.
                </p>

                {/* Digital certificate */}
                <div className="bg-surface-grey border border-border-thin p-5 mt-8 w-full max-w-md text-left font-mono text-[9px] text-accent-navy/65 space-y-2 rounded-sm relative">
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <span className="text-accent-navy/35 block mb-1">TRANSMISSION_ID:</span>
                    <span>{accessCode}</span>
                  </div>
                  <div>
                    <span className="text-accent-navy/35 block mb-1">ROUTING_KEY:</span>
                    <span>SEC_INTEL_COLOMBO_03</span>
                  </div>
                  <div>
                    <span className="text-accent-navy/35 block mb-1">ENCRYPTION:</span>
                    <span>RSA-4096 / TLS 1.3 // STANDBY FOR CALL</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setFormData({ name: "", email: "", org: "", type: "Full Audit", msg: "" });
                    setFormStatus("idle");
                  }}
                  className="mt-8 text-xs font-bold tracking-widest text-accent-navy hover:text-accent-gold transition-colors"
                >
                  [ OPEN NEW SECURE CHANNEL ]
                </button>
              </motion.div>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
