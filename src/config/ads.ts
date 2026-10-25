// Adsterra banner ad keys - one file to update all at once
// When key is empty string, the ad slot will not render

export const ADS_CONFIG = {
  "banner-160x300": { key: "7d02ca4cb4d8a601f46750a06c9c86fd", width: 160, height: 300 },
  "banner-160x600": { key: "349a95e542ef659347b659efd80d9c3f", width: 160, height: 600, desktopOnly: true },
  "banner-300x250": { key: "7831b6141c78f9dcb8b228e1a6d0e3fa", width: 300, height: 250 },
  "banner-320x50":  { key: "bf35611ce1b2a3b2c0118febf33dbbe5", width: 320, height: 50  },
  "banner-468x60":  { key: "742e897df3733cf5f8c89fefcf8c8291", width: 468, height: 60,  desktopOnly: true },
  "banner-728x90":  { key: "5e62b66d103a6abbe0bac6a07081a206", width: 728, height: 90,  desktopOnly: true },
  "native-banner":  { key: "native-banner", width: 728, height: 90 },
} as const;

export type AdSlot = keyof typeof ADS_CONFIG;
