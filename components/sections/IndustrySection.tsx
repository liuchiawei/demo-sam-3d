"use client";

import { motion } from "motion/react";
import { messages } from "@/lib/messages";
import { staggerContainer, fadeInUp, industryStagger } from "@/lib/animations";
import { IndustryCard } from "@/components/industry";

export function IndustrySection() {
  const industries = [
    {
      emoji: "🏭",
      emojiLabel: "Factory building",
      title: messages.industries.manufacturing.title,
      description: messages.industries.manufacturing.description,
      detail: messages.industries.manufacturing.detail,
    },
    {
      emoji: "🛒",
      emojiLabel: "Shopping cart",
      title: messages.industries.retail.title,
      description: messages.industries.retail.description,
      detail: messages.industries.retail.detail,
    },
    {
      emoji: "⚕️",
      emojiLabel: "Medical symbol",
      title: messages.industries.medical.title,
      description: messages.industries.medical.description,
      detail: messages.industries.medical.detail,
    },
    {
      emoji: "🛡️",
      emojiLabel: "Shield",
      title: messages.industries.security.title,
      description: messages.industries.security.description,
      detail: messages.industries.security.detail,
    },
  ];

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-foreground lg:text-5xl"
            variants={fadeInUp}
          >
            {messages.industries.title}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={fadeInUp}
          >
            {messages.industries.subtitle}
          </motion.p>
        </motion.div>

        {/* 行业卡片 */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={industryStagger}
          style={{ perspective: "1000px" }}
        >
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
