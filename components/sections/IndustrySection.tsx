"use client";

import { motion } from "motion/react";
import { messages } from "@/lib/messages";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Factory, ShoppingBag, Heart, Shield } from "lucide-react";

export function IndustrySection() {
  const industries = [
    {
      icon: <Factory className="h-12 w-12 text-green-500" />,
      title: messages.industries.manufacturing.title,
      description: messages.industries.manufacturing.description,
      detail: messages.industries.manufacturing.detail,
    },
    {
      icon: <ShoppingBag className="h-12 w-12 text-green-500" />,
      title: messages.industries.retail.title,
      description: messages.industries.retail.description,
      detail: messages.industries.retail.detail,
    },
    {
      icon: <Heart className="h-12 w-12 text-green-500" />,
      title: messages.industries.medical.title,
      description: messages.industries.medical.description,
      detail: messages.industries.medical.detail,
    },
    {
      icon: <Shield className="h-12 w-12 text-green-500" />,
      title: messages.industries.security.title,
      description: messages.industries.security.description,
      detail: messages.industries.security.detail,
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
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="mb-4 text-4xl font-bold text-white lg:text-5xl"
            variants={fadeInUp}
          >
            {messages.industries.title}
          </motion.h2>
          <motion.p
            className="text-xl text-neutral-400"
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
          variants={staggerContainer}
        >
          {industries.map((industry, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full border-neutral-800 bg-neutral-900/50 backdrop-blur transition-colors hover:border-green-500/50">
                <CardHeader className="space-y-4">
                  <div className="flex justify-center">{industry.icon}</div>
                  <CardTitle className="text-center text-xl text-white">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="text-center">
                    {industry.description}
                  </CardDescription>
                  <p className="text-center text-sm text-neutral-500">
                    {industry.detail}
                  </p>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
