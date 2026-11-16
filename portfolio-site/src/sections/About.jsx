import { HIGHLIGHTS, SKILL_GROUPS } from "../data/about";
import "./About.css";

function About() {
  return (
    <div className="about-section">
      {/* Main content on the left */}
      <div className="about-text">
        <p>
          I'm a Computer Science and Engineering graduate with a foundation in
          software engineering, object-oriented programming, data structures,
          algorithms, and database systems.
        </p>

        <p>
          During my DevOps internship at TallyKhata, I worked with virtual
          machines, Linux servers, monitoring tools, identity management,
          messaging systems, and infrastructure automation. I also develop
          software projects spanning full-stack web development and machine
          learning.
        </p>

        <div className="about-highlights">
          {HIGHLIGHTS.map(({ title, text, meta, wide }) => (
            <article
              key={title}
              className={`about-highlight ${wide ? "about-highlight-wide" : ""}`.trim()}
            >
              <h3>{title}</h3>
              <p>{text}</p>
              <span>{meta}</span>
            </article>
          ))}
        </div>

        <div className="about-skills">
          <h3>Technical Skills</h3>

          {SKILL_GROUPS.map((group) => (
            <div className="about-skill-group" key={group.title}>
              <h4>{group.title}</h4>
              <div className="about-skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Heading on the right on desktop */}
      <div className="about-intro">
        <p className="about-eyebrow">MY BACKGROUND</p>
        <h2>About Me</h2>
      </div>
    </div>
  );
}

export default About;
