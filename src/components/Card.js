import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard'


function Card({ currentSong, comments, handleLike, userName }) {
    let [kComment, setKComment] = useState("")
    let [commentList, setCommentList] = useState([])
    let [userComment, setUserComment] = useState('')

    const { id, song, artist, video, album, genre, producers, lyrics, released, liked } = currentSong
    
    

    function toggleLiked(){
        handleLike(!liked)
    }    
    
    useEffect(() => {setCommentList(comments)}, [comments])

    useEffect(() => {
        fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => setKComment(data.quote))
        
    }, [])
    
    let commentCards = commentList ? 
        commentList.map(comment => <CommentCard key={comment.id} comment={comment} />)
        : 
        <div></div>
    
    let postedUserComment = userComment ? 
        <div className="comment">
            <h3>{userName ? userName : "Anonymous"}</h3>
            <p>{userComment}</p>
        </div> 
        : 
        <div></div>

    function handleComment(e) {
        e.preventDefault()
        setUserComment(e.target.newComment.value)
        e.target.reset()
    }
    
    return (
        <div id='songCard-div' style={{
            background: "white",
            width: '750px',
            marginLeft: '390px',
            padding: '10px',
            lineHeight: '4px',
            borderRadius: '15px',
        }}>
            <div>
                <h2>{song} - {artist}</h2>
            </div>
            <div style={{ marginLeft:'60px', marginTop: '20px'}}>
                <ReactPlayer url={video} />
            </div>
            <div className='card-container'>
                <h3 id='album'>Album: {album}</h3>
                <h3 id='genre'>Genre: {genre}</h3>
                <a id='link' href={lyrics}>Lyrics</a>
                <h3 id='producers'>Producer(s): {producers}</h3> 
                <h3 id='released'>Release Date: {released}</h3>
                <button id={id} onClick={toggleLiked}> {liked ? 'Remove From Playlist':'Add to Playlist 💙' }</button>
            </div>
            <div>
                <h3 id='comment-header'>Comments</h3>
            </div>
            <form className='comment-form' onSubmit={(e) => handleComment(e)}>
                <h3>Leave a Comment</h3>
                <textarea className="text-box" type='input' name='newComment'></textarea>
                <br/>
                <input className="form-button" type='submit' value='Submit' />
            </form>
            <div className='comment'>
                <h3>@KanyeWest:</h3>
                <p>{kComment}</p> 
            </div>
            {commentCards}
            {postedUserComment}
        </div>
    )
}

export default Card