import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/Merriweather-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Merriweather-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Merriweather-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/Merriweather-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/Montserrat-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Montserrat-ExtraBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    src: url('/fonts/Montserrat-Black.ttf') format('truetype');
  }

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
