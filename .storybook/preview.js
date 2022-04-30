import { ThemeProvider } from 'styled-components'
import { useDarkMode } from 'storybook-dark-mode'

import GlobalStyles from '../src/styles/global'
import { light, dark } from '../src/styles/theme'

const ThemeWrapper = (props) => {
  return (
    <ThemeProvider theme={useDarkMode() ? dark : light}>
      {props.children}
    </ThemeProvider>
  )
}

export const decorators = [
  (renderStory) => (
    <ThemeWrapper>
      <GlobalStyles />
      {renderStory()}
    </ThemeWrapper>
  )
]
