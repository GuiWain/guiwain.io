import styled, { css } from 'styled-components'

import UseCards from 'components/CardPost'

export const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`

export const ListPosts = styled.section`
  margin: 3rem auto;

  display: flex;
  flex-direction: column;
  gap: 5rem;
`

export const CardPost = styled(UseCards)``

export const Description = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};

    text-align: center;
    margin: 4rem auto;
    width: 70%;
  `}
`
