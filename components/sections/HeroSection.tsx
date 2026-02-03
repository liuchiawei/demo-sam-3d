"use client";

import { useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { messages } from "@/lib/messages";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const VIDEO_SRC = "/videos/sam_demo_0203_03_pixelate_background.mp4";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const scrollToNext = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  }, []);

  const handleScrollKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToNext();
      }
    },
    [scrollToNext],
  );

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950"
      aria-label={messages.hero.title}
    >
      {/* Video background — decorative, no captions needed */}
      <div className="absolute inset-0" aria-hidden>
        <video
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/50"
          aria-hidden
        />
      </div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="flex min-w-0 flex-col justify-center space-y-6"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={prefersReducedMotion ? undefined : fadeInUp}
          >
            <motion.h1
              className="text-balance text-5xl font-bold leading-tight text-white lg:text-7xl"
              variants={prefersReducedMotion ? undefined : fadeInUp}
            >
              {messages.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl text-neutral-300 lg:text-2xl"
              variants={prefersReducedMotion ? undefined : fadeInUp}
            >
              {messages.hero.subtitle}
            </motion.p>

            <motion.p
              className="text-neutral-400 lg:text-lg"
              variants={prefersReducedMotion ? undefined : fadeInUp}
            >
              {messages.hero.description}
            </motion.p>

            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <Button
                size="lg"
                className="bg-green-500 text-white hover:bg-green-600 focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                onClick={scrollToNext}
              >
                {messages.hero.cta}
              </Button>
            </motion.div>
          </motion.div>

          <div aria-hidden />
        </div>
      </div>

      {/* Scroll indicator — button for actions per a11y guidelines */}
      <motion.button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer touch-manipulation text-center outline-none hover:text-neutral-200 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
        aria-label={messages.hero.scrollHint}
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion ? { duration: 0 } : { delay: 1, duration: 0.5 }
        }
        onClick={scrollToNext}
        onKeyDown={handleScrollKeyDown}
      >
        <span className="mb-2 block text-sm text-neutral-400">
          {messages.hero.scrollHint}
        </span>
        <motion.span
          className="inline-block"
          animate={prefersReducedMotion ? false : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6 text-green-500" aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  );
}
