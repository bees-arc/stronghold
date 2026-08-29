"use client";

import { motion, Variants } from "framer-motion";

interface BentoVisualProps {
  type: "businesses" | "institutions" | "residential" | "digital" | "events" | "people";
}

export default function BentoVisual({ type }: BentoVisualProps) {
  const containerVariants: Variants = {
    initial: {},
    hover: {},
  };

  const lineVariants: Variants = {
    initial: { pathLength: 0.6, opacity: 0.3 },
    hover: { pathLength: 1, opacity: 0.8, transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const nodeVariants: Variants = {
    initial: { scale: 1, opacity: 0.4 },
    hover: { scale: [1, 1.4, 1], opacity: 1, transition: { duration: 1.5, repeat: Infinity } },
  };

  const rotateVariants: Variants = {
    initial: { rotate: 0 },
    hover: { rotate: 45, transition: { duration: 20, ease: "linear", repeat: Infinity } },
  };

  // Render vector graphic according to card focus
  switch (type) {
    case "businesses":
      return (
        <motion.svg
          className="absolute right-0 bottom-0 w-44 h-44 text-accent-navy/10 pointer-events-none"
          viewBox="0 0 200 200"
          variants={containerVariants}
        >
          {/* Business Core Nodes & Corporate Grid */}
          <motion.rect
            x="40"
            y="40"
            width="120"
            height="120"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            variants={lineVariants}
          />
          <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="40" y1="100" x2="160" y2="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          
          <motion.circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <motion.circle cx="100" cy="100" r="5" fill="currentColor" variants={nodeVariants} className="text-accent-gold" />
          
          <circle cx="40" cy="40" r="3" fill="currentColor" />
          <circle cx="160" cy="40" r="3" fill="currentColor" />
          <circle cx="160" cy="160" r="3" fill="currentColor" />
          <circle cx="40" cy="160" r="3" fill="currentColor" />
        </motion.svg>
      );

    case "institutions":
      return (
        <motion.svg
          className="absolute right-2 bottom-2 w-44 h-44 text-accent-navy/10 pointer-events-none"
          viewBox="0 0 200 200"
          variants={containerVariants}
        >
          {/* Institutional Symmetrical Fortress Structure */}
          <motion.polygon
            points="100,30 160,80 160,150 40,150 40,80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            variants={lineVariants}
          />
          <motion.polygon
            points="100,50 140,85 140,135 60,135 60,85"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            strokeDasharray="2 2"
          />
          
          <line x1="100" y1="30" x2="100" y2="150" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="90" r="8" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <motion.circle cx="100" cy="90" r="2.5" fill="currentColor" variants={nodeVariants} className="text-accent-gold" />
        </motion.svg>
      );

    case "residential":
      return (
        <motion.svg
          className="absolute right-0 bottom-0 w-44 h-44 text-accent-navy/10 pointer-events-none"
          viewBox="0 0 200 200"
          variants={containerVariants}
        >
          {/* Residential Outline with Surrounding Radar Shield Dome */}
          <motion.path
            d="M 50,130 L 100,80 L 150,130"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            variants={lineVariants}
          />
          <rect x="70" y="130" width="60" height="30" fill="none" stroke="currentColor" strokeWidth="0.75" />
          
          {/* Protecting Dome */}
          <motion.path
            d="M 30,160 A 80,80 0 0,1 170,160"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 2"
            variants={lineVariants}
          />
          <circle cx="100" cy="110" r="3" fill="currentColor" className="text-accent-gold" />
        </motion.svg>
      );

    case "digital":
      return (
        <motion.svg
          className="absolute right-2 bottom-2 w-44 h-44 text-accent-navy/10 pointer-events-none"
          viewBox="0 0 200 200"
          variants={containerVariants}
        >
          {/* Cyber Node Network & Hexagon Grid */}
          <g transform="translate(100, 100)">
            <motion.polygon
              points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              variants={rotateVariants}
            />
            <motion.polygon
              points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              variants={rotateVariants}
            />
            {/* Core nodes */}
            <circle cx="0" cy="0" r="4" fill="currentColor" className="text-accent-gold" />
            <line x1="-60" y1="0" x2="60" y2="0" stroke="currentColor" strokeWidth="0.5" />
            <line x1="0" y1="-70" x2="0" y2="70" stroke="currentColor" strokeWidth="0.5" />
          </g>
        </motion.svg>
      );

    case "events":
      return (
        <motion.svg
          className="absolute right-0 bottom-0 w-44 h-44 text-accent-navy/10 pointer-events-none"
          viewBox="0 0 200 200"
          variants={containerVariants}
        >
          {/* Expanding Crowd/Signals Radar Waves */}
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            variants={lineVariants}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            variants={lineVariants}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            variants={lineVariants}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          
          <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
          
          {/* Gold coordinate dots */}
          <motion.circle cx="140" cy="100" r="2.5" fill="currentColor" className="text-accent-gold" variants={nodeVariants} />
          <motion.circle cx="100" cy="60" r="2.5" fill="currentColor" className="text-accent-gold" variants={nodeVariants} />
        </motion.svg>
      );

    case "people":
      return (
        <motion.svg
          className="absolute right-2 bottom-2 w-44 h-44 text-accent-navy/10 pointer-events-none"
          viewBox="0 0 200 200"
          variants={containerVariants}
        >
          {/* Abstract Symmetrical Human Silhouette protected by Grid lines */}
          <g transform="translate(100, 100)">
            {/* Human head */}
            <circle cx="0" cy="-40" r="16" fill="none" stroke="currentColor" strokeWidth="0.75" />
            {/* Human shoulders */}
            <motion.path
              d="M -45,30 C -45,0 -25,-10 0,-10 C 25,-10 45,0 45,30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              variants={lineVariants}
            />
            {/* Protecting concentric frame */}
            <motion.path
              d="M -60,40 A 70,70 0 0,1 60,40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              strokeDasharray="3 3"
            />
            
            <circle cx="0" cy="-40" r="3" fill="currentColor" className="text-accent-gold" />
          </g>
        </motion.svg>
      );
  }
}
