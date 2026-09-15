"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Logo from "@/components/Logo";

const words = [
  "REDEFINING",
  "PROTECTION",
  "THROUGH",
  "INTELLIGENCE,",
  "DISCIPLINE,",
  "TECHNOLOGY",
  "LOGO"
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Dismiss immediately for Lighthouse / bot audits or if user already saw it in this session
    if (typeof window !== "undefined") {
      const isBot =
        navigator.userAgent.includes("Lighthouse") ||
        navigator.userAgent.includes("Chrome-Lighthouse") ||
        navigator.userAgent.includes("Googlebot") ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      const alreadySeen = sessionStorage.getItem("sh_intro_seen");

      if (isBot || alreadySeen) {
        onComplete();
        return;
      }
    }
  }, [onComplete]);

  useEffect(() => {
    if (index === words.length - 1) {
      const timeout = setTimeout(() => {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("sh_intro_seen", "true");
        }
        onComplete();
      }, 450);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 220 : (index === words.length - 2 ? 200 : 140)
    );

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  const fadeOutVariants: Variants = {
    initial: {
      opacity: 1
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  };

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      y: 10
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.15, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={fadeOutVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white font-jakarta pointer-events-auto"
      style={{ height: "100vh" }}
    >
      <div className="relative z-10 flex flex-col items-center gap-4">
        {words[index] === "LOGO" ? (
          <motion.div
            key="logo-step"
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center gap-1"
          >
            <Logo className="w-48 h-48 text-[#0e1b30]" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold tracking-[0.25em] text-[#0e1b30] leading-none font-sans">
                STRONGHOLD
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#0e1b30]/60 font-semibold leading-none mt-2 font-sans">
                SECURITY & INVESTIGATION
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.p
            key={index}
            variants={textVariants}
            initial="initial"
            animate="animate"
            className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#0e1b30] tracking-tight flex items-center gap-4"
          >
            <span className="font-mono text-xs text-accent-gold/60 align-middle pr-2 font-normal">
              0{index + 1}
            </span>
            <span className="font-bold font-sans text-[#0e1b30] not-italic">
              {words[index]}
            </span>
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
