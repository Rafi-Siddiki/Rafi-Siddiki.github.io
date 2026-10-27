
import "../styles/about.css";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "PHP", "C", "C++"],
  },
  {
    title: "Web Development",
    skills: ["React.js", "Node.js", "Express.js", "Laravel", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Postman"],
  },
  {
    title: "Infrastructure & DevOps",
    skills: [
      "Linux",
      "Proxmox VE",
      "Terraform",
      "Ansible",
      "Zabbix",
      "Keycloak",
      "RabbitMQ",
    ],
  },
  {
    title: "Data Science & Machine Learning",
    skills: ["NumPy", "Pandas", "Scikit-Learn", "TensorFlow", "PyTorch"],
  },
];

function About() {
  return (
    <div className="about-section">
      {/* Main content on the left */}
      <div className="about-text">
        <p>
          I'm a Computer Science and Engineering graduate with a
          foundation in software engineering, object-oriented
          programming, data structures, algorithms, and database
          systems.
        </p>

        <p>
          During my DevOps internship at TallyKhata, I worked with
          virtual machines, Linux servers, monitoring tools, identity
          management, messaging systems, and infrastructure
          automation. I also develop software projects spanning
          full-stack web development and machine learning.
        </p>

        <div className="about-highlights">
          <article className="about-highlight">
            <h3>Education</h3>
            <p>B.Sc. in Computer Science & Engineering</p>
            <span>BRAC University · CGPA 3.40/4.00</span>
          </article>

          <article className="about-highlight">
            <h3>Experience</h3>
            <p>DevOps Intern · TallyKhata</p>
            <span>January – May 2026</span>
          </article>

          <article className="about-highlight about-highlight-wide">
            <h3>Research</h3>
            <p>
              Leveraging CNN and Deep Learning Models to Detect Chest
              Diseases from Radiology Images
            </p>
            <span>Research publication available in IEEE Xplore</span>
          </article>
        </div>

        <div className="about-skills">
          <h3>Technical Skills</h3>

          {skillGroups.map((group) => (
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
