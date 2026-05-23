import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const sections = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "about",
    path: "/about",
  },

  {
    name: "skills",
    path: "/skills",
  },

  {
    name: "projects",
    path: "/projects",
  },

  {
    name: "contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <motion.nav
      animate={{
        y: scrolled ? -6 : 0,
        scale: scrolled ? 0.97 : 1,
        opacity: scrolled ? 0.96 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      style={{
        position: "fixed",
        top: scrolled ? "12px" : "22px",
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: "0 12px",
        transition: "all 0.25s ease",
      }}
    >
      <div
        className="glass"
        style={{
          display: "flex",

          gap: isMobile ? "2px" : "8px",

          padding: scrolled
            ? "8px"
            : "10px",

          borderRadius: "999px",

          backdropFilter: scrolled
            ? "blur(28px)"
            : "blur(18px)",

          background: scrolled
            ? "rgba(10,10,10,0.55)"
            : "rgba(10,10,10,0.35)",

          border: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.06)",

          boxShadow: scrolled
            ? "0 12px 40px rgba(0,0,0,0.35)"
            : "0 8px 40px rgba(0,0,0,0.25)",

          position: "relative",

          transition: "all 0.3s ease",

          width: "100%",
          maxWidth: "fit-content",
          overflowX: "auto",
        }}
      >
        {sections.map((section) => {
          const isActive =
            location.pathname === section.path;

          return (
            <motion.div
              key={section.name}
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.15,
              }}
              style={{
                position: "relative",
              }}
            >
              <Link
                to={section.path}
                style={{
                  position: "relative",

                  display: "block",

                  padding: isMobile
                    ? "9px 10px"
                    : scrolled
                    ? "10px 18px"
                    : "11px 20px",

                  borderRadius: "999px",

                  textTransform: "uppercase",

                  fontSize: isMobile
                    ? "10px"
                    : "12px",

                  letterSpacing: "2px",

                  color: isActive
                    ? "white"
                    : "var(--fg)",

                  transition:
                    "all 0.25s ease",

                  overflow: "hidden",

                  cursor: "pointer",

                  textDecoration: "none",

                  flexShrink: 0,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,

                      borderRadius: "999px",

                      background:
                        "rgba(255,255,255,0.09)",

                      border:
                        "1px solid rgba(255,255,255,0.08)",

                      backdropFilter:
                        "blur(18px)",

                      boxShadow:
                        "0 4px 20px rgba(255,255,255,0.03)",

                      zIndex: -1,
                    }}
                  />
                )}

                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {section.name}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;