import React, { useState } from 'react'
import CounterButton from './CounterButton'

interface Props {
   score: number
   idx: number
}

const Counter: React.FC<Props> = ({ score, idx }) => {
   const [count, setCount] = useState(score)

   const onClick = (increment: string) => {
      const action = increment === 'increment' ? 1 : -1
      setCount((prev) => prev + action)
   }

   return (
      <div>
         <CounterButton
            count={count}
            onClick={onClick}
            action={'increment'}
            idx={idx}
         />
         <p data-tesid={`comment-score-${idx}`}>{score}</p>
         <CounterButton
            action={'decrement'}
            idx={idx}
            onClick={onClick}
            count={count}
         />
      </div>
   )
}
export default Counter
