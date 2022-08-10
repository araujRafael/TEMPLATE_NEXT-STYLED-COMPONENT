import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  type: "default",
  background: "#Ffff",
  colorFont: "#444",
  accent: "#1879e6", // cor princimal = main color
  accentContrast: "#ffffff",
  accentOff: "#0c3c72",
  borderColor: "#f62f5b",
  borderRadius: "0px",
  hrefLink: "#f62f5b",
  fontFamily: '"Roboto", sans serif',
  // "JetBrains Mono", monospace - "Poppins", sans serif
  header_size: "70px",
  // icon switch
  sun_icon: "#fda847", // default #fda847
  moon_icon: "#ffd", // default #ffd
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
  background: "#000",
  colorFont: "#eeeeee",
  accent: "#1879e6",
  accentContrast: "#ffffff",
  accentOff: "#0c3c72",
  borderColor: "#f7476e",
  borderRadius: "0px",
  hrefLink: "#f7476e",
  fontFamily: "",
  header_size: "70px",
  sun_icon: "#fda847", //default #fda847
  moon_icon: "#ffd", //default #ffd
  space: {
    padd_header: "40px 15px",
  },
  shadow: {
    low: "1px 0px 12px 2px rgba(0, 0, 0, 0.12)",
    normal: "1px 0px 12px 2px rgba(0, 0, 0, 0.25)",
    high: "1px 0px 12px 2px rgba(0, 0, 0, 0.45)",
  },
};
