export interface Comment {
   id: number
   content: string
   score: number
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
