"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  card3DReveal,
  industryCardHover,
  emojiFloat,
} from "@/lib/animations";

export interface IndustryCardProps {
  emoji: string;
  emojiLabel: string;
  title: string;
  description: string;
  detail: string;
  index: number;
}

const simpleCardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export const IndustryCard = React.memo(function IndustryCard({
  emoji,
  emojiLabel,
  title,
  description,
  detail,
  index,
}: IndustryCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = shouldReduceMotion
    ? simpleCardVariants
    : {
        hidden: card3DReveal.hidden,
        visible: {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 15,
            delay: index * 0.15,
          },
        },
      };

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group h-full"
      aria-labelledby={`industry-title-${index}`}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
          margin: "-50px 0px -50px 0px",
        }}
        variants={cardVariants}
        style={{ perspective: "1000px" }}
        className="h-full"
      >
        <motion.div
          variants={shouldReduceMotion ? undefined : (industryCardHover as any)}
          className={cn(
            "relative h-full flex flex-col",
            "p-6 md:p-8 lg:p-10",
            "rounded-xl",
            "bg-gradient-to-br from-card/80 to-card/95",
            "backdrop-blur-sm",
            "border border-border",
            "shadow-md",
            "overflow-hidden",
            // Dark mode adjustments
            "dark:from-card/70 dark:to-card/90",
            // Hover state
            "hover:border-primary/50 dark:hover:border-primary/60",
            // Will-change for performance
            "will-change-[transform,opacity]",
            "group-hover:will-change-auto"
          )}
        >
          {/* Top gradient overlay */}
          <div
            className={cn(
              "absolute top-0 left-0 right-0 h-32",
              "bg-gradient-to-b from-blue-800/40 to-transparent",
              "dark:from-blue-400/40",
              "pointer-events-none"
            )}
          />

          {/* Emoji container */}
          <div className="relative mb-6 flex justify-center">
            <div
              className={cn(
                "relative",
                "w-24 h-24 rounded-2xl",
                "flex items-center justify-center",
              )}
            >
              <motion.span
                role="img"
                aria-label={emojiLabel}
                variants={shouldReduceMotion ? undefined : (emojiFloat as any)}
                className="text-[4.5rem] leading-none select-none"
              >
                {emoji}
              </motion.span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center text-center">
            <h3
              id={`industry-title-${index}`}
              className={cn(
                "text-xl lg:text-2xl font-semibold mb-3",
                "text-foreground",
                "tracking-tight"
              )}
            >
              {title}
            </h3>

            <p
              className={cn(
                "text-base mb-4",
                "text-muted-foreground",
                "leading-relaxed"
              )}
            >
              {description}
            </p>

            <p
              className={cn(
                "text-sm",
                "text-muted-foreground/70",
                "leading-normal"
              )}
            >
              {detail}
            </p>
          </div>

          {/* Bottom accent bar */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-0.5",
              "bg-gradient-to-r from-transparent via-primary/50 to-transparent",
              "dark:via-primary/70",
              "opacity-0 group-hover:opacity-100",
              "transition-opacity duration-300"
            )}
          />
        </motion.div>
      </motion.div>
    </motion.article>
  );
});
