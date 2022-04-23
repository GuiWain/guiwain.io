// Can import any of the themes for typing - light or dark
import { light } from 'styles/theme'

// type inference
type Theme = typeof light

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
