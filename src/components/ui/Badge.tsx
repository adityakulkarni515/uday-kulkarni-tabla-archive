"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "maroon" | "muted" | "success" | "custom";
  className?: string;
  size?: "sm" | "md";
}

export function Badge({
  children,
  variant = "muted",
  className,
  size = "sm",
}: BadgeProps) {
  const variants = {
    gold: "bg-gold-400/15 text-gold-300 border border-gold-400/30",
    maroon: "bg-maroon-400/20 text-maroon-200 border border-maroon-400/30",
    muted: "bg-white/5 text-parchment-400 border border-white/10",
    success: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
    custom: "",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px] tracking-wider",
    md: "px-3 py-1 text-xs tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium uppercase",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
