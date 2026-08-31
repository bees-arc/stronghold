"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    serviceType: "Man Guard Security",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [dispatchCode, setDispatchCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus("submitting");

    setTimeout(() => {
      const code = "SH-REQ-" + Math.floor(100000 + Math.random() * 900000);
      setDispatchCode(code);
      setStatus("success");
    }, 1500);
  };

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
            <span>OPERATIONAL COMMAND</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white max-w-3xl leading-tight">
            CONTACT &amp; <span className="text-accent-gold">DISPATCH</span> HEADQUARTERS
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            Reach out directly to our central command office to initiate risk assessments, deploy security details, or consult with our technical leadership.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-[#070c14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Headquarters Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-accent-gold uppercase block mb-2 font-bold">
                COMMAND COMMUNICATIONS
              </span>
              <h2 className="text-3xl font-sans font-bold text-white mb-4">
                Headquarters Information
              </h2>
              <p className="text-xs text-white/80 leading-relaxed font-normal">
                Stronghold Security &amp; Investigation (Pvt) Ltd maintains 24 hour operational readiness across all regional sectors in Sri Lanka.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4 p-5 bg-[#0e1724] border border-white/10 shadow-md">
                <div className="w-10 h-10 bg-accent-gold text-[#070c14] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-accent-gold mb-1">
                    PHYSICAL HEADQUARTERS
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    No 49, New Jayaweera Mawatha, Athulkotte, Sri Jayawardenepura, Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#0e1724] border border-white/10 shadow-md">
                <div className="w-10 h-10 bg-accent-gold text-[#070c14] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-accent-gold mb-1">
                    OPERATIONAL HOTLINE &amp; DISPATCH
                  </h3>
                  <p className="text-sm font-bold text-white">
                    +94 77 335 8619
                  </p>
                  <p className="text-[11px] text-white/70 mt-0.5 font-mono">
                    24/7 Rapid Response Coordination
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#0e1724] border border-white/10 shadow-md">
                <div className="w-10 h-10 bg-accent-gold text-[#070c14] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-accent-gold mb-1">
                    OFFICIAL CORRESPONDENCE
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    strongholds696@gmail.com
                  </p>
                  <p className="text-[11px] text-white/70 mt-0.5 font-mono">
                    Web: www.stronghold.lk / www.strongholds.lk
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-[#0b121c] text-white border border-accent-gold/30 shadow-md">
                <div className="w-10 h-10 bg-accent-gold text-[#070c14] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase text-accent-gold mb-1">
                    HOURS OF OPERATION
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed font-normal">
                    Operations Control Center: 24 Hours, 7 Days a Week<br />
                    Executive Administration: Monday to Friday, 08:30 to 17:30
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Deployment Assessment Request Form */}
          <div className="lg:col-span-7 bg-[#0e1724] border border-white/10 p-8 md:p-12 shadow-xl">
            <span className="text-[10px] font-mono tracking-widest text-accent-gold uppercase block mb-2 font-bold">
              DEPLOYMENT APPRAISAL
            </span>
            <h2 className="text-2xl font-sans font-bold text-white mb-6">
              Request a Security Consultation
            </h2>

            {status === "success" ? (
              <div className="bg-[#070c14] border border-accent-gold p-8 text-center space-y-4 animate-in fade-in">
                <div className="w-12 h-12 bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white font-sans">
                  Assessment Request Registered
                </h3>
                <p className="text-xs text-white/80 max-w-md mx-auto leading-relaxed font-normal">
                  Our operations duty officer has logged your requisition and will contact you directly within four business hours.
                </p>
                <div className="bg-[#0b121c] border border-white/10 text-white p-4 font-mono text-xs max-w-xs mx-auto">
                  <span className="text-accent-gold block text-[10px] font-bold">DISPATCH REFERENCE</span>
                  <span className="text-sm font-bold text-white">{dispatchCode}</span>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-xs font-mono text-accent-gold underline hover:text-white pt-4 block mx-auto"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-accent-gold mb-2 font-bold">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ruwan Silva"
                      className="w-full bg-[#070c14] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-accent-gold mb-2 font-bold">
                      OFFICIAL EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. r.silva@company.lk"
                      className="w-full bg-[#070c14] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-accent-gold mb-2 font-bold">
                      CONTACT PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +94 77 123 4567"
                      className="w-full bg-[#070c14] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-accent-gold mb-2 font-bold">
                      ORGANIZATION / PROPERTY
                    </label>
                    <input
                      type="text"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="e.g. Lanka Logistics Ltd"
                      className="w-full bg-[#070c14] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-accent-gold mb-2 font-bold">
                    PRIMARY SERVICE REQUIRED
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#070c14] border border-white/15 px-4 py-3 text-xs text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                  >
                    <option>Man Guard Security</option>
                    <option>Special Event Security</option>
                    <option>Cybersecurity Services</option>
                    <option>Electronic Security Solutions</option>
                    <option>CCTV and Distance Sensor Systems</option>
                    <option>24/7 Monitoring and Rapid Response</option>
                    <option>Comprehensive Facility Security Audit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-accent-gold mb-2 font-bold">
                    OPERATIONAL REQUIREMENTS &amp; PREMISES CONTEXT
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on facility size, current security apparatus, location, and specific threat concerns..."
                    className="w-full bg-[#070c14] border border-white/15 px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-accent-gold transition-colors resize-none font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-accent-gold text-[#070c14] py-4 text-xs font-mono font-bold tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  {status === "submitting" ? (
                    <span>TRANSMITTING DISPATCH REQUISITION...</span>
                  ) : (
                    <>
                      <span>TRANSMIT DISPATCH REQUISITION</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
