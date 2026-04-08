import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #23ce6b, #0f4c75);
      border-radius: 2px;
    }
  }

  .certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1200px;
  }

  .certification-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(35, 206, 107, 0.3);
      box-shadow: 0 10px 30px rgba(35, 206, 107, 0.2);
    }
  }

  .certification-header {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .certification-icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 0.5rem;
  }

  .certification-info {
    flex: 1;

    h3 {
      color: #23ce6b;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    h4 {
      color: #fff;
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .date {
      color: #8892b0;
      font-size: 0.9rem;
      margin: 0;
    }
  }

  .certification-body {
    p {
      color: #ccd6f6;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
    }
  }

  .certification-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    background: rgba(35, 206, 107, 0.1);
    color: #23ce6b;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(35, 206, 107, 0.3);
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;

    h2 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }

    .certifications-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .certification-card {
      padding: 1.5rem;
    }

    .certification-header {
      gap: 1rem;
    }

    .certification-icon {
      width: 40px;
      height: 40px;
    }

    .certification-info h4 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;

    h2 {
      font-size: 2rem;
    }

    .certification-card {
      padding: 1rem;
    }

    .certification-header {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .certification-icon {
      margin-bottom: 1rem;
    }
  }
`;
