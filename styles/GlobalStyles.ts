import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  /* Scrollbar Config */
  ::-webkit-scrollbar{
    width: 6px;
    background-color:#333;
  }
  ::-webkit-scrollbar-thumb{
    background-color:#555;
  }
  ::-webkit-scrollbar-thumb:hover{
    background: #007fff;
    transition: all 0.8s ease-out;
  }
  
  html{
    scroll-behavior: smooth;
  }
  
  html,
  body {
    min-width: 320px;

    padding: 0;
    margin: 0;
    ${"" /* font-family: "Source Code Pro", monospace; */}
  } 

  a {
    color: inherit;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  * {
    box-sizing: border-box;
  }
  :root {
    
    --navbar-size: 50px;

    --font-mobile-sm: 0.5rem;
    --font-mobile-md: 1rem;
    --font-mobile-xl: 1.5rem;
    --font-mobile-xll: 2rem;

    --font-sm: 10px;
    --font-md: 16px;
    --font-xl: 20px;
  } 

`;
