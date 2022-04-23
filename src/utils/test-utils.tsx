import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'
import * as theme from 'styles/theme'

const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme.light}>{children}</ThemeProvider>)

export * from '@testing-library/react'
export { renderWithTheme as render }
