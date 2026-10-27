
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Branding */}
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              RAFI<span>.DEV</span>
            </a>

            <p className="footer-tagline">
              Building things for the web.
            </p>

            <p className="footer-description">
              Computer Science graduate exploring software
              development and creating things I'm passionate about.
            </p>
          </div>

          {/* Quick navigation */}
          <nav className="footer-navigation" aria-label="Footer navigation">
            <h3>Explore</h3>

            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About Me</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Contact section link */}
          <div className="footer-connect">
            <h3>Have a project in mind?</h3>

            <p>
              Let's connect and build something useful.
            </p>

            <a href="#contact" className="footer-contact-link">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Copyright and back-to-top link */}
        <div className="footer-bottom">
          <p>
            © {currentYear} RAFI.DEV. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
