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
      <DialogContent className="max-w-4xl p-0">
        <SAMVideoPlayer
          src={src}
          poster={poster}
          className="aspect-video w-full"
          controls
          autoPlay
        />
      </DialogContent>
    </Dialog>
  );
}
