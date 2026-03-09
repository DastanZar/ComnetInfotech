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

const variantStyles = {
  // Light background (Notion-style)
  light: `
    bg-[#FFFFFF] border border-[#E9E9E7]
    shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]
    hover:border-[#C7C7C5]
    hover:shadow-[0_4px_8px_rgba(0,0,0,0.06),0_12px_32px_rgba(0,0,0,0.10)]
  `,
  // Dark background (Linear-style)
  dark: `
    bg-[#161616] border border-[#2A2A2A]
    shadow-none
    hover:border-[#3D3D3D] hover:bg-[#1A1A1A]
  `,
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  variant = "light",
  ...props
}: CardProps) {
  const paddingStyle = paddingStyles[padding];
  const variantStyle = variantStyles[variant];

  return (
    <motion.div
      whileHover={hover ? { y: 0 } : undefined}
      transition={{ duration: 0.15 }}
      className={`
        rounded-[12px] ${paddingStyle} ${variantStyle}
        transition-all duration-150 ease
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* Service Card with icon */
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
  variant = "light" 
}: ServiceCardProps) {
  const isDark = variant === "dark";
  
  const content = (
    <Card hover className={`h-full ${className}`} variant={variant}>
      <div className={isDark ? "text-[#3B82F6] mb-4" : "text-[#2563EB] mb-4"}>
        {icon}
      </div>
      <h3 className={isDark ? "text-xl font-semibold text-[#F0F0F0] mb-2" : "text-xl font-semibold text-[#1A1A1A] mb-2"}>
        {title}
      </h3>
      <p className={isDark ? "text-[#A0A0A0] text-[15px] leading-relaxed" : "text-[#374151] text-[15px] leading-relaxed"}>
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
        whileTap={{ scale: 0.98 }}
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

export function FeatureCard({ number, title, description, className = "", variant = "light" }: FeatureCardProps) {
  const isDark = variant === "dark";
  
  return (
    <Card variant={variant} className={`relative overflow-hidden ${className}`}>
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#3B82F6] rounded-full opacity-20" />
      <div className="relative">
        <div className={isDark ? "text-4xl font-bold text-[#3B82F6] mb-4" : "text-4xl font-bold text-[#2563EB] mb-4"}>
          {number}
        </div>
        <h3 className={isDark ? "text-lg font-semibold text-[#F0F0F0] mb-2" : "text-lg font-semibold text-[#1A1A1A] mb-2"}>
          {title}
        </h3>
        <p className={isDark ? "text-[#A0A0A0] text-sm" : "text-[#374151] text-sm"}>
          {description}
        </p>
      </div>
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

export function StatCard({ value, label, icon, className = "", variant = "light" }: StatCardProps) {
  const isDark = variant === "dark";
  
  return (
    <Card variant={variant} className={`text-center ${className}`}>
      {icon && (
        <div className={isDark ? "text-[#3B82F6] mb-2 flex justify-center" : "text-[#2563EB] mb-2 flex justify-center"}>
          {icon}
        </div>
      )}
      <div className={isDark ? "text-3xl font-bold text-[#F0F0F0] mb-1" : "text-3xl font-bold text-[#1A1A1A] mb-1"}>
        {value}
      </div>
      <div className={isDark ? "text-[#A0A0A0] text-sm" : "text-[#374151] text-sm"}>
        {label}
      </div>
    </Card>
  );
}

/* Testimonial Card */
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
  variant = "light" 
}: TestimonialCardProps) {
  const isDark = variant === "dark";
  
  return (
    <Card variant={variant} className={className}>
      <div className={isDark ? "text-[#3B82F6] text-4xl font-serif mb-4" : "text-[#2563EB] text-4xl font-serif mb-4"}>
        "
      </div>
      <p className={isDark ? "text-[#A0A0A0] mb-6 italic leading-relaxed" : "text-[#374151] mb-6 italic leading-relaxed"}>
        {quote}
      </p>
      <div>
        <div className={isDark ? "font-semibold text-[#F0F0F0]" : "font-semibold text-[#1A1A1A]"}>
          {author}
        </div>
        <div className={isDark ? "text-sm text-[#606060]" : "text-sm text-[#9CA3AF]"}>
          {role}
          {company && <span> at {company}</span>}
        </div>
      </div>
    </Card>
  );
}
