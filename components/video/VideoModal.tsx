"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SAMVideoPlayer } from "./SAMVideoPlayer";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  poster?: string;
}

export function VideoModal({ isOpen, onClose, src, poster }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 overflow-hidden">
        <SAMVideoPlayer
          src={src}
          poster={poster}
          className="aspect-video"
          controls
          autoPlay
        />
      </DialogContent>
    </Dialog>
  );
}
