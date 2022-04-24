import React from 'react'
import * as S from './styles'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <S.Wrapper>
      <S.Address>
        <S.Author>Guilherme Mariano</S.Author>
        <S.Year>2022-2022</S.Year>
        <S.Anchor href="https://github.com/GuiWain/guiwain.io" target="_blank">
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
    </S.Wrapper>
  )
}

export default React.memo(Footer)
