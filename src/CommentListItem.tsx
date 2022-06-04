import React, { useEffect, useRef, useState } from 'react'
import Counter from './Counter'
import { useCommentsContext } from './hooks/useCommentsContext'
import CommentContent from './styles/CommentContent'
import CommentItem from './styles/CommentListItem'
import CommentMeta from './styles/CommentMeta'
import UserName from './styles/UserName'

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

   const createReplyComment = () => {
      const replyComment = {
         id: Date.now(),
         content: 'test reply comment',
         score: 0,
         replies: [],
      }
      dispatch({ type: 'REPLY_COMMENT', id, comment: replyComment })
   }

   useEffect(() => {
      if (!input.disabled) inputRef.current?.focus()
      // if (input.disabled)
      // dispatch({ type: 'UPDATE_COMMENT', id, content: input.value })
      // TODO -> React v18 feats to fix
   }, [input.disabled])

   return (
      <CommentItem key={id}>
         <CommentMeta header>
            <CommentMeta>
               <UserName>{userName}</UserName>
               <UserName>{createdAt}</UserName>
            </CommentMeta>
            <div>
               <button
                  data-testid={`edit-comment-btn-${idx}`}
                  onClick={onSaveClick}
               >
                  {input.disabled ? 'Edit' : 'Save'}
               </button>
               <button
                  data-testid={`delete-comment-btn-${idx}`}
                  onClick={() => dispatch({ type: 'DELETE_COMMENT', id })}
               >
                  Delete
               </button>
               <button
                  data-testid={`reply-comment-btn-${idx}`}
                  onClick={createReplyComment}
               >
                  Reply
               </button>
            </div>
         </CommentMeta>
         <CommentContent
            ref={inputRef}
            disabled={input.disabled}
            data-testid={`edit-comment-input-${idx}`}
            onChange={(e) => setInput({ ...input, value: e.target.value })}
            minLength={10}
            value={input.value}
         />

         <Counter id={id} score={score} idx={idx} />
      </CommentItem>
   )
}

export default CommentListItem
