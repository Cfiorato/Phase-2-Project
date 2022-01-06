function CommentCard({ comment }){
  return(
    <div className="comment">
      <h3>{comment.user}:</h3>
      <p>{comment.comment}</p>
    </div>
  )
}

export default CommentCard