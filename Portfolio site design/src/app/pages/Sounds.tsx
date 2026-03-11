import { useState } from "react";
import { HalftoneImage } from "../components/HalftoneImage";

const TRACKS = [
  { id: 1, title: "VOID PROTOCOL", bpm: 138, duration: "6:42", year: "2026", label: "NIGHTVAULT" },
  { id: 2, title: "CONCRETE CATHEDRAL", bpm: 142, duration: "7:18", year: "2025", label: "NIGHTVAULT" },
  { id: 3, title: "RUST MACHINE", bpm: 135, duration: "5:56", year: "2025", label: "MORD" },
  { id: 4, title: "FRACTURE ZONE", bpm: 140, duration: "8:03", year: "2024", label: "NIGHTVAULT" },
  { id: 5, title: "DEAD SIGNAL", bpm: 145, duration: "6:21", year: "2024", label: "PERC TRAX" },
  { id: 6, title: "PHASE COLLAPSE", bpm: 132, duration: "7:44", year: "2023", label: "NIGHTVAULT" },
  { id: 7, title: "WAREHOUSE HYMN", bpm: 138, duration: "9:12", year: "2023", label: "POLE GROUP" },
  { id: 8, title: "OXIDIZED", bpm: 141, duration: "5:33", year: "2022", label: "NIGHTVAULT" },
];

export function Sounds() {
  const [playing, setPlaying] = useState<number | null>(null);
  const [progress, setProgress] = useState<Record<number, number>>({});

  const togglePlay = (id: number) => {
    if (playing === id) {
      setPlaying(null);
    } else {
      setPlaying(id);
      setProgress((p) => ({ ...p, [id]: Math.random() * 60 + 10 }));
    }
  };

  return (
    <div style={{ background: "#FF007F" }}>
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
          SOUNDS
        </h1>
      </div>

      {/* Subtitle strip */}
      <div
        className="px-3 sm:px-5 md:px-6 py-1.5"
        style={{ borderBottom: "3px solid #000", background: "#000" }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: "clamp(0.5rem, 1vw, 0.7rem)",
            fontWeight: 900,
            color: "#FF007F",
            letterSpacing: "0.25em",
          }}
        >
          SELECTED RELEASES & PRODUCTIONS
        </span>
      </div>

      {/* First 4 tracks */}
      {TRACKS.slice(0, 4).map((track) => (
        <div
          key={track.id}
          className="cursor-pointer group"
          style={{
            borderBottom: "3px solid #000",
            background: playing === track.id ? "#000" : "transparent",
          }}
          onClick={() => togglePlay(track.id)}
        >
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 py-2 sm:py-2.5">
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: "28px",
                height: "28px",
                border: `2px solid ${playing === track.id ? "#FF007F" : "#000"}`,
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 900,
                  color: playing === track.id ? "#FF007F" : "#000",
                }}
              >
                {playing === track.id ? "II" : "▶"}
              </span>
            </div>
            <span
              className="uppercase flex-1 min-w-0 truncate"
              style={{
                fontSize: "clamp(1.1rem, 3vw, 2rem)",
                fontWeight: 900,
                color: playing === track.id ? "#FF007F" : "#000",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {track.title}
            </span>
            <span
              className="uppercase flex-shrink-0 hidden sm:inline"
              style={{
                fontSize: "0.6rem",
                fontWeight: 900,
                color: playing === track.id ? "#FF007F" : "#000",
                opacity: 0.5,
              }}
            >
              {track.bpm} BPM
            </span>
            <span
              className="uppercase flex-shrink-0 hidden md:inline"
              style={{
                fontSize: "0.6rem",
                fontWeight: 900,
                color: playing === track.id ? "#FF007F" : "#000",
                opacity: 0.5,
                letterSpacing: "0.1em",
              }}
            >
              {track.label}
            </span>
            <span
              className="uppercase flex-shrink-0"
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                color: playing === track.id ? "#FF007F" : "#000",
                opacity: 0.5,
              }}
            >
              {track.duration}
            </span>
          </div>
          {playing === track.id && (
            <div className="px-3 sm:px-5 md:px-6 pb-2">
              <div style={{ height: "3px", background: "rgba(255,0,127,0.2)", width: "100%" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${progress[track.id] || 0}%`,
                    background: "#FF007F",
                    transition: "width 0.3s",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Photo break */}
      <div
        style={{
          height: "clamp(100px, 25vw, 240px)",
          borderBottom: "3px solid #000",
        }}
      >
        <HalftoneImage
          src="https://images.unsplash.com/photo-1727533097304-2cc408904b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW55bCUyMHJlY29yZHMlMjBjcmF0ZSUyMGRhcmslMjBtb29keXxlbnwxfHx8fDE3NzMxMTU1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Vinyl records"
          className="w-full h-full"
        />
      </div>

      {/* Remaining 4 tracks */}
      {TRACKS.slice(4).map((track) => (
        <div
          key={track.id}
          className="cursor-pointer group"
          style={{
            borderBottom: "3px solid #000",
            background: playing === track.id ? "#000" : "transparent",
          }}
          onClick={() => togglePlay(track.id)}
        >
          <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-6 py-2 sm:py-2.5">
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{
                width: "28px",
                height: "28px",
                border: `2px solid ${playing === track.id ? "#FF007F" : "#000"}`,
              }}
            >
              <span
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 900,
                  color: playing === track.id ? "#FF007F" : "#000",
                }}
              >
                {playing === track.id ? "II" : "▶"}
              </span>
            </div>
            <span
              className="uppercase flex-1 min-w-0 truncate"
              style={{
                fontSize: "clamp(1.1rem, 3vw, 2rem)",
                fontWeight: 900,
                color: playing === track.id ? "#FF007F" : "#000",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              {track.title}
            </span>
            <span
              className="uppercase flex-shrink-0 hidden sm:inline"
              style={{
                fontSize: "0.6rem",
                fontWeight: 900,
                color: playing === track.id ? "#FF007F" : "#000",
                opacity: 0.5,
              }}
            >
              {track.bpm} BPM
            </span>
            <span
              className="uppercase flex-shrink-0 hidden md:inline"
              style={{
                fontSize: "0.6rem",
                fontWeight: 900,
                color: playing === track.id ? "#FF007F" : "#000",
                opacity: 0.5,
                letterSpacing: "0.1em",
              }}
            >
              {track.label}
            </span>
            <span
              className="uppercase flex-shrink-0"
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                color: playing === track.id ? "#FF007F" : "#000",
                opacity: 0.5,
              }}
            >
              {track.duration}
            </span>
          </div>
          {playing === track.id && (
            <div className="px-3 sm:px-5 md:px-6 pb-2">
              <div style={{ height: "3px", background: "rgba(255,0,127,0.2)", width: "100%" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${progress[track.id] || 0}%`,
                    background: "#FF007F",
                    transition: "width 0.3s",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Bottom CTA */}
      <div
        className="px-3 sm:px-5 md:px-6 py-3 text-center"
        style={{ background: "#000" }}
      >
        <p
          className="uppercase"
          style={{
            fontSize: "clamp(0.6rem, 1.2vw, 0.9rem)",
            fontWeight: 900,
            color: "#FF007F",
            letterSpacing: "0.2em",
          }}
        >
          LISTEN ON SOUNDCLOUD / BANDCAMP / SPOTIFY
        </p>
      </div>
    </div>
  );
}
