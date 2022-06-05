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
        comment: Comment
     }
   | {
        type: 'UPDATE_COMMENT'
        id: number
        content: string
     }
   | {
        type: 'DELETE_COMMENT'
        id: number
        isReply: boolean | undefined
     }
   | {
        type: 'UPDATE_SCORE'
        id: number
        score: number
        isReply: boolean | undefined
     }
   | {
        type: 'REPLY_COMMENT'
        id: number
        comment: Comment
     }
