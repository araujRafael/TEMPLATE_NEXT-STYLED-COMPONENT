import { useChangeTheme } from "../../Context/ChangeThemeContext";
import { darktTheme, defaultTheme } from "../../styles/Themes";

// import { Container } from './styles';

const useReturnTheme = () => {
  const { isDark } = useChangeTheme();
  return isDark ? darktTheme : defaultTheme;
};

export default useReturnTheme;
