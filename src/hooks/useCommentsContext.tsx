import { useContext } from 'react'
import { CommentsContext } from '../CommentsContext'

export const useCommentsContext = () => {
   const context = useContext(CommentsContext)
   if (!context)
      throw new Error(
         'useCommentsContext must be used within a CommentsContext'
      )
   return context
}
