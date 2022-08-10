import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
  border: 1px solid ${(p) => p.theme.borderColor};
  border-radius: ${(p) => p.theme.borderRadius};
`;
export const Input = styled.input`
  color: ${(p) => p.theme.colorFont};
  background: ${(p) => p.theme.background};
  border-radius: ${(p) => p.theme.borderRadius};
  border: transparent;
  width: 100%;
  padding: 6px 10px;
  :focus {
    outline: none;
  }
`;
