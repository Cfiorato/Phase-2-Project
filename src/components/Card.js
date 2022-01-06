import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react/cjs/react.development';


function Card({ currentSong, isLiked, setIsLiked }) {
    let [comment, setComment] = useState("")
    const { id, image, song, artist, video, album, genre, producers, lyrics, released, comments } = currentSong
    // const renderComments = comments.map(comment => comment.comment)

    console.log(comments)
    

    function toggleLiked(){
        setIsLiked(!isLiked)
    }    

    useEffect(() => {
        fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => setComment(data.quote))
    }, [])

    return (
        <div id='songCard-div' style={{
            background: "white",
            width: '750px',
            marginLeft: '390px',
            padding: '10px',
            lineHeight: '4px',
            borderRadius: '15px'
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
                <p>@KanyeWest: {comment}</p>
                {/* <p>{renderComments}</p> */}
            </div>
        </div>
    )
}

export default Card