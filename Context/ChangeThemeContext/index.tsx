import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ChangeThemeContextTypes } from '../../@types';
import { darktTheme, defaultTheme } from '../../styles/Themes';
import { parseCookies, setCookie } from 'nookies'
import { cookiesNames } from '../../Constants/cookiesNames';

const initialVavlueChangeTheme = {
  isDark: false,
  setIsDark: () => { },
  onChangeTheme: (e: boolean) => { }
}

const ChangeTheme = createContext<ChangeThemeContextTypes>(initialVavlueChangeTheme)

export const useChangeTheme = () => useContext(ChangeTheme)

const ChangeThemeProvider: React.FC = ({
  children
}) => {
  // Reducers
  // State
  const [isDark, setIsDark] = useState(false)

  // Effects
  useEffect(() => {
    const cookies = parseCookies()?.[cookiesNames.isDarkCookie]
    setIsDark(eval(cookies))
  }, [])

  // Functions
  const onChangeTheme = (e: boolean) => {
    setCookie(null, cookiesNames.isDarkCookie, String(e), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    setIsDark(e)
  }

  // Render
  return (
    <ChangeTheme.Provider value={{
      isDark,
      setIsDark,
      onChangeTheme
    }}>
      <ThemeProvider theme={isDark ? darktTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ChangeTheme.Provider>
  );
}

export default ChangeThemeProvider;