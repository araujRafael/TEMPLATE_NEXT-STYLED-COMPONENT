import styled from "styled-components";

interface UlProps {
  className?: "center-col" | "center-row";
}

export const Ul = styled.ul<UlProps>`
  gap: 10px;
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
