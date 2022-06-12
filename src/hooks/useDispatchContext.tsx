import { useContext } from 'react'
import { CommentsDispatchContext } from '../CommentsDispatchContext'

export const useDispatchContext = () => {
   const context = useContext(CommentsDispatchContext)
   if (!context)
      throw new Error(
         'useDispatchContext must be used within a useDispatchContextProvider'
      )
   return context
}
