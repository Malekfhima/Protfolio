import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  
  background-color: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: all 0.3s ease;

  nav {
    display: flex;
    align-items: center;
    gap: 3rem;
    
    a {
      color: var(--text-color);
      font-weight: 500;
      font-size: 1.6rem;
      letter-spacing: 0.5px;
      transition: all 0.3s ease;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background: linear-gradient(90deg, var(--green), var(--blue));
        transition: width 0.3s ease;
      }

      &:hover::after {
        width: 100%;
      }

      &.button {
        padding: 1rem 2.5rem;
        background: linear-gradient(135deg, var(--green), var(--blue));
        border-radius: 3rem;
        color: #fff;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);
        
        &::after {
          display: none;
        }
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);
        }
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu {
    width: 2.5rem;
    height: 0.2rem;
    background: var(--text-color);
    position: relative;
    cursor: pointer;
    display: none;
    transition: all 0.3s ease;

    &:before, &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: var(--text-color);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    &:before {
      bottom: 0.8rem;
    }
    
    &:after {
      top: 0.8rem;
    }

    &.active {
      background-color: transparent;
      
      &:before {
        bottom: 0;
        transform: rotate(45deg);
      }
      
      &:after {
        top: 0;
        transform: rotate(135deg);
      }
    }
  }

  /* Theme Switch */
  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
    position: absolute;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 60px;
    height: 32px;
    background: var(--surface-color);
    display: block;
    border-radius: 100px;
    position: relative;
    border: 1px solid var(--border-color);
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
  }

  label:after {
    content: '';
    background: linear-gradient(135deg, #f1c40f, #f39c12);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 4px;
    transition: 0.3s;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }

  input:checked + label:after {
    left: calc(100% - 4px);
    transform: translateX(-100%);
    background: linear-gradient(135deg, #192a56, #273c75);
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
    }

    nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(15px);
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.4s ease;
      transform: translateY(-20px);

      a {
        font-size: 2.4rem;
      }

      a.button {
        background: linear-gradient(135deg, var(--green), var(--blue));
        padding: 1.5rem 4rem;
        font-size: 2rem;
      }

      &.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
    }
  }
`