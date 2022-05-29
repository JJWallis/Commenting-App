import 'styled-components'

declare module 'styled-components' {
   export interface DefaultTheme {
      baseStyles: typeof Theme['baseStyles']
   }
}

export const Theme = {
   baseStyles: {
      bgPm: '#1E213F',
      bgSd: '#161932',
      lightGrey: '#EFF1FA',
      darkGrey: '#99999A',
      softWhite: '#FFFFFF',
      hoverTransition: '0.2s ease-in-out',
      mediaBreakpoint: '43.999em',
   },
}
