import { useEffect, useState } from "react";
import { HalftoneImage } from "../components/HalftoneImage";

const INSPIRATIONS = [
  "KRAFTWERK", "DETROIT", "BERGHAIN", "ANALOG", "BRUTALISM",
  "CONCRETE", "808", "MODULAR", "WAREHOUSE", "ACID HOUSE",
  "INDUSTRIAL", "NOISE", "MINIMAL", "DUB TECHNO", "CHICAGO",
  "BAUHAUS", "POST-PUNK", "DRONE", "TAPE LOOPS", "LO-FI",
  "HARDWARE", "4AM SETS", "VINYL ONLY", "DISTORTION", "REVERB",
];

export function About() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev - 0.5);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const marqueeText = INSPIRATIONS.join(" — ");

  return (
    <div className="flex flex-col h-full" style={{ background: "#FF007F" }}>
      {/* Title */}
      <div
        className="px-3 sm:px-5 md:px-6 pt-2 sm:pt-3 pb-1"
        style={{ borderBottom: "3px solid #000" }}
      >
        <h1
          className="uppercase select-none"
          style={{
            fontSize: "clamp(3.5rem, 18vw, 14rem)",
            fontWeight: 900,
            color: "#000",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          ABOUT
        </h1>
      </div>

      {/* Marquee strip – inspirations */}
      <div
        className="overflow-hidden whitespace-nowrap"
        style={{
          borderBottom: "3px solid #000",
          background: "#000",
          padding: "6px 0",
        }}
      >
        <div
          className="inline-block"
          style={{
            transform: `translateX(${offset}px)`,
            willChange: "transform",
          }}
        >
          <span
            className="uppercase"
            style={{
              fontSize: "clamp(0.55rem, 1vw, 0.75rem)",
              fontWeight: 900,
              color: "#FF007F",
              letterSpacing: "0.2em",
            }}
          >
            {marqueeText} — {marqueeText} — {marqueeText}
          </span>
        </div>
      </div>

      {/* Bio block */}
      <div
        className="px-3 sm:px-5 md:px-6 py-4 sm:py-6"
        style={{ borderBottom: "3px solid #000" }}
      >
        <p
          className="uppercase"
          style={{
            fontSize: "clamp(1.4rem, 4vw, 3rem)",
            fontWeight: 900,
            color: "#000",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
          }}
        >
          LAZIZZE IS A BERLIN-BASED ELECTRONIC MUSIC ARTIST AND PRODUCER.
          BLENDING RAW ANALOG TEXTURES WITH POUNDING RHYTHMS, THE SOUND
          EXISTS AT THE INTERSECTION OF TECHNO, INDUSTRIAL AND EXPERIMENTAL.
        </p>
      </div>

      {/* Large landscape photo */}
      <div
        className="flex-1 min-h-0"
        style={{
          borderBottom: "3px solid #000",
        }}
      >
        <HalftoneImage
          src="https://images.unsplash.com/photo-1550520115-e9b95e845e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aGVzaXplciUyMGtub2JzJTIwY2xvc2V1cCUyMGRhcmt8ZW58MXx8fHwxNzczMTE1NjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Synthesizer"
          className="w-full h-full"
        />
      </div>

      {/* Second bio paragraph + details grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          className="px-3 sm:px-5 md:px-6 py-4 sm:py-6"
          style={{
            borderBottom: "3px solid #000",
            borderRight: "3px solid #000",
          }}
        >
          <p
            className="uppercase"
            style={{
              fontSize: "clamp(0.75rem, 1.5vw, 1.1rem)",
              fontWeight: 900,
              color: "#000",
              lineHeight: 1.2,
              opacity: 0.7,
            }}
          >
            BORN FROM THE UNDERGROUND RAVE SCENE, LAZIZZE HAS PERFORMED AT
            BERGHAIN, FABRIC, DE SCHOOL, AND ACROSS 30+ COUNTRIES. THE LIVE
            SETS ARE HARDWARE-DRIVEN, UNPREDICTABLE, AND RELENTLESSLY DARK.
          </p>
        </div>
        <div
          className="grid grid-cols-2"
          style={{ borderBottom: "3px solid #000" }}
        >
          {[
            { label: "BASED", value: "BERLIN" },
            { label: "ACTIVE", value: "2018—" },
            { label: "LABELS", value: "NIGHTVAULT / MORD" },
            { label: "SHOWS", value: "30+ COUNTRIES" },
          ].map((item, i) => (
            <div
              key={i}
              className="px-3 py-3"
              style={{
                borderRight: i % 2 === 0 ? "3px solid #000" : "none",
                borderBottom: i < 2 ? "3px solid #000" : "none",
              }}
            >
              <span
                className="uppercase block"
                style={{
                  fontSize: "0.5rem",
                  fontWeight: 900,
                  color: "#000",
                  opacity: 0.4,
                  letterSpacing: "0.15em",
                }}
              >
                {item.label}
              </span>
              <span
                className="uppercase block mt-1"
                style={{
                  fontSize: "clamp(0.8rem, 1.5vw, 1.1rem)",
                  fontWeight: 900,
                  color: "#000",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom socials strip */}
      <div className="grid grid-cols-3" style={{ borderBottom: "3px solid #000" }}>
        {["INSTAGRAM", "SOUNDCLOUD", "RESIDENT ADVISOR"].map((social, i) => (
          <div
            key={i}
            className="px-3 py-3 text-center cursor-pointer hover:opacity-70 transition-opacity"
            style={{
              borderRight: i < 2 ? "3px solid #000" : "none",
              background: "#FF007F",
            }}
          >
            <span
              className="uppercase"
              style={{
                fontSize: "clamp(0.5rem, 1vw, 0.75rem)",
                fontWeight: 900,
                color: "#000",
                letterSpacing: "0.15em",
              }}
            >
              {social}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}