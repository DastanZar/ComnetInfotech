"use client";

import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "cta";
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
  primary: "bg-primary text-white hover:bg-primary-light",
  secondary: "bg-secondary text-white hover:bg-secondary-light",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  ghost: "text-primary hover:bg-surface",
  cta: "bg-cta text-white hover:bg-cta-hover",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
    inline-flex items-center justify-center font-medium rounded-lg
    transition-colors duration-200 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent
    disabled:opacity-50 disabled:cursor-not-allowed
    cursor-pointer
  `;

  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  const buttonContent = (
    <motion.span
      whileHover={{ scale: disabled ? 1 : 1.02 }}
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

/* Animated icon button */
interface IconButtonProps {
  icon: ReactNode;
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function IconButton({ icon, label, href, className = "", onClick }: IconButtonProps) {
  const button = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        p-3 rounded-full bg-surface hover:bg-accent-muted
        text-primary hover:text-accent
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
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
