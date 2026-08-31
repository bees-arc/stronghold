"use client";

import { Activity, ShieldCheck, Compass, Users, Clock, ArrowRight, CheckCircle2, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROCESS_STEPS = [
  {
    step: "01",
    phase: "UNDERSTANDING YOUR NEEDS",
    tagline: "Comprehensive Risk Assessment and Security Appraisal",
    summary: "Every client is unique. We begin by conducting a detailed risk assessment to understand your environment, challenges, and security priorities.",
    activities: [
      "On-site physical inspection to identify vulnerabilities, blind spots, and entry risks",
      "Assessment of current security staffing, access points, and visitor management",
      "Analysis of premises layout, neighborhood risk factors, and asset protection requirements",
      "Consultation with your leadership team to establish customized protection objectives"
    ],
    deliverable: "Detailed Risk Assessment Report with clear recommendations."
  },
  {
    step: "02",
    phase: "DESIGNING TAILORED SOLUTIONS",
    tagline: "Integrated Strategy Combining Personnel and Technology",
    summary: "We craft security strategies that integrate expertly trained personnel with modern technology, whether it is manned guarding, electronic surveillance, or digital protection.",
    activities: [
      "Developing Standard Operating Procedures tailored strictly to your premises",
      "Strategic placement planning for security guards, CCTV cameras, and alarm systems",
      "Establishing clear incident response, emergency protocols, and contact escalation chains",
      "Designing visitor screening and access control procedures"
    ],
    deliverable: "Comprehensive Security Proposal and Operational Plan."
  },
  {
    step: "03",
    phase: "DEPLOYING SKILLED PROFESSIONALS",
    tagline: "Rigorous Training, Discipline, and Decisive Action",
    summary: "Our security personnel are rigorously trained, disciplined, and equipped with the tools and knowledge to act decisively in any situation.",
    activities: [
      "Deployment of background-checked, vetted security officers suited to your environment",
      "On-site briefing and orientation on your specific property rules and customer care standards",
      "Installation and testing of electronic security hardware, CCTV feeds, and alarm relays",
      "Dedicated field supervisors conducting regular checks and shift management"
    ],
    deliverable: "Smooth on-site deployment with complete operational readiness."
  },
  {
    step: "04",
    phase: "LEVERAGING TECHNOLOGY",
    tagline: "24/7 Monitoring, Rapid Response, and Advanced Surveillance",
    summary: "From CCTV and intrusion detection to real-time monitoring and cyber defense, we ensure that innovation strengthens every layer of your security.",
    activities: [
      "Continuous 24/7 surveillance through our Central Operations Control Center",
      "Instant alarm verification and coordination with rapid mobile response units",
      "Close coordination with local emergency services and police stations when needed",
      "Regular electronic system health checks to prevent downtime"
    ],
    deliverable: "Unbroken 24/7 protection with rapid response capability."
  },
  {
    step: "05",
    phase: "ONGOING IMPROVEMENT",
    tagline: "Regular Evaluations, Updated Training, and Technology Upgrades",
    summary: "Security threats evolve and so do we. Through regular evaluations, updated training, and technology upgrades, we keep your protection future-ready.",
    activities: [
      "Periodic security audits and client feedback sessions to maintain high standards",
      "Continuous refresher training and performance assessments for stationed guards",
      "Routine maintenance and upgrades of surveillance and alarm hardware",
      "Proactive adaptation of security measures to new or emerging neighborhood risks"
    ],
    deliverable: "Long-term peace of mind with continuously optimized security."
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
            HOW WE <span className="text-accent-gold">WORK</span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            At Stronghold Security, we work with precision, preparedness, and partnership, anticipating threats before they arise.
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
                      PROCESS {step.step}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-white tracking-tight mb-3">
                    {step.phase}
                  </h2>

                  <p className="text-xs font-bold text-accent-gold font-sans leading-relaxed mb-6">
                    {step.tagline}
                  </p>

                  <div className="bg-[#070c14] text-white p-5 border-l-2 border-accent-gold">
                    <span className="text-[10px] font-mono text-accent-gold uppercase tracking-widest block mb-1 font-bold">
                      KEY OUTCOME
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
                      ACTION STEPS &amp; OVERSIGHT
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
                    <span>MILITARY PRECISION AND DISCIPLINE</span>
                    <span>QUALITY ASSURED</span>
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
            READY FOR A COMPREHENSIVE SECURITY ASSESSMENT?
          </h2>
          <p className="text-xs text-white/80 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Contact our leadership team today to schedule an initial consultation and premises appraisal.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-[#070c14] px-8 py-3.5 text-xs font-bold font-mono tracking-widest hover:bg-white transition-all duration-300 shadow-md"
          >
            REQUEST ASSESSMENT
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
