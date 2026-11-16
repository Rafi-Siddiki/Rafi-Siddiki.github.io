import { NAV_LINKS } from "../data/navigation";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              RAFI<span>.DEV</span>
            </a>

            <p className="footer-tagline">Building things for the web.</p>

            <p className="footer-description">
              Computer Science graduate exploring software development and
              creating things I'm passionate about.
            </p>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            <h3>Explore</h3>
            {NAV_LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="footer-connect">
            <h3>Have a project in mind?</h3>
            <p>Let's connect and build something useful.</p>
            <a href="#contact" className="footer-contact-link">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} RAFI.DEV. All rights reserved.</p>
          <a href="#home" className="back-to-top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
