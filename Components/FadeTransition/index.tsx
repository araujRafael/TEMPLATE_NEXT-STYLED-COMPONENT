import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { animated, useTransition } from 'react-spring'
import useReturnTheme from '../../Hooks/useReturnTheme';
// import { Container } from './styles';

interface FadeTransitionProps {
  state: boolean
}

const mobileStyle = {
  width: "100%", height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
}

const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  state
}) => {
  const theme = useReturnTheme()
  const isMobileScreen = useMediaQuery({ query: `(max-width:${theme.mobile.md} )` })
  const transition = useTransition(state, {
    from: { x: 100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 100, opacity: 0 },
    delay: 200,
  })


  return (
    <>
      {
        transition((styled, item) =>
          (item || !isMobileScreen) && (
            <animated.div style={
              isMobileScreen ? { ...styled, ...mobileStyle } : styled
            } >
              {children}
            </animated.div>
          )
        )
      }
    </>
  );
}

export default FadeTransition;