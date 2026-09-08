"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  sector: string;
  website: string;
  description: string;
  protectiveScope: string;
  keyMeasures: string[];
  established?: string;
}

export const CLIENTS_DATA: ClientItem[] = [
  {
    id: "spring-summer",
    name: "Spring & Summer Fashion Collection",
    shortName: "Spring & Summer",
    logo: "/images/clients/spring_summer.png",
    sector: "Retail & Apparel Chains",
    website: "https://springandsummer.lk",
    description: "One of Sri Lanka's leading fashion retail giants with flagship showrooms and high-traffic shopping destinations across major commercial hubs.",
    protectiveScope: "Commercial Loss Prevention & Retail Sentry Protocols",
    keyMeasures: [
      "Showroom loss prevention & electronic article surveillance (EAS)",
      "High-traffic crowd flow management & discreet floor monitoring",
      "Cash transit & daily financial movement protection"
    ],
    established: "Est. 1995"
  },
  {
    id: "anverally",
    name: "Anverally & Sons (Pvt) Ltd",
    shortName: "Anverally Tea",
    logo: "/images/clients/anverally_tea.png",
    sector: "Global Tea Export & Agriculture",
    website: "https://www.anverally.com",
    description: "Centuries-old Ceylon tea dynasty exporting premium tea blends to over 100 countries globally across Europe, Middle East, and Asia.",
    protectiveScope: "Industrial Warehouse Security & Export Logistics Defense",
    keyMeasures: [
      "24/7 centralized processing facility & perimeter monitoring",
      "Export container seal inspection & supply chain integrity audits",
      "Strict biometric clearance gates for bonded warehouse zones"
    ],
    established: "Since 1890"
  },
  {
    id: "mihila-tex",
    name: "Mihila Tex (by Hirdaramani Group)",
    shortName: "Mihila Tex",
    logo: "/images/clients/mihila_tex.png",
    sector: "Textile & Garment Manufacturing",
    website: "https://www.hirdaramani.com",
    description: "Flagship sustainable textile mill in Pannala by the Hirdaramani Group, setting global standards for eco-conscious high-volume fabric production.",
    protectiveScope: "Manufacturing Plant Defense & Material Safeguarding",
    keyMeasures: [
      "Multi-tier perimeter fencing & thermal surveillance coverage",
      "Raw textile inventory protection & shrinkage elimination",
      "Factory worker shift management & biometric turnstile control"
    ],
    established: "Hirdaramani Group"
  },
  {
    id: "testa",
    name: "Testa Bakehouse (Pvt) Ltd",
    shortName: "Testa Bakehouse",
    logo: "/images/clients/testa_bakehouse.png",
    sector: "Food Manufacturing & Bakery Chain",
    website: "https://greatplacetowork.lk/client-story/testa-bakehouse-pvt-ltd/",
    description: "Beloved commercial bakery and confectionary food producer operating high-capacity production kitchens and island-wide supply distribution.",
    protectiveScope: "Food Logistics & Commercial Production Security",
    keyMeasures: [
      "Commercial kitchen asset protection & hygiene access zoning",
      "Early morning supply dispatch escort & cargo verification",
      "Retail branch stationary security & perimeter supervision"
    ],
    established: "Since 1982"
  },
  {
    id: "thaya-brothers",
    name: "Thaya Brothers (Pvt) Ltd",
    shortName: "Thaya Brothers",
    logo: "/images/clients/thaya_brothers.png",
    sector: "Air & Sea Freight Forwarding",
    website: "https://thayabrothers.com",
    description: "International cargo, freight logistics, and maritime trade specialists operating containerized freight solutions and global clearing networks.",
    protectiveScope: "Freight Depot Security & Port Logistics Escorts",
    keyMeasures: [
      "Heavy container depot sentry checkpoints & night patrols",
      "High-value customs clearing transit protection",
      "Harbor gate logistics supervision & manifest auditing"
    ],
    established: "Export & Import"
  },
  {
    id: "yara",
    name: "Yara Foods (KAP Agro Group)",
    shortName: "Yara Foods",
    logo: "/images/clients/yara.png",
    sector: "Premium Organic Agro & Coconut Products",
    website: "https://yarafoods.com",
    description: "Producer and worldwide exporter of premium organic coconut products, operating advanced sterile processing plants for international food markets.",
    protectiveScope: "Processing Facility Defense & Cold-Chain Safeguarding",
    keyMeasures: [
      "Bio-secure plant entry sanitization and sentry audits",
      "Cold-chain storage continuous sensor and guard verification",
      "Finished goods shipping dispatch screening and log checks"
    ],
    established: "KAP Agro"
  }
];

