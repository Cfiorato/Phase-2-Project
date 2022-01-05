import React, { useState } from 'react';
import ReactPlayer from 'react-player';


function Card({ currentSong, liked, setLiked }) {
    
    

    const { image, song, artist, video, album, genre, producers, lyrics, released, comments } = currentSong

    function toggleLiked(){
        liked ? setLiked(false) : setLiked(true)
    }

    return (
        <div>
            <div>
                <h2>{song} - {artist}</h2>
            </div>
            <div style={{ marginLeft:'430px', marginTop: '20px'}}>
                <ReactPlayer url={video} />
            </div>
            <div className='card-container'>
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