import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
      @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Open Sans Regular'), local('Open-Sans-Regular'),
        url('/fonts/OpenSans-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Open Sans SemiBold'), local('Open-Sans-SemiBold'),
        url('/fonts/OpenSans-SemiBold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Open Sans Bold'), local('Open-Sans-Bold'),
        url('/fonts/OpenSans-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: local('Open Sans ExtraBold'), local('Open-Sans-ExtraBold'),
        url('/fonts/OpenSans-ExtraBold.ttf') format('truetype');
  }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    `}

  `

export default GlobalStyles
