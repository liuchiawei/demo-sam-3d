/**
 * Motion 动画配置
 */

import type { Variants, Transition } from "motion/react";

// 缓动函数
export const EASINGS = {
  easeInOut: [0.4, 0, 0.2, 1],
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 10,
  },
} as const;

// 过渡配置
export const TRANSITIONS: Record<string, Transition> = {
  fast: {
    duration: 0.2,
    ease: EASINGS.easeOut,
  },
  normal: {
    duration: 0.3,
    ease: EASINGS.easeInOut,
  },
  slow: {
    duration: 0.5,
    ease: EASINGS.easeInOut,
  },
  spring: EASINGS.spring,
};

// 淡入动画
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: TRANSITIONS.normal,
  },
};

// 从下淡入
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.normal,
  },
};

// 从左淡入
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITIONS.normal,
  },
};

// 从右淡入
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: TRANSITIONS.normal,
  },
};

// 缩放淡入
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: TRANSITIONS.normal,
  },
};

// 容器交错动画
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// 卡片悬停效果
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
  },
  hover: {
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: TRANSITIONS.fast,
  },
};

// 数字计数动画配置
export const counterAnimation = {
  duration: 2,
  ease: "easeOut",
};

// 滚动触发配置
export const scrollTrigger = {
  once: true,
  amount: 0.3,
  margin: "-100px",
};

// 3D卡片显示动画（带透视效果）
export const card3DReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotateX: -15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    }
  }
};

// 行业卡片悬停效果（带3D倾斜）
export const industryCardHover = {
  rest: {
    scale: 1,
    rotateY: 0,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    transition: TRANSITIONS.fast,
  },
  hover: {
    scale: 1.03,
    rotateY: 2,
    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25), 0 20px 25px -5px rgb(0 0 0 / 0.1)",
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 20,
    }
  }
};

// Emoji浮动动画
export const emojiFloat = {
  rest: {
    y: 0,
    scale: 1,
    transition: TRANSITIONS.fast,
  },
  hover: {
    y: -8,
    scale: 1.15,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10,
    }
  }
};

// 行业卡片交错动画
export const industryStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
