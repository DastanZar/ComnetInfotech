"use client";

import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "nav" | "cta" | "outline" | "secondary-dark" | "secondary-light" | "accent-outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends MotionProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

/* LINEAR EXACT BUTTON STYLES */
const variantStyles: Record<ButtonVariant, string> = {
  // Primary button - Linear blue
  primary: 
    "bg-[#2563EB] text-white hover:bg-[#1D4ED8] ",
  // Secondary ghost button - Linear style on dark
  secondary: 
    "bg-transparent text-[#F2F2F2] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.20)] ",
  // Ghost/label for navigation
  ghost: 
    "bg-transparent text-[#8A8A8A] hover:text-[#F2F2F2] ",
  // Nav CTA button - same as primary
  nav: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] ",
  // CTA alias for primary
  cta: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] ",
  // Outline for light backgrounds
  outline: "bg-transparent text-[#F2F2F2] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.20)]",
  // Secondary dark variant
  "secondary-dark": "bg-transparent text-[#F2F2F2] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.20)]",
  // Secondary light variant
  "secondary-light": "bg-transparent text-[#F2F2F2] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.20)]",
  // Accent outline variant
  "accent-outline": "bg-transparent text-[#3B82F6] border border-[rgba(37,99,235,0.16)] hover:bg-[rgba(37,99,235,0.08)] hover:border-[rgba(37,99,235,0.24)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[14px]",
  md: "px-4 py-2 text-[14px]",
  lg: "px-6 py-3 text-[15px]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-[6px]
    transition-all duration-120ms ease
    focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,99,235,0.5)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  // Primary and nav buttons get subtle scale on hover
  const whileHover = variant === "primary" || variant === "nav"
    ? { scale: disabled ? 1 : 1.01 }
    : undefined;
  const whileTap = { scale: disabled ? 1 : 0.99 };

  const buttonContent = (
    <motion.span
      whileHover={whileHover}
      whileTap={whileTap}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
        onClick={onClick}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyle} ${sizeStyle} ${className}`}
      whileHover={whileHover}
      whileTap={whileTap}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}

/* Icon button component - Linear style */
interface IconButtonProps {
  icon: ReactNode;
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function IconButton ({ 
  icon, 
  label, 
  href, 
  className = "", 
  onClick 
}: IconButtonProps) {
  const button = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        p-3 rounded-full 
        bg-transparent text-[#8A8A8A] hover:text-[#F2F2F2] hover:bg-[rgba(255,255,255,0.04)]
        transition-colors duration-120ms
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(37,99,235,0.5)]
        ${className}
      `}
      aria-label={label}
      onClick={onClick}
    >
      {icon}
    </motion.button>
  );

  if (href) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}
