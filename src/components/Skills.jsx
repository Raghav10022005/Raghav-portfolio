import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++"],
  },

  {
    title: "AI / ML",
    skills: [
      "NLP",
      "RAG",
      "Semantic Retrieval",
      "Vector Embeddings",
      "Machine Learning",
    ],
  },

  {
    title: "Frameworks",
    skills: [
      "FastAPI",
      "Streamlit",
      "LangChain",
      "PGVector",
    ],
  },

  {
    title: "Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Hugging Face",
      "Speech Recognition",
      "Edge TTS",
    ],
  },

  {
    title: "Tools",
    skills: [
      "GitHub",
      "PostgreSQL",
      "Git",
      "VS Code",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
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
              marginBottom: "18px",
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "14px",
            }}
          >
            Skills
          </p>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "50px",
            }}
          >
            Technical Expertise
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass"
          style={{
            padding: "40px 50px",
            borderRadius: "32px",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {skillGroups.map((group, index) => (
              <div key={index}>
                <h3
                  className="text-accent"
                  style={{
                    marginBottom: "20px",
                    fontSize: "1.2rem",
                  }}
                >
                  {group.title}
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "14px",
                  }}
                >
                  {group.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        border: "1px solid var(--border)",
                        background: "rgba(255,255,255,0.03)",
                        padding: "10px 18px",
                        borderRadius: "999px",
                        fontSize: "14px",
                        color: "var(--fg)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;