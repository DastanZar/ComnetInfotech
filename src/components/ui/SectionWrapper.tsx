"use client";

import { motion, useInView, type MotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionWrapperProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  once?: boolean;
  id?: string;
}

const animations = {
  "fade-up": {
    initial: { opacity: 0, y: 40 },
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
};

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
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
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
  staggerDelay = 0.1,
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
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
