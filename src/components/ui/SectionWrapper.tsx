"use client";

import { motion, useInView, type MotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";

type SectionBackground = "dark" | "dark-surface" | "light" | "white" | "accent";

interface SectionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "none";
  once?: boolean;
  id?: string;
  background?: SectionBackground;
}

const backgroundStyles: Record<SectionBackground, string> = {
  dark: "bg-[#0D0D0D]",
  "dark-surface": "bg-[#161616]",
  light: "bg-[#F7F6F3]",
  white: "bg-[#FFFFFF]",
  accent: "bg-[#F97316]",
};

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -40 },
    animate: { opacity: 1, x: 0 },
  },
  "slide-right": {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
  none: {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  },
};

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  background?: SectionBackground;
}

export function SectionContainer({ children, className = "", background = "white" }: SectionContainerProps) {
  return (
    <section className={`${backgroundStyles[background]} ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  once = true,
  ...props
}: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });
  const selectedAnimation = animations[animation];

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration: 0.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* Section heading component for consistent styling */
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  className = "",
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={`max-w-[640px] ${align === "center" ? "mx-auto text-center mb-12" : "mb-12"} ${className}`}>
      {eyebrow && (
        <span className="eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[32px] md:text-[36px] font-bold text-[#1A1A1A] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[#374151] text-[16px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

/* Dark section heading */
export function SectionHeadingDark({ 
  eyebrow, 
  title, 
  description, 
  className = "",
  align = "center" 
}: SectionHeadingProps) {
  return (
    <div className={`max-w-[640px] ${align === "center" ? "mx-auto text-center mb-12" : "mb-12"} ${className}`}>
      {eyebrow && (
        <span className="eyebrow eyebrow-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[32px] md:text-[36px] font-bold text-[#F0F0F0] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[#A0A0A0] text-[16px] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

/* Staggered children animation wrapper */
interface StaggerWrapperProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerWrapper({
  children,
  className = "",
  staggerDelay = 0.06,
}: StaggerWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Individual staggered item */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
