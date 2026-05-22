import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
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
             About Me
          </p>

          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "40px",
              lineHeight: 1.2,
            }}
          >
            Bridging the gap between raw data and
            <span className="text-accent">
              {" "}
              intelligent decisions.
            </span>
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
            }}
          >
            <p className="text-muted">
              I am a B.Tech student specializing in Artificial Intelligence and
              Data Science. My journey is fueled by a passion for uncovering
              patterns in complex datasets and building models that can predict,
              classify, and optimize the world around us.
            </p>

            <p className="text-muted">
              From deep learning architectures to robust data pipelines, I focus
              on creating scalable AI solutions that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;