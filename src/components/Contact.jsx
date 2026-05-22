import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="section"
      style={{
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p
            className="text-accent"
            style={{
              marginBottom: "20px",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
             Contact
          </p>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "30px",
            }}
          >
            Let’s Build Something Intelligent
          </h2>

          <p
            className="text-muted"
            style={{
              maxWidth: "700px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            I’m open to internships, AI/ML collaborations, research opportunities,
            and real-world software engineering projects.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="mailto:raghavtiwari1002@gmail.com"
              style={{
                background: "var(--accent)",
                color: "black",
                padding: "14px 28px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Send Email
            </a>

            <a
              href="https://github.com/Raghav10022005"
              target="_blank"
              rel="noreferrer"
              className="glass"
              style={{
                padding: "14px 28px",
                borderRadius: "999px",
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/raghav-tiwari-670232378"
              target="_blank"
              rel="noreferrer"
              className="glass"
              style={{
                padding: "14px 28px",
                borderRadius: "999px",
              }}
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;