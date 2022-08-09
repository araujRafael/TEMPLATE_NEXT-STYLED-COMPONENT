import { Header } from './styled';
import SwitcherTheme from '../../Atoms/SwitcherTheme';
import { useChangeTheme } from '../../../Context/ChangeThemeContext';

const HeaderNav: React.FC = () => {
  const { isDark, onChangeTheme } = useChangeTheme()

  return (
    <Header >
      <SwitcherTheme
        onChange={onChangeTheme}
        checked={isDark}
      />

    </Header>
  )
}

export default HeaderNav;