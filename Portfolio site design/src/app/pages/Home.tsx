import { useNavigate } from "react-router";
import { HalftoneImage } from "../components/HalftoneImage";

const DATES = [
  { date: "22.03", venue: "Le Bourg", city: "Lausanne" },
  { date: "05.04", venue: "D! Club", city: "Lausanne" },
  { date: "18.04", venue: "Silencio", city: "Geneva" },
  { date: "10.05", venue: "Zukunft", city: "Zurich" },
  { date: "24.05", venue: "Folklore", city: "Geneva" },
];

export function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{
        background: "#FF007F",
        display: "grid",
        gridTemplateRows: "15dvh 3dvh 25dvh 5dvh 37dvh 10dvh 5dvh",
      }}
    >
      {/* ROW 1 — NAME */}
      <div
        className="flex items-center justify-between overflow-hidden"
        style={{
          borderBottom: "2px solid #000",
          padding: "0 4vw",
        }}
      >
        <h1
          className="uppercase select-none"
          style={{
            fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 900,
            fontSize: "11dvh",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            color: "#000",
          }}
        >
          LAZIZZE
        </h1>
        <div
          className="flex-shrink-0 relative overflow-hidden"
          style={{
            width: "10dvh",
            height: "10dvh",
            border: "2px solid #000",
          }}
        >
          <HalftoneImage
            src="https://placehold.co/200x200/111/333"
            alt="LAZIZZE"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* ROW 2 — TAGLINE */}
      <div
        className="flex items-center overflow-hidden whitespace-nowrap"
        style={{
          borderBottom: "2px solid #000",
          padding: "0 4vw",
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(7px, 2.2vw, 11px)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#000",
          opacity: 0.5,
        }}
      >
        DJ &amp; Selector &bull; Lausanne, CH &bull; House &bull; French Touch
        &bull; Electro &bull; Bookings open
      </div>

      {/* ROW 3 — PHOTO */}
      <div
        className="relative overflow-hidden"
        style={{ borderBottom: "2px solid #000" }}
      >
        <HalftoneImage
          src="https://placehold.co/800x400/111/333"
          alt="LAZIZZE live"
          className="w-full h-full"
        />
      </div>

      {/* ROW 4 — GENRES */}
      <div
        style={{
          borderBottom: "2px solid #000",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr 1fr",
        }}
      >
        <span
          className="flex items-center justify-center uppercase"
          style={{
            fontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(16px, 5vw, 28px)",
            letterSpacing: "-0.02em",
            color: "#000",
            borderRight: "2px solid #000",
          }}
        >
          HOUSE
        </span>
        <span
          className="flex items-center justify-center uppercase"
          style={{
            fontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(16px, 5vw, 28px)",
            letterSpacing: "-0.02em",
            color: "#FF007F",
            background: "#000",
            borderRight: "2px solid #000",
          }}
        >
          FRENCH TOUCH
        </span>
        <span
          className="flex items-center justify-center uppercase"
          style={{
            fontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(16px, 5vw, 28px)",
            letterSpacing: "-0.02em",
            color: "#000",
          }}
        >
          ELECTRO
        </span>
      </div>

      {/* ROW 5 — DATES + ABOUT */}
      <div
        className="overflow-hidden"
        style={{
          borderBottom: "2px solid #000",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Left: Dates */}
        <div
          className="flex flex-col"
          style={{
            borderRight: "2px solid #000",
            padding: "2.5vw 4vw",
          }}
        >
          <h2
            className="uppercase"
            style={{
              fontFamily:
                "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(22px, 7.5vw, 40px)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#000",
              marginBottom: "2vw",
            }}
          >
            DATES
          </h2>
          <div className="flex-1 flex flex-col justify-around">
            {DATES.map((d) => (
              <div
                key={d.date}
                className="items-baseline"
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: "2vw",
                  padding: "1vw 0",
                  borderTop: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <span
                  className="uppercase"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(13px, 4vw, 20px)",
                    color: "#000",
                  }}
                >
                  {d.date}
                </span>
                <span
                  className="uppercase text-center"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "clamp(6px, 1.8vw, 9px)",
                    opacity: 0.35,
                    color: "#000",
                  }}
                >
                  {d.venue}
                </span>
                <span
                  className="uppercase text-right"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(12px, 3.5vw, 18px)",
                    color: "#000",
                  }}
                >
                  {d.city}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: About */}
        <div className="flex flex-col" style={{ padding: "2.5vw 4vw" }}>
          <h2
            className="uppercase"
            style={{
              fontFamily:
                "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(22px, 7.5vw, 40px)",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "#000",
              marginBottom: "2vw",
            }}
          >
            ABOUT
          </h2>
          <p
            className="flex-1"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "clamp(11px, 3.2vw, 16px)",
              lineHeight: 1.4,
              fontWeight: 500,
              color: "#000",
            }}
          >
            DJ and selector from Lausanne, Switzerland. Deeply rooted in house
            music, passionate about French Touch and raw electro. Every set is a
            journey through grooves.
          </p>
          <div
            className="relative overflow-hidden"
            style={{
              width: "100%",
              height: "clamp(30px, 8vw, 60px)",
              marginTop: "2vw",
              border: "2px solid #000",
            }}
          >
            <HalftoneImage
              src="https://placehold.co/400x120/0a0a0a/1a1a1a"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* ROW 6 — CONTACT */}
      <div
        style={{
          background: "#000",
          color: "#FF007F",
          borderBottom: "2px solid #000",
          display: "grid",
          gridTemplateColumns: "auto 1fr 1fr 1fr",
        }}
      >
        <a
          href="mailto:booking@lazizze.com"
          className="flex items-center justify-center no-underline hover:opacity-50 active:opacity-30 transition-opacity"
          style={{
            color: "#FF007F",
            fontFamily:
              "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(20px, 6.5vw, 34px)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0 3vw",
            borderRight: "2px solid #000",
            whiteSpace: "nowrap",
          }}
        >
          BOOK →
        </a>
        <a
          href="mailto:booking@lazizze.com"
          className="flex items-center justify-center no-underline hover:opacity-50 active:opacity-30 transition-opacity"
          style={{
            color: "#FF007F",
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(8px, 2.5vw, 12px)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0 3vw",
            borderRight: "1px solid rgba(255,0,127,0.12)",
          }}
        >
          Email
        </a>
        <a
          href="https://instagram.com/lazizze"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center no-underline hover:opacity-50 active:opacity-30 transition-opacity"
          style={{
            color: "#FF007F",
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(8px, 2.5vw, 12px)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0 3vw",
            borderRight: "1px solid rgba(255,0,127,0.12)",
          }}
        >
          Instagram
        </a>
        <a
          href="https://soundcloud.com/lazizze"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center no-underline hover:opacity-50 active:opacity-30 transition-opacity"
          style={{
            color: "#FF007F",
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(8px, 2.5vw, 12px)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "0 3vw",
          }}
        >
          Soundcloud
        </a>
      </div>

      {/* ROW 7 — FOOTER */}
      <div
        className="flex items-center justify-between"
        style={{
          padding: "0 4vw",
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(6px, 1.8vw, 9px)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#000",
          opacity: 0.3,
        }}
      >
        <span>&copy; 2026 LAZIZZE</span>
        <span>Lausanne, CH</span>
      </div>
    </div>
  );
}
