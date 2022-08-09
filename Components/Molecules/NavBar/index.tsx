import React from 'react';
import { useChangeTheme } from '../../../Context/ChangeThemeContext';
import SwitcherTheme from '../../Atoms/SwitcherTheme';

import { NavBarStyled } from './styled';

interface NavBarProps {
  hasTheme?: boolean
}

const NavBar: React.FC<NavBarProps> = ({
  children,
  hasTheme
}) => {
  const { isDark, onChangeTheme } = useChangeTheme()


  return (
    <NavBarStyled className='center-row'>
      {children}
      {hasTheme && <SwitcherTheme
        onChange={onChangeTheme}
        checked={isDark}
      />}
    </NavBarStyled>
  );
}

export default NavBar;