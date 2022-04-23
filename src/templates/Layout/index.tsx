import * as S from './styles'
import * as t from 'styles/theme'

import { parseCookies, setCookie } from 'nookies'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'components/Menu'
import { useEffect, useState } from 'react'

export type LayoutProps = {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState(t.light)

  const handleTheme = (theme: Theme) => {
    const newTheme = theme === 'light' ? t.light : t.dark
    setTheme(newTheme)
  }

  useEffect(() => {
    const cookies = parseCookies()

    const currentyTheme = cookies.theme ? cookies.theme : 'light'
    const updatedTheme = currentyTheme === 'light' ? t.light : t.dark
    setTheme(updatedTheme)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <S.Layout>
        <S.Menu
          getTheme={(theme) => handleTheme(theme)}
          checked={theme.type === 'dark'}
        />

        {children}
      </S.Layout>
    </ThemeProvider>
  )
}

export default Layout