export default function ClientsSection() {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <section id="clients" className="py-24 md:py-32 bg-[#080e1a] text-white border-b border-white/10 relative overflow-hidden">
      {/* Subtle Tactical Grid & Radial Glow */}
      <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#0e1b30] text-accent-gold border border-accent-gold/30 text-[10px] font-mono font-bold tracking-[0.25em] uppercase mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              <span>ESTEEMED CLIENTELE &bull; SECTOR PARTNERS</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight mt-2 uppercase">
              TRUSTED BY SRI LANKA&apos;S <br />
              <span className="text-accent-gold">INDUSTRY LEADERS</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-sans text-white/75 max-w-md leading-relaxed">
            From multinational tea exporters and global apparel manufacturing hubs to prominent retail fashion chains and maritime freight networks, Sri Lanka&apos;s leading enterprises entrust their physical and operational defense to Stronghold.
          </p>
        </div>

        {/* Dynamic Infinite Marquee Ribbon */}
        <div className="relative w-full overflow-hidden border-y border-white/10 bg-[#0a121e] py-6 mb-16 shadow-2xl">
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#080e1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#080e1a] to-transparent z-10 pointer-events-none" />
          
          <div className="flex w-max animate-marquee gap-10 sm:gap-14 items-center">
            {[...CLIENTS_DATA, ...CLIENTS_DATA].map((client, idx) => (
              <a
                key={`${client.id}-${idx}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 px-3 py-1.5 opacity-85 hover:opacity-100 transition-all duration-300"
              >
                {/* White badge for marquee logo */}
                <div className="relative h-12 w-28 sm:h-14 sm:w-36 bg-white rounded-sm px-3 py-1.5 flex items-center justify-center border border-white/20 shadow-sm group-hover:border-accent-gold group-hover:scale-105 transition-all duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="hidden lg:block text-left">
                  <p className="text-[11px] font-sans font-bold text-white tracking-wider uppercase group-hover:text-accent-gold transition-colors">
                    {client.shortName}
                  </p>
                  <span className="text-[9px] font-mono text-accent-gold/80 uppercase tracking-widest block">
                    {client.sector}
                  </span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40 mx-2" />
              </a>
            ))}
          </div>
        </div>

        {/* Interactive Client Dossier Grid - Navy Blue Cards with White Logo Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENTS_DATA.map((client) => {
            const isHovered = hoveredClient === client.id;

            return (
              <div
                key={client.id}
                onMouseEnter={() => setHoveredClient(client.id)}
                onMouseLeave={() => setHoveredClient(null)}
                className={`group bg-[#0e1b30] border p-8 flex flex-col justify-between relative transition-all duration-500 rounded-sm shadow-xl ${
                  isHovered 
                    ? "border-accent-gold -translate-y-2 bg-[#12213a] shadow-accent-gold/10 shadow-2xl" 
                    : "border-white/10 hover:border-accent-gold/50"
                }`}
              >
                {/* Top Sector Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4 mb-6">
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-accent-gold uppercase">
                      {client.sector}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold/40" />
                  </div>

                  {/* Logo Container - Pure White Background for Ultimate Clarity */}
                  <div className="w-full h-32 sm:h-36 bg-white border border-white/20 flex items-center justify-center p-6 relative overflow-hidden rounded-sm group-hover:border-accent-gold group-hover:shadow-lg transition-all duration-500">
                    {/* Subtle golden corner precision accents */}
                    <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-accent-gold/60" />
                    <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-accent-gold/60" />
                    <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-accent-gold/60" />
                    <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-accent-gold/60" />

                    <div className="relative w-full h-full max-w-[210px] max-h-[85px] transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 300px"
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Client Details */}
                  <h3 className="text-lg sm:text-xl font-sans font-bold text-white tracking-tight mt-6 group-hover:text-accent-gold transition-colors leading-snug">
                    {client.name}
                  </h3>

                  <p className="text-xs font-sans text-white/80 mt-3 leading-relaxed font-normal">
                    {client.description}
                  </p>
                </div>

                {/* Protective Measures Checklist & Link */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-wider text-accent-gold uppercase mb-3.5">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full animate-pulse" />
                    <span>OPERATIONAL PROTECTION SCOPE:</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {client.keyMeasures.map((measure, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[11px] font-sans text-white/75 leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold shrink-0 mt-0.5" />
                        <span>{measure}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full pt-3.5 text-xs font-mono font-bold tracking-wider text-white hover:text-accent-gold border-t border-white/10 transition-colors group/link"
                  >
                    <span>VISIT OFFICIAL PORTAL</span>
                    <ArrowUpRight className="w-4 h-4 text-accent-gold group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Command Assurance Footer Banner */}
        <div className="mt-16 bg-[#0a1424] text-white p-8 md:p-10 border border-accent-gold/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden rounded-sm">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-accent-gold/15 to-transparent pointer-events-none" />

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-gold/10 border border-accent-gold/40 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-accent-gold" />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-sans font-bold tracking-wide uppercase text-white">
                PROTECTING HIGH-ASSET CORPORATE ECOSYSTEMS
              </h4>
              <p className="text-xs text-white/75 font-sans mt-1 max-w-xl leading-relaxed">
                Whether deploying static sentry units, managing VIP transit, or integrating AI surveillance grids, Stronghold maintains unblemished records across all partner establishments.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-2.5 bg-accent-gold text-navy-dark px-7 py-3.5 text-xs font-mono font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-md"
          >
            REQUEST PARTNERSHIP APPRAISAL
          </a>
        </div>

      </div>
    </section>
  );
}
