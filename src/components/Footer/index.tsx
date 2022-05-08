import React from 'react'
import * as S from './styles'

export type FooterModifiers = 'default' | 'minimal'

export type FooterProps = {
  modifier?: FooterModifiers
}

const Footer = ({ modifier }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const swtichModifiers = () => {
    switch (modifier) {
      case 'default': {
        return (
          <>
            <S.Address>
              <S.Author>Guilherme Mariano</S.Author>
              <S.Year>2022-2022</S.Year>
              <S.Anchor
                href="https://github.com/GuiWain/guiwain.io"
                target="_blank"
              >
                <S.GithubIcon />
              </S.Anchor>
            </S.Address>

            <S.Footer>
              <S.Nav>
                <S.LanguageIcon />
                <S.AboutIcon />
                <S.FilterIcon />
                <S.ArrowIcon onClick={scrollToTop} />
              </S.Nav>
            </S.Footer>
          </>
        )
      }
      case 'minimal': {
        return (
          <>
            <S.Address>
              <S.Author>Guilherme Mariano</S.Author>
              <S.Year>2022-2022</S.Year>
              <S.Anchor
                href="https://github.com/GuiWain/guiwain.io"
                target="_blank"
              >
                <S.GithubIcon />
              </S.Anchor>
            </S.Address>

            <S.Footer>
              <S.Nav>
                <S.LanguageIcon />
                <S.AboutIcon />
                <S.ArrowIcon onClick={scrollToTop} />
              </S.Nav>
            </S.Footer>
          </>
        )
      }
      default:
        return <></>
    }
  }

  return <S.Wrapper>{swtichModifiers()}</S.Wrapper>
}

export default React.memo(Footer)
