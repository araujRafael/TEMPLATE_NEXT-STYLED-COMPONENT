import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  type: "default",
  background: "#Ffff",
  accent: "#dcf1fa", // cor princimal = main color
  accentOff: "#16759e",
  accentContrast: "#ffffff",
  borderColor: "#ddda",
  borderRadius: "12px",
  colorFont: "#444",
  hrefLink: "#65b2ff",
  fontFamily: '"Roboto", sans serif',
  header_size: "100px",
  space: {
    padd_header: "40px 15px",
  },
  shadow: {
    low: "1px 0px 12px 2px rgba(0, 0, 0, 0.12)",
    normal: "1px 0px 12px 2px rgba(0, 0, 0, 0.25)",
    high: "1px 0px 12px 2px rgba(0, 0, 0, 0.45)",
  },
};

export const darktTheme: DefaultTheme = {
  type: "dark",
  background: "#073c54",
  accent: "#0b628a",
  accentOff: "#042535",
  accentContrast: "#ccc",
  borderColor: "#03202e",
  borderRadius: "12px",
  colorFont: "#eeeeee",
  hrefLink: "##ffffff",
  fontFamily: "",
  header_size: "100px",
  space: {
    padd_header: "40px 15px",
  },
  shadow: {
    low: "1px 0px 12px 2px rgba(0, 0, 0, 0.12)",
    normal: "1px 0px 12px 2px rgba(0, 0, 0, 0.25)",
    high: "1px 0px 12px 2px rgba(0, 0, 0, 0.45)",
  },
};
