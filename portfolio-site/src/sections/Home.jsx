
import ScrollReveal from "../components/ScrollReveal";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Text enters from below */}
      <ScrollReveal
        direction="up"
        className="home-text-reveal"
      >
        <div className="intro-text">
          <p>WELCOME TO MY PORTFOLIO</p>

          <h1>Hi, I'm Rafi.</h1>

          <h2>I build things for the web.</h2>

          <p>
            Computer Science graduate exploring software
            development and creating things that I am passionate about.
          </p>

          <p>
            I am a passionate developer who loves to create
            innovative solutions.
          </p>
        </div>
      </ScrollReveal>

      {/* Image enters from the side */}
      <ScrollReveal
        direction="left"
        delay={150}
        className="home-image-reveal"
      >
        <div className="rafi-image">
          <img src="/rafi.jpeg" alt="Rafi's portrait" />
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Home;
