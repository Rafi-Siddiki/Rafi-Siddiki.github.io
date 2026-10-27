
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

const projects = [
  {
    id: "club-event-management",
    title: "Club Event Management System",
    description:
      "A full-stack event management platform with JWT-based authentication, role-based dashboards, and event creation, updating, and deletion. The frontend was deployed on Vercel, with MongoDB Atlas for cloud database management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Postman",
    ],
    status: "Full-stack · MERN",
    // Add your real project screenshot and URLs when ready.
    // image: "/projects/event-management.png",
    // liveUrl: "YOUR_REAL_LIVE_URL",
    // sourceUrl: "YOUR_REAL_REPOSITORY_URL",
  },

  {
    id: "supershop-management",
    title: "SuperShop Management App",
    description:
      "A multi-role e-commerce management system with product management, inventory tracking, order processing, and coupon validation, built with Laravel and MySQL.",
    technologies: ["Laravel", "PHP", "MySQL"],
    status: "Web application",
    // image: "/projects/supershop.png",
    // liveUrl: "YOUR_REAL_LIVE_URL",
    // sourceUrl: "YOUR_REAL_REPOSITORY_URL",
  },

  {
    id: "credit-score-prediction",
    title: "Credit Score Prediction",
    description:
      "A machine-learning project using K-Nearest Neighbors, Decision Tree, and Random Forest models. The workflow included data preprocessing, feature engineering, cross-validation, and model performance evaluation.",
    technologies: [
      "Python",
      "Scikit-Learn",
      "KNN",
      "Decision Tree",
      "Random Forest",
    ],
    status: "Machine learning",
    // image: "/projects/credit-score.png",
    // sourceUrl: "YOUR_REAL_NOTEBOOK_OR_REPOSITORY_URL",
  },

  {
    id: "chest-disease-research",
    title: "Chest Disease Detection from X-ray Images",
    description:
      "Research involving CNN and transfer-learning models, including ResNet and DenseNet, for chest-disease detection from radiology images. The work included preprocessing, data augmentation, and model evaluation.",
    technologies: [
      "Deep Learning",
      "CNN",
      "ResNet",
      "DenseNet",
      "Medical Imaging",
    ],
    status: "Published in IEEE Xplore",
    // Add the exact publication URL when available.
    // sourceUrl: "YOUR_IEEE_XPLORE_PUBLICATION_URL",
  },

  {
    id: "dhaka-nitro",
    title: "Dhaka Nitro — 2D Car Racing Game",
    description:
      "A 2D racing game built with Python and OpenGL. It uses algorithmic logic for collision detection and scoring, along with a game loop, state management, and keyboard input handling.",
    technologies: ["Python", "OpenGL", "Data Structures", "Algorithms"],
    status: "Game development",
    // image: "/projects/dhaka-nitro.png",
    // sourceUrl: "YOUR_REAL_REPOSITORY_URL",
  },
];

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-heading">
        <p className="projects-eyebrow">SELECTED WORK</p>

        <h2>Projects</h2>

        <p className="projects-intro">
          From full-stack applications to machine learning and research,
          these projects reflect what I've built and explored through
          my studies and development work.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
