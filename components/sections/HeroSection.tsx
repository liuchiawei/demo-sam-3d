"use client";

import { useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { messages } from "@/lib/messages";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

const VIDEO_SRC = "/videos/sam_demo_0203_01.mp4";

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
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
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
          className="absolute inset-0 bg-gradient-to-r from-background via-background/65 to-background/10"
          aria-hidden
        />
      </div>

      {/* Theme Switcher */}
      <div className="absolute right-6 top-6 z-20">
        <ThemeSwitcher />
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
              className="text-balance text-5xl font-black leading-tight text-foreground lg:text-7xl"
              variants={prefersReducedMotion ? undefined : fadeInUp}
            >
              {messages.hero.title}
            </motion.h1>

            <motion.p
              className="text-xl text-foreground/80 lg:text-2xl"
              variants={prefersReducedMotion ? undefined : fadeInUp}
            >
              {messages.hero.subtitle}
            </motion.p>

            <motion.p
              className="text-muted-foreground text-sm"
              variants={prefersReducedMotion ? undefined : fadeInUp}
            >
              {messages.hero.description}
            </motion.p>

            <motion.div variants={prefersReducedMotion ? undefined : fadeInUp}>
              <Button
                size="lg"
                className="bg-blue-800 text-white hover:bg-blue-900 dark:bg-blue-400 dark:hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-800 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer touch-manipulation text-center outline-none hover:text-neutral-200 focus-visible:rounded focus-visible:ring-2 focus-visible:ring-blue-800 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
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
          <ChevronDown className="h-6 w-6 text-blue-800 dark:text-blue-400" aria-hidden />
        </motion.span>
      </motion.button>
    </section>
  );
}
