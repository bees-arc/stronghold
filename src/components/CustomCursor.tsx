"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "hover" | "magnetic" | "gold">("default");
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 35, stiffness: 450, mass: 0.35 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if hovering a link, button or element with hover data
      const interactiveEl = target.closest("a, button, [role='button'], .bento-card-interactive, input, select, textarea");
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains("bento-card-interactive")) {
          setHoverType("magnetic");
          setCursorText("EXPLORE");
        } else if (interactiveEl.classList.contains("button-gold-accent")) {
          setHoverType("gold");
          setCursorText("");
        } else {
          setHoverType("hover");
          setCursorText("");
        }
      } else {
        setHoverType("default");
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  const size = hoverType === "magnetic" ? 80 : hoverType === "hover" ? 44 : hoverType === "gold" ? 20 : 10;
  const isGold = hoverType === "gold";

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[10px] tracking-widest font-sans font-bold select-none overflow-hidden hidden lg:flex"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          backgroundColor: isGold 
            ? "#c5a059" 
            : hoverType === "magnetic" 
              ? "rgba(14, 27, 48, 0.12)" 
              : hoverType === "hover" 
                ? "rgba(197, 160, 89, 0.18)" 
                : "rgba(14, 27, 48, 0.85)",
          border: hoverType === "hover" 
            ? "2px solid #c5a059" 
            : hoverType === "magnetic" 
              ? "1.5px solid #c5a059" 
              : "none",
          color: hoverType === "magnetic" ? "#0e1b30" : "#ffffff",
          backdropFilter: hoverType === "magnetic" || hoverType === "hover" ? "blur(3px)" : "none",
          boxShadow: hoverType === "hover" ? "0 0 12px rgba(197, 160, 89, 0.4)" : "none"
        }}
        animate={{
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-accent-navy tracking-wider"
          >
            {cursorText}
          </motion.span>
        )}
        {hoverType === "hover" && (
          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold shadow-sm pointer-events-none" />
        )}
      </motion.div>

      {/* Pinpoint Center Dot for default navigation */}
      {hoverType === "default" && (
        <motion.div
          className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent-gold pointer-events-none z-[10000] hidden lg:block"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </>
  );
}
