import styled, { css } from 'styled-components'

import { Language } from '@styled-icons/ionicons-sharp/'
import { Aboutdotme } from '@styled-icons/simple-icons/'
import { Filter } from '@styled-icons/feather/'
import { ArrowUpCircle } from '@styled-icons/feather/'

export const LanguageIcon = styled(Language)``
export const AboutIcon = styled(Aboutdotme)``
export const FilterIcon = styled(Filter)``
export const ArrowIcon = styled(ArrowUpCircle)``

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
    box-shadow: 0px 0px 1px 0px rgba(122, 0, 65, 0.3);
    transition: background ${theme.transition.default},
      box-shadow ${theme.transition.default};

    width: 100%;
    height: 5rem;

    margin-top: 7rem;

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
