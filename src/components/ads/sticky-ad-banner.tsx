"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { AdBanner } from "@/components/ads/ad-banner";

interface StickyAdBannerProps {
  adKey: string;
}

export function StickyAdBanner({ adKey }: StickyAdBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!adKey || dismissed) return null;

  return (
    <div className="sticky top-20 z-20 py-2">
      <div className="mx-auto max-w-4xl">
        <div className="relative pr-10">
          <AdBanner slot="banner-320x50" adKey={adKey} eager />
          <button
            onClick={() => setDismissed(true)}
            aria-label="关闭广告"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded bg-black/60 p-1 text-white hover:bg-black/80"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
