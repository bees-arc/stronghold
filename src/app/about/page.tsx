"use client";

import Image from "next/image";
import { ShieldCheck, Award, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CORE_VALUES = [
  {
    title: "INTEGRITY",
    desc: "Acting with complete honesty, transparency and accountability across every operational deployment.",
    details: "In an industry where trust is everything, Stronghold maintains uncompromised ethical standards in all field operations, client intelligence and governance."
  },
  {
    title: "VIGILANCE",
    desc: "Remaining permanently alert, observant and proactive in every operational environment.",
    details: "Continuous surveillance, disciplined patrols, and operational readiness ensure that potential threats are identified and mitigated before they arise."
  },
  {
    title: "INNOVATION",
    desc: "Adapting modern technology and surveillance systems to deliver smarter protection.",
    details: "We integrate modern CCTV surveillance, electronic alarms, and physical guarding into comprehensive security frameworks that protect clients before risks arise."
  },
  {
    title: "EXCELLENCE",
    desc: "Maintaining rigorous military precision, tactical discipline and unyielding operational standards.",
    details: "Our training regimens and field protocols demand flawless execution across all divisions, drawn from over thirty years of military leadership."
  },
  {
    title: "TRUST",
    desc: "Building lasting client relationships grounded in reliability, discretion and confidentiality.",
    details: "We act as an integrated extension of our clients' leadership teams, protecting reputation, personnel and valuable assets with total confidentiality."
  }
];

const LEADERSHIP_TEAM = [
  {
    name: "Brigadier (Retd.) Nandana Weeratunga",
    role: "Chairman",
    creds: "Former Senior Military Commander",
    image: "/chairman.jpg",
    bio: "With over three decades of distinguished military service, Brigadier Weeratunga leads Stronghold with strategic discipline, integrity, and operational foresight. He holds advanced postgraduate credentials in governance, information security, and occupational safety."
  },
  {
    name: "Major (Retd.) Muditha Kaluarachchi",
    role: "Technical Adviser",
    creds: "Electronic Surveillance & Security Specialist",
    image: "/guards.jpg",
    bio: "An engineering specialist with extensive experience in CCTV planning, automated intrusion detection, and electronic access systems, ensuring all security installations are dependable and robust."
  },
  {
    name: "Diduli Lihansika Weeratunga",
    role: "Director",
    creds: "Strategic Development & Human Resources",
    image: "/chairman.jpg",
    bio: "Directs organizational growth, talent development, and quality standards, ensuring our security guard corps maintains exceptional discipline and client satisfaction."
  },
  {
    name: "K. M. N. P. Kulathunga",
    role: "Head of Cybersecurity",
    creds: "Information Security & Threat Defense Specialist",
    image: "/guards.jpg",
    bio: "An experienced information security professional leading digital risk defense, network audits, and data protection for corporate and institutional clients."
  },
  {
    name: "Squadron Leader (Retd.) KMM Iroshan",
    role: "Fire Officer & Safety Specialist",
    creds: "SLAF Veteran & Emergency Response Specialist",
    image: "/bodyguard.jpg",
    bio: "A retired Sri Lanka Air Force Fire Officer bringing extensive expertise in emergency preparedness, fire safety compliance, and crisis risk mitigation across public and private properties."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8f6f0] text-[#0e1b30] min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[#0e1b30] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/15 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-3 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-none text-accent-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>ORGANISATIONAL PROFILE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            REDEFINING PROTECTION THROUGH <span className="text-accent-gold">INTELLIGENCE</span>, DISCIPLINE &amp; TECHNOLOGY
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/90 max-w-2xl leading-relaxed">
            Stronghold Security &amp; Investigation is a premier protective services firm founded by retired military leadership with over three decades of operational command. We fuse battlefield discipline with modern security intelligence to deliver total protection.
          </p>
        </div>
      </section>

      {/* Vision & Mission (Light beige background with solid Navy Blue text) */}
      <section className="py-20 bg-[#f8f6f0] border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-white border border-[#e5e0d8] p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 bg-[#0e1b30] text-accent-gold flex items-center justify-center font-bold text-sm mb-6">
                01
              </div>
              <h2 className="text-2xl font-bold text-[#0e1b30] tracking-tight mb-4">
                OUR VISION
              </h2>
              <p className="text-sm text-[#0e1b30] leading-relaxed font-normal">
                To be the most trusted and innovative security partner in South Asia, setting the absolute industry benchmark for operational excellence, technological supremacy and proactive defense in an evolving global risk landscape.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-accent-gold mt-8" />
          </div>

          <div className="bg-[#0e1b30] border border-[#0e1b30] p-10 flex flex-col justify-between text-white shadow-sm">
            <div>
              <div className="w-10 h-10 bg-accent-gold text-[#0e1b30] flex items-center justify-center font-bold text-sm mb-6">
                02
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight mb-4">
                OUR MISSION
              </h2>
              <p className="text-sm text-white/90 leading-relaxed font-normal">
                We safeguard corporations, government institutions, and private individuals by deploying highly trained professionals integrated with modern surveillance and electronic systems. Our mission is to deliver complete peace of mind by anticipating threats, adapting to complex challenges, and upholding uncompromised integrity in everything we do.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-accent-gold mt-8" />
          </div>

        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-24 bg-white border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] bg-[#0e1b30] border border-[#0e1b30] overflow-hidden shadow-xl">
              <Image
                src="/chairman.jpg"
                alt="Brigadier (Retd.) Nandana Weeratunga"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b30] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-widest text-accent-gold uppercase block mb-1">CHAIRMAN</span>
                <p className="text-base font-bold">Brigadier (Retd.) Nandana Weeratunga</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-accent-gold text-xs font-bold tracking-widest uppercase mb-4">
              <span className="w-6 h-[2px] bg-accent-gold" />
              CHAIRMAN&apos;S MESSAGE
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1b30] mb-6 leading-tight">
              &ldquo;At Stronghold, protection is not merely our business. It is our enduring purpose.&rdquo;
            </h2>

            <div className="space-y-4 text-sm text-[#0e1b30] leading-relaxed font-normal">
              <p>
                We live in an era where security challenges evolve faster than ever before. To counter them, Stronghold merges military grade readiness with cutting edge security technology, ensuring every client benefits from both foresight and force.
              </p>
              <p>
                Our guiding principle is simple: integrity in action, innovation in service, and unwavering commitment to your safety. With every partnership, we pledge reliability, confidentiality, and an unbreakable promise that your peace of mind remains our highest priority.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e5e0d8] flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0e1b30] text-base">Brigadier (Retd.) Nandana Weeratunga</p>
                <p className="text-xs text-[#0e1b30]/70 font-semibold mt-0.5">Chairman, Stronghold Security &amp; Investigation (Pvt) Ltd</p>
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-accent-gold flex items-center justify-center text-accent-gold">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values (Clean light background with solid Dark Navy Blue text) */}
      <section className="py-24 bg-[#f8f6f0] border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-gold uppercase block mb-3">
              OPERATIONAL PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0e1b30]">
              OUR CORE VALUES
            </h2>
            <p className="text-xs md:text-sm text-[#0e1b30] mt-4 leading-relaxed font-medium">
              Every officer, engineer, and commander at Stronghold is held accountable to five fundamental operational tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, i) => (
              <div key={val.title} className="bg-white border border-[#e5e0d8] p-6 flex flex-col justify-between hover:border-accent-gold transition-colors shadow-sm">
                <div>
                  <span className="text-sm font-bold text-accent-gold block mb-4">0{i + 1}.</span>
                  <h3 className="font-bold text-base text-[#0e1b30] mb-2">{val.title}</h3>
                  <p className="text-xs text-[#0e1b30] font-semibold leading-relaxed mb-4">{val.desc}</p>
                </div>
                <p className="text-[11px] text-[#0e1b30]/85 font-normal leading-normal border-t border-[#e5e0d8] pt-4">
                  {val.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-[#0e1b30] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-bold tracking-[0.25em] text-accent-gold uppercase block mb-3">
              COMMAND STRUCTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              EXECUTIVE LEADERSHIP TEAM
            </h2>
            <p className="text-xs md:text-sm text-white/80 mt-4 leading-relaxed font-normal">
              Led by decorated senior military officers bringing strategic discipline and operational excellence to private defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div key={member.name} className="bg-[#0b1424] border border-white/10 p-8 flex flex-col justify-between group hover:border-accent-gold transition-colors shadow-lg">
                <div>
                  <span className="text-[10px] font-bold text-accent-gold tracking-widest uppercase block mb-2">{member.role}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-gold transition-colors">{member.name}</h3>
                  <p className="text-xs text-accent-gold/90 mt-1 mb-6 pb-4 border-b border-white/10 font-semibold">{member.creds}</p>
                  <p className="text-xs text-white/85 leading-relaxed font-normal">{member.bio}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-accent-gold text-xs font-bold tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>COMMAND VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#f8f6f0] text-center border-b border-[#e5e0d8]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0e1b30] mb-4">
            READY TO CONSULT WITH OUR COMMAND TEAM?
          </h2>
          <p className="text-xs md:text-sm text-[#0e1b30] mb-8 max-w-xl mx-auto leading-relaxed font-medium">
            Schedule an executive security appraisal for your commercial, institutional, or residential property.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#0e1b30] text-white px-8 py-3.5 text-xs font-bold tracking-widest hover:bg-accent-gold hover:text-[#0e1b30] transition-all duration-300 shadow-md"
          >
            REQUEST SECURITY AUDIT
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
