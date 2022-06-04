import React from 'react'
import CounterButton from './CounterButton'
import CounterContainer from './styles/CounterContainer'
import CounterValue from './styles/CounterValue'

interface Props {
   score: number
   idx: number
   id: number
}

const Counter: React.FC<Props> = ({ score, idx, id }) => {
   return (
      <CounterContainer>
         <CounterButton action={'increment'} idx={idx} id={id} score={score} />
         <CounterValue data-testid={`comment-score-${idx}`}>
            {score}
         </CounterValue>
         <CounterButton action={'decrement'} idx={idx} id={id} score={score} />
      </CounterContainer>
   )
}
export default Counter
