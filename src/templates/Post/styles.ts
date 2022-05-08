import styled, { css } from 'styled-components'

import UseLink from 'next/link'

import { Calendar3 } from '@styled-icons/bootstrap/'
import { Update } from '@styled-icons/material/'
import { Timer } from '@styled-icons/boxicons-regular/'

export const Link = styled(UseLink)``

export const CalendarIcon = styled(Calendar3)`
  ${({ theme }) => css`
    width: 1rem;
    color: ${theme.colors.text};
  `}
`

export const UpdateDateIcon = styled(Update)`
  ${({ theme }) => css`
    width: 1.2rem;
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
  width: 90%;
  margin: 2rem auto 0;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.title};
    font-family: ${theme.font.family01};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.extraBold};
  `}
`

export const Resume = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family01};
    font-size: ${theme.font.sizes.xmedium};
    font-weight: ${theme.font.bold};

    margin: 1.5rem auto 0.5rem;
  `}
`

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
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

export const UpdateDate = styled(Date)`
  ${({ theme }) => css`
    font-style: italic;
    margin: 0.5rem auto;
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

export const Content = styled.section`
  ${({ theme }) => css`
    margin-top: 5rem;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${theme.colors.text};
      font-family: ${theme.font.family02};
      font-weight: ${theme.font.bold};

      margin: 2rem auto 1rem;
    }

    h1 {
      font-size: ${theme.font.sizes.xlarge};
    }

    h2 {
      font-size: ${theme.font.sizes.large};
    }

    h3 {
      font-size: ${theme.font.sizes.xmedium};
    }

    h4,
    h5,
    h6 {
      font-size: ${theme.font.sizes.medium};
    }

    p {
      margin: 0 auto 1.75rem;

      color: ${theme.colors.text};
      font-family: ${theme.font.family02};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.regular};

      word-wrap: break-word;
      line-height: 2.75rem;
      letter-spacing: 0.05rem;
    }

    a {
      color: ${theme.colors.title};
      font-family: ${theme.font.family02};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.regular};

      transition: text-decoration ${theme.transition.default};

      :hover {
        text-decoration: none;
      }
    }

    span {
      color: ${theme.colors.text};
      font-family: ${theme.font.family02};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.regular};
    }

    li,
    ol,
    ul {
      color: ${theme.colors.text};
      font-family: ${theme.font.family02};
      font-size: ${theme.font.sizes.xxsmall};
      font-weight: ${theme.font.regular};

      line-height: 2.3rem;
      letter-spacing: 0.025rem;
    }

    ul,
    ol {
      width: 90%;
      margin: 1.5rem auto;
    }

    li {
      margin: 1.5rem auto;
    }

    figcaption {
      color: ${theme.colors.text};
      font-family: ${theme.font.family02};
      font-size: ${theme.font.sizes.little};
      font-weight: ${theme.font.light};

      margin-bottom: 1.5rem;
    }

    img {
      object-fit: contain;
      max-width: 100%;
    }

    td {
      color: ${theme.colors.text};
      font-family: ${theme.font.family02};
    }
  `}
`
