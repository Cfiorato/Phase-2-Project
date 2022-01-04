import React, { useState } from 'react';
import ReactPlayer from 'react-player';


function Card({ currentSong }) {
    const [liked, setLiked] = useState(false)
    

    const { image, song, artist, video, album, genre, producers, lyrics, released, comments } = currentSong

    console.log(image)

    function toggleLiked(){
        liked ? setLiked(false) : setLiked(true)
    }

    return (
        <div>
            <div style={{
                    backgroundImage: `url(${image})`, height:'300px', width:'600px', marginLeft:'450px'
                }}>
                <h2 style={{ color: 'white', 
                        textShadowColor:'black',
                        textShadowOffset: { width: -1, height: 0 },
                        textShadowRadius: 10
                    
                 }}>
                    {song} - {artist}
                </h2>
            </div>
            <div style={{ margin:'20px'}}>
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