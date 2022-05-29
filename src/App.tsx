import React, { useReducer } from 'react'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'
import data from './data.json'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { Comment, CommentActions } from './types/Comment'
import { CommentsProvider } from './CommentsContext'

function getGlobalState() {
   // check local storage first if falsy then continue
   const globalState = data.comments.reduce(
      (acc: Comment[], { id, content, score, replies }) => {
         return [
            ...acc,
            {
               id,
               content,
               score,
               replies: replies.map(({ id, content, score }) => ({
                  id,
                  content,
                  score,
               })),
            },
         ]
      },
      []
   )
   return globalState
}

function reducer(currState: Comment[], action: CommentActions) {
   switch (action.type) {
      case 'ADD_COMMENT': {
         return [...currState, action.payload]
      }
      case 'DELETE_COMMENT': {
         return currState.filter(({ id }) => id !== action.payload)
      }
      default:
         return currState
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
