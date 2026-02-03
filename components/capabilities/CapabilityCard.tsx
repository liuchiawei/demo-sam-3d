"use client";

import { useState } from "react";
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
import { Play, Box as BoxIcon } from "lucide-react";

interface CapabilityCardProps {
  title: string;
  description: string;
  detail?: string;
  videoSrc?: string;
  thumbnailSrc?: string;
  show3DDialog?: boolean;
  icon?: React.ReactNode;
  poster?: string;
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
}: CapabilityCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [is3DDialogOpen, setIs3DDialogOpen] = useState(false);

  const handleClick = () => {
    if (videoSrc) setIsModalOpen(true);
    else if (show3DDialog) setIs3DDialogOpen(true);
  };

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
          {videoSrc ? (
            <div className="relative aspect-video overflow-hidden">
              <SAMVideoPlayer
                src={videoSrc}
                poster={poster}
                className="h-full w-full"
                muted
                loop
              />

              {/* 播放按钮覆盖层 */}
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
              {show3DDialog && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-blue-800 dark:bg-blue-400 p-4">
                    <BoxIcon className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-muted to-muted/50">
              {icon || (
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
