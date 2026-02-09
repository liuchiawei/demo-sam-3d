/**
 * 全局常量配置
 */

// 资源路径
export const PATHS = {
  models: {
    worker1: "/models/object_0_worker_1.glb",
    bag: "/models/object_1_bag.glb",
    worker2: "/models/object_2_worker_2.glb",
  },
  videos: {
    extraction: "/videos/sam_demo_0203_02_heatmap.mp4",
    background: "/videos/sam_demo_0203_03_pixelate_background.mp4",
    visualEffect: "/videos/sam_demo_0203_01.mp4",
    mosaic: "/videos/sam_demo_0203_04_mosaic.mp4",
    tracking: "/videos/sam_demo_0203_05_tracking.mp4",
    scene3d: "/videos/sam_demo_0203_02_heatmap.mp4",
    mini: "/videos/sam_demo_0203_06_mini.mp4",
    dark: "/videos/sam_demo_0203_07_dark.mp4",
    objectDetect1: "/videos/object-detect.mp4",
    objectDetect2: "/videos/object-detect-2.mp4",
    objectDetect3: "/videos/object-detect-3.mp4",
  },
  images: {
    demoScene: "/thumbnails/demo-scene.png",
    thumbnails: {
      extraction: "/thumbnails/demo-02.jpg",
      scene3d: "/thumbnails/demo-scene.png",
      background: "/thumbnails/demo-03.jpg",
      visualEffect: "/thumbnails/demo-01.jpg",
      mosaic: "/thumbnails/demo-04.jpg",
      tracking: "/thumbnails/demo-05.jpg",
      mini: "/thumbnails/demo-06.jpg",
      dark: "/thumbnails/demo-07.jpg",
      objectDetect1: "/thumbnails/object-detect.png",
      objectDetect2: "/thumbnails/object-detect-2.png",
      objectDetect3: "/thumbnails/object-detect-3.png",
    },
  },
} as const;

// 性能指标
export const METRICS = {
  responseTime: 30, // ms
  accuracy: 95, // %
  categories: 1000, // +
  fps: 30, // FPS
} as const;

// 颜色主题
export const COLORS = {
  brand: {
    primary: "hsl(142, 76%, 36%)", // 绿色 - 成功/准确
    secondary: "hsl(0, 0%, 20%)", // 深灰
  },
  accent: {
    success: "hsl(142, 76%, 36%)",
    warning: "hsl(38, 92%, 50%)",
    error: "hsl(0, 84%, 60%)",
  },
} as const;

// 动画时长
export const DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
} as const;

// 断点
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// 3D 场景配置
export const SCENE_CONFIG = {
  camera: {
    fov: 50,
    near: 0.1,
    far: 1000,
    position: [0, 2, 8] as [number, number, number],
  },
  lights: {
    ambient: {
      intensity: 0.5,
    },
    directional: {
      intensity: 1,
      position: [10, 10, 5] as [number, number, number],
    },
  },
  models: {
    scale: 1,
    rotationSpeed: 0.001,
  },
} as const;

// 视频配置
export const VIDEO_CONFIG = {
  preload: "metadata" as const,
  loop: true,
  muted: true,
  playsInline: true,
} as const;

/** 大尺寸 Modal（VideoModal / Scene3DModal）的 DialogContent 共用 class，覆寫預設 max-w、加上 max-h，關閉鈕 z-10 確保可點 */
export const MODAL_CONTENT_LARGE_CLASS =
  "max-w-[calc(100%-2rem)] sm:max-w-[min(90vw,56rem)] lg:max-w-[min(92vw,72rem)] max-h-[90vh] [&_[data-slot=dialog-close]]:relative [&_[data-slot=dialog-close]]:z-10";
