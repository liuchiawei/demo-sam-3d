"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SAMVideoPlayer } from "@/components/video/SAMVideoPlayer";
import { VideoModal } from "@/components/video/VideoModal";
import { Scene3DModal } from "@/components/3d/Scene3DModal";
import { cardHover } from "@/lib/animations";
import { VIDEO_CONFIG } from "@/lib/constants";
import { Play, Box as BoxIcon } from "lucide-react";

const objectPositionClass = {
  left: "object-left",
  center: "object-center",
  right: "object-right",
} as const;

interface CapabilityCardProps {
  title: string;
  description: string;
  detail?: string;
  videoSrc?: string;
  thumbnailSrc?: string;
  show3DDialog?: boolean;
  icon?: React.ReactNode;
  poster?: string;
  /** 影片在卡片預覽中的對齊（object-position），例如 "left" 可保留左側物件 */
  videoObjectPosition?: "left" | "center" | "right";
}

const isClickable = (p: { videoSrc?: string; show3DDialog?: boolean }) =>
  Boolean(p.videoSrc || p.show3DDialog);

export function CapabilityCard({
  title,
  description,
  detail,
  videoSrc,
  thumbnailSrc,
  show3DDialog,
  icon,
  poster,
  videoObjectPosition,
}: CapabilityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [is3DDialogOpen, setIs3DDialogOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoSrc) setIsModalOpen(true);
    else if (show3DDialog) setIs3DDialogOpen(true);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    setIsHovered(false);
  };

  // Play when video mounts after hover (ref is set after commit)
  useEffect(() => {
    if (!isHovered) return;
    const t = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 0);
    return () => clearTimeout(t);
  }, [isHovered]);

  const pos = videoObjectPosition ?? "center";

  return (
    <>
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={cardHover}
        className="group rounded-xl"
      >
        <Card
          className="h-full pt-0 overflow-hidden border-border bg-card/50 backdrop-blur transition-colors hover:border-blue-800/50 dark:hover:border-blue-400/50"
          style={{
            cursor: isClickable({ videoSrc, show3DDialog })
              ? "pointer"
              : undefined,
          }}
          onClick={
            isClickable({ videoSrc, show3DDialog }) ? handleClick : undefined
          }
        >
          {/* 视频、缩图或图标区域 */}
          {videoSrc && thumbnailSrc ? (
            <div
              className="relative aspect-video overflow-hidden bg-muted"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onFocus={handleMouseEnter}
              onBlur={handleMouseLeave}
              tabIndex={0}
            >
              <Image
                src={thumbnailSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {isHovered ? (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className={`absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-200 ${objectPositionClass[pos]}`}
                  muted={VIDEO_CONFIG.muted}
                  loop={VIDEO_CONFIG.loop}
                  playsInline={VIDEO_CONFIG.playsInline}
                  preload={VIDEO_CONFIG.preload}
                />
              ) : null}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
                <div className="rounded-full bg-blue-800 dark:bg-blue-400 p-4">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </div>
            </div>
          ) : videoSrc ? (
            <div className="relative aspect-video overflow-hidden">
              <SAMVideoPlayer
                src={videoSrc}
                poster={poster}
                className="h-full w-full"
                muted
                loop
                objectPosition={videoObjectPosition}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-blue-800 dark:bg-blue-400 p-4">
                  <Play className="h-6 w-6 text-white" fill="white" />
                </div>
              </div>
            </div>
          ) : thumbnailSrc ? (
            <div className="relative aspect-video overflow-hidden bg-muted">
              <Image
                src={thumbnailSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {show3DDialog ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-blue-800 dark:bg-blue-400 p-4">
                    <BoxIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              {icon ?? (
                <div className="h-16 w-16 rounded-full bg-blue-800/20 dark:bg-blue-400/20 p-4">
                  <div className="h-full w-full rounded-full bg-blue-800 dark:bg-blue-400" />
                </div>
              )}
            </div>
          )}

          {/* 内容区域 */}
          <CardHeader>
            <CardTitle className="text-xl text-foreground">{title}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {description}
            </CardDescription>
          </CardHeader>

          {detail && (
            <CardContent>
              <p className="text-sm text-muted-foreground/70">{detail}</p>
            </CardContent>
          )}
        </Card>
      </motion.div>

      {/* 全屏视频模态框 */}
      {videoSrc && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          src={videoSrc}
          poster={poster}
          objectPosition={videoObjectPosition}
        />
      )}

      {/* 3D 画布对话框 */}
      {show3DDialog && (
        <Scene3DModal
          isOpen={is3DDialogOpen}
          onClose={() => setIs3DDialogOpen(false)}
        />
      )}
    </>
  );
}
