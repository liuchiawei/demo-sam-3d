"use client";

import { motion } from "motion/react";
import { messages } from "@/lib/messages";
import { METRICS } from "@/lib/constants";
import { MetricCounter } from "@/components/metrics/MetricCounter";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function MetricsSection() {
  const metrics = [
    {
      value: METRICS.responseTime,
      unit: messages.metrics.speed.unit,
      label: messages.metrics.speed.label,
      description: messages.metrics.speed.description,
    },
    {
      value: METRICS.accuracy,
      unit: messages.metrics.accuracy.unit,
      label: messages.metrics.accuracy.label,
      description: messages.metrics.accuracy.description,
    },
    {
      value: METRICS.categories,
      unit: messages.metrics.categories.unit,
      label: messages.metrics.categories.label,
      description: messages.metrics.categories.description,
    },
    {
      value: METRICS.fps,
      unit: messages.metrics.fps.unit,
      label: messages.metrics.fps.label,
      description: messages.metrics.fps.description,
    },
  ];

  const comparisonData = [
    messages.metrics.comparison.row1,
    messages.metrics.comparison.row2,
    messages.metrics.comparison.row3,
    messages.metrics.comparison.row4,
  ];

  return (
    <section className="bg-muted/30 py-20 lg:py-32">
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
            {messages.metrics.title}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground"
            variants={fadeInUp}
          >
            {messages.metrics.subtitle}
          </motion.p>
        </motion.div>

        {/* 指标计数器 */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCounter key={index} {...metric} />
          ))}
        </div>

        {/* 对比表格 */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 text-center text-2xl font-bold text-foreground">
            {messages.metrics.comparison.title}
          </h3>

          <div className="overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {messages.metrics.comparison.feature}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    {messages.metrics.comparison.traditional}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-800 dark:text-blue-400">
                    {messages.metrics.comparison.sam}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="px-6 py-4 text-sm text-foreground/90">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {row.traditional}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-blue-800 dark:text-blue-400">
                      {row.sam}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
