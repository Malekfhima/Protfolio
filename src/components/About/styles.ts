import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  .about-text {
    h2 {
      font-size: 4.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      letter-spacing: -1px;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 50%, var(--pink) 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      animation: gradientShift 5s ease infinite;
    }

    h3 {
      font-size: 2.4rem;
      color: var(--green);
      margin: 3rem 0 1.5rem;
      font-weight: 600;
      letter-spacing: -0.5px;
    }

    p {
      font-size: 1.8rem;
      line-height: 1.7;
      color: var(--text-color);
      opacity: 0.85;
      margin-bottom: 2rem;
    }

    .education {
      margin-top: 3rem;
      padding: 2.5rem;
      background: var(--surface-color);
      border-radius: 1.5rem;
      border: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      
      h3 {
        margin-top: 0;
        margin-bottom: 2rem;
        background: linear-gradient(135deg, var(--green), var(--blue));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      h4 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: var(--text-color);
      }

      p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        opacity: 0.7;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .hard-skills {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 6.5rem;
    height: 6.5rem;
    background: var(--surface-color);
    border-radius: 1.5rem;
    border: 1px solid var(--border-color);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);

    img {
      width: 3.5rem;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-5px);
      border-color: var(--green);
      box-shadow: 0 10px 20px rgba(6, 182, 212, 0.15);
      
      img {
        transform: scale(1.1);
      }
    }
  }

  .about-certifications {
    h3 {
      font-size: 3rem;
      font-weight: 600;
      margin-bottom: 3rem;
      color: var(--text-color);
      letter-spacing: -0.5px;
    }

    .certification-cards {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .cert-card {
      background: var(--surface-color);
      backdrop-filter: blur(10px);
      border-radius: 1.5rem;
      padding: 2.5rem;
      border: 1px solid var(--border-color);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      align-items: center;
      gap: 2rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      position: relative;
      overflow: hidden;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0) 100%);
        transform: skewX(-25deg);
        transition: all 0.75s ease;
      }

      &:hover {
        transform: translateY(-8px) scale(1.02);
        background: rgba(30, 41, 59, 0.9);
        border-color: var(--green);
        box-shadow: 0 15px 30px rgba(6, 182, 212, 0.15);
        
        &::after {
          animation: shine 1.2s ease;
        }

        .cert-icon {
          background: linear-gradient(135deg, var(--green), var(--blue));
          svg path[fill] { fill: #fff; }
          svg path[stroke] { stroke: #fff; }
        }
      }
    }

    .cert-icon {
      flex-shrink: 0;
      width: 6rem;
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(6, 182, 212, 0.1);
      border-radius: 1.2rem;
      padding: 1rem;
      transition: all 0.3s ease;
      
      svg {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    .cert-info {
      flex: 1;

      h4 {
        color: var(--text-color);
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 0.8rem;
      }

      p {
        color: var(--green);
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 500;
      }

      .cert-date {
        color: var(--text-color);
        opacity: 0.5;
        font-size: 1.3rem;
        font-weight: 500;
        display: inline-block;
        padding: 0.4rem 1rem;
        background: rgba(255,255,255,0.05);
        border-radius: 2rem;
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    
    .about-text {
      h2 {
        font-size: 3.5rem;
      }
      p {
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    
    .hard-skills {
      justify-content: center;
      margin-bottom: 5rem;
    }
    
    .about-certifications {
      margin-top: 5rem;
      
      .cert-card {
        flex-direction: column;
        text-align: center;
        padding: 2rem;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 10rem;
    
    .about-text h2 {
      font-size: 3rem;
    }
    
    .about-certifications h3 {
      font-size: 2.5rem;
    }
    
    .hability {
      width: 5.5rem;
      height: 5.5rem;
      
      img {
        width: 3rem;
      }
    }
  }
`