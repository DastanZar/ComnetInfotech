"use client";

import { motion, type MotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface CardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "default" | "elevated" | "bordered" | "surface";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const variantStyles = {
  default: "bg-white",
  elevated: "bg-white shadow-lg",
  bordered: "bg-white border border-border",
  surface: "bg-surface",
};

export function Card({
  children,
  className = "",
  hover = false,
  padding = "md",
  variant = "default",
  ...props
}: CardProps) {
  const paddingStyle = paddingStyles[padding];
  const variantStyle = variantStyles[variant];

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        rounded-xl ${paddingStyle} ${variantStyle}
        ${hover ? "shadow-md hover:shadow-xl transition-shadow" : "shadow-sm"}
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
}

export function ServiceCard({ icon, title, description, href, className = "" }: ServiceCardProps) {
  const content = (
    <Card hover className={`h-full ${className}`}>
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </Card>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="block cursor-pointer"
        whileHover={{ scale: 1.02 }}
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
}

export function FeatureCard({ number, title, description, className = "" }: FeatureCardProps) {
  return (
    <Card variant="bordered" className={`relative overflow-hidden ${className}`}>
      <div className="absolute -right-4 -top-4 w-20 h-20 bg-accent-muted rounded-full opacity-50" />
      <div className="relative">
        <div className="text-4xl font-bold text-accent mb-4">{number}</div>
        <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm">{description}</p>
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
}

export function StatCard({ value, label, icon, className = "" }: StatCardProps) {
  return (
    <Card variant="surface" className={`text-center ${className}`}>
      {icon && <div className="text-accent mb-2 flex justify-center">{icon}</div>}
      <div className="text-3xl font-bold text-primary mb-1">{value}</div>
      <div className="text-text-secondary text-sm">{label}</div>
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
}

export function TestimonialCard({ quote, author, role, company, className = "" }: TestimonialCardProps) {
  return (
    <Card variant="bordered" className={className}>
      <div className="text-accent text-4xl font-serif mb-4">"</div>
      <p className="text-text-secondary mb-6 italic">{quote}</p>
      <div>
        <div className="font-semibold text-primary">{author}</div>
        <div className="text-sm text-text-muted">
          {role}
          {company && <span> at {company}</span>}
        </div>
      </div>
    </Card>
  );
}
