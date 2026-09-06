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
    name: "Brigadier (Retd.) H. J. P. Weerathunga",
    role: "Chairman",
    creds: "MSc (Information Security), MPA, Dip. (Occupational Health & Safety)",
    image: "/team/chairman-circle.png",
    bio: "Brigadier (Retired) Nandana Weeratunga, with over 30 years of distinguished military service, combines expertise in governance, cybersecurity, occupational safety, and networking. Holding an MPA, an MSc in Information Security, and diplomas in OHS and Networking, he excels in driving innovation, ensuring compliance, and delivering robust, integrated security solutions."
  },
  {
    name: "Major (Retd.) Muditha Kaluarachchi",
    role: "Technical Adviser",
    creds: "Engineering Specialist (Telecommunication & IT)",
    image: "/team/technical-adviser-circle.png",
    bio: "An engineering specialist in telecommunication and IT, with extensive experience in CCTV, intrusion detection, and advanced security automation. His analytical precision ensures Stronghold's systems remain innovative, reliable, and technologically superior."
  },
  {
    name: "Diduli Lihansika Weeratunga",
    role: "Director",
    creds: "Strategic Development & Human Resources",
    image: "/team/director-circle.png",
    bio: "Leads strategic development, human resources, and administration. Her vision drives organisational agility, operational efficiency, and client satisfaction — ensuring Stronghold's services evolve in line with global trends."
  },
  {
    name: "K. M. N. P. Kulathunga",
    role: "Head of Cybersecurity",
    creds: "BSc Applied Science, CEH v11, (ISC)² CC, AWS, Splunk, SentinelOne",
    image: "/team/cybersecurity-circle.png",
    bio: "A highly skilled cybersecurity professional with a BSc in Applied Science (Computer Science & Physics) and multiple global certifications, including CEH v11, (ISC)² Certified in Cybersecurity (CC), AWS Security Operations, Splunk Security Analytics, and SentinelOne Administration. Demonstrates advanced expertise in ethical hacking, threat detection, incident response, and cloud security management."
  },
  {
    name: "Squadron Leader (Retd.) KMM Iroshan",
    role: "Fire Officer",
    creds: "SLAF Veteran, CBRN Squadron Leader (Retd.), MBA, PGD Strategic Mgmt (UK)",
    image: "/team/fire-officer-circle.png",
    bio: "Squadron Leader Niroshan (Ret.) offers an unparalleled foundation of strategic expertise and operational discipline forged during his service as a Fire Officer in the Sri Lanka Air Force (SLAF). His specialized credentials—including an MBA, PGD in Strategic Management (UK), and PGD in Defence Management (UOK)—ensure a robust, disciplined approach to security strategy and risk mitigation."
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
                src="/team/chairman-portrait.jpg"
                alt="Brigadier (Retd.) H. J. P. Weerathunga"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b30] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold tracking-widest text-accent-gold uppercase block mb-1">CHAIRMAN</span>
                <p className="text-base font-bold">Brigadier (Retd.) H. J. P. Weerathunga</p>
                <p className="text-[11px] text-accent-gold/90 font-medium">MSc (InfoSec), MPA, Dip. (OHS)</p>
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
                <p className="font-bold text-[#0e1b30] text-base">Brigadier (Retd.) H. J. P. Weerathunga</p>
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
              Led by decorated senior military officers and industry specialists bringing strategic discipline, cybersecurity, and operational excellence to private defense.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member) => (
              <div key={member.name} className="bg-[#0b1424] border border-white/10 p-8 flex flex-col justify-between group hover:border-accent-gold transition-all duration-300 shadow-lg">
                <div>
                  {/* Member Avatar & Header */}
                  <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/10">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-accent-gold/40 bg-[#0e1b30] shrink-0 group-hover:border-accent-gold transition-colors shadow-md">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-accent-gold tracking-widest uppercase block mb-1">{member.role}</span>
                      <h3 className="text-base font-bold text-white group-hover:text-accent-gold transition-colors leading-snug">{member.name}</h3>
                      <p className="text-[11px] text-accent-gold/80 mt-1 font-medium leading-tight">{member.creds}</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-white/80 leading-relaxed font-normal">{member.bio}</p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-accent-gold text-xs font-bold tracking-wider">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>COMMAND VERIFIED</span>
                  </div>
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
