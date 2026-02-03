"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
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
      <DialogContent className="p-0 overflow-hidden">
        <SAMVideoPlayer
          src={src}
          poster={poster}
          className="aspect-video"
          controls
          autoPlay
          objectPosition={objectPosition}
        />
      </DialogContent>
    </Dialog>
  );
}
