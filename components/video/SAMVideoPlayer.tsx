"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { VIDEO_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface SAMVideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  /** 影片在容器內的對齊位置（object-position），例如左側物件時用 "left" */
  objectPosition?: "left" | "center" | "right";
  onPlay?: () => void;
  onPause?: () => void;
}

const objectPositionClass = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
} as const;

export function SAMVideoPlayer({
  src,
  poster,
  className,
  autoPlay = true,
  muted = VIDEO_CONFIG.muted,
  loop = VIDEO_CONFIG.loop,
  controls = false,
  objectPosition = "center",
  onPlay,
  onPause,
}: SAMVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // 使用 IntersectionObserver 检测视口
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // 合并 refs
  const setRefs = (element: HTMLVideoElement | null) => {
    videoRef.current = element;
    inViewRef(element);
  };

  // 视口内自动播放/暂停
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoPlay) return;

    if (inView && isLoaded) {
      video.play().catch((error) => {
        console.warn("Video autoplay failed:", error);
      });
    } else {
      video.pause();
    }
  }, [inView, autoPlay, isLoaded]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay?.();
  };

  const handlePause = () => {
    setIsPlaying(false);
    onPause?.();
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* 加载指示器 */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
        </div>
      )}

      <video
        ref={setRefs}
        src={src}
        poster={poster}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-300",
          objectPositionClass[objectPosition],
          isLoaded ? "opacity-100" : "opacity-0",
        )}
        muted={muted}
        loop={loop}
        playsInline={VIDEO_CONFIG.playsInline}
        preload={VIDEO_CONFIG.preload}
        controls={controls}
        onLoadedData={handleLoadedData}
        onPlay={handlePlay}
        onPause={handlePause}
      />

      {/* 播放状态指示器（可选） */}
      {!controls && isLoaded && (
        <div
          className={cn(
            "absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white transition-opacity",
            isPlaying ? "opacity-0" : "opacity-100",
          )}
        >
          {isPlaying ? "再生中" : "一時停止"}
        </div>
      )}
    </div>
  );
}
