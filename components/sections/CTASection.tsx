"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { messages } from "@/lib/messages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { FileText, BookOpen, Calendar } from "lucide-react";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    usecase: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitStatus("success");
    setIsSubmitting(false);

    // 重置表单
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", usecase: "" });
      setSubmitStatus("idle");
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="bg-neutral-900 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* 左侧：文案和资源 */}
          <motion.div
            className="flex flex-col justify-center space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <div>
              <motion.h2
                className="mb-4 text-4xl font-bold text-white lg:text-5xl"
                variants={fadeInUp}
              >
                {messages.cta.title}
              </motion.h2>
              <motion.p
                className="mb-2 text-xl text-neutral-300"
                variants={fadeInUp}
              >
                {messages.cta.subtitle}
              </motion.p>
              <motion.p
                className="text-neutral-400"
                variants={fadeInUp}
              >
                {messages.cta.description}
              </motion.p>
            </div>

            {/* 资源链接 */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white">
                {messages.cta.resources.title}
              </h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  {messages.cta.resources.whitepaper}
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  {messages.cta.resources.documentation}
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {messages.cta.resources.demo}
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* 右侧：表单 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-lg border border-neutral-800 bg-neutral-950/50 p-8 backdrop-blur"
            >
              {/* 姓名 */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  {messages.cta.form.name.label}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={messages.cta.form.name.placeholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500"
                />
              </div>

              {/* 邮箱 */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  {messages.cta.form.email.label}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={messages.cta.form.email.placeholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500"
                />
              </div>

              {/* 公司 */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-white">
                  {messages.cta.form.company.label}
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder={messages.cta.form.company.placeholder}
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500"
                />
              </div>

              {/* 用例 */}
              <div className="space-y-2">
                <Label htmlFor="usecase" className="text-white">
                  {messages.cta.form.usecase.label}
                </Label>
                <Textarea
                  id="usecase"
                  name="usecase"
                  placeholder={messages.cta.form.usecase.placeholder}
                  value={formData.usecase}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="border-neutral-700 bg-neutral-900 text-white placeholder:text-neutral-500"
                />
              </div>

              {/* 提交按钮 */}
              <Button
                type="submit"
                className="w-full bg-blue-800 text-white hover:bg-blue-900 dark:bg-blue-400 dark:hover:bg-blue-500"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "送信中..."
                  : submitStatus === "success"
                    ? messages.cta.form.success
                    : messages.cta.form.submit}
              </Button>

              {/* 错误消息 */}
              {submitStatus === "error" && (
                <p className="text-center text-sm text-red-400">
                  {messages.cta.form.error}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
