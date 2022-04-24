import styled, { css } from 'styled-components'

import { Language } from '@styled-icons/ionicons-sharp/'
import { Aboutdotme } from '@styled-icons/simple-icons/'
import { FilterAlt } from '@styled-icons/boxicons-regular/'
import { ToTop } from '@styled-icons/boxicons-solid/'
import { Github } from '@styled-icons/entypo-social/'

export const LanguageIcon = styled(Language)``
export const AboutIcon = styled(Aboutdotme)``
export const FilterIcon = styled(FilterAlt)``
export const ArrowIcon = styled(ToTop)``

export const GithubIcon = styled(Github)`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    transition: color ${theme.transition.default};

    width: 3rem;
    height: 3rem;

    cursor: pointer;

    :hover {
      color: ${theme.colors.secondaryVariation};
    }
  `}
`

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 7rem;
  background-color: transparent;

  display: flex;
  flex-direction: column;
`

export const Address = styled.address`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  margin-bottom: 7rem;
`

export const Author = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.light};
  `}
`

export const Year = styled.time`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.font.family02};
    font-size: ${theme.font.sizes.xxxsmall};
    font-weight: ${theme.font.light};
  `}
`

export const Anchor = styled.a``

export const Footer = styled.footer`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
    box-shadow: 0px 0px 1px 0px rgba(122, 0, 65, 0.3);
    transition: background ${theme.transition.default},
      box-shadow ${theme.transition.default};

    width: 100%;
    height: 5rem;
    margin-top: 2rem;

    position: fixed;
    bottom: 0;
    left: 0;

    :hover {
      box-shadow: 0px -1px 3px 0px rgba(122, 0, 65, 0.2);
    }
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    width: 90%;
    height: 100%;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${LanguageIcon},
    ${AboutIcon},
    ${FilterIcon},
    ${ArrowIcon} {
      color: ${theme.colors.icons};
      transition: color ${theme.transition.default};

      width: auto;
      height: 3rem;

      cursor: pointer;

      :hover {
        color: ${theme.colors.secondaryVariation};
      }
    }
  `}
`
