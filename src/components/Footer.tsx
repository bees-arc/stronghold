import { ArrowUpRight, Mail, Phone, MapPin, Shield } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { name: "Man Guard Security", href: "/services#man-guard" },
      { name: "Special Event Security", href: "/services#special-events" },
      { name: "Cybersecurity Services", href: "/services#cybersecurity" },
      { name: "Electronic Security Solutions", href: "/services#electronic-security" },
      { name: "CCTV & Sensor Systems", href: "/services#cctv-sensors" },
      { name: "24/7 Monitoring & Response", href: "/services#monitoring-response" },
    ],
    company: [
      { name: "Overview & Hero", href: "/" },
      { name: "About & Leadership", href: "/about" },
      { name: "What We Protect", href: "/portfolio" },
      { name: "Operational Process", href: "/process" },
      { name: "Field Gallery", href: "/gallery" },
      { name: "Contact & Headquarters", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/contact" },
      { name: "Terms of Service", href: "/contact" },
      { name: "Operational Licenses", href: "/about" },
      { name: "Defence Ministry Approval", href: "/about" },
    ],
  };

  return (
    <footer className="bg-surface-ivory border-t border-border-thin pt-20 pb-12 relative overflow-hidden">
      {/* Grid line overlay */}
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-border-thin">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="/" className="flex items-center gap-3 group w-fit">
              <Logo className="w-12 h-14" />
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-[0.25em] text-accent-navy leading-none font-sans">
                  STRONGHOLD
                </span>
                <span className="text-[8px] tracking-[0.22em] text-accent-navy/60 font-semibold leading-none mt-1">
                  SECURITY & INVESTIGATION
                </span>
              </div>
            </a>
            
            <p className="text-xs font-sans text-accent-navy/60 leading-relaxed max-w-sm mt-2">
              Combining military-grade discipline, intelligence analysis, and advanced digital safeguards to protect assets, personnel, and operations.
            </p>

            <div className="flex flex-col gap-3 font-sans mt-4">
              <div className="flex items-center gap-3 text-xs text-accent-navy/70">
                <MapPin className="w-4 h-4 text-accent-navy/40 shrink-0" />
                <span>No 49, New Jayaweera Mawatha, Athulkotte, Sri Jayawardenepura, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-accent-navy/70">
                <Phone className="w-4 h-4 text-accent-navy/40 shrink-0" />
                <a href="tel:+94773358619" className="hover:text-accent-gold transition-colors">
                  +94 77 335 8619
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs text-accent-navy/70">
                <Mail className="w-4 h-4 text-accent-navy/40 shrink-0" />
                <a href="mailto:strongholds696@gmail.com" className="hover:text-accent-gold transition-colors">
                  strongholds696@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Column 1: Services */}
          <div className="flex flex-col gap-4 font-sans">
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-navy/40">
              SERVICES
            </span>
            <ul className="flex flex-col gap-2.5">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-accent-navy/70 hover:text-accent-navy transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Company */}
          <div className="flex flex-col gap-4 font-sans">
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-navy/40">
              ARCHITECTURE
            </span>
            <ul className="flex flex-col gap-2.5">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-accent-navy/70 hover:text-accent-navy transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div className="flex flex-col gap-4 font-sans">
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent-navy/40">
              COMPLIANCE
            </span>
            <ul className="flex flex-col gap-2.5">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-accent-navy/70 hover:text-accent-navy transition-colors flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-gold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Metadata & Licensing */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-[10px] font-sans text-accent-navy/40 tracking-wider">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-accent-gold/45" />
            <span>STRONGHOLD SECURITY & INVESTIGATION (PVT) LTD © {currentYear}. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-4">
            <span>REGISTRATION NO: PV00268593</span>
            <span>LICENSED BY THE MINISTRY OF DEFENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
