import { useState, useCallback } from "react";
import { HalftoneImage } from "../components/HalftoneImage";

type Lang = "EN" | "FR";

const PHOTOS = [
  {
    id: 1,
    label: "PRESS PHOTO 01",
    src: "https://images.unsplash.com/photo-1723209937869-3ed6c29fd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHBlcmZvcm1pbmclMjBkYXJrJTIwY2x1YiUyMHN0YWdlfGVufDF8fHx8MTc3MzExNzU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    label: "PRESS PHOTO 02",
    src: "https://images.unsplash.com/photo-1762289581607-fc292299dc87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBhcnRpc3QlMjBwb3J0cmFpdCUyMGRhcmt8ZW58MXx8fHwxNzczMTE3NTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    label: "PRESS PHOTO 03",
    src: "https://images.unsplash.com/photo-1771848194254-28ed0cb7972f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeW50aGVzaXplciUyMG1vZHVsYXIlMjBlbGVjdHJvbmljJTIwbXVzaWMlMjBzdHVkaW98ZW58MXx8fHwxNzczMTE3NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    label: "PRESS PHOTO 04",
    src: "https://images.unsplash.com/photo-1693395460833-8f1969eb71a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29uY2VydCUyMGNyb3dkJTIwc3Ryb2JlJTIwbGlnaHRzfGVufDF8fHx8MTc3MzExNzU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    label: "PRESS PHOTO 05",
    src: "https://images.unsplash.com/photo-1696798559340-ad395e783816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHR1cm50YWJsZXMlMjBkYXJrJTIwY2x1YnxlbnwxfHx8fDE3NzMxMTc4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    label: "PRESS PHOTO 06",
    src: "https://images.unsplash.com/photo-1574154945982-0c7aff5adaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBmZXN0aXZhbCUyMHN0YWdlJTIwc21va2V8ZW58MXx8fHwxNzczMTE3ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    label: "PRESS PHOTO 07",
    src: "https://images.unsplash.com/photo-1417816491410-d61e1546e539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdW5kZXJncm91bmQlMjB3YXJlaG91c2UlMjByYXZlfGVufDF8fHx8MTc3MzExNzg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    label: "PRESS PHOTO 08",
    src: "https://images.unsplash.com/photo-1771848194377-faa6a48b6853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBzeW50aGVzaXplciUyMGNhYmxlcyUyMHBhdGNofGVufDF8fHx8MTc3MzExNzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const VISIBLE_PHOTOS = 4;

const VIDEOS = [
  {
    id: 1,
    label: "BERGHAIN LIVE SET 2025",
    duration: "1:22:00",
    type: "LIVE SET",
    embedId: "dQw4w9WgXcQ",
  },
  {
    id: 2,
    label: "VOID PROTOCOL — OFFICIAL VIDEO",
    duration: "4:31",
    type: "MUSIC VIDEO",
    embedId: "jNQXAC9IVRw",
  },
  {
    id: 3,
    label: "MODULAR LIVE — ATONAL FESTIVAL",
    duration: "0:48:15",
    type: "LIVE",
    embedId: "9bZkp7q19f0",
  },
];

const BIO: Record<Lang, string> = {
  EN: "LAZIZZE IS A BERLIN-BASED ELECTRONIC MUSIC ARTIST AND PRODUCER. BLENDING RAW ANALOG TEXTURES WITH POUNDING RHYTHMS, THE SOUND EXISTS AT THE INTERSECTION OF TECHNO, INDUSTRIAL AND EXPERIMENTAL. BORN FROM THE UNDERGROUND RAVE SCENE, LAZIZZE HAS PERFORMED AT BERGHAIN, FABRIC, DE SCHOOL, AND ACROSS 30+ COUNTRIES. THE LIVE SETS ARE HARDWARE-DRIVEN, UNPREDICTABLE, AND RELENTLESSLY DARK.",
  FR: "LAZIZZE EST UN ARTISTE ET PRODUCTEUR DE MUSIQUE ÉLECTRONIQUE BASÉ À BERLIN. MÊLANT DES TEXTURES ANALOGIQUES BRUTES À DES RYTHMES PERCUTANTS, LE SON SE SITUE À L'INTERSECTION DE LA TECHNO, DE L'INDUSTRIEL ET DE L'EXPÉRIMENTAL. ISSU DE LA SCÈNE RAVE UNDERGROUND, LAZIZZE S'EST PRODUIT AU BERGHAIN, AU FABRIC, AU DE SCHOOL ET DANS PLUS DE 30 PAYS. LES SETS LIVE SONT PILOTÉS PAR DU HARDWARE, IMPRÉVISIBLES ET RÉSOLUMENT SOMBRES.",
};

export function Presskit() {
  const [lang, setLang] = useState<Lang>("EN");
  const [previewPhoto, setPreviewPhoto] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const handleDownload = (url: string, filename: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  };

  const currentVideoIndex = VIDEOS.findIndex((v) => v.id === activeVideo);

  const goToVideo = useCallback(
    (dir: "prev" | "next") => {
      if (activeVideo === null) return;
      const idx = VIDEOS.findIndex((v) => v.id === activeVideo);
      const newIdx = dir === "prev" ? idx - 1 : idx + 1;
      if (newIdx >= 0 && newIdx < VIDEOS.length) {
        setActiveVideo(VIDEOS[newIdx].id);
      }
    },
    [activeVideo]
  );

  const navigatePhoto = useCallback(
    (dir: "prev" | "next") => {
      if (previewPhoto === null) return;
      const allPhotos = showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS);
      const idx = allPhotos.findIndex((p) => p.id === previewPhoto);
      const newIdx = dir === "prev" ? idx - 1 : idx + 1;
      if (newIdx >= 0 && newIdx < allPhotos.length) {
        setPreviewPhoto(allPhotos[newIdx].id);
      }
    },
    [previewPhoto, showAllPhotos]
  );

  const displayedPhotos = showAllPhotos
    ? PHOTOS
    : PHOTOS.slice(0, VISIBLE_PHOTOS);
  const hasMorePhotos = PHOTOS.length > VISIBLE_PHOTOS;

  return (
    <div className="flex flex-col h-full" style={{ background: "#FF007F" }}>
      {/* Title row */}
      <div
        className="flex-shrink-0 flex items-end justify-between px-3 sm:px-5 md:px-6 pt-2 sm:pt-3 pb-1"
        style={{ borderBottom: "3px solid #000" }}
      >
        <h1
          className="uppercase select-none"
          style={{
            fontSize: "clamp(2.8rem, 14vw, 10rem)",
            fontWeight: 900,
            color: "#000",
            lineHeight: 0.85,
            letterSpacing: "-0.05em",
          }}
        >
          PRESSKIT
        </h1>
        {/* Lang toggle */}
        <div className="flex mb-1 sm:mb-2" style={{ gap: "2px" }}>
          {(["EN", "FR"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className="uppercase cursor-pointer transition-all duration-150"
              style={{
                fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                fontWeight: 900,
                color: lang === l ? "#FF007F" : "#000",
                background: lang === l ? "#000" : "transparent",
                border: "2px solid #000",
                padding: "3px 8px",
                letterSpacing: "0.1em",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Subtitle strip */}
      <div
        className="flex-shrink-0 px-3 sm:px-5 md:px-6 py-1.5"
        style={{ borderBottom: "3px solid #000", background: "#000" }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: "clamp(0.45rem, 0.9vw, 0.65rem)",
            fontWeight: 900,
            color: "#FF007F",
            letterSpacing: "0.25em",
          }}
        >
          {lang === "EN"
            ? "FOR BOOKING AGENCIES & PRESS — PREVIEW & DOWNLOAD"
            : "POUR AGENCES DE BOOKING & PRESSE — PRÉVISUALISER & TÉLÉCHARGER"}
        </span>
      </div>

      {/* Main content: 2 columns */}
      <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2">
        {/* LEFT: Photos + Videos */}
        <div
          className="flex flex-col min-h-0 overflow-y-auto"
          style={{ borderRight: "3px solid #000" }}
        >
          {/* Section label */}
          <div
            className="flex-shrink-0 px-3 py-1.5 flex items-center justify-between"
            style={{ borderBottom: "3px solid #000" }}
          >
            <span
              className="uppercase"
              style={{
                fontSize: "clamp(0.5rem, 0.9vw, 0.65rem)",
                fontWeight: 900,
                color: "#000",
                letterSpacing: "0.2em",
                opacity: 0.5,
              }}
            >
              {lang === "EN" ? "PHOTOS — HI-RES" : "PHOTOS — HAUTE RÉSOLUTION"}{" "}
              ({PHOTOS.length})
            </span>
            <button
              onClick={() =>
                PHOTOS.forEach((p) =>
                  handleDownload(p.src, `lazizze-${p.label}.jpg`)
                )
              }
              className="uppercase cursor-pointer hover:opacity-70 transition-opacity"
              style={{
                fontSize: "0.5rem",
                fontWeight: 900,
                color: "#FF007F",
                background: "#000",
                border: "none",
                padding: "2px 8px",
                letterSpacing: "0.12em",
              }}
            >
              {lang === "EN" ? "DOWNLOAD ALL" : "TOUT TÉLÉCHARGER"}
            </button>
          </div>

          {/* Photo grid */}
          <div
            className="flex-1 min-h-0 grid"
            style={{
              gridTemplateColumns: `repeat(${displayedPhotos.length}, 1fr)`,
              borderBottom: "3px solid #000",
            }}
          >
            {displayedPhotos.map((photo, i) => (
              <div
                key={photo.id}
                className="relative cursor-pointer group overflow-hidden"
                style={{
                  borderRight:
                    i < displayedPhotos.length - 1 ? "3px solid #000" : "none",
                }}
                onClick={() => setPreviewPhoto(photo.id)}
              >
                <HalftoneImage
                  src={photo.src}
                  alt={photo.label}
                  className="w-full h-full"
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{ background: "rgba(0,0,0,0.75)" }}
                >
                  <span
                    className="uppercase"
                    style={{
                      fontSize: "0.45rem",
                      fontWeight: 900,
                      color: "#FF007F",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {photo.label}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(photo.src, `lazizze-${photo.label}.jpg`);
                    }}
                    className="mt-1 uppercase cursor-pointer hover:opacity-80"
                    style={{
                      fontSize: "0.4rem",
                      fontWeight: 900,
                      color: "#000",
                      background: "#FF007F",
                      border: "none",
                      padding: "2px 6px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ↓ DL
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* See more / see less photos button */}
          {hasMorePhotos && (
            <div
              className="flex-shrink-0 flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
              style={{
                borderBottom: "3px solid #000",
                padding: "5px 0",
              }}
              onClick={() => setShowAllPhotos(!showAllPhotos)}
            >
              <span
                className="uppercase"
                style={{
                  fontSize: "clamp(0.5rem, 0.9vw, 0.65rem)",
                  fontWeight: 900,
                  color: "#000",
                  letterSpacing: "0.15em",
                }}
              >
                {showAllPhotos
                  ? lang === "EN"
                    ? "▲ SHOW LESS"
                    : "▲ VOIR MOINS"
                  : lang === "EN"
                  ? `▼ SEE ALL ${PHOTOS.length} PHOTOS`
                  : `▼ VOIR LES ${PHOTOS.length} PHOTOS`}
              </span>
            </div>
          )}

          {/* Videos section label */}
          <div
            className="flex-shrink-0 px-3 py-1.5 flex items-center justify-between"
            style={{ borderBottom: "3px solid #000" }}
          >
            <span
              className="uppercase"
              style={{
                fontSize: "clamp(0.5rem, 0.9vw, 0.65rem)",
                fontWeight: 900,
                color: "#000",
                letterSpacing: "0.2em",
                opacity: 0.5,
              }}
            >
              {lang === "EN" ? "VIDEOS" : "VIDÉOS"} ({VIDEOS.length})
            </span>
          </div>

          {/* Video list */}
          <div className="flex-shrink-0">
            {VIDEOS.map((video, i) => {
              const isActive = activeVideo === video.id;
              const videoIdx = VIDEOS.findIndex((v) => v.id === video.id);
              const hasPrev = videoIdx > 0;
              const hasNext = videoIdx < VIDEOS.length - 1;

              return (
                <div
                  key={video.id}
                  style={{
                    borderBottom:
                      i < VIDEOS.length - 1 ? "3px solid #000" : "none",
                  }}
                >
                  {/* Title row */}
                  <div
                    className="flex items-center justify-between px-5 py-3 cursor-pointer group transition-colors duration-150"
                    style={{
                      background: isActive ? "#000" : "transparent",
                    }}
                    onClick={() =>
                      setActiveVideo(isActive ? null : video.id)
                    }
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="flex-shrink-0 transition-colors duration-150"
                        style={{
                          fontSize: "0.65rem",
                          fontWeight: 900,
                          color: isActive ? "#FF007F" : "#000",
                          width: "16px",
                          height: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {isActive ? "▼" : "▶"}
                      </span>
                      <span
                        className="uppercase truncate transition-colors duration-150"
                        style={{
                          fontSize: "clamp(0.65rem, 1.3vw, 0.85rem)",
                          fontWeight: 900,
                          color: isActive ? "#FF007F" : "#000",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {video.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span
                        className="uppercase hidden sm:inline"
                        style={{
                          fontSize: "0.45rem",
                          fontWeight: 900,
                          color: isActive ? "#FF007F" : "#000",
                          opacity: 0.4,
                          letterSpacing: "0.08em",
                        }}
                      >
                        {video.duration}
                      </span>
                      <span
                        className="uppercase"
                        style={{
                          fontSize: "0.4rem",
                          fontWeight: 900,
                          color: isActive ? "#000" : "#FF007F",
                          background: isActive ? "#FF007F" : "#000",
                          padding: "2px 5px",
                          letterSpacing: "0.1em",
                          transition: "all 0.15s",
                        }}
                      >
                        {video.type}
                      </span>
                    </div>
                  </div>

                  {/* Expanded video player */}
                  {isActive && (
                    <div style={{ background: "#000" }}>
                      {/* Video embed — full width */}
                      <div
                        className="relative w-full"
                        style={{
                          aspectRatio: "16 / 9",
                          borderTop: "3px solid #FF007F",
                          borderBottom: "3px solid #FF007F",
                        }}
                      >
                        <iframe
                          key={video.embedId}
                          src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1&rel=0&modestbranding=1`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          style={{ border: "none" }}
                        />
                      </div>

                      {/* Controls bar: prev / info+download / next */}
                      <div
                        className="flex items-stretch"
                        style={{ borderBottom: "3px solid #FF007F" }}
                      >
                        {/* Prev */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (hasPrev)
                              setActiveVideo(VIDEOS[videoIdx - 1].id);
                          }}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 cursor-pointer uppercase transition-opacity"
                          style={{
                            background: "transparent",
                            border: "none",
                            borderRight: "3px solid #FF007F",
                            opacity: hasPrev ? 0.7 : 0.2,
                            pointerEvents: hasPrev ? "auto" : "none",
                            minWidth: "60px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1rem",
                              fontWeight: 900,
                              color: "#FF007F",
                            }}
                          >
                            ‹
                          </span>
                          <span
                            className="hidden sm:inline"
                            style={{
                              fontSize: "0.45rem",
                              fontWeight: 900,
                              color: "#FF007F",
                              letterSpacing: "0.08em",
                            }}
                          >
                            PREV
                          </span>
                        </button>

                        {/* Center: index + download */}
                        <div className="flex-1 flex items-center justify-between px-3 py-2">
                          <span
                            className="uppercase"
                            style={{
                              fontSize: "0.5rem",
                              fontWeight: 900,
                              color: "#FF007F",
                              letterSpacing: "0.1em",
                              opacity: 0.6,
                            }}
                          >
                            {videoIdx + 1} / {VIDEOS.length}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const url = `https://www.youtube.com/watch?v=${video.embedId}`;
                              window.open(url, "_blank");
                            }}
                            className="uppercase cursor-pointer hover:opacity-80"
                            style={{
                              fontSize: "0.45rem",
                              fontWeight: 900,
                              color: "#000",
                              background: "#FF007F",
                              border: "none",
                              padding: "3px 8px",
                              letterSpacing: "0.1em",
                            }}
                          >
                            ↓ {lang === "EN" ? "DOWNLOAD / OPEN" : "TÉLÉCHARGER / OUVRIR"}
                          </button>
                        </div>

                        {/* Next */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (hasNext)
                              setActiveVideo(VIDEOS[videoIdx + 1].id);
                          }}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 cursor-pointer uppercase transition-opacity"
                          style={{
                            background: "transparent",
                            border: "none",
                            borderLeft: "3px solid #FF007F",
                            opacity: hasNext ? 0.7 : 0.2,
                            pointerEvents: hasNext ? "auto" : "none",
                            minWidth: "60px",
                          }}
                        >
                          <span
                            className="hidden sm:inline"
                            style={{
                              fontSize: "0.45rem",
                              fontWeight: 900,
                              color: "#FF007F",
                              letterSpacing: "0.08em",
                            }}
                          >
                            NEXT
                          </span>
                          <span
                            style={{
                              fontSize: "1rem",
                              fontWeight: 900,
                              color: "#FF007F",
                            }}
                          >
                            ›
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Bio / Description */}
        <div className="flex flex-col min-h-0">
          {/* Section label */}
          <div
            className="flex-shrink-0 px-3 py-1.5 flex items-center justify-between"
            style={{ borderBottom: "3px solid #000" }}
          >
            <span
              className="uppercase"
              style={{
                fontSize: "clamp(0.5rem, 0.9vw, 0.65rem)",
                fontWeight: 900,
                color: "#000",
                letterSpacing: "0.2em",
                opacity: 0.5,
              }}
            >
              {lang === "EN" ? "BIOGRAPHY" : "BIOGRAPHIE"} — {lang}
            </span>
            <button
              onClick={() => {
                const blob = new Blob([BIO[lang]], { type: "text/plain" });
                const url = URL.createObjectURL(blob);
                handleDownload(url, `lazizze-bio-${lang.toLowerCase()}.txt`);
                URL.revokeObjectURL(url);
              }}
              className="uppercase cursor-pointer hover:opacity-70 transition-opacity"
              style={{
                fontSize: "0.5rem",
                fontWeight: 900,
                color: "#FF007F",
                background: "#000",
                border: "none",
                padding: "2px 8px",
                letterSpacing: "0.12em",
              }}
            >
              ↓ .TXT
            </button>
          </div>

          {/* Bio text */}
          <div
            className="flex-1 min-h-0 px-3 sm:px-5 py-3 sm:py-4 overflow-hidden"
            style={{ borderBottom: "3px solid #000" }}
          >
            <p
              className="uppercase"
              style={{
                fontSize: "clamp(0.7rem, 1.4vw, 1rem)",
                fontWeight: 900,
                color: "#000",
                lineHeight: 1.25,
                letterSpacing: "-0.01em",
              }}
            >
              {BIO[lang]}
            </p>
          </div>

          {/* Technical rider / quick info */}
          <div
            className="flex-shrink-0 grid grid-cols-2"
            style={{ borderBottom: "3px solid #000" }}
          >
            {[
              { label: "GENRE", value: "TECHNO / INDUSTRIAL" },
              {
                label: lang === "EN" ? "BASED" : "BASÉ À",
                value: "BERLIN, DE",
              },
              { label: "BOOKING", value: "MGMT@LAZIZZE.COM" },
              { label: "PRESS", value: "PRESS@LAZIZZE.COM" },
            ].map((item, i) => (
              <div
                key={i}
                className="px-4 py-3"
                style={{
                  borderRight: i % 2 === 0 ? "3px solid #000" : "none",
                  borderBottom: i < 2 ? "3px solid #000" : "none",
                }}
              >
                <span
                  className="uppercase block"
                  style={{
                    fontSize: "0.55rem",
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
                    fontSize: "clamp(0.85rem, 1.6vw, 1.05rem)",
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

          {/* Download all strip */}
          <div
            className="flex-shrink-0 px-3 py-2 flex items-center justify-center gap-3 cursor-pointer hover:opacity-70 transition-opacity"
            style={{ background: "#000" }}
            onClick={() =>
              PHOTOS.forEach((p) =>
                handleDownload(p.src, `lazizze-${p.label}.jpg`)
              )
            }
          >
            <span
              className="uppercase"
              style={{
                fontSize: "clamp(0.55rem, 1vw, 0.7rem)",
                fontWeight: 900,
                color: "#FF007F",
                letterSpacing: "0.15em",
              }}
            >
              ↓{" "}
              {lang === "EN"
                ? "DOWNLOAD FULL PRESSKIT"
                : "TÉLÉCHARGER LE PRESSKIT COMPLET"}
            </span>
          </div>
        </div>
      </div>

      {/* ============ PHOTO PREVIEW OVERLAY ============ */}
      {previewPhoto !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.94)" }}
          onClick={() => setPreviewPhoto(null)}
        >
          <div
            className="relative flex items-center w-full"
            style={{ maxWidth: "95vw", height: "75vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev button */}
            <button
              onClick={() => navigatePhoto("prev")}
              className="flex-shrink-0 cursor-pointer hover:opacity-100 transition-opacity"
              style={{
                background: "#000",
                border: "3px solid #FF007F",
                color: "#FF007F",
                fontWeight: 900,
                fontSize: "1.5rem",
                width: "44px",
                height: "44px",
                opacity:
                  (showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS)).findIndex(
                    (p) => p.id === previewPhoto
                  ) === 0
                    ? 0.2
                    : 0.7,
                pointerEvents:
                  (showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS)).findIndex(
                    (p) => p.id === previewPhoto
                  ) === 0
                    ? "none"
                    : "auto",
              }}
            >
              ‹
            </button>

            {/* Image */}
            <div className="flex-1 min-w-0 flex flex-col items-center mx-3">
              <div
                style={{
                  border: "3px solid #FF007F",
                  maxWidth: "900px",
                  width: "100%",
                }}
              >
                <img
                  src={PHOTOS.find((p) => p.id === previewPhoto)?.src}
                  alt="Preview"
                  className="w-full block"
                  style={{
                    maxHeight: "65vh",
                    objectFit: "cover",
                  }}
                />
              </div>
              {/* Bottom bar */}
              <div
                className="flex items-center justify-between w-full px-3 py-2"
                style={{
                  maxWidth: "900px",
                  background: "#000",
                  borderLeft: "3px solid #FF007F",
                  borderRight: "3px solid #FF007F",
                  borderBottom: "3px solid #FF007F",
                }}
              >
                <span
                  className="uppercase"
                  style={{
                    fontSize: "0.55rem",
                    fontWeight: 900,
                    color: "#FF007F",
                    letterSpacing: "0.1em",
                  }}
                >
                  {PHOTOS.find((p) => p.id === previewPhoto)?.label} —{" "}
                  {(showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS)).findIndex(
                    (p) => p.id === previewPhoto
                  ) + 1}
                  /
                  {showAllPhotos
                    ? PHOTOS.length
                    : Math.min(VISIBLE_PHOTOS, PHOTOS.length)}
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      const photo = PHOTOS.find(
                        (p) => p.id === previewPhoto
                      );
                      if (photo)
                        handleDownload(
                          photo.src,
                          `lazizze-${photo.label}.jpg`
                        );
                    }}
                    className="uppercase cursor-pointer hover:opacity-80"
                    style={{
                      fontSize: "0.5rem",
                      fontWeight: 900,
                      color: "#000",
                      background: "#FF007F",
                      border: "none",
                      padding: "3px 10px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ↓ DOWNLOAD
                  </button>
                  <button
                    onClick={() => setPreviewPhoto(null)}
                    className="uppercase cursor-pointer hover:opacity-80"
                    style={{
                      fontSize: "0.5rem",
                      fontWeight: 900,
                      color: "#FF007F",
                      background: "#000",
                      border: "2px solid #FF007F",
                      padding: "3px 10px",
                      letterSpacing: "0.1em",
                    }}
                  >
                    ✕ CLOSE
                  </button>
                </div>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={() => navigatePhoto("next")}
              className="flex-shrink-0 cursor-pointer hover:opacity-100 transition-opacity"
              style={{
                background: "#000",
                border: "3px solid #FF007F",
                color: "#FF007F",
                fontWeight: 900,
                fontSize: "1.5rem",
                width: "44px",
                height: "44px",
                opacity:
                  (showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS)).findIndex(
                    (p) => p.id === previewPhoto
                  ) ===
                  (showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS))
                    .length -
                    1
                    ? 0.2
                    : 0.7,
                pointerEvents:
                  (showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS)).findIndex(
                    (p) => p.id === previewPhoto
                  ) ===
                  (showAllPhotos ? PHOTOS : PHOTOS.slice(0, VISIBLE_PHOTOS))
                    .length -
                    1
                    ? "none"
                    : "auto",
              }}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}