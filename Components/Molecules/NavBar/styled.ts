import styled from "styled-components";

interface NavBarStyledProps {
  className: "center-col" | "center-row";
}

export const NavBarStyled = styled.nav<NavBarStyledProps>`
  background: ${(p) => p.theme.background};

  padding: 0 10px;

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

  @media screen and (max-width: ${(p) => p.theme.mobile.md}) {
    border: 2px solid ${(p) => p.theme.borderColor};
    height: 100vh;
  }
`;
