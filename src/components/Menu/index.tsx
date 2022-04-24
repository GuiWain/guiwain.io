import * as S from './styles'
import { setCookie } from 'nookies'

export type Theme = 'light' | 'dark'

export type MenuProps = {
  checked: boolean
  getTheme: (theme: Theme) => void
}

const Menu = ({ checked, getTheme }: MenuProps) => {
  const handleTheme = (value: boolean) => {
    const updatedTheme = value ? 'dark' : 'light'
    const ONE_MONTH = 60 * 60 * 24 * 4

    setCookie(null, 'theme', updatedTheme, {
      maxAge: ONE_MONTH
    })

    !!getTheme && getTheme(updatedTheme)
  }

  return (
    <S.Wrapper>
      <S.Link href="/">
        <S.Anchor>GuiWain</S.Anchor>
      </S.Link>

      <S.Switch
        checkedChildren={<S.DarkIcon />}
        unCheckedChildren={<S.LightIcon />}
        onChange={(isChecked) => handleTheme(isChecked)}
        checked={checked}
      />
    </S.Wrapper>
  )
}

export default Menu
