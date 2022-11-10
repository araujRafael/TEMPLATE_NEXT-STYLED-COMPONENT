import styled from "styled-components";

interface AnchorProps {
  colorFont?: string;
}
export const Anchor = styled.a<AnchorProps>`
  color: ${(p) => p.colorFont ?? p.theme.hrefLink};
  cursor: pointer;
  white-space: nowrap;
`;
