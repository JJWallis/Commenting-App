import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'

const App: React.FC = () => {
   return (
      <>
         <ThemeProvider theme={Theme}>
            <GlobalStyles />
            <CtWrapper>
               <Comments />
            </CtWrapper>
         </ThemeProvider>
      </>
   )
}

export default App
