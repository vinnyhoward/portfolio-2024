import { Outfit, Roboto_Flex } from "next/font/google";

const sizes = {
  sm: "480px",
  md: "666px",
  lg: "1024px",
  xl: "1200px",
};

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
  borderRadius: {
    borderRadius1: "6px",
    borderRadius2: "12px",
  },
  colors: {
    color1: "#ffffff",
    color2: "#ECEFF3",
    color3: "#1f211f",
    color4: "7885FF",
    color5: "#00CCC0",
    color6: "#E7F53C",
    color7: "#f5f5f5",
  },
  fontColor: {
    fontColor1: "#25314C",
    fontColor2: "#ffffff",
    fontColor3: "#c0c0c0",
    fontColor4: "#666666",
  },
  fontFamily: {
    outfit: outfit.style.fontFamily,
    robotoFlex: robotoFlex.style.fontFamily,
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
    colors: {
      color1: "#e6e6e6",
    },
    strokes: {
      stroke1: "1px",
    },
  },
  layout: {
    width: "650px",
  },
  boxShadow: {
    shadow1: "0px 2px 2px rgba(0, 0, 0, 0.01)",
  },
  breakpoints: sizes,
  mediaQueries: {
    small: `(max-width: ${sizes.sm})`,
    medium: `(max-width: ${sizes.md})`,
    large: `(max-width: ${sizes.lg})`,
    extraLarge: `(max-width: ${sizes.xl})`,
  },
};

export const darkTheme = {
  name: "dark",
  borderRadius: {
    borderRadius1: "6px",
    borderRadius2: "12px",
  },
  colors: {
    color1: "#212121",
    color2: "#161616",
    color3: "#3A3A3A",
    color4: "7885FF",
    color5: "#00CCC0",
    color6: "#E7F53C",
    color7: "#2c2c2c",
  },
  fontColor: {
    fontColor1: "#ffffff",
    fontColor2: "#25314C",
    fontColor3: "#c0c0c0",
    fontColor4: "#666666",
  },
  fontFamily: {
    outfit: outfit.style.fontFamily,
    robotoFlex: robotoFlex.style.fontFamily,
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
    colors: {
      color1: "#2b2b2b",
    },
    strokes: {
      stroke1: "1px",
    },
  },
  layout: {
    width: "650px",
  },
  boxShadow: {
    shadow1: "0px 2px 2px rgba(0, 0, 0, 0.01)",
  },
  breakpoints: sizes,
  mediaQueries: {
    small: `(max-width: ${sizes.sm})`,
    medium: `(max-width: ${sizes.md})`,
    large: `(max-width: ${sizes.lg})`,
    extraLarge: `(max-width: ${sizes.xl})`,
  },
};

declare module "styled-components" {
  export interface Theme {
    name: string;
    borderRadius: {
      borderRadius1: string;
      borderRadius2: string;
    };
    colors: {
      color1: string;
      color2: string;
      color3: string;
      color4: string;
      color5: string;
      color6: string;
      color7: string;
    };
    fontColor: {
      fontColor1: string;
      fontColor2: string;
      fontColor3: string;
      fontColor4: string;
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
    border: {
      colors: {
        color1: string;
      };
      strokes: {
        stroke1: string;
      };
    };
    layout: {
      width: string;
    };
    boxShadow: {
      shadow1: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    mediaQueries: {
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
  }
}
