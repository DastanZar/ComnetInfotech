"use client";

import { motion, type MotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/* LINEAR EXACT CARD STYLES - NO SHADOWS, BORDERS ONLY */
const variantStyles = {
  // Light background (not used in Linear - kept for compatibility)
  light: `
    bg-[#FFFFFF] border border-[#E9E9E7]
    hover:border-[#C7C7C5]
  `,
  // Dark background - Linear signature style
  dark: `
    bg-[#111111] border border-[rgba(255,255,255,0.06)]
    hover:bg-[#141414] hover:border-[rgba(255,255,255,0.12)]
  `,
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  variant = "dark",
  ...props
}: CardProps) {
  const paddingStyle = paddingStyles[padding];
  const variantStyle = variantStyles[variant];

  return (
    <motion.div
      whileHover={hover ? { scale: 1 } : undefined}
      transition={{ duration: 0.15 }}
      className={`
        rounded-[10px] ${paddingStyle} ${variantStyle}
        transition-all duration-150ms ease
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* Service Card with icon - Linear style */
interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function ServiceCard({ 
  icon, 
  title, 
  description, 
  href, 
  className = "",
  variant = "dark" 
}: ServiceCardProps) {
  const content = (
    <Card hover className={`h-full ${className}`} variant={variant} padding="lg">
      <div className="text-[#3B82F6] mb-4">
        {icon}
      </div>
      <h3 className="text-[17px] font-semibold text-[#F2F2F2] mb-2" style={{ letterSpacing: '-0.01em' }}>
        {title}
      </h3>
      <p className="text-[14px] text-[#8A8A8A] leading-relaxed">
        {description}
      </p>
    </Card>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="block cursor-pointer"
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.99 }}
      >
        {content}
      </motion.a>
    );
  }

  return content;
}

/* Feature Card with number badge */
interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
  variant?: "light" | "dark";
}

export function FeatureCard({ number, title, description, className = "", variant = "dark" }: FeatureCardProps) {
  return (
    <Card variant={variant} className={`relative overflow-hidden ${className}`} padding="lg">
      <div className="text-[40px] font-bold text-[#3B82F6] mb-4" style={{ letterSpacing: '-0.03em' }}>
        {number}
      </div>
      <h3 className="text-[17px] font-semibold text-[#F2F2F2] mb-2" style={{ letterSpacing: '-0.01em' }}>
        {title}
      </h3>
      <p className="text-[14px] text-[#8A8A8A]">
        {description}
      </p>
    </Card>
  );
}

/* Stat Card */
interface StatCardProps {
  value: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function StatCard({ value, label, icon, className = "", variant = "dark" }: StatCardProps) {
  return (
    <Card variant={variant} className={`text-center ${className}`} padding="lg">
      {icon && (
        <div className="text-[#3B82F6] mb-2 flex justify-center">
          {icon}
        </div>
      )}
      <div className="text-[30px] font-bold text-[#F2F2F2] mb-1" style={{ letterSpacing: '-0.02em' }}>
        {value}
      </div>
      <div className="text-[14px] text-[#8A8A8A]">
        {label}
      </div>
    </Card>
  );
}

/* Testimonial Card - Linear style */
interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function TestimonialCard({ 
  quote, 
  author, 
  role, 
  company, 
  className = "",
  variant = "dark" 
}: TestimonialCardProps) {
  return (
    <Card variant={variant} className={className} padding="lg">
      <div className="text-[#3B82F6] text-[40px] font-serif mb-4 leading-none">
        "
      </div>
      <p className="text-[15px] text-[#8A8A8A] mb-6 italic leading-relaxed">
        {quote}
      </p>
      <div>
        <div className="font-semibold text-[#F2F2F2]">
          {author}
        </div>
        <div className="text-[13px] text-[#4A4A4A]">
          {role}
          {company && <span> at {company}</span>}
        </div>
      </div>
    </Card>
  );
}
