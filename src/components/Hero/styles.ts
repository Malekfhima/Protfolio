import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  background: transparent;
  min-height: 100vh;

  .hero-text {
    flex: 1;
    & > p {
      font-size: 2rem;
      font-weight: 500;
      color: var(--text-color);
      opacity: 0.9;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    h1 {
      font-size: 8.5rem;
      font-weight: 700;
      line-height: 1.1;
      margin: 1rem 0;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 50%, var(--pink) 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -2px;
      animation: gradientShift 5s ease infinite;
    }

    h3 {
      font-size: 2.8rem;
      color: var(--green);
      margin: 1rem 0;
      font-weight: 500;
      letter-spacing: -0.5px;
      overflow: hidden;
      border-right: .15em solid var(--green);
      white-space: nowrap;
      margin: 0 auto;
      max-width: fit-content;
      animation: 
        typing 3.5s steps(40, end),
        blink-caret .75s step-end infinite;
    }

    p.small-resume {
      margin-top: 3rem;
      margin-bottom: 5rem;
      font-size: 1.8rem;
      color: var(--text-color);
      opacity: 0.7;
      line-height: 1.6;
      max-width: 500px;
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    gap: 2.5rem;
    padding-top: 5rem;

    a {
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.5rem;
      height: 5.5rem;
      border-radius: 50%;
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      
      &:hover {
        transform: translateY(-5px);
        background: var(--green);
        border-color: var(--green);
        box-shadow: 0 10px 20px rgba(6, 182, 212, 0.2);
        
        img {
          filter: brightness(0) invert(1);
        }
      }
    }

    img {
      width: 2.5rem;
      transition: all 0.3s ease;
    }
  }

  .button {
    margin-top: 5rem;
    display: inline-block;
    animation: pulseGlow 2s infinite;
    
    &:hover {
      animation: none;
    }
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
    img {
      max-width: 600px;
      width: 100%;
      filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2));
      animation: float 6s ease-in-out infinite;
    }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

  @media(max-width: 960px) {
    display: block;
    margin-top: 15%;
    text-align: center;
    
    .hero-text {
      h1 {
        font-size: 6rem;
      }
      p {
        justify-content: center;
      }
      p.small-resume {
        margin: 0 auto 5rem;
      }
    }
    
    .social-media {
      justify-content: center;
    }

    .hero-image {
      display: none;
    }
  }

  @media(max-width: 600px) {
    margin-top: 25%;
    
    .hero-text h1 {
      font-size: 5rem;
    }
  }

  @media(max-width: 480px) {
    margin-top: 35%;
  }
`