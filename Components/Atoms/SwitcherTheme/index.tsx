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
          <BsSunFill size={18} color="#fda847" />
        </Wrapper>
      }
      uncheckedIcon={
        <Wrapper className='center-col'
          style={{ width: "100%", height: "100%" }}
        >
          <BsMoonFill size={18} color="#ffd" />
        </Wrapper>
      }
      // Color
      offColor={"#6b6ba0"}
      onColor={"#dcf5f5"}
      onHandleColor={theme.accent}
      offHandleColor={theme.accent}
      alt="change theme"
    />
  );
}

export default SwitcherTheme;