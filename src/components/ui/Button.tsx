"use client";

import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondaryDark" | "secondaryLight" | "accentOutline" | "nav" | "cta" | "secondary" | "outline" | "ghost" | "secondary-dark" | "secondary-light" | "accent-outline";
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

const variantStyles: Record<ButtonVariant, string> = {
  // Primary button - blue accent for main CTAs
  primary: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus-visible:ring-[#2563EB]",
  // Alias for primary
  cta: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus-visible:ring-[#2563EB]",
  // Secondary/ghost on dark background
  secondaryDark: "bg-transparent text-[#F0F0F0] border border-[#3D3D3D] hover:bg-[#1A1A1A] hover:border-[#606060] focus-visible:ring-[#3D3D3D]",
  "secondary-dark": "bg-transparent text-[#F0F0F0] border border-[#3D3D3D] hover:bg-[#1A1A1A] hover:border-[#606060] focus-visible:ring-[#3D3D3D]",
  secondary: "bg-transparent text-[#F0F0F0] border border-[#3D3D3D] hover:bg-[#1A1A1A] hover:border-[#606060] focus-visible:ring-[#3D3D3D]",
  // Secondary/ghost on light background
  secondaryLight: "bg-transparent text-[#1A1A1A] border border-[#E9E9E7] hover:bg-[#F7F6F3] hover:border-[#C7C7C5] focus-visible:ring-[#E9E9E7]",
  "secondary-light": "bg-transparent text-[#1A1A1A] border border-[#E9E9E7] hover:bg-[#F7F6F3] hover:border-[#C7C7C5] focus-visible:ring-[#E9E9E7]",
  // Accent outline for secondary CTAs on light bg
  accentOutline: "bg-transparent text-[#2563EB] border border-[#2563EB] hover:bg-[#EFF6FF] focus-visible:ring-[#2563EB]",
  "accent-outline": "bg-transparent text-[#2563EB] border border-[#2563EB] hover:bg-[#EFF6FF] focus-visible:ring-[#2563EB]",
  // Legacy variants
  outline: "bg-transparent text-[#1A1A1A] border border-[#E9E9E7] hover:bg-[#F7F6F3] hover:border-[#C7C7C5] focus-visible:ring-[#E9E9E7]",
  ghost: "bg-transparent text-[#1A1A1A] hover:bg-[#F7F6F3] focus-visible:ring-[#E9E9E7]",
  // Nav CTA button
  nav: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] focus-visible:ring-[#2563EB]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
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
    inline-flex items-center justify-center font-semibold rounded-[8px]
    transition-all duration-150 ease
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.01 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
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
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
}

/* Icon button component */
interface IconButtonProps {
  icon: ReactNode;
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
}

export function IconButton({ 
  icon, 
  label, 
  href, 
  className = "", 
  onClick,
  variant = "light" 
}: IconButtonProps) {
  const baseStyles = variant === "dark" 
    ? "bg-transparent text-[#F0F0F0] hover:text-white hover:bg-[#1A1A1A]"
    : "bg-transparent text-[#1A1A1A] hover:text-[#1A1A1A] hover:bg-[#F7F6F3]";

  const button = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        p-3 rounded-full ${baseStyles}
        transition-colors duration-150
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]
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
