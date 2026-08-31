"use client";

import { Activity, ShieldCheck, Compass, Users, Clock, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "ASSESS",
    tagline: "Comprehensive Vulnerability and Threat Landscape Diagnostic",
    summary: "Every client environment is distinct. We commence each operational engagement with an exhaustive on-site physical evaluation and digital infrastructure assessment.",
    activities: [
      "Physical perimeter walkthrough to identify blind spots, weak entryways and line-of-sight gaps",
      "Digital network reconnaissance and external threat exposure scanning",
      "Evaluation of existing staff safety protocols, visitor logs and emergency exit compliance",
      "Analysis of historical incident data and geographic neighborhood threat indices"
    ],
    deliverable: "Executive Threat Assessment Report with prioritized risk mitigation points."
  },
  {
    step: "02",
    phase: "PLAN",
    tagline: "Tailored Multi-Layered Defense Architecture",
    summary: "We design a customized protection matrix that integrates vetted manpower, surveillance hardware, access control automation, and rapid response triggers.",
    activities: [
      "Drafting Standard Operating Procedures tailored strictly to client premises",
      "Optical mapping for camera placement, infrared tripwires and motion detection sectors",
      "Establishing clear incident escalation pathways and armed intervention criteria",
      "Emergency evacuation routing, muster point assignment and crisis communication protocols"
    ],
    deliverable: "Master Defense Operations Blueprint signed off by our technical advisers."
  },
  {
    step: "03",
    phase: "DEPLOY",
    tagline: "Mobilization of Trained Operatives and Electronic Hardware",
    summary: "Our command team activates vetted security personnel, installs state-of-the-art surveillance equipment, and conducts on-site operational dry runs.",
    activities: [
      "Screened and background-verified security guards assigned to designated shift rotations",
      "Installation and testing of CCTV optical streams, biometrics and alarm transmitters",
      "Tactical briefing on client-specific rules of engagement and executive customer service",
      "Integration of telemetry feeds into our Central Operations Control Center"
    ],
    deliverable: "Active Defense Deployment with full operational readiness validation."
  },
  {
    step: "04",
    phase: "MONITOR",
    tagline: "24/7 Operations Control Center Surveillance and Tactical Response",
    summary: "Unbroken situational awareness is maintained around the clock. Watch officers monitor telemetry streams while mobile response units patrol active zones.",
    activities: [
      "Live 24 hour command room oversight verifying guard patrol check-ins via digital logs",
      "Real-time sensor anomaly detection and instant video verification of alarms",
      "Immediate mobile tactical patrol unit dispatch in the event of unauthorized breaches",
      "Continuous direct coordination with national emergency dispatchers and police stations"
    ],
    deliverable: "Daily incident logs, timestamped patrol verifications, and instant breach alerts."
  },
  {
    step: "05",
    phase: "EVOLVE",
    tagline: "Continuous Quality Audits, Intelligence Updates and System Upgrades",
    summary: "Threat vectors change constantly, so our protective frameworks evolve alongside them through scheduled reviews and technology enhancements.",
    activities: [
      "Monthly command reviews analyzing telemetry trends and incident frequency",
      "Refresher tactical training and physical readiness re-testing for stationed guards",
      "Preventative maintenance and firmware updates across all installed electronic sensors",
      "Quarterly executive security briefings delivered directly to client leadership"
    ],
    deliverable: "Ongoing quarterly optimization reports ensuring future-ready defense."
  }
];

export default function ProcessPage() {
  return (
    <div className="bg-[#070c14] text-[#ddd8cf] min-h-screen flex flex-col font-jakarta">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[#0b121c] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="inline-flex items-center gap-3 border border-accent-gold/40 bg-accent-gold/10 px-4 py-1.5 rounded-none text-accent-gold font-mono text-[10px] tracking-[0.25em] uppercase mb-6">
            <Activity className="w-3.5 h-3.5" />
            <span>HOW WE WORK</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white max-w-3xl leading-tight">
            THE STRONGHOLD <span className="text-accent-gold">OPERATIONAL</span> LIFECYCLE
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            A battle-tested five-phase deployment framework that transforms vulnerability analysis into seamless, proactive protection.
          </p>
        </div>
      </section>

      {/* 5-Phase Process Detailed */}
      <section className="py-24 bg-[#070c14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="border border-white/10 bg-[#0e1724] p-8 md:p-12 hover:border-accent-gold/50 transition-colors shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Step & Title */}
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-mono font-bold bg-accent-gold text-[#070c14] px-3.5 py-1">
                      PHASE {step.step}
                    </span>
                  </div>

                  <h2 className="text-3xl font-sans font-bold text-white tracking-tight mb-3">
                    {step.phase}
                  </h2>

                  <p className="text-xs font-bold text-accent-gold font-sans leading-relaxed mb-6">
                    {step.tagline}
                  </p>

                  <div className="bg-[#070c14] text-white p-5 border-l-2 border-accent-gold">
                    <span className="text-[10px] font-mono text-accent-gold uppercase tracking-widest block mb-1 font-bold">
                      KEY DELIVERABLE
                    </span>
                    <p className="text-xs font-sans text-white/90 leading-relaxed font-normal">
                      {step.deliverable}
                    </p>
                  </div>
                </div>

                {/* Right: Summary & Key Activities */}
                <div className="lg:col-span-8 flex flex-col justify-between">
                  <p className="text-xs md:text-sm text-white/90 font-normal leading-relaxed mb-8">
                    {step.summary}
                  </p>

                  <div>
                    <h3 className="text-xs font-mono font-bold text-accent-gold uppercase tracking-wider mb-4">
                      OPERATIONAL ACTIVITIES &amp; VERIFICATIONS
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.activities.map((act) => (
                        <div key={act} className="flex items-start gap-2.5 text-xs text-white/90 font-normal leading-relaxed bg-[#070c14] border border-white/10 p-3.5 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-mono text-white/60 uppercase tracking-widest font-bold">
                    <span>MILITARY PRECISION IN EXECUTION</span>
                    <span>QUALITY AUDITED</span>
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#0b121c] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
            INITIATE PHASE 01 VULNERABILITY AUDIT
          </h2>
          <p className="text-xs text-white/80 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Connect with our operations command team to schedule your initial risk diagnostic and security appraisal.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-[#070c14] px-8 py-3.5 text-xs font-bold font-mono tracking-widest hover:bg-white transition-all duration-300 shadow-md"
          >
            START ASSESSMENT
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
