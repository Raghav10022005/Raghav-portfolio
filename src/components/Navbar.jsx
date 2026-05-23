import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "contact",
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + window.innerHeight / 3;

      setScrolled(window.scrollY > 40);

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(section);
          }
        }
      });

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 50
      ) {
        setActive("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

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
        padding: "0 20px",
        transition: "all 0.25s ease",
      }}
    >
      <div
        className="glass"
        style={{
          display: "flex",
          gap: "8px",

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
        }}
      >
        {sections.map((section) => {
          const isActive = active === section;

          return (
            <motion.a
              key={section}
              href={`#${section}`}
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.15,
              }}
              style={{
                position: "relative",

                padding: scrolled
                  ? "10px 18px"
                  : "11px 20px",

                borderRadius: "999px",

                textTransform: "uppercase",

                fontSize: "12px",

                letterSpacing: "2px",

                color: isActive
                  ? "white"
                  : "var(--fg)",

                transition:
                  "all 0.25s ease",

                overflow: "hidden",

                cursor: "pointer",

                textDecoration: "none",
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
                {section}
              </span>
            </motion.a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Navbar;