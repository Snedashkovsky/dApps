import { createGlobalStyle } from "styled-components";

export const GlobalFonts = createGlobalStyle`
  :root {
    --ff-montserrat: Play, sans-serif;
    --ff-iceland: Play, serif;

    --ff-text: var(--ff-montserrat);
    --ff-heading: var(--ff-iceland);
    
    font-family: var(--ff-text);
  }

  p,
  span {
    font-family: var(--ff-text);
    font-size: var(--s0);
    overflow-wrap: anywhere;
  }
  
  h1,
  h2,
  h3 {
    font-family: var(--ff-heading);
  }
`;
