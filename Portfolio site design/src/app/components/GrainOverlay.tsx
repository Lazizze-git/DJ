import { useEffect, useRef } from "react";

export function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function noise() {
      if (!ctx || !canvas) return;
      const d = ctx.createImageData(canvas.width, canvas.height);
      const b = d.data;
      for (let i = 0; i < b.length; i += 4) {
        const v = Math.random() * 255;
        b[i] = v;
        b[i + 1] = v;
        b[i + 2] = v;
        b[i + 3] = 45 + Math.random() * 35;
      }
      ctx.putImageData(d, 0, 0);
    }

    resize();
    noise();

    window.addEventListener("resize", () => {
      resize();
      noise();
    });

    const interval = setInterval(noise, 120);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        width: "100%",
        height: "100%",
        mixBlendMode: "multiply",
        opacity: 0.14,
      }}
    />
  );
}
