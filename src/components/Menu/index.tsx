import * as S from './styles'

import { parseCookies, setCookie } from 'nookies'

export type Theme = 'light' | 'dark'

export type MenuProps = {
  checked: boolean
  getTheme: (theme: Theme) => void
}

const Menu = ({ checked, getTheme }: MenuProps) => {
  const handleTheme = () => {
    const cookies = parseCookies()
    const ONE_MONTH = 60 * 60 * 24 * 4

    // * getting the current theme
    const currentyTheme = cookies.theme ? cookies.theme : 'light'

    // * reversing the themes
    const updatedTheme = currentyTheme === 'light' ? 'dark' : 'light'

    setCookie(null, 'theme', updatedTheme, {
      maxAge: ONE_MONTH
    })

    !!getTheme && getTheme(updatedTheme)
  }

  return (
    <S.Wrapper>
      <S.Logo href="/">
        <S.Anchor>GuiWain</S.Anchor>
      </S.Logo>

      <S.Switch
        checkedChildren={<S.DarkIcon />}
        unCheckedChildren={<S.LightIcon />}
        onChange={handleTheme}
        checked={checked}
      />
    </S.Wrapper>
  )
}

export default Menu
