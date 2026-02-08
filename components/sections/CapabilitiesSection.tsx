"use client";

import { motion } from "motion/react";
import { messages } from "@/lib/messages";
import { PATHS } from "@/lib/constants";
import { CapabilityCard } from "@/components/capabilities/CapabilityCard";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  Box,
  Sparkles,
  Layers,
  Shield,
  Route,
  Cuboid,
  Moon,
  ScanSearch,
} from "lucide-react";

export function CapabilitiesSection() {
  const thumbs = PATHS.images.thumbnails;
  const capabilities = [
    {
      title: messages.capabilities.extraction.title,
      description: messages.capabilities.extraction.description,
      detail: messages.capabilities.extraction.detail,
      videoSrc: PATHS.videos.scene3d,
      thumbnailSrc: thumbs[0],
      show3DDialog: true,
      icon: <Box className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.scene3d.title,
      description: messages.capabilities.scene3d.description,
      detail: messages.capabilities.scene3d.detail,
      thumbnailSrc: thumbs[1],
      show3DDialog: true,
      icon: <Cuboid className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.visualEffect.title,
      description: messages.capabilities.visualEffect.description,
      detail: messages.capabilities.visualEffect.detail,
      videoSrc: PATHS.videos.visualEffect,
      thumbnailSrc: thumbs[2],
      icon: <Sparkles className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.background.title,
      description: messages.capabilities.background.description,
      detail: messages.capabilities.background.detail,
      videoSrc: PATHS.videos.background,
      thumbnailSrc: thumbs[3],
      icon: <Layers className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.mosaic.title,
      description: messages.capabilities.mosaic.description,
      detail: messages.capabilities.mosaic.detail,
      videoSrc: PATHS.videos.mosaic,
      thumbnailSrc: thumbs[4],
      icon: <Shield className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.tracking.title,
      description: messages.capabilities.tracking.description,
      detail: messages.capabilities.tracking.detail,
      videoSrc: PATHS.videos.tracking,
      thumbnailSrc: thumbs[5],
      icon: <Route className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.dark.title,
      description: messages.capabilities.dark.description,
      detail: messages.capabilities.dark.detail,
      videoSrc: PATHS.videos.dark,
      thumbnailSrc: thumbs[6],
      videoObjectPosition: "left" as const,
      icon: <Moon className="h-12 w-12 text-blue-800 dark:text-blue-400" />,
    },
    {
      title: messages.capabilities.mini.title,
      description: messages.capabilities.mini.description,
      detail: messages.capabilities.mini.detail,
      videoSrc: PATHS.videos.mini,
      thumbnailSrc: thumbs[6],
      icon: (
        <ScanSearch className="h-12 w-12 text-blue-800 dark:text-blue-400" />
      ),
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
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-foreground lg:text-5xl"
            variants={fadeInUp}
          >
            {messages.capabilities.title}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={fadeInUp}
          >
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
          <p className="text-sm text-muted-foreground/60">
            ※ カードをクリックしてフルスクリーンで視聴
          </p>
        </motion.div>
      </div>
    </section>
  );
}
