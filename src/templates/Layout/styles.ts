import styled, { css } from 'styled-components'

import UseMenu from 'components/Menu'
import UseFooter from 'components/Footer'

export const Menu = styled(UseMenu)``
export const Footer = styled(UseFooter)``

export const Layout = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBg};
    width: 100%;
    height: 100vh;

    padding-top: 2rem;

    transition: background ${theme.transition.default};
  `}
`
