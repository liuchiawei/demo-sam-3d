"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MODAL_CONTENT_LARGE_CLASS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { SAMVideoPlayer } from "./SAMVideoPlayer";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
  /** 影片在容器內的對齊位置（object-position） */
  objectPosition?: "left" | "center" | "right";
}

export function VideoModal({
  isOpen,
  onClose,
  src,
  poster,
  objectPosition,
}: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "flex flex-col p-0 overflow-hidden",
          MODAL_CONTENT_LARGE_CLASS,
        )}
      >
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
