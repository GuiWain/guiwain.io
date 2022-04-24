import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.font.family01};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.extraBold};

    :hover {
      color: ${theme.colors.text};
    }

    cursor: pointer;
  `}
`

export const Description = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.regular};
  `}
`

export const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`

export const Date = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.light};
  `}
`

export const ReadingTime = styled(Date)``
