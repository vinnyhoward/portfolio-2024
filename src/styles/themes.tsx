import { Outfit, Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const lightTheme = {
  name: "light",
  borderRadius: "12px",
  colors: {
    color1: "#ffffff",
    color2: "#ECEFF3",
    color3: "#1f211f",
    color4: "7885FF",
    color5: "#00CCC0",
    color6: "#E7F53C",
  },
  fontFamily: {
    robotoFlex: robotoFlex.style.fontFamily,
    outfit: outfit.style.fontFamily,
    fontColor1: "#25314C",
    fontColor2: "#ffffff",
    fontColor3: "#c0c0c0",
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
    jumbo: "4rem", // 64px
    jumboXL: "6rem", // 86px
    jumboXXL: "8rem", // 128px
  },
  border: {
    color1: "#e6e6e6",
    stroke1: "1px",
  },
  layout: {
    width: "560px",
    padding: "1rem",
    margin: "0 auto",
  },
  boxShadow: {
    shadow1: "0px 2px 2px rgba(0, 0, 0, 0.01)",
  },
};

export const darkTheme = {
  name: "dark",
  borderRadius: "12px",
  colors: {
    color1: "#212121",
    color2: "#161616",
    color3: "#3A3A3A",
    color4: "7885FF",
    color5: "#00CCC0",
    color6: "#E7F53C",
  },
  fontFamily: {
    robotoFlex: robotoFlex.style.fontFamily,
    outfit: outfit.style.fontFamily,
    fontColor1: "#ffffff",
    fontColor2: "#25314C",
    fontColor3: "#c0c0c0",
  },
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    xxl: "1.5rem", // 24px
    xxxl: "2rem", // 32px
    jumbo: "4rem", // 64px
    jumboXL: "6rem", // 86px
    jumboXXL: "8rem", // 128px
  },
  border: {
    color1: "#2b2b2b",
    stroke1: "1px",
  },
  layout: {
    width: "560px",
    padding: "1rem",
    margin: "0 auto",
  },
  boxShadow: {
    shadow1: "0px 2px 2px rgba(0, 0, 0, 0.01)",
  },
};

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    name: string;
    borderRadius: string;
    colors: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
      color6: string;
    };
    fontFamily: {
      robotoFlex: string;
      outfit: string;
      fontColor1: string;
      fontColor2: string;
      fontColor3: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
      jumbo: string;
      jumboXL: string;
      jumboXXL: string;
    };
    border: {
      color1: string;
      stroke1: string;
    };
    layout: {
      width: string;
      padding: string;
      margin: string;
    };
    boxShadow: {
      shadow1: string;
    };
  }
}
