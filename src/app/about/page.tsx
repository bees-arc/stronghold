"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Cpu, Users, Award, CheckCircle2, ArrowRight } from "lucide-react";
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
    details: "Continuous surveillance, real-time intelligence gathering and instant readiness ensure threats are intercepted long before they escalate."
  },
  {
    title: "INNOVATION",
    desc: "Adapting modern technology and digital defense systems to engineer smarter protection.",
    details: "We fuse sensor telemetry, cybersecurity diagnostics and predictive analytics into physical guarding frameworks to create intelligent defense ecosystems."
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
    name: "Brigadier (Retd.) H. J. P. Weerathunga",
    role: "Chairman",
    creds: "MSc (Information Security), MPA, Dip. (Occupational Health & Safety)",
    image: "/chairman.jpg",
    bio: "With over thirty years of distinguished military service, Brigadier Weeratunga combines extensive expertise in national security, governance, cybersecurity and occupational safety. Holding a Master of Public Administration, an MSc in Information Security and specialized diplomas in OHS and networking, he guides Stronghold with strategic foresight and disciplined operational excellence."
  },
  {
    name: "Major (Retd.) Muditha Kaluarachchi",
    role: "Technical Adviser",
    creds: "Telecommunications & IT Security Specialist",
    image: "/guards.jpg",
    bio: "An engineering specialist in telecommunications and enterprise IT infrastructure with decades of hands-on experience in CCTV networks, intrusion detection systems and advanced security automation. His analytical precision ensures our tactical and electronic installations remain innovative, reliable and technologically superior."
  },
  {
    name: "Diduli Lihansika Weeratunga",
    role: "Director",
    creds: "Strategic Development & Human Resources",
    image: "/chairman.jpg",
    bio: "Directs organizational strategy, talent acquisition, human capital development and corporate administration. Her forward-looking vision drives operational agility, personnel discipline and superior client satisfaction, ensuring Stronghold services consistently exceed international private security benchmarks."
  },
  {
    name: "K. M. N. P. Kulathunga",
    role: "Head of Cybersecurity",
    creds: "BSc Applied Science, CEH v11, (ISC)² CC, AWS Security Operations, Splunk, SentinelOne",
    image: "/guards.jpg",
    bio: "A certified cybersecurity strategist with deep technical mastery in ethical hacking, real-time threat hunting, incident response protocols and cloud security architecture. He leads our proactive digital defense units safeguarding critical networks and enterprise data assets across complex cyber environments."
  },
  {
    name: "Squadron Leader (Retd.) KMM Iroshan",
    role: "Fire Officer & CBRN Specialist",
    creds: "SLAF Veteran, MBA, PGD in Strategic Management (UK), PGD in Defence Management (UOK)",
    image: "/bodyguard.jpg",
    bio: "Forged during extensive service as a Fire Officer and Chemical, Biological, Radiological, and Nuclear defense specialist in the Sri Lanka Air Force. His advanced management credentials provide an authoritative foundation for disaster response protocols, life safety compliance and strategic risk mitigation."
  }
];

