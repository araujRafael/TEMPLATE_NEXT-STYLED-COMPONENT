import { useMediaQuery } from 'react-responsive';
import useReturnTheme from '../../../Hooks/useReturnTheme';
import { Wrapper } from '../../Atoms/Wrapper';
import { NavBarStyled } from './styled';
import { IoCloseSharp } from 'react-icons/io5'
import { RefObject } from 'react';

interface NavBarProps {
  onClose(): void
  ref?: RefObject<any>
}

const NavBar: React.FC<NavBarProps> = ({
  children,
  onClose,
  ref
}) => {
  const theme = useReturnTheme()
  const isMobileScreen = useMediaQuery({ query: `(max-width:${theme.mobile.md} )` })

  return (
    <NavBarStyled ref={ref} className='center-col'>
      {isMobileScreen && <Wrapper
        className='center-row'
        style={{
          width: "100%",
          position: "absolute",
          top: 0,
          padding: "25px",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <IoCloseSharp
          color={theme.colorFont}
          size={35}
          onClick={onClose}
          cursor="pointer"
        />
      </Wrapper>}
      {children}
    </NavBarStyled>
  );
}

export default NavBar;