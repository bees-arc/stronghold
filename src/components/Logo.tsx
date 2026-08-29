import React from "react";

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export default function Logo({ className = "w-10 h-12", inverse = false }: LogoProps) {
  // Brand Colors from Portfolio
  const navyColor = "#0e1b30";
  const goldColor = "#c5a059";
  const whiteColor = "#ffffff";

  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. Shield Background */}
      <path
        d="M 20,20 L 180,20 C 180,20 180,120 100,200 C 20,120 20,20 20,20 Z"
        fill={inverse ? whiteColor : navyColor}
        stroke={goldColor}
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* 2. Castle Battlement (Top gold block) */}
      <path
        d="M 50,40 L 150,40 L 150,65 L 132,65 L 132,52 L 114,52 L 114,65 L 86,65 L 86,52 L 68,52 L 68,65 L 50,65 Z"
        fill={goldColor}
      />

      {/* 3. Stylized 'S' shape winding down (made with gold pathways) */}
      {/* Upper loop of S containing the Eagle */}
      <path
        d="M 50,75 L 150,75 L 150,90 C 150,90 120,95 100,105 C 80,95 50,90 50,90 Z"
        fill={goldColor}
      />

      {/* Eagle Head profile facing right inside the S loop */}
      {/* Head starts in center, beak on the right */}
      <path
        d="M 90,85 C 90,85 105,80 115,90 C 122,96 128,96 130,94 L 126,99 C 124,101 115,103 108,98 C 100,92 90,95 90,95 Z"
        fill={inverse ? navyColor : whiteColor}
      />
      {/* Beak profile in gold */}
      <path
        d="M 125,93 L 135,93 C 137,93 139,95 137,97 L 130,99 C 128,99 126,96 125,93 Z"
        fill={goldColor}
      />
      {/* Eagle Eye */}
      <circle cx="106" cy="91" r="1.5" fill={goldColor} />

      {/* Winding body of the 'S' */}
      <path
        d="M 50,110 C 50,110 50,140 100,145 C 150,140 150,110 150,110 L 132,110 C 132,120 115,128 100,128 C 85,128 68,120 68,110 Z"
        fill={goldColor}
      />

      {/* Bottom loop of S & circuit connector base */}
      <path
        d="M 50,150 C 50,150 70,185 100,185 C 130,185 150,150 150,150 L 132,150 C 124,162 112,168 100,168 C 88,168 76,162 68,150 Z"
        fill={goldColor}
      />

      {/* 4. Digital Circuit Board Tracks branching at the bottom */}
      {/* Central trunk */}
      <line x1="100" y1="140" x2="100" y2="160" stroke={inverse ? navyColor : whiteColor} strokeWidth="2.5" />
      {/* Side branch left */}
      <path d="M 100,150 L 82,142 L 82,133" stroke={inverse ? navyColor : whiteColor} strokeWidth="2" fill="none" />
      <circle cx="82" cy="132" r="2.5" fill={goldColor} />
      {/* Side branch far-left */}
      <path d="M 100,155 L 70,145 L 70,135" stroke={inverse ? navyColor : whiteColor} strokeWidth="2" fill="none" />
      <circle cx="70" cy="134" r="2.5" fill={goldColor} />
      {/* Side branch right */}
      <path d="M 100,150 L 118,142 L 118,133" stroke={inverse ? navyColor : whiteColor} strokeWidth="2" fill="none" />
      <circle cx="118" cy="132" r="2.5" fill={goldColor} />
      {/* Side branch far-right */}
      <path d="M 100,155 L 130,145 L 130,135" stroke={inverse ? navyColor : whiteColor} strokeWidth="2" fill="none" />
      <circle cx="130" cy="134" r="2.5" fill={goldColor} />

      {/* 5. Rectangle banner box at bottom */}
      <rect x="10" y="210" width="180" height="26" fill={inverse ? whiteColor : navyColor} stroke={goldColor} strokeWidth="4" />
      <text
        x="100"
        y="228"
        fill={goldColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="17"
        letterSpacing="2.5"
        textAnchor="middle"
      >
        STRONGHOLD
      </text>
    </svg>
  );
}
