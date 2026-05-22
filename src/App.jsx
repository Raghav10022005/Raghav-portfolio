import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer
        style={{
          padding: "40px 20px",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          color: "var(--muted)",
          fontSize: "13px",
          letterSpacing: "1px",
        }}
      >
        © 2026 Raghav Tiwari · AI & Data Science Portfolio
      </footer>
    </div>
  );
}

export default App;