export default function AboutPage() {
  return (
    <div className="bg-[#070c14] text-[#ddd8cf] min-h-screen flex flex-col font-jakarta">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[#0b121c] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-3 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-none text-accent-gold font-mono text-[10px] tracking-[0.25em] uppercase mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ORGANISATIONAL PROFILE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white max-w-3xl leading-tight">
            REDEFINING PROTECTION THROUGH <span className="text-accent-gold">INTELLIGENCE</span>, DISCIPLINE &amp; TECHNOLOGY
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            Stronghold Security &amp; Investigation is a premier protective services firm founded by retired military leadership with over three decades of operational command. We fuse battlefield discipline with advanced digital intelligence to deliver total security.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#070c14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-[#0e1724] border border-white/10 p-10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="w-10 h-10 bg-accent-gold text-[#070c14] flex items-center justify-center font-bold text-sm mb-6">
                01
              </div>
              <h2 className="text-2xl font-sans font-bold text-white tracking-tight mb-4">
                OUR VISION
              </h2>
              <p className="text-sm text-white/85 leading-relaxed font-normal">
                To be the most trusted and innovative security partner in South Asia, setting the absolute industry benchmark for operational excellence, technological supremacy and proactive defense in an evolving global risk landscape.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-accent-gold mt-8" />
          </div>

          <div className="bg-[#0e1724] border border-white/10 p-10 flex flex-col justify-between text-white shadow-lg">
            <div>
              <div className="w-10 h-10 bg-accent-gold text-[#070c14] flex items-center justify-center font-bold text-sm mb-6">
                02
              </div>
              <h2 className="text-2xl font-sans font-bold text-white tracking-tight mb-4">
                OUR MISSION
              </h2>
              <p className="text-sm text-white/85 leading-relaxed font-normal">
                We safeguard corporations, government institutions, and private individuals by deploying highly trained professionals integrated with modern surveillance and cyber systems. Our mission is to deliver complete peace of mind by anticipating threats, adapting to complex challenges, and upholding uncompromised integrity in everything we do.
              </p>
            </div>
            <div className="w-12 h-[2px] bg-accent-gold mt-8" />
          </div>

        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-24 bg-[#09111c] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] bg-[#070c14] border border-white/15 overflow-hidden shadow-2xl">
              <Image
                src="/chairman.jpg"
                alt="Brigadier (Retd.) Nandana Weeratunga"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-mono tracking-widest text-accent-gold uppercase block mb-1 font-bold">CHAIRMAN</span>
                <p className="text-base font-bold font-sans">Brigadier (Retd.) Nandana Weeratunga</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-accent-gold font-mono text-xs tracking-widest uppercase mb-4 font-bold">
              <span className="w-6 h-[1.5px] bg-accent-gold" />
              EXECUTIVE STATEMENT
            </div>

            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-6">
              &ldquo;At Stronghold, protection is not merely our business. It is our enduring purpose.&rdquo;
            </h2>

            <div className="space-y-4 text-sm text-white/85 leading-relaxed font-normal">
              <p>
                We operate in an era where security challenges evolve faster than ever before. Traditional reactive approaches are no longer adequate to shield modern enterprises and public institutions. To counter these emerging risks, Stronghold merges military grade tactical readiness with cutting edge electronic intelligence, ensuring every client benefits from foresight, deterrence and decisive force.
              </p>
              <p>
                Our guiding philosophy remains clear: integrity in action, innovation in service, and an unwavering commitment to your personal and organizational safety. With every client partnership, we pledge complete reliability, absolute confidentiality, and an unbreakable promise that your peace of mind remains our supreme priority.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="font-bold text-white text-base">Brigadier (Retd.) Nandana Weeratunga</p>
                <p className="text-xs text-accent-gold font-mono mt-0.5">Chairman, Stronghold Security &amp; Investigation (Pvt) Ltd</p>
              </div>
              <div className="w-8 h-8 rounded-full border border-accent-gold flex items-center justify-center text-accent-gold">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#070c14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-[0.3em] text-accent-gold uppercase block mb-3 font-bold">
              OPERATIONAL PILLARS
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">
              OUR CORE VALUES
            </h2>
            <p className="text-xs text-white/70 mt-4 leading-relaxed font-normal">
              Every officer, engineer, and commander at Stronghold is held accountable to five fundamental operational tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((val, i) => (
              <div key={val.title} className="bg-[#0e1724] border border-white/10 p-6 flex flex-col justify-between hover:border-accent-gold/50 transition-colors shadow-md">
                <div>
                  <span className="text-xs font-mono font-bold text-accent-gold block mb-4">0{i + 1}.</span>
                  <h3 className="font-sans font-bold text-base text-white mb-2">{val.title}</h3>
                  <p className="text-xs text-white/80 leading-relaxed mb-4 font-normal">{val.desc}</p>
                </div>
                <p className="text-[11px] text-white/60 leading-normal border-t border-white/10 pt-4 font-normal">
                  {val.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-[#0b121c] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] font-mono tracking-[0.3em] text-accent-gold uppercase block mb-3 font-bold">
              COMMAND STRUCTURE
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-white">
              EXECUTIVE LEADERSHIP TEAM
            </h2>
            <p className="text-xs text-white/70 mt-4 leading-relaxed font-normal">
              Led by decorated senior military officers and certified cybersecurity authorities bringing strategic discipline to private defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div key={member.name} className="bg-[#0e1724] border border-white/10 p-8 flex flex-col justify-between group hover:border-accent-gold/50 transition-colors shadow-lg">
                <div>
                  <span className="text-[10px] font-mono text-accent-gold tracking-widest uppercase block mb-2 font-bold">{member.role}</span>
                  <h3 className="text-xl font-sans font-bold text-white group-hover:text-accent-gold transition-colors">{member.name}</h3>
                  <p className="text-xs font-mono text-accent-gold/80 mt-1 mb-6 pb-4 border-b border-white/10">{member.creds}</p>
                  <p className="text-xs text-white/80 leading-relaxed font-normal">{member.bio}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-accent-gold text-xs font-mono tracking-wider font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>COMMAND VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#070c14] text-center border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
            READY TO CONSULT WITH OUR COMMAND TEAM?
          </h2>
          <p className="text-xs text-white/80 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Schedule an executive security appraisal for your commercial, institutional, or residential property.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-[#070c14] px-8 py-3.5 text-xs font-bold font-mono tracking-widest hover:bg-white transition-all duration-300 shadow-md"
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
