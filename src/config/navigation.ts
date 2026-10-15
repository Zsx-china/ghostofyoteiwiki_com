import { BookOpen } from "lucide-react";

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "platforms", path: "/platforms", icon: BookOpen, isContentType: true },
  { key: "release", path: "/release", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: BookOpen, isContentType: true },
  { key: "farming", path: "/farming", icon: BookOpen, isContentType: true },
  { key: "building", path: "/building", icon: BookOpen, isContentType: true },
  { key: "reviews", path: "/reviews", icon: BookOpen, isContentType: true },
  { key: "blockchain", path: "/blockchain", icon: BookOpen, isContentType: true },
] as const;

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
