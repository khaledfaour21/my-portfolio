type Variant = "logo" | "gallery";

interface PortfolioImageProps {
  src: string;
  alt?: string;
  variant?: Variant;
  isDark?: boolean;
  className?: string;
}

export function PortfolioImage({
  src,
  alt = "",
  variant = "gallery",
  isDark = true,
  className = "",
}: PortfolioImageProps) {
  const frame =
    variant === "logo"
      ? "portfolio-logo-frame"
      : "portfolio-gallery-frame";
  const imgClass =
    variant === "logo" ? "portfolio-logo-img" : "portfolio-gallery-img";

  const border = isDark ? "border-white/10" : "border-slate-200";
  const bg =
    variant === "logo"
      ? isDark
        ? "bg-white/[0.06]"
        : "bg-white"
      : isDark
        ? "bg-black/30"
        : "bg-slate-50";

  return (
    <div className={`${frame} ${border} ${bg} ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={imgClass}
        onError={(e) => {
          e.currentTarget.classList.add("opacity-30");
        }}
      />
    </div>
  );
}