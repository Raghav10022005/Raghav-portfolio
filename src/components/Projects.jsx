import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p
            className="text-accent"
            style={{
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "14px",
            }}
          >
             Projects
          </p>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "60px",
            }}
          >
            Featured AI Projects
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass"
              style={{
                padding: "32px",
                borderRadius: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <span
                  className="text-accent"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  {project.category}
                </span>

                <h3
                  style={{
                    marginTop: "18px",
                    marginBottom: "18px",
                    fontSize: "2rem",
                    lineHeight: 1.2,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-muted"
                  style={{
                    marginBottom: "28px",
                    lineHeight: 1.7,
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    padding: "18px",
                    borderRadius: "16px",
                    marginBottom: "24px",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <p
                    className="text-accent"
                    style={{
                      fontSize: "11px",
                      marginBottom: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                    }}
                  >
                    AI/Data Insight
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.insight}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        border: "1px solid var(--border)",
                        padding: "6px 12px",
                        borderRadius: "999px",
                        fontSize: "12px",
                        color: "var(--muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: "30px",
                  display: "inline-block",
                  color: "var(--accent)",
                  fontSize: "14px",
                  fontWeight: "600",
                  letterSpacing: "1px",
                }}
              >
                {project.label || "View Project"} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;