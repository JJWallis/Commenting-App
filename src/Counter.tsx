import React from 'react'
import CounterButton from './CounterButton'
import CounterContainer from './styles/CounterContainer'
import CounterValue from './styles/CounterValue'

interface Props {
   score: number
   idx: number
   id: number
   isReply?: boolean
}

const Counter: React.FC<Props> = ({ score, idx, id, isReply }) => {
   return (
      <CounterContainer>
         <CounterButton
            action={'increment'}
            idx={idx}
            id={id}
            score={score}
            isReply={isReply}
         />
         <CounterValue data-testid={`comment-score-${idx}`}>
            {score}
         </CounterValue>
         <CounterButton
            action={'decrement'}
            idx={idx}
            id={id}
            score={score}
            isReply={isReply}
         />
      </CounterContainer>
   )
}
export default Counter
