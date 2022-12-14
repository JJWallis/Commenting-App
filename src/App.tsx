import React, { useEffect, useReducer } from 'react'
import CtWrapper from './styles/ContainerWrapper'
import GlobalStyles from './styles/GlobalStyles'
import Comments from './Comments'
import data from './data.json'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/Theme'
import { Comment, CommentActions } from './types/Comment'
import { CommentsProvider } from './CommentsContext'
import { CommentsDispatchProvider } from './CommentsDispatchContext'

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
         return [...currState, action.comment]
      }
      case 'UPDATE_COMMENT': {
         const curr = [...currState]
         const desiredComment = curr.find(({ id }) => id === action.id)
         if (desiredComment) desiredComment.content = action.content
         return curr
      }
      case 'UPDATE_SCORE': {
         const curr = [...currState]
         if (!action.isReply) {
            const desiredScore = curr.find(({ id }) => id === action.id)
            if (desiredScore) desiredScore.score = action.score
         } else {
            curr.forEach(({ replies }) => {
               if (replies.length) {
                  const desiredReply = replies.find(
                     ({ id }) => id === action.id
                  )
                  if (desiredReply) desiredReply.score = action.score
               }
            })
            return curr
         }

         return curr
      }
      case 'REPLY_COMMENT': {
         const curr = [...currState]
         const desiredComment = curr.find(({ id, replies }) =>
            !action.isReply
               ? id === action.id
               : replies.find((reply) => reply.id === action.id)
         )
         if (
            !desiredComment?.replies.find(({ id }) => id === action.comment.id)
         )
            desiredComment?.replies.push(action.comment)
         return curr
      }
      case 'DELETE_COMMENT': {
         const curr = [...currState]
         if (!action.isReply) {
            return curr.filter(({ id }) => id !== action.id)
         } else {
            return curr.map((comment) => ({
               ...comment,
               replies: comment.replies.filter(({ id }) => id !== action.id),
            }))
         }
      }
      default:
         return currState
   }
}

localStorage.clear()

const App: React.FC = () => {
   const [comments, dispatch] = useReducer(reducer, [], getGlobalState)

   useEffect(() => {
      localStorage.setItem('comments', JSON.stringify(comments))
   }, [comments])

   return (
      <>
         <ThemeProvider theme={Theme}>
            <CommentsProvider comments={comments}>
               <CommentsDispatchProvider dispatch={dispatch}>
                  <GlobalStyles />
                  <CtWrapper>
                     <Comments />
                  </CtWrapper>
               </CommentsDispatchProvider>
            </CommentsProvider>
         </ThemeProvider>
      </>
   )
}

export default App
