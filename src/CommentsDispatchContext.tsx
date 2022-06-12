import React, { createContext } from 'react'
import { CommentActions } from './types/Comment'

export const CommentsDispatchContext =
   createContext<React.Dispatch<CommentActions> | null>(null)

interface Props {
   children: React.ReactNode
   dispatch: React.Dispatch<CommentActions>
}

export const CommentsDispatchProvider: React.FC<Props> = ({
   children,
   dispatch,
}) => {
   return (
      <CommentsDispatchContext.Provider value={dispatch}>
         {children}
      </CommentsDispatchContext.Provider>
   )
}
