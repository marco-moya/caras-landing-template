import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
  colors: {
    primary: "#ef4138",
    background: "#FFF",
    success: "#1ed12d",
    error: "#F66060",
    text: "#333333",
    iconHover: "#1da1f2",
  },
  fonts: {
    playfair: "'Playfair Display', serif",
    barlow: "'Barlow', sans-serif",
  },
  fontsSizes: {
    stepMinus2: "clamp(0.6944rem, 0.6757rem + 0.0937vi, 0.76rem)", //Step -2: 11.1111px → 12.16px
    stepMinus1: "clamp(0.8333rem, 0.8rem + 0.1667vi, 0.95rem)", //Step -1: 13.3333px → 15.2px
    step0: "clamp(1rem, 0.9464rem + 0.2679vi, 1.1875rem)", //Step 0: 16px → 19px
    step1: "clamp(1.2rem, 1.1188rem + 0.4063vi, 1.4844rem)", //Step 1: 19.2px → 23.75px
    step2: "clamp(1.44rem, 1.3213rem + 0.5935vi, 1.8555rem)", //Step 2: 23.04px → 29.6875px
    step3: "clamp(1.728rem, 1.559rem + 0.8448vi, 2.3193rem)", //Step 3: 27.648px → 37.1094px
    step4: "clamp(2.0736rem, 1.8377rem + 1.1794vi, 2.8992rem)", //Step 4: 33.1776px → 46.3867px
    step5: "clamp(2.4883rem, 2.1639rem + 1.6223vi, 3.624rem)", //Step 5: 39.8131px → 57.9834px
  },
  media: {
    laptop: `(min-width: 54em)`, // 54em = 864px
  },
  }
}