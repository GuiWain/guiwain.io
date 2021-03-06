import * as S from './styles'
import * as t from 'styles/theme'

import { parseCookies, setCookie } from 'nookies'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'

import { Theme } from 'components/Menu'
import { FooterModifiers } from 'components/Footer'

export type LayoutProps = {
  children: JSX.Element
  footer?: FooterModifiers
}

const Layout = ({ children, footer = 'default' }: LayoutProps) => {
  const [theme, setTheme] = useState(t.light)

  const handleTheme = (theme: Theme) => {
    const newTheme = theme === 'light' ? t.light : t.dark
    setTheme(newTheme)
  }

  useEffect(() => {
    const cookies = parseCookies()

    if (!cookies.theme) {
      const initialTheme = 'light'
      const ONE_MONTH = 60 * 60 * 24 * 7 * 4

      setCookie(null, 'theme', initialTheme, {
        maxAge: ONE_MONTH
      })

      return
    }

    const currentyTheme = cookies.theme
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

        <S.Footer modifier={footer} />
      </S.Layout>
    </ThemeProvider>
  )
}

export default Layout
