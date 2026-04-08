import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }
  
  

  .about-image{
    text-align: center;
   img{
     margin-top: 2rem;
     width: 75%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  .about-certifications{
    h3{
      color: var(--green);
      font-size: 2rem;
      margin-bottom: 1.5rem;
      text-align: center;
    }

    .certification-cards{
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .cert-card{
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 1rem;

      &:hover{
        transform: translateY(-3px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(35, 206, 107, 0.3);
        box-shadow: 0 5px 15px rgba(35, 206, 107, 0.2);
      }
    }

    .cert-icon{
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 0.5rem;
    }

    .cert-info{
      flex: 1;

      h4{
        color: #23ce6b;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.3rem;
      }

      p{
        color: #fff;
        font-size: 0.9rem;
        margin-bottom: 0.3rem;
        font-weight: 500;
      }

      .cert-date{
        color: #8892b0;
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }

    .about-certifications {
      margin-top: 2rem;
      
      h3 {
        font-size: 1.5rem;
      }

      .cert-card {
        flex-direction: column;
        text-align: center;
        padding: 1rem;
        gap: 0.8rem;
      }

      .cert-icon {
        width: 40px;
        height: 40px;
      }

      .cert-info h4 {
        font-size: 1rem;
      }

      .cert-info p {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
    
    .hard-skills{
      justify-content: center;
    }
    .about-image{
      display: flex;
      max-width: 100%;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
    
    
  }

`