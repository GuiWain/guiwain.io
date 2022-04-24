const defaultTheme = {
  font: {
    family01: 'Montserrat, sans-serif',
    family02: 'Merriweather, serif',
    light: 300,
    regular: 400,
    bold: 700,
    extraBold: 800,
    black: 900,
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
  tags: {
    colors: {
      dev: '',
      life: '',
      travel: ''
    }
  },
  transition: {
    default: '0.4s ease-in-out'
  }
}

export const light = {
  ...defaultTheme,
  type: 'light',
  colors: {
    title: '#7A0041',
    text: '#2D2529',
    primaryBg: '#F9F9F9',
    secondaryBg: '#ADADAD',
    secondaryVariation: '#5a4952',
    icons: '#2D2529',
    iconTheme: '#FFEA00'
  }
}

export const dark = {
  ...defaultTheme,
  type: 'dark',
  colors: {
    title: '#FFD6EB',
    text: '#F9F9F9',
    primaryBg: '#2D2529',
    secondaryBg: '#E0E0E0',
    secondaryVariation: '#5a4952',
    icons: '#2D2529',
    iconTheme: '#8f8f8f'
  }
}
