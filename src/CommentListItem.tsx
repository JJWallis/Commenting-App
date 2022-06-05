import React, { useEffect, useRef, useState } from 'react'
import Counter from './Counter'
import { useCommentsContext } from './hooks/useCommentsContext'
import DeleteIcon from '../src/assets/icon-delete.svg'
import EditIcon from '../src/assets/icon-edit.svg'
import ReplyIcon from '../src/assets/icon-reply.svg'
import CommentButton from './styles/CommentButton'
import CommentContent from './styles/CommentContent'
import CommentItem from './styles/CommentListItem'
import CommentMeta from './styles/CommentMeta'
import UserName from './styles/UserName'
import { v4 } from 'uuid'

const useHandleClickOutside = <T extends React.RefObject<HTMLElement>>(
   elRef: T,
   callback: any
) => {
   const callbackRef = useRef(callback)

   useEffect(() => {
      const onClick = (e: MouseEvent) => {
         const target = e.target as HTMLElement
         if (elRef.current && !elRef.current.contains(target)) {
            callbackRef.current()
         }
      }

      document.addEventListener('click', onClick, true)
      return () => {
         document.removeEventListener('click', onClick, true)
      }
   }, [elRef, callbackRef])
}

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
   const listItemRef = useRef<HTMLLIElement>(null)
   useHandleClickOutside(listItemRef, () => {
      if (!input.disabled) setInput({ ...input, disabled: !input.disabled })
   })

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
      <CommentItem key={v4()} ref={listItemRef}>
         <CommentMeta header>
            <CommentMeta>
               <UserName>{userName}</UserName>
               <UserName>{createdAt}</UserName>
            </CommentMeta>
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
               }}
            >
               <CommentButton
                  iconSrc={EditIcon}
                  data-testid={`edit-comment-btn-${idx}`}
                  onClick={onSaveClick}
               >
                  {input.disabled ? 'Edit' : 'Save'}
               </CommentButton>
               <CommentButton
                  delete
                  iconSrc={DeleteIcon}
                  data-testid={`delete-comment-btn-${idx}`}
                  onClick={() => dispatch({ type: 'DELETE_COMMENT', id })}
               >
                  Delete
               </CommentButton>
               <CommentButton
                  iconSrc={ReplyIcon}
                  data-testid={`reply-comment-btn-${idx}`}
                  onClick={createReplyComment}
               >
                  Reply
               </CommentButton>
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
