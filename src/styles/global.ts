import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

  :root {
    --pink: #EC4899;
    --black: #0f172a;
    --green: #06b6d4;
    --blue: #3b82f6;
    --text-color: #f8fafc;
    --bg-color: #0f172a;
    --surface-color: rgba(30, 41, 59, 0.7);
    --border-color: rgba(255, 255, 255, 0.1);
    scroll-padding-top: 10rem;
    
    &.light {
      --black: #f8fafc;
      --text-color: #0f172a;
      --bg-color: #f1f5f9;
      --surface-color: rgba(255, 255, 255, 0.8);
      --border-color: rgba(0, 0, 0, 0.1);
      --green: #0ea5e9;
      
      body {
        transition: all 0.5s ease;
        background-color: var(--bg-color);
        color: var(--text-color);
      }

      .logo {
        color: var(--text-color);
      }

      header.header-fixed {
        transition: all 0.5s ease;
        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--border-color);
        a {
          transition: all 0.5s ease;
          color: var(--text-color);
        }
        .menu, .menu:before, .menu:after {
          background-color: var(--text-color); 
        }
        .menu.active {
          background-color: transparent;
        }
      }

      footer.footer {
        transition: 0.5s;
        background-color: rgba(255, 255, 255, 0.4);
        color: var(--text-color);
      }

      form {
        input, textarea {
          transition: 0.5s;
          border: solid 1px var(--border-color);
          color: var(--text-color);
          background: rgba(255,255,255,0.7);
          &::placeholder {
            color: #64748b;
          }
        }
      }
    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes pulseGlow {
    0% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0.4); }
    70% { box-shadow: 0 0 0 20px rgba(6, 182, 212, 0); }
    100% { box-shadow: 0 0 0 0 rgba(6, 182, 212, 0); }
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: var(--green); }
  }

  @keyframes shine {
    0% { left: -100%; opacity: 0; }
    20% { opacity: 1; }
    100% { left: 200%; opacity: 0; }
  }

  @keyframes floatingBlobs {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(10%, 15%) scale(1.1); }
    66% { transform: translate(-10%, 5%) scale(0.9); }
    100% { transform: translate(15%, -10%) scale(1.05); }
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: background-color 0.4s ease, color 0.4s ease;
    
    &::before, &::after {
      content: "";
      position: fixed;
      width: 60vw;
      height: 60vh;
      border-radius: 50%;
      z-index: -2;
      filter: blur(120px);
      opacity: 0.15;
      animation: floatingBlobs 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    }

    &::before {
      background: radial-gradient(circle, var(--green) 0%, transparent 70%);
      top: -10%;
      left: -10%;
    }

    &::after {
      background: radial-gradient(circle, var(--blue) 0%, var(--pink) 50%, transparent 70%);
      bottom: -10%;
      right: -10%;
      animation-delay: -10s;
    }
  }

  a {
    text-decoration: none;
  }

  button, .button {
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, var(--green), var(--blue));
    color: #FFF;
    border-radius: 3rem;
    font-weight: 600;
    padding: 1.4rem 3.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);
    }
  }

  button:disabled, .button:disabled {
    filter: brightness(0.8) grayscale(0.5);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .logo {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--text-color);
    letter-spacing: -0.5px;
    span:last-child {
      background: linear-gradient(135deg, var(--green), var(--pink));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`