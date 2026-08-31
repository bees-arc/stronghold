"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/app/portfolio/data";

export default function PortfolioOverview() {
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
            <span>SECTOR SPECIALIZATIONS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-white max-w-3xl leading-tight">
            WHAT WE <span className="text-accent-gold">PROTECT</span>
          </h1>

          <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl leading-relaxed font-sans">
            Specialized protective ecosystems tailored across critical infrastructure, corporate assets, public institutions, and high profile individuals.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 bg-[#070c14]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => {
              return (
                <div
                  key={item.slug}
                  className="border border-white/10 bg-[#0e1724] p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-500 hover:border-accent-gold/50 shadow-xl min-h-[380px]"
                >
                  {/* Subtle watermark image overlay */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="relative z-10">
                    <div className="w-8 h-[2px] bg-accent-gold mb-6" />
                    
                    <span className="text-[10px] font-mono tracking-widest text-accent-gold uppercase block mb-2 font-bold">
                      SECTOR DIVISION
                    </span>

                    <h2 className="text-2xl font-sans font-bold text-white mb-3 tracking-tight">
                      {item.name}
                    </h2>

                    <p className="text-xs text-white/85 leading-relaxed font-normal mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 border-t border-white/10 pt-4 mb-8">
                      {item.protectiveMeasures.slice(0, 3).map((measure) => (
                        <div key={measure} className="flex items-start gap-2 text-[11px] text-white/85 font-normal">
                          <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                          <span>{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-gold hover:text-white transition-colors"
                    >
                      EXPLORE SECTOR PROFILE
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#0b121c] text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
            REQUIRE A CUSTOM SECTOR SECURITY STRATEGY?
          </h2>
          <p className="text-xs text-white/80 mb-8 max-w-xl mx-auto leading-relaxed font-normal">
            Our strategic operations team is equipped to design specialized security protocols for your exact premises or event.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-accent-gold text-[#070c14] px-8 py-3.5 text-xs font-bold font-mono tracking-widest hover:bg-white transition-all duration-300 shadow-md"
          >
            CONSULT WITH COMMAND
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
