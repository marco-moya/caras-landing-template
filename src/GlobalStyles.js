import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  
  #root {
    display: flex;
    flex-direction: column;
  }

  *,
  *::before,
  *::after, {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    font-family: ${({ theme }) => theme.fonts.playfair};
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  main {
    width: 100%;
    flex-grow: 1;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;