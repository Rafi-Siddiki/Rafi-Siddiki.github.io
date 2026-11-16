import ScrollReveal from "../components/ScrollReveal";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <ScrollReveal direction="up" className="home-text-reveal">
        <div className="intro-text">
          <p className="home-eyebrow">COMPUTER SCIENCE & ENGINEERING GRADUATE</p>

          <h1>Hi, I'm Rafi Siddiki.</h1>

          <h2>I build software and explore the systems behind it.</h2>

          <p>
            I'm a Computer Science and Engineering graduate from BRAC
            University, interested in software engineering, backend
            development, and building practical applications.
          </p>

          <p>
            My experience includes developing web applications and REST APIs,
            working with SQL and NoSQL databases, and managing Linux-based
            infrastructure through my DevOps internship at TallyKhata.
          </p>

          <div className="home-actions">
            <a href="#projects" className="home-button home-button-primary">
              Explore My Projects
            </a>
            <a href="#contact" className="home-button home-button-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="left" delay={150} className="home-image-reveal">
        <div className="rafi-image">
          <img
            src="/rafi.webp"
            alt="Portrait of Rafi Siddiki"
            width="720"
            height="960"
            fetchPriority="high"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Home;
