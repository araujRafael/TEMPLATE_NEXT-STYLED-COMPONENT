import styled from 'styled-components';

export const Button = styled.button`
  background: ${p => p.theme.accent};
  color: ${p => p.theme.accentContrast};
  border: none;
  padding: 6px 18px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
`;
