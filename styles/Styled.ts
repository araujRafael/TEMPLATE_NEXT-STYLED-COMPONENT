import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    type: "default" | "dark";
    background: string;
    accent: string;
    fontFamily: string;
    accentOff: string;
    accentContrast: string;
    borderColor: string;
    borderRadius: string;
    colorFont: string;
    hrefLink: string;
    header_size: string;
    sun_icon: string;
    moon_icon: string;
    space: {
      padd_header: string;
    };
    shadow: {
      low: string;
      normal: string;
      high: string;
    };
  }
}
