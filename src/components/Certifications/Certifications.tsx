import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Certifications() {
  return (
    <Container id="certifications">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        <ScrollAnimation animateIn="fadeInUp">
          <div className="certification-card">
            <div className="certification-header">
              <div className="certification-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 24L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z" fill="#76B900"/>
                  <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="certification-info">
                <h3>NVIDIA Deep Learning Institute</h3>
                <h4>Fundamentals of Deep Learning</h4>
                <p className="date">Décembre 2025</p>
              </div>
            </div>
            <div className="certification-body">
              <p>
                Certification validant les compétences fondamentales en apprentissage profond (Deep Learning) 
                avec les technologies NVIDIA. Couvre les concepts de base des réseaux de neurones, 
                l'entraînement de modèles et l'optimisation pour les applications d'intelligence artificielle.
              </p>
              <div className="certification-skills">
                <span className="skill-tag">Deep Learning</span>
                <span className="skill-tag">Neural Networks</span>
                <span className="skill-tag">NVIDIA GPUs</span>
                <span className="skill-tag">AI/ML</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <div className="certification-card">
            <div className="certification-header">
              <div className="certification-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" fill="#4285F4"/>
                  <path d="M7 12L10 15L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="certification-info">
                <h3>Google Club</h3>
                <h4>Artificial Intelligence Certificate</h4>
                <p className="date">2023</p>
              </div>
            </div>
            <div className="certification-body">
              <p>
                Certification en intelligence artificielle décernée par le Google Club, 
                couvrant les principes fondamentaux de l'IA, le machine learning et 
                les applications pratiques dans le développement de projets innovants.
              </p>
              <div className="certification-skills">
                <span className="skill-tag">Artificial Intelligence</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">Google Technologies</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
