import { ThemeProvider, createTheme } from "@mui/material";
import { FC, ReactNode } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    customColors: {
      [key: string]: string;
    };
  }

  interface ThemeOptions {
    customColors?: {
      [key: string]: string;
    };
  }
}

const theme = createTheme({
  palette: {
    info: {
      main: "#1EDF1B",
    },
    primary: {
        main: "#001E3C",
        dark: "#071A2E",
        contrastText: "#B2BAC2",
        light: "#0A1929"
    }
  },
  customColors: {
    green: "#1EDF1B",
    greenHover: "#18B115",
    navy: "#071A2E",
    navyDark: "#0A1929",
    navyLight: "#001E3C",
    textColor: "#B2BAC2",
  },
});

interface ICustomStyle {
  children: ReactNode;
}

export const CustomStyle: FC<ICustomStyle> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

// ---------

export const inputCustomRules = {
  width: "100%",
  textTransform: "capitalize",
  justifyContent: "flex-start",
  fontSize: "0.875rem",
  borderRadius: "8px",
  padding: "7px 0.875rem",
};
