import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 5rem;
    letter-spacing: -1px;
    background: linear-gradient(135deg, var(--green) 0%, var(--blue) 50%, var(--pink) 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 5s ease infinite;
  }
  
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 3rem;
    padding: 1rem;

    .project {
      padding: 3rem;
      background: var(--surface-color);
      border: 1px solid var(--border-color);
      border-radius: 2rem;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text-color);
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      position: relative;
      overflow: hidden;
      
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
        transform: skewX(-25deg);
        transition: all 0.75s ease;
      }

      &:hover {
        transform: translateY(-10px) scale(1.02);
        background: rgba(30, 41, 59, 0.9);
        border-color: var(--green);
        box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
        
        &::before {
          animation: shine 1.2s ease;
        }

        h3 {
          color: var(--green);
        }
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 3.6rem;
        
        svg {
          width: 4.5rem;
          height: 4.5rem;
          stroke: var(--green);
        }
        
        .project-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          
          a {
            transition: transform 0.3s ease;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        
        a > img {
          width: 2.8rem;
          filter: brightness(0) invert(1);
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        a:hover > img {
          opacity: 1;
        }
      }
      
      h3 {
        font-size: 2.2rem;
        font-weight: 600;
        margin-bottom: 2rem;
        transition: color 0.3s ease;
        letter-spacing: -0.5px;
      }

      p {
        font-size: 1.6rem;
        line-height: 1.6;
        color: var(--text-color);
        opacity: 0.8;
        margin-bottom: 2.5rem;
        
        a {
          color: var(--text-color);
          border-bottom: 1px solid var(--green);
          transition: all 0.3s ease;
          &:hover {
            color: var(--green);
            padding-bottom: 2px;
          }
        }
      }

      footer {
        margin-top: auto;
        
        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.5rem;
          font-size: 1.4rem;
          font-family: 'Outfit', monospace;
          color: var(--green);
          font-weight: 500;
          opacity: 0.9;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .projects {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr;
    }
    
    h2 {
      font-size: 3.5rem;
    }
  }
`