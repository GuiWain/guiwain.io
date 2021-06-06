export default {
  border: {
    smallRadius: '0.4rem',
    radius: '0.8rem'
  },
  font: {
    family: "'Open Sans', 'Roboto', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    sizes: {
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.6rem',
      small: '1.8rem',
      medium: '2.0rem',
      large: '2.4rem',
      xlarge: '2.8rem',
      xxlarge: '3.2rem',
      xxxlarge: '3.6rem',
      huge: '4.0rem',
      xhuge: '5.6rem'
    }
  },
  colors: {
    primaryLight: '',
    primaryMedium: '',
    primaryDark: '',
    primaryDarkest: '',
    secondaryLight: '',
    secondaryMedium: '',
    secondaryDark: '',
    secondaryDarkest: '',
    mainBg: '#FAFAF2',
    lightBg: '#FAFAFA',
    white: '#FFFFFF',
    black: '#000000',
    feedbackDark: '#3241A1',
    feedbackDarkest: '#212E89',
    successLight: '#12AF46',
    successMedium: '#00A03E',
    errorLight: '#FB3C1E',
    errorMedium: '#ED3020'
  },
  spacings: {
    xxxsmall: '0.5rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  transition: {
    slow: '0.7s ease-in-out',
    default: '0.4s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
