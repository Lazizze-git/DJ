interface HalftoneImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function HalftoneImage({ src, alt, className = "" }: HalftoneImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          filter: "grayscale(100%) contrast(1.6) brightness(0.9)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Heavy grain overlay on images */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
          opacity: 0.7,
        }}
      />
      {/* Dust specks effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.15) 0%, transparent 2%), radial-gradient(circle at 85% 15%, rgba(255,255,255,0.1) 0%, transparent 1.5%), radial-gradient(circle at 45% 75%, rgba(255,255,255,0.12) 0%, transparent 1%), radial-gradient(circle at 70% 60%, rgba(0,0,0,0.2) 0%, transparent 1.5%), radial-gradient(circle at 30% 90%, rgba(0,0,0,0.15) 0%, transparent 1%)",
        }}
      />
    </div>
  );
}
