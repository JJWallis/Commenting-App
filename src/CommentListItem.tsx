import React, { useEffect, useRef, useState } from 'react'
import Counter from './Counter'
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
   const inputRef = useRef<HTMLTextAreaElement>(null)

   const onSaveClick = () => {
      setInput({ ...input, disabled: !input.disabled })
      if (!input.disabled)
         dispatch({ type: 'UPDATE_COMMENT', id, content: input.value })
   }

   useEffect(() => {
      if (!input.disabled) inputRef.current?.focus()
      // if (input.disabled)
      // dispatch({ type: 'UPDATE_COMMENT', id, content: input.value })
      // TODO -> React v18 feats to fix
   }, [input.disabled])

   return (
      <CommentItem key={id}>
         <h2>{userName}</h2>
         <p>{createdAt}</p>
         <textarea
            ref={inputRef}
            disabled={input.disabled}
            data-testid={`edit-comment-input-${idx}`}
            onChange={(e) => setInput({ ...input, value: e.target.value })}
            minLength={10}
            value={input.value}
         />
         <button data-testid={`edit-comment-btn-${idx}`} onClick={onSaveClick}>
            {input.disabled ? 'Edit' : 'Save'}
         </button>
         <button
            data-testid={`delete-comment-btn-${idx}`}
            onClick={() => dispatch({ type: 'DELETE_COMMENT', id })}
         >
            Delete
         </button>
         <Counter id={id} score={score} idx={idx} />
      </CommentItem>
   )
}

export default CommentListItem
