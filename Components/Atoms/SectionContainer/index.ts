import styled from "styled-components";

interface SectionContainerProps {
  className: "center-col" | "center-row";
  bgColor?: string;
}

export const SectionContainer = styled.section<SectionContainerProps>`
  /* Background */
  background: ${(p) => p.theme.background ?? p.bgColor};
  /* Size  */
  width: 100%;
  min-height: 100%;
  /* Position */

  &.center-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &.center-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;
