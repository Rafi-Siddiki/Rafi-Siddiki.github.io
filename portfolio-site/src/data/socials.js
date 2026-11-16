import {
  FaDiscord,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export const DISCORD_USERNAME = ".rafi.";

export const SOCIAL_LINKS = [
  {
    id: "email",
    title: "Email",
    ariaLabel: "Send me an email",
    href: "mailto:rafisiddiki2k@gmail.com",
    Icon: FaEnvelope,
  },
  {
    id: "facebook",
    title: "Facebook",
    ariaLabel: "Facebook profile",
    href: "https://www.facebook.com/rafi.siddik.1/",
    Icon: FaFacebookF,
  },
  {
    id: "instagram",
    title: "Instagram",
    ariaLabel: "Instagram profile",
    href: "https://www.instagram.com/rafi_siddiki/",
    Icon: FaInstagram,
  },
  {
    id: "github",
    title: "GitHub",
    ariaLabel: "GitHub profile",
    href: "https://github.com/Rafi-Siddiki",
    Icon: FaGithub,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    ariaLabel: "LinkedIn profile",
    href: "https://www.linkedin.com/in/raf1-s1dd1k1/",
    Icon: FaLinkedinIn,
  },
];

export const DISCORD_LINK = {
  title: "Copy Discord username",
  ariaLabel: `Copy Discord username ${DISCORD_USERNAME}`,
  Icon: FaDiscord,
};
