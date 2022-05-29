import React, { createContext } from 'react'
import { Comment, CommentActions } from './types/Comment'

export const CommentsContext = createContext<{
   comments: Comment[]
   dispatch: React.Dispatch<CommentActions>
} | null>(null)

interface Props {
   children: React.ReactNode
   comments: Comment[]
   dispatch: React.Dispatch<CommentActions>
}

export const CommentsProvider: React.FC<Props> = ({
   children,
   comments,
   dispatch,
}) => {
   return (
      <CommentsContext.Provider value={{ comments, dispatch }}>
         {children}
      </CommentsContext.Provider>
   )
}
