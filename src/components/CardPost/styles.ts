import styled, { css } from 'styled-components'

import UseLink from 'next/link'

import { Calendar3 } from '@styled-icons/bootstrap/'
import { Timer } from '@styled-icons/boxicons-regular/'

export const Link = styled(UseLink)``

export const CalendarIcon = styled(Calendar3)`
  ${({ theme }) => css`
    width: 1rem;
    color: ${theme.colors.text};
  `}
`

export const TimerIcon = styled(Timer)`
  ${({ theme }) => css`
    width: 1.5rem;
    color: ${theme.colors.text};
  `}
`

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
  gap: 1.5rem;
`

export const Date = styled.time`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.light};

    display: flex;
    align-items: center;
    gap: 0.3rem;
  `}
`

export const ReadingTime = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.light};

    display: flex;
    align-items: center;
    gap: 0.3rem;
  `}
`
