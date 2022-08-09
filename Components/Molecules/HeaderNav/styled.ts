import styled from "styled-components";

export const Header = styled.header`
  background: ${(p) => p.theme.accent};
  /*  */
  width: 100%;
  height: ${(p) => p.theme.header_size};

  position: fixed;
  top: 0;

  padding: 15px 45px;

  /*  */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
