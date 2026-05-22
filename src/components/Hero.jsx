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
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
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
          Building intelligent systems using AI, NLP, RAG pipelines,
          FastAPI, LangChain, and real-time machine learning solutions.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
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

          <a
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