// Optional fields each project can also have:
//   image:     "/projects/<file>.webp"  (put the file in public/projects/)
//   imageAlt:  text for screen readers (defaults to "<title> preview")
//   liveUrl:   link to a live demo
//   sourceUrl: link to the repository, notebook, or publication
export const PROJECTS = [
  {
    id: "club-event-management",
    title: "Club Event Management System",
    description:
      "A full-stack event management platform with JWT-based authentication, role-based dashboards, and event creation, updating, and deletion. The frontend was deployed on Vercel, with MongoDB Atlas for cloud database management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Postman"],
    status: "Full-stack · MERN",
  },
  {
    id: "supershop-management",
    title: "SuperShop Management App",
    description:
      "A multi-role e-commerce management system with product management, inventory tracking, order processing, and coupon validation, built with Laravel and MySQL.",
    technologies: ["Laravel", "PHP", "MySQL"],
    status: "Web application",
  },
  {
    id: "credit-score-prediction",
    title: "Credit Score Prediction",
    description:
      "A machine-learning project using K-Nearest Neighbors, Decision Tree, and Random Forest models. The workflow included data preprocessing, feature engineering, cross-validation, and model performance evaluation.",
    technologies: ["Python", "Scikit-Learn", "KNN", "Decision Tree", "Random Forest"],
    status: "Machine learning",
  },
  {
    id: "chest-disease-research",
    title: "Chest Disease Detection from X-ray Images",
    description:
      "Research involving CNN and transfer-learning models, including ResNet and DenseNet, for chest-disease detection from radiology images. The work included preprocessing, data augmentation, and model evaluation.",
    technologies: ["Deep Learning", "CNN", "ResNet", "DenseNet", "Medical Imaging"],
    status: "Published in IEEE Xplore",
  },
  {
    id: "dhaka-nitro",
    title: "Dhaka Nitro — 2D Car Racing Game",
    description:
      "A 2D racing game built with Python and OpenGL. It uses algorithmic logic for collision detection and scoring, along with a game loop, state management, and keyboard input handling.",
    technologies: ["Python", "OpenGL", "Data Structures", "Algorithms"],
    status: "Game development",
  },
];
