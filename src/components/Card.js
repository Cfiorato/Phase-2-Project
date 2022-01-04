import React, { useState } from 'react';


function Card({ img, title, artist, video, album, genre, producers, lyrics, released, comments }) {
    const [liked, setLiked] = useState(false)

    function toggleLiked(){
        liked ? setLiked(false) : setLiked(true)
    }

    return (
        <div>
            <div style={{background: {img}}}>
                <h2>{title}-{artist}</h2>
            </div>
            <div>
                <h3 id='album'>Album: {album}</h3>
                <h3 id='genre'>Genre: {genre}</h3>
                <a id='link' href={lyrics}>Lyrics</a>
                <h3 id='producers'>Producer(s): {producers}</h3> 
                <h3 id='released'>Release Date: {released}</h3>
                <button onClick={toggleLiked}> {liked ? 'Remove From Playlist':'Add to Playlist 💙' }</button>
            </div>
            <div>
                <h3 id='comment-header'>Comments</h3>
            </div>
        </div>
    )
}

export default Card