import styled from 'styled-components';

export const Button = styled.button`
  background: ${p => p.theme.accent};
  color: ${p => p.theme.accentContrast};
  border: none;
  padding: 5px 15px;
  font-size: 1rem;
  cursor: pointer;
`;
