
import { useState } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";

import "../styles/Contact.css";

function Contact() {
  const [discordMessage, setDiscordMessage] = useState("");

  async function copyDiscordUsername() {
    try {
      await navigator.clipboard.writeText(".rafi.");
      setDiscordMessage("Discord username copied: .rafi.");
    } catch {
      setDiscordMessage("Your Discord username is .rafi. You can copy it manually.");
    }
  }

  return (
    <div className="contact-section">
      <p className="contact-eyebrow">LET'S CONNECT</p>

      <h2>Contact Me</h2>

      <p className="contact-description">
        Interested in working together or discussing software development?
        Connect with me through any of the platforms below.
      </p>

      <div className="contact-socials" aria-label="Contact and social profiles">
        {/* Email */}
        <a
          className="contact-social-link"
          href="mailto:rafisiddiki2k@gmail.com"
          aria-label="Send me an email"
          title="Email"
        >
          <FaEnvelope />
        </a>

        {/* Facebook */}
        <a
          className="contact-social-link"
          href="https://www.facebook.com/rafi.siddik.1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook profile"
          title="Facebook"
        >
          <FaFacebookF />
        </a>

        {/* Instagram */}
        <a
          className="contact-social-link"
          href="https://www.instagram.com/rafi_siddiki/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        {/* GitHub */}
        <a
          className="contact-social-link"
          href="https://github.com/Rafi-Siddiki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          className="contact-social-link"
          href="https://www.linkedin.com/in/raf1-s1dd1k1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          title="LinkedIn"
        >
          <FaLinkedinIn />
        </a>

        {/* Discord: copies your username */}
        <button
          type="button"
          className="contact-social-link"
          onClick={copyDiscordUsername}
          aria-label="Copy Discord username .rafi."
          title="Copy Discord username"
        >
          <FaDiscord />
        </button>
      </div>

      {/* Feedback after clicking Discord */}
      <p className="discord-copy-message" aria-live="polite">
        {discordMessage}
      </p>
    </div>
  );
}

export default Contact;
