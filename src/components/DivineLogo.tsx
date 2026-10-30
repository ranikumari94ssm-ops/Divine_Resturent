import React from "react";

interface DivineSymbolProps {
  className?: string;
  size?: number;
  color?: string;
}

export function DivineSymbol({
  className = "",
  size = 36,
  color,
}: DivineSymbolProps) {
  const gradientId = "divineGoldGrad";

  return (
    <svg
      width={size}
      height={size * 0.85}
      viewBox="0 0 100 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3dfa2" />
          <stop offset="35%" stopColor="#d8b877" />
          <stop offset="70%" stopColor="#ad8340" />
          <stop offset="100%" stopColor="#876023" />
        </linearGradient>
      </defs>

      {/* Center Top Petal */}
      <path
        d="M 50 8 C 55 18, 62 28, 60 44 C 58 52, 53 58, 50 62 C 47 58, 42 52, 40 44 C 38 28, 45 18, 50 8 Z"
        stroke={color || `url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Sparkle Star */}
      <path
        d="M 50 24 Q 50 30, 53.5 30 Q 50 30, 50 36 Q 50 30, 46.5 30 Q 50 30, 50 24 Z"
        fill={color || `url(#${gradientId})`}
      />

      {/* Left Inner Petal */}
      <path
        d="M 50 62 C 44 60, 36 52, 33 40 C 30 28, 35 18, 39 12 C 34 20, 26 32, 28 46 C 30 56, 38 64, 50 67"
        stroke={color || `url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Inner Petal */}
      <path
        d="M 50 62 C 56 60, 64 52, 67 40 C 70 28, 65 18, 61 12 C 66 20, 74 32, 72 46 C 70 56, 62 64, 50 67"
        stroke={color || `url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Outer Blooming Wing */}
      <path
        d="M 33 58 C 22 57, 12 51, 8 42 C 5 35, 10 28, 16 26 C 12 34, 15 44, 27 50 C 33 53, 40 56, 45 64"
        stroke={color || `url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Outer Blooming Wing */}
      <path
        d="M 67 58 C 78 57, 88 51, 92 42 C 95 35, 90 28, 84 26 C 88 34, 85 44, 73 50 C 67 53, 60 56, 55 64"
        stroke={color || `url(#${gradientId})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface DivineLogoProps {
  variant?: "horizontal" | "vertical";
  showTagline?: boolean;
  className?: string;
  symbolSize?: number;
}

export default function DivineLogo({
  variant = "horizontal",
  showTagline = true,
  className = "",
  symbolSize,
}: DivineLogoProps) {
  if (variant === "vertical") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <DivineSymbol size={symbolSize || 64} className="mb-2" />
        <span className="font-serif text-3xl sm:text-4xl tracking-[0.18em] font-medium text-[#f7f2e7] leading-none uppercase">
          Divine
        </span>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ad8340] to-transparent my-1.5" />
        <span className="text-[10px] sm:text-xs tracking-[0.35em] text-[#d8b877] uppercase font-sans font-semibold">
          Restaurant
        </span>
        {showTagline && (
          <span className="text-[11px] tracking-[0.2em] text-[#d8b877]/80 font-serif italic mt-1">
            Experience the Taste
          </span>
        )}
      </div>
    );
  }

  // Horizontal variant (Ideal for Navbar)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <DivineSymbol size={symbolSize || 42} className="flex-shrink-0" />
      <div className="flex flex-col justify-center">
        <span className="font-serif text-2xl tracking-[0.16em] font-semibold text-[#f7f2e7] leading-tight uppercase group-hover:text-[#d8b877] transition-colors">
          Divine
        </span>
        <div className="flex items-center gap-1.5 -mt-0.5">
          <span className="text-[9px] tracking-[0.28em] text-[#ad8340] uppercase font-sans font-bold">
            Restaurant
          </span>
          {showTagline && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#ad8340]/60" />
              <span className="text-[9px] tracking-wider text-[#d8b877]/75 font-serif italic hidden sm:inline">
                Experience the Taste
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
