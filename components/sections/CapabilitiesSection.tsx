"use client";

import { motion } from "motion/react";
import { messages } from "@/lib/messages";
import { PATHS } from "@/lib/constants";
import { CapabilityCard } from "@/components/capabilities/CapabilityCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Box, Activity, Layers, MessageSquare } from "lucide-react";

export function CapabilitiesSection() {
  const capabilities = [
    {
      title: messages.capabilities.extraction.title,
      description: messages.capabilities.extraction.description,
      detail: messages.capabilities.extraction.detail,
      thumbnailSrc: PATHS.images.demoScene,
      show3DDialog: true,
      icon: <Box className="h-12 w-12 text-green-500" />,
    },
    {
      title: messages.capabilities.heatmap.title,
      description: messages.capabilities.heatmap.description,
      detail: messages.capabilities.heatmap.detail,
      videoSrc: PATHS.videos.heatmap,
      icon: <Activity className="h-12 w-12 text-green-500" />,
    },
    {
      title: messages.capabilities.background.title,
      description: messages.capabilities.background.description,
      detail: messages.capabilities.background.detail,
      videoSrc: PATHS.videos.background,
      icon: <Layers className="h-12 w-12 text-green-500" />,
    },
    {
      title: messages.capabilities.prompt.title,
      description: messages.capabilities.prompt.description,
      detail: messages.capabilities.prompt.detail,
      videoSrc: PATHS.videos.prompt,
      icon: <MessageSquare className="h-12 w-12 text-green-500" />,
    },
  ];

  return (
    <section className="bg-neutral-950 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-white lg:text-5xl"
            variants={fadeInUp}
          >
            {messages.capabilities.title}
          </motion.h2>
          <motion.p className="text-xl text-neutral-400" variants={fadeInUp}>
            {messages.capabilities.subtitle}
          </motion.p>
        </motion.div>

        {/* 能力卡片网格 */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {capabilities.map((capability, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <CapabilityCard {...capability} />
            </motion.div>
          ))}
        </motion.div>

        {/* 说明文字 */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-neutral-500">
            ※ カードをクリックしてフルスクリーンで視聴
          </p>
        </motion.div>
      </div>
    </section>
  );
}
