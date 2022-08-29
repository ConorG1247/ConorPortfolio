import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-title">contact</div>
      <div className="contact-sub">
        Please feel free to contact me via email or linkedin using the links
        below.
      </div>
      <div className="contact-icon-container">
        <a
          href="https://github.com/ConorG1247"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon className="contact-icon-lg" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/conor-goddard/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon className="contact-icon-lg" icon={faLinkedin} />
        </a>
        <a
          href="mailto:conorgoddard1247@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <FontAwesomeIcon className="contact-icon-lg" icon={faEnvelope} />
        </a>
        <a
          href="https://puu.sh/JiD8f/a9dabfe2f2.pdf"
          download="Conor_Goddard_CV"
          target="_blank"
          rel="noreferrer"
          aria-label="CVDownload"
        >
          <FontAwesomeIcon className="contact-icon-lg" icon={faFileArrowDown} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
