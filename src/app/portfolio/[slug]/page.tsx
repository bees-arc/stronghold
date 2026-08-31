"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, ArrowRight, CheckCircle2, Award, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolioItems } from "@/app/portfolio/data";

export default function PortfolioDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const item = portfolioItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#070c14] text-[#ddd8cf] flex flex-col font-jakarta">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Sector Division Not Found</h1>
          <p className="text-xs text-white/70 mb-6 font-normal">The requested protection sector could not be located.</p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-accent-gold text-[#070c14] px-6 py-2.5 text-xs font-mono font-bold hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO PORTFOLIO
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#070c14] text-[#ddd8cf] min-h-screen flex flex-col font-jakarta">
      <Navbar />

      {/* Header Banner */}
      <section className="relative pt-36 pb-20 bg-[#0b121c] text-white border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-gold/15 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-accent-gold font-mono text-xs tracking-wider mb-6 hover:underline font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            BACK TO ALL SECTORS
          </Link>

          <h1 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-white max-w-3xl leading-tight">
            {item.name.toUpperCase()}
          </h1>

          <p className="mt-4 text-base text-accent-gold font-sans max-w-2xl leading-relaxed font-semibold">
            {item.headline}
          </p>
        </div>
      </section>

      {/* Sector Deep Dive Content */}
      <section className="py-24 bg-[#070c14] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-accent-gold uppercase block mb-3 font-bold">
                OPERATIONAL OVERVIEW
              </span>
              <h2 className="text-2xl font-sans font-bold text-white mb-4">
                Strategic Defense Blueprint for {item.name}
              </h2>
              <p className="text-sm text-white/85 leading-relaxed font-normal">
                {item.detailedOverview}
              </p>
            </div>

            <div className="border border-white/10 bg-[#0e1724] p-8 shadow-lg">
              <h3 className="text-base font-sans font-bold text-white mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-gold" />
                DEDICATED PROTECTIVE MEASURES
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.protectiveMeasures.map((measure) => (
                  <div key={measure} className="flex items-start gap-3 text-xs text-white/90 font-normal bg-[#070c14] border border-white/10 p-4 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                    <span>{measure}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-sans font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-accent-gold" />
                MEASURABLE OPERATIONAL IMPACT
              </h3>
              <div className="space-y-3">
                {item.operationalBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3 text-xs text-white/90 font-normal bg-[#0e1724] p-4 border-l-2 border-accent-gold shadow-sm">
                    <Zap className="w-4 h-4 text-accent-gold shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0e1724] text-white p-8 border border-white/10 shadow-xl">
              <span className="text-[10px] font-mono text-accent-gold tracking-widest uppercase block mb-2 font-bold">
                DEPLOYMENT READINESS
              </span>
              <h3 className="text-xl font-sans font-bold mb-4 text-white">
                Deploy Security for Your Sector
              </h3>
              <p className="text-xs text-white/80 leading-relaxed mb-6 font-normal">
                Consult with our operations command to receive a tailored threat analysis and personnel proposal.
              </p>
              <Link
                href="/contact"
                className="w-full text-center block bg-accent-gold text-[#070c14] py-3 text-xs font-mono font-bold hover:bg-white transition-colors shadow-md"
              >
                REQUEST CONSULTATION
              </Link>
            </div>

            <div className="bg-[#0e1724] p-6 border border-white/10 text-xs text-white/85 space-y-2 font-normal shadow-sm">
              <p className="font-bold text-accent-gold font-mono uppercase text-[10px] tracking-wider">
                HEADQUARTERS DISPATCH
              </p>
              <p>Emergency &amp; Operations: +94 77 335 8619</p>
              <p>Email: strongholds696@gmail.com</p>
              <p>Location: Athulkotte, Sri Jayawardenepura, Sri Lanka</p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
