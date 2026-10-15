import { ADS_CONFIG, type AdSlot } from "@/config/ads";

const ADSTERRA_DOMAIN = "https://www.highrevenueformat.com";

interface AdBannerProps {
  slot: AdSlot;
  adKey?: string;
  eager?: boolean;
}

export function AdBanner({ slot, adKey, eager }: AdBannerProps) {
  const config = ADS_CONFIG[slot];
  const key = adKey ?? config?.key ?? "";
  if (!key) return null;

  const invokeUrl = `${ADSTERRA_DOMAIN}/${key}/invoke.js`;

  return (
    <div className="flex justify-center">
      <iframe
        src={`/ads/${slot}.html?key=${encodeURIComponent(key)}&invoke=${encodeURIComponent(invokeUrl)}`}
        width={config.width}
        height={config.height}
        scrolling="no"
        style={{ border: "none" }}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}
