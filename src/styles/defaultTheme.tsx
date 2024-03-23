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

export const defaultTheme = {
  name: "default",
  borderRadius: "4px",
  colors: {
    white: "#ffffff",
    whiteSmoke: "#ECEFF3",
    eerieBlack: "#1f211f",
    tropicalIndigo: "7885FF",
    robinEggBlue: "#00CCC0",
    lemonLime: "#E7F53C",
  },
  fontFamily: {
    robotoFlex: robotoFlex.style.fontFamily,
    outfit: outfit.style.fontFamily,
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
};

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    colors: {
      white: string;
      whiteSmoke: string;
      eerieBlack: string;
      tropicalIndigo: string;
      robinEggBlue: string;
      lemonLime: string;
    };
    fontFamily: {
      robotoFlex: string;
      outfit: string;
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
  }
}
