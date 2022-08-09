import styled from 'styled-components';

interface PageLayoutProps {
  className: "center-col" | "center-row"
}

export const PageLayout = styled.div<PageLayoutProps>`

  background: ${p => p.theme.background};

  width: 100%;
  height: 100vh;

  padding-top:${(p) => p.theme.header_size};
`;
