import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import CommentCard from './CommentCard'


function Card({ currentSong, isLiked, setIsLiked, comments }) {
    let [kComment, setKComment] = useState("")
    let [commentList, setCommentList] = useState([])

    const { id, song, artist, video, album, genre, producers, lyrics, released } = currentSong
    
    

    function toggleLiked(){
        setIsLiked(!isLiked)
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
                <button id={id} onClick={toggleLiked}> {isLiked ? 'Remove From Playlist':'Add to Playlist 💙' }</button>
            </div>
            <div>
                <h3 id='comment-header'>Comments</h3>
            </div>
            <div className='comment'>
                <h3>@KanyeWest:</h3>
                <p>{kComment}</p> 
            </div>
            {commentCards}
        </div>
    )
}

export default Card