"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const words = [
  "REDEFINING",
  "PROTECTION",
  "THROUGH",
  "INTELLIGENCE,",
  "DISCIPLINE,",
  "TECHNOLOGY"
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      // Hold on the final word "TECHNOLOGY" for 800ms before completion
      const timeout = setTimeout(() => {
        onComplete();
      }, 800);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 400 : 220 // 400ms for first word, 220ms for subsequent words -> total transition takes ~1.3 seconds
    );

    return () => clearTimeout(timeout);
  }, [index, onComplete]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curveVariants: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.25 }
    }
  };

  const slideUpVariants: Variants = {
    initial: {
      top: 0
    },
    exit: {
      top: "-100vh",
      transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.25 }
    }
  };

  const textVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  if (dimension.width === 0) return null;

  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      style={{ height: "100vh" }}
    >
      {/* Multilingual / Strategic Word Transitions */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.p
          key={index}
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent-navy tracking-tight flex items-center gap-4"
        >
          {/* Subtle index tracker */}
          <span className="font-mono text-xs text-accent-gold/60 align-middle pr-2">
            0{index + 1}
          </span>
          <span className={index === words.length - 1 ? "text-accent-gold font-bold font-sans tracking-[0.12em] text-3xl md:text-4xl" : "italic font-light font-serif text-accent-navy/90"}>
            {words[index]}
          </span>
        </motion.p>
      </div>

      {/* Curved bottom curtain SVG - filled with white */}
      <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-white">
        <motion.path
          variants={curveVariants}
          initial="initial"
          exit="exit"
        />
      </svg>
    </motion.div>
  );
}
