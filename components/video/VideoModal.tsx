"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MODAL_CONTENT_LARGE_CLASS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SAMVideoPlayer } from "./SAMVideoPlayer";
import { VideoModalTitle } from "./VideoModalTitle";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  /** 影片在容器內的對齊位置（object-position） */
  objectPosition?: "left" | "center" | "right";
  /** 彈窗標題，有值時顯示於影片上方並帶進入動畫 */
  title?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  src,
  poster,
  objectPosition,
  title,
}: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "flex flex-col p-0 bg-black overflow-hidden",
          MODAL_CONTENT_LARGE_CLASS,
        )}
      >
        {title && <VideoModalTitle title={title} />}
        <div className="min-h-0 flex-1">
          <SAMVideoPlayer
            src={src}
            poster={poster}
            className="aspect-video w-full"
            controls
            autoPlay
            objectPosition={objectPosition}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
