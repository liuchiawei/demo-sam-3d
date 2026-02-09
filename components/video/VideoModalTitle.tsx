"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface VideoModalTitleProps {
  title: string;
}

export function VideoModalTitle({ title }: VideoModalTitleProps) {
  return (
    <motion.div
      className="hidden lg:block absolute z-10 bottom-12 left-8"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-5xl font-bold text-white text-shadow-lg">{title}</h1>
    </motion.div>
  );
}
