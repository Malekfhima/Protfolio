import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  margin-bottom: 10rem;

  header {
    text-align: center;
    margin-bottom: 5rem;
    
    h2 {
      font-size: 4.5rem;
      font-weight: 700;
      letter-spacing: -1px;
      background: linear-gradient(135deg, var(--green) 0%, var(--blue) 50%, var(--pink) 100%);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
      animation: gradientShift 5s ease infinite;
    }
    
    p {
      color: var(--text-color);
      opacity: 0.8;
      font-weight: 500;
      font-size: 1.8rem;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      backdrop-filter: blur(10px);
      border-radius: 2rem;
      padding: 2.5rem 4rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);

      img {
        width: 4.5rem;
        transition: transform 0.3s ease;
      }

      a {
        color: var(--text-color);
        font-weight: 600;
        font-size: 1.8rem;
        transition: color 0.3s ease;
      }

      &:hover {
        transform: translateY(-8px);
        background: linear-gradient(135deg, var(--green), var(--blue));
        border-color: transparent;
        box-shadow: 0 20px 40px rgba(6, 182, 212, 0.25);
        
        a {
          color: #FFF;
        }

        img {
          transform: scale(1.1);
          filter: brightness(0) invert(1);
        }
      }
    }
  }

  @media(max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
        max-width: 40rem;
      }
    }
    
    header h2 {
      font-size: 3.5rem;
    }
  }
`
