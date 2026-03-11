import { Outlet, NavLink, useLocation } from "react-router";

const NAV_LINKS = [
  { to: "/", label: "HOME", index: "01" },
  { to: "/about", label: "ABOUT", index: "02" },
  { to: "/sounds", label: "SOUNDS", index: "03" },
  { to: "/presskit", label: "PRESSKIT", index: "04" },
];

export function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  if (isHome) {
    return <Outlet />;
  }

  return (
    <div className="h-screen overflow-hidden relative" style={{ background: "#FF007F" }}>
      {/* Main content */}
      <main className="pb-[72px] h-full overflow-hidden">
        <Outlet />
      </main>

      {/* Bottom navigation – fixed at bottom */}
      <nav className="fixed bottom-0 left-0 right-0 z-[9990]" style={{ background: "#000" }}>
        {/* Nav links row */}
        <div
          className="flex items-stretch"
          style={{ borderTop: "3px solid #FF007F" }}
        >
          {NAV_LINKS.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className="flex-1 group relative"
              style={{
                borderRight:
                  i < NAV_LINKS.length - 1
                    ? "1px solid rgba(255,0,127,0.15)"
                    : "none",
              }}
            >
              {({ isActive }) => (
                <div
                  className="relative flex flex-col items-center justify-center py-4 sm:py-5 transition-all duration-200"
                  style={{
                    background: isActive ? "#FF007F" : "transparent",
                  }}
                >
                  <span
                    className="uppercase transition-all duration-200 group-hover:tracking-[0.08em]"
                    style={{
                      fontSize: "clamp(0.8rem, 2.2vw, 1.05rem)",
                      fontWeight: 900,
                      color: isActive ? "#000" : "#FF007F",
                      letterSpacing: "0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {link.label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Bottom fine print */}
        <div
          className="flex items-center justify-between px-3 sm:px-5 py-1.5"
          style={{
            borderTop: "1px solid rgba(255,0,127,0.12)",
          }}
        >
          <span
            className="uppercase"
            style={{
              fontSize: "0.45rem",
              fontWeight: 900,
              color: "#FF007F",
              opacity: 0.25,
              letterSpacing: "0.15em",
            }}
          >
            LAZIZZE © 2026
          </span>
          <span
            className="uppercase hidden sm:inline"
            style={{
              fontSize: "0.45rem",
              fontWeight: 900,
              color: "#FF007F",
              opacity: 0.25,
              letterSpacing: "0.15em",
            }}
          >
            ALL RIGHTS RESERVED
          </span>
          <span
            className="uppercase"
            style={{
              fontSize: "0.45rem",
              fontWeight: 900,
              color: "#FF007F",
              opacity: 0.25,
              letterSpacing: "0.15em",
            }}
          >
            BERLIN, DE
          </span>
        </div>
      </nav>
    </div>
  );
}