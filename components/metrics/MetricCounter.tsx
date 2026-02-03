"use client";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

interface MetricCounterProps {
  value: number;
  unit?: string;
  label: string;
  description?: string;
  duration?: number;
}

export function MetricCounter({
  value,
  unit = "",
  label,
  description,
  duration = 2,
}: MetricCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, value, {
        duration,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [count, value, duration, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-2 text-5xl font-bold text-foreground lg:text-6xl">
        <motion.span>{rounded}</motion.span>
        <span className="text-blue-800 dark:text-blue-400">{unit}</span>
      </div>
      <div className="mb-1 text-lg font-semibold text-foreground/80">
        {label}
      </div>
      {description && (
        <div className="text-sm text-muted-foreground">{description}</div>
      )}
    </motion.div>
  );
}
