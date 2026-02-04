"use client";

import dynamic from "next/dynamic";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MODAL_CONTENT_LARGE_CLASS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const SAMScene = dynamic(
  () =>
    import("@/components/3d/SAMScene").then((mod) => ({
      default: mod.SAMScene,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="flex aspect-video min-h-[70vh] items-center justify-center bg-neutral-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-600 border-t-white" />
      </div>
    ),
  },
);

interface Scene3DModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Scene3DModal({ isOpen, onClose }: Scene3DModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "flex flex-col p-0 overflow-hidden",
          MODAL_CONTENT_LARGE_CLASS,
        )}
      >
        <DialogTitle className="sr-only">3D 抽出オブジェクトを確認</DialogTitle>
        <div className="aspect-square w-full min-h-[50vh] max-h-[85vh]">
          {isOpen && <SAMScene />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
