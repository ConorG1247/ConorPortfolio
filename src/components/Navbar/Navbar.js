import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <a
        href="#intro"
        onClick={() => setMenuOpen(false)}
        className={
          menuOpen
            ? "navbar-container-logo navbar-menu-content logo-menu-open"
            : "navbar-container-logo navbar-menu-content logo-menu-closed"
        }
      >
        cg
      </a>
      <div
        className={menuOpen ? "navbar-menu-background-dim" : ""}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={
          menuOpen ? "navbar-menu-main open" : "navbar-menu-main closed"
        }
      >
        <div
          className={
            menuOpen
              ? "navbar-menu-text text-open"
              : "navbar-menu-text text-closed"
          }
        >
          <a
            href="#work"
            onClick={() => setMenuOpen(false)}
            className="navbar-menu-content"
          >
            work
          </a>
          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="navbar-menu-content"
          >
            experience
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="navbar-menu-content"
          >
            about
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="navbar-menu-content"
          >
            contact
          </a>
          <div
            className={
              menuOpen
                ? "navbar-contact contact-open"
                : "navbar-contact contact-closed"
            }
          >
            <a
              href="https://github.com/ConorG1247"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon className="contact-icon" icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/conor-goddard/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
            </a>
            <a
              href="mailto:conorgoddard1247@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
              <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
            </a>
            <a
              href="https://puu.sh/JgWQm/1cc50c1956.pdf"
              download
              target="_blank"
              rel="noreferrer"
              aria-label="CVDownload"
            >
              <FontAwesomeIcon
                className="contact-icon"
                icon={faFileArrowDown}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "navbar-hamburger hamburger-menu-open"
            : "navbar-hamburger hamburger-menu-closed"
        }
        onClick={() => {
          menuOpen ? setMenuOpen(false) : setMenuOpen(true);
        }}
      >
        <HamburgerIcon />
      </div>
      <div className="navbar-container-links">
        <a href="#work" className="navbar-menu-content">
          work
        </a>
        <a href="#experience" className="navbar-menu-content">
          experience
        </a>
        <a href="#about" className="navbar-menu-content">
          about
        </a>
        <a href="#contact" className="navbar-menu-content">
          contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
