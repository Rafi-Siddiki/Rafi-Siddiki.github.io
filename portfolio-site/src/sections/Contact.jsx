import { useState } from "react";

import { DISCORD_LINK, DISCORD_USERNAME, SOCIAL_LINKS } from "../data/socials";
import "./Contact.css";

function Contact() {
  const [discordMessage, setDiscordMessage] = useState("");

  async function copyDiscordUsername() {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
      setDiscordMessage(`Discord username copied: ${DISCORD_USERNAME}`);
    } catch {
      setDiscordMessage(
        `My Discord username is ${DISCORD_USERNAME} — you can copy it manually.`
      );
    }
  }

  const { Icon: DiscordIcon } = DISCORD_LINK;

  return (
    <div className="contact-section">
      <p className="contact-eyebrow">LET'S CONNECT</p>

      <h2>Contact Me</h2>

      <p className="contact-description">
        Interested in working together or discussing software development?
        Connect with me through any of the platforms below.
      </p>

      <div className="contact-socials" role="group" aria-label="Contact and social profiles">
        {SOCIAL_LINKS.map(({ id, title, ariaLabel, href, Icon }) => {
          const isExternal = href.startsWith("http");
          return (
            <a
              key={id}
              className="contact-social-link"
              href={href}
              aria-label={ariaLabel}
              title={title}
              {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
            >
              <Icon />
            </a>
          );
        })}

        {/* Discord has no profile URL, so the button copies the username instead */}
        <button
          type="button"
          className="contact-social-link"
          onClick={copyDiscordUsername}
          aria-label={DISCORD_LINK.ariaLabel}
          title={DISCORD_LINK.title}
        >
          <DiscordIcon />
        </button>
      </div>

      <p className="discord-copy-message" aria-live="polite">
        {discordMessage}
      </p>
    </div>
  );
}

export default Contact;
