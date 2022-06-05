import React from 'react'
import CounterBtn from './styles/CounterButton'
import IconPus from '../src/assets/icon-plus.svg'
import IconMinus from '../src/assets/icon-minus.svg'
import { useCommentsContext } from './hooks/useCommentsContext'

interface Props {
   action: string
   idx: number
   id: number
   score: number
   isReply?: boolean
}

const CounterButton: React.FC<Props> = ({
   action,
   idx,
   id,
   score,
   isReply,
}) => {
   const [scoreAmount, iconSrc] =
      action === 'increment' ? [1, IconPus] : [-1, IconMinus]
   const { dispatch } = useCommentsContext()

   return (
      <CounterBtn
         data-testid={`comment-${action}-${idx}`}
         onClick={() =>
            dispatch({
               type: 'UPDATE_SCORE',
               id,
               score: score + scoreAmount,
               isReply,
            })
         }
         iconSrc={iconSrc}
      />
   )
}

export default CounterButton
