import { Header } from './styled';
import { P } from '../../Atoms/P';
import useReturnTheme from '../../../Hooks/useReturnTheme';
import Menu from '../../Organisms/MainLayout/Menu';
// 
import { RiMenu4Line } from 'react-icons/ri'
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';


const HeaderNav: React.FC = () => {
  const theme = useReturnTheme()
  // bug on load page
  const isMobileScreen = typeof window !== 'undefined'
    ? useMediaQuery({ query: `(max-width:${theme.mobile.md} )` }) : false
  // State
  const [isOpenMenu, SetIsOpenMenu] = useState(false)
  const FadeTransitionDyna = dynamic(() => import('../../FadeTransition'), { ssr: false })


  // useEffect(() => {
  //   !isMobileScreen
  //     ? SetIsOpenMenu(true)
  //     : SetIsOpenMenu(false)
  // }, [])

  // Function
  const handleOpenMenu = () => SetIsOpenMenu(!isOpenMenu)

  // Render
  return (
    <Header >
      {/* Logo */}
      <P
        style={{ color: theme.accent }}
      >Dev.AraujRafael</P>
      {/* Menu */}
      <FadeTransitionDyna state={isOpenMenu}>
        < Menu
          hasTheme
          onClose={handleOpenMenu}
        />
      </FadeTransitionDyna>
      {isMobileScreen && <RiMenu4Line
        color={theme.accent}
        size={28}
        cursor="pointer"
        onClick={handleOpenMenu}
      />}
    </Header>
  )
}

export default HeaderNav;