import React from 'react'
import { useCommentsContext } from './hooks/useCommentsContext'

interface Props {
   action: string
   idx: number
   id: number
   score: number
}

const CounterButton: React.FC<Props> = ({ action, idx, id, score }) => {
   const dataTestId = `comment-${action}-${idx}`
   const scoreAmount = action === 'increment' ? 1 : -1
   const { dispatch } = useCommentsContext()

   return (
      <button
         data-testid={dataTestId}
         onClick={() =>
            dispatch({ type: 'UPDATE_SCORE', id, score: score + scoreAmount })
         }
      >
         {action}
      </button>
   )
}

export default CounterButton
