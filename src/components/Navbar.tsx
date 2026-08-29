"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  const navLinks = [
    { name: "OVERVIEW", href: "#overview" },
    { name: "PORTFOLIO", href: "#portfolio" },
    { name: "SERVICES", href: "#services" },
    { name: "ADVANTAGE", href: "#advantage" },
    { name: "TIMELINE", href: "#timeline" },
    { name: "LEADERSHIP", href: "#leadership" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
          scrolled
            ? "bg-[rgba(255,255,255,0.92)] backdrop-blur-md py-3.5 border-border-thin"
            : "bg-transparent py-5 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <Logo className="w-8 h-10 transition-transform group-hover:scale-102 duration-300" />
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-[0.25em] text-accent-navy leading-none font-sans">
                STRONGHOLD
              </span>
              <span className="text-[7px] tracking-[0.22em] text-accent-navy/60 font-semibold leading-none mt-1">
                SECURITY & INVESTIGATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-[0.15em] text-accent-navy/70 hover:text-accent-navy transition-colors relative py-2 group font-sans"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTAs / Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 border border-accent-navy px-5 py-2.5 text-xs font-bold tracking-[0.15em] hover:bg-accent-navy hover:text-white transition-all duration-300 button-gold-accent"
            >
              TALK TO AN EXPERT
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-accent-gold" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-accent-navy hover:text-accent-gold transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Full-screen mobile navigation drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-30 bg-white flex flex-col justify-between pt-28 pb-12 px-8 lg:hidden border-b border-border-thin"
          >
            {/* Grid Pattern Background for Drawer */}
            <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6 mt-4">
              <span className="text-[10px] tracking-[0.3em] font-sans font-bold text-accent-navy/40">
                NAVIGATION
              </span>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-3xl font-serif tracking-tight text-accent-navy hover:text-accent-gold block transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative z-10 flex flex-col gap-4 border-t border-border-thin pt-6"
            >
              <a
                href="#contact"
                onClick={toggleMenu}
                className="w-full text-center border border-accent-navy bg-accent-navy text-white py-3.5 text-xs font-bold tracking-[0.2em] hover:bg-accent-gold hover:border-accent-gold transition-all duration-300"
              >
                REQUEST A CONSULTATION
              </a>
              <div className="flex justify-between items-center text-[10px] text-accent-navy/60 font-sans tracking-wide">
                <span>STRONGHOLD SECURITY (PVT) LTD</span>
                <span>COLOMBO, SRI LANKA</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
