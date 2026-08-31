import React from "react";

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export default function Logo({ className = "w-10 h-12", inverse = false }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Stronghold Logo"
      className={`${className} object-contain`}
    />
  );
}

