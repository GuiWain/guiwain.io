import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Description = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};

    text-align: center;
    margin: 1rem auto 0;
    width: 80%;
  `}
`
