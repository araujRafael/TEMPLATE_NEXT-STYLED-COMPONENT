import { Header } from './styled';
import { P } from '../../Atoms/P';
import useReturnTheme from '../../../Hooks/useReturnTheme';
import Menu from '../../Organisms/MainLayout/Menu';

const HeaderNav: React.FC = () => {
  const theme = useReturnTheme()

  return (
    <Header >
      <P
        style={{ color: theme.accent }}
      >Dev.AraujRafael</P>

      <Menu hasTheme />
    </Header>
  )
}

export default HeaderNav;