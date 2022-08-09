import styled from "styled-components";

interface NavBarStyledProps {
  className: "center-col" | "center-row";
}

export const NavBarStyled = styled.nav<NavBarStyledProps>`
  gap: 20px;
  &.center-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  &.center-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`;
