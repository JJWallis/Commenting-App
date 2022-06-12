import React, { createContext } from 'react'
import { Comment } from './types/Comment'

export const CommentsContext = createContext<Comment[] | null>(null)

interface Props {
   children: React.ReactNode
   comments: Comment[]
}

export const CommentsProvider: React.FC<Props> = ({ children, comments }) => {
   return (
      <CommentsContext.Provider value={comments}>
         {children}
      </CommentsContext.Provider>
   )
}
