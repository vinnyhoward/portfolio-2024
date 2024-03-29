import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --font-mono: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono",
      "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro",
      "Fira Mono", "Droid Sans Mono", "Courier New", monospace;

    --foreground-rgb: 0, 0, 0;
    --background-start-rgb: 214, 219, 220;
    --background-end-rgb: 255, 255, 255;

    --primary-glow: conic-gradient(
      from 180deg at 50% 50%,
      #16abff33 0deg,
      #0885ff33 55deg,
      #54d6ff33 120deg,
      #0071ff33 160deg,
      transparent 360deg
    );
    --secondary-glow: radial-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );

    --tile-start-rgb: 239, 245, 249;
    --tile-end-rgb: 228, 232, 233;
    --tile-border: conic-gradient(
      #00000080,
      #00000040,
      #00000030,
      #00000020,
      #00000010,
      #00000010,
      #00000080
    );

    --callout-rgb: 238, 240, 241;
    --callout-border-rgb: 172, 175, 176;
    --card-rgb: 180, 185, 188;
    --card-border-rgb: 131, 134, 135;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-start-rgb: 0, 0, 0;
      --background-end-rgb: 0, 0, 0;

      --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
      --secondary-glow: linear-gradient(
        to bottom right,
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0),
        rgba(1, 65, 255, 0.3)
      );

      --tile-start-rgb: 2, 13, 46;
      --tile-end-rgb: 2, 5, 19;
      --tile-border: conic-gradient(
        #ffffff80,
        #ffffff40,
        #ffffff30,
        #ffffff20,
        #ffffff10,
        #ffffff10,
        #ffffff80
      );

      --callout-rgb: 20, 20, 20;
      --callout-border-rgb: 108, 108, 108;
      --card-rgb: 100, 100, 100;
      --card-border-rgb: 200, 200, 200;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    overflow-x: hidden;
    color: rgb(var(--foreground-rgb));
    background: linear-gradient(
        to bottom,
        transparent,
        rgb(var(--background-end-rgb))
      ) rgb(var(--background-start-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  h1 {
    margin: 0;
    padding: 0;
    margin-block-start: 0px;
    margin-block-end: 0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }


:root {
  --d1: 320.54deg;
  --d2: 58.72deg;
  --d3: 121.28deg;
  --d4: 180deg;
  --d5: 52.23deg;
  --d6: 121.28deg;
  --d7: 50% 72.12% at 50% 50%;
  --d8: 72.37%;
  --p1: 0%;
  --p2: 100%;
  --p3: .5%;
  --blend-one: screen, color-dodge, color-burn, screen, overlay, difference, color-dodge;
  --blend-two: screen, color-dodge, color-burn, screen, overlay, difference;
  --no-blend: inherit;

  --c1: #A7DAC2;
  --c2: #2149F1;
  --c3: #E4A25B;
  --c4: #285B3B;
  --c5: #D57D72;
  --c6: #486765;
  --c7: #568C57;
  --c8: #414FB4;
  --c9: #7B0275;
  --c10: #D957A4;
  --c11: #3E7DD8;
  --c12: #DE4E11;
  --c13: #D8596E;
  --c14: #A1540B;
  --c15: #690FDA;
  --c16: #4C9749;
  --c17: #1E322A;
  --c18: #95B23B;
  --c19: #1C4337;
  --c20: #A00064;
}

body {
  background:
  linear-gradient(var(--d1), var(--c1) var(--p1), var(--c11) var(--d8)),
    linear-gradient(var(--d2), var(--c2) var(--p1), var(--c12) var(--p2)),
    linear-gradient(var(--d3), var(--c3) var(--p1), var(--c13) var(--p2)),
    linear-gradient(var(--d3), var(--c4) var(--p1), var(--c14) var(--p2)),
    linear-gradient(var(--d4),var(--c5) var(--p1), var(--c15) var(--p3),var(--c17) var(--p2)),
    linear-gradient(var(--d5), var(--c6) var(--p1), var(--c16) var(--p2)),
    linear-gradient(var(--d6), var(--c7) var(--p1), var(--c10) var(--p2)),
    radial-gradient(var(--d7), var(--c8) var(--p1), var(--c9) var(--p2));
  background-blend-mode: var(--blend-two);
  height:100vh;
  width:100%;
  backdrop-filter: none;
  background-attachment: fixed;
}
`;
