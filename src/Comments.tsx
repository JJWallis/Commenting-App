import React, { useState } from 'react'
import CommentsList from './styles/CommentsList'
import data from './data.json'
import CommentListItem from './styles/CommentListItem'
import { useCommentsContext } from './hooks/useCommentsContext'

// As you loop over app state
// can access data json at same time with same idx for other data

// uuid for adding comments

const Comments: React.FC = () => {
   const { comments, dispatch } = useCommentsContext()
   const [editable, setEditable] = useState(false)

   const printComments = () => {
      const results = comments.map(({ id, content, score }, idx) => {
         const { user, ...curr } = data.comments[idx]

         return (
            <CommentListItem>
               <h2>{user.username}</h2>
               <p>{curr.createdAt}</p>
               <input
                  value={content}
                  disabled={editable}
                  // edit comment
               />
               <button onClick={() => setEditable(!editable)}>Edit</button>
               <button
                  onClick={() =>
                     dispatch({ type: 'DELETE_COMMENT', payload: id })
                  }
               >
                  Delete
               </button>
            </CommentListItem>
         )
      })

      return results
   }

   return (
      <CommentsList data-testid="comments-list">
         <CommentListItem>
            {/* <h2>Test name</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Doloremque provident omnis error labore odio molestias corporis,
               optio, nesciunt dolor sunt excepturi. Repudiandae possimus eaque,
               quae et debitis rerum eum velit.
            </p> */}
         </CommentListItem>
      </CommentsList>
   )
}

export default Comments
