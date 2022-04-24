import React from 'react'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Nav>
        <S.LanguageIcon />
        <S.AboutIcon />
        <S.FilterIcon />
        <S.ArrowIcon />
      </S.Nav>
    </S.Wrapper>
  )
}

export default React.memo(Footer)
