import React from 'react'
import CommentsList from './styles/CommentsList'
import CommentListItem from './styles/CommentListItem'

const Comments: React.FC = () => {
   return (
      <CommentsList>
         <CommentListItem></CommentListItem>
      </CommentsList>
   )
}

export default Comments
