import React from 'react'
import { v4 as uuid } from 'uuid'
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
               isReply
               key={uuid()}
               {...reply}
               idx={idx}
               userName={data.comments[idx]?.replies[idx]?.user?.username}
               createdAt={data.comments[idx]?.replies[idx]?.createdAt}
            />
         ))

         return (
            <React.Fragment key={uuid()}>
               <CommentListItem
                  {...comment}
                  idx={idx}
                  userName={username}
                  createdAt={createdAt}
               />
               <CommentsList replies data-testid="replies-list">
                  {replyComments}
               </CommentsList>
            </React.Fragment>
         )
      })

      return results
   }

   return (
      <CommentsList data-testid="comments-list">{printComments()}</CommentsList>
   )
}

export default Comments
