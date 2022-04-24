import styled, { css } from 'styled-components'

import UseMenu from 'components/Menu'

export const Menu = styled(UseMenu)``

export const Layout = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primaryBg};
    width: 100%;
    height: 100vh;

    padding-top: 2rem;

    transition: background ${theme.transition.default};
  `}
`
