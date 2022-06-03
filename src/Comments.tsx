import React from 'react'
import CommentsList from './styles/CommentsList'
import data from './data.json'
import { useCommentsContext } from './hooks/useCommentsContext'
import CommentListItem from './CommentListItem'

const Comments: React.FC = () => {
   const { comments } = useCommentsContext()

   const printComments = () => {
      const results = comments.map((comment, idx) => {
         const {
            user: { username },
            createdAt,
         } = data.comments[idx]

         const replyComments = comment.replies.map((reply) => (
            <CommentListItem
               {...reply}
               key={reply.id}
               idx={idx}
               id={reply.id}
               userName={data.comments[idx].user.username}
               createdAt={createdAt}
            />
         ))

         return (
            <>
               <CommentListItem
                  key={comment.id}
                  {...comment}
                  idx={idx}
                  createdAt={createdAt}
                  userName={username}
               />
               {replyComments}
            </>
         )
      })

      return results
   }

   return (
      <CommentsList data-testid="comments-list">{printComments()}</CommentsList>
   )
}

export default Comments
