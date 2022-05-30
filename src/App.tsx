import React, { useEffect, useReducer } from 'react'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'
import data from './data.json'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { Comment, CommentActions } from './types/Comment'
import { CommentsProvider } from './CommentsContext'

function retrieveComments(): Comment[] | null {
   const result = localStorage.getItem('comments')
   return result ? JSON.parse(result) : null
}

function getGlobalState() {
   const comments = retrieveComments() || data.comments

   const globalState = comments.reduce(
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

   useEffect(() => {
      localStorage.setItem('comments', JSON.stringify(comments))
   }, [comments])

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
