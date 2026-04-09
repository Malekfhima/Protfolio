import { Container } from "./styles";
// import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
// import whatsapp from '../../assets/whatsapp.svg'
// import telegram from '../../assets/telegram.svg'
// import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <a href="https://portfolio-v2-nu-ebon.vercel.app/" className="logo">
        <span>www.Malek</span>
        <span>Fhima.com</span>
      </a>
      <div>
        <p>
          © 2025 - Designed and developed by Malek Fhima
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/malek-fhima-1898a8349/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/Malekfhima"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        {/* <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/vinayaksingh.in"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a> */}
      </div>
    </Container>
  );
}
