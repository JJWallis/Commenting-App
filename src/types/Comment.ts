type Replies = Omit<Comment, 'replies'>[]

export interface Comment {
   id: number
   content: string
   score: number
   replies: Replies
}

export type CommentActions =
   | {
        type: 'ADD_COMMENT'
        payload: Comment
     }
   | {
        type: 'DELETE_COMMENT'
        payload: number
     }
