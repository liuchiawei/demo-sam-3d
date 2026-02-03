import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 图片优化
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },

  // Turbopack 配置（Next.js 16+ 默认使用 Turbopack）
  turbopack: {
    // 添加 GLB/GLTF 模型支持到 Turbopack
    rules: {
      "*.glb": {
        loaders: ["file-loader"],
        as: "*.glb",
      },
      "*.gltf": {
        loaders: ["file-loader"],
        as: "*.gltf",
      },
    },
  },

  // 性能优化
  experimental: {
    optimizePackageImports: [
      "@react-three/fiber",
      "@react-three/drei",
      "motion",
      "lucide-react",
    ],
  },
};

export default nextConfig;
