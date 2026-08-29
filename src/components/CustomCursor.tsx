"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [hoverType, setHoverType] = useState<"default" | "hover" | "magnetic" | "red">("default");
  const [cursorText, setCursorText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
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
      const interactiveEl = target.closest("a, button, [role='button'], .bento-card-interactive");
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains("bento-card-interactive")) {
          setHoverType("magnetic");
          setCursorText("EXPLORE");
        } else if (interactiveEl.classList.contains("button-red-accent")) {
          setHoverType("red");
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

  const size = hoverType === "magnetic" ? 80 : hoverType === "hover" ? 48 : hoverType === "red" ? 16 : 8;
  const isRed = hoverType === "red";

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center text-[10px] tracking-widest font-sans font-bold select-none overflow-hidden hidden lg:flex"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        width: size,
        height: size,
        backgroundColor: isRed 
          ? "#d9383a" 
          : hoverType === "magnetic" 
            ? "rgba(14, 27, 48, 0.08)" 
            : hoverType === "hover" 
              ? "transparent" 
              : "rgba(14, 27, 48, 0.8)",
        border: hoverType === "hover" 
          ? "1.5px solid rgba(14, 27, 48, 0.6)" 
          : hoverType === "magnetic" 
            ? "1px solid rgba(14, 27, 48, 0.15)" 
            : "none",
        color: "#0e1b30",
        backdropFilter: hoverType === "magnetic" ? "blur(4px)" : "none",
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
    </motion.div>
  );
}
