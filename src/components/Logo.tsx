import Link from "next/link";

export function LogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background shape - subtle shield */}
      <path
        d="M50 8C70 8 85 18 85 36C85 64 50 92 50 92C50 92 15 64 15 36C15 18 30 8 50 8Z"
        fill="currentColor"
        fillOpacity="0.03"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeOpacity="0.1"
      />
      
      {/* Node Paths */}
      {/* Path 1: Source to Left Wing */}
      <line x1="50" y1="28" x2="30" y2="48" stroke="currentColor" strokeWidth="2.5" />
      
      {/* Path 2: Source to Right Wing (Highlighted brass flight path) */}
      <line x1="50" y1="28" x2="70" y2="48" stroke="#c9a15a" strokeWidth="3" />
      <line x1="70" y1="48" x2="50" y2="68" stroke="#c9a15a" strokeWidth="3" />
      <line x1="50" y1="68" x2="30" y2="48" stroke="currentColor" strokeWidth="2.5" />

      {/* Nodes */}
      {/* Source Node */}
      <circle cx="50" cy="28" r="4.5" fill="currentColor" />
      
      {/* Left Node */}
      <circle cx="30" cy="48" r="4.5" fill="currentColor" />
      
      {/* Right Node (Golden Key target) */}
      <circle cx="70" cy="48" r="5.5" fill="#c9a15a" stroke="currentColor" strokeWidth="1" />
      
      {/* Bottom Target Node */}
      <circle cx="50" cy="68" r="4.5" fill="currentColor" />
    </svg>
  );
}

export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const textColor = light ? "text-paper" : "text-ink";
  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <LogoIcon className={`h-7 w-7 ${textColor} group-hover:opacity-90 transition-opacity`} />
      <span className={`font-display text-lg font-semibold tracking-tight ${textColor}`}>
        Vecta<span className="text-brass">Forte</span>
      </span>
    </Link>
  );
}
