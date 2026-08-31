"use client";

import { Shield, Eye, Cpu, Radio, Zap, Lock, ArrowRight, CheckCircle2, Server, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES_DETAILED = [
  {
    id: "man-guard",
    num: "01",
    title: "MAN GUARD SECURITY",
    tagline: "Vetted, disciplined security personnel for private and public sector environments.",
    description: "Our uniformed guarding corps comprises rigorously screened personnel, including ex-military officers and specialized security operatives. Every guard undergoes continuous physical fitness assessments, situational judgment testing, customer relations protocols, and tactical crisis training.",
    capabilities: [
      "Static and access control guarding for corporate towers and manufacturing plants",
      "Executive close protection for high profile individuals and corporate delegations",
      "Armed and unarmed mobile escort support for secure transit",
      "Specialized canine K9 patrol units for perimeter searches and asset protection",
      "Strict gatehouse logbook administration and digital visitor badge verification"
    ],
    highlight: "Deployment readiness with 24 hour supervisory oversight and random patrol checks."
  },
  {
    id: "special-events",
    num: "02",
    title: "SPECIAL EVENT SECURITY",
    tagline: "Strategic crowd management, VIP protection, and incident containment.",
    description: "From international summits and musical concerts to sporting tournaments and private high net worth gatherings, Stronghold crafts airtight security plans. We coordinate closely with local law enforcement, venue managers, and emergency response services.",
    capabilities: [
      "Access control turnstiles, metal detector arches, and bag screening zones",
      "VIP arrival coordination, green room defense, and armored route escorts",
      "Choreographed crowd containment and dynamic queue flow management",
      "Emergency evacuation blueprints and pre-event hazard sweeping",
      "Plainclothes surveillance agents stationed discreetly across the venue"
    ],
    highlight: "Zero disruption crowd management built on psychological de-escalation and situational vigilance."
  },
  {
    id: "cybersecurity",
    num: "03",
    title: "CYBERSECURITY SERVICES",
    tagline: "Proactive threat detection, vulnerability diagnostics, and network hardening.",
    description: "Led by certified ethical hackers and security analytics architects, our cyber division defends organizational data assets against ransomware, phishing vectors, unauthorized intrusions, and digital corporate espionage.",
    capabilities: [
      "Comprehensive penetration testing and infrastructure vulnerability audits",
      "Real-time Security Operations Center threat hunting and SIEM log monitoring",
      "Cloud perimeter hardening across AWS, Microsoft Azure, and hybrid environments",
      "Endpoint detection and response deployment using enterprise security suites",
      "Staff cybersecurity awareness workshops and simulated phishing campaigns"
    ],
    highlight: "Certified practitioners holding CEH v11, AWS Security, Splunk, and (ISC)² accreditations."
  },
  {
    id: "electronic-security",
    num: "04",
    title: "ELECTRONIC SECURITY SOLUTIONS",
    tagline: "Integrated smart access control, biometric verification, and intrusion alarms.",
    description: "We engineer layered electronic defense barriers that safeguard sensitive internal zones, server rooms, and warehouse perimeters. Our systems deliver instant alerts and automated lockdown protocols during unauthorized physical access attempts.",
    capabilities: [
      "Biometric fingerprint, facial recognition, and RFID smart card access controls",
      "Infrared perimeter intrusion detection tripwires and motion matrices",
      "Glass break sensors, magnetic door contacts, and vibration detectors",
      "Automated facility lockdown triggers and loud acoustic deterrent sirens",
      "Preventative maintenance schedules and continuous sensor calibration"
    ],
    highlight: "Seamless integration between physical electronic barriers and remote monitoring command centers."
  },
  {
    id: "cctv-sensors",
    num: "05",
    title: "CCTV & DISTANCE SENSOR SYSTEMS",
    tagline: "High resolution optical networks, thermal imaging, and radar perimeter tripwires.",
    description: "Modern video surveillance requires more than passive cameras. We install intelligent visual networks equipped with artificial intelligence analytics, license plate recognition, and long range thermal sensors capable of spotting anomalies in complete darkness.",
    capabilities: [
      "Ultra high definition 4K optical cameras with motorized pan tilt zoom capabilities",
      "Thermal boundary cameras for zero-light and adverse weather security",
      "Automated License Plate Recognition and vehicle checkpoint logging",
      "AI video analytics for abandoned baggage, loitering, and perimeter breach alerts",
      "Encrypted cloud recording archives with tamper evident digital watermarking"
    ],
    highlight: "Strategic camera positioning ensuring total elimination of blind spots across wide facilities."
  },
  {
    id: "monitoring-response",
    num: "06",
    title: "24/7 MONITORING & RAPID RESPONSE",
    tagline: "Unbroken surveillance and rapid response teams for immediate protection.",
    description: "Our Central Operations Control Center functions around the clock, continuously monitoring live camera feeds, alarm triggers, and patrol updates. When an incident occurs, trained response teams dispatch immediately to secure the premises.",
    capabilities: [
      "Live 24 hour command center watch teams monitoring real-time video and alarm feeds",
      "Immediate dispatch of armed tactical response units upon verified alarm activation",
      "Direct communication links to national emergency services and police stations",
      "GPS tracked mobile patrols performing scheduled and randomized physical audits",
      "Detailed post incident investigative reports complete with timestamped video evidence"
    ],
    highlight: "Rapid response times supported by dedicated mobile patrol vehicles and tactical teams."
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#070c14] text-[#ddd8cf] min-h-screen flex flex-col font-jakarta">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[#0b121c] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-3 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-none text-accent-gold font-mono text-[10px] tracking-[0.25em] uppercase mb-6">
            <Cpu className="w-3.5 h-3.5" />
            <span>OPERATIONAL CAPABILITIES</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white max-w-3xl leading-tight">
            COMPREHENSIVE <span className="text-accent-gold">SECURITY</span> DIVISIONS
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            A full spectrum of physical, electronic, and digital protective services engineered to eliminate vulnerabilities and safeguard modern enterprises.
          </p>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="py-24 bg-[#070c14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          
          {SERVICES_DETAILED.map((service) => {
            return (
              <div
                key={service.id}
                id={service.id}
                className="border border-white/10 bg-[#0e1724] p-8 md:p-12 transition-all hover:border-accent-gold/40 shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Number & Title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-mono font-bold bg-accent-gold text-[#070c14] px-3 py-1">
                        {service.num}
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-accent-gold uppercase font-bold">
                        CORE SERVICE
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight mb-3">
                      {service.title}
                    </h2>

                    <p className="text-xs font-bold text-accent-gold font-sans leading-relaxed mb-6">
                      {service.tagline}
                    </p>

                    <div className="bg-[#070c14] p-4 border-l-2 border-accent-gold text-[12px] text-white/85 font-medium font-sans leading-relaxed">
                      {service.highlight}
                    </div>
                  </div>

                  {/* Right Column: Deep Description & Capabilities */}
                  <div className="lg:col-span-8 flex flex-col justify-between h-full">
                    <p className="text-xs md:text-sm text-white/90 font-normal leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <div>
                      <h3 className="text-xs font-mono font-bold text-accent-gold uppercase tracking-wider mb-4">
                        KEY CAPABILITIES AND DEPLOYMENT PARAMETERS
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-start gap-2.5 text-xs text-white/90 font-normal leading-relaxed bg-[#070c14] border border-white/10 p-3.5 shadow-sm">
                            <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest font-bold">
                        AVAILABLE NATIONWIDE IN SRI LANKA
                      </span>
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold font-mono text-accent-gold hover:text-white transition-colors"
                      >
                        DEPLOY SERVICE
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#0b121c] text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
            NEED A CUSTOM SECURITY BLUEPRINT FOR YOUR FACILITY?
          </h2>
          <p className="text-xs text-white/80 mb-8 max-w-xl mx-auto leading-relaxed">
            Our technical advisers will perform an exhaustive risk evaluation and structure an integrated protective package.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-[#070c14] px-8 py-3.5 text-xs font-bold font-mono tracking-widest hover:bg-white transition-all duration-300 shadow-md"
          >
            REQUEST PROPOSAL
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
