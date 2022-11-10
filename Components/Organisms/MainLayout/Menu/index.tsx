import { FC, RefObject } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CSSProp } from 'styled-components';
import { navLinks } from '../../../../Constants/NavLinks';
import { useChangeTheme } from '../../../../Context/ChangeThemeContext';
import UseIcons from '../../../../Hooks/UseIcons';
import useReturnTheme from '../../../../Hooks/useReturnTheme';
import Href from '../../../Atoms/Href';
import SwitcherTheme from '../../../Atoms/SwitcherTheme';
import { Ul } from '../../../Atoms/Ul';
import NavBar from '../../../Molecules/NavBar';

// import { Container } from './styles';


const mobileStyles: CSSProp = {
  fontSize: "1.8rem",
  gap: "20px",
  alignItems: "flex-start"
}

interface MenuProps {
  hasTheme?: boolean
  onClose(): void
  ref?: RefObject<any>
}
const Menu: React.FC<MenuProps> = ({
  hasTheme,
  onClose,
  ref
}) => {
  // Context
  const { isDark, onChangeTheme } = useChangeTheme()
  const theme = useReturnTheme()
  // responsive
  const isMobileScreen = useMediaQuery({ query: `(max-width:${theme.mobile.md} )` })

  return (
    <NavBar onClose={onClose} ref={ref} >
      <Ul
        className={isMobileScreen ? "center-col" : 'center-row'}
        style={isMobileScreen ? mobileStyles : {}}
      >
        {navLinks.map((x, i) => {
          return <li key={i.toString()}
            style={{
              gap: "5px",
              display: "flex",
              alignItems: "center"
            }}
          >
            <UseIcons
              IconName={x.name}
              color={theme.colorFont}
              size={isMobileScreen ? 45 : 20}
            />
            <Href
              href={x.href}
              title={x.name}
            />
          </li>
        })}
        <div style={{
          marginTop: isMobileScreen ? "30px" : "",
          marginLeft: isMobileScreen ? "" : "25px",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }} >
          {hasTheme && <SwitcherTheme
            onChange={onChangeTheme}
            checked={isDark}
          />}
        </div>
      </Ul>
    </NavBar>
  );
}

export default Menu;