"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  disabled?: never;
  onClick?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/50 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-maroon-500 to-maroon-400 hover:from-maroon-400 hover:to-maroon-300 text-parchment-100 border border-maroon-400/40 shadow-glow-maroon hover:shadow-glow-gold",
    secondary:
      "bg-gold-400/10 hover:bg-gold-400/20 text-gold-300 border border-gold-400/30 hover:border-gold-400/60",
    ghost:
      "text-parchment-300 hover:text-parchment-100 hover:bg-white/5",
    outline:
      "border border-parchment-400/20 hover:border-gold-400/40 text-parchment-300 hover:text-gold-300 hover:bg-gold-400/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-5 py-2.5 text-sm rounded-lg",
    lg: "px-8 py-3.5 text-base rounded-xl",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
