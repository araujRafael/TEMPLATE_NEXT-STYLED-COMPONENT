import type { AppProps } from 'next/app'
import { } from 'react'
import { } from 'styled-components'
import MainLayout from '../Components/Organisms/MainLayout'
import ChangeThemeProvider, { } from '../Context/ChangeThemeContext'
import { GlobalStyles } from '../styles/GlobalStyles'
import { } from '../styles/Themes'



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChangeThemeProvider> {/* Theme */}
      <MainLayout>
        <Component {...pageProps} />
        <GlobalStyles />
      </MainLayout>
    </ChangeThemeProvider> // Theme
  )
}

export default MyApp
