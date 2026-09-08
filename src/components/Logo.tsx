import React from "react";

interface LogoProps {
  className?: string;
  inverse?: boolean;
}

export default function Logo({ className = "w-10 h-12", inverse = false }: LogoProps) {
  return (
    <picture className="inline-flex items-center shrink-0">
      <source srcSet="/logo.avif" type="image/avif" />
      <source srcSet="/logo.webp" type="image/webp" />
      <source srcSet="/logo.svg" type="image/svg+xml" />
      <img
        src="/logo.png"
        alt="Stronghold Security & Investigation"
        className={`${className} object-contain`}
        loading="eager"
        decoding="async"
      />
    </picture>
  );
}

