import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'

// function getGlobalState() {}

// function reducer(initialState, action) {
//    switch (action.type) {
//       case 'ADD_COMMENT':
//          return {
//             ...initialState,
//             comments: [...initialState.comments, action.payload],
//          }
//       default:
//          return initialState
//    }
// }

// const [comments, dispatch] = useReducer(reducer, [], getGlobalState)

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
