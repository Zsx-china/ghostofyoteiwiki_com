interface NativeBannerProps {
  height?: number;
}

export function NativeBanner({ height = 90 }: NativeBannerProps) {
  return (
    <div className="flex justify-center">
      <iframe
        src="/ads/native-banner.html"
        width="100%"
        height={height}
        scrolling="no"
        style={{ border: "none", maxWidth: "728px" }}
      />
    </div>
  );
}
