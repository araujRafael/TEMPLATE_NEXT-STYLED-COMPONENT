import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  background: ${p => p.theme.accent};
  color: ${p => p.theme.accentContrast};
  border: none;
  padding: 6px 18px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  transition: all .3s ease-in-out;
  :active{
    transform: scale(0.95);
    background: ${p => p.theme.accentOff};
  }
`;
