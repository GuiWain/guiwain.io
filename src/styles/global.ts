import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;

      --antd-wave-shadow-color: ${theme.colors.title};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    li,
    ol {
      transition: color ${theme.transition.default};
    }
  `}
`

export default GlobalStyles
