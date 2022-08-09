import styled from "styled-components";

interface WrapperProps {
  className: "center-col" | "center-row";
}

export const Wrapper = styled.div<WrapperProps>`
  &.center-col {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
  &.center-row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
`;
