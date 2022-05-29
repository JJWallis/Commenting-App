import React, { useReducer } from 'react'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { Comment, CommentActions } from './types/Comment'
import { CommentsProvider } from './CommentsContext'

function getGlobalState() {
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
            <CommentsProvider comments={comments} dispatch={dispatch}>
               <GlobalStyles />
               <CtWrapper>
                  <Comments />
               </CtWrapper>
            </CommentsProvider>
         </ThemeProvider>
      </>
   )
}

export default App
