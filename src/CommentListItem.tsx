import React, { useEffect, useRef, useState } from 'react'
import { useCommentsContext } from './hooks/useCommentsContext'
import CommentItem from './styles/CommentListItem'

interface Props {
   id: number
   content: string
   score: number
   createdAt: string
   userName: string
   idx: number
}

const CommentListItem: React.FC<Props> = ({
   id,
   content,
   score,
   userName,
   createdAt,
   idx,
}) => {
   const [input, setInput] = useState({
      disabled: true,
      value: content,
   })
   const { dispatch } = useCommentsContext()
   const inputRef = useRef<HTMLInputElement>(null)

   //    when you click save btn -> dispatch update comment action

   useEffect(() => {
      if (!input.disabled) inputRef.current?.focus()
   }, [input.disabled])

   return (
      <CommentItem key={id}>
         <h2>{userName}</h2>
         <p>{createdAt}</p>
         <input
            value={input.value}
            disabled={input.disabled}
            ref={inputRef}
            data-testid={`edit-comment-input-${idx}`}
            onChange={(e) => setInput({ ...input, value: e.target.value })}
         />
         <button
            data-testid={`edit-comment-btn-${idx}`}
            onClick={() => setInput({ ...input, disabled: !input.disabled })}
         >
            {input.disabled ? 'Edit' : 'Save'}
         </button>
         <button
            data-testid={`delete-comment-btn-${idx}`}
            onClick={() => dispatch({ type: 'DELETE_COMMENT', payload: id })}
         >
            Delete
         </button>
      </CommentItem>
   )
}

export default CommentListItem
