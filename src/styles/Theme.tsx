import 'styled-components'

interface ThemeInterface {
   lightGrey: string
   veryLightGrey: string
   softWhite: string
   darkGrey: string
   darkBlue: string
   pink: string
   lightGreyBlue: string
   red: string
   blue: string
   hoverTransition: string
   fwLight: number
   fwMedium: number
   fwBold: number
}

declare module 'styled-components' {
   export interface DefaultTheme extends ThemeInterface {}
}

export const Theme = {
   lightGrey: 'hsl(223, 19%, 93%)',
   veryLightGrey: 'hsl(228, 33%, 97%)',
   softWhite: '#FFFFFF',
   darkGrey: 'hsl(211, 10%, 45%)',
   darkBlue: 'hsl(212, 24%, 26%)',
   pink: 'hsl(357, 100%, 86%)',
   lightGreyBlue: 'hsl(239, 57%, 85%)',
   red: 'hsl(358, 79%, 66%)',
   blue: 'hsl(238, 40%, 52%)',
   hoverTransition: '0.2s ease-in-out',
   fwLight: 400,
   fwMedium: 500,
   fwBold: 700,
}
