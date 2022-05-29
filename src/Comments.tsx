import React from 'react'
import CommentsList from './styles/CommentsList'
import CommentListItem from './styles/CommentListItem'

// As you loop over app state
// can access data json at same time with same idx for other data

const Comments: React.FC = () => {
   return (
      <CommentsList>
         <CommentListItem>
            <h2>Test name</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Doloremque provident omnis error labore odio molestias corporis,
               optio, nesciunt dolor sunt excepturi. Repudiandae possimus eaque,
               quae et debitis rerum eum velit.
            </p>
         </CommentListItem>
      </CommentsList>
   )
}

export default Comments
