import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
        }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glow Orb 1 */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "rgba(120, 180, 255, 0.12)",
          filter: "blur(90px)",
          top: "10%",
          left: "10%",
        }}
      />

      {/* Glow Orb 2 */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -40, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.05)",
          filter: "blur(100px)",
          bottom: "10%",
          right: "12%",
        }}
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          className="hero-title"
          style={{
            fontSize: "6rem",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Raghav{" "}
          <span className="text-accent neon-text">
            Tiwari
          </span>
        </h1>

        <p
          className="text-muted"
          style={{
            fontSize: "1.5rem",
            marginBottom: "18px",
            fontFamily: "JetBrains Mono",
          }}
        >
          AI & Data Science Engineer
        </p>

        <p
          className="text-muted"
          style={{
            maxWidth: "700px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
            fontSize: "1rem",
          }}
        >
          Building intelligent systems using AI, NLP,
          RAG pipelines, FastAPI, LangChain, and
          real-time machine learning solutions.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* View Projects CTA */}
          <a
            data-cta="view_projects"
            href="#projects"
            style={{
              background: "var(--accent)",
              color: "black",
              padding: "14px 30px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            className="neon-border"
          >
            View My Work
          </a>

          {/* Resume Download CTA */}
          <a
            id="resume-download-btn"
            data-cta="download_resume"
            href="/Raghav_Tiwari_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="glass"
            style={{
              padding: "14px 30px",
              borderRadius: "999px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;