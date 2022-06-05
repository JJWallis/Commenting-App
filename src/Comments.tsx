import React from 'react'
import { v4 as uuid } from 'uuid'
import CommentsList from './styles/CommentsList'
import data from './data.json'
import { useCommentsContext } from './hooks/useCommentsContext'
import CommentListItem from './CommentListItem'

// TODO -> dynamic ref assignment with Map here in parent
// store clickOutside hook here + pass dynamic elRef in from child
// init to null + helper func to initialize it + callbackRef passed down to child
// which is then run in a useEffect whenever whenever click outside current list item
// determine current listItem by whether textarea is enabled
// array of refs for each list item (not needed for callback refs since same)
// also pass in boolean to determine which textarea is enabled (disabled state)
// spread there into dependency array

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
               key={uuid()}
               {...reply}
               idx={idx}
               id={reply.id}
               userName={data.comments[idx].user.username}
               createdAt={createdAt}
            />
         ))

         return (
            <React.Fragment key={uuid()}>
               <CommentListItem
                  {...comment}
                  idx={idx}
                  createdAt={createdAt}
                  userName={username}
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
