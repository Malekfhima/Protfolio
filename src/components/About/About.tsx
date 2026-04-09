import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import java from "../../assets/java.svg";
import nodeIcon from "../../assets/node-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi! I'm Malek, a passionate and motivated web and mobile developer
            from Sousse, Tunisia.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I'm passionate about creating modern web and mobile applications,
            solving complex problems, and continuously learning new
            technologies.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I specialize in developing responsive applications using modern
            technologies and best practices.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bac Sciences Informatiques</h4>
            <p>Lycee Farhat Hached, M'saken, Sousse, Tunis</p>
            <h4>1st Year: Engineering in Computer Systems</h4>
            <p>ISITCom, Sousse, Tunis</p>
            <h4>2nd Year: IoT (Internet of Things)</h4>
            <p>ISITCom, Sousse, Tunis</p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          {/* <div className="certifications">
            <h3>Certifications:</h3>
            <h4>Artificial Intelligence Certificate</h4>
            <p>Google Club | 2023</p>
          </div> */}
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {/* Base Web */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={htmlIcon} alt="HTML" title="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={cssIcon} alt="CSS" title="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" title="JavaScript" />
            </ScrollAnimation>
          </div>

          {/* New MERN Stack & React */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" title="Express" style={{ filter: 'invert(1)' }} />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node.js" title="Node.js" />
            </ScrollAnimation>
          </div>

          {/* PHP & Databases */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" title="PHP" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={mysqlIcon} alt="MySQL" title="MySQL" />
            </ScrollAnimation>
          </div>

          {/* Java & Mobile */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={java} alt="Java" title="Java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" title="Flutter" />
            </ScrollAnimation>
          </div>
          
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={bootstrapIcon} alt="Bootstrap" title="Bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-certifications">
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <h3>My Certifications</h3>
          <div className="certification-cards">
            <div className="cert-card">
              <div className="cert-icon">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z"
                    fill="#76B900"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cert-info">
                <h4>NVIDIA Deep Learning Institute</h4>
                <p>Fundamentals of Deep Learning</p>
                <span className="cert-date">December 2025</span>
              </div>
            </div>

            {/* <div className="cert-card">
              <div className="cert-icon">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    fill="#4285F4"
                  />
                  <path
                    d="M7 12L10 15L17 8"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cert-info">
                <h4>Google Club</h4>
                <p>Artificial Intelligence Certificate</p>
                <span className="cert-date">2023</span>
              </div>
            </div> */}
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
