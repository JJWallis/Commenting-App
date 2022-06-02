import React from 'react'

interface Props {
   action: string
   count: number
   onClick: (increment: string) => void
   idx: number
}

const CounterButton: React.FC<Props> = ({ count, onClick, action, idx }) => {
   const dataId = 'decrement-comment'

   return <button onClick={() => onClick(action)}>{action}</button>
}

export default CounterButton
