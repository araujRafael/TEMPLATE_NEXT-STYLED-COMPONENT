import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { Wrapper } from '../Wrapper';
import Switch from "react-switch";
import useReturnTheme from '../../../Hooks/useReturnTheme';

// import { Container } from './styles';

interface SwitcherThemeProps {
  onChange(value: boolean): void
  checked: boolean
}

const SwitcherTheme: React.FC<SwitcherThemeProps> = ({
  checked,
  onChange
}) => {
  const theme = useReturnTheme()

  // Render
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      checkedIcon={
        <Wrapper className='center-col'
          style={{ width: "100%", height: "100%" }}
        >
          <BsSunFill size={18} color={theme.sun_icon} />
        </Wrapper>
      }
      uncheckedIcon={
        <Wrapper className='center-col'
          style={{ width: "100%", height: "100%" }}
        >
          <BsMoonFill size={18} color={theme.moon_icon} />
        </Wrapper>
      }
      // Color
      offColor={theme.accentOff}
      onColor={theme.accentContrast}
      onHandleColor={theme.accent}
      offHandleColor={theme.accent}
      alt="change theme"
    />
  );
}

export default SwitcherTheme;