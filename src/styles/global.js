import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;

    --blue-300: #4F7FA3;
    --blue-500: #294F6B;

    --red-500: #EB5757;

    --gray-100: #F2F2F2;
    --gray-200: #E5E5E5;
    --gray-400: #828282;
    --gray-500: #707683; 
    --gray-600: #4F4F4F;

    --orange-500: #F9A31B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1440px) {
      font-size: 93.75%;
    }

    @media (max-width: 1080px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--gray-200);
    -webkit-font-smoothing: antialiased;
  }

  body, html, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
  cursor: pointer;
    &:disabled {
      opacity: .6;
      cursor: not-allowed;
    }
  }

  li {
    list-style: none;
  }

  .react-modal-overlay {
    background: rgba(240, 242, 245, .9);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  } 

  .react-modal-content {
    width: 100%;
    max-width: 65rem;
    min-height: 40rem;
    background: var(--white);
    padding: 3.2rem 3.2rem 2rem;
    border-radius: .9375rem;
    border: 1px solid #cecece;

    @media (max-width: 750px) {
      padding: 2.2rem 2.5rem 2rem;
    }

    @media (max-width: 336px) {
      padding: 2rem 1.75rem 1.75rem;
    }
  } 
`;
