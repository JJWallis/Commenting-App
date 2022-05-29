import React, { useReducer } from 'react'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { Comment, CommentActions } from './types/Comment'

function getGlobalState(): Comment[] {
   return []
}

function reducer(initialState: Comment[], action: CommentActions) {
   const { type, payload } = action // BUG?
   switch (type) {
      case 'ADD_COMMENT': {
         return [...initialState, payload]
      }
      default:
         return initialState
   }
}

const App: React.FC = () => {
   const [comments, dispatch] = useReducer(reducer, [], getGlobalState)

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
