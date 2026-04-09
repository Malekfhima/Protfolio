import styled from "styled-components";

export const Container = styled.footer`
  background: var(--surface-color);
  padding: 4rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border-color);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 10;

  .logo {
    font-size: 2.8rem;
    font-weight: 700;
  }

  p {
    letter-spacing: 0.1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 1.5rem;
    color: var(--text-color);
    opacity: 0.8;
    
    img {
      width: 2.5rem;
      animation: spinning 5s infinite linear;
      filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-color);
      
      &:hover {
        transform: translateY(-5px);
        background: linear-gradient(135deg, var(--green), var(--blue));
        border-color: transparent;
        box-shadow: 0 10px 20px rgba(6, 182, 212, 0.2);
        
        img {
          filter: brightness(0) invert(1);
        }
      }
    }

    img, span {
      font-size: 2.5rem;
      width: 2.5rem;
      transition: all 0.3s ease;
    }
  }


  @keyframes spinning {
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
  }

  @media(max-width: 960px) {
    padding: 4rem 5rem;
  }

  @media(max-width: 800px) {
    padding: 4rem 3rem;
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }

  @media(max-width: 600px) {
    padding: 4rem 1.5rem;
    
    p {
      flex-direction: column;
      gap: 1.5rem;
    }
  }
`