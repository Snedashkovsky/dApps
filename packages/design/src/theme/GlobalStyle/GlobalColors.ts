import { createGlobalStyle } from "styled-components";

export const GlobalColors = createGlobalStyle`
  :root {
    --color-black: #000;
    --color-gray-light: #828282;
    --color-red: #eb5757;
    --color-green: #27ae60;
    --color-blue: #2f80ed;
    --color-blue-light: #1890ff;

    --color-primary: var(--color-green);
    --button-color: var(--color-green);
    --text-color: var(--color-primary);
    --heading-color: var(--color-primary);
    --form-error: var(--color-red);
  }
`;
