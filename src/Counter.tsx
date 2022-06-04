import React from 'react'
import CounterButton from './CounterButton'
import CounterContainer from './styles/CounterContainer'

interface Props {
   score: number
   idx: number
   id: number
}

const Counter: React.FC<Props> = ({ score, idx, id }) => {
   return (
      <CounterContainer>
         <CounterButton action={'increment'} idx={idx} id={id} score={score} />
         <p data-testid={`comment-score-${idx}`}>{score}</p>
         <CounterButton action={'decrement'} idx={idx} id={id} score={score} />
      </CounterContainer>
   )
}
export default Counter